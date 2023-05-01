import * as React from 'react';
import {
  TextField, Stack, Autocomplete, Button
} from '@mui/material';
import { CustomLabel } from '../../utils/components/CustomLabel/CustomLabel.jsx';
import { FormSection } from '../../utils/components/FormSection/FormSection.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { listCoursesICEx } from '../../utils/requests/Courses/listCoursesICEx';
import { postMateria } from '../../utils/requests/Courses/postMateria';

export function CourseRegister() {
  const navigate = useNavigate();
  const [courseNamesICEx, setCourseNamesICEx] = React.useState([]);
  const [coursesICEx, setCoursesICEx] = React.useState([]);
  const [courseClassesICEx, setCourseClassesICEx] = React.useState([]);
  const [idCourseChosen, setIdCourseChosen] = React.useState(undefined);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const coursesICExBack = await listCoursesICEx();
        setCoursesICEx(coursesICExBack);
        const courseNames = coursesICExBack.map(c => c.nome);
        const courseNamesSet = new Set(courseNames);
        const courseNamesUnique = Array.from(courseNamesSet);
        setCourseNamesICEx(courseNamesUnique);
      } catch (err) {
        // alertError(err);
        console.log(err);
      }
    };
    fetch();
  }, []);

  function handleChoseMateria(value) {
    console.log(`Filtra ai ${value}`);
    setCourseClassesICEx(coursesICEx.filter(c => c.nome === value));
    console.log(coursesICEx.filter(c => c.nome === value));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!idCourseChosen) {
      alert("Escolha uma turma!");
      return
    }
    postMateria(idCourseChosen);
    navigate(-1);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '35px' }}>
      <FormSection title="Dados da Matéria">
        <CustomLabel>Selecione a matéria que deseja cadastrar</CustomLabel>
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Autocomplete
            className={styles.fieldSetSelect}
            disableClearable
            id="materia"
            size="small"
            options={courseNamesICEx}
            // value={materiaChosen}
            onChange={(_, value) => handleChoseMateria(value)}
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
            options={courseClassesICEx.map(c => ({ id: c.id, label: c.turma }))}
            // value={chosenChips}
            onChange={(_, value) => setIdCourseChosen(value.id)}
            noOptionsText="Nenhum Escolhido"
            ChipProps={{ color: 'primary' }}
            renderInput={(params) => <TextField {...params} label="Turma" />}
          />
        </Stack>
      </FormSection>
      <br />
      <br />
      <FormSection title="Dados de Faltas">
        <CustomLabel>Adicione o número de faltas inicial (opicional)</CustomLabel>
        <TextField type='number' size="small"
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
