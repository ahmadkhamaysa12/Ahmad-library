import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '@/components/ui/slider';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import useCategories from '@/hooks/useCategories';
import AllBooks from '@/components/forBooks/AllBooks';

export default function Books() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const { data: categories = [] } = useCategories();

  const [view, setView] = useState('grid');
  const [categoryId, setCategoryId] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [ascending, setAscending] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const minPrice = priceRange[0];
  const maxPrice = priceRange[1];

  return (
    <div className="bg-background text-foreground min-h-screen px-4 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-10 flex flex-col justify-between gap-6 border-b pb-8 md:flex-row md:items-end">
          <div>
            <h1 className="text-primary font-serif text-4xl font-bold md:text-5xl">
              {t('booksPage.title')}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              {t('booksPage.description')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {t('booksPage.sort')}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy('price');
                    setAscending(true);
                  }}
                >
                  {t('booksPage.priceLowHigh')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy('price');
                    setAscending(false);
                  }}
                >
                  {t('booksPage.priceHighLow')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy('name');
                    setAscending(true);
                  }}
                >
                  {t('booksPage.nameAZ')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy('name');
                    setAscending(false);
                  }}
                >
                  {t('booksPage.nameZA')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy('rate');
                    setAscending(false);
                  }}
                >
                  {t('booksPage.topRated')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Toggle */}
            <div className="bg-card flex rounded-lg border p-1">
              <Button
                size="icon"
                variant={view === 'grid' ? 'secondary' : 'ghost'}
                onClick={() => setView('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant={view === 'list' ? 'secondary' : 'ghost'}
                onClick={() => setView('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="w-full border-0 p-6 font-serif text-stone-200 shadow-lg">
              {/* Category */}
              <div className="space-y-4">
                <h3 className="font-sans text-xs font-semibold tracking-widest text-[#f5a623] uppercase">
                  {t('booksPage.category')}
                </h3>
                <div className="space-y-3 pt-1">
                  <div className="flex items-center space-x-3">
                    <input
                      id="all"
                      type="checkbox"
                      checked={categoryId === null}
                      onChange={() => setCategoryId(null)}
                      className="h-4 w-4 cursor-pointer rounded border-stone-700 bg-stone-900 text-[#34d399] accent-[#34d399]"
                    />
                    <label htmlFor="all" className="cursor-pointer text-sm">
                      {t('booksPage.all')}
                    </label>
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-3"
                    >
                      <input
                        id={`category-${category.id}`}
                        type="checkbox"
                        checked={categoryId === category.id}
                        onChange={() =>
                          setCategoryId(
                            categoryId === category.id ? null : category.id,
                          )
                        }
                        className="h-4 w-4 cursor-pointer rounded border-stone-700 bg-stone-900 text-[#34d399] accent-[#34d399]"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className={`cursor-pointer text-sm ${categoryId === category.id ? 'text-[#34d399]' : 'text-stone-300'}`}
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-[#13241d]" />

              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="font-sans text-xs font-semibold tracking-widest text-[#f5a623] uppercase">
                  {t('booksPage.price')}
                </h3>
                <div className="space-y-4 pt-2">
                  
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={1000}
                    step={10}
                    className="[&_[data-slot=range]]:bg-[#34d399] rtl:[&_[data-slot=range]]:left-auto [&_[data-slot=thumb]]:border-none [&_[data-slot=thumb]]:bg-[#34d399] [&_[data-slot=thumb]]:ltr:left-[var(--slider-thumb-offset)] rtl:[&_[data-slot=thumb]]:right-[var(--slider-thumb-offset)] [&_[data-slot=track]]:bg-[#22382e]"
                  />
                  <div className="flex items-center justify-between font-serif text-lg text-stone-200">
                    <span>${minPrice}</span>
                    <span>${maxPrice}+</span>
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Books */}
          <main className="lg:col-span-3">
            <AllBooks
              view={view}
              categoryId={categoryId}
              sortBy={sortBy}
              minPrice={minPrice}
              maxPrice={maxPrice}
              search={search}
              ascending={ascending}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
