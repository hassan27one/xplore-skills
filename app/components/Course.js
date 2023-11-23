import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



export default function Course() {
  return (
    <>
        {/* <h1>Course Page </h1> */}
        {/* <Link href={"/"}>Link to Home Page </Link> */}
{/* html start------------------------------------------------------------ */}
<html lang="en">

<head>
    {/* <meta charset="UTF-8"> */}
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"> */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    <title>Course</title>
    {/* <link rel="stylesheet" href="style.css"> */}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> */}
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"> */}
</head>

<body>
    <section class="Sub-header">
        <nav>
            <a href="index.html" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </a>
            <div class="nav-links" id="navLinks">
                {/* reposnive bar open and close ------------------------------------------ */}
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
            {/* reposnive bar open and close ------------------------------------------- */}
        </nav>
        <h1>Our Courses</h1>
    </section>

    {/* course start -------------------------------------------------------- */}

    <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
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

    {/*  course end ------------------------------------------------------ */}

    {/* best course start ------------------------------------------------- */}

    <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="facilities-col">
            <Image  src={"/course1.png"} alt="image-1" width={135} height={188}   />
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
            <Image  src={"/course2.png"} alt="image-2" width={135} height={188}   />
                <h3>Artificial Intelligence</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div class="facilities-col">
            <Image  src={"/course3.png"} alt="image-2" width={135} height={188}   />
                <h3>Data Science</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>

    {/* best courses end ---------------------------------------- */}

    {/*  Footer start ------------------------------------------ */}
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
    {/* Footer end -------------------------------------------------- */}

    <script src="script.js"></script>
</body>

</html>
        {/* html Ends-------------------------------------- */}
    </>
  )
}