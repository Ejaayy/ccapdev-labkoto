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
                        <h1>Login</h1>  
                        <h3>Welcome back! Please login to your account</h3>

                        <form className={loginStyles.labelSpacing} action="/home">
                        <label className={loginStyles.textLabels} >Username</label>
                        <br/>
                        <input className={loginStyles.inputBox} type="text" id="username" />
                        <br/>
                        <label className={`${loginStyles.textLabels} ${loginStyles.labelSpacing}`}>Password</label>
                        <br/>
                        <input className={loginStyles.inputBox} type="text" id="password" />
                        <br/>
                       
                        <div className={loginStyles.subModule}>
                            <label className={loginStyles.textLabels} >Forgot Password?</label>
                            <br/>
                            <input className={loginStyles.confirmButton} type="submit" value="Log In"></input>
                            <br/>
                            <label className={`${loginStyles.textLabels} ${loginStyles.newUser}`} >New User? 
                            <a className={loginStyles.userSignUp}> Sign Up</a>
                            </label>
                        </div>
                        
                   </form>
                    </div>
               
                </div>


            </div>
        </>
    )
}