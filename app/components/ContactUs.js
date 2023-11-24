import React from 'react'

export default function ContactUs() {
  return (
    <>
    <h1>ContactUs Page </h1>
    {/*  ContactUs Page Start --------------------------------------------------------------------- */}
    {/* <!DOCTYPE html> */}
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ContactUs</title>
    {/* <link rel="stylesheet" href="style.css" /> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" />
</head>

<body>
    <section class="Sub-header">
        <nav>
            <a href="index.html" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </a>
            <div class="nav-links" id="navLinks">
{/* Reposnive bar open and close ------------------------------------------------------------------------- */}
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
{/*  Reposnive bar open and close ------------------------------------------------------------------------- */}
        </nav>
        <h1>Contact Us</h1>
    </section>

{/*  Contact Us Section Start ------------------------------------------------------------------------- */}

    <section class="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
    </section>

    <section class="contact-us">
        <div class="row">
            <div class="content-col">
                <div>
                    <i class="fa fa-home"></i>
                    <span>
                        <h5>NH9 Road, ABC Building</h5>
                        <p>Ghaziabad, Uttar Pradesh, IN</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <span>
                        <h5>+91 7445546525</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <span>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>
            <div class="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required    />
                    <input type="email" placeholder="Enter Email" required  />
                    <input type="text" placeholder="Enter Subject" required />
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <button type="submit" class="hero_btn btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

{/*  Contact Us Section End ------------------------------------------------------------------------- */}

{/* Footer Section Start ------------------------------------------------------------------------- */}
    <section class="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> 
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div class="icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
        </div>
        <p>Made with <i class="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
{/* Footer Section End ------------------------------------------------------------------------- */}

    <script src="script.js"></script>
</body>

</html>

    {/*  ContactUs Page Ends --------------------------------------------------------------------- */}
    </>
  )
}
