import HomeNavbar from "@/components/HomeNavbar";
import styles from "../styles/HomeNavbar.module.css";
export default function home(){

    return(
        <>

        <div style={{backgroundColor: "#242738", position: "relative"}}>

            <HomeNavbar/>
            <img src="../../laboratoryPhoto.png" style={{height: "100vh", width: "100%"}}/>

            <div className={`container ${styles['main-panel']}`}
                  
                >

                <div className="row">
                    <div className="col-4 d-flex flex-column">
                        
                        <div 
                        className={`row ${styles['left-container']}`} 
                        style={{height: "200px"}}>
                            Container 
                        </div>

                        <div className={`row ${styles['left-container']}`}
                        style={{flex: 1}}>
                            Announcements
                        </div>
                    </div>

                    
                    <div className="col-8">
                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "100px"}}>
                            Welcome User
                        </div>

                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "275px"}}>
                            Upcoming Reservations
                        </div>

                        <div 
                        className={`row ${styles['right-container']}`} 
                        style={{height: "275px"}}>
                            Select Students
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        
        
        </>
    )
}