import { useState } from 'react';
import styles from '@/styles/HomeNavbar.module.css';

export default function HomeNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md py-4"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "#242738", zIndex: 100 }}
            >
                <div className="container">
                    <a href="/home" className={`${styles['brand-text']}`}>LabKoTo</a>

                    <button className="navbar-toggler navbar-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-4">
                            <li className="nav-item"><a className="text-white text-decoration-none" href="/">home</a></li>
                            <li className="nav-item"><a className="text-white text-decoration-none" href="/reserve">reserve</a></li>

                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle btn btn-link text-white border-0 p-0"
                                    onClick={toggleDropdown}
                                    type="button"
                                    style={{ textDecoration: 'none' }}
                                >
                                    account
                                </button>

                                <ul 
                                    className={`dropdown-menu dropdown-menu-end shadow ${isOpen ? 'show' : ''}`}
                                    style={{ 
                                        display: isOpen ? 'block' : 'none',
                                        position: 'absolute',
                                        backgroundColor: "#242738",
                                    }}
                                >
                                    <li><a className="dropdown-item text-white fw-semibold" href="/account">Account Settings</a></li>
                                    <li><hr className="dropdown-divider bg-black" /></li>
                                    <li><a className="dropdown-item text-danger fw-semibold" href="/">Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}