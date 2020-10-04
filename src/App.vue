<template>
  <div id="app">
    <main> 
      <!-- Navbar -->
      <nav id="navbar-yann" class="navbar fixed-bottom navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" href="#">Yann Rioual</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <span class="navbar-text text-left">
            Développeur Web Junior
          </span>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#apropos">A propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#formation">Formation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projetsweb">Projets Web</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>


        <!-- Header -->
        <header>
          <div ref="headerInfo" class="container header-info">
              <div class="row">
              <div class="col-sm city">
                  <p>
                  <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  Rennes
                  </p>
              </div>
              <div class="col-sm">
                  <p>
                  Portfolio
                  </p>
              </div>
              <div class="col-sm mail">
                  <p>
                  rioualy@gmail.com
                  </p>
              </div>
              </div>
          </div>
          
          <h1 ref="h1">Yann Rioual</h1>
          
          <h2 ref="h2">Développeur Web Junior</h2>
      
          <picture>
                <source media="(max-width: 575.97px)" srcset="./assets/img/yann-rioual-portrait-180x270.png">
                <source media="(min-width: 575.98px)" srcset="./assets/img/yann-rioual-portrait-328x492.png">
                <source media="(max-width: 768px)" srcset="./assets/img/yann-rioual-portrait-328x492.png">
                <source media="(min-width: 769px)" srcset="./assets/img/yann-rioual-portrait-409x614.png">
                <img id="apropos" ref="portrait" src="./assets/img/yann-rioual-portrait-409x614.png" class="portrait" alt="portrait Yann Rioual">
          </picture> 
        </header>

        <!-- A propos -->
        <Apropos></Apropos>  
        <!-- Formation -->
        <Formation></Formation>  

        <!-- Projets Web -->
        <section ref="projetWeb" id ="projetsweb" class="section-projets-web">
          <div ref="projetWebTrigger" class="container min-vh-100">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_PdzoiE.json"  background="transparent"  speed="1"  style="margin: auto; width: 110px; height: 110px;"  loop autoplay></lottie-player> 
            <h3 class="mt-4">Projets Web</h3>
            <hr class="separationProjetWeb mb-5">
            <div class="row align-items-center shadow rounded-lg mb-5">
                <div class="col-lg m-4">
                <img src="./assets/img/projet-web-ian-tocor.png" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de l'artiste Ian Tocor">
                </div>
                <div class="col-lg m-4">
                    <h3 class="mb-4 mt-0">Ian Tocor</h3>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus cupiditate ducimus rem fugiat unde optio voluptatum placeat laudantium natus.</p>
                    <a href="https://iantocor.com/" target=”_blank” class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
                </div>
            </div> 
            <div class="row align-items-center shadow rounded-lg mb-5">
              <div class="villaBouBouTxt col-lg m-4">
                <h3 class="mb-4 mt-0">Villa Boubou</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus cupiditate ducimus rem fugiat unde optio voluptatum placeat laudantium natus.</p>
                <a href="https://villaboubourennes.fr/" target=”_blank” class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
              </div>
              <div class="villaBouBouImg col-lg m-4">
                <img src="./assets/img/projet-web-villa-boubou.png" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de la boutique Villa Boubou">
              </div>
            </div> 
             <div class="row align-items-center shadow rounded-lg mb-5">
                <div class="col-lg m-4">
                <img src="./assets/img/projet-web-35volts.png" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de 35 Volts, projet agri-culturel à Rennes">
                </div>
                <div class="col-lg m-4 ">
                    <h3 class="mb-4 mt-0">35 Volts</h3>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus cupiditate ducimus rem fugiat unde optio voluptatum placeat laudantium natus.</p>
                    <a href="https://35volts.fr/" target=”_blank” class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>    
                </div>
            </div>   
          </div>
         

        </section>

        <!-- Contact -->
        <div ref="contactTrigger"></div>
        <section ref="contactTrigger" class="section-contact pt-0 p-5">
        <div class="container">
          <div id="contact" class="photoPosition">
            <img ref="portraitContact" class="portraitContact" src="./assets/img/silhouette.png" alt="silhouette Yann Rioual">   
            <img ref="landscape" class="landscape" src="./assets/img/landscape.png" alt="landscape seascape">  
          </div>
          <h3 ref="h3Contact">Rencontrons nous.</h3>
          <div ref="contactMail" class="contactMail">rioualy@gmail.com</div>
          <hr ref="hrContact" class="hrContact">
          <!-- <div><a href="https://github.com/TocWebProject/" target="_blank"><img src="./assets/img/logo-github.svg.png" class="gitHubLogo" alt="Logo GitHub"></a></div>
          <div><a href="#" target="_blank"><img src="./assets/img/logo-linkedin-black.svg.png" class="linkedinLogo" alt="Logo Linkedin"></a></div> -->
        </div>

        </section>
        
    </main>
    <!-- Intro -->
    <div ref="intro" class="intro">
      <div class="intro-text">
        <h1 class="hide">
          <span ref="text1" class="text">Hello World</span>
        </h1>
        <h1 class="hide">
          <span ref="text2" class="text">Bienvenue sur</span>
        </h1>
        <h1 class="hide">
          <span ref="text3" class="text">mon portfolio.</span>
        </h1>
      </div>
    </div>
    <div ref="slider" class="slider"></div>
    
  
  </div>
     
