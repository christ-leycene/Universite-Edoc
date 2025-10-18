// =======================
// FONCTION GÉNÉRIQUE ACTIVE
// =======================
function add_and_remove_Class_active(elements, activeClass = 'active') {
    elements.forEach(el => {
        el.addEventListener('click', () => {
            elements.forEach(e => e.classList.remove(activeClass));
            el.classList.add(activeClass);
        });
    });
}

// =======================
// NAVIGATION LATÉRALE
// =======================
const navigation_links = document.querySelectorAll('.bloc_nav');
add_and_remove_Class_active(navigation_links);

// =======================
// LANGUES
// =======================
const active_language = document.querySelectorAll('.langues a');
add_and_remove_Class_active(active_language);

// =======================
// SUIVI DES DEMANDES - ONGLETS ET TABLES
// =======================
const tabs = document.querySelectorAll('.suivi .entete > div');
const tables = document.querySelectorAll('.suivi .tables table');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Onglets
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Tables
        tables.forEach(tbl => {
            tbl.classList.remove('active');
            tbl.style.opacity = 0; // reset opacity
        });

        const tableToShow = tables[index];
        tableToShow.classList.add('active');

        // Laisser le browser appliquer le display avant de changer l'opacité
        requestAnimationFrame(() => {
            tableToShow.style.opacity = 1; // fade-in
        });
    });
});


// =======================
// MENU NOTES ET RÉSULTATS - CLONES
// =======================
let onClick = false;
let clone1, clone2;
const tab_clones = [];
const click_notes = document.querySelector('.notes_res');

click_notes.addEventListener('click', () => {
    const img_deplier = document.querySelector('.img_deplier');

    if (!onClick) {
        const docDiv = document.querySelector('.bloc_nav'); // div à cloner

        // Créer clones
        clone1 = docDiv.cloneNode(true);
        clone2 = docDiv.cloneNode(true);

        // Modifier clone1
        clone1.querySelector('img').src = 'angle-right.svg';
        clone1.querySelector('img').alt = 'Affichage';
        clone1.querySelector('a').href = 'resultat_annee.html';
        clone1.querySelector('a').textContent = 'Affichage';

        // Modifier clone2
        clone2.querySelector('img').src = 'angle-right.svg';
        clone2.querySelector('img').alt = 'Historique';
        clone2.querySelector('a').href = 'historique.html';
        clone2.querySelector('a').textContent = 'Historique';

        // Insérer après notes_res
        click_notes.after(clone1);
        clone1.after(clone2);

        tab_clones.push(clone1, clone2);

        // Ajouter la gestion active sur les clones
        add_and_remove_Class_active(tab_clones);

        onClick = true;
        img_deplier.classList.add('deplie');
    } else {
        clone1.remove();
        clone2.remove();
        onClick = false;
        img_deplier.classList.remove('deplie');
    }
});

// =======================
// ANNEES PASSEES
// =======================

const buttons = document.querySelectorAll('.tab-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const tab = document.getElementById(targetId);

    tab.classList.toggle('show');
    btn.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const aside = document.querySelector("aside");
    const overlay = document.querySelector(".overlay");
    const closeBtn = aside.querySelector(".page img:last-child"); // ton angle-left

    // Ouvrir le menu
    menuBtn.addEventListener("click", () => {
        aside.classList.add("active");
        menuBtn.style.display = "none"; // cacher hamburger
    });

    // Fermer en cliquant dehors
    overlay.addEventListener("click", () => {
        aside.classList.remove("active");
        menuBtn.style.display = "block"; // réafficher hamburger
    });

    // Fermer en cliquant sur l’icône angle-left
    closeBtn.addEventListener("click", () => {
        aside.classList.remove("active");
        menuBtn.style.display = "block"; // réafficher hamburger
    });
});

