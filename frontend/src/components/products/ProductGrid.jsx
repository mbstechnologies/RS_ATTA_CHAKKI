import React, { useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';

export function ProductGrid({ limit = null }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = products.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <div>
      {/* Category Tabs Filter */}
      {!limit && (
        <ProductFilters
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />
      )}

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
          />
        ))}
      </div>
    </div>
  );
}
