import { useState } from "react";
import { SECTIONS, GUIDE_CONTENT } from "./data/guideData";
import "./App.css";

const ELEMENT_ICONS = {
  AIR: { src: "/images/aire.png", alt: "Aire" },
  FIRE: { src: "/images/fuego.png", alt: "Fuego" },
  EARTH: { src: "/images/tierra.png", alt: "Tierra" },
  WATER: { src: "/images/agua.png", alt: "Agua" },
};

export default function App() {
  const [activeId, setActiveId] = useState("about");
  const currentSection = GUIDE_CONTENT[activeId];

  return (
    <div className="app-shell">
      {/* HEADER FIJO: LOGO A LA IZQUIERDA + HUD DE LIGHT CRUSADER */}
      <header className="lc-hud">
        <div className="lc-title-zone">
          <img
            src="/images/logo.png"
            alt="Light Crusader"
            className="lc-logo-img"
          />
          <span className="lc-subtag">MEGA DRIVE / 1995</span>
        </div>

        <div className="lc-hud-main">
          <div className="lc-top-trim" />

          <div className="lc-hud-slots">
            {/* CAJA 1: PLAYER LIFE (2 FILAS DE 10 ORBES FIJOS) */}
            <div className="lc-slot lc-slot--life">
              <div className="lc-screen">
                <div className="lc-orbs-grid" aria-label="Vida del jugador">
                  <div className="lc-orbs-row">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={`full-${i}`}
                        className="lc-orb is-full"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="lc-orbs-row">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={`empty-${i}`}
                        className="lc-orb is-empty"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="lc-caption">PLAYER LIFE</div>
            </div>

            <div className="lc-pillar" />

            {/* CAJA 2: MAGIC (4 ELEMENTOS EN FILA + 99 FIJO) */}
            <div className="lc-slot lc-slot--magic">
              <div className="lc-screen lc-screen--magic">
                <div className="lc-magic-row">
                  <img
                    src="/images/aire.png"
                    alt="Aire"
                    className="lc-magic-icon"
                  />
                  <img
                    src="/images/fuego.png"
                    alt="Fuego"
                    className="lc-magic-icon"
                  />
                  <img
                    src="/images/tierra.png"
                    alt="Tierra"
                    className="lc-magic-icon"
                  />
                  <img
                    src="/images/agua.png"
                    alt="Agua"
                    className="lc-magic-icon"
                  />
                </div>
                <span className="lc-magic-count" aria-label="Magia 99">
                  99
                </span>
              </div>
              <div className="lc-caption">MAGIC</div>
            </div>

            <div className="lc-pillar" />

            {/* CAJA 3: ENEMY LIFE */}
            <div className="lc-slot">
              <div className="lc-screen" />
              <div className="lc-caption">ENEMY LIFE</div>
            </div>
          </div>
        </div>
      </header>

      {/* CUERPO PRINCIPAL: SIDEBAR FIJA + CONTENIDO SCROLLABLE */}
      <div className="main-layout">
        <aside className="sidebar">
          <nav className="sidebar-nav" aria-label="Secciones de la guía">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className={`nav-btn ${activeId === sec.id ? "active" : ""}`}
                onClick={() => setActiveId(sec.id)}
              >
                <span className="cursor-arrow">▶</span>
                {sec.label}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <p>Guía Light Crusader v0.1</p>
            <p className="wip-badge">EN CONSTRUCCIÓN</p>
          </div>
        </aside>

        <main className="content-scroll">
          <div className="content-container">
            <header className="section-header">
              <h2>{currentSection.title}</h2>
              <p className="section-subtitle">{currentSection.subtitle}</p>
            </header>

            {currentSection.underConstruction ? (
              <div className="construction-banner">
                <img
                  src="/images/fuente.png"
                  alt="Fuente de Light Crusader"
                  className="construction-fountain"
                />
                <p className="construction-title">
                  {currentSection.constructionTitle}
                </p>
                <p className="construction-text">
                  {currentSection.constructionText}
                </p>
              </div>
            ) : (
              <>
                <div className="cards-list">
                  {currentSection.blocks.map((block, index) => (
                    <article key={index} className="guide-card">
                      <h3>{block.heading}</h3>
                      <p>{block.text}</p>
                    </article>
                  ))}
                </div>

                {currentSection.spells && (
                  <div className="magic-table-wrapper">
                    <table className="magic-table">
                      <thead>
                        <tr>
                          <th>{currentSection.spellsTableHeader.name}</th>
                          <th>{currentSection.spellsTableHeader.elements}</th>
                          <th>{currentSection.spellsTableHeader.description}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSection.spells.map((spell) => (
                          <tr key={spell.name}>
                            <td className="spell-name">{spell.name}</td>
                            <td>
                              <div className="spell-elements">
                                {spell.elements.map((elemKey, idx) => {
                                  const icon = ELEMENT_ICONS[elemKey];
                                  if (!icon) return null;
                                  return (
                                    <img
                                      key={`${spell.name}-${elemKey}-${idx}`}
                                      src={icon.src}
                                      alt={icon.alt}
                                      title={icon.alt}
                                      className="spell-elem-icon"
                                    />
                                  );
                                })}
                              </div>
                            </td>
                            <td className="spell-desc">{spell.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {currentSection.equipmentCategories && (
                  <div className="equipment-sections">
                    {currentSection.equipmentCategories.map((category) => (
                      <section key={category.id} className="equipment-block">
                        <h3 className="equipment-category-title">
                          {category.title}
                        </h3>
                        <div className="magic-table-wrapper">
                          <table className="magic-table">
                            <thead>
                              <tr>
                                <th>{currentSection.equipmentTableHeader.name}</th>
                                <th>
                                  {currentSection.equipmentTableHeader.whereToFind}
                                </th>
                                <th>{currentSection.equipmentTableHeader.special}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.items.map((item) => (
                                <tr key={item.name}>
                                  <td className="spell-name">
                                    <div className="equip-name-cell">
                                      {item.image && (
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="equip-icon"
                                        />
                                      )}
                                      <span>{item.name}</span>
                                    </div>
                                  </td>
                                  <td className="spell-desc">
                                    {item.whereToFind}
                                  </td>
                                  <td className="spell-desc">{item.special}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}