import StudentItem from "./StudentItem";
import styles from "@/styles/Edit-reservations.module.css";

export default function Panel({ selectedSlot, addStudent }) {
  if (!selectedSlot)
    return <div className={styles.panel}>Select a slot</div>;

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
          <StudentItem key={i} name={student} />
        ))}
      </div>

      <button className={styles.addBtn} onClick={addStudent}>
        Add Student
      </button>
    </div>
  );
}
