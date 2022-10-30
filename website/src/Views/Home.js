export default function Home(){
return (


    <>
    
    <body class="cursor-effect">

 

    <div id="cursor">
        <div id="circle"></div>
    </div>

 

    <div class="preloader">
        <div class="blob-1"></div>
        <div class="blob-2"></div>
    </div>
 
    {/* <div style="width:7vmax;" class="blob">
 
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
    </div> */}

 

    <div class="site-navbar navbar">
        <div class="navbar-content  d-flex w-100 align-items-center justify-content-between">
            <div class="logo-content ">
                <div class="logo">
                    <a href="/">
                        <img src="assets/images/icons/teddy.png" alt="teddy oweh logo"/>
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
                        <li onmouseover="newmenutext('Home')">
                            <a href="/">
                                <span class="menu-title">Home</span>
                                <span class="menu-number">-</span>
                            </a>
                        </li>
                        <li onmouseover="newmenutext('About')">
                            <a href=" /about ">
                                <span class="menu-title ">About</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onmouseover="newmenutext( 'Services') ">
                            <a href="/services ">
                                <span class="menu-title ">Services</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onmouseover="newmenutext( 'Portfolio') ">
                            <a href=" /portfolio ">
                                <span class="menu-title ">Portfolio</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>

                        <li onmouseover="newmenutext('Contact')">
                            <a href=" /contact ">
                                <span class="menu-title ">Contact</span>
                                <span class="menu-number ">-</span>
                            </a>
                        </li>
                        <li onmouseover="newmenutext( 'Resume') ">
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
    <div class="slideshow__slide-caption">
        <div class="slideshow__slide-caption-text">
            <div class="container js-parallax" id='revealmaintxt' data-speed="2" data-position="top" data-target="#js-header">
                <h3 class="cat">
                    <div class="home-text">

                        <p class="animate-text">
                            <span>Entreprenuer</span>
                            <span>Machine Learning Developer</span>
                            <span>FullStack Developer</span>
                            <span>Cloud Engineer</span>
                            <span>Tech Advocate</span>

                        </p>
                    </div>
                </h3>
                <h1 class="slideshow__slide-caption-title">Teddy Oweh</h1>
                <a class="slideshow__slide-btn align-items-center" href="/about">
                    <span class="btn-content d-flex align-items-center">
                        <span class="btn-circles">
                            <span class="btn-circle"></span>
                    <span class="btn-small-circle d-flex">
                                 
                            </span>
                    </span>
                    <span class="btn-txt">Get To Know Me</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
 

    <div class="header-home_footer">
        <div class="d-flex">
            <div class="header-follow">
                <ul>
                    <li>
                        <a class="cursor-alter" href="https://github.com/teddyoweh">GITHUB</a>
                    </li>
                    <li>
                        <a class="cursor-alter" href="mailto:teddy@teddyoweh.net">EMAIL</a>
                    </li>
                    <li>
                        <a class="cursor-alter" href="https://www.linkedin.com/in/teddyoweh/">LINKEDIN</a>
                    </li>
                    <li>
                        <a class="cursor-alter" href="https://www.instagram.com/teddyoweh_/">INSTAGRAM</a>
                    </li>
                    <li>
                        <a class="cursor-alter" href="https://twitter.com/teddyoweh_">TWITTER</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>

</body>
    </>
)

}