<template>
   <section ref="sectionFormation" class="section-formation">
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_4XmSkB.json"  background="transparent"  speed="1"  style="margin: auto; width: 150px; height: 150px;"  loop autoplay></lottie-player>
        <h3>Formation</h3>
        <p class="diplomeFormation">Diplôme Obtenu en octobre 2020 <br> Certifié niveau 5 (bac+2) </p>
        <hr class="separationLineFormation">
        <p class="sousTitreFormation">Projets réalisés lors de ma formation de Développeur Web junior</p>
        <div class="container pt-4">
           <div class="row justify-content-center">   
               <!-- PROJET1  -->
                <div class="col-8 mb-5">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 1
                        </div>
                            <v-lazy-image :src="imgProjet1x730w" :src-placeholder="imgProjet1UltraLow" width="728" height="370" class="img img-fluid projet1-img" alt="Yann Rioual projet-1 OpenClassRooms"/>
                        <div class="card-block">
                            <div class="project-icon v-lazy-image-loaded">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </div>
                            <h4 class="mb-0 p-2">Intégrez la maquette du site d'une agence web</h4>
                            <p class="langageFormation">HTML / CSS</p>
                            <button type="button" class="btn btn-secondary mt-1 mb-3" id="show-modal-projet1" @click="showModalProjet1 = true">Détails</button>
                            <transition name="openModal">
                                <ProjetOne v-if="showModalProjet1" @close="showModalProjet1 = false"></ProjetOne>
                            </transition>
                        </div>
                    </div>
                </div>
                <!-- PROJET2  -->
                <div class="col-8 mb-5">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 2
                        </div>
                            <v-lazy-image :src="imgProjet2" :src-placeholder="imgProjet2UltraLow" width="728" height="330" class="img img-fluid" alt="Yann Rioual projet-2 OpenClassRooms"/>
                        <div class="card-block">
                            <div class="project-icon">
                               <v-lazy-image :src="imgProjet2Logo" alt="wordpress logo"/> 
                            </div>
                            <h4 class="mb-0 p-2">Créez un site en personnalisant un thème WordPress</h4>
                            <p class="langageFormation">CMS WordPress</p>
                            <button type="button" class="btn btn-secondary mt-1 mb-3" id="show-modal-projet2" @click="showModalProjet2 = true">Détails</button>
                            <transition name="openModal">
                                <ProjetTwo v-if="showModalProjet2" @close="showModalProjet2 = false"></ProjetTwo>
                            </transition>
                        </div>
                    </div>
                </div>
                <!-- PROJET3  -->
                <div class="col-8 mb-5">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 3
                        </div>
                        <v-lazy-image :src="imgProjet3" :src-placeholder="imgProjet3UltraLow" width="728" height="374" class="img img-fluid" alt="Yann Rioual projet-3 OpenClassRooms"/>
                        <div class="card-block">
                            <div class="project-icon">
                               <v-lazy-image :src="imgProjet3Logo" alt="JS logo"/> 
                            </div>
                            <h4 class="mb-0 p-2">Concevez une carte interactive de location de vélos</h4>
                            <p class="langageFormation">JavaScript et POO</p>
                            <button type="button" class="btn btn-secondary mt-1 mb-3" id="show-modal-projet3" @click="showModalProjet3 = true">Détails</button>
                            <transition name="openModal">
                                <ProjetThree v-if="showModalProjet3" @close="showModalProjet3 = false"></ProjetThree>
                            </transition>
                        </div>
                    </div>
                </div>
                <!-- PROJET4  -->
                <div class="col-8 mb-5">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 4
                        </div>
                           <v-lazy-image :src="imgProjet4" :src-placeholder="imgProjet4UltraLow" width="728" height="388" class="img img-fluid" alt="Yann Rioual projet-4 OpenClassRooms"/>
                            <!-- <img :src="imgProjet4" class="img img-fluid projet1-img" alt="projet-4 OpenClassRooms"> -->
                        <div class="card-block">
                            <div class="project-icon">
                               <v-lazy-image :src="imgProjet4Logo" alt="JS logo"/> 
                            </div>
                            <h4 class="mb-0 p-2">Créez un blog CRUD pour un écrivain</h4>
                            <p class="langageFormation">Modèle MVC en PHP</p>
                            <button type="button" class="btn btn-secondary mt-1 mb-3" id="show-modal-projet4" @click="showModalProjet4 = true">Détails</button>
                            <transition name="openModal">
                                <ProjetFour v-if="showModalProjet4" @close="showModalProjet4 = false"></ProjetFour>
                            </transition>
                        </div>
                    </div>
                </div>
                <!-- PROJET5  -->
                <div class="col-8 mb-5">
                    <div class="card text-center">
                        <div class="card-header text-center">
                            Projet 5
                        </div>
                            <v-lazy-image :src="imgProjet5" :src-placeholder="imgProjet5UltraLow" width="728" height="399" class="img img-fluid" alt="Yann Rioual projet-5 OpenClassRooms"/>
                        <div class="card-block">
                            <div class="project-icon">
                               <v-lazy-image :src="imgProjet5Logo" alt="Laravel and Vue.js Logo"/> 
                            </div>
                            <h4 class="mb-0 p-2">Projet personnel:<br>App Journal de Bord</h4>
                            <p class="langageFormation">Laravel / Vue.js</p>
                            <button type="button" class="btn btn-secondary mt-1 mb-3" id="show-modal-projet5" @click="showModalProjet5 = true">Détails</button>
                            <transition name="openModal">
                                <ProjetFive v-if="showModalProjet5" @close="showModalProjet5 = false"></ProjetFive>
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
import ProjetTwo from './ProjetTwo.vue'
import ProjetThree from './ProjetThree.vue'
import ProjetFour from './ProjetFour.vue'
import ProjetFive from './ProjetFive.vue'


