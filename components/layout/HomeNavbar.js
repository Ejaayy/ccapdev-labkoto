import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/HomeNavbar.module.css';

export default function HomeNavbar({ style, className, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      {...rest}
      style={style}
      className={`navbar navbar-expand-md py-4 ${styles.homeNavbar} ${className || ''}`}
    >
      <div className="container">
        {/* Brand */}
        <Link href="/home" className={styles['brand-text']}>
          LabKoTo
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler navbar-dark border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <Link href="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/reserve" className="text-white text-decoration-none">Reserve</Link>
            </li>
            <li className="nav-item">
              <Link href="/edit-reservations/manage-reservations" className="text-white text-decoration-none">Manage Reservations</Link>
            </li>
            <li className="nav-item">
              <Link href="/edit-reservations/my-reservations" className="text-white text-decoration-none">My Reservations</Link>
            </li>

            {/* Account Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white border-0 p-0"
                onClick={toggleDropdown}
                type="button"
                style={{ textDecoration: 'none' }}
              >
                Account
              </button>
              <ul
                className={`dropdown-menu dropdown-menu-end shadow ${isOpen ? 'show' : ''}`}
                style={{
                  display: isOpen ? 'block' : 'none',
                  position: 'absolute',
                  backgroundColor: "#242738",
                }}
              >
                <li>
                  <Link href="/account" className="dropdown-item text-white fw-semibold">
                    Account Settings
                  </Link>
                </li>
                <li><hr className="dropdown-divider bg-black" /></li>
                <li>
                  <Link href="/" className="dropdown-item text-danger fw-semibold">
                    Log Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
