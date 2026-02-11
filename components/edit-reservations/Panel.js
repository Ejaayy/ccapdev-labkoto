import { useState } from "react";
import styles from "@/styles/Edit-reservations.module.css";

export default function Panel({ selectedSlot, addStudent, removeStudent }) {
  const [studentName, setStudentName] = useState("");

  if (!selectedSlot)
    return <div className={styles.panel}>Select a slot</div>;

  const handleAdd = () => {
    if (!studentName) return;
    addStudent(studentName);
    setStudentName("");
  };

  return (
    <div className={styles.panel}>
      <h3>Selected Slot</h3>

      <div className={styles.panelSection}>
        <div className={styles.panelLabel}>Room</div>
        {selectedSlot.room.name}
      </div>

      <div className={styles.panelSection}>
        <div className={styles.panelLabel}>Time</div>
        {selectedSlot.slot.time}
      </div>

      <div className={styles.panelSection}>
        <div className={styles.panelLabel}>Students Reserved</div>
        {selectedSlot.slot.students.map((student, i) => (
          <div key={i} className={styles.studentItem}>
            <span>{student}</span>
            <button
              className={styles.removeBtn}
              onClick={() => removeStudent(student)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className={styles.panelSection}>
        <input
          type="text"
          placeholder="Add student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className={styles.addStudentInput}
        />
        <button className={styles.addBtn} onClick={handleAdd}>
          Add Student
        </button>
      </div>
    </div>
  );
}
