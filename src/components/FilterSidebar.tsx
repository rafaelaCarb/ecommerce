import { ArrowLeft, X } from "lucide-react"

export function FilterSidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-64 border-r border-gray-200 p-6 space-y-6 bg-white h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Filtros</h2>
        <button onClick={onClose} className="md:hidden">
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Tamanho</h3>
        <div className="space-y-2">
          {["Small", "Medium", "Large", "X Large"].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={size.toLowerCase()}
                className="w-4 h-4"
              />
              <label htmlFor={size.toLowerCase()} className="text-sm font-thin">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-lg">Tipo do produto</h3>
        <div className="space-y-2">
          {["Polo", "T-Shirts", "Shirts"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={type.toLowerCase()}
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label htmlFor={type.toLowerCase()} className="text-sm font-thin">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-lg">Preço</h3>
        <input type="range" min="0" max="100" className="w-full" />
        <div className="flex justify-between text-sm text-stone-500">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-lg">Cor</h3>
        <div className="space-y-2">
          {["Black", "Brown", "Red", "Grey", "White"].map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={color.toLowerCase()}
                className="w-4 h-4 border-stone-300 rounded"
              />
              <label
                htmlFor={color.toLowerCase()}
                className="text-sm font-thin"
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="w-full text-white bg-black p-1 rounded-sm text-sm">FILTRAR</button>
        <button
          className="w-full mt-3 flex gap-2 justify-center items-center text-black border-black border p-1 rounded-sm text-sm"
          onClick={onClose}
        >
          <ArrowLeft size={15} />
          VER TODOS
        </button>
      </div>
    </div>
  );
}
