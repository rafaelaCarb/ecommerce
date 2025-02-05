export const FilterOption = ({ title, options, selected, onChange }: { title: string, options: { label: string, value: string }[], selected: string[], onChange: (value: string) => void }) => (
  <div className="space-y-4">
    <h3 className="font-medium text-lg">{title}</h3>
    <div className="space-y-2">
      {options.map(({ label, value }) => (
        <div key={value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={value}
            className="w-4 h-4"
            checked={selected.includes(value)}
            onChange={() => onChange(value)}
          />
          <label htmlFor={value} className="text-sm font-thin">{label}</label>
        </div>
      ))}
    </div>
  </div>
);