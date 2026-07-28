import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, List, ChevronDown, BookOpen } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import useCategories from '@/hooks/useCategories';
import AllBooks from '@/components/forBooks/AllBooks';

export default function Books() {
  const { t } = useTranslation();

  const { data: categories = [] } = useCategories();

  const [view, setView] = useState('grid');

  const [categoryId, setCategoryId] = useState(null);

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
            <Button variant="outline">
              {t('booksPage.sort')}

              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>

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
            <Card className="border-border/50 p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <BookOpen className="text-primary h-5 w-5" />

                <h3 className="font-serif font-bold">
                  {t('booksPage.category')}
                </h3>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setCategoryId(null)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                    categoryId === null
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  } `}
                >
                  <span>All Books</span>
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setCategoryId(category.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                      categoryId === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    } `}
                  >
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </Card>
          </aside>

          {/* Books */}

          <main className="lg:col-span-3">
            <AllBooks view={view} categoryId={categoryId} />
          </main>
        </div>
      </div>
    </div>
  );
}
