import * as React from 'react';
import {
    Container,
    Toolbar,
    Box,
    Button,
    Paper,
    useTheme,
    TextField
} from '@mui/material';
import {
    AddCircleOutline as AddCircleOutlineIcon,
    Close as CloseIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';
import { WaitingFetchCircle } from '../../utils/components/WaitingFetchCircle/WaitingFetchCircle';
import { FormSection } from '../../utils/components/FormSection/FormSection.jsx';
import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCourse } from '../../utils/requests/Courses/deleteCourse.jsx';
import { CourseDataById } from '../../utils/requests/Courses/CourseDataById.jsx';
import { ConfirmModal } from '../../utils/components/ConfirmModal/ConfirmModal';

export function CourseProfile() {
    const { id } = useParams();
    const { navigate } = useNavigate();
    const { palette } = useTheme();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [courseData, setCourseData] = React.useState({ codigo: "default" });

    React.useEffect(() => {
        const fetch = async () => {
            try {
                if (!id)
                    throw new Error("Não foi possível pegar os dados dessa matéria");
                const courseDataBack = await CourseDataById(id);
                console.log("courseDataBack");
                console.log(courseDataBack);
                setCourseData(courseDataBack);
            } catch (err) {
                console.log(err);
            }
        };
        fetch();
    }, []);

    async function confirmDelete() {
        try {
            if (!id)
                throw new Error("Não foi possível deletar a matéria");
            await deleteCourse(id);
            navigate(-1);
        }
        catch (err) {
            console.log(err);
        }
    }

    if (courseData.codigo === "default") { return <WaitingFetchCircle /> }
    return (
        <div className="outlet" style={{ marginTop: '30px' }}>
            <Container maxWidth="lg">
                <div className={styles.divButtomHeader}>
                    <Button variant="contained" color="secondary"
                        onClick={() => setModalOpen(true)}
                        startIcon={
                            <DeleteIcon />}> Deletar Matéria
                    </Button>
                </div>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "100%",
                        height: "200%",
                    },
                }}>
                    <Paper variant="outlined" style={{
                        borderRadius: 10,
                        padding: 20,
                        marginBottom: 70
                    }}>
                        <FormSection title={courseData.nome}>
                            <TextField
                                id="standard-required"
                                label="Código"
                                defaultValue={courseData.codigo}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                id="standard-required"
                                label="Turma"
                                defaultValue={courseData.turma}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                id="standard-required"
                                label="Horário"
                                defaultValue={courseData.inicio}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                id="standard-required"
                                label="Dias"
                                defaultValue={courseData.dias}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                id="standard-required"
                                label="Sala"
                                defaultValue={courseData.sala}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                id="standard-required"
                                label="Total de Faltas"
                                defaultValue={courseData.faltas}
                                variant="standard"
                                sx={{ label: { color: palette.primary.main } }}
                                InputProps={{ readOnly: true }}
                            />
                        </FormSection>
                        <br /><br />
                        <FormSection title="Gerenciar Faltas">
                            <div className={styles.faltasGroup}>
                                <TextField
                                    id="standard-required"
                                    label="Número de Faltas"
                                    defaultValue="0"
                                    type='number'
                                    variant="standard"
                                    sx={{ label: { color: palette.primary.main } }}
                                />
                                <Button variant="outlined" color="secondary"
                                    onClick={() => alert("EXCLUIR FALTAS")}
                                    startIcon={
                                        <CloseIcon sx={{ color: palette.secondary.main }}
                                        />}>
                                    Excluir Faltas</Button>
                                <Button variant="outlined" color="primary"
                                    onClick={() => alert("ADICIONAR FALTAS")}
                                    startIcon={
                                        <AddCircleOutlineIcon sx={{ color: palette.primary.main }}
                                        />}>
                                    Adicionar Faltas </Button>
                            </div>
                        </FormSection>
                        <ConfirmModal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            title="Excluir Matéria"
                            content="Tem certeza que deseja excluir a matéria?"
                            onDelete={confirmDelete}
                        />
                    </Paper>
                </Box>
            </Container >
        </div >
    );
}
