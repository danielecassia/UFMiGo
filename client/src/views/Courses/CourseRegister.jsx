import react from 'react';
import {
  TextField, Stack, Autocomplete, Button
} from '@mui/material';
import {CustomLabel} from '../../utils/components/CustomLabel/CustomLabel.jsx';
import {FormSection} from '../../utils/components/FormSection/FormSection.jsx';
import { useNavigate } from 'react-router-dom';
import {courses} from '../../utils/requests/MateriasUF';
import styles from './styles.module.scss';

function handleSubmit() {
  alert("cadastrando...");
}
export function CourseRegister() {
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit} style={{marginTop:'35px'}}>
      <FormSection title="Dados da Matéria">
        <CustomLabel>Selecione a matéria que deseja cadastrar</CustomLabel>
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Autocomplete
          className={styles.fieldSetSelect}
          disableClearable
          id="materia"
          size="small"
          options={courses.map(c=>({label:c.materia}))}
          // value={chosenChips}
          noOptionsText="Nenhum Escolhido"
          ChipProps={{ color: 'primary' }}
          renderInput={(params) =>
              <TextField {...params} 
              label="Matéria" />}
          />
        </Stack>
        <CustomLabel>Selecione a sua turma</CustomLabel>
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Autocomplete
          className={styles.fieldSetSelect}
          disableClearable
          id="horario"
          size="small"
          options={courses.map(c=>({label:c.turma}))}
          // value={chosenChips}
          noOptionsText="Nenhum Escolhido"
          ChipProps={{ color: 'primary' }}
          renderInput={(params) => <TextField {...params} label="Turma" />}
          />
        </Stack>
      </FormSection>
      <br/>
      <br/>
      <FormSection title="Dados de Faltas">
        <CustomLabel>Adicione o número de faltas inicial (opicional)</CustomLabel>
        <TextField  type='number' size="small"
          id="outlined-basic" label="Faltas"
          variant="outlined" />
        <div className={styles.formGroup}>
          <Button
            variant="outlined"
            size="large"
            fullWidth={true}
            type="button"
            color="secondary"
            onClick={() => navigate(-1)}>Cancelar</Button>

          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            color="primary"
            type="submit"
            >
            Cadastrar Matéria
          </Button>
        </div>
      </FormSection>
    </form>
  );
}
