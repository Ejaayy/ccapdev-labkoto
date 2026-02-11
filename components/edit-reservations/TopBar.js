export default function TopBar({ date, setDate, search, setSearch }) {
  return (
    <div className={styles.topBar}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search student or room…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
import styles from "@/styles/Edit-reservations.module.css";
