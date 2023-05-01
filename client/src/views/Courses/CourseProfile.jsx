import react from 'react';
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
import {CustomLabel} from '../../utils/components/CustomLabel/CustomLabel.jsx';
import {FormSection} from '../../utils/components/FormSection/FormSection.jsx';
import styles from './styles.module.scss';

export function CourseProfile() {
const {palette}= useTheme();
    return (
        <div className="outlet" style={{marginTop:'30px'}}>
            <Container maxWidth="lg">
                <div className={styles.divButtomHeader}>
                    <Button variant="contained" color="secondary"
                        onClick={() => alert("DELETAR MATÉRIA")}
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
                    <Paper variant="outlined"style={{
                        borderRadius: 10,
                        padding: 20,
                        marginBottom: 70
                    }}>
                        <FormSection title="Nome da Matéria">
                            <TextField
                                id="standard-required"
                                label="Código"
                                defaultValue="DCC024"
                                variant="standard"
                                // color="secondary"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                            <TextField
                                id="standard-required"
                                label="Turma"
                                defaultValue="TN1"
                                variant="standard"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                            <TextField
                                id="standard-required"
                                label="Horário"
                                defaultValue="19:00"
                                variant="standard"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                            <TextField
                                id="standard-required"
                                label="Dias"
                                defaultValue="Ter e Quin"
                                variant="standard"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                            <TextField
                                id="standard-required"
                                label="Sala"
                                defaultValue="ICEX 2008"
                                variant="standard"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                            <TextField
                                id="standard-required"
                                label="Total de Faltas"
                                defaultValue="4"
                                variant="standard"
                                sx={{label: {color:palette.primary.main} }}
                                InputProps={{readOnly: true}}
                            />
                        </FormSection>
                        <br/><br/>
                        <FormSection title="Gerenciar Faltas">
                            <div className={styles.faltasGroup}>
                                <TextField
                                    id="standard-required"
                                    label="Número de Faltas"
                                    defaultValue="0"
                                    type='number'
                                    variant="standard"
                                    sx={{label: {color:palette.primary.main} }}
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
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}
