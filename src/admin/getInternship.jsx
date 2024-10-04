import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

const GetInternshipsFormData = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCandidate, setExpandedCandidate] = useState(null); 
  const [searchUserId, setSearchUserId] = useState(''); 
  const [filteredInternships, setFilteredInternships] = useState([]); 

  const programs = [
    { name: "Vayam Valintor", value: "vayam valintor" },
    { name: "Monatring Valinter", value: "monatring valinter" },
    { name: "Yog Valintor", value: "yog valintor" },
    { name: "Yog Industry", value: "yog industry" },
    { name: "Ayurved Industry", value: "ayurved industry" },
  ];

  useEffect(() => {
    const fetchInternships = async () => {
      const token = localStorage.getItem('token'); 

      if (!token) {
        setError("You are not authenticated.");
        setLoading(false);
        return; 
      }

      try {
        const response = await axios.get('http://localhost:4000/api/join/get-all-internshipApplication', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setInternships(response.data);
        setFilteredInternships(response.data); 
      } catch (error) {
        setError('Error fetching internship data');
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);


  const handleSearchChange = (e) => {
    const value = e.target.value.trim().toLowerCase(); 
    setSearchUserId(value); 
  
    if (value) {
      const filtered = internships.filter(internship => internship.userId?.toLowerCase().includes(value));
      setFilteredInternships(filtered);
    } else {
      setFilteredInternships(internships);
    }
  };

  

  const filterCandidates = (programValue) => {
    return filteredInternships.filter(internship => internship.appliedFor === programValue);
  };

  const toggleCandidateDetails = (candidateId) => {
    setExpandedCandidate(prevId => (prevId === candidateId ? null : candidateId)); 
  };

  return (
    <div className='flex h-screen'>
      <Sidebar />

      <div className="p-4 w-full overflow-auto">
        <h1 className="text-4xl p-8 font-bold mb-8 underline text-center w-full" style={{ fontFamily: 'Sofadi One, sans-serif' }}>Internship Applications</h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={searchUserId}
            onChange={handleSearchChange}
            placeholder="Search by User ID"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-start gap-4 overflow-x-auto">
          {programs.map((program) => {
            const candidates = filterCandidates(program.value); 
            return (
              <div key={program.value} className="bg-gray-100 p-6 rounded-md shadow-md mb-10" style={{ width: '500px' }}>
                <h2 className="text-xl font-bold underline text-center" style={{ fontFamily: 'Sofadi One, sans-serif' }}>{program.name}</h2>

                {candidates.length === 0 ? (
                  <p>No candidates found for {program.name}.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full mt-2">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Father Name</th>
                          <th className="px-4 py-2">User ID</th>
                          <th className="px-4 py-2">Gender</th>
                          <th className="px-4 py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map(candidate => (
                          <React.Fragment key={candidate._id}>
                            <tr>
                              <td className="border px-4 py-2">{candidate.name}</td>
                              <td className="border px-4 py-2">{candidate.fatherName}</td>
                              <td className="border px-4 py-2">{candidate.userId}</td>
                              <td className="border px-4 py-2">{candidate.gender}</td>
                              <td className="border px-4 py-2">
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                  onClick={() => toggleCandidateDetails(candidate._id)}
                                >
                                  {expandedCandidate === candidate._id ? 'Hide' : 'More'}
                                </button>
                              </td>
                            </tr>
                            {expandedCandidate === candidate._id && (
                              <tr>
                                <td colSpan="5" className="border px-4 py-2 bg-blue-50">
                                  <table className="w-full">
                                    <thead>
                                      <tr>
                                        <th className="border px-4 py-2">Field</th>
                                        <th className="border px-4 py-2">Details</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Photo:</strong></td>
                                        <td className="border px-4 py-2">
                                          <img src={candidate.photo} alt="Intern" className="w-16 h-16 rounded mt-2" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Name:</strong></td>
                                        <td className="border px-4 py-2">{candidate.name}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Father Name:</strong></td>
                                        <td className="border px-4 py-2">{candidate.fatherName}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>DOB:</strong></td>
                                        <td className="border px-4 py-2">{new Date(candidate.dob).toLocaleDateString()}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Gender:</strong></td>
                                        <td className="border px-4 py-2">{candidate.gender}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Email:</strong></td>
                                        <td className="border px-4 py-2">{candidate.email}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Phone:</strong></td>
                                        <td className="border px-4 py-2">{candidate.phone}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Applied For:</strong></td>
                                        <td className="border px-4 py-2">{candidate.appliedFor}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Address:</strong></td>
                                        <td className="border px-4 py-2">{candidate.address.address}, {candidate.address.state}, {candidate.address.district} - {candidate.address.pincode}</td>
                                      </tr>
                                      <tr>
                                        <td className="border px-4 py-2"><strong>Education:</strong></td>
                                        <td className="border px-4 py-2">
                                          <table className="w-full">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <strong>High School:</strong>
                                                  <br />
                                                  <span className="text-red-400">Board/University:</span> {candidate.education.highSchool.board}
                                                  <br />
                                                  <span className="text-red-400">Year:</span> {candidate.education.highSchool.year}
                                                  <br />
                                                  <span className="text-red-400">Percentage/Grade:</span> {candidate.education.highSchool.percentage}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <strong>Intermediate:</strong>
                                                  <br />
                                                  <span className="text-red-400">Board/University:</span> {candidate.education.intermediate.board}
                                                  <br />
                                                  <span className="text-red-400">Year:</span> {candidate.education.intermediate.year}
                                                  <br />
                                                  <span className="text-red-400">Percentage/Grade:</span> {candidate.education.intermediate.percentage}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <strong>Graduation:</strong>
                                                  <br />
                                                  <span className="text-red-400">University:</span> {candidate.education.graduation.university}
                                                  <br />
                                                  <span className="text-red-400">Year:</span> {candidate.education.graduation.year}
                                                  <br />
                                                  <span className="text-red-400">Percentage/Grade:</span> {candidate.education.graduation.percentage}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <strong>Post-Graduation:</strong>
                                                  <br />
                                                  <span className="text-red-400">University:</span> {candidate.education.postGraduation.university}
                                                  <br />
                                                  <span className="text-red-400">Year:</span> {candidate.education.postGraduation.year}
                                                  <br />
                                                  <span className="text-red-400">Percentage/Grade:</span> {candidate.education.postGraduation.percentage}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetInternshipsFormData;
