import styles from '../../styles/Landing.module.css';
import loginStyles from '../../styles/loginPage.module.css';

export default function Login(){
    return(
        <>
            <div style={{backgroundColor: "#070B20", display: "flex"}}>
         
                <div style={{position: "relative"}}>
                     <img src="../../../curves.png" style={{height: "100vh", width: "100vh"}}/>
                    <h1 className={`${styles['brand-text']}`} style={{position: "absolute", top:"50%", left:"50%", fontSize: "80px"}}>LabKoTo</h1>
                </div>
               

              
                <div style={{position: "relative", width: "100%", backgroundColor: "#FFFFFF"}}>

                     <img src="../../../laboratoryPhoto.png" style={{height: "100%", width: "100%"}}/>

                    <div className={`${loginStyles['form-container']}`}>
                        <h1 style={{color: "#000000"}}>
                        Login
                     </h1>  
                        <form action="/home">
                        <label style={{color: "#000000"}}>Username</label>
                        <br/>
                        <input type="text" id="username" />
                        <br/>
                        <label style={{color: "#000000"}}>Password</label>
                        <br/>
                        <input type="text" id="password" />
                        <br/>
                        <label style={{color: "#000000"}}>Forgot Password</label>
                        <br/>
                        <input type="submit" value="Log In"></input>
                   </form>
                    </div>
               
                </div>


            </div>
        </>
    )
}