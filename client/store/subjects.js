import axios from 'axios';

const GET_SUBJECTS = 'GET_SUBJECTS';

const _getSubjects = (subjects) => {
  return {
    type: GET_SUBJECTS,
    subjects,
  };
};

export const getSubjects = () => {
  return async (dispatch) => {
    const { data: subjects } = await axios.get('/api/subjects');
    dispatch(_getSubjects(subjects));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_SUBJECTS:
      return action.subjects;
    default:
      return state;
  }
}
