import HomeNavbar from "@/components/layout/HomeNavbar";
import styles from "../styles/HomeNavbar.module.css";
import SelectStudent from "@/components/home/SelectStudents";
import CustomCalendar from "@/components/home/CustomCalendar";
import Announcements from "@/components/home/Announcements";
import WelcomeUser from "@/components/home/WelcomeUser";

export default function home(){
    const myReservations = ["2026-02-09", "2026-02-06", "2026-02-07"];

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
                        style={{height: "275px"}}>
                            Upcoming Reservations
                        </div>

                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "275px"}}>
                            <SelectStudent />
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}