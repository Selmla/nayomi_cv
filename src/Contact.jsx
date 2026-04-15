function ContactSection() {
    return (
        <section className="contact-section">
            <h2>Contact</h2>

            <div className="contact-card-wrapper">
                <img
                    src="/images/contact-card.png"
                    alt="Contact card"
                    className="contact-card-image"
                />

                <div className="contact-card-overlay">
                    <h3>Nayomi Arvell</h3>
                    <p className="contact-role">Fullstack Developer</p>

                    <p className="contact-text">
                        I’d love to connect, collaborate, or just chat about tech and creative ideas.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:nayomi.arvell@gmail.com">
                            nayomi.arvell@gmail.com
                        </a>
                        <a href="https://github.com/Selmla" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/din-linkedin" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;