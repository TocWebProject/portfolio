<template>
  <div id="app">
    <main> 
      <!-- Navbar -->
      <nav id="navbar-yann" class="navbar navbar-toggleable-md fixed-bottom navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" href="#">Yann Rioual</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <span class="navbar-text text-left">
            Développeur Web 
          </span>
          <ul class="navbar-nav" data-toggle="collapse" data-target=".navbar-collapse">
            <li class="nav-item">
              <a class="nav-link"  href="#apropos">A propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="#formation">Formation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projetsweb">Projets Web</a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

        <!-- Header -->
        <header ref="headerTrigger">
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
                  <a href="mailto:rioualy@gmail.com" target="_blank" rel="noopener noreferrer">
                  rioualy@gmail.com
                  </a>
              </div>
              </div>
          </div>
          
          <h1 ref="h1" id="apropos" >Yann Rioual</h1>
          
          <h2 ref="h2">Développeur Web</h2>
          <div class="container-portrait">
            <picture>
                  <source media="(max-width: 575.97px)" srcset="./assets/img/yann-rioual-portrait-180x270.png">
                  <source media="(min-width: 575.98px)" srcset="./assets/img/yann-rioual-portrait-328x492.png">
                  <source media="(max-width: 768px)" srcset="./assets/img/yann-rioual-portrait-328x492.png">
                  <source media="(min-width: 769px)" srcset="./assets/img/yann-rioual-portrait-409x614.png">
                  <img ref="portrait" src="./assets/img/yann-rioual-portrait-409x614.png" class="portrait" alt="portrait Yann Rioual">
            </picture> 
          </div>
        </header>

        <!-- A propos -->
        <Apropos></Apropos>  
        <!-- Formation -->
        <Formation id="formation"></Formation>  
        <!-- Projets Web -->
        <ProjetsWeb id ="projetsweb"></ProjetsWeb>
        
        <!-- Contact -->
        <div ref="contactTrigger"></div>
        <section id="contact" ref="contactTrigger" class="section-contact pt-0 p-5">
          <div class="container">
            <div id="contact" class="photoPosition">
              <img ref="portraitContact" class="portraitContact" src="./assets/img/silhouette.png" alt="silhouette Yann Rioual">   
              <img ref="landscape" class="landscape" src="./assets/img/landscape.png" alt="landscape seascape">  
              <a href="https://www.linkedin.com/in/yann-rioual-19a8061b8/" target="_blank"><font-awesome-icon ref="linkedinIcon" class="linkedinIconContact" :icon="['fab', 'linkedin']" /></a>
              <a href="https://github.com/TocWebProject/" target="_blank"><font-awesome-icon ref="githubIcon" class="gitHubIconContact" :icon="['fab', 'github-square']" /></a>
            </div>
            <h3 ref="h3Contact">Rencontrons nous.</h3>
            <div ref="contactMail" class="contactMail"><a href="mailto:rioualy@gmail.com" target="_blank" rel="noopener noreferrer">rioualy@gmail.com</a></div>
            <hr ref="hrContact" class="hrContact">
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
import ProjetsWeb from './components/ProjetsWeb.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { TimelineLite } from 'gsap'


