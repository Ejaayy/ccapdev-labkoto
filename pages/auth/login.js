import styles from '../../styles/Landing.module.css';
import loginStyles from '../../styles/loginPage.module.css';
import {useState} from 'react';
import { useRouter } from 'next/router';

export default function Login(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isStudentSelectOpen, setIsStudentSelectOpen] = useState(false);
    const [isAdminSelectOpen, setIsAdminSelectOpen] = useState(false);
    const router = useRouter();
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleStudentSelect = () => setIsStudentSelectOpen(!isStudentSelectOpen);
    const toggleAdminSelect = () => setIsAdminSelectOpen(!isAdminSelectOpen);
    const handleStudentRegister = (e) => {
        e.preventDefault();
        router.push('/home');
    };

    return(
        <>
            <div style={{position: "relative", backgroundColor: "#070B20", display: "flex"}}>


                {isModalOpen && (
                 
                        
                    <div className={loginStyles.signUpModal}>
                        <div className={loginStyles.backButtonContainer}>
                            <span onClick={toggleModal} className={loginStyles.backButton}>&lt;</span>
                        </div>
                        <h1>Register Account</h1>
                        <h6>Join LabKoTo now!</h6>


                        {!isStudentSelectOpen && !isAdminSelectOpen && (
                            <div className={loginStyles.roleSelector}>
                            <button onClick={toggleStudentSelect} className={loginStyles.confirmButton}>
                                Register as Student
                            </button>

                            <h6>OR</h6>

                            <button onClick={toggleAdminSelect} className={loginStyles.confirmButton}>
                                Register as Teacher
                            </button>
                        </div>
                        )}

                        {isStudentSelectOpen && (
                            <form>
                                <label htmlFor="fname">First Name</label><br/>
                                <input type="text" id="fname" name="fname" /><br/>

                                <label htmlFor="lname">Last Name</label><br/>
                                <input type="text" id="lname" name="lname" /><br/>

                                <label htmlFor="email">DLSU Email Address</label><br/>
                                <input type="text" id="email" name="email" /><br/>

                                <label htmlFor="id">ID Number</label><br/>
                                <input type="text" id="id" name="id" /><br/>

                                <label htmlFor="pass1">Password</label><br/>
                                <input type="text" id="pass1" name="pass1" /><br/>

                                <label htmlFor="pass2">Re-enter Password</label><br/>
                                <input type="text" id="pass2" name="pass2" /><br/>

                                <button onClick={handleStudentRegister} className={loginStyles.confirmButton}>
                                    Register
                                </button>
                            </form>
                        )}
                        
                    
                    </div>
                
                )}
                
         
                <div style={{position: "relative"}}>
                     <img src="../../../curves.png" style={{height: "100vh", width: "100vh"}}/>
                    <h1 className={`${styles['brand-text']}`} style={{position: "absolute", top:"45%", left:"50%", fontSize: "80px"}}>LabKoTo</h1>
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
                            <span onClick={toggleModal} className={loginStyles.userSignUp} style={{cursor: 'pointer'}}> Sign Up</span>
                            </label>
                        </div>
                        
                   </form>
                    </div>
               
                </div>


            </div>
        </>
    )
}