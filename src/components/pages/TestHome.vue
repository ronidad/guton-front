<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Clean.Shift</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- normalize css -->
    <!-- <link rel = "stylesheet" href = "resources/normalize.css"> -->
    <!-- font -->
    <!-- <link rel = "stylesheet" href = "resources/font.css"> -->
    <!-- font awesome cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
    <!-- magnific popup -->
    <link
      rel="stylesheet"
      href="resources/Magnific-Popup-master/dist/magnific-popup.css"
    />
    <!-- owl carousel -->
    <link
      rel="stylesheet"
      href="resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css"
    />
    <link
      rel="stylesheet"
      href="resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css"
    />
    <!-- animate css -->
    <!-- <link rel = "stylesheet" href = "resources/animate.css-main/animate.css"> -->
    <!-- custom (main) css -->
    <!-- <link rel="stylesheet" href="css/main.css"> -->
  </head>

  <!-- header -->
  <header class="header" id="intro">
    <nav class="navbar">
      <div class="container">
        <div class="brand-and-toggler">
          <a href="/" class="navbar-brand"> Clean<span></span>Shift </a>
          <button type="button" class="navbar-toggler" id="navbar-toggler">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#intro" class="nav-link">intro</a>
            </li>
            <li class="nav-item">
              <a href="#feature" class="nav-link">feature</a>
            </li>
            
            <li class="nav-item">
              <a href="#pricing" class="nav-link">pricing</a>
            </li>
            <li class="nav-item">
              <a href="#testimonial" class="nav-link">testimonial</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact Us</a>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <a href="/dashboard" class="nav-link">Dashboard</a>
            </li>
            <li v-else class="nav-item">
              <a href="/login" class="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="bodies"> -->

    <div class="hero-div center container">
      <h1>we collect garbage in your compound</h1>
      <p class="animate__animated animate__fadeInUp animate__slow">
        Give us the work to clean your compound. We collect weekly on saturdays
        throught the courts using our trucks as you pay your monthly bill of 400 per family. Engage us through <strong>0721725955</strong> 
      </p>

      <div class="hero-btns animate__animated animate__fadeInUp animate__slow">
       

       
            <button v-if="isLoggedIn" class="btn-white"> <a href="/dashboard" type="button" >Dashboard</a>
              </button>
              <button v-else class="btn-white"> <a href="/login" type="button" >Admin</a>
              </button>
      </div>
    </div>
<!-- </div> -->
  </header>
  <!-- end of header  -->
  <div class="allignLeft">


<!-- features section -->
<section class = "feature" id = "feature">
      <div class = "container">
        <div class = "row">
          <div class = "feature-left wow animate__animated animate__fadeInUp animate__slow">
            <img src = "../../assets/tako.jpg" alt = "tako image">
          </div>
          <div class = "feature-right wow animate__animated animate__fadeInUp animate__slow">
            <div class = "title">
              <h2>This is what we offer</h2>
              <p class = "text">We have an intergrated system that helps us manage garbage collection within your estate</p>
            </div>

            <div class = "feature-item">
              <span><i class = "fas fa-tablet-alt"></i></span>
              <div>
                <h3>weekly collections</h3>
                <p class = "text">            We collect weekly on saturdays to ensure  your compound is clean. This helps you arrange the gabbage and leave to us at the gate
