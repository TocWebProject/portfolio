<template>
   <section id="formation" class="section-formation">
       <h3>Formation OpenClassRooms</h3>
       <p> Diplôme Obtenu en septembre 2020 - Certifié niveau 3 </p>
       <div class="container pt-4">
           <div class="row justify-content-center">   
               <!-- PROJET1  -->
                <div class="col-8 mb-4">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 1
                        </div>
                            <img :src="imgProjet1" class="img img-fluid projet1-img" alt="projet-1 OpenClassRooms">
                        <div class="card-block">
                            <div class="project-icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </div>
                            <h4 class="mt-4">Intégrez la maquette du site d'une agence web</h4>
                            <button class="btn btn-secondary mb-3" id="show-modal" @click="showModal = true">Détails</button>
                            <transition name="openModal">
                                <ProjetOne v-if="showModal" @close="showModal = false"></ProjetOne>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>

<script>

import ProjetOne from './ProjetOne.vue'

export default {
    name: 'Formation',
    components: {
        ProjetOne
    },
    props: {
        
    },
    data () {
    return {
        showModal: false,
        imgProjet1: require('@/assets/img/projet1.png')
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
