# Aussiestart — Bouwplan
_Bijgewerkt: 4 mei 2026. Status na audit week 1 (38 views, organisch verkeer op /kosten en /loon)._

---

## Legende
- 🟢 **Kan ik doen** — alleen code, geen externe accounts nodig
- 🟡 **Jij + ik** — code klaar zodra jij een account/URL aanlevert
- 🔴 **Jij** — geen code, alleen jouw actie
- ✅ **Gedaan**

---

## SPRINT 4 — Directe wins (week 2)

Hoge impact, weinig werk. Volgorde = prioriteit.

### 4.1 Wise affiliate op /banking 🟢
- `AffiliateLink partner="wise"` toevoegen op de Banking-pagina
- Wise staat al in `affiliates.js` met correcte referral-URL
- Locatie: naast de "hoe open je Wise"-alinea, en in de banking-vergelijker aside
- **Waarom nu:** /banking heeft al bezoekers, converteert niks

### 4.2 Startkit-CTA onderaan /begin-hier 🟢
- Onder het laatste stap-blok (stap 14) een conversiemoment toevoegen
- Toon: "Je hebt het plan. Dit zijn de bestanden die je bijhoudt."
- Geen zware uitleg, directe link naar /startkit
- **Waarom nu:** het 14-stappenplan is de hoogste-intentie pagina op de site. Eindigt nu leeg.

### 4.3 JSON-LD op /verzekering 🟢
- Article + FAQPage schema (6 Q&As: dekking, adventure, Medicare-gat, kosten vergelijking)
- speakable op h1 + h2
- OG tags toevoegen
- **Waarom nu:** /verzekering heeft de hoogste affiliate-waarde (SafetyWing 10% recurring), maar Google/AI zien het als ongestructureerde pagina

### 4.4 JSON-LD op /begin-hier als HowTo 🟢
- HowTo schema met 14 stappen (name, url, description per stap)
- speakable toevoegen
- OG tags
- **Waarom nu:** "working holiday australie stappen" is een van de sterkste zoekopdrachten voor deze site

### 4.5 SafetyWing op meer pagina's 🟢
- `/begin-hier` stap 6 (verzekering): `AffiliateLink partner="safetywing"` inline toevoegen
- `/voor-vertrek` relevante sectie: SafetyWing-link toevoegen
- `/eerste-week` checklist: link naar /verzekering met SafetyWing-highlight
- **Waarom nu:** je hebt 10% recurring commissie maar de link staat alleen op /verzekering

### 4.6 Organization.sameAs vullen in App.jsx 🟢
- Instagram URL toevoegen (zodra account actief is, of alvast als placeholder-array)
- **Waarom nu:** leeg sameAs-array betekent dat Google/Perplexity de entiteit "Aussiestart" niet kan verankeren in hun kennisgraaf

---

## SPRINT 5 — SEO/GEO structuur completeren

### 5.1 JSON-LD op resterende core-pagina's 🟢
Volgorde op basis van zoekvolume-prioriteit:

| Pagina | Schema type | Status |
|--------|-------------|--------|
| /banking | Article + FAQPage | ❌ doen |
| /werk | Article + FAQPage | ❌ doen |
| /wonen | Article + FAQPage | ❌ doen |
| /hostels | ItemList + FAQPage | ❌ doen |
| /esim | Article + FAQPage | ❌ check |
| /voor-vertrek | Article + HowTo | ❌ doen |
| /visum | ✅ | speakable toevoegen |
| /kosten | ✅ | speakable toevoegen |

