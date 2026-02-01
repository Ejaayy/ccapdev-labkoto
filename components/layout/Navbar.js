import styles from '@/styles/Landing.module.css';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-md py-4">
        <div className="container">
          <a href="/" className={`${styles['brand-text']}`}>LabKoTo</a>
            
          <button className="navbar-toggler navbar-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item"><a className={`${styles['nav-link']}`} href="#">about</a></li>
              <li className="nav-item"><a className={`${styles['nav-link']}`} href="#">contact</a></li>
              <li className="nav-item"><a className={`${styles['nav-link']}`} href="#">reserve</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}