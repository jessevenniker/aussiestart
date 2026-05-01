/**
 * Source of Truth — Aussiestart
 *
 * Feiten die op meerdere pagina's worden gebruikt staan hier centraal.
 * Pas dit bestand aan bij wijzigingen; pagina's die het importeren zijn automatisch actueel.
 *
 * Voeg per veld een lastChecked-datum toe zodat de audit-tool weet wat wanneer is gecontroleerd.
 */

export const SOT = {

  // ─── Visum ────────────────────────────────────────────────────────────────
  visa417: {
    label:        'Working Holiday visum subclass 417',
    kosten:       'AUD 670',
    leeftijd:     '18 t/m 30 jaar',
    spaarbewijs:  'AUD 5.000',
    geldigheid:   '12 maanden',
    bron:         'Department of Home Affairs',
    bronUrl:      'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417',
    lastChecked:  '2026-04-30',
  },

  // ─── Werk & loon ──────────────────────────────────────────────────────────
  minimumloon: {
    uurloon:       'AUD 24,95',
    weekLoon:      'AUD 948',
    casualLoon:    'AUD 31,19',   // incl. 25% casual loading
    superRate:     '12%',
    geldigVanaf:   '1 juli 2025',
    bron:          'Fair Work Commission',
    bronUrl:       'https://www.fairwork.gov.au',
    lastChecked:   '2026-04-30',
  },

  // ─── Accommodatie ─────────────────────────────────────────────────────────
  accommodatie: {
    hostelDormNacht:  'AUD 35–60',
    hostelDormWeek:   'AUD 150–300',
    sharehouseWeek:   'AUD 180–400',
    lastChecked:      '2026-04-28',
  },

  // ─── Eerste week kosten ───────────────────────────────────────────────────
  eersteWeek: {
    totaalRange:  'AUD 430–580',
    lastChecked:  '2026-04-28',
  },

  // ─── Australische bevolking / statistieken ───────────────────────────────
  stats: {
    nederlandersPerJaar:  '~2.600',
    leeftijdBoven30:      false,   // bovengrens is 30 jaar oud op moment van aanvraag
    lastChecked:          '2026-04-30',
  },

}

// ─── Handige helpers ──────────────────────────────────────────────────────────

/** Geeft een leesbare "Gecheckt op [datum]"-string terug */
export function gechecktOp(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}
