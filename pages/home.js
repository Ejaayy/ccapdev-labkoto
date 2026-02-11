import { useState } from "react";
import HomeNavbar from "@/components/layout/HomeNavbar";
import styles from "../styles/HomeNavbar.module.css";
import SelectStudent from "@/components/home/SelectStudents";
import CustomCalendar from "@/components/home/CustomCalendar";
import Announcements from "@/components/home/Announcements";
import WelcomeUser from "@/components/home/WelcomeUser";
import UpcomingReservations from "@/components/home/UpcomingReservations";
import SelectStudents from "@/components/home/SelectStudents";

export default function home(){
    const myReservations = ["2026-02-06", "2026-02-07", "2026-02-09", "2026-02-14"];
    const reservationData = [
        {
            id: 1,
            laboratory: "Yuchengco Computer Lab Y403",
            seatNumber: "A-12",
            reservationDate: "Feb 02, 2026",
            reservationTime: "09:00 AM - 11:00 AM",
            requestDateTime: "January 25, 2026 02:15 PM"
        },
        {
            id: 2,
            laboratory: "Gokongwei Computer Lab G403",
            seatNumber: "C-05",
            reservationDate: "Feb 07, 2026",
            reservationTime: "01:30 PM - 03:30 PM",
            requestDateTime: "January 26, 2026 02:15 PM"
        },
        {
            id: 3,
            laboratory: "Br. Andrew Computer Lab A1901",
            seatNumber: "PC-42",
            reservationDate: "Feb 09, 2026",
            reservationTime: "10:00 AM - 12:00 PM",
            requestDateTime: "January 27, 2026 02:15 PM"
        },
        {
            id: 4,
            laboratory: "Velaso Computer Lab V501",
            seatNumber: "BR-42",
            reservationDate: "Feb 14, 2026",
            reservationTime: "10:00 AM - 12:00 PM",
            requestDateTime: "January 28, 2026 02:15 PM"
        }
    ];

    const [reservationsState, setReservationsState] = useState(reservationData);

    const handleCheck = (id) => {
        setReservationsState(prev =>
            prev.map(res =>
                res.id === id ? {...res, isChecked: !res.isChecked} : res
            )
        );
    };

    return(
        <div style={{backgroundColor: "#242738", position: "relative"}}>

            <HomeNavbar/>
            <img src="../../laboratoryPhoto.png" style={{height: "100vh", width: "100%"}}/>

            <div className={`container ${styles['main-panel']}`}>

                <div className="row">
                    <div className="col-4 d-flex flex-column gap-3">
                        
                        <div className={`row ${styles['left-container-CustomCalendar']}`} >
                            <CustomCalendar reservedDates={myReservations} />
                        </div>

                        <div className={`row ${styles['left-container-Announcements']}`}
                        style={{
                            flex: 1,
                            }}
                        >
                            <Announcements />
                        </div>
                    </div>

                    <div className="col-8">
                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "100px"}}>
                            <WelcomeUser />
                        </div>

                        <div 
                            className={`row ${styles['right-container']}`} 
                            style={{height: "275px", padding: "15px", display: "flex", flexDirection: "column"}}>
                            <h3 style={{fontSize: '1.1rem', marginBottom: '10px'}}>Upcoming Reservations</h3>
                            <UpcomingReservations reservations={reservationsState} handleCheck={handleCheck}/>
                        </div>

                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "290px"}}>
                            <SelectStudents />
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}