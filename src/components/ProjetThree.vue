<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header dflex align-items-center flex-column">
            <slot name="header">
                <h4 class="">Concevez une carte interactive de location de vélos</h4> 
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <h4>Créer des objets simples en JavaScript, contenant des méthodes et des propriétés</h4> 
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le code JavaScript est développé en Orienté Objet</li>
                    <li class="list-group-item">Le diaporama est conforme et fonctionnel</li>
                    <li class="list-group-item">Aucun plugin n’est utilisé pour la logique de l’application (Diaporama, Canvas, Carte)</li>
                </ul>
                <h4>Récupérer des données de formulaires en utilisant le langage JavaScript</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le canvas est fonctionnel</li>
                    <li class="list-group-item">Le nom et prénom utilisent l’API LocalStorage</li>
                    <li class="list-group-item">Les informations de réservations utilisent l’API SessionStorage</li>
                    <li class="list-group-item">Les données de réservation sont affichées en dessous de la carte, s'il y a une réservation en cours</li>
                </ul>
                <h4>Faire des requêtes HTTP en langage JavaScript</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">La carte est récupérée dynamiquement depuis un web service cartographique</li>
                    <li class="list-group-item">Les informations sur les stations utilisent l’API Live de JC Decaux</li>
                </ul>
                <h4>Écrire un code source lisible</h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item">Le code est correctement indenté</li>
                    <li class="list-group-item">Les noms de classes, de méthode et de variables sont explicites (indifféremment en français ou en anglais)</li>
                    <li class="list-group-item">Il y a une seule classe par fichier</li>
                </ul>
                <a href="https://github.com/TocWebProject/projet3" target="_blank"><img :src="gitHubLogo" class="gitHubLogo" alt="Logo GitHub"></a>
                <p><a href="https://github.com/TocWebProject/projet3" target="_blank" class="gitHubLink"> Répertoire GitHub</a></p>
            </slot>
            </div>

            <div class="modal-footer">
            <slot name="footer">
                <button class="btn btn-secondary" @click="$emit('close')">
                    Retour
                </button>
            </slot>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjetThree',
    props: {
        
    },
    data () {
        return {
            gitHubLogo: require('@/assets/img/logo-github.svg.png')
        }
    },
}
</script>
