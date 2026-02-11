import styles from '@/styles/ReservePage.module.css';
import { FaMicroscope, FaChevronDown } from 'react-icons/fa';

const LABS = [
  { id: '301', seats: 15, status: 'Available' },
  { id: '401', seats: 15, status: 'Available' },
  { id: '402', seats: 4, status: 'Limited' },
  { id: '505', seats: 20, status: 'Available' },
  { id: '501', seats: 0, status: 'Full' },
];

export default function LabSlotSelector() {
  
  const startTime = "07:30 AM";
  const endTime = "09:00 AM"; 

  return (
    <div className={styles.slotContainer}>
      {LABS.map((lab) => (
        <div key={lab.id} className={styles.labRow}>
          {/* Lab Info Column */}
          <div className={styles.labInfo}>
            <div className={styles.labName}>
             
              <span>Lab {lab.id}</span>
            </div>
            <span className={styles.timeRange}>{startTime} - {endTime}</span>
          </div>

          {/* Duration Column */}
          <div className={styles.duration}>90m</div>

          {/* Reference ID (Like flight number) */}
          <div className={styles.labId}>GK-{lab.id}</div>

          {/* Pricing/Seats Column */}
          <div className={styles.bookingAction}>
            <div className={styles.seatInfo}>
              <span className={styles.seatPrice}>Free Admission</span>
              <span className={`${styles.seatsLeft} ${lab.seats < 5 ? styles.urgent : ''}`}>
                {lab.seats} seats left at this time
              </span>
            </div>
            <FaChevronDown className={styles.expandIcon} />
          </div>
        </div>
      ))}
    </div>
  );
}