import axios from 'axios';

const TOKEN = 'token';
const GET_SUBJECTS = 'GET_SUBJECTS';
const DELETE_SUBJECT = 'DELETE_SUBJECT';

const _getSubjects = (subjects) => {
  return {
    type: GET_SUBJECTS,
    subjects,
  };
};

const _deleteSubject = (subject) => {
  return {
    type: DELETE_SUBJECT,
    subject,
  };
};

export const getSubjects = (status) => {
  return async (dispatch) => {
    const { data: subjects } = await axios.get(`/api/subjects/${status}`);
    dispatch(_getSubjects(subjects));
  };
};

export const deleteSubject = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const { data: subject } = await axios.delete(`/api/subjects/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(_deleteSubject(subject));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return action.subjects;
    case DELETE_SUBJECT:
      return state.filter((subject) => subject.id !== action.subject.id);
    default:
      return state;
  }
}
