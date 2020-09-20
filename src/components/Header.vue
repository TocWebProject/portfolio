<template>
  <header>
        <div v-scrollanimation class="container header-info">
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
      <h1>Yann Rioual</h1>
      <h2>Développeur Web Junior</h2>
      <img v-scrollanimation :src="portrait" class="portrait" alt="portrait Yann Rioual">
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  },
  data () {
  return {
    portrait: require('@/assets/img/yann-rioual-portrait.png')
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ScrollAnimation */

.before-enter {
  opacity: 0;
  transition: all 2.7s ease-out;
  /* transform: translateX(-100px); */
  
}

.enter {
  opacity: 1;
  /* transform: translateX(0px); */
}

</style>
