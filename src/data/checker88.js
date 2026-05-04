/**
 * 88-dagenregel checker — eligibility logica
 *
 * Geeft indicaties, GEEN officieel advies. Altijd verwijzen naar DHA.
 * Bronnen: immi.homeaffairs.gov.au, april 2026.
 */

export const DHA_SPECIFIED_WORK_URL =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work'

export const WERK_CATEGORIEEN = [
  {
    value: 'plant_animal',
    label: 'Landbouw / fruit plukken / farmwork',
    official: 'Plant and animal cultivation',
    standaard: true,
  },
  {
    value: 'fishing',
    label: 'Visserij of parelindustrie',
    official: 'Fishing and pearling',
    standaard: true,
  },
  {
    value: 'forestry',
    label: 'Bosbouw of houtkap',
    official: 'Tree farming and felling',
    standaard: true,
  },
  {
    value: 'mining',
    label: 'Mijnbouw',
    official: 'Mining',
    standaard: true,
  },
  {
    value: 'construction',
    label: 'Bouw (regionaal)',
    official: 'Construction in a regional area',
    standaard: true,
  },
  {
    value: 'disaster',
    label: 'Herstelwerk na ramp (brand of overstroming)',
    official: 'Bushfire/flood recovery work',
    standaard: true,
    note: 'Toegevoegd per 5 april 2025 — verifieer of jouw rampgebied erkend is.',
  },
  {
    value: 'tourism',
    label: 'Toerisme of horeca',
    official: 'Tourism and hospitality',
    standaard: false,
    note: 'Telt alleen in specifieke aangewezen remote gebieden — strenger dan andere categorieën.',
  },
  {
    value: 'unknown',
    label: 'Ik weet het niet zeker',
    official: null,
    standaard: false,
  },
]

// ─── Postcodes die NIET in aanmerking komen ───────────────────────────────────
// Gebaseerd op DHA: grote steden en ACT zijn uitgesloten.
const NOT_ELIGIBLE = [
  { from: 2600, to: 2618, area: 'Canberra (ACT)' },
  { from: 2900, to: 2906, area: 'Canberra suburbs (ACT)' },
  { from: 2000, to: 2097, area: 'Sydney CBD en binnenwijken' },
  { from: 2099, to: 2234, area: 'Greater Sydney (noord/oost)' },
  { from: 2555, to: 2574, area: 'Greater Sydney (southwest)' },
  { from: 2745, to: 2786, area: 'Greater Sydney (west)' },
  { from: 3000, to: 3099, area: 'Melbourne CBD en binnenwijken' },
  { from: 3101, to: 3207, area: 'Greater Melbourne' },
  { from: 3800, to: 3811, area: 'Greater Melbourne (south east)' },
  { from: 4000, to: 4123, area: 'Greater Brisbane' },
  { from: 4126, to: 4132, area: 'Greater Brisbane (south)' },
  { from: 4134, to: 4210, area: 'Greater Brisbane / Logan' },
  { from: 4211, to: 4270, area: 'Gold Coast' },
  { from: 6000, to: 6214, area: 'Greater Perth' },
  { from: 6800, to: 6999, area: 'Perth metro codes' },
]

// ─── Postcodes die zeker in aanmerking komen ─────────────────────────────────
const ELIGIBLE = [
  {
    from: 800, to: 999,
    area: 'Northern Territory',
    note: 'Heel NT wordt als regionaal gebied beschouwd, inclusief Darwin.',
  },
  {
    from: 7000, to: 7999,
    area: 'Tasmanië',
    note: 'Heel Tasmanië wordt als regionaal gebied beschouwd, inclusief Hobart.',
  },
  {
    from: 5000, to: 5799,
    area: 'South Australia',
    note: 'SA telt grotendeels als regionaal gebied, inclusief Adelaide.',
  },
  {
    from: 6215, to: 6797,
    area: 'Western Australia (regionaal)',
    note: 'Buiten Greater Perth.',
  },
  {
    from: 4271, to: 4999,
    area: 'Queensland (regionaal)',
    note: 'Buiten Greater Brisbane en Gold Coast.',
  },
]

