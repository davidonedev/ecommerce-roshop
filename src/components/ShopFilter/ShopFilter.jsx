export default function ShopFilter({ total = 32, showing = 16, onShowChange, onSortChange }) {
  return (
    <div className="bg-cream py-5">
      <div className="flex justify-between items-center flex-wrap gap-4 max-w-[1240px] mx-auto px-6">
        {/* Left */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 font-poppins text-lg font-medium text-dark transition-colors duration-200 hover:text-primary" aria-label="Filtrar">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
              <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Filtrar
          </button>

          <div className="flex items-center gap-2">
            <button className="text-dark p-1 flex items-center transition-colors duration-200 hover:text-dark" aria-label="Grade">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <button className="text-medium p-1 flex items-center transition-colors duration-200 hover:text-dark" aria-label="Lista">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          <span className="block w-px h-8 bg-[#C4A8B2]" aria-hidden="true" />

          <p className="font-poppins text-base text-dark">
            Exibindo 1–{showing} de {total} resultados
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3.5">
          <label className="font-poppins text-lg font-medium text-dark" htmlFor="show-count">Exibir</label>
          <select
            id="show-count"
            className="w-[68px] font-poppins text-base text-dark bg-white border-0 px-4 py-2.5 cursor-pointer focus:outline-primary focus:outline-2 focus:outline-offset-2"
            defaultValue={showing}
            onChange={(e) => onShowChange?.(Number(e.target.value))}
          >
            {[8, 16, 24, 32].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <label className="font-poppins text-lg font-medium text-dark" htmlFor="sort-by">Ordenar por</label>
          <select
            id="sort-by"
            className="w-[160px] font-poppins text-base text-dark bg-white border-0 px-4 py-2.5 cursor-pointer focus:outline-primary focus:outline-2 focus:outline-offset-2"
            defaultValue="default"
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            <option value="default">Padrão</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="newest">Mais Recentes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
