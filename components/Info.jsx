export default function Info() {
    return (
        <div className="info-container">
            <img src="/assets/profilepic.jpg" alt="Profile" className="profile-image" />
            <div className="info">
                <h1 className="name">Dishank Hanwate</h1>
                <p className="title">Full-Stack Developer</p>
                <p className="email">dishankhanwateprof@gmail.com</p>
                <div className="buttons">
                    <a href="mailto:dishankhanwateprof@gmail.com">
                        <button className="email-button">
                            <img src="/assets/email-icon.png" alt="Email Icon" />
                            Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/dishankhanwate" target="_blank" rel="noopener noreferrer">
                        <button className="linkedin-button">
                            <img src="/assets/linkedin-icon.png" alt="LinkedIn Icon" />
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
