<template>
   <section id="apropos" class="section-a-propos">
       <div class="container align-item-center justify-content-center">
           <div v-scrollanimation class="a-propos">
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula nunc et nibh rhoncus sodales. Vivamus elementum venenatis eleifend. Phasellus velit est, finibus nec egestas sed, venenatis eget elit. Fusce viverra blandit augue efficitur finibus. Proin eleifend mi eget semper consectetur. Donec justo felis, volutpat in ullamcorper nec, cursus sit amet sapien. Ut at erat id tortor vulputate facilisis eget vitae metus. Nullam mollis sapien vitae leo luctus placerat. Phasellus imperdiet magna elit, quis convallis dolor dapibus non. Sed ante nunc, aliquam eu eleifend tincidunt, fringilla et mauris. Sed eu arcu feugiat turpis sodales rutrum ornare quis lacus. Morbi in lectus diam. Mauris sed congue velit. Phasellus commodo pretium augue. Donec gravida mauris nec nulla vehicula ultrices. 
               </p>
           </div>
       </div>
    </section>
</template>

<script>
export default {
  name: 'Apropos',
  props: {
    
  },
  data () {
  return {
    
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ScrollAnimation */

.before-enter {
  opacity: 0;
  transition: all 2s ease-out;
  transform: translateY(120px);
  
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

</style>
