import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ServiceCard from '@/components/Cards/Service-Card';
import CoveredImageCard from '@/components/Cards/CoveredImageCard';

export default function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Global Fraud Intelligence</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            molestias voluptatum nostrum non harum odio at, ducimus molestiae
            fugit magni vero architecto eligendi quos voluptas labore, esse
            consectetur? Eveniet, minima.
          </p>
          <button>Contact us</button>
          <button>About us</button>
        </div>
      </section>

      <section className="big-container">
        <div className="split">
          <div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempore perferendis cupiditate doloremque? Vel minus in non
              veritatis, facilis culpa excepturi corporis obcaecati corrupti
              aliquid eos unde consectetur maxime. Molestiae?
            </p>
            <button>Read More</button>
          </div>
          <div>
            <div>
              <FaPhoneAlt />
              <h4>Detect</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium dolorem voluptatem eius ducimus ab repudiandae rerum
                alias enim repellat molestias similique deserunt reiciendis
                doloremque vitae, dolores quasi delectus. Consectetur, optio?
              </p>
            </div>

            <div>
              <FaPhoneAlt />
              <h4>Learn</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium dolorem voluptatem eius ducimus ab repudiandae rerum
                alias enim repellat molestias similique deserunt reiciendis
                doloremque vitae, dolores quasi delectus. Consectetur, optio?
              </p>
            </div>

            <div>
              <FaPhoneAlt />
              <h4>Protect</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium dolorem voluptatem eius ducimus ab repudiandae rerum
                alias enim repellat molestias similique deserunt reiciendis
                doloremque vitae, dolores quasi delectus. Consectetur, optio?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="big-container">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          cupiditate libero error aliquid qui veniam modi co
        </p>

        <div className="flex gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>

      <section className="big-container">
        <div className="flex gap-4">
          <div>
            <CoveredImageCard />
            <CoveredImageCard />
            <CoveredImageCard />
            <CoveredImageCard />
          </div>
          <div>
            <h3>Intelligence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur laborum aut maxime sapiente reprehenderit deserunt
              harum, suscipit fugit maiores odit, sunt officiis facilis unde a
              hic. Iure asperiores minus autem!
            </p>
            <ul>
              <li>Internet Intelligence</li>
              <li>Corporate Card</li>
              <li>Lorem, ipsum.</li>
            </ul>
            <button>Contact us</button>
          </div>
        </div>
      </section>
    </>
  );
}
