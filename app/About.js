import React from 'react'

export default function About() {
  return (
    <>
    <h1>About Page </h1>
    {/* About Start ------------------------------------------------------------------------ */}
{/* <!DOCTYPE html> */}
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
    {/* <link rel="stylesheet" href="style.css"> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  />
    <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"  />
</head>

<body>
    <section class="Sub-header">
        <nav>
            <a href="index.html" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </a>
            <div class="nav-links" id="navLinks">
{/*  Reposnive bar open and close ------------------------------------------------ */}
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
{/* Reposnive bar open and close -------------------------------------------------- */}
        </nav>
        <h1>About Us</h1>
    </section>

{/* About Us Section Start -------------------------------------------------------- */}

    <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" class="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div class="about-col">
                <img src="img/about.png" alt=""/>
            </div>
        </div>
    </section>

{/* About Us Section end ----------------------------------------------------------------- */}

{/*  Footer Section start -------------------------------------------------------------- */}
    <section class="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
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
    
{/*  Footer Section end ------------------------------------------------ */}

    <script src="script.js"></script>
</body>

</html>


    {/* About Ends ------------------------------------------------------------------------ */}
    </>
  )
}
