import styles from '../styles/HomeNavbar.module.css'

export default function HomeNavbar(){
    return(<>
        <nav className="navbar navbar-expand-md py-4" 
        style={{position: "absolute", top:0, left:0, width:"100%", backgroundColor: "#242738", zIndex:10}}
        >
        <div className="container">
          <a href="/home" className={`${styles['brand-text']}`}>LabKoTo</a>
            
          <button className="navbar-toggler navbar-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item"><a href="#">home</a></li>
              <li className="nav-item"><a href="#">reserve</a></li>
              <li className="nav-item"><a href="#">account</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>)
}