// NSW regionaal — exclusief Greater Sydney
const NSW_REGIONAL = [
  { from: 2250, to: 2554 },
  { from: 2575, to: 2599 },
  { from: 2619, to: 2639 },
  { from: 2640, to: 2744 },
  { from: 2787, to: 2999 },
]

// VIC regionaal — exclusief Greater Melbourne (voorzichtiger: 'check')
const VIC_REGIONAL = [
  { from: 3210, to: 3334 },
  { from: 3342, to: 3426 },
  { from: 3433, to: 3749 },
  { from: 3812, to: 3999 },
]

// ─── Postcode lookup ──────────────────────────────────────────────────────────
function checkPostcode(raw) {
  const s = String(raw || '').trim()
  const pc = parseInt(s, 10)
  if (isNaN(pc) || s.length !== 4) return { zone: 'unknown', area: null, note: null }

  for (const r of NOT_ELIGIBLE) {
    if (pc >= r.from && pc <= r.to) return { zone: 'not_eligible', area: r.area, note: null }
  }
  for (const r of ELIGIBLE) {
    if (pc >= r.from && pc <= r.to) return { zone: 'eligible', area: r.area, note: r.note }
  }
  for (const r of NSW_REGIONAL) {
    if (pc >= r.from && pc <= r.to)
      return { zone: 'eligible', area: 'New South Wales (regionaal)', note: 'Buiten Greater Sydney.' }
  }
  for (const r of VIC_REGIONAL) {
    if (pc >= r.from && pc <= r.to)
      return {
        zone: 'check',
        area: 'Victoria (regionaal)',
        note: 'Buiten Greater Melbourne — maar VIC heeft extra postcodevoorwaarden. Controleer de DHA-lijst.',
      }
  }
  return { zone: 'check', area: null, note: 'Postcode staat niet in onze vereenvoudigde lijst. Controleer de officiële DHA postcode-lijst.' }
}

// ─── Hoofd-check ──────────────────────────────────────────────────────────────
/**
 * @param {string} postcode  4-cijferig
 * @param {string} categorie waarde uit WERK_CATEGORIEEN
 * @param {string} visumdoel '2' | '3' | 'unknown'
 * @returns {{ level: 'eligible'|'check'|'not_eligible'|'unknown', headline, body, checkpoints, extra }}
 */
