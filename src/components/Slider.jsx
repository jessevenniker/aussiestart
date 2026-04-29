/**
 * Slider, gestileerde range-input met label, waarde en min/max-context.
 */
export default function Slider({ label, hint, value, onChange, min, max, step = 5, format = (v) => v }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-medium text-forest">{label}</label>
        <span className="font-serif text-xl text-forest tabular-nums leading-none">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full bg-sand appearance-none cursor-pointer accent-ember
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ember
                   [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab
                   [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:border-0
                   [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-ember"
        aria-label={label}
      />
      {hint && <div className="text-xs text-slate">{hint}</div>}
    </div>
  )
}
