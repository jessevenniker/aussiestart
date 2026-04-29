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
  wise: {
    name: 'Wise',
    url: 'https://wise.com/invite/dic/jesserobinmartv',
    program: 'Wise Refer-a-Friend',
    commission: 'Variabel per kwalificerende referral',
    cookie: 'Sessie-gebaseerd',
    confirmedSince: '29 april 2026',
  },
  viator: {
    name: 'Viator',
    pid: 'P00219714',
    mcid: '42383',
    // Generieke Australië-landingspage. Voor specifieke tours: gebruik viatorUrl(slug).
    url: 'https://www.viator.com/Australia/d113?pid=P00219714&mcid=42383&medium=link',
    program: 'Viator Affiliate Program',
    commission: '8% van booking value',
    cookie: '30 dagen',
    confirmedSince: '29 april 2026',
  },
  getyourguide: {
    name: 'GetYourGuide',
    partnerId: '9QMIGTL',
    url: 'https://www.getyourguide.nl?partner_id=9QMIGTL&cmp=share_to_earn',
    program: 'GetYourGuide Share & Earn',
    commission: '8% per kwalificerende boeking',
    cookie: '31 dagen',
    confirmedSince: '29 april 2026',
  },
  amazonNL: {
    name: 'Amazon NL',
    tag: 'australiestar-21',
    url: 'https://www.amazon.nl/?tag=australiestar-21',
    program: 'Amazon Associates NL',
    commission: '1-9% per categorie',
    cookie: '24 uur (90 dagen bij toegevoegd-aan-winkelwagen)',
    confirmedSince: '29 april 2026',
  },
}

/**
 * Builders voor product-specifieke affiliate-URLs.
 * Voor Viator/GYG wil je vaak naar een specifieke tour linken,
 * voor Amazon naar een specifiek product.
 */
export function viatorUrl(productPath) {
  const sep = productPath.includes('?') ? '&' : '?'
  return `https://www.viator.com${productPath}${sep}pid=P00219714&mcid=42383&medium=link`
}

export function getyourguideUrl(productPath) {
  const sep = productPath.includes('?') ? '&' : '?'
  return `https://www.getyourguide.nl${productPath}${sep}partner_id=9QMIGTL&cmp=share_to_earn`
}

export function amazonNlUrl(asinOrPath) {
  const path = asinOrPath.startsWith('/') ? asinOrPath : `/dp/${asinOrPath}`
  return `https://www.amazon.nl${path}?tag=australiestar-21`
}
