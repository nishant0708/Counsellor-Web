import "./Terms.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackToHomeButton from '../backtohome';
import Logo from "../../assets/logo.webp";

import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from '../../App';
import { Switch } from 'antd';
import { useCallback, useContext, useEffect, useState } from "react";


const Terms = () => {
  const navigate = useNavigate();
let [cookies,setCookies]=useState(true)
let [hyperlink,setHyperlink]=useState(false)
let [iframe,setIframe]=useState(false)

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [fix, setFix] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message, {
          className: "toast-message",
        });
      });
  }, [navigate]);

  const handleThemeChange = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);
  const setFixed = useCallback(() => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, [setFixed]);
  return (
    <><nav className={`navbar ${fix ? 'fixed' : ''}`}>
    <div className="logo">
      <img src={Logo} alt="Logo" />
    </div>
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <ul>
        <li><a href="/topuniversities">Top Universities</a></li>
        <li><a href="/jobs">Jobs</a></li>
        <li><a href="./courses">Courses</a></li>
        <li><a href="./careersupport">Career Support</a></li>
        <li className='dot'><a href="error">•</a></li>
        <li><a href="/" onClick={handleSignOut}>Log Out</a></li>
        <li><a href="./profile"><button className='profile_btn'>Profile</button></a></li>
        <li>
          <Switch
            style={{ backgroundColor: theme === "dark" ? "#000000" : "" }}
            onChange={handleThemeChange}
            checked={theme === "dark"}
            checkedChildren="Dark Mode"
            unCheckedChildren="Light Mode"
          />
        </li>
      </ul>
    </div>
    <div className="hamburger" onClick={toggleMenu}>
      <div className={`bar ${menuOpen ? 'open' : ''}`} />
      <div className={`bar ${menuOpen ? 'open' : ''}`} />
      <div className={`bar ${menuOpen ? 'open' : ''}`} />
    </div>
  </nav>
    <BackToHomeButton />
    
      {/* breadcrumb */}
      <div className="terms-container">
      
        
        {/* terms page */}
        <div className="contents">
          <h1>Terms & Conditions</h1>
          <section id="cookies">
            <h2>Cookies</h2>
            <ul>
              <li>We use cookies to enhance user experience.</li>
              <li>Cookies help us understand user preferences.</li>
              <li>By using our site, you consent to the use of cookies.</li>
            </ul>
          </section>
          <section id="license">
            <h2>License</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              eum explicabo quae totam voluptatum. Expedita nisi quo facere odio
              quas obcaecati porro architecto minus, eum sed commodi ratione
              modi deleniti perspiciatis! Labore ipsa sapiente ab minima
              incidunt tempora perferendis iure at et placeat. Praesentium
              temporibus nisi et est eius fugit.
            </p>
            <ul>
              <li>Republish material from CrickClub24</li>
              <li>Sell, rent or sub-license material from CrickClub24</li>
              <li>Reproduce, duplicate or copy material from CrickClub24</li>
              <li>Redistribute content from CrickClub24</li>
            </ul>
          </section>
    
     
         <section id="hyperlinking">
            <h2>Hyperlinking to our Content</h2>
            <p>
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors;</li>
              <li>System wide Accredited Businesses.</li>
            </ul>
          </section> 
        
         <section id="iframes">
            <h2>iFrames</h2>
            <ul>
              <li>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</li>
            </ul>
          </section>

          <section id="liability">
            <h2>Content Liability</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              itaque iusto sed a consequuntur adipisci corporis quidem est.
              Similique optio esse placeat reiciendis velit nemo rerum corporis
              consectetur, perspiciatis, hic nostrum et illum recusandae ea,
              asperiores ducimus distinctio temporibus nam!
            </p>
          </section>
        </div>
      </div>

      <hr />

      <Footer />
    </>
  );
};

export default Terms;
