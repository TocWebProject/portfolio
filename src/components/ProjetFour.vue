<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header dflex align-items-center flex-column">
            <slot name="header">
                <h4 class="">Référentiel d'évaluation</h4> 
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <ul class="list-group mb-3">
                    <li class="list-group-item">Soutenir et argumenter ses propositions</li>
                    <li class="list-group-item">Organiser le code en langage PHP sans utiliser de framework</li>
                    <li class="list-group-item">Le code est construit sur une architecture MVC</li>
                    <li class="list-group-item">Analyser les données utilisées par le site ou l’application</li>
                    <li class="list-group-item">Créer une interface frontend (lecture des billets) et une interface backend (administration des billets pour l'écriture).</li>
                    <li class="list-group-item">Créer un site Internet, de sa conception à sa livraison</li>
                    <li class="list-group-item">Récupérer les données d’une base</li>
                    <li class="list-group-item">Récupérer la saisie d’un formulaire utilisateur en langage PHP</li>
                    <li class="list-group-item">Construire une base de données</li>
                </ul>
                <a href="https://github.com/TocWebProject/projet4" target="_blank"><img :src="gitHubLogo" class="gitHubLogo" alt="Logo GitHub"></a>
                <p><a href="https://github.com/TocWebProject/projet4" target="_blank" class="gitHubLink"> Répertoire GitHub</a></p>
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
    name: 'ProjetFour',
    props: {
        
    },
    data () {
        return {
            gitHubLogo: require('@/assets/img/logo-github.svg.png')
        }
    },
}
</script>
