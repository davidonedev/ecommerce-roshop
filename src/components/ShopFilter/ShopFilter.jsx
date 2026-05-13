import './ShopFilter.scss';

export default function ShopFilter({ total = 32, showing = 16, onShowChange, onSortChange }) {
  return (
    <div className="shop-filter">
      <div className="shop-filter__inner">
        {/* Left controls */}
        <div className="shop-filter__left">
          <button className="shop-filter__btn" aria-label="Filter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
              <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Filter
          </button>

          <div className="shop-filter__view-btns">
            <button className="shop-filter__view-btn shop-filter__view-btn--active" aria-label="Grid view">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <button className="shop-filter__view-btn" aria-label="List view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          <span className="shop-filter__separator" aria-hidden="true" />

          <p className="shop-filter__results">
            Showing 1–{showing} of {total} results
          </p>
        </div>

        {/* Right controls */}
        <div className="shop-filter__right">
          <label className="shop-filter__label" htmlFor="show-count">Show</label>
          <select
            id="show-count"
            className="shop-filter__select shop-filter__select--count"
            defaultValue={showing}
            onChange={(e) => onShowChange?.(Number(e.target.value))}
          >
            {[8, 16, 24, 32].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <label className="shop-filter__label" htmlFor="sort-by">Short by</label>
          <select
            id="sort-by"
            className="shop-filter__select shop-filter__select--sort"
            defaultValue="default"
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
