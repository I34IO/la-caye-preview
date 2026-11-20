const $ = (s) => document.querySelector(s);
const PRO_EMAIL = "pro@lacaye.fr"; // ⚠️ à remplacer par la vraie adresse

const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};

// ----- Âge -----
if (store.get("age-ok")) $("#age").hidden = true;
$("#age-yes").onclick = () => { store.set("age-ok", "1"); $("#age").hidden = true; };

// ----- Menu du restaurant -----
if ($("#menu")) {
  $("#menu").innerHTML = MENU.map((c) => `
    <div class="menu-cat">
      <h3>${c.titre}</h3>
      ${c.plats.map(([nom, prix, sub]) => `
        <div class="dish"><span>${nom}</span><span class="price">${prix} €</span>${sub ? `<small>${sub}</small>` : ""}</div>`).join("")}
    </div>`).join("");
}

// ----- Cave : onglets par famille -----
if ($("#tabs")) {
  const show = (id) => {
    const cat = CAVE.find((c) => c.id === id);
    document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.id === id));
    $("#panel").innerHTML = `
      <div class="illus">
        <img src="assets/illus/${cat.illus}.png" alt="" />
        <h3>${cat.titre}</h3>
        <p>${cat.items.length} références</p>
      </div>
      <div>
        ${cat.items.map(([nom, orig, deg, notes, verre, emporter]) => `
          <div class="bottle">
            <span class="name">${nom}</span>
            <span class="orig">${orig} · ${deg}</span>
            <span class="notes">${notes}</span>
            <span class="prices">
              ${verre ? `Au verre <b>${verre} €</b>` : `<span class="na">Pas au verre</span>`}<br />
              ${emporter ? `À emporter <b>${emporter.replace(/(\d[\d,]*)$/, "$1 €").replace(/(\d[\d,]*) —/, "$1 € —")}</b>` : `<span class="na">Pas à emporter</span>`}
            </span>
          </div>`).join("")}
      </div>`;
  };
  $("#tabs").innerHTML = CAVE.map((c) => `<button class="tab" role="tab" data-id="${c.id}">${c.titre}</button>`).join("");
  $("#tabs").onclick = (e) => { const id = e.target.dataset.id; if (id) show(id); };
  show(CAVE[0].id);
}

// ----- Pro : maisons -----
if ($("#families")) {
  $("#families").innerHTML = MAISONS.map((f) => `
    <div class="family">
      <h3>${f.famille}</h3>
      <div class="houses">
        ${f.liste.map(([nom, orig, txt]) => `<div class="house"><strong>${nom}</strong><span class="orig">${orig}</span><p>${txt}</p></div>`).join("")}
      </div>
    </div>`).join("");
}

// ----- Pro : formulaire → e-mail prérempli (pas de serveur pour l'instant) -----
if ($("#pro-form")) {
  $("#pro-form").onsubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const body = [
      `Établissement : ${f.etab} (${f.type})`,
      `Contact : ${f.nom}`,
      `Ville : ${f.ville}`,
      `E-mail : ${f.email}`,
      `Téléphone : ${f.tel}`,
      "", f.msg,
    ].join("\n");
    location.href = `mailto:${PRO_EMAIL}?subject=${encodeURIComponent("Demande pro — " + f.etab)}&body=${encodeURIComponent(body)}`;
  };
}
