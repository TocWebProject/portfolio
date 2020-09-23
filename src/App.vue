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
          <img ref="portrait" src="./assets/img/yann-rioual-portrait.png" class="portrait" alt="portrait Yann Rioual">
        </header>

    
        <!-- A propos -->
        <Apropos></Apropos>  

        <!-- Formation -->
        <Formation></Formation>  

        <!-- Projets Web -->
        <section id ="projetsweb" class="section-projets-web">

        </section>

        <!-- Projets Web -->
        <section id ="contact" class="section-contact">

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
import { TimelineLite } from 'gsap'

export default {
  name: 'App',
  components: {
    Apropos,  
    Formation
  },
  mounted() {
    // GSAP ANIMATION
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
     opacity: 0 }, { opacity: 1, duration: 1 }, "-=2")

  }

}
</script>
