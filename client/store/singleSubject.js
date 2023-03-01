import axios from 'axios';

const GET_SUBJECT = 'GET_SUBJECT';
const CREATE_SUBJECT = 'CREATE_SUBJECT';

const _getSubject = (subject) => {
  return {
    type: GET_SUBJECT,
    subject,
  };
};

const _createSubject = (subject) => {
  return {
    type: CREATE_SUBJECT,
    subject,
  };
};

export const getSubject = (id) => {
  return async (dispatch) => {
    const { data: subject } = await axios.get(`/api/subjects/${id}`);
    dispatch(_getSubject(subject));
  };
};

export const createSubject = (id) => {
  return async (dispatch) => {
    const { data: subject } = await axios.post('/api/subjects', id);
    dispatch(_createSubject(subject));
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SUBJECT:
      return action.subject;
    case CREATE_SUBJECT:
      return action.subject;
    default:
      return state;
  }
}
