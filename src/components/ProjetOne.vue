<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header dflex justify-content-center">
            <slot name="header">
                <h4>Référentiel d'évaluation</h4> 
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <h4>Définir le contenu d'une page web à partir d'une maquette</h4> 
                <ul class="list-group mb-4">
                    <li class="list-group-item">L'ensemble du contenu défini par la maquette est présent</li>
                    <li class="list-group-item">Le contenu texte est pertinent et grammaticalement correct</li>
                    <li class="list-group-item">L'aspect visuel correspond à la maquette sur écran d'ordinateur</li>
                    <li class="list-group-item">La maquette est adaptée de manière pertinente sur un terminal mobile</li>
                </ul>
                <h4>Coder la structure d'une page web en HTML</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">La page HTML passe la validation w3c HTML sans erreur</li>
                    <li class="list-group-item">Les balises HTML sont définies avec la sémantique HTML 5 pertinente</li>
                    <li class="list-group-item">Les icônes sont crées avec un outil pertinent, type  font-awesome</li>
                </ul>
                <h4>Coder la présentation d'une page web en CSS</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le code CSS passe la validation w3c CSS</li>
                    <li class="list-group-item">Le code CSS est écrit dans un ou plusieurs fichier CSS</li>
                    <li class="list-group-item">Aucun code CSS n'est appliqué via un attribut style  dans une balise HTML</li>
                    <li class="list-group-item">La zone avec le menu reste visible, en haut de la page, même lorsque l'on se déplace dans la page</li>
                </ul>
                <h4>Gérer la responsivité avec les Media Queries</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le viewport est configuré dans l'en-tête de la page HTML</li>
                    <li class="list-group-item">(Au moins) Un breakpoint pertinent est défini</li>
                    <li class="list-group-item">Des règles CSS @media  et/ou des feuilles de styles dédiées identifiées par un attribut mediasont utilisée</li>
                    <li class="list-group-item">Aucun Framework (type Bootstrap) n'est utilisé pour ce projet</li>
                </ul>
                <h4>Présenter une réalisation de manière professionnelle</h4>
                <ul class="list-group">
                    <li class="list-group-item">La soutenance est préparée</li>
                    <li class="list-group-item">La tenue et l'attitude sont appropriées</li>
                    <li class="list-group-item">Le support de présentation est soigné, respecte la structure imposée et le temps imparti</li>
                    <li class="list-group-item">Le temps de présentation est respecté</li>
                    <li class="list-group-item">Les réponses aux questions sont pertinentes</li>
                </ul>
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
    name: 'ProjetOne',
    props: {
        
    },
    data () {
        return {
            
        }
    },
}
</script>
