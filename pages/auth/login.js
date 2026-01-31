import styles from '../../styles/Landing.module.css';

export default function Login(){
    return(
        <>
            <div style={{backgroundColor: "#070B20", display: "flex"}}>
         
                <div style={{position: "relative"}}>
                     <img src="../../../curves.png" style={{height: "100vh", width: "100vh"}}/>
                    <h1 className={`${styles['brand-text']}`} style={{position: "absolute", top:"50%", left:"50%", fontSize: "80px"}}>LabKoTo</h1>
                </div>
               
                <div style={{backgroundColor: "#FFFFFF", width: "100%"}}>
                   <form action="/auth/register">
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
        </>
    )
}