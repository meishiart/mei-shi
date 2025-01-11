import React from 'react';
import './home.css';
import ParticleBackground from './ParticleBackground';

function About() {
  return (
    <div>
      <ParticleBackground />

      <div className="hero">
        <h1 className="hero-title">
          <span className="animate-in">About</span>
        </h1>
      </div>


      <section className="branddesign">
        <div className="branddesign-container">
          <h1>Artistic Values</h1>
          <div className="design-flex">
            <div className="textbox">
              <p>Through pivotal moments during his college experience, both personally and politically, Mei Shi
                developed a sense of deep gratitude for the people and opportunities around him. Despite working
                through challenging and unstable times during the Cultural Revolution and navigating the complex and
                at times unforgiving world of business and design, Mei Shi maintained an optimistic and open outlook
                on life and art.</p>
              <p>After his rigorous undergraduate training in realism and the forms of the human body, Mei Shi
                was drawn to the wonder and openness of natural landscapes, incorporating mountain vistas,
                green hills, and the freedom of the outdoors into many of his works.</p>
              <p>Combining the human aspects of gratitude with the awe-inducing nature of natural landscapes, Mei Shi
                has explored subjects across many art styles: shifting between realistic portraits, landscape
                studies, interactive experimental works, and abstract pieces.</p>
              <p>However, the one thing that remains constant across his range of artistic endeavors is the continuous
                path of striving towards free flowing expressions of beauty in all forms.</p>
              <p>"He likes to travel, and he likes to be free and unfettered, even if he just takes a deep breath in
                front of the sea and listens to the waves; he likes to drive fast, but he doesn't speed. He loves
                speed without obstacles. There is a natural joyous mentality in his work. And his heart. Mei Shi
                                has a world of bliss that belongs to him." - So Hu 2018</p>
              {/* <p>
                "Mei's paintings give a surging, atmospheric feel. Now the lotus leaf roll,
                mountain show; suddenly night rain, off the ice dream. Mei believes that the pursuit of "charm" is
                an ideal state of art. Style charm, but also refers to poetry and painting style charm, its
                aesthetic is characterized by vivid natural, born into without artificial artificial traces,
                reflecting the mood of clearing away empty talk. Mei Shi is practicing his artistic pursuits."
                — Zhangjun (Associate Dean, professor of Communication University of China</p> */}
            </div>
            <div >
              <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/Galaxy Three.jpg"} alt="abstract painting of galaxy" />
            </div>
          </div>
        </div>
      </section>

      

      <section >
        <div className="branddesign-container">
          <h2>Early Life</h2>
          <div className="design-flex">
            <div className="textbox">
              <p>Mei Shi's parents are intellectuals in the scientific research area, and his
                father likes painting and calligraphy. His neighbors, uncles and aunts, all
                majored in science and engineering, and they had completely different views on
                Mei Shi's persistent preference for painting and literature since childhood.
                Therefore, when Mei Shi was growing up, he often kept his painting in a sneaky
                state.</p>
              <p>Eventually going into secondary school, his passion for art became irreversible
                and his parents began to strongly support this path.</p>
              <p>Throughout his childhood and lasting into life beyond, Mei Shi has found a
                consistent source of inspiration in the works of Eugene Delacroix and Vincent
                Van Gogh.</p>
              <p>Throughout his undergraduate arts experience, Mei Shi developed technical
                proficiency through realistic works, working long hours alongside his studies.
              </p>
            </div>
            <div className="imagebox">
              <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/meilife.jpg"} alt="Mei Shi in his childhood" />
            </div>
          </div>
        </div>
      </section>
      <section  className="branddesign">
        <div className="branddesign-container">
          <h2>Pivotal Moments</h2>
          <div className="design-flex">
            <div className="imagebox">
              <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/64 Memorial 1.jpg"} alt="Painting of the 1989 Democracy Movement" />
            </div>
            <div className="textbox">
              <p>During the June Fourth Incident, Students from the Central Academy of Fine Arts
                participated in the 1989 Democracy Movement and hoped to reach democracy and
                freedom in China through hunger strikes, speeches, and paintings. </p>
              <p>Mei Shi was injured during the June Fourth Incident and later censored and
                detained, during which time he became seriously ill and was moved to residential
                surveillance. Residential surveillance was lifted after the 1990 Asian Games.
              </p>

              <p>His creative journey was boosted in 1993 when he won first and second place for "China's First Computer Art
                Exhibition"</p>

              <p>For Mei Shi, claiming the top recognition of this prestigious exhibition sparked
                a serious interest in pursuing digital art and design. </p>
              <p>Equipped with a strong foundation from his undergraduate experiences and hoping
                to pilot a new life for himself, he started the prominent Chinese brand design
                company "Mainmast Brand Design."</p>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="branddesign-container">
          <h2>Education</h2>
          <div className="design-flex">
            <div className="textbox">
              <p>Mei Shi received an undergraduate degree at Central Academy of Fine Arts in Beijing, China, and MBA from the University of Economics and Business in Beijing, China, and a certificate at Sheridan College in Toronto, Canada. </p>
            </div>
            <div className="imagebox">
              <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/unipic.jpg"} alt="Mei Shi poses with diploma" />
            </div>
          </div>
        </div>
      </section>

      <section  className="branddesign">
        <div className="branddesign-container">
          <h2>Awards and Recognition</h2>
          <div className="awards-cols" style={{ maxWidth: "500px" }}>

            <h3>2022</h3>

            <ul >
              <li>
                Artist Gold Award of the "American Young Artists and Writers Alliance".
              </li>
              <li>
                “Harvest Art Exhibition" in the United States
              </li>
            </ul>



            <h3>2021</h3>
            <ul >
              <li>
                "Annual Art Exhibition" in Oregon, USA
              </li>
            </ul>

            <h3>2020</h3>
            <ul >
              <li>
                National Educator Award from the "League of Young Artists and Writers of America"
              </li>
            </ul>

            <h3>2018</h3>
            <ul >
              <li>Hawaii Bayview Golf Course Large Decorative Mural Design</li>
            </ul>

            <h3>2017</h3>
            <ul >
              <li>Invited as an expert judge of the 18th Beijing Youth Academic Speech Contest</li>
              <li>Recognized in "Top Ten Leaders in the Field of Chinese Art and Design in 2017"</li>
              <li>Top 10 Most Valuable Brands in China's Brand Design Industry in 2017</li>
              <li>“The World Earth Day" painting judge</li>
              <li>Toronto Art Exhibition, Canada</li>
            </ul>

            <h3>2016</h3>
            <ul >
              <li>"The World Earth Day" painting judge.</li>
              <li>Won the "2012-2015 Digital Science Contribution Award"</li>
              <li>May 3-5, LuAn Art Exhibition, Canada.</li>
              <li>May 7-9 Toronto Art Exhibition, Canada</li>
            </ul>

            <h3>2015</h3>
            <ul >
              <li>2014 China Outstanding Innovation Entrepreneur</li>
              <li>Invited to be the speech judge of the "Beijing Youth Academic Speech Contest" by Beijing Science and Technology
                Association</li>
            </ul>

            <h3>2014</h3>
            <ul >
              <li>2014 Brand China Culture and Art Industry Person of the Year - Best Design Award</li>
              <li>2014 Integrity China — Top 10 Honest People in Painting Design Industry</li>
              <li>2014 Integrity China — Top Ten Honest Brands in Art Design Industry</li>
              <li>Selected into the fifth issue of "CC Forum" featuring China's 2014 private innovation figures</li>
              <li>Recognized as “Outstanding Innovator” in "Top Ten Chinese Brand Design Industry in 2014" at large-scale event of
                national brand design industry influencers</li>
              <li>Top ten influential figures in China's brand design industry</li>
            </ul>
            <h3>2012</h3>
            <ul >
              <li>Invited to design the visual identity package of Xinzhong Property of Bank of China Building in Hong Kong</li>
            </ul>


            <h3>2011</h3>
            <ul >
              <li>China Design Biennial Award</li>
              <li>“Beijing Radio and Television" logo design Excellence Award</li>
            </ul>

            <h3>2010</h3>
            <ul >
              <li>China's top ten brand designers</li>
            </ul>

            <h3>2008</h3>
            <ul >
              <li>Painted a portrait of Mr. Li Ka-shing from Hong Kong after invitation of Cheung Kong Graduate School of Business
              </li>
              <li>Designed the China Exhibition of the 33rd Norwegian International Geological Congress</li>
            </ul>

            <h3>2006</h3>
            <ul >
              <li>"2006 China Excellent Corporate Image Designer" by The Chinese Cultural Management Society</li>
            </ul>


            <h3>2005</h3>
            <ul >
              <li>"China People Weekly" reported "Mei Shi and Mainmast Brand Design's Successful Journey"</li>
              <li>Beijing Benz visual identity brand image design</li>
            </ul>

            <h3>2004</h3>
            <ul >
              <li>Rome “32nd International Geographical Congress" design</li>
              <li>The huge mural "Silk Road" was exhibited at the Castel Sant’Angelo in Florence</li>
            </ul>


            <h3>2002</h3>
            <ul >
              <li>Won three awards for Zhonghua sedan advertisement design in the 2nd Chinese graphic design competition</li>
              <li>Honorable mention at 2nd Chinese Graphic Design Competition </li>
            </ul>

            <h3>1999</h3>
            <ul >
              <li>Completed brand image design for China Export & Credit Insurance Corporation and other companies</li>
            </ul>

            <h3>1996</h3>
            <ul >
              <li>"Science and Art" published by "Science and Technology Daily"</li>
            </ul>

            <h3>1993</h3>
            <ul >
              <li>Won first and second place for "China's First Computer Art Exhibition"</li>
            </ul>


            <h3>1992</h3>
            <ul >
              <li>20 digital art works in "Science and Art" exhibited by Li Zhengdao</li>
            </ul>

          </div>
        </div>
      </section>


    </div>
  );
}

export default About;