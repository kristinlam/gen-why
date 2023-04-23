import axios from 'axios';

const TOKEN = 'token';
const GET_SUBJECTS = 'GET_SUBJECTS';
const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
const UPDATE_PENDING_SUBJECTS = 'UPDATE_PENDING_SUBJECTS';
const DELETE_SUBJECT = 'DELETE_SUBJECT';

const _getSubjects = (subjects) => {
  return {
    type: GET_SUBJECTS,
    subjects,
  };
};

const _updateSubject = (subject) => {
  return {
    type: UPDATE_SUBJECT,
    subject,
  };
};

const _updatePendingSubjects = (subjects) => {
  return {
    type: UPDATE_PENDING_SUBJECTS,
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

export const updateSubject = (subject) => {
  return async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const { data: updated } = await axios.put(
      `/api/subjects/${subject.id}`,
      subject,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch(_updateSubject(updated));
  };
};

export const updatePendingSubjects = (subject) => {
  return (dispatch) => {
    dispatch(updateSubject(subject)).then(() => {
      dispatch(getSubjects('pending'));
    });
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
    case UPDATE_SUBJECT:
      return state.map((subject) =>
        subject.id === action.subject.id ? action.subject : subject
      );
    case UPDATE_PENDING_SUBJECTS:
      return action.subjects;
    case DELETE_SUBJECT:
      return state.filter((subject) => subject.id !== action.subject.id);
    default:
      return state;
  }
}
