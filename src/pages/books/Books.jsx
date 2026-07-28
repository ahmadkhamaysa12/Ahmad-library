import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import useCategories from '@/hooks/useCategories';

import AllBooks from '@/components/forBooks/AllBooks';

export default function Books() {
  const { t } = useTranslation();

  const { data: categories = [] } = useCategories();

  const [view, setView] = useState('grid');

  return (
    <div className="bg-background text-foreground min-h-screen px-4 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <section className="mb-8 flex flex-col justify-between gap-6 border-b pb-8 md:flex-row">
          <div>
            <h1 className="text-primary font-serif text-4xl font-bold md:text-5xl">
              {t('booksPage.title')}
            </h1>

            <p className="text-muted-foreground mt-3 max-w-2xl">
              {t('booksPage.description')}
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">
              {t('booksPage.sort')}

              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex rounded-md border p-1">
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

          <aside className="space-y-8">
            <div>
              <h3 className="text-secondary mb-4 text-sm font-bold">
                {t('booksPage.category')}
              </h3>

              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex cursor-pointer items-center gap-3 text-sm"
                  >
                    <input type="checkbox" className="accent-primary" />

                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Books Content */}

          <main className="lg:col-span-3">
            <AllBooks view={view} />
          </main>
        </div>
      </div>
    </div>
  );
}