</p>
              </div>
            </div>

            <div class = "feature-item">
              <span><i class = "fas fa-clone"></i></span>
              <div>
                <h3>MPesa payments</h3>
                <p class = "text">Pay our bills through mpesa and get your bills updates instantly. We have intergrated our paybill to match your payments with the account we regisred you.</p>
              </div>
            </div>
            <div class = "feature-item">
              <span><i class = "fas fa-clone"></i></span>
              <div>
                <h3>SMS updates</h3>
                <p class = "text">We send sms remiders to our customer to ensure they know our schedule and communicate any changes to our collections schedule. Stay up to date with our 24/7 alerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of features section -->
     <!-- pricing section -->
     <section class = "pricing" id = "pricing">
      <div class = "container">
        <!-- <div class = "title">
          <h2 class = "wow animate__animated animate__bounceIn animate__slow">Our Package</h2>
          <p class = "text">Lorem ipsum dolor sit amet consectetur</p>
        </div> -->

        <div class = "row wow animate__animated animate__fadeInUp animate__slow">
          <div class = "pricing-item">
            <h2>Weekely collections</h2>
            <div class = "price">
              <span>Kshs 400 </span>
              <span class = "text">Monthly</span>
            </div>
            <ul>
              <li>We provide paper bags for you to store your garbage</li>
              <li>We pick the garbage from your gate</li>
              <li>Pay after services have been offered</li>
              <li>Pay using mpesa and get alerts</li>
              <li>Payments updated automaticallya nd statement sent as text message</li>
              <li>Reliable and efficient Service</li>
            </ul>
          </div>

          

          
        </div>
      </div>
    </section>
    <!-- end of pricing section -->

    <!-- testimonial section -->
    <section class = "testimonial" id = "testimonial">
      <div class = "container">
        <div class = "title">
          <h2 class = "wow animate__animated animate__bounceIn animate__slow">Testimonials Words</h2>
          <p class = "text">Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div class = "row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__slow">
          <div class = "testimonial-item">
            <div class = "testimonial-img">
              <img src = "assets/test-1.jpg" alt = "">
            </div>
            <p>Since I engaged cleanshift we have controlled dogs that ised to come for remains</p>
            <span>Ronnie</span>
          </div>

          <div class = "testimonial-item">
            <div class = "testimonial-img">
              <img src = "assets/test-2.jpg" alt = "">
            </div>
            <p>The entire court is clean thanks to cleanshift. I encourage all members to ensure they clean their compounds</p>
            <span>Evans</span>
          </div>

          <div class = "testimonial-item">
            <div class = "testimonial-img">
              <img src = "assets/test-3.jpg" alt = "">
            </div>
            <p>They are relatively cheaper than the ones we wre using before moving here. Professional and timely services. I recommend</p>
            <span>Jane</span>
          </div>
        </div>
      </div>
    </section>
    <!-- end of testimonial section -->

    <!-- contact section -->
    <section class = "contact" id = "contact">
      <div class = "container">
        <div class = "title">
          <h2 class = "wow animate__animated animate__bounceIn animate__slow">Contact Us</h2>
          
        </div>

        <div class = "row wow animate__animated animate__fadeInUp animate__slow">
          

          <div class = "contact-right">
            <div>
              <h2>Visit us</h2>
              <p class = "text">Tulivu court, off shanglia road next to SSmeta road</p>
            </div>
            <div>
              <h2>Call Us</h2>
              <p class = "text">0721725955</p>
            </div>
            <div>
              <h2>Send Email</h2>
              <p class = "text">cleanshift@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of contact section -->

    <!-- footer -->
    <!-- <footer class = "footer center">
      <div class = "container">
        <p class = "text">Copyright &copy; clean shift ventures | All Rights Reserved</p>
        <div class = "footer-links">
          <a href = "#" class = "center">
            <i class = "fab fa-facebook-f"></i>
          </a>
          <a href = "#" class = "center">
            <i class = "fab fa-instagram"></i>
          </a>
          <a href = "#" class = "center">
            <i class = "fab fa-linkedin"></i>
          </a>
          <a href = "#" class = "center">
            <i class = "fab fa-twitter"></i>
          </a>
          <a href = "#" class = "center">
            <i class = "fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer> -->
    <!-- end of footer -->



  </div>
</template>
<script>
export default {
    computed: {
       isLoggedIn() {
         return this.$store.getters.isLoggedIn;
       },
     },
   
     methods:{
       handleLogout() {
         this.$store.dispatch('clearToken')
         localStorage.removeItem('token') // clear your user's token from localstorage
         localStorage.removeItem('user') // clear your user from localstorage
   
         this.$router.push('/login')
   
       }
     },
     data(){
             return {
                  user: ""
             }
        },
        mounted(){
             let user = localStorage.getItem('user')
             this.user = JSON.parse(user)
        },
   }
   </script>

<style scoped>
:root {
  --mount-meadow: #1bbc9c;
  --white-smoke: #f0f0f0;
  --night-rider: #343434;
  --black: #191b17;
  --transition: all 0.5s ease-in-out;
}
* {
  font-family: "Hind Siliguri", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  color: var(--black);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}
