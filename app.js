const ultraItems = [
  {
    name: "Rose Garden Ring",
    value: "10,000+",
    sortValue: 10000,
    image: "rose-ring.png",
    note: "Spring Event Exclusive",
  },
  {
    name: "GoBattle Ring",
    value: "8,600+",
    sortValue: 8600,
    image: "gobattle-ring.png",
    note: "Promo version · 1 of 1 · Priceless",
  },
  {
    name: "Blaze Throw",
    value: "4,000",
    sortValue: 4000,
    image: "blazethrow.png",
    note: "Summer Event Exclusive · Not usable in KM",
  },
  {
    name: "Team Gravity Feather",
    value: "3,300",
    sortValue: 3300,
    image: "team-gravity-feather.png",
  },
  {
    name: "Firebreath Ring",
    value: "1,400",
    sortValue: 1400,
    image: "firebreath-ring.png",
  },
  {
    name: "Restoration Ring",
    value: "1,350",
    sortValue: 1350,
    image: "resto-ring.png",
  },
  {
    name: "Peppermint Strike",
    value: "1,100",
    sortValue: 1100,
    image: "peppermint.png",
    note: "Winter Event Exclusive",
  },
  {
    name: "Breath Helmet",
    value: "850",
    sortValue: 850,
    image: "breathhelmet.webp",
  },
  {
    name: "Gravity Feather",
    value: "850",
    sortValue: 850,
    image: "gravity-feather.png",
  },
  {
    name: "Instant Strength Glove",
    value: "600",
    sortValue: 600,
    image: "orange-glove.png",
  },
  {
    name: "Bloodmoon Ring",
    value: "400",
    sortValue: 400,
    image: "bloodmoon-ring.png",
    note: "Halloween Event Exclusive",
  },
  {
    name: "Lava Armor",
    value: "350",
    sortValue: 350,
    image: "lavaarmour.png",
  },
  {
    name: "Epic Strength Glove",
    value: "295",
    sortValue: 295,
    image: "epic-glove.png",
  },
  {
    name: "Maximum Speed Boots",
    value: "199",
    sortValue: 199,
    image: "maximum-speed-boots.png",
  },
  {
    name: "Maximum Fire Cloak",
    value: "190",
    sortValue: 190,
    image: "max-fire.png",
  },
  {
    name: "Fire Protection Cloak",
    value: "100",
    sortValue: 100,
    image: "fire-protection-cloak.png",
  },
  {
    name: "Extreme Venom Cloak Protection",
    value: "90",
    sortValue: 90,
    image: "ex-venom.png",
  },
  {
    name: "Blue Dragon Ring",
    value: "25–85",
    sortValue: 85,
    image: "blue-ring.png",
  },
  {
    name: "Anti Freezing Glove",
    value: "250",
    sortValue: 250,
    image: "blue-glove.png",
  },
  {
    name: "Red Dragon Ring",
    value: "13",
    sortValue: 13,
    image: "red-ring.png",
  },
  {
    name: "Firebreath Blood",
    value: "12",
    sortValue: 12,
    image: "firebreaths-blood.png",
  },
  {
    name: "Normal Health Regeneration Cloak",
    value: "12",
    sortValue: 12,
    image: "health-regeneration-cloak.png",
  },
  {
    name: "Maximum Health Regeneration Cloak",
    value: "8",
    sortValue: 8,
    image: "max-regen.png",
  },
  {
    name: "Anti Fire Enchantment",
    value: "7",
    sortValue: 7,
    image: "firebook.png",
  },
  {
    name: "Speed Boots",
    value: "4",
    sortValue: 4,
    image: "speed-boot.png",
  },
  {
    name: "Epic Instant Defense Cloak",
    value: "1–2",
    sortValue: 2,
    image: "epic-def.png",
  },
  {
    name: "Venom Cloak",
    value: "1–2",
    sortValue: 2,
    image: "normal-venom-protection-cloak.png",
  },
  {
    name: "Regular Defense Cloak",
    value: "1",
    sortValue: 1,
    image: "instant-defense-cloak.png",
  },
  {
    name: "Normal Invisibility",
    value: "1",
    sortValue: 1,
    image: "invisibility-cloak.png",
  },
  {
    name: "Hermes Boots",
    value: "1",
    sortValue: 1,
    image: "hermes.png",
  },
  {
    name: "Extreme Invisibility Cloak",
    value: "1",
    sortValue: 1,
    image: "ex-invis.png",
  },
  {
    name: "Invincibility Potion",
    value: "0.5",
    sortValue: 0.5,
    image: "epic-invincibility-potion.png",
  },
];

