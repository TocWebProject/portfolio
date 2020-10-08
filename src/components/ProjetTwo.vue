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
                <h4>Définir la structure de navigation du site</h4> 
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le menu est présent et conforme à la demande</li>
                    <li class="list-group-item">L'ensemble des pages demandées - et leur contenu - est présent</li>
                    <li class="list-group-item">Les liens de navigation proposés sont pertinents</li>
                    <li class="list-group-item">Il est possible de revenir à la page d'accueil en cliquant sur le logo</li>
                </ul>
                <h4>Assurer l'accessibilité du site aux différents types d'utilisateurs</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le code que vous avez écrit respecte les normes w3c HTML et CSS</li>
                    <li class="list-group-item">Le contenu que vous avez créé respecte la norme WCAG 2.0, selon l'outil de validation AChecker</li>
                </ul>
                <h4>Assurer la cohérence graphique du site</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Les différentes pages du site sont cohérentes visuellement</li>
                    <li class="list-group-item">Des classes CSS pertinentes sont définies et utilisées</li>
                    <li class="list-group-item">Les fichiers du thème de base ne sont pas altérés</li>
                    <li class="list-group-item">Aucun builder de thème n'est utilisé</li>
                </ul>
                <h4>Adapter l'affichage en fonction de la taille de l'écran</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Le viewport est configuré dans l'en-tête de la page HTML</li>
                    <li class="list-group-item">(Au moins) Un breakpoint pertinent est défini</li>
                    <li class="list-group-item">Une grille (avec ou sans Framework de type Bootstrap) et/ou des Media Queries sont utilisés</li>
                    <li class="list-group-item">Le contenu s'affiche sur une seule colonne en mobilité et occupe intelligemment l'espace sur un grand écran</li>
                    <li class="list-group-item">Les marges/padding sont adaptés</li>
                </ul>
                <h4>Appliquer les principes de SEO dans le code HTML</h4>
                <ul class="list-group mb-4">
                    <li class="list-group-item">Un plugin de référencement (type Yoast SEO) est installé dans Wordpress</li>
                    <li class="list-group-item">Le plugin valide un bon niveau de référencement</li>
                    <li class="list-group-item">Un sitemap est présent</li>
                </ul>
                <h4>Créer une animation avec CSS3</h4>
                <ul class="list-group">
                    <li class="list-group-item">L'animation est définie exclusivement à l'aide de CSS 3</li>
                    <li class="list-group-item">L'animation fonctionne même si JavaScript est désactivé</li>
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
    name: 'ProjetTwo',
    props: {
        
    },
    data () {
        return {
            
        }
    },
}
</script>
