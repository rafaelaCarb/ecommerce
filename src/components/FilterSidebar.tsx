import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CategoryService } from "../service/CategoryService";
import { Category } from "../commons/category";

const COLORS = [
  { label: "Preto", value: "BLACK" },
  { label: "Branco", value: "WHITE" },
  { label: "Azul", value: "BLUE" },
  { label: "Vermelho", value: "RED" },
  { label: "Verde", value: "GREEN" },
  { label: "Amarelo", value: "YELLOW" }
];

const SIZES = [
  { label: "PP", value: "PP" },
  { label: "P", value: "P" },
  { label: "M", value: "M" },
  { label: "G", value: "G" },
  { label: "GG", value: "GG" }
];

const FilterOption = ({ title, options, selected, onChange }: { title: string, options: { label: string, value: string }[], selected: string[], onChange: (value: string) => void }) => (
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

export function FilterSidebar({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({ color: [], size: [], category: [] });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await new CategoryService().search({});
      setCategories(response.content);
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (type: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value) ? prev[type].filter((v: unknown) => v !== value) : [...prev[type], value]
    }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length) params.set(key, values.join(","));
    });
    navigate(`?${params.toString()}`, { replace: true });
  };

  return (
    <div className="w-64 border-r border-gray-200 p-6 space-y-6 bg-white h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Filtros</h2>
        <button onClick={onClose} className="md:hidden">
          <X size={24} />
        </button>
      </div>

      <FilterOption title="Tamanho" options={SIZES} selected={selectedFilters.size} onChange={(val) => handleFilterChange("size", val)} />
      <FilterOption title="Tipo do produto" options={categories.map(cat => ({ label: cat.name, value: cat.id.toString() }))} selected={selectedFilters.category} onChange={(val) => handleFilterChange("category", val)} />
      <FilterOption title="Cor" options={COLORS} selected={selectedFilters.color} onChange={(val) => handleFilterChange("color", val)} />

      <div>
        <button className="w-full text-white bg-black p-1 rounded-sm text-sm" onClick={applyFilters}>
          FILTRAR
        </button>
        <button className="w-full mt-3 flex gap-2 justify-center items-center text-black border-black border p-1 rounded-sm text-sm" onClick={onClose}>
          <ArrowLeft size={15} /> VER TODOS
        </button>
      </div>
    </div>
  );
}