const relics = [
  {
    name: "Gem Dust",
    image: "gem-dust.png",
    sortValue: 60000,
    levels: [
      { level: 1, effect: "Up to 5", points: "3,000+" },
      { level: 2, effect: "Up to 10", points: "6,500+" },
      { level: 3, effect: "Up to 30", points: "13,800+" },
      { level: 4, effect: "Up to 50", points: "29,000+" },
      { level: 5, effect: "Up to 100", points: "60,000+" },
    ],
  },
  {
    name: "Wizard's Focus",
    sortValue: 33000,
    levels: [
      { level: 1, effect: "2%", points: "1,500+" },
      { level: 2, effect: "4%", points: "3,500+" },
      { level: 3, effect: "10%", points: "7,500+" },
      { level: 4, effect: "30%", points: "16,000+" },
      { level: 5, effect: "50%", points: "33,000+" },
    ],
  },
  {
    name: "Shado's Tear",
    image: "shadotear.png",
    note: "Halloween Event Exclusive",
    sortValue: 21500,
    levels: [
      { level: 1, effect: "2%", points: "1,100" },
      { level: 2, effect: "3%", points: "2,300" },
      { level: 3, effect: "4%", points: "4,800" },
      { level: 4, effect: "6%", points: "9,900" },
      { level: 5, effect: "8%", points: "21,500" },
    ],
  },
  {
    name: "Prismatic Cloud",
    image: "prismatic-cloud.png",
    sortValue: 15000,
    fixedValue: "14,000–15,000 pts",
    note: "Estimated value if tradable",
  },
  {
    name: "Flying Skill",
    image: "flying-skill.png",
    sortValue: 14000,
    levels: [{ level: 1, effect: "Dash up with wings", points: "14,000" }],
  },
  {
    name: "Dodge Charm",
    sortValue: 12200,
    levels: [
      { level: 1, effect: "1%", points: "650" },
      { level: 2, effect: "2%", points: "1,300" },
      { level: 3, effect: "4%", points: "2,800" },
      { level: 4, effect: "8%", points: "6,000" },
      { level: 5, effect: "16%", points: "12,200" },
    ],
  },
  {
    name: "Shinobi's Fury",
    image: "shinobi.png",
    sortValue: 5200,
    levels: [
      { level: 1, effect: "8%", points: "250" },
      { level: 2, effect: "16%", points: "550" },
      { level: 3, effect: "30%", points: "1,200" },
      { level: 4, effect: "60%", points: "2,500" },
      { level: 5, effect: "80%", points: "5,200" },
    ],
  },
  {
    name: "Dwarf's Strength",
    image: "dwarf-strength.png",
    sortValue: 1500,
    levels: [
      { level: 1, effect: "8%", points: "50" },
      { level: 2, effect: "16%", points: "110" },
      { level: 3, effect: "30%", points: "300+" },
      { level: 4, effect: "50%", points: "700+" },
      { level: 5, effect: "80%", points: "1,500+" },
    ],
  },
  {
    name: "Iron Heart",
    image: "iron-heart.png",
    sortValue: 1100,
    levels: [
      { level: 1, effect: "2%", points: "12" },
      { level: 2, effect: "4%", points: "60" },
      { level: 3, effect: "10%", points: "190" },
      { level: 4, effect: "20%", points: "500" },
      { level: 5, effect: "40%", points: "1,100" },
    ],
  },
  {
    name: "Dice of Destiny",
    image: "dice-of-destiny.png",
    sortValue: 1000,
    levels: [
      { level: 1, effect: "1%", points: "10" },
      { level: 2, effect: "2%", points: "50" },
      { level: 3, effect: "10%", points: "150" },
      { level: 4, effect: "20%", points: "450" },
      { level: 5, effect: "50%", points: "1,000" },
    ],
  },
  {
    name: "The Rest Stone",
    sortValue: 1000,
    note: "Level 6 Adventurer Quest Reward",
    levels: [
      { level: 1, effect: "8%", points: "11" },
      { level: 2, effect: "6%", points: "40" },
      { level: 3, effect: "4%", points: "160" },
      { level: 4, effect: "2%", points: "430" },
      { level: 5, effect: "0%", points: "1,000" },
    ],
  },
  {
    name: "Talisman of the Phoenix",
    image: "talisman-of-the-pheonix.png",
    sortValue: 1000,
    levels: [
      { level: 1, effect: "2%", points: "30" },
      { level: 2, effect: "5%", points: "80" },
      { level: 3, effect: "10%", points: "200" },
      { level: 4, effect: "20%", points: "450" },
      { level: 5, effect: "30%", points: "1,000" },
    ],
  },
  {
    name: "Inferno Touch",
    image: "inferno.png",
    sortValue: 740,
    note: "PVP only",
    levels: [
      { level: 1, effect: "1%", points: "6" },
      { level: 2, effect: "2%", points: "40" },
      { level: 3, effect: "5%", points: "130" },
      { level: 4, effect: "10%", points: "350" },
      { level: 5, effect: "15%", points: "740" },
    ],
  },
  {
    name: "Rejuvenation Gem",
    image: "rejuv-gem.png",
    sortValue: 620,
    levels: [
      { level: 1, effect: "2%", points: "5" },
      { level: 2, effect: "5%", points: "35" },
      { level: 3, effect: "10%", points: "125" },
      { level: 4, effect: "20%", points: "300" },
      { level: 5, effect: "40%", points: "620" },
    ],
  },
  {
    name: "Greed's Grip",
    image: "greeds-grip.png",
    sortValue: 100,
    levels: [
      { level: 1, effect: "2 blocks", points: "10" },
      { level: 2, effect: "3 blocks", points: "20–40" },
      { level: 3, effect: "5 blocks", points: "80–100" },
    ],
  },
];