### 5.2 Person schema voor auteur 🟢
In App.jsx naast Organization schema:
```js
{
  '@type': 'Person',
  '@id': `${SITE_URL}/#author`,
  name: 'Jesse Venniker',
  url: `${SITE_URL}/over`,
  knowsAbout: ['Working Holiday Australië', 'Visum subclass 417', '88-dagenregel'],
}
```
Op artikelpagina's toevoegen als `author: { '@id': '.../#author' }`.

### 5.3 BreadcrumbList schema 🟢
Op elke pagina met een duidelijke hiërarchie (niet Home):
```
Home > Categorie > Pagina
```
Kleine component `BreadcrumbSchema` die pathname parsed en schema injecteert.

### 5.4 Speakable uitbreiden 🟢
Toevoegen op: /visum, /kosten, /verzekering, /banking, /werk
Selector: `['h1', 'h2', '.facts-strip']`

### 5.5 Mobile: aside verbeteren 🟢
Huidige probleem: aside verdwijnt onder de fold op mobile.
Oplossing: boven de ArticleLayout een `MobileQuickfacts`-balk toevoegen die alleen op mobile (`lg:hidden`) de 3-5 meest kritieke feiten toont (visumkosten, launchprijs, etc.) — geen dubbele component, gewone `<div className="lg:hidden">`.

### 5.6 FactsTable overflow fix 🟢
`overflow-x-auto` wrapper toevoegen in het `FactsTable` component zelf:
```jsx
<div className="not-prose my-6 overflow-x-auto rounded-xl border border-sand">
  <table className="w-full min-w-[400px] text-sm">