</template>

<script>
import Apropos from './components/Apropos.vue'
import Formation from './components/Formation.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import { TimelineLite } from 'gsap'


export default {
  name: 'App',
  components: {
    Apropos,  
    Formation
  },
  methods: {
    introAnimation(){
       // GSAP ANIMATION FOR INTRO
    const { text1, text2, text3, slider, intro, headerInfo, portrait, h1, h2 } = this.$refs
    const timeline = new TimelineLite()
    
    timeline.to(text1, {
      y: "0%", duration: 1, stagger: 0.25
    }, "-=0.5")
    timeline.to(text2, {
      y: "0%", duration: 1, stagger: 0.25
    }, "-=0.5")
    timeline.to(text3, {
      y: "0%", duration: 1, stagger: 0.25
    }, "-=0.5")
    timeline.to(slider, {
       y: "-100%", duration: 1.5, delay: 0.8
    })
    timeline.to(intro, {
      y: "-100%", duration: 1.2
    }, "-=1")
    timeline.fromTo(h1, {
      opacity: 0 }, { opacity: 1, duration: 1
    })
    timeline.fromTo(h2, {
      opacity: 0 }, { opacity: 1, duration: 1
    })
    timeline.fromTo(headerInfo, {
      opacity: 0 }, { opacity: 1, duration: 1
    }, "-=1")
    timeline.fromTo(portrait, {
     opacity: 0 }, { opacity: 1, duration: 4 }, "-=2")
    },

    headerAnimation(){
      const { h1, h2, portrait, headerInfo } = this.$refs

      gsap.to(headerInfo, {
        scrollTrigger: {
          trigger: headerInfo,
          start: '7% 7%',
          scrub: 2,
          toggleActions: "restart resume reverse reverse"
        },
        ease: "power1.inOut",
        x : innerWidth * -1,
        duration: 5 
      });

      gsap.to(h1, {
        scrollTrigger: {
          trigger: h1,
          start: '3% 15%',
          scrub: 3,
          toggleActions: "restart resume reverse reverse"
        },
        ease: "power1.inOut",
        y : innerWidth * -1,
        duration: 4 
      });

      gsap.to(h2, { 
        scrollTrigger: {
          trigger: h2,
          start: 'bottom 350px',
          scrub: 3,
          toggleActions: "restart resume reverse reverse",
 
        },
        ease: "power1.inOut",// the ease of the snap animation ("power3" by default),
        x : innerWidth * -1,
        duration: 3 
      });

      gsap.to(portrait, {
        scrollTrigger: {
          trigger: portrait,
          start: '30% 36%',
          scrub: 2,
          toggleActions: "restart resume reverse reverse"
        },
        ease: "power1.inOut",
        y : innerWidth * -1,
        duration: 4 
      });
      
    },

    projetWebAnimation(){
      const { projetWeb  } = this.$refs

      gsap.to(projetWeb, {
        scrollTrigger: {
          trigger: projetWeb,
          start: '0% 89%',
          // end: '0% 90%',
          toggleActions: "restart resume resume reverse"
        },
        ease: "power1.inOut",
        backgroundColor: "rgba(245, 241, 234, 1)",
        duration: 0.8,
      });
    },

    contactTextAnimation(){
      const { contactTrigger, h3Contact, contactMail, hrContact } = this.$refs
      // const contactTimeline = new TimelineLite()
      let contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactTrigger,
          pin: true,
          start: 'top top',
          end: "+=30",
          scrub: 2,
          toggleActions: "restart resume reverse reverse"
        }
      });

      contactTl.to(h3Contact, {
        ease: "power1.inOut",
        bottom: "30%",
        duration: 2,
      });

      contactTl.to(contactMail, {
        ease: "power4.inOut",
        left: "36px",
        duration: 1,
      }, "-=0.5");

      contactTl.to(hrContact, {
        ease: "power4.inOut",
        bottom: "25%",
        duration: 1,
      }, "-=1");
    },

    contactImgAnimation(){
      const { portraitContact, landscape, contactTrigger  } = this.$refs
      // const contactTimeline = new TimelineLite()
      let contactImgTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactTrigger,
          pin: true,
          start: '5% top',
          end: "+=30",
          scrub: 3,
          toggleActions: "restart resume reverse reverse"
        }
      });

      contactImgTl.to( portraitContact, {
        ease: "power4.inOut",
        top: "-193px",
        duration: 1,
      }, "-=2");

      contactImgTl.to(landscape, {
        ease: "power4.inOut",
        top: "0px",
        duration: 1,
      }, "-=2");

    }


  },

  mounted() {
    this.introAnimation();
    this.headerAnimation();
    this.projetWebAnimation();
    this.contactTextAnimation();
    this.contactImgAnimation();
   
  }
};
</script>

<style scoped>


</style>
