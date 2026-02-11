import ReserveStyles from '@/styles/ReservePage.module.css'
import HomeNavbar from '@/components/layout/HomeNavbar';
import BookingStepper from '@/components/Stepper'
import DateSelector from '@/components/DateSelector';
import LabSlotSelector from '@/components/SlotSelector';

export default function ReservePage(){
    return(
        <>
        
            <div style={{position: "relative", backgroundColor: "#070B20", display: "flex", flexDirection: "column"}}>
                        <HomeNavbar/>

                        <BookingStepper currentStep={1} />

                        
                        <div className={`${ReserveStyles['main-panel']}`}>

                            <div className={`${ReserveStyles['selection-panel']}`}>

                                <h1>Select your Laboratory booking date</h1>
                                <DateSelector/>
                                <LabSlotSelector/>
                                <hr className={`${ReserveStyles['divider']}`} />
                                <div className={`${ReserveStyles['footer-button-panel']}`}>
                                    <div className={`${ReserveStyles['back-button']}`}>
                                        Back
                                    </div>

                                    <div className={`${ReserveStyles['continue-button']}`}>
                                        Continue
                                    </div>
                                </div>
                            </div>

                        </div>

          

            </div>
        
        </>
    )
}