import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <section className="heading">
        <div>
          <div>
            <h3>Your Logo</h3>
            <span>My tagline here</span>
            <h4>Subscribe</h4>
            <form action="">
              <input type="text" />
              <button></button>
            </form>
          </div>

          <div>
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>More Search</li>
              <li>Blog</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h3>Helpful Links</h3>
            <ul>
              <li>Services</li>
              <li>Supports</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul>
              <li>Brands List</li>
              <li>Order</li>
              <li>Returns and Exchange</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
              <li>
                <FaPhoneAlt />
                +91 9803239930
              </li>
              <li>
                <MdEmail />
                prateekmangla@gmail.com
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
