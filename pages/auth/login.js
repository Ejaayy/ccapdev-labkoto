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

    const handleBack = () => {
    if (isStudentSelectOpen || isAdminSelectOpen) {
        setIsStudentSelectOpen(false);
        setIsAdminSelectOpen(false);
    } else {
    
        setIsModalOpen(false);
    }
};
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
                            <span onClick={handleBack} className={loginStyles.backButton}>&lt;</span>
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
                                Register as Lab Technician
                            </button>
                        </div>
                        )}



                        {isStudentSelectOpen && (
                            <form>
                                <div className={loginStyles.formLayout}>
                                     <div className={loginStyles.inputLayout}>
                                        <div style={{ display: 'flex', gap: '16px' }}>

                                            <div className={loginStyles.formBreak}>
                                                <label className={loginStyles.formLabels} htmlFor="fname">First Name</label><br/>
                                                <input type="text" id="fname" name="fname" />
                                            </div>

                                            <div className={loginStyles.formBreak}>
                                                <label className={loginStyles.formLabels} htmlFor="lname">Last Name</label><br/>
                                                <input type="text" id="lname" name="lname" />
                                            </div>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label  className={loginStyles.formLabels} htmlFor="email">DLSU Email Address</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="email" name="email" /><br/>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label  className={loginStyles.formLabels} htmlFor="id">ID Number</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="id" name="id" /><br/>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label className={loginStyles.formLabels} htmlFor="pass1">Password</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="pass1" name="pass1" /><br/>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label className={loginStyles.formLabels} htmlFor="pass2">Re-enter Password</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="pass2" name="pass2" /><br/>
                                        </div>
                                    </div>

                                    <div>
                                        <button onClick={handleStudentRegister} className={loginStyles.confirmButton} >  Register </button>
                                    </div>
                                </div>
                            </form>
                        )}

                        {isAdminSelectOpen && (
                            <form>
                                <div className={loginStyles.formLayout}>
                                     <div className={loginStyles.inputLayout}>
                                        <div style={{ display: 'flex', gap: '16px' }}>

                                            <div className={loginStyles.formBreak}>
                                                <label className={loginStyles.formLabels} htmlFor="fname">First Name</label><br/>
                                                <input type="text" id="fname" name="fname" />
                                            </div>

                                            <div className={loginStyles.formBreak}>
                                                <label className={loginStyles.formLabels} htmlFor="lname">Last Name</label><br/>
                                                <input type="text" id="lname" name="lname" />
                                            </div>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label  className={loginStyles.formLabels} htmlFor="email">DLSU Email Address</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="email" name="email" /><br/>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label className={loginStyles.formLabels} htmlFor="pass1">Password</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="pass1" name="pass1" /><br/>
                                        </div>

                                        <div className={loginStyles.formBreak}>
                                            <label className={loginStyles.formLabels} htmlFor="pass2">Re-enter Password</label><br/>
                                            <input style={{ width: '100%' }} type="text" id="pass2" name="pass2" /><br/>
                                        </div>
                                    </div>

                                    <div>
                                        <button onClick={handleStudentRegister} className={loginStyles.confirmButton} >  Register </button>
                                    </div>
                                </div>
                            </form>
                        )}

                        
                        
                    
                    </div>
                
                )}
                
         
                <div style={{position: "relative"}}>
                     <img src="../../../curves.png" style={{height: "100vh", width: "100vh"}}/>
                    <h1 className={`${styles['brand-text']}`} style={{position: "absolute", top:"45%", left:"30%", fontSize: "80px"}}>LabKoTo</h1>
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
                        <input className={loginStyles.inputBox} type="password" id="password" />
                        <br/>
                        
                        <div className={loginStyles.rememberMeRow}>
                            <label className={loginStyles.rememberMeLabel}>
                                <input type="checkbox" className={loginStyles.rememberMeCheckbox} />
                                Remember Me
                            </label>
                            <label className={loginStyles.forgotPassword}>Forgot Password?</label>
                        </div>
                       
                        <div className={loginStyles.subModule}>
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