.bodies {
  background: #1bbdee;
  margin-left: -130px !important;
  margin-top: 150px;
  position: fixed;
  background: transparent;
}
.allignLeft {
  margin-left: -200px !important;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
  color: var(--black);
}
li {
  list-style-type: none;
}
button {
  cursor: pointer;
  outline: 0;
  background: transparent;
}
.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0.6rem 0;
  line-height: 1.25;
  font-weight: 400;
  text-transform: capitalize;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Headers */
.header {
  background-image: linear-gradient(rgba(16, 19, 16, 0.8), rgba(100, 110, 104, 0.7)), url(../../assets/garbage.jpg);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-left: -220px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color:  rgb(20, 19, 19);
  z-index: 999;
}
.brand-and-toggler {
  font-size: 1.65rem;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  font-weight: 500;
  color: var(--night-rider);
}
.navbar-brand span {
  color: var(--mount-meadow);
}
.navbar-toggler {
  border: none;
  color: var(--mount-meadow);
}
.navbar-nav {
  margin: 0.2rem 0 0.6rem 0;
}
.nav-item {
  padding: 0.6rem 0;
}
.nav-link {
  text-transform: uppercase;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  font-weight: 400;
  opacity: 0.65;
  transition: var(--transition);
}
.nav-link:hover {
  color: var(--mount-meadow) !important;
}
.navbar-collapse {
  display: none;
}
.hero-div {
  flex: 1;
  flex-direction: column;
  text-align: center;
}
.hero-div h1 {
  font-size: 2.55rem;
  padding-bottom: 0.4rem;
}
.hero-div p {
  color: var(--white-smoke);
  font-size: 1.05rem;
  letter-spacing: 3px;
}
.hero-btns {
  margin-top: 2.8rem;
}
.hero-btns button {
  border: 3.5px solid #fff;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
}
.btn-trans {
  color: #fff;
  transition: var(--transition);
  display: none;
}
.btn-trans:hover {
  background: var(--mount-meadow);
  border-color: var(--mount-meadow);
}
.btn-white {
  background: #fff;
  color: var(--night-rider);
  transition: var(--transition);
}
.btn-white:hover {
  background: transparent;
  color: #fff;
}

/* detail */
.detail{
    background: var(--white-smoke);
}
.detail-item{
    background: #fff;
    text-align: center;
    box-shadow: 0 1px 2px 0 rgba(90, 91, 95, 0.1);
    -webkit-box-shadow: 0 1px 2px 0 rgba(90, 91, 95, 0.1);
    -moz-box-shadow: 0 1px 2px 0 rgba(90, 91, 95, 0.1);
    margin: 2rem 0;
    padding: 3.5rem 1.5rem;
    border-radius: 4px;
    transition: var(--transition);
}
.detail-item:hover{
    -webkit-box-shadow: 0 21px 19px -2px rgba(217, 217, 217, 1);
    -moz-box-shadow: 0 21px 19px -2px rgba(217, 217, 217, 1);
    box-shadow: 0 21px 19px -2px rgba(217, 217, 217, 1);
    transform: translateY(-5px);
}
.detail-item span{
    font-size: 2.5rem;
}
.detail-item h2{
    font-size: 1.4rem;
    opacity: 0.8;
    font-weight: 300;
}
.line{
    width: 45px;
    margin: 1.2rem auto;
    background: var(--mount-meadow);
    height: 2.5px;
}

/* feature */
.feature .title{
    text-align: left;
}
.feature-left img{
    width: 80%;
    margin: 0 auto;
}
.feature-right{
    margin-top: 4rem;
}
.feature-item{
    margin: 1.4rem 0;
    display: flex;
}
.feature-item div h3{
    margin-top: 0;
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.85;
}
.feature-item span{
    font-size: 1.1rem;
    color: #fff;
    background: var(--mount-meadow);
    align-self: flex-start;
    padding: 0.4rem 0.7rem;
    border-radius: 2px;
    margin-right: 1.4rem;
}


