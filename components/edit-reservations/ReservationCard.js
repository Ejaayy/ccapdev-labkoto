import styles from "@/styles/MyReservations.module.css";

export default function ReservationCard({ reservation, onCancel }) {
  const { room, status, date, time, participants, capacity } = reservation;

  const fillPercent = Math.round((participants.length / capacity) * 100);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.roomName}>{room}</div>
        <div
          className={`${styles.status} ${
            status === "Confirmed" ? styles.confirmed : styles.pending
          }`}
        >
          {status}
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Date:</span> {date}
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Time:</span> {time}
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Participants:</span>{" "}
          {participants.length}/{capacity} ({fillPercent}% full)
        </div>
        <div className={styles.participantList}>
          {participants.map((p, i) => (
            <div key={i} className={styles.participant}>
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.cancelBtn} onClick={onCancel}>
          Cancel Reservation
        </button>
      </div>
    </div>
  );
}
