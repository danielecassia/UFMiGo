import react from 'react';
import {
    Container,
    Toolbar,
    Box,
    Button,
    Paper,
    Divider,
    TextField
} from '@mui/material';
import {CustomLabel} from '../../utils/components/CustomLabel/CustomLabel.jsx';
import {FormSection} from '../../utils/components/FormSection/FormSection.jsx';

export function CourseProfile() {
    return (
        <div className="outlet" style={{marginTop:'30px'}}>
            <Container maxWidth="lg">
                BOTAO DO MODAL
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
                        <FormSection title="NOME DA MATÉRIA">
                            <TextField
                                id="standard-required"
                                label="Código"
                                defaultValue="DCC024"
                                variant="standard"
                            />
                            <TextField
                                id="standard-required"
                                label="Turma"
                                defaultValue="TN1"
                                variant="standard"
                            />
                            <TextField
                                id="standard-required"
                                label="Horário"
                                defaultValue="19:00"
                                variant="standard"
                            />
                            <TextField
                                id="standard-required"
                                label="Dias"
                                defaultValue="Ter e Quin"
                                variant="standard"
                            />
                            <TextField
                                id="standard-required"
                                label="Número de Faltas"
                                defaultValue="4"
                                variant="standard"
                            />
                            <h5>OPÇÕES DE FALTA | BOTÕES</h5>
                            <h6>Cadastrar Falta     |     Deletar Falta</h6>
                        </FormSection>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}
