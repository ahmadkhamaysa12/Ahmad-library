import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

import { Package, CalendarDays, CreditCard, DollarSign } from 'lucide-react';

export default function ProfileOrders() {
  const { t, i18n } = useTranslation();
  const { data: profile, isLoading, error } = useOutletContext();

  if (isLoading) {
    return (
      <div className="space-y-5">
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-destructive py-10 text-center">
          {t('profilePage.errorLoading')}
        </CardContent>
      </Card>
    );
  }

  const orders = [...(profile?.orders ?? [])].sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate),
  );

  const statusMap = {
    0: t('profilePage.pending'),
    1: t('profilePage.processing'),
    2: t('profilePage.completed'),
    3: t('profilePage.cancelled'),

    Active: t('profilePage.active'),
    Pending: t('profilePage.pending'),
    Processing: t('profilePage.processing'),
    Completed: t('profilePage.completed'),
    Cancelled: t('profilePage.cancelled'),
  };

  const paymentStatusMap = {
    paid: t('profilePage.paid'),
    unpaid: t('profilePage.unpaid'),
  };

  if (orders.length === 0) {
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <Package className="text-muted-foreground mx-auto mb-4 h-12 w-12" />

          <h3 className="text-xl font-semibold">{t('profilePage.noOrders')}</h3>

          <p className="text-muted-foreground mt-2">
            {t('profilePage.noOrdersDesc')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('profilePage.myOrders')}</h1>

        <p className="text-muted-foreground">{t('profilePage.trackManage')}</p>
      </div>

      {orders.map((order) => {
        const formattedDate = new Date(order.orderDate).toLocaleDateString(
          i18n.language,
        );

        const formattedAmount = new Intl.NumberFormat(i18n.language, {
          style: 'currency',
          currency: 'USD',
        }).format(order.amountPaid);

        return (
          <Card
            key={order.id}
            className="overflow-hidden transition-all hover:shadow-lg"
          >
            <CardHeader className="bg-muted/30 flex-row items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-3">
                  <Package className="text-primary h-5 w-5" />
                </div>

                <div>
                  <CardTitle>
                    {t('profilePage.order')} #{order.id}
                  </CardTitle>

                  <p className="text-muted-foreground text-sm">
                    {formattedDate}
                  </p>
                </div>
              </div>

              <Badge
                variant={
                  order.status === 2 || order.status === 'Completed'
                    ? 'default'
                    : 'secondary'
                }
              >
                {statusMap[order.status] ?? order.status}
              </Badge>
            </CardHeader>

            <CardContent className="grid gap-5 p-6 sm:grid-cols-3">
              <OrderInfo
                icon={<DollarSign />}
                label={t('profilePage.amount')}
                value={formattedAmount}
              />

              <OrderInfo
                icon={<CreditCard />}
                label={t('profilePage.payment')}
                value={
                  paymentStatusMap[order.paymentStatus] ??
                  t('profilePage.pending')
                }
              />

              <OrderInfo
                icon={<CalendarDays />}
                label={t('profilePage.date')}
                value={formattedDate}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function OrderInfo({ icon, label, value }) {
  return (
    <div className="bg-muted/20 flex items-center gap-3 rounded-xl border p-4">
      <div className="text-primary">{icon}</div>

      <div>
        <p className="text-muted-foreground text-sm">{label}</p>

        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
