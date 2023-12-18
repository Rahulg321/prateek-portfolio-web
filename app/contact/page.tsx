import React from 'react';
import { Input } from '@nextui-org/react';
import ContactSelect from '@/components/ContactSelect';
import { Textarea } from '@nextui-org/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FaqAccordian from '@/components/Accordians/faq-accoridan';

const page = () => {
  return (
    <>
      <section className="big-container">
        <div className="flex flex-row gap-12 border p-4">
          de
          <div>
            <h4>Send a message</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              obcaecati!
            </p>

            <form action="">
              <Input type="text" label="Name" variant="underlined" />
              <Input type="number" label="Phone Number" variant="underlined" />
              <ContactSelect />
              <Input type="email" label="Email" variant="underlined" />
              <Textarea
                key="underlined"
                variant="underlined"
                labelPlacement="outside"
                placeholder="Enter your description"
              />
            </form>
          </div>
          <div>
            <div>
              <h4>Call us</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis non amet facere quos sed ea natus voluptatem minus
                enim!
              </p>
              <p>
                <FaPhoneAlt /> +91 9803239930
              </p>
            </div>
            <div>
              <h4>Visit us</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis non amet facere quos sed ea natus voluptatem minus
                enim!
              </p>
              <p>
                <MdEmail /> +91 9803239930
              </p>
            </div>
            <div>
              <h4>Live Chat</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis non amet facere quos sed ea natus voluptatem minus
                enim!
              </p>
              <p>
                <FaPhoneAlt /> +91 9803239930
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="big-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.652355753696!2d75.75429587558573!3d30.868406774519023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a818c8e8556c3%3A0x10d8f9b354b1565d!2sPCTE%20Group%20of%20Institutes!5e0!3m2!1sen!2sin!4v1702906353924!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      <section className="big-container">
        <div className="flex justify-between">
          <div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div>
            <FaqAccordian />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
