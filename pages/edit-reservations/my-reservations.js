import { useState } from "react";
import { useRouter } from "next/router";
import HomeNavbar from "@/components/layout/HomeNavbar";
import ReservationCard from "@/components/edit-reservations/ReservationCard";
import styles from "@/styles/MyReservations.module.css";

export default function MyReservations() {
  const router = useRouter();
  
  const [reservations, setReservations] = useState([
    {
      room: "Room A",
      status: "Confirmed",
      date: "2026-02-15",
      time: "08–09",
      seatNumber: "A-12",
      participants: ["Juan Dela Cruz", "Maria Santos"],
      capacity: 30,
    },
    {
      room: "Room B",
      status: "Failed",
      date: "2026-02-16",
      time: "10–11",
      seatNumber: "B-05",
      participants: ["Alex Lim"],
      capacity: 20,
    },
    {
      room: "Room C",
      status: "Confirmed",
      date: "2026-02-17",
      time: "13–14",
      seatNumber: "C-18",
      participants: [],
      capacity: 25,
    },
    {
      room: "Room D",
      status: "Confirmed",
      date: "2026-02-18",
      time: "09–10",
      seatNumber: "D-03",
      participants: ["Ana Garcia", "Pedro Reyes"],
      capacity: 25,
    },
    {
      room: "Room E",
      status: "Pending",
      date: "2026-02-19",
      time: "14–15",
      seatNumber: "E-22",
      participants: ["Sofia Cruz"],
      capacity: 35,
    },
  ]);

  const editReservation = (index) => {
    // Navigate to reserve page to edit the reservation
    router.push('/reserve');
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
              onEdit={() => editReservation(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
