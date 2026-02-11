import HomeNavbar from "@/components/layout/HomeNavbar";
import AccountStyles from "@/styles/AccountPage.module.css"

export default function Account(){
    return (
        <div style={{position: "relative", backgroundColor: "#070B20", display: "flex"}}>
            <HomeNavbar/>

            <img src="../../laboratoryPhoto.png" style={{height: "100vh", width: "100%"}}/>

            <div className={`${AccountStyles['main-panel']}`}>
                <div className={`${AccountStyles['sub-panel']}`}>
                    Hello1

                </div>

                <div className={`${AccountStyles['sub-panel']}`}>
                    Hello2
                </div>
            </div>

            

        </div>
    )
}