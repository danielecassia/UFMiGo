import * as React from 'react';
import {
  TextField, Stack, Autocomplete, Button
} from '@mui/material';
import { CustomLabel } from '../../utils/components/CustomLabel/CustomLabel.jsx';
import { FormSection } from '../../utils/components/FormSection/FormSection.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { listCoursesICEx } from '../../utils/requests/Courses/listCoursesICEx';
import { postCourse } from '../../utils/requests/Courses/postCourse.jsx';

export function CourseRegister() {
  const navigate = useNavigate();
  const [courseNamesICEx, setCourseNamesICEx] = React.useState([]);
  const [coursesICEx, setCoursesICEx] = React.useState([]);
  const [courseClassesICEx, setCourseClassesICEx] = React.useState([]);
  const [turmaChosen, setTurmaChosen] = React.useState(null);
  const [faltas, setFaltas] = React.useState(0);
  const updatBody = (value) => setBody({ ...setBody, ...value });

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
    setCourseClassesICEx(coursesICEx.filter(c => c.nome === value));
    setTurmaChosen(null);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!turmaChosen) {
      alert("Escolha uma turma!");
      return
    }
    let body = {
      id: turmaChosen.id,
      faltas: faltas
    };
    try {
      console.log(body);
      postCourse(body);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
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
            id="turma"
            size="small"
            options={courseClassesICEx.map(c => ({ id: c.id, label: c.turma }))}
            isOptionEqualToValue={(op, val) => op.id === val.id}
            onChange={(_, value) => setTurmaChosen(value)}
            value={turmaChosen}
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
          onChange={(e) => setFaltas(Number(e.target.value))}

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