const items = [
  ...ultraItems.map((item) => ({ ...item, type: "items" })),
  ...relics.map((item) => ({ ...item, type: "relics" })),
];

const catalog = document.querySelector("#catalog");
const categoryFilters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search");
const clearSearchButton = document.querySelector("#clear-search");
const emptyState = document.querySelector("#empty-state");
const resetFiltersButton = document.querySelector("#reset-filters");

let activeType = "all";
let searchTerm = "";

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (character) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    })[character],
  );
}

function normalized(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function imageOrInitials(item) {
  if (item.image) {
    return `
      <img
        class="item-image"
        src="assets/items/${encodeURIComponent(item.image)}"
        alt="${escapeHtml(item.name)}"
        loading="lazy"
      />
    `;
  }

  const initials = item.name
    .split(/\s+/)
    .filter((word) => !["the", "of"].includes(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return `<span class="image-fallback" aria-hidden="true">${escapeHtml(initials)}</span>`;
}

function itemCard(item) {
  return `
    <article class="item-card">
      <div class="item-image-wrap">${imageOrInitials(item)}</div>
      <div class="item-details">
        <div class="item-topline">
          <h3 class="item-name">${escapeHtml(item.name)}</h3>
          <strong class="item-value">${escapeHtml(item.value)}</strong>
        </div>
        ${item.note ? `<p class="item-note">${escapeHtml(item.note)}</p>` : ""}
      </div>
    </article>
  `;
}

function relicCard(relic) {
  const levels = (relic.levels || [])
    .map(
      (level) => `
        <div class="level-cell">
          <span class="level-label">Lvl ${level.level}</span>
          <span class="level-effect">${escapeHtml(level.effect)}</span>
          <strong class="level-points">${escapeHtml(level.points)}</strong>
          <span class="points-label">pts</span>
        </div>
      `,
    )
    .join("");

  return `
    <article class="relic-card">
      <div class="relic-heading">
        <div class="item-image-wrap relic-image-wrap">${imageOrInitials(relic)}</div>
        <div class="relic-title">
          <h3>${escapeHtml(relic.name)}</h3>
          ${relic.note ? `<p class="item-note">${escapeHtml(relic.note)}</p>` : ""}
          ${relic.fixedValue ? `<strong class="fixed-value">${escapeHtml(relic.fixedValue)}</strong>` : ""}
        </div>
      </div>
      ${
        relic.levels
          ? `<div class="level-grid" aria-label="${escapeHtml(relic.name)} level values">${levels}</div>`
          : ""
      }
    </article>
  `;
}

function valueBand(value) {
  if (value >= 10000) return "10,000+";
  if (value >= 1000) return "1,000–9,999";
  if (value >= 100) return "100–999";
  if (value >= 10) return "10–99";
  if (value >= 1) return "1–9";
  return "Under 1";
}

function getFilteredItems() {
  const query = normalized(searchTerm.trim());

  return {
    ultraItems: ultraItems
      .filter((item) => activeType !== "relics")
      .filter((item) => !query || normalized(`${item.name} ${item.note || ""}`).includes(query))
      .slice()
      .sort((a, b) => b.sortValue - a.sortValue || a.name.localeCompare(b.name)),
    relics: relics
      .filter((item) => activeType !== "items")
      .filter((item) => !query || normalized(`${item.name} ${item.note || ""}`).includes(query))
      .slice()
      .sort((a, b) => b.sortValue - a.sortValue || a.name.localeCompare(b.name)),
  };
}

function renderFilters() {
  const options = [
    { value: "all", label: "All" },
    { value: "relics", label: "Relics" },
    { value: "items", label: "Other items" },
  ];

  categoryFilters.innerHTML = options
    .map(
      (option) => `
        <button
          class="filter-button ${activeType === option.value ? "active" : ""}"
          type="button"
          data-type="${option.value}"
          aria-pressed="${activeType === option.value}"
        >${option.label}</button>
      `,
    )
    .join("");

  categoryFilters.querySelectorAll("[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.type;
      render();
    });
  });
}