export default {
  name: 'App',
  components: {
    Apropos,  
    Formation,
    ProjetsWeb,
  },
  methods: {
    // INTRO GSAP
    introAnimation(){
      const { text1, text2, text3, slider, intro, headerInfo, portrait, h1, h2 } = this.$refs
      const timeline = new TimelineLite()
      
      timeline.to(text1, { 
        ease: "Power2.easeInOut", y: "0%", duration: 1, stagger: 0.25
      })
      timeline.to(text2, {
        ease: "Power2.easeInOut", y: "0%", duration: 1, stagger: 0.25
      }, "-=0.8")
      timeline.to(text3, {
        ease: "Power2.easeInOut", y: "0%", duration: 1, stagger: 0.25
      }, "-=0.8")
      timeline.to(slider, {
        ease: "Power1.easeInOut", y: "-100%", duration: 1.5, delay: 0.8
      })
      timeline.to(intro, {
        ease: "Power1.easeInOut", y: "-100%", duration: 1.2
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



    // HEADER GSAP
    headerAnimation(){
      const { h1, h2, portrait, headerInfo, headerTrigger } = this.$refs

      gsap.to(headerInfo, {
        scrollTrigger: {
          trigger: headerTrigger,
          start: 'top 4%',
          scrub: 1,
          toggleActions: "restart resume reverse reverse"
        },
        ease: "power1.inOut",
        x: innerWidth * -0.2,
      });

      gsap.to(h1, {
        scrollTrigger: {
          trigger: headerTrigger,
          start: 'top 9%',
          scrub: 1,
          toggleActions: "restart resume reverse reverse"
        },
        ease: "power1.inOut",
        y : innerWidth * -0.8,
        duration: 3,
      });

      gsap.to(h2, { 
        scrollTrigger: {
          trigger: headerTrigger,
          start: 'top 5%',
          scrub: 1,
          toggleActions: "restart resume reverse reverse",
 
        },
        ease: "power1.inOut",
        x : innerWidth * -0.9,
      });

      gsap.to(portrait, {
        scrollTrigger: {
          trigger: headerTrigger,
          start: 'top 25%',
          scrub: 1,
          // toggleActions: "restart resume reverse reverse"
        },
        ease: "power2.inOut",
        y : innerWidth * -0.25,
        scale: 1.3,
        duration: 2,
      });
      
    },

    // CONTACT GSAP RESPONSIVE with Media Queries
    contactTextAnimation(){

      const { contactTrigger, h3Contact, contactMail, hrContact, linkedinIcon, githubIcon } = this.$refs
      ScrollTrigger.matchMedia({
    
        // Extra small devices (portrait phones, less than 576px)
        "(min-width: 100px) and (max-width: 576px)": function() {

          let contactTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 37%',
              end: "+=5",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactTl.to(h3Contact, {
            ease: "power1.inOut",
            bottom: "35%",
            duration: 2,
          });

          contactTl.to(contactMail, {
            ease: "power4.inOut",
            left: "36px",
            duration: 1,
          }, "-=0.5");

          contactTl.to(hrContact, {
            ease: "power4.inOut",
            bottom: "30%",
            duration: 1,
          }, "-=1");

          contactTl.to(githubIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=2");

          contactTl.to(linkedinIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=1");
        },
            // Small devices (landscape phones, less than 769px)
        "(min-width: 577px) and (max-width: 769px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 37%',
              end: "+=5",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactTl.to(h3Contact, {
            ease: "power1.inOut",
            bottom: "34%",
            duration: 2,
          });

          contactTl.to(contactMail, {
            ease: "power4.inOut",
            left: "131px",
            duration: 1,
          }, "-=0.5");

          contactTl.to(hrContact, {
            ease: "power4.inOut",
            bottom: "31%",
            duration: 1,
          }, "-=1");

          contactTl.to(githubIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=2");

          contactTl.to(linkedinIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=1");
        },
        
        // Medium devices (tablets, less than 992px)
        "(min-width: 770px) and (max-width: 992px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 26%',
              end: "+=5",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactTl.to(h3Contact, {
            ease: "power1.inOut",
            bottom: "38%",
            duration: 2,
          });

          contactTl.to(contactMail, {
            ease: "power4.inOut",
            left: "191px",
            duration: 1,
          }, "-=0.5");

          contactTl.to(hrContact, {
            ease: "power4.inOut",
            bottom: "32%",
            duration: 1,
          }, "-=1");

          contactTl.to(githubIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=2");

          contactTl.to(linkedinIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=1");

        },

        // Large devices (desktops, less than 1200px)
        "(min-width: 993px) and (max-width: 1200px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 26%',
              end: "+=5",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactTl.to(h3Contact, {
            ease: "power1.inOut",
            bottom: "40%",
            duration: 2,
          });

          contactTl.to(contactMail, {
            ease: "power4.inOut",
            left: "153px",
            duration: 1,
          }, "-=0.5");

          contactTl.to(hrContact, {
            ease: "power4.inOut",
            bottom: "35%",
            duration: 1,
          }, "-=1");

          contactTl.to(githubIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=2");

          contactTl.to(linkedinIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=1");

        },

        // Sumo devices (desktops, less than 1200px)
        "(min-width: 1200px) and (max-width: 3000px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 26%',
              end: "+=5",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactTl.to(h3Contact, {
            ease: "power1.inOut",
            bottom: "42%",
            duration: 2,
          });

          contactTl.to(contactMail, {
            ease: "power4.inOut",
            left: "321px",
            duration: 1,
          }, "-=0.5");

          contactTl.to(hrContact, {
            ease: "power4.inOut",
            bottom: "37%",
            duration: 1,
          }, "-=1");

          contactTl.to(githubIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=2");

          contactTl.to(linkedinIcon, {
            ease: "power1.inOut",
            opacity: 1,
            duration: 0.9,
          }, "-=1");
          
        },
        
      });   
    },

    contactImgAnimation(){

      const { portraitContact, landscape, contactTrigger  } = this.$refs
      ScrollTrigger.matchMedia({
    
        // Extra small devices (portrait phones, less than 576px)
        "(min-width: 100px) and (max-width: 576px)": function() {
           
            let contactImgTl = gsap.timeline({
              scrollTrigger: {
                trigger: contactTrigger,
                start: 'top 36%',
                end: "+=10",
                scrub:2,
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
        },
        // Small devices (landscape phones, less than 769px)
        "(min-width: 577px) and (max-width: 769px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactImgTl = gsap.timeline({
              scrollTrigger: {
                trigger: contactTrigger,
                start: 'top 36%',
                end: "+=10",
                scrub:2,
                toggleActions: "restart resume reverse reverse"
              }
            });

            contactImgTl.to( portraitContact, {
              ease: "power4.inOut",
              top: "-250px",
              duration: 1,
            }, "-=2");

            contactImgTl.to(landscape, {
              ease: "power4.inOut",
              top: "0px",
              duration: 1,
            }, "-=2");
        },
        
        // Medium devices (tablets, less than 992px)
        "(min-width: 770px) and (max-width: 992px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
            let contactImgTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 25%',
              end: "+=10",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactImgTl.to( portraitContact, {
            ease: "power4.inOut",
            top: "-250px",
            duration: 1,
          }, "-=2");

          contactImgTl.to(landscape, {
            ease: "power4.inOut",
            top: "0px",
            duration: 1,
          }, "-=2");
        },

        // Large devices (desktops, less than 1200px)
        "(min-width: 993px) and (max-width: 1200px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactImgTl = gsap.timeline({
            scrollTrigger: {
              trigger: contactTrigger,
              start: 'top 25%',
              end: "+=10",
              scrub:2,
              toggleActions: "restart resume reverse reverse"
            }
          });

          contactImgTl.to( portraitContact, {
            ease: "power4.inOut",
            top: "-250px",
            duration: 1,
          }, "-=2");

          contactImgTl.to(landscape, {
            ease: "power4.inOut",
            top: "0px",
            duration: 1,
          }, "-=2");
        },

        // Sumo devices (desktops, less than 1200px)
        "(min-width: 1200px) and (max-width: 3000px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
          let contactImgTl = gsap.timeline({
              scrollTrigger: {
                trigger: contactTrigger,
                start: 'top 38%',
                end: "+=10",
                scrub:2,
                toggleActions: "restart resume reverse reverse"
              }
            });

            contactImgTl.to( portraitContact, {
              ease: "power4.inOut",
              top: "-303px",
              duration: 1,
            }, "-=2");

            contactImgTl.to(landscape, {
              ease: "power4.inOut",
              top: "0px",
              duration: 1,
            }, "-=2");
        },
        
      }); 
    }
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.introAnimation();
        this.headerAnimation();
        this.contactTextAnimation();
        this.contactImgAnimation();
      }
    }
  }
};
</script>
