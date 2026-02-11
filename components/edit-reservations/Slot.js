export default function Slot({ time, status, onClick }) {
  let className = styles.slot;

  if (status === "available") {
    className += ` ${styles.available}`;
  } else if (status === "almost-full") {
    className += ` ${styles.almostFull}`;
  } else {
    className += ` ${styles.full}`;
  }

  return (
    <div className={className} onClick={onClick}>
      {time}
    </div>
  );
}
import styles from "@/styles/Edit-reservations.module.css";