function renderUltraItems(filteredItems) {
  if (!filteredItems.length) return "";

  const bands = [...new Set(filteredItems.map((item) => valueBand(item.sortValue)))];

  return `
    <section class="catalog-section" aria-labelledby="items-heading">
      <div class="section-heading">
        <h2 id="items-heading">Other Items</h2>
      </div>
      ${bands
        .map((band) => {
          const bandItems = filteredItems.filter((item) => valueBand(item.sortValue) === band);
          return `
            <div class="value-group">
              <h3 class="value-band">${band}</h3>
              <div class="item-grid">${bandItems.map(itemCard).join("")}</div>
            </div>
          `;
        })
        .join("")}
    </section>
  `;
}

function renderRelics(filteredRelics) {
  if (!filteredRelics.length) return "";

  return `
    <section class="catalog-section relics-section" aria-labelledby="relics-heading">
      <div class="section-heading">
        <h2 id="relics-heading">Relics</h2>
      </div>
      <div class="relic-grid">${filteredRelics.map(relicCard).join("")}</div>
    </section>
  `;
}

function render() {
  const filtered = getFilteredItems();
  const total = filtered.ultraItems.length + filtered.relics.length;
  clearSearchButton.hidden = !searchTerm;
  catalog.innerHTML = `${renderRelics(filtered.relics)}${renderUltraItems(filtered.ultraItems)}`;
  emptyState.hidden = total > 0;
  catalog.hidden = total === 0;
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  render();
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  searchInput.focus();
  render();
});

resetFiltersButton.addEventListener("click", () => {
  activeType = "all";
  searchInput.value = "";
  searchTerm = "";
  render();
});

renderFilters();
render();