```

---

## SPRINT 6 — Content uitbreiden

### 6.1 /cairns stadpagina 🟢
- Farmwork-gateway toon (anders dan Sydney/Melbourne)
- Wijken: Cairns City, Manunda, Woree (budget), Northern Beaches
- OV: geen tram, auto/fiets-afhankelijk of lopen in centrum
- Werk: dive operators, farmwork-kantoren, toerisme, suikerveld-bemiddeling
- Dagtrips: Great Barrier Reef, Daintree, Atherton Tablelands, Cape Tribulation
- Cross-link naar /88-dagen en /werk (farmwork sectie)
- JSON-LD + FAQ + sitemap

### 6.2 /88-dagen postcode-subpagina 🟢
Aparte pagina `/88-dagen/regio` of `/specified-work` met:
- Officiële postcodelijst (met bron DHA, met lastmod)
- Per regio: Bundaberg, Mildura, Tully, Shepparton, Gatton, Stanthorpe
  - Wat groeit er, welk seizoen, welke werkgevers zijn known-good vs red flag
- Hoe postcode controleren vóór je vertrekt
- Checklist: wat als je al ter plaatse bent maar postcode klopt niet?
- Groot zoekvolume: "specified work australie postcodes", "88 dagen bundaberg"

### 6.3 /zelf-regelen-of-bureau verbeteren 🟢
- Openingsparagraaf mist een duidelijk standpunt in de eerste twee zinnen
- Huidige: "Als je zoekt naar... stuit je op een handvol bedrijven die pakketten aanbieden."
- Beter: begin met de conclusie. "Kort antwoord: voor 9 van de 10 Nederlanders is een bureau weggegooid geld."
- Bureauprijs-kolom in aside: verifieer of de namen en prijzen kloppen (SWAP, CCUSA etc.)

### 6.4 /melbourne openingszinnen herschrijven 🟢
- "Melbourne draait op hospitality, retail en evenementen." → herschrijven met standpunt
- Melbourne vs Sydney tabel: voeg een "Ons advies" rij toe onderaan
- Dagtrip-blokken: add een concrete tip per dagtrip (niet alleen beschrijving)

---

## SPRINT 7 — Revenue activeren

### 7.1 Hostelworld affiliate op /hostels 🟡
- Hostelworld heeft open affiliate via Impact (geen wachttijd goedkeuring nodig voor deep links)
- Per hostel-card: "Boek via Hostelworld" knop met affiliate-URL
- `affiliates.js` uitbreiden met `hostelworld` entry
- Commissie: 4-6% van eerste boeking
- **Jij regelt:** Hostelworld affiliate-account aanmaken op impact.com, referentie-ID aanleveren

### 7.2 Stripe voor Startkit 🔴 (jij)
- Stripe-product aanmaken: €19,95 eenmalig, naam "Aussiestart Startkit"
- Payment link aanmaken (geen checkout-page bouwen nodig)
- Stripe payment link URL doorgeven → ik pas `KOOP_URL` in Startkit.jsx aan
- Schema: `availability: InStock` staat al correct
- **Na Stripe-koppeling:** `startkitSchema.offers` uitbreiden met `seller`, `priceValidUntil`

### 7.3 Mailchimp koppelen 🟡
- Jij: account aanmaken, embedded form action-URL kopiëren
- Ik: `VITE_MAILCHIMP_URL` instellen in Vercel environment variables
- EmailCapture werkt dan automatisch op alle pagina's (component staat klaar)
- Naamgeving segment in Mailchimp: "WHV Australie - checklist aanvraag"

### 7.4 Startkit → Google Sheet + CV templates bouwen 🔴 (jij)
- Budgetplanner: Google Sheet dupliceren, deelbaar-link instellen (iedereen met link kan kopiëren)
- CV templates (3x): Google Doc, Australian format, Hospitality / Farmwork / Retail-Admin
- StartkitDownload.jsx heeft placeholders `JOUW_LINK_HIER` op 4 plekken — zodra URLs er zijn pas ik die aan
- **Zonder dit:** de Startkit is een belofte, niet een product

### 7.5 Banking-affiliate uitbreiden 🟢
- CommBank heeft geen publiek affiliate-programma
- NAB ook niet
- Wel: **Revolut** heeft een refer-a-friend (€XX bonus per kwalificerende signup)
- Toevoegen aan affiliates.js als `revolut` met juiste referral URL
- Banking.jsx: inline link bij "alternatief voor Wise: Revolut"-alinea toevoegen

---

## SPRINT 8 — Technisch & groei

### 8.1 Vercel redirect: aussiestart.vercel.app → australiestart.nl 🔴 (jij)
- Vercel dashboard → Settings → Domains → voeg australiestart.nl toe als primary
- aussiestart.vercel.app wordt dan automatisch 301 geredirect
- Doel: geen split autoriteit tussen twee domeinen

### 8.2 Search Console + sitemap submitten 🔴 (jij)
- search.google.com/search-console → property toevoegen voor australiestart.nl
- Sitemap submitten: https://australiestart.nl/sitemap.xml
- Na 2 weken: kijken welke queries impressies genereren, die pagina's versterken

### 8.3 Bing Webmaster Tools 🔴 (jij)
- bing.com/webmasters → site toevoegen
- Sitemap submitten
- Bing indexeert Perplexity (grote AI-zoekmachine) — relevant voor GEO

### 8.4 GitHub Action: broken-link check 🟢
Wekelijkse check die alle externe links in de broncode scrapt en 404s rapporteert.
- `.github/workflows/link-check.yml`
- Tool: `lychee` of `linkinator`
- Trigger: schedule weekly + push
- Resultaat: GitHub issue als er gebroken links zijn

### 8.5 Mailchimp-sequentie schrijven 🔴 (jij, met mijn hulp)
Na koppeling: welkomstmail + 3-delige nurture-sequentie
- Mail 1 (direct): checklist-bevestiging + link naar /begin-hier
- Mail 2 (dag 3): "De duurste fout bij een Working Holiday" → link naar /visum valkuilen
- Mail 3 (dag 7): Startkit-introductie → verkoopmail
- Ik schrijf de teksten, jij zet het in Mailchimp

---

## SPRINT 9 — Content schaal (later)

### 9.1 /perth stadpagina
Mining-gateway, anders segment dan Sydney/Melbourne backpackers.
High-value voor langere termijn (WA farmwork, FIFO-werk).

### 9.2 /brisbane stadpagina
Relatief goedkoper dan Sydney, gateway naar Queensland farmwork.

### 9.3 /ouders pagina
"Mijn kind gaat op Working Holiday" — andere toon, andere vragen.
Zoekintentie: ouders Googlen ook. Verzekering, veiligheid, contact houden.
Lage concurrentie, hoge relevantie.

### 9.4 /belasting pagina
Uitgebreide belasting-gids: DASP aanvragen, tax return, TFN-nummers, welk jaar,
wanneer indienen. Momenteel deels op /loon maar verdient eigen pagina.
Zoekvolume: "belasting terug australie", "DASP aanvragen".

### 9.5 /visa-462 pagina
Subclass 462 (Work and Holiday, voor Australiërs die niet 417 kwalificeren).
Andere leeftijdsgrens, andere landen. Kleine doelgroep maar nul concurrentie in NL.

---

## Affiliate-overzicht actueel

| Partner | Commissie | Geactiveerd | Pagina's |
|---------|-----------|-------------|----------|
| SafetyWing | 10% recurring | ✅ | /verzekering |
| Wise | Per referral | ✅ | /banking (toe te voegen) |
| Viator | 8% | ✅ | /sydney |
| GetYourGuide | 8% | ✅ | /sydney |
| Saily eSIM | Per sale | ✅ | /esim |
| Airalo eSIM | Per sale | ✅ | /esim |
| KiwiTaxi | ~50% margin | ✅ | /sydney, /eerste-week |
| Amazon NL | 1-9% | ✅ in code | Nergens in gebruik |
| Hostelworld | 4-6% | 🔴 account nodig | /hostels |
| Revolut | Bonus/referral | 🟡 link nodig | /banking |
| Booking.com | ~4% | 🔴 aanvragen | /hostels, /wonen |

---

## Inkomstenpotentie (inschatting)

| Bron | Scenario conservatief | Scenario realistisch |
|------|----------------------|---------------------|
| SafetyWing (10% recurring) | €15/mnd | €80/mnd bij 50 bezoekers/dag |
| Startkit €19,95 (5/mnd) | €100/mnd | €300/mnd bij goede e-maillijst |
| Hostelworld (4-6%) | €30/mnd | €150/mnd |
| Wise referrals | €10/mnd | €40/mnd |
| eSIM (Saily/Airalo) | €5/mnd | €25/mnd |
| Viator/GYG tours | €10/mnd | €60/mnd bij meer stadsverkeer |
| **Totaal jaar 1** | **~€2.000** | **~€7.800** |

Realistisch scenario haalt €7.800 zodra: Search Console actief is, Mailchimp loopt,
Hostelworld affiliate live gaat, en de Startkit via Stripe koopbaar is.
Het conservatieve scenario = passief zonder verdere actie.

---

## Contentkalender

| Wanneer | Wat |
|---------|-----|
| Week 2 (nu) | Sprint 4: Wise, BeginHier-CTA, JSON-LD Verzekering + BeginHier |
| Week 3 | Sprint 5: resterende JSON-LD, mobile fixes, speakable uitbreiden |
| Week 4 | /cairns bouwen, /88-dagen postcode-subpagina |
| Mei eind | Stripe Startkit live, Google Sheet + templates af |
| Juni | Mailchimp sequentie, Hostelworld affiliate, /ouders |
| 1 juli | Content-audit: visumprijs, minimumloon, tax-schijven, superrate |
| Augustus | /belasting pagina, Search Console analyse na 3 maanden |
| September | /perth of /brisbane, tweede stad uitrollen |

---

## Vaste regels (niet onderhandelen)

- Geen em-dashes (`—`) in zichtbare tekst
- Geen afgeronde kaarten (`rounded-2xl`) als primaire lay-outvorm — editorial > card-grid
- Elke feitelijke claim heeft een bron en `lastChecked` datum
- Affiliate-links: altijd `rel="sponsored noopener noreferrer"` + zichtbaar `partner`-label
- JSON-LD op elke nieuwe pagina voor launch
- Sitemap bijwerken bij elke nieuwe route
- `sot.js` is de enige plek voor feiten die op meerdere pagina's voorkomen
