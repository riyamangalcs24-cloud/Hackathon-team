import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>TravelNest</h2>
          <p>
            Explore the world with us. We make your journey
            comfortable, memorable and affordable.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Packages</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: travelnest@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelNest. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;