import axios from 'axios';

const CREATE_SUBJECT = 'CREATE_SUBJECT';

const _createSubject = (subject) => {
  return {
    type: CREATE_SUBJECT,
    subject,
  };
};

export const createSubject = (story) => {
  return async (dispatch) => {
    const { data: subject } = await axios.post('/api/subjects', story);
    dispatch(_createSubject(subject));
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_SUBJECT:
      return action.subject;
    default:
      return state;
  }
}
