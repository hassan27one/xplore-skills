import React from 'react'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div>
        {/* <h1>LandingPage page</h1> */}

<html lang="en">

<head>
    {/* <meta charset="UTF-8"> */}
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"> */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    <title>Xplore</title>
    {/* <link rel="stylesheet" href="style.css"> */}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> */}
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"> */}
</head>

<body>
    <section    class="header">
    <nav>
            <a href="index.html" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </a>
            <div class="nav-links" id="navLinks">
              
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="course.html">Course</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div class="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" class="hero_btn">Visit Us To Know More</a>
        </div>

    </section>

    {/*  Course Section Start ---------------------------------------------------------------- */}
    <section class="course">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div class="course-col">
                <h3>Graduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div class="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
        </div>
    </section>
    {/*  Course Section End ---------------------------------------------------------------- */}

    {/*  Campus Section Start ---------------------------------------------------------------- */}

<section class="campus">
    <div class="PageBlock">
        <div class="verticalLine"></div>
        <div class="Clear"></div>
    </div>
    <h1>TAKE OUR VIRTUAL TOUR</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div class="row">
        <div class="campus-col">
            
            <img  src='/Campus1.png' alt="image-1"/>
            <div class="layer">
                <h3>DELHI</h3>
            </div>
        </div>
        <div class="campus-col">
            <img src="/Campus2.png" alt="image-2"/>
            <div class="layer">
                <h3>HYDERABAD</h3>
            </div>
        </div>
        <div class="campus-col">
            <img src="/Campus3.png" alt="image-3"/>
            <div class="layer">
                <h3>MUMBAI</h3>
            </div>
        </div>
    </div>
</section>
{/* Campus Section End ---------------------------------------------------------------- */}

{/* Facilities Section Start ---------------------------------------------------------------- */}
    <section class="facilities">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="facilities-col">
                <img src="/libary.png" alt="picture-1"/>
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
                <img src="/playground.png" alt="picture-2"/>
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
                <img src="/food.png" alt="picture-3"/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>
    {/*  Facilities Section End ---------------------------------------------------------------- */}

    {/* Testimonials Section Start ---------------------------------------------------------------- */}
    <section class="testimonials">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="testimonials-col">
                <img src="/user.png" alt="piccccc"/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="testimonials-col">
                <img src="/user.png" alt="piccccc"/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>
    {/* Testimonials Section End ---------------------------------------------------------------- */}

    {/*  Call To Action Section Start ------------------------------------ */}
    <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
    </section>
    {/*  Call To Action Section End ---------------------------------- */}

    {/* Footer Section Start ---------------------------------------- */}
    <section class="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div class="icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
        </div>
        <p>Made with <i class="fas fa-heart"></i> by <a href="index.html">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    {/*  Footer Section End ------------------------------------------------- */}

    <script src="script.js"></script>



</body>

</html>

    </div>
  )
}
