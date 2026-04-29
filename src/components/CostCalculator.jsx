import { useState, useMemo } from 'react'
import Slider from './Slider.jsx'

import { facts } from '../data/facts.js'

const AUD_TO_EUR = facts.audToEur.value // 0.61, peildatum april 2026
const fmtAUD = (n) => 'AUD ' + Math.round(n).toLocaleString('nl-NL')
const fmtEUR = (n) => '€ ' + Math.round(n).toLocaleString('nl-NL')

export default function CostCalculator() {
  const [hostel, setHostel]       = useState(280)   // AUD/week
  const [eten, setEten]           = useState(120)   // AUD/week
  const [vervoer, setVervoer]     = useState(50)    // AUD/week
  const [uitgaan, setUitgaan]     = useState(80)    // AUD/week
  const [verzekering, setVerzekering] = useState(220) // AUD/maand
  const [maanden, setMaanden]     = useState(12)    // verblijfsduur

  const calc = useMemo(() => {
    const weekly = hostel + eten + vervoer + uitgaan
    const monthly = weekly * 4.33 + verzekering
    const total = monthly * maanden

    const oneOff = {
      visum: 670,
      vlucht: 1700,    // gemiddeld AUD-equivalent
      eersteMaand: 1800, // borg, deposit, SIM, eerste boodschappen
      bagage: 400,
    }
    const oneOffTotal = oneOff.visum + oneOff.vlucht + oneOff.eersteMaand + oneOff.bagage

    const grandTotal = total + oneOffTotal

    return {
      weekly,
      monthly,
      total,
      oneOff,
      oneOffTotal,
      grandTotal,
      monthlyEUR: monthly * AUD_TO_EUR,
      grandTotalEUR: grandTotal * AUD_TO_EUR,
    }
  }, [hostel, eten, vervoer, uitgaan, verzekering, maanden])

  return (
    <div className="not-prose my-10 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
      <div className="bg-bone border border-sand rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h3 className="font-serif text-2xl text-forest">Bereken je maandbudget</h3>
          <span className="text-xs text-slate">Sleep de sliders</span>
        </div>

        <div className="space-y-5">
          <Slider
            label="Hostel of sharehouse"
            hint="AUD 180 = 8-bed hostel in regionaal · AUD 280 = sharehouse Sydney/Melbourne · AUD 400 = eigen kamer in CBD"
            value={hostel} onChange={setHostel}
            min={150} max={500} step={10}
            format={(v) => `${fmtAUD(v)}/wk`}
          />
          <Slider
            label="Eten"
            hint="AUD 80 = zelf koken, geen luxe · AUD 130 = mix · AUD 200+ = vaak buiten de deur"
            value={eten} onChange={setEten}
            min={60} max={250} step={10}
            format={(v) => `${fmtAUD(v)}/wk`}
          />
          <Slider
            label="Vervoer"
            hint="AUD 30 = lopen + soms OV · AUD 60 = OPAL/Myki dagelijks · AUD 100+ = met auto"
            value={vervoer} onChange={setVervoer}
            min={20} max={150} step={5}
            format={(v) => `${fmtAUD(v)}/wk`}
          />
          <Slider
            label="Uitgaan en activiteiten"
            hint="AUD 40 = zuinig · AUD 80 = paar keer per week iets · AUD 150+ = elke week stappen"
            value={uitgaan} onChange={setUitgaan}
            min={20} max={200} step={10}
            format={(v) => `${fmtAUD(v)}/wk`}
          />
          <Slider
            label="Reisverzekering"
            hint="SafetyWing ~AUD 75 · JoHo basic ~AUD 150 · World Nomads explorer ~AUD 280"
            value={verzekering} onChange={setVerzekering}
            min={60} max={350} step={10}
            format={(v) => `${fmtAUD(v)}/mnd`}
          />
          <div className="pt-3 border-t border-sand">
            <Slider
              label="Verblijfsduur"
              hint="Visum is 12 maanden geldig. Tweede jaar mogelijk via 88-dagen-regel."
              value={maanden} onChange={setMaanden}
              min={3} max={24} step={1}
              format={(v) => `${v} ${v === 1 ? 'maand' : 'maanden'}`}
            />
          </div>
        </div>
      </div>

      <aside className="bg-forest text-bone rounded-2xl p-6 sm:p-7 lg:sticky lg:top-24 self-start">
        <div className="text-xs uppercase tracking-wider text-ochre mb-2">Per maand</div>
        <div className="font-serif text-4xl leading-none mb-1">{fmtAUD(calc.monthly)}</div>
        <div className="text-bone/70 text-sm">≈ {fmtEUR(calc.monthlyEUR)} per maand</div>

        <hr className="my-5 border-bone/15" />

        <div className="text-xs uppercase tracking-wider text-ochre mb-3">Eenmalig vóór vertrek</div>
        <ul className="text-sm space-y-1.5">
          <Row k="Visum (subclass 417)" v={fmtAUD(calc.oneOff.visum)} />
          <Row k="Vlucht heen" v={fmtAUD(calc.oneOff.vlucht)} />
          <Row k="Borg + eerste maand" v={fmtAUD(calc.oneOff.eersteMaand)} />
          <Row k="Bagage en gear" v={fmtAUD(calc.oneOff.bagage)} />
          <li className="flex justify-between pt-1.5 border-t border-bone/15 font-medium">
            <span>Subtotaal</span><span>{fmtAUD(calc.oneOffTotal)}</span>
          </li>
        </ul>

        <hr className="my-5 border-bone/15" />

        <div className="text-xs uppercase tracking-wider text-ochre mb-2">
          Totaal voor {maanden} {maanden === 1 ? 'maand' : 'maanden'}
        </div>
        <div className="font-serif text-3xl leading-none mb-1">{fmtAUD(calc.grandTotal)}</div>
        <div className="text-bone/70 text-sm mb-4">≈ {fmtEUR(calc.grandTotalEUR)}</div>

        <div className="text-xs text-bone/60 leading-relaxed">
          Reken extra op AUD 5.000 spaargeld dat je moet kunnen tonen bij visumaanvraag.
          Cijfers zijn schattingen op basis van mensen die er nu zijn. Wisselkoers AUD→EUR ≈ 0,61
          (peildatum april 2026, varieert tussen 0,55 en 0,68 over een jaar).
        </div>
      </aside>
    </div>
  )
}

function Row({ k, v }) {
  return (
    <li className="flex justify-between gap-2">
      <span className="text-bone/80">{k}</span>
      <span className="tabular-nums">{v}</span>
    </li>
  )
}
