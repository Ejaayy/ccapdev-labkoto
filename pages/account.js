import HomeNavbar from "@/components/layout/HomeNavbar";
import AccountStyles from "@/styles/AccountPage.module.css";

export default function Account() {
    return (
        <div className={AccountStyles['page-container']}>
            <HomeNavbar />

            <img src="../../laboratoryPhoto.png" style={{height: "100vh", width: "100%"}}/>

            <div className={AccountStyles['main-panel']}>

                <div className={AccountStyles['sub-panel']}>
                    <div className={AccountStyles['profile-upper']}>
                        <div className={AccountStyles['avatar-container']}>
                            <div className={AccountStyles['default-avatar']}>
                                <img src="profilePic.jpg" alt="Profile" className={AccountStyles['profile-img']} />
                            </div>
                            <h2 className={AccountStyles['profile-name']}>Nathan Dick</h2>
                        </div>

                        <div className={AccountStyles['info-fields']}>
                            <div className={AccountStyles['field-group']}>
                                <label>Name</label>
                                <input type="text" placeholder="" className={AccountStyles['custom-input']} />
                            </div>
                            <div className={AccountStyles['field-group']}>
                                <label>ID num</label>
                                <input type="text" placeholder="" className={AccountStyles['custom-input']} />
                            </div>
                            <div className={AccountStyles['field-group']}>
                                <label>email</label>
                                <input type="email" placeholder="" className={AccountStyles['custom-input']} />
                            </div>
                        </div>
                    </div>

                    <div className={AccountStyles['action-buttons']}>
                        <button className={AccountStyles['edit-btn']}>Edit profile</button>
                        <button className={AccountStyles['delete-btn']}>Delete account</button>
                    </div>
                </div>

                <div className={AccountStyles['sub-panel']}>
                    <h3 className={AccountStyles['activity-title']}>Recent Activity</h3>

                    <div className={AccountStyles['activity-feed']}>
                        <div className={AccountStyles['activity-item']}>
                            <img src="profilePic.jpg" alt="Profile" className={AccountStyles['activity-avatar']} />
                            <div className={AccountStyles['activity-text']}>
                                <span className={AccountStyles['user-link']}>Nathan Dick</span> reserved
                                <span className={AccountStyles['highlight']}> VL01 - Chemistry Lab</span>
                                <div className={AccountStyles['activity-date']}>Oct 24 @ 10:32am</div>
                            </div>
                        </div>

                        <div className={AccountStyles['activity-item']}>
                            <img src="profilePic.jpg" alt="Profile" className={AccountStyles['activity-avatar']} />
                            <div className={AccountStyles['activity-text']}>
                                <span className={AccountStyles['user-link']}>Nathan Dick</span> posted a status:
                                <p className={AccountStyles['status-quote']}>"ANLALA NUNG STALGCM EXAM MAN"</p>
                                <div className={AccountStyles['activity-date']}>Oct 23 @ 4:15pm</div>
                            </div>
                        </div>

                        <div className={AccountStyles['activity-item']}>
                            <img src="profilePic.jpg" alt="Profile" className={AccountStyles['activity-avatar']} />
                            <div className={AccountStyles['activity-text']}>
                                <span className={AccountStyles['user-link']}>Nathan Dick</span> reserved
                                <span className={AccountStyles['highlight']}> G302 - Computer Lab</span>
                                <div className={AccountStyles['activity-date']}>Oct 22 @ 9:00am</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}