<template>
    <section ref="ProjetWeb" class="section-projets-web">
        <div ref="projetWebTrigger" class="container min-vh-100">
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_PdzoiE.json"  background="transparent"  speed="1"  style="margin: auto; width: 110px; height: 110px;"  loop autoplay></lottie-player> 
        <h3 class="titreProjetsWeb mt-4">Projets Web</h3>
        <hr class="separationProjetWeb mb-5">
        <div class="row align-items-center rounded-lg mb-5">
            <div class="geode-txt col-lg m-4">
            <h3 class="mt-0">Application Web GÉODE</h3>
            <p class="mb-4 mt-0 h6">(en cours de développement)</p>
            <p class="mb-4">Université de Lille - La Fabrique des formations <br>Application web visant à évaluer le degré d'ouverture d'un environnement éducatif. Formulaires et Résultats avec Nuxt.js, Tailwind.css, Chart.js.</p>
            <a href="https://geodepreview01.netlify.app" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
            </div>
            <div class="geode-img col-lg m-4">
                <a href="https://geodepreview01.netlify.app" target="_blank" rel="noopener noreferrer">
                    <v-lazy-image :src="imgGeode" :src-placeholder="imgGeodeUltraLow" width="403" height="269" class="img-fluid img-thumbnail" alt="Page d'accueil du site web GEODE"/>
                </a>
            </div>
        </div> 
        <div class="row align-items-center rounded-lg mb-5">
            <div class="col-lg m-4">
                <a href="https://un-jour-en-mer.netlify.app" target="_blank" rel="noopener noreferrer">
                <v-lazy-image :src="imgUnJour" :src-placeholder="imgUnJourUltraLow" width="403" height="263" class="img-fluid img-thumbnail" alt="Page d'accueil du site web fictif un jour en mer"/>
                </a>
            </div>
            <div class="col-lg m-4">
                <h3 class="mb-4 mt-0">Un Jour En Mer</h3>
                <p class="mb-4">Projet Front Fictif<br> Entreprise d'excursion maritime - Site responsive en Vue 3 avec VueCli, VueRouter, Gsap Anim, Gsap ScrollTrigger, Bootstrap.</p>
                <a href="https://un-jour-en-mer.netlify.app" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
            </div>
        </div> 
        <div class="row align-items-center rounded-lg mb-5">
            <div class="transformations-txt col-lg m-4">
            <h3 class="mb-4 mt-0">Refonte Revue Scientifique TransFormations</h3>
            <p class="mb-4">Université de Lille - Laboratoire Cirel <br> Refonte Frontend sous le cms OJS, maquettes, installation de plugin, bootstrap, css.</p>
            <a href="https://transformations.univ-lille.fr/index.php/TF/index" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
            </div>
            <div class="transformations-img col-lg m-4">
            <a href="https://transformations.univ-lille.fr/index.php/TF/index" target="_blank" rel="noopener noreferrer">
                <v-lazy-image :src="imgTransformations" :src-placeholder="imgTransformationsUltraLow" width="403" height="333" class="img-fluid img-thumbnail" alt="Page d'accueil du site TransFormations - Université de lille"/>
            </a>
            </div>
        </div> 
        <div class="row align-items-center rounded-lg mb-5">
            <div class="col-lg m-4">
                <a href="https://iantocor.com/" target="_blank" rel="noopener noreferrer">
                <v-lazy-image :src="imgIanTocor" :src-placeholder="imgIanTocorsUltraLow" width="403" height="320" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de l'artiste Ian Tocor"/>
                </a>
            </div>
            <div class="col-lg m-4">
                <h3 class="mb-4 mt-0">Ian Tocor</h3>
                <p class="mb-4">Mon portfolio artistique sous Wordpress, quelques années de créations musicales et photographiques.</p>
                <a href="https://iantocor.com/" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
            </div>
        </div> 
        <div class="row align-items-center rounded-lg mb-5">
            <div class="villaBouBouTxt col-lg m-4">
            <h3 class="mb-4 mt-0">Villa Boubou</h3>
            <p class="mb-4">Site vitrine Wordpress et SEO pour la boutique dépôt-vente Villa Boubou situé à Rennes.</p>
            <a href="https://villaboubourennes.fr/" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>
            </div>
            <div class="villaBouBouImg col-lg m-4">
            <a href="https://villaboubourennes.fr/" target="_blank" rel="noopener noreferrer">
                <v-lazy-image :src="imgVillaBoubou" :src-placeholder="imgVillaBoubouUltraLow" width="403" height="327" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de la boutique Villa Boubou"/>
            </a>
            </div>
        </div> 
            <div class="row align-items-center rounded-lg mb-5">
            <div class="col-lg m-4">
                <a href="https://35volts.fr/" target="_blank" rel="noopener noreferrer">
                <v-lazy-image :src="img35Volts" :src-placeholder="img35VoltsUltraLow" width="403" height="323" class="img-fluid img-thumbnail" alt="Page d'accueil du site web de 35 Volts, projet agri-culturel à Rennes"/>
                </a>
            </div>
            <div class="col-lg m-4 ">
                <h3 class="mb-4 mt-0">35 Volts</h3>
                <p class="mb-4">Landing Page avec animations et redirection vers les réseaux sociaux:
                    35 volts Projet de tier lieu Agri-Culturel, site en complément d'un dossier répondant à un appel d'offre de la ville de Rennes</p>
                <a href="https://35volts.fr/" target=”_blank” type="button" rel="noopener noreferrer" class="btn btn-secondary mx-auto d-block d-lg-inline-block">Visiter</a>    
            </div>
        </div>   
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'ProjetsWeb',
    data () {
        return {
            imgUnJour: require('@/assets/img/projet-web-un-jour-589x379.png'),
            imgUnJourUltraLow: require('@/assets/img/projet-web-un-jour-ultralow.png'),
            imgGeode: require('@/assets/img/projet-web-geode-600x395.png'),
            imgGeodeUltraLow: require('@/assets/img/projet-web-geode-ultra-low.png'),
            imgTransformations: require('@/assets/img/projet-web-transformations-650x535.png'),
            imgTransformationsUltraLow: require('@/assets/img/projet-web-transformations-ultra-low.png'),
            imgIanTocor: require('@/assets/img/projet-web-ian-tocor-550x434.png'),
            imgIanTocorsUltraLow: require('@/assets/img/projet-web-ian-tocor-ultra-low.png'),
            imgVillaBoubou: require('@/assets/img/projet-web-villa-boubou-500x403.png'),
            imgVillaBoubouUltraLow: require('@/assets/img/projet-web-villa-boubou-ultra-low.png'),
            img35Volts: require('@//assets/img/projet-web-35volts-500x398.png'),
            img35VoltsUltraLow: require('@/assets/img/projet-web-35-volts-ultra-low.png'),
        }
    },
    methods: {
        projetWebAnimation(){
            const { ProjetWeb  } = this.$refs

            gsap.to(ProjetWeb, {
                scrollTrigger: {
                trigger: ProjetWeb,
                start: '0% 89%',
                toggleActions: "restart resume resume reverse"
                },
                ease: "power1.inOut",
                backgroundColor: "rgba(245, 241, 234, 1)",
                duration: 0.6,
            });
        },
    },
    mounted() {
        this.projetWebAnimation();
    }
    
}
</script>