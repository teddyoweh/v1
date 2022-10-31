
import teddyimg from '../assets/imgs/ted.jpg';
import logo from '../assets/imgs/teddy.png';
export default function About(){

return (

<>


<body class="cursor-effect personal-page">

 

    <div id="cursor">
        <div id="circle"></div>
    </div>
 
    <div class="preloader">
        <div class="blob-1"></div>
        <div class="blob-2"></div>
    </div>
 
 

 

    <div class="navbar site-navbar">
        <div class="navbar-content  d-flex w-100 align-items-center justify-content-between">
            <div class="logo-content ">
                <div class="logo">
                    <a href="/">
                        <img src={logo} alt="teddy oweh logo"/>
                    </a>
                </div>
            </div>
            <div class="menu-icon d-flex align-items-center">
                <div class="menu-txt-btn">
                    <span class="menu-txt" data-hover="open">Menu</span>
                    <span class="close-txt">Close</span>
                </div>
                <div class="icon d-flex justify-content-center align-items-center parallax-item">
                    <div class="bar-content">
                        <span class="top-bar"></span>
                        <span class="bottom-bar"></span>
                    </div>
                </div>
            </div>
            <nav class="main-nav d-flex align-items-center">
                <center>
                    <div class="menu-bg-title" id="menutext">Menu</div>
                    <ul class="menu-content list-unstyled p-relative d-flex flex-column justify-content-center w-100 h-100">
                        <li onMouseOver="newmenutext('Home')">
                            <a href="/">
                                <span class="menu-title">Home</span>
                                <span class="menu-number">-</span>
                            </a>
                        </li>
                        <li onMouseOver="newmenutext('About')">
                            <a href=" /about ">
                                <span class="menu-title ">About</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onMouseOver="newmenutext( 'Services') ">
                            <a href="/services ">
                                <span class="menu-title ">Services</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onMouseOver="newmenutext( 'Portfolio') ">
                            <a href=" /portfolio ">
                                <span class="menu-title ">Portfolio</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>

                        <li onMouseOver="newmenutext('Contact')">
                            <a href=" /contact ">
                                <span class="menu-title ">Contact</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onMouseOver="newmenutext( 'Resume') ">
                            <a href="assets/Profile.pdf ">
                                <span class="menu-title ">Resume</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                    </ul>
                </center>
            </nav>
        </div>
    </div>
 
    <div class="about-section">
        <div class="about-content">
            <div class="about-header">
                TEDDY OWEH
            </div>
            <div class="about-main">
                <div class="about-teddy">

                    <span class="second-line">
                       <p>Making the world a better place, one line of code at a time</p>
                        
                    </span>
                    <center>
                        <div style="padding-top: 0;" class="slideshow__slide-caption-text">
                            <a class="slideshow__slide-btn align-items-center" href="/services">
                                <span class="btn-content d-flex align-items-center">
                            <span class="btn-circles">
                                <span class="btn-circle"></span>
                                <span class="btn-small-circle d-flex">
                                     
                                </span>
                                </span>
                                <span class="btn-txt">About my work</span>
                                </span>
                            </a>
                        </div>
                    </center>

                </div>
                <div class="about-img">
                    <img src={teddyimg} alt="Teddy Oweh"/>
                </div>
            </div>

        </div>
        <div class="speciality">
            <div class="speciality-header">
                Area of Expertise
            </div>
            <div class="speciality-body">
                <div class="row">
                    <div class="col">
                        <h4>Algorithm Design.</h4>
                        <p>I have developed a keen eye for detail and a knack for designing alogithms to efficiently solve Algorithmic based challenges. I am also experienced in working with large data sets and have a good understanding of computational
                            complexity.
                        </p>
                    </div>
                    <div class="col">
                        <h4>Software Dev. (Fullstack).</h4>
                        <p>Probably can't say everything about my Software Development Skills, but i have been building scalable softwares ranging from Mobile, Web! and Desktop applications for over 5years, i have a knack of making my frontend design close
                            to perfect, same goes with implementing backend functionalities, i have a handful of technical skills when working with Python Flasl/FastApi & NodeJs for API Development, ReactJS,NextJS ReactNative, (quite a number of them,
                            *js frameworks*), Cloud Platforms like, Azure, Linode and Heroku.
                        </p>
                    </div>
                    <div class="col">
                        <h4> Machine Learning Dev.</h4>
                        <p>Building ML Alogrithms and ML Models is an aspect of programming, that comes relatively easy to me. I have developed various Ml algorithms, feature selection process and models to solve predetermined challenges, seemseslly developed
                            APIs to carry out cross platform implementations, also participated in various research projects relating to the AI field.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>

 
 


</body>
</>

)

}