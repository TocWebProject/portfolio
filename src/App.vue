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
    <Header></Header>

    <!-- A propos -->
    <Apropos></Apropos>  
 
   
  </div>
    
  
</template>

<script>
import Header from './components/Header.vue'
import Apropos from './components/Apropos.vue'

export default {
  name: 'App',
  components: {
    Header,
    Apropos  
  }
}
</script>
