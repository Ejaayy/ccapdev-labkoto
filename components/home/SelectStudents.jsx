import { useState } from "react";

const studentsData = [
  { id: 1, name: "Juan Dela Cruz" },
  { id: 2, name: "Maria Santos" },
  { id: 3, name: "Pedro Reyes" },
  { id: 4, name: "Ana Lopez" },
 
];

export default function SelectStudent() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on search term
  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Search Student</h2>
      <input
        type="text"
        placeholder="Enter student name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id} className="p-2 border-b">
              {student.name}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No students found</li>
        )}
      </ul>
    </div>
  );
}
