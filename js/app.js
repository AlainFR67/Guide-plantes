"use strict";
/* ============================================================
   Guide-plantes — application (partie logique)
   ============================================================ */

const SELECTEUR_DOMAINE = document.getElementById("filtre-domaine");
const CHAMP_RECHERCHE = document.getElementById("champ-recherche");
const ZONE_INFO = document.getElementById("info");
const ZONE_STATS = document.getElementById("stats");
const ZONE_LISTE = document.getElementById("liste-fiches");
const PIED_VERSION = document.getElementById("app-version");

const DOMAINES = {
  digestion: "Digestion",
  sommeil: "Sommeil et détente",
  respiration: "Respiration",
  peau: "Peau et plaies",
  urinaire: "Voies urinaires",
  circulation: "Circulation",
  defenses: "Défenses",
  douleur: "Douleurs",
  feminin: "Gynécologie"
};

const ICONES = { "aromatique": "🌱", "médicinale": "💚", "les-deux": "🌸" };

function esc(s) {
  return String(s)
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;");
}

function norm(s) {
  return String(s).toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019']/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ").trim();
}

function texteComplet(p) {
  return [
    p.nom, p.latin, p.famille, p.type, p.resume,
    (p.vertus || []).join(" "),
    p.attention, p.recolte, p.utilisation,
    (p.recette && p.recette.nom) || "",
    (p.recette && p.recette.texte) || ""
  ].join(" ");
}

function construireFiche(p) {
  const icone = ICONES[p.type] || "🌿";
  const badge = '<span class="badge badge-' + (p.type === "les-deux" ? "deux" : p.type) + '">' + icone + " " + esc(p.type) + "</span>";
  const vertus = (p.vertus || []).map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("");
  const blocAttention = '<div class="attention"><strong>⚠️ Points d’attention :</strong> ' + esc(p.attention) + "</div>";
  const blocRecette = '<div class="recette"><strong>🍲 ' + esc(p.recette.nom) + "</strong><p>" + esc(p.recette.texte) + "</p></div>";
  return (
    '<details class="fiche" data-id="' + esc(p.id) + '">' +
    '<summary>' + icone + " " + esc(p.nom) + badge +
    '<span class="latin">' + esc(p.latin) + " — " + esc(p.famille) + "</span></summary>" +
    '<div class="corps">' +
    '<p class="resume">' + esc(p.resume) + "</p>" +
    "<h3>Vertus et effets</h3><ul>" + vertus + "</ul>" +
    blocAttention +
    "<h3>Récolte</h3><p>" + esc(p.recolte) + "</p>" +
    "<h3>Utilisation</h3><p>" + esc(p.utilisation) + "</p>" +
    blocRecette +
    "</div></details>"
  );
}

function appliquerFiltres() {
  const q = norm(CHAMP_RECHERCHE.value);
  const domaine = SELECTEUR_DOMAINE.value;
  let affiches = 0;
  const morceaux = [];
  PLANTES.forEach(function (p) {
    if (domaine !== "" && p.domaines.indexOf(domaine) === -1) return;
    if (q && norm(texteComplet(p)).indexOf(q) === -1) return;
    morceaux.push(construireFiche(p));
    affiches += 1;
  });
  ZONE_LISTE.innerHTML = morceaux.join("");
  ZONE_INFO.textContent = affiches + (affiches === 1 ? " plante affichée sur 100" : " plantes affichées sur 100");
}

function afficherVersion() {
  PIED_VERSION.textContent = "Version " + APP_VERSION + " · build du " + APP_BUILD_DATE + " à " + APP_BUILD_TIME + " (UTC)";
}

function initialiser() {
  CHAMP_RECHERCHE.addEventListener("input", appliquerFiltres);
  SELECTEUR_DOMAINE.addEventListener("change", appliquerFiltres);
  ZONE_STATS.textContent = "100 fiches disponibles · ouvrez une fiche en touchant son nom";
  afficherVersion();
  appliquerFiltres();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiser);
} else {
  initialiser();
}
