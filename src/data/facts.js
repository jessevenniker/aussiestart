/**
 * Centrale registry van alle harde cijfers op de site.
 * Eén plek aanpassen, overal up-to-date. Per fact: waarde, peildatum, bron.
 *
 * Importeren als: import { facts } from '@/data/facts.js'
 * Gebruik: facts.visumKosten.value (= 670)
 */

export const facts = {
  // ----- Visum (subclass 417) -----
  visumKosten: {
    value: 670,
    currency: 'AUD',
    display: 'AUD 670',
    lastChecked: '29 april 2026',
    source: 'Department of Home Affairs, Visa Pricing Estimator',
    sourceUrl: 'https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator',
    note: 'Verhoogd van AUD 635 naar AUD 670 per 1 juli 2025.',
  },
  spaargeldEis: {
    value: 5000,
    currency: 'AUD',
    display: 'AUD 5.000',
    lastChecked: '29 april 2026',
    source: 'Department of Home Affairs, subclass 417 voorwaarden',
    sourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417',
    note: 'Aantonen op bankafschrift, niet wegzetten.',
  },
  leeftijdNL: {
    display: '18 t/m 30 jaar',
    note: 'Nederlanders moeten jonger dan 31 zijn op aanvraagdatum.',
  },
  visumGeldigheid: {
    display: '12 maanden',
    note: 'Vanaf eerste binnenkomst.',
  },
  zesMaandenLimiet: {
    display: '6 maanden bij dezelfde werkgever',
    note: 'Standaardregel (Condition 8547). Uitzonderingen mogelijk via Home Affairs.',
    sourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation',
  },

  // ----- Loon en belasting -----
  minimumloon: {
    value: 24.95,
    currency: 'AUD',
    display: 'AUD 24,95/uur',
    lastChecked: '29 april 2026',
    source: 'Fair Work Commission Annual Wage Review 2025',
    sourceUrl: 'https://www.fairwork.gov.au/pay-and-wages/minimum-wages',
    note: 'Sinds 1 juli 2025. Voor werknemers ouder dan 21 onder National Minimum Wage. Award-werk kan andere tarieven hebben.',
  },
  casualLoading: {
    value: 0.25,
    display: '25%',
    note: 'Compenseert het ontbreken van vakantiegeld en ziektewet bij casual contract.',
  },
  casualMinimum: {
    value: 31.19,
    currency: 'AUD',
    display: 'AUD 31,19/uur',
    note: 'Minimumloon + 25% casual loading. Geldt onder National Minimum Wage; awards kunnen afwijken.',
  },
  superannuation: {
    value: 0.12,
    display: '12%',
    lastChecked: '29 april 2026',
    source: 'Australian Taxation Office, super guarantee',
    sourceUrl: 'https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions',
    note: 'Sinds 1 juli 2025 (was 11,5%). De oude AUD 450/maand drempel is afgeschaft per 1 juli 2022.',
  },
  daspBelasting: {
    value: 0.65,
    display: '65%',
    nettoTerug: '35%',
    source: 'ATO, Departing Australia Superannuation Payment',
    sourceUrl: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/withdrawing-and-using-your-super/departing-australia-superannuation-payment',
    note: 'WHM-tarief op taxable component. Reguliere migranten betalen 35-45%.',
  },
  whmBelastingschijven: [
    { range: 'AUD 0 – 45.000',         rate: '15%' },
    { range: 'AUD 45.001 – 135.000',   rate: '30%' },
    { range: 'AUD 135.001 – 190.000',  rate: '37%' },
    { range: 'Boven AUD 190.000',      rate: '45%' },
  ],

  // ----- Wisselkoers -----
  audToEur: {
    value: 0.61,
    display: '0,61',
    lastChecked: '29 april 2026',
    note: '1 EUR ≈ AUD 1,64. Reken op 0,55-0,68 als bandbreedte over een jaar. Voor planning indicatief; voor actuele koers check Wise of XE.',
  },

  // ----- TFN -----
  tfnLeveringTermijn: {
    display: 'binnen 28 dagen per post',
    source: 'Australian Taxation Office',
    sourceUrl: 'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn',
  },
  tfn28DagenInhouding: {
    display: '45% inhouding na 28 dagen zonder TFN',
    note: 'Werkgever houdt na 28 dagen 45% in op betalingen als je geen TFN hebt opgegeven.',
  },

  // ----- Markt-indicaties (dynamisch, label als zodanig) -----
  marktIndicaties: {
    lastChecked: '29 april 2026',
    type: 'marktindicatie',
    note: 'Bandbreedtes uit Reddit r/australia, Flatmates.com.au, Hostelworld en SafetyWing-tarieven. Niet officieel, voor planning.',
    items: {
      hostelDormSydney:    'AUD 35-50 per nacht',
      hostelDormMelbourne: 'AUD 30-45 per nacht',
      sharehouseSydney:    'AUD 250-450/week',
      sharehouseMelbourne: 'AUD 200-380/week',
      sharehouseRegional:  'AUD 150-280/week',
      etenZelfKoken:       'AUD 80-130/week',
      etenMix:             'AUD 130-200/week',
      ovWeekpas:           'AUD 30-50/week',
      vluchtHeen:          '€700-1.300 enkelreis, €1.000-1.700 open jaar return',
      verzekeringMaand:    '€25-70/maand afhankelijk van aanbieder',
    },
  },
}
