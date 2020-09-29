<template>
   <section ref="sectionAPropos" id="apropos" class="section-a-propos">
       <div class="container align-item-center justify-content-center">
           <div ref="apropos" class="a-propos">
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula nunc et nibh rhoncus sodales. Vivamus elementum venenatis eleifend. Phasellus velit est, finibus nec egestas sed, venenatis eget elit. Fusce viverra blandit augue efficitur finibus. Proin eleifend mi eget semper consectetur. Donec justo felis, volutpat in ullamcorper nec, cursus sit amet sapien. Ut at erat id tortor vulputate facilisis eget vitae metus. Nullam mollis sapien vitae leo luctus placerat. Phasellus imperdiet magna elit, quis convallis dolor dapibus non. Sed ante nunc, aliquam eu eleifend tincidunt, fringilla et mauris. Sed eu arcu feugiat turpis sodales rutrum ornare quis lacus. Morbi in lectus diam. Mauris sed congue velit. Phasellus commodo pretium augue. Donec gravida mauris nec nulla vehicula ultrices. 
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
          start: 'top center', 
          markers: true,
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
          scrub: 1,
          markers: true,
          toggleActions: "restart resume reverse reverse"
        },
        x : innerWidth * -1,
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