import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Formation',
    components: {
        ProjetOne,
        ProjetTwo,
        ProjetThree,
        ProjetFour,
        ProjetFive
    },
    props: {
        
    },
    data () {
        return {
            showModalProjet1: false,
            showModalProjet2: false,
            showModalProjet3: false,
            showModalProjet4: false,
            showModalProjet5: false,
            imgProjet1x730w: require('@/assets/img/projet1-730x371.png'),
            imgProjet1UltraLow: require ('@/assets/img/projet1-ultralow.png'),
            imgProjet2: require('@/assets/img/projet2-wpdashboard-730x371.png'),
            imgProjet2UltraLow: require ('@/assets/img/projet2-ultralow.png'),
            imgProjet2Logo: require('@/assets/img/wordpress-logotype.png'),
            imgProjet3: require('@/assets/img/projet3-screenshot-map-reservation-730x371.png'),
            imgProjet3UltraLow: require ('@/assets/img/projet3-ultralow.png'),
            imgProjet3Logo: require('@/assets/img/javascript-logo.png'),
            imgProjet4: require('@/assets/img/projet4-screenshot-730x371.png'),
            imgProjet4UltraLow: require ('@/assets/img/projet4-ultralow.png'),
            imgProjet4Logo: require('@/assets/img/php-logo.png'),
            imgProjet5: require('@/assets/img/projet5-screenshot-1000x547.png'),
            imgProjet5UltraLow: require ('@/assets/img/projet5-ultralow.png'),
            imgProjet5Logo: require('@/assets/img/laravel-vue.png')
        }
    },
    methods: {
        formationAnimation(){
            const { sectionFormation } = this.$refs

            gsap.to(sectionFormation, {
                scrollTrigger: {
                trigger: sectionFormation,
                start: 'top 70%', 
                toggleActions: "restart resume restart reverse"
                },
                ease: "power1.inOut",
                backgroundColor: "rgba(44, 62, 80, 1)",
                duration: 0.6,
            });
        }
    },

    mounted() {
        this.formationAnimation();
    }
}
</script>
