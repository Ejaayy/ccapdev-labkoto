import { useState } from "react";
import HomeNavbar from "@/components/layout/HomeNavbar";
import ReservationCard from "@/components/edit-reservations/ReservationCard";
import styles from "@/styles/MyReservations.module.css";

export default function MyReservations() {
  const [reservations, setReservations] = useState([
    {
      room: "Room A",
      status: "Confirmed",
      date: "2026-02-15",
      time: "08–09",
      participants: ["Juan Dela Cruz", "Maria Santos"],
      capacity: 30,
    },
    {
      room: "Room B",
      status: "Pending",
      date: "2026-02-16",
      time: "10–11",
      participants: ["Alex Lim"],
      capacity: 20,
    },
    {
      room: "Room C",
      status: "Confirmed",
      date: "2026-02-17",
      time: "13–14",
      participants: [],
      capacity: 25,
    },
  ]);

  const cancelReservation = (index) => {
    if (!confirm("Are you sure you want to cancel this reservation?")) return;
    setReservations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.pageWrapper}>
      <HomeNavbar />

      <div className={styles.content}>
        <h1 className={styles.pageTitle}>My Reservations</h1>

        <div className={styles.reservationList}>
          {reservations.map((res, i) => (
            <ReservationCard
              key={i}
              reservation={res}
              onCancel={() => cancelReservation(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
