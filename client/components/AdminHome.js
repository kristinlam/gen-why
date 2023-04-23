import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSubjects,
  deleteSubject,
  updatePendingSubjects,
} from '../store/subjects';
import Navbar from './Navbar';

const AdminHome = () => {
  const subjects = useSelector((state) => state.subjects);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects('pending'));
  }, []);

  const handleApprove = (subject) => {
    dispatch(updatePendingSubjects({ ...subject, status: 'approved' }));
  };

  const handleReject = (id) => {
    dispatch(deleteSubject(id));
  };

  const pendingSubjectsRows = subjects.map((subject) => (
    <tr key={subject.id}>
      <td className="px-6 py-4">
        <p className="font-bold">{subject.name}</p>
      </td>
      <td className="px-6 py-4">
        <a
          className="text-blue underline"
          href={subject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {subject.link}
        </a>
      </td>
      <td className="text-sm px-6 py-4 flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => handleApprove(subject)}
          className="uppercase bg-green text-white py-2 px-3 rounded-xl"
        >
          Approve
        </button>
        <button
          onClick={() => handleReject(subject.id)}
          className="bg-red uppercase text-white py-2 px-3 rounded-xl"
        >
          Reject
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="pb-12">
      <Navbar />

      <div className="mt-10 flex flex-col items-center px-3">
        <h1 className="text-center mb-10">Welcome, {username}</h1>
        <table className="table-fixed w-full lg:w-3/4 text-sm text-left bg-white rounded-2xl overflow-hidden">
          <thead className="text-xs uppercase bg-yellow">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Link</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray">{pendingSubjectsRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