export function check88Eligibility(postcode, categorie, visumdoel) {
  const pc = checkPostcode(postcode)

  if (pc.zone === 'unknown') {
    return {
      level: 'unknown',
      headline: 'Vul een geldige 4-cijferige postcode in',
      body: '',
      checkpoints: [],
      extra: null,
    }
  }

  if (pc.zone === 'not_eligible') {
    return {
      level: 'not_eligible',
      headline: 'Waarschijnlijk niet geschikt gebied',
      body: `Postcode valt in ${pc.area}. Dit gebied is geen erkend regionaal gebied voor specified work. Werk in grote steden en hun directe omgeving telt niet mee voor de 88-dagenregel.`,
      checkpoints: [
        { label: 'Postcode regionaal?', value: `Nee — ${pc.area}`, ok: false },
        { label: 'Officieel checken', value: 'Verplicht', ok: null },
      ],
      extra: 'Overweeg een andere werklocatie buiten de grote steden als je de 88 dagen wilt halen.',
    }
  }

  if (!categorie) {
    return {
      level: 'check',
      headline: 'Kies je werkcategorie',
      body: '',
      checkpoints: [],
      extra: null,
    }
  }

  const cat = WERK_CATEGORIEEN.find(c => c.value === categorie)
  const catLabel = cat?.official || categorie

  // Tourism is altijd extra voorzichtig
  if (categorie === 'tourism') {
    return {
      level: 'check',
      headline: 'Extra controle vereist',
      body: `Toerisme en horeca telt alleen mee in specifieke aangewezen remote gebieden — dit is strenger dan andere categorieën. Ook als de postcode regionaal lijkt, is aanvullende verificatie verplicht.`,
      checkpoints: [
        { label: 'Postcode', value: pc.area || 'Zie DHA lijst', ok: pc.zone === 'eligible' ? null : false },
        { label: 'Werkcategorie geschikt?', value: 'Alleen in aangewezen remote gebieden', ok: false },
        { label: 'DHA verificatie', value: 'Verplicht', ok: null },
        { label: 'Bewijs bewaren', value: 'Payslips + contract', ok: null },
      ],
      extra: 'Vraag je werkgever expliciet en schriftelijk of de locatie erkend is als "specified work" voor hospitality/toerisme. Ga niet af op mondeling bevestigde informatie.',
    }
  }

  if (categorie === 'unknown') {
    return {
      level: 'check',
      headline: 'Vul je werkcategorie in voor een betere indicatie',
      body: `De postcode lijkt ${pc.zone === 'eligible' ? 'in een erkend regionaal gebied' : 'in de buurt van een erkend gebied'} te liggen. Maar welk werk je precies doet is even bepalend als de locatie.`,
      checkpoints: [
        { label: 'Postcode', value: pc.area || '–', ok: pc.zone === 'eligible' ? true : null },
        { label: 'Werkcategorie', value: 'Nog niet ingevuld', ok: false },
      ],
      extra: null,
    }
  }

  // Standaard categorieën in eligible zone
  if (pc.zone === 'eligible') {
    const isDisaster = categorie === 'disaster'
    const derdedoel = visumdoel === '3'
    return {
      level: 'eligible',
      headline: 'Waarschijnlijk geschikt',
      body: `Postcode valt in ${pc.area}. ${pc.note || ''} De werkcategorie "${catLabel}" valt onder de bekende specified work-categorieën.${isDisaster ? ' Rampenherstelwerk is per 5 april 2025 toegevoegd — verifieer of jouw specifieke rampgebied erkend is.' : ''}`,
      checkpoints: [
        { label: 'Postcode regionaal?', value: pc.area, ok: true },
        { label: 'Werkcategorie herkend?', value: catLabel, ok: true },
        { label: 'Betaald werk', value: 'Vereist — payslips noodzakelijk', ok: null },
        { label: 'Bewijs bewaren', value: 'Payslips + werkgeversverklaring', ok: null },
        { label: 'DHA verificatie', value: 'Altijd aanbevolen', ok: null },
        ...(derdedoel
          ? [{ label: '3e visum: 179 dagen nodig', value: 'Of 88 dagen in aangewezen remote area', ok: null }]
          : []),
      ],
      extra: derdedoel
        ? 'Let op: voor een derde WHV zijn 179 gewerkte specified-workdagen nodig — of 88 dagen in een aangewezen remote area (strenger postcodecriterium dan voor het tweede visum). Controleer welke categorie voor jou geldt.'
        : isDisaster
        ? cat?.note || null
        : null,
    }
  }

  // Zone is 'check' (VIC / onbekende postcode)
  return {
    level: 'check',
    headline: 'Mogelijk geschikt — controleer de postcode extra',
    body: `${pc.note || ''} De werkcategorie "${catLabel}" is een bekende specified work-categorie, maar de exacte postcode moet je verifiëren via de officiële DHA postcode-lijst.`,
    checkpoints: [
      { label: 'Postcode', value: pc.area || 'Check DHA lijst', ok: null },
      { label: 'Werkcategorie', value: catLabel, ok: true },
      { label: 'DHA postcode-lijst', value: 'Verplicht checken', ok: null },
      { label: 'Bewijs bewaren', value: 'Payslips + contract', ok: null },
    ],
    extra: null,
  }
}
