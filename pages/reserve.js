import ReserveStyles from '@/styles/ReservePage.module.css'
import HomeNavbar from '@/components/layout/HomeNavbar';
import BookingStepper from '@/components/Stepper'
import DateSelector from '@/components/DateSelector';
import LabSlotSelector from '@/components/SlotSelector';
import { useState } from 'react';
import SeatSelector from '@/components/SeatSelector';

export default function ReservePage(){


    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    return(
        <>
        
            <div style={{position: "relative", backgroundColor: "#070B20", display: "flex", flexDirection: "column"}}>
                        <HomeNavbar/>

                        <BookingStepper currentStep={currentStep} />

                        
                        <div className={`${ReserveStyles['main-panel']}`}>
                            
                            <div className={`${ReserveStyles['selection-panel']}`}>


                                {/*Step 1*/}
                                {currentStep == 1 && (
                                
                                <div>
                                <h1>Select your Laboratory booking date</h1>
                                <DateSelector/>
                                <LabSlotSelector/>
                                </div>
                                )}

                                {/*Step 2 */}
                                {currentStep == 2 &&(
                                    <div>
                                        <SeatSelector/>
                                    </div>
                                )}

                                {/*Step 3*/}
                                {currentStep == 3 &&(
                                    <div>
                                        
                                    </div>
                                )}
                                <hr className={`${ReserveStyles['divider']}`} />
                                <div className={`${ReserveStyles['footer-button-panel']}`}>
                                    <div className={`${ReserveStyles['back-button']}`}
                                    onClick={() => {
                                        if (currentStep > 0) {
                                            setCurrentStep(currentStep - 1);
                                        } else {
                                            alert("Cancelled booking");
                                        }
                                    }}>
                                        Back
                                    </div>

                                    <div className={`${ReserveStyles['continue-button']}`}
                                     onClick={() => {
                                        if (currentStep < totalSteps) {
                                            setCurrentStep(currentStep + 1);
                                        } else {
                                            alert("Booking Confirmed!");
                                        }
                                    }}>
                                        Continue
                                    </div>
                                </div>
                            </div>

                        </div>

          

            </div>
        
        </>
    )
}