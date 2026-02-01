import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from '../styles/Landing.module.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {/* Background Glows */}
      <div className={`${styles['glow-bg']} ${styles['glow-1']}`}></div>
      <div className={`${styles['glow-bg']} ${styles['glow-2']}`}></div>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="container mt-5 pb-5" style={{ marginBottom: '150px' }}>
        <div className="row">
          <div className="col-lg-7">
            <h1 className={`${styles['hero-title']} mb-4`} class="testing">
              Book Your <br /> Seat in <br /> Advance.
            </h1>
            <p className="lead text-secondary mb-5">
              The most accessible Laboratories in DLSU
            </p>
            <div className="d-flex gap-3">
              <button className={`${styles['btn-primary-custom']}`}>BOOK SEATS</button>
              <button className={`${styles['btn-outline-custom']}`}>EDIT BOOKING</button>
            </div>
          </div>
      <div className={`${styles['custom-blur']}`}>

        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container pb-5 mb-6">
        <div className="row g-4">

          <div className="col-md-4">
            <div className={`${styles['glass-card']} d-flex flex-column align-items-center text-center`}>

              <img className={`${styles['img-placeholder']} `} src="../../clock.png"></img>
              <h3 className="h4 fw-bold mb-2">Real-time availability</h3>
              <p className="text-secondary small">Check seat availability through the website</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`${styles['glass-card']} d-flex flex-column align-items-center text-center`}>
              <img className={`${styles['img-placeholder']} `} src="../../room.png"></img>
              <h3 className="h4 fw-bold mb-2">Adjustable Room layouts</h3>
              <p className="text-secondary small">Adjust the room layout as administrator</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={`${styles['glass-card']} d-flex flex-column align-items-center text-center`}>
              <img className={`${styles['img-placeholder']} `} src="../../mail.png"></img>
              <h3 className="h4 fw-bold mb-2">Email Notifications</h3>
              <p className="text-secondary small">Get notified about your seat reservations</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </>
  );
}
