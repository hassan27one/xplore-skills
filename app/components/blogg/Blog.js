import React from 'react'
import Image from 'next/image'
import Link from "next/link"

function Blog() {
  return (
    <>
    {/* <h1>Blog Page </h1> */}

    {/* Blog Start ---------------------------------------------- */}

<html>

<head>
    {/* <meta charset="UTF-8"> */}
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"> */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    <title>Blog</title>
    {/* <link rel="stylesheet" href="style.css"> */}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> */}
    {/* <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"> */}
</head>

<body>
    <section class="Sub-header">
        <nav>
            <a href="index.html" class="logo" >Xplore
                <i class="fab fa-staylinked"></i>kill
            </a>
            <div class="nav-links" id="navLinks">
{/* reposnive bar open and close ------------------------------------- */}
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
{/* reposnive bar open and close ---------------------------------- */}
        </nav>
        <h1>Our Post</h1>
    </section>

{/* Blog Page Section Start ---------------------------------------- */}

    <section class="blog-content">
        <div class="row">
            <div class="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <Image src={"/post.png"} alt="image-2"  width={263} height={393} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?
                </p>
                <br/>
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>

                <div class="comment-box">
                    <h3>Leave a Comment</h3>
                    <form class="comment-form">
                        <input type="text" placeholder="Enter Name" required />
                        <input type="email" placeholder="Enter Email" required />
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <button type="submit" class="hero_btn btn">POST COMMENT</button>
                    </form>
                </div>
            </div>

            <div class="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>12</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Data Analytics</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Full Stack</span>
                    <span>20</span>
                </div>
            </div>
        </div>
    </section>

{/* Blog Page Section end ------------------------------------------ */}
    
{/* Footer Section start ------------------------------------------ */}
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

{/*  Footer Section end -------------------------------------------- */}

    <script src="script.js"></script>
</body>

</html>
    {/* Blog Ends ----------------------------------------------- */}
    </>
  )
}
