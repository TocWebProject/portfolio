<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header dflex align-items-center flex-column">
            <slot name="header">
                <h4 class="">Descriptif et Référentiel d'évaluation</h4> 
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <h4 class="text-uppercase mb-3"><u>Description</u></h4>
                <h4>Applicaton d'organisation personnel utilisant les framework Laravel et Vue.js</h4> 
                <ul class="list-group mb-5">
                    <li class="list-group-item">Requests aux API Unsplash et OpenweatherMap</li>
                    <li class="list-group-item">ToDo List dynamique</li>
                    <li class="list-group-item">Utilisation de la librairie FullCalendar</li>
                    <li class="list-group-item">Citation du jour avec le script Ouest France</li>
                    <li class="list-group-item">Système de gestion des utilisateurs pour l'admin.</li>
                    <li class="list-group-item">Environnement: VSCode - Laravel Valet - PhpMyAdmin - GitHub w/ GitFlow</li>
                </ul>
                <h4 class="text-uppercase mb-3"><u>Compétences évaluées</u></h4>
                <h4>Organiser le code en langage PHP</h4> 
                <ul class="list-group mb-4">
                    <li class="list-group-item">Charger automatique des classes ou utilisation de l'autoload de Composer</li>
                    <li class="list-group-item">Séparer du code en respectant l'architecture MVC</li>
                    <li class="list-group-item">Utiliser des exceptions pour gérer les erreurs</li>
                    <li class="list-group-item">Utiliser des namespaces pour organiser les classes</li>
                    <li class="list-group-item">Créer des templates HTML avec syntaxe PHP alternative ou Twig</li>
                </ul>
                <h4>Organiser et manipuler les données</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Créer et manipuler une session</li>
                    <li class="list-group-item">Valider des données côté serveur en PHP</li>
                    <li class="list-group-item">Valider des données côté client en JavaScript</li>
                    <li class="list-group-item">Créer de requêtes HTTP en JavaScript avec récupération de données en JSON (Ajax)</li>
                    <li class="list-group-item">Créer une pagination des données</li>
                    <li class="list-group-item">Envoyer des fichiers au serveur</li>
                </ul>
                <h4>Sécuriser l'application</h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item">Supprimer des injections XSS dans les données saisies puis réaffichées</li>
                    <li class="list-group-item">Supprimer des injections SQL avec PDO</li>
                    <li class="list-group-item">Créer de mots de passes sécurisés avec un hachage fiable</li>
                    <li class="list-group-item">Créer un système de login / logout</li>
                </ul>
                <a href="https://github.com/TocWebProject/projet5" target="_blank"><img :src="gitHubLogo" class="gitHubLogo" alt="Logo GitHub"></a>
                <p><a href="https://github.com/TocWebProject/projet5" target="_blank" class="gitHubLink"> Répertoire GitHub</a></p>
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
    name: 'ProjetFive',
    props: {
        
    },
    data () {
        return {
            gitHubLogo: require('@/assets/img/logo-github.svg.png')   
        }
    },
}
</script>