@media screen and (min-width: 768px) {
  .detail .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .detail .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .navbar {
    background: transparent;
    margin-top: 1.4rem;
    height: 60px;
  }
  .navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar-brand {
    color: var(--white-smoke);
    font-size: 2rem;
  }
  .navbar-toggler {
    display: none;
  }
  .navbar-collapse {
    display: block !important;
  }
  .navbar-nav {
    display: flex;
    margin: 0;
  }
  .nav-item {
    margin-left: 1.8rem;
  }
  .nav-link {
    color: var(--white-smoke);
  }
  .hero-div h1 {
    font-size: 3.8rem;
  }
  .btn-trans {
    display: inline-block;
    margin-right: 0.8rem;
  }
  .navbar {
    -webkit-box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    -moz-box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    box-shadow: 0 2px 5px 0 rgba(207, 205, 207, 0.3);
    margin-top: 0;
    background: rgb(63, 79, 82);
  }
  .navbar .navbar-brand {
    color: var(--night-rider);
  }
  .navbar .nav-link {
    color: var(--night-rider);
  }
  .feature .row{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        column-gap: 2rem;
    }
    .feature-right{
        margin-top: 0;
    }
    .video p{
        width: 60%;
    }
}
/* pricing */
.pricing .row{
    margin-top: 2rem;
}
.pricing-item{
    border: 2.5px solid #f9f9f9;
    text-align: center;
    padding: 3.4rem 0;
    margin: 2rem 0;
}
.pricing-item h2{
    color: var(--night-rider);
    opacity: 0.7;
    font-size: 1.5rem;
}
.pricing-item .price{
    padding: 1.5rem 0 1rem 0;
    line-height: 1.1;
}
.pricing-item .price span{
    display: block;
}
.pricing-item .price span:first-child{
    font-size: 2.6rem;
    letter-spacing: 2px;
    color: var(--mount-meadow);
}
.pricing-item .price span:last-child{
    font-size: 0.85rem;
    letter-spacing: 1;
    font-weight: 500;
}
.pricing-item ul li{
    padding: 0.8rem 0;
    opacity: 0.7;
}

/* testimonial */
.testimonial{
    background-image: linear-gradient(rgba(27, 188, 156, 0.8), rgba(27, 188, 156, 0.9)), url(../../assets/tako.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
.testimonial .title h2,
.testimonial .title{
    color: #fff;
}
.testimonial .row{
    margin-top: 2rem;
}
.testimonial-img{
    border: 4px solid #fff;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 2.5rem auto;
    padding: 0.5rem;
}
.testimonial-img img{
    border-radius: 50%;
}
.testimonial-item{
    text-align: center;
}
.testimonial-item p{
    font-size: 1.3rem;
    color: var(--white-smoke);
    line-height: 1.7;
}
.testimonial-item span{
    margin-top: 0.7rem;
    display: block;
    font-size: 1.1rem;
    color: #fff;
    font-weight: 500;
}

/* contact */
.contact .row{
    margin-top: 2rem;
}
.contact .row > div{
    margin: 2rem 0;
    padding: 1rem 0;
}
.contact .row > div h2{
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.9;
}
.contact-left form input,
.contact-left form textarea{
    width: 100%;
    font-size: 1.1rem;
    margin: 0.2rem 0;
    padding: 0.8rem 0.6rem;
    border: none;
    border-bottom: 1.5px solid #f0f0f0;
    outline: 0;
}
.contact-left form input::placeholder,
.contact-left form textarea::placeholder{
    font-size: 1.1rem;
    font-weight: 300;
    opacity: 0.8;
}
.contact-left form input:focus,
.contact-left form textarea:focus{
    border-color: var(--night-rider);
}
.submit-btn{
    margin: 1rem 0;
    border: none;
    font-size: 1.3rem;
    color: #fff;
    background: var(--mount-meadow);
    opacity: 0.9;
    padding: 0.8rem 3.4rem;
    border-radius: 2rem;
    transition: var(--transition);
}
.submit-btn:hover{
    background: var(--black);
}
.contact-right div{
    margin: 2rem 0;
}

/* footer */
.footer{
    text-align: center;
    background: var(--black);
    color: var(--white-smoke);
    padding: 2rem 0;
    height: 50vh;
}
.footer .text{
    opacity: 0.8;
}
.footer-links{
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
}
.footer-links a{
    color: var(--white-smoke);
    opacity: 0.8;
    width: 50px;
    height: 50px;
    margin: 0 0.2rem;
    border-radius: 50%;
    transition: var(--transition);
}
.footer-links a:hover{
    background: var(--mount-meadow);
}

</style>
