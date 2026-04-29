/**
 * Centrale registry van affiliate-partners. Eén plek om reference-IDs en
 * link-templates te beheren. Geen geheimen hier (deze code wordt naar de
 * client gestuurd).
 *
 * Bij elke affiliate-link in de UI: gebruik AffiliateLink-component zodat
 * sponsored-disclosure en rel-attributen automatisch worden gezet.
 */
export const affiliates = {
  safetywing: {
    name: 'SafetyWing',
    referenceId: '26519283',
    url: 'https://safetywing.com/?referenceID=26519283&utm_source=26519283&utm_medium=Ambassador',
    program: 'SafetyWing Ambassador',
    commission: '10% recurring tot 364 dagen',
    cookie: '365 dagen',
    confirmedSince: '29 april 2026',
  },
}
