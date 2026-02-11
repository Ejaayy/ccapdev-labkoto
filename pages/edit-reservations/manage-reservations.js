import { useState } from "react";
import HomeNavbar from "@/components/layout/HomeNavbar";
import TopBar from "@/components/edit-reservations/TopBar";
import RoomCard from "@/components/edit-reservations/RoomCard";
import Panel from "@/components/edit-reservations/Panel";
import styles from "@/styles/Edit-reservations.module.css";

export default function Dashboard() {
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const rooms = [
    {
      name: "Room A",
      capacity: 30,
      slots: [
        { time: "08–09", status: "available", students: ["Juan Dela Cruz"] },
        { time: "09–10", status: "full", students: ["Maria Santos"] },
        { time: "10–11", status: "almost-full", students: ["Alex Lim"] },
        { time: "11–12", status: "available", students: [] },
        { time: "12–13", status: "available", students: [] },
        { time: "13–14", status: "full", students: ["Sample Student"] },
      ],
    },
    {
      name: "Room B",
      capacity: 20,
      slots: [
        { time: "08–09", status: "full", students: ["Juan Dela Cruz"] },
        { time: "09–10", status: "full", students: ["Maria Santos"] },
        { time: "10–11", status: "available", students: [] },
        { time: "11–12", status: "available", students: [] },
        { time: "12–13", status: "almost-full", students: ["Alex Lim"] },
        { time: "13–14", status: "available", students: [] },
      ],
    },
  ];

  const handleSlotClick = (room, slot) => {
    setSelectedSlot({ room, slot });
  };

  const addStudent = () => {
    const name = prompt("Student name:");
    if (!name || !selectedSlot) return;

    selectedSlot.slot.students.push(name);
    setSelectedSlot({ ...selectedSlot }); // force re-render
  };

  return (
    <div
      style={{
        backgroundColor: "#242738",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <HomeNavbar style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }} />

      <img
        src="../../laboratoryPhoto.png"
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
        }}
        alt="Laboratory"
      />

      {/* Overlay content on top of background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopBar
          date={date}
          setDate={setDate}
          search={search}
          setSearch={setSearch}
        />

        <div className={styles.container}>
          <div className={styles.schedule}>
            {rooms.map((room, i) => (
              <RoomCard
                key={i}
                room={room}
                onSlotClick={handleSlotClick}
              />
            ))}
          </div>
          <Panel selectedSlot={selectedSlot} addStudent={addStudent} />
        </div>
      </div>
    </div>
  );
}
