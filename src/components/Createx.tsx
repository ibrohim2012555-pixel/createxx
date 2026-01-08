

import { useState } from 'react'

export const Createx = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img width="160px" height="29px" src="/logo.png" alt="" />

              {/* Desktop Menu */}
              <div className={`uls ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                  <li><a href="#" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                  <li><a href="#" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
                  <li><a href="#" onClick={() => setIsMenuOpen(false)}>Events</a></li>
                  <li><a href="#" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
                  <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
                </ul>
                {/* Mobile Buttons inside menu for easier access */}
                <div className="mobile-btns">
                  <button className="nav-btn" onClick={() => setIsMenuOpen(false)}>Get consultation</button>
                  <button className="btn2-nav" onClick={() => setIsMenuOpen(false)}><i className="fa-regular fa-user"></i> Log in / Register</button>
                </div>
              </div>
            </div>

            <div className="btns-nav desktop-btns">
              <button className="nav-btn">Get consultation</button>
              <button className="btn2-nav"><i className="fa-regular fa-user"></i> Log in / Register</button>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
        <div className="hero">
          <div className="container">
            <div className="video-hero">
              <img width="84px" height="84px" src="/hover.png" alt="" />
              <p className="video-p">Play showreel</p>
            </div>
            <div className="left-right">
              <div className="left">
                <h1 className="hero-text-h1">Enjoy studying
                  with Createx Online Courses</h1>
                <button className="right-btn">About us</button>
                <button className="nav-btn">Explore courses</button>
              </div>
              <div className="right">
                <img width="602px" height="551px" src="/a.png"
                  alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="right-left">
          <div className="left">
            <img width="705px" height="560px" src="/image.png" alt="" />
          </div>
          <div className="right">
            <div className="right2">
              <p className="right-p1">Who we are</p>
              <h2 className="right-h2">Why Createx?</h2>
            </div>
            <p className="yes-p">
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </p>
            <p className="yes-p">
              Vulputate placerat amet pulvinar lorem nisl.
            </p>
            <p className="yes-p">
              Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
            </p>
            <p className="yes-p">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </p>
            <p className="yes-p">
              Tincidunt sagittis neque sem ac eget.
            </p>
            <p className="yes-p1">
              Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
            </p>
            <button className="nav-btn">
              More about us
            </button>
          </div>
        </div>
        <div className="card-text">
          <div className="card-text-h">
            <h3 className="card-text-h3">Ready to learn?</h3>
            <h2 className="card-text-h2">Featured Courses</h2>
          </div>
          <button className="right-btn">View all courses</button>
        </div>
        <div data-aos="fade-up" className="cards">
          <div className="card">
            <img width="214px" height="214px" src="/b.png" alt="" />
            <div className="text-card">
              <button className="face-btn">Marketing</button>
              <h2 className="card-h2">The Ultimate Google Ads Training Course</h2>
              <div className="span-p"><span>$100</span>
                <p className="span-p-p">by Jerome Bell</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="214px" height="214px" src="/f.png" alt="" />
            <div className="text-card">
              <button className="face-btn">Management</button>
              <h2 className="card-h2">Prduct Management Fundamentals</h2>
              <div className="span-p"><span>$480</span>
                <p className="span-p-p">by Marvin McKinney</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="214px" height="214px" src="/c.png" alt="" />
            <div className="text-card">
              <button className="face-btn">HR & Recruting</button>
              <h2 className="card-h2">HR Management and Analytics</h2>
              <div className="span-p"><span>$200</span>
                <p className="span-p-p">by Leslie Alexander Li</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="214px" height="214px" src="/r.png" alt="" />
            <div className="text-card">
              <button className="face-btn">Marketing</button>
              <h2 className="card-h2">Brand Management & PR Communications</h2>
              <div className="span-p"><span>$530</span>
                <p className="span-p-p">by Kristin Watson</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="214px" height="214px" src="/d.png" alt="" />
            <div className="text-card">
              <button className="face-btn">Management</button>
              <h2 className="card-h2">Business Development Management</h2>
              <div className="span-p"><span>$400</span>
                <p className="span-p-p">by Dianne Russell</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="214px" height="214px" src="/j.png" alt="" />
            <div className="text-card">
              <button className="face-btn">Design</button>
              <h2 className="card-h2">Graphic Design Basic</h2>
              <div className="span-p"><span>$500</span>
                <p className="span-p-p">by Guy Hawkins</p>
              </div>
            </div>
          </div>
        </div>
        <p className="our">Our benefits</p>
        <h1 className="our-h1">That’s how we do it</h1>
        <div className="blocks">
          <button className="btn-blocks"><i className="fa-regular fa-star"></i> Experienced Tutors</button>
          <div className="blocks-text"><i className="fa-regular fa-thumbs-up"></i>
            <p className="like">Feedback & Support</p>
          </div>
          <div className="blocks-text">
            <p className="like"><i className="fa-regular fa-comments"></i> 24/7 Online Library</p>
          </div>
        </div>
        <div className="hero-left-right">
          <div className="hero-left">
            <h1 className="hero-left-h1">Only practicing tutors</h1>
            <p className="hero-left-p">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
              suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit
              diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa
              ut amet. Amet enim, nisi tempus vehicula.</p>
          </div>
          <div className="hero-right">
            <img width="600px" height="440px" src="/illustration (1).png" alt="" />
          </div>
        </div>
      </div>

      <div className="events">
        <p className="event-header-p">Our Events</p>
        <h1 className="event-header-h1">Lectures & workshops</h1>
        <div className="container">
          <div className="cards-events">
            <div className="card-events">
              <div className="head">
                <div className="h2-p">
                  <h2 className="head-h2">05</h2>
                  <div className="days">
                    <h3 className="days-aug">August</h3>
                    <p className="time">11:00 – 14:00</p>
                  </div>
                </div>
                <div className="head-center">
                  <h2 className="head-center-h2">Formation of the organizational structure of the company in the
                    face of uncertainty.</h2>
                  <p className="head-center-p">Online master-class</p>
                </div><button className="left-btn">View more</button>
              </div>

              <div className="head">
                <div className="h2-p">
                  <h2 className="head-h2">24</h2>
                  <div className="days">
                    <h3 className="days-aug">July</h3>
                    <p className="time">11:00 – 12:30</p>
                  </div>
                </div>
                <div className="head-center">
                  <h2 className="head-center-h2">Building a customer service department. Best Practices.</h2>
                  <p className="head-center-p">Online lecture</p>
                </div><button className="left-btn">View more</button>
              </div>

              <div className="head">
                <div className="h2-p">
                  <h2 className="head-h2">16</h2>
                  <div className="days">
                    <h3 className="days-aug">July</h3>
                    <p className="time">10:00 – 13:00</p>
                  </div>
                </div>
                <div className="head-center">
                  <h2 className="head-center-h2">How to apply methods of speculative design in practice.
                    Worldbuilding prototyping.</h2>
                  <p className="head-center-p">Online workshop</p>
                </div><button className="left-btn">View more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="h2-btn">
          <h2 className="h2-h2">Do you want more?</h2>
          <button className="btn-btn">Explore all events</button>
        </div>
      </div>
      <div className="container">
        <div className="certificat">
          <div className="certificat-left-right">
            <div className="certificat-left">
              <h3 className="certificat-h3">Createx Certificate</h3>
              <h1 className="certificat-h1">Your expertise will be confirmed</h1>
              <p className="certificat-p">We are accredited by international professional organizations and
                institutes:</p>
              <div className="logos">
                <img src="/images/logo.svg" alt="" />
                <img src="/images/logo (1).svg" alt="" />
                <img src="/images/logo (2).svg" alt="" />
              </div>
            </div>
            <div className="certificat-right">
              <img width="705px" height="500px" src="/image (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="team-head">
            <div className="team-text">
              <p className="team-text-p">Best tutors are all here</p>
              <h2 className="team-text-h2">Meet our team</h2>
            </div>
            <div className="sterlka">
              <i className="fa-solid fa-arrow-left"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div data-aos="fade-up" className="bg-cards">
            <div className="bg-card">
              <div className="bg">
                <div className="bg-img">
                  <img className="img" width="345px" height="320px"
                    src="/d.png" alt="" />
                </div>
              </div>
              <h3 className="bg-h3">Dianne Russell</h3>
              <p className="bg-p">Founder and CEO</p>
            </div>
            <div className="bg-card">
              <div className="bg">
                <div className="bg-img">
                  <img className="img2" width="285px" height="305px object-cover"
                    src="/o2.png" alt="" />
                </div>
              </div>
              <h3 className="bg-h3">Jerome Bell</h3>
              <p className="bg-p">Founder and Program Director</p>
            </div>
            <div className="bg-card">
              <div className="bg">
                <div className="bg-img">
                  <img className="img3" width="255px" height="310px"
                    src="/03.png" alt="" />
                </div>
              </div>
              <h3 className="bg-h3">Kristin Watson</h3>
              <p className="bg-p">Marketer, Curator of Marketing Course</p>
            </div>
            <div className="bg-card">
              <div className="bg">
                <div className="bg-img">
                  <img className="img4" width="255px" height="290px"
                    src="/04.png" alt="" />
                </div>
              </div>
              <h3 className="bg-h3">Marvin McKinney</h3>
              <p className="bg-p">PM, Curator of Management Course</p>
            </div>
          </div>

          <div data-aos="fade-right" className="text">
            <p className="main-p">TESTIMONIALS</p>
            <h1 className="main-h1">What our students say</h1>
          </div>

          <div className="lorem">
            <div data-aos="fade-left" className="lorem-text">
              <p className="lorem-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra
                arcu diam maecenas diam integer in.</p>
              <div className="eleanor">
                <img src="/image (2).png" alt="" />
                <div className="pena-text">
                  <h3 className="pena">Position, Course</h3>
                  <p className="course">Position, Course</p>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br />
        </div>
      </main>

      <div className="container">
        <div className="post-text">
          <div className="p-h1">
            <p className="post-p">Our blog</p>
            <h1 className="post-h1">Latest posts</h1>
          </div>
          <button className="nav-btn">Go to blog</button>
        </div>
        <div className="post-cards">
          <div data-aos="zoom-in-up" className="post-card">
            <img src="/p1.png" alt="" />
            <h3 className="post-h3">What is traffic arbitrage and does it really make money?</h3>
            <p className="post-p2">Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin
              dignissim lacus, purus gravida...</p>
            <p className="go"><b>Listen</b> <i className="fa-solid fa-arrow-right"></i></p>
          </div>
          <div data-aos="zoom-in-up" className="post-card">
            <img src="/p2.png" alt="" />
            <h3 className="post-h3">What to do and who to talk to if you want to get feedback on the product</h3>
            <p className="post-p2">Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna
              sagittis faucibus...</p>
            <p className="go"><b>Watch</b> <i className="fa-solid fa-arrow-right"></i></p>
          </div>
          <div data-aos="zoom-in-up" className="post-card">
            <img src="/p3.png" alt="" />
            <h3 className="post-h3">Should you choose a creative profession if you are attracted to creativity?</h3>
            <p className="post-p2">Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed
              vulputate ultrices...</p>
            <p className="go"><b>Read</b> <i className="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
      </div>
      <div className="foot">
        <p className="foot-p">Don’t miss anything</p>
        <h1 className="foot-h1">Subscribe to the Createx School announcements</h1>
        <div className="input">
          <input placeholder="Your working email" type="email" />
          <button className="btn4" type="submit">Subscribe</button>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer">
            <div className="logo-footer">
              <img src="/images/logo.png" alt="" />
              <p className="p-footer">Createx Online School is a leader in online studying. We have lots of courses
                and programs from the main market experts. We provide relevant approaches to online learning,
                internships and employment in the largest companies in the country. </p>
              <div className="images">
                <img src="/images/socials.svg" alt="" />
              </div>
            </div>
            <div className="header-footer-text">
              <div className="footer-text">
                <h3 className="footer-h3">SITE MAP</h3>
                <p className="footer-p">About Us</p>
                <p className="footer-p">Courses</p>
                <p className="footer-p">Events</p>
                <p className="footer-p">Blog</p>
                <p className="footer-p">Contacts</p>
              </div>
              <div className="footer-text">
                <h3 className="footer-h3">COURSES</h3>
                <p className="footer-p">Marketing</p>
                <p className="footer-p">Management</p>
                <p className="footer-p">HR & Recruting</p>
                <p className="footer-p">Design</p>
                <p className="footer-p">Development</p>
              </div>
              <div className="footer-text2">
                <h3 className="footer-h3">CONTACT US</h3>
                <p className="footer-p">(405) 555-0128</p>
                <p className="footer-p">hello@createx.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
