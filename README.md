README - E-DOC ITERITEKA UNIVERSITY
Description

E-DOC ITERITEKA UNIVERSITY est une plateforme web destinée aux étudiants pour gérer et consulter leurs informations académiques de manière centralisée. Le site offre une interface responsive avec un menu latéral déroulant qui s’adapte aux écrans larges et petits.

Pages du site

Tableau de bord (index.html)

Affiche les informations personnelles de l’étudiant : nom, CIN, téléphone, adresse.

Affiche les informations d’inscription et les étapes scolaires actuelles.

Présentation sous forme de cartes et de sections claires.

Demandes de documents scolaires (document.html)

Permet à l’étudiant de faire des demandes pour obtenir différents documents officiels (attestations, certificats, etc.).

Interface avec formulaire simple et validation des champs.

Notes et résultats (notes.html)

Affiche les notes actuelles de l’étudiant par matières.

Permet un accès rapide aux résultats de chaque semestre.

Historique des notes (historique.html)

Affiche les notes obtenues par l’étudiant au fil des années.

Présentation en tableau ou graphique pour visualiser l’évolution.

Horaires des cours (horaire.html)

Affiche l’emploi du temps complet de l’étudiant.

Informations par semaine et par jour avec les horaires et matières.

Orientation / Stages (orientation.html et stages.html)

Fournit les informations concernant les stages et l’orientation académique.

Permet de consulter les dates importantes et les documents requis.

Fonctionnalités principales

Menu latéral déroulant :

Visible sur grand écran, caché sur écran < 1200px.

Accessible via un bouton hamburger qui apparaît en mobile.

Possibilité de fermer le menu en cliquant sur l’icône angle-left ou sur l’overlay.

Responsive Design :

Utilisation de CSS Grid et Flexbox pour adapter le site à tous les écrans.

main occupe toute la largeur lorsque le menu est masqué en mobile.

Overlay interactif :

Quand le menu est ouvert en mobile, un overlay semi-transparent apparaît.

Cliquer sur l’overlay ferme le menu.

Navigation facile :

Chaque page est accessible depuis le menu latéral.

Les sections et sous-sections sont clairement indiquées.

+--------------------------------------------------+
| [☰]                   HEADER                     |
|                                                  |
| MAIN CONTENT (100% largeur si menu caché)       |
|                                                  |
+--------------------------------------------------+

Quand bouton ☰ cliqué :

+--------+----------------------------------------+
| ASIDE   | MAIN CONTENT                            |
| 250px   | (overlay derrière)                     |
| visible |                                        |
+--------+----------------------------------------+

- Cliquer sur overlay ou sur [<] ferme le menu.
- Bouton ☰ disparaît quand menu ouvert.

Technologies utilisées

HTML5 pour la structure des pages.

CSS3 (Flexbox, Grid, Media Queries) pour le design et la responsivité.

JavaScript pour le menu déroulant, l’overlay et l’interaction mobile.
