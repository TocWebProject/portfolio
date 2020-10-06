<template>
   <section ref="sectionAPropos" class="section-a-propos">
       <div class="container align-item-center justify-content-center">
           <div ref="apropos" class="a-propos">
               <p>
                Après avoir travaillé plusieurs années dans le milieu culturel et artistique à Bruxelles, 
                j’ai entamé ma reconversion professionnel en Février 2019 et je suis désormais diplômé grâce la formation « Développeur Web Junior » d’OpenclassRoom.
                Ayant de l'attrait pour l'esthétisme des médias et le graphisme, désormais passionné par le développement <span class="font-weight-bold">frontend</span> et <span class="font-weight-bold">backend</span>, je souhaite
                me perfectionner à travers un <span class="font-weight-bold">contrat de professionnalisation</span> par l'alternance en validant un bac+3 tout en contribuant aux activités d'une équipe de développeurs(ses) chevroné(e)s 
               </p>
           </div>
       </div>
    </section>
</template>

<script>

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default {
  name: 'Apropos',
  props: {
    
  },
  data () {
  return {
    
    }
  },

  methods: {
    aproposAnimation(){
      const { apropos, sectionAPropos } = this.$refs
      // IN
      gsap.to(apropos, {
        scrollTrigger: {
          trigger: sectionAPropos,
          start: 'top 63%', 
          toggleActions: "restart resume resume reverse"
        },
       opacity: 1,
       duration: 1 
      });
      //Out
      gsap.to(apropos, {
        scrollTrigger: {
          trigger: apropos,
          start: 'bottom 40%',
          scrub: 2,
          toggleActions: "restart resume reverse reverse"
        },
        y : innerWidth * -0.5,
        duration: 4,
      });

    }
  },

   mounted() {
    this.aproposAnimation();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
