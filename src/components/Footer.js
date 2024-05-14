import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="content-address">
          <div>
            <h3>Street Address</h3>
            <p>Lashibi Community 16</p>
            <p>Behind Global House</p>
          </div>
          <div>
            <h3>Postal Address</h3>
            <p>P. O. Box SK 439</p>
            <p>Sakumono Estates, Tema</p>
          </div>
          <div>
            <h3>Phone &amp; Email</h3>
            <p>+233 26 7799990</p>
            <p>promaxgh@gmail.com</p>
          </div>
        </div>
        <div className="social-icons">
          <SocialIcons />
        </div>
      </div>
      <div className="copyright">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>Horla</span>
      </div>
    </footer>
  );
};

export default Footer;
