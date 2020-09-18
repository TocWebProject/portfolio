<template>
  <div id="app">

    <!-- Navbar -->
    <nav class="navbar fixed-bottom navbar-expand-lg navbar-light justify-content-between">
      <a class="navbar-brand" href="#">Yann Rioual</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
        <span class="navbar-text text-left">
          Développeur Web Junior
        </span>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">A propos<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Formation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projets Web</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Header -->
    <header>
      <div class="container header-info">
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
      <img src="./assets/img/yann-rioual-portrait.png" class="portrait" alt="portrait Yann Rioual">
    </header>
    <section class="a-propos">


    </section>
  </div>
    
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  }
}
</script>
