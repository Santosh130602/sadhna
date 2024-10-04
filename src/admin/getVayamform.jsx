
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

const GetVayamFormData = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCandidate, setExpandedCandidate] = useState(null); 

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://localhost:4000/api/join/get-all-VayamApplication', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setCandidates(response.data);
      } catch (error) {
        setError('Error fetching candidates');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const toggleDetails = (id) => {
    setExpandedCandidate(prev => (prev === id ? null : id));
  };

  const students = candidates.filter(candidate => candidate.isStudent);
  const others = candidates.filter(candidate => !candidate.isStudent);

  return (

    <div className=' flex h-screen'>
      <Sidebar />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">VAYAM Candidates</h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Students</h2>
            {students.length === 0 ? (
              <p>No students found.</p>
            ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Father Name</th>
                    <th className="px-4 py-2">DOB</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <React.Fragment key={student._id}>
                      <tr>
                        <td className="border px-4 py-2">{student.name}</td>
                        <td className="border px-4 py-2">{student.fatherName}</td>
                        <td className="border px-4 py-2">{new Date(student.dob).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{student.gender}</td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => toggleDetails(student._id)}
                          >
                            {expandedCandidate === student._id ? 'Hide' : 'More'}
                          </button>
                        </td>
                      </tr>
                      {expandedCandidate === student._id && (
                        <tr>
                          <td colSpan="5" className="border px-4 py-2 bg-blue-50">
                            <div>
                              <p><strong>Email:</strong> {student.email}</p>
                              <p><strong>Phone:</strong> {student.phone}</p>
                              <p><strong>Aadhar:</strong> {student.aadhar}</p>
                              <p><strong>Education:</strong> {student.education}</p>
                              <p><strong>University Name:</strong> {student.universityName}</p>
                              <p><strong>University Address:</strong> {student.universityAddress?.address}, {student.universityAddress?.state}, {student.universityAddress?.district} - {student.universityAddress?.pincode}</p>
                              <p><strong>Permanent Address:</strong> {student.permanentAddress?.address}, {student.permanentAddress?.state}, {student.permanentAddress?.district} - {student.permanentAddress?.pincode}</p>
                              <p><strong>Amount:</strong> ₹{student.amount}</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="bg-green-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Other Candidates</h2>
            {others.length === 0 ? (
              <p>No other candidates found.</p>
            ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Father Name</th>
                    <th className="px-4 py-2">DOB</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {others.map(candidate => (
                    <React.Fragment key={candidate._id}>
                      <tr>
                        <td className="border px-4 py-2">{candidate.name}</td>
                        <td className="border px-4 py-2">{candidate.fatherName}</td>
                        <td className="border px-4 py-2">{new Date(candidate.dob).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{candidate.gender}</td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => toggleDetails(candidate._id)}
                          >
                            {expandedCandidate === candidate._id ? 'Hide' : 'More'}
                          </button>
                        </td>
                      </tr>
                      {expandedCandidate === candidate._id && (
                        <tr>
                          <td colSpan="5" className="border px-4 py-2 bg-green-50">
                            <div>
                              <p><strong>Email:</strong> {candidate.email}</p>
                              <p><strong>Phone:</strong> {candidate.phone}</p>
                              <p><strong>Aadhar:</strong> {candidate.aadhar}</p>
                              <p><strong>Education:</strong> {candidate.education}</p>
                              <p><strong>University Name:</strong> {candidate.universityName}</p>
                              <p><strong>University Address:</strong> {candidate.universityAddress?.address}, {candidate.universityAddress?.state}, {candidate.universityAddress?.district} - {candidate.universityAddress?.pincode}</p>
                              <p><strong>Permanent Address:</strong> {candidate.permanentAddress?.address}, {candidate.permanentAddress?.state}, {candidate.permanentAddress?.district} - {candidate.permanentAddress?.pincode}</p>
                              <p><strong>Amount:</strong> ₹{candidate.amount}</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVayamFormData;
