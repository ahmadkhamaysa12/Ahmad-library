import { useOutletContext } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

import {
  Package,
  CalendarDays,
  CreditCard,
  DollarSign,
} from 'lucide-react';


const statusMap = {
  0: 'Pending',
  1: 'Processing',
  2: 'Completed',
  3: 'Cancelled',
};


export default function ProfileOrders() {
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
        <CardContent className="py-10 text-center text-destructive">
          Error loading orders.
        </CardContent>
      </Card>
    );
  }


  const orders = profile?.orders ?? [];


  if (orders.length === 0) {
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

          <h3 className="text-xl font-semibold">
            No Orders Yet
          </h3>

          <p className="text-muted-foreground mt-2">
            Your orders will appear here.
          </p>
        </CardContent>
      </Card>
    );
  }


  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        <p className="text-muted-foreground">
          Track and manage your purchases
        </p>
      </div>


      {orders.map((order) => (
        <Card
          key={order.id}
          className="overflow-hidden transition-all hover:shadow-lg"
        >

          <CardHeader className="flex-row items-center justify-between border-b bg-muted/30">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-primary/10 p-3">
                <Package className="h-5 w-5 text-primary" />
              </div>


              <div>
                <CardTitle>
                  Order #{order.id}
                </CardTitle>

                <p className="text-muted-foreground text-sm">
                  {new Date(
                    order.orderDate
                  ).toLocaleDateString()}
                </p>
              </div>

            </div>


            <Badge
              variant={
                order.status === 2
                  ? "default"
                  : "secondary"
              }
            >
              {statusMap[order.status] ?? order.status}
            </Badge>

          </CardHeader>



          <CardContent className="grid gap-5 p-6 sm:grid-cols-3">


            <OrderInfo
              icon={<DollarSign />}
              label="Amount"
              value={`$${order.amountPaid}`}
            />


            <OrderInfo
              icon={<CreditCard />}
              label="Payment"
              value={order.paymentStatus || "Pending"}
            />


            <OrderInfo
              icon={<CalendarDays />}
              label="Date"
              value={new Date(
                order.orderDate
              ).toLocaleDateString()}
            />


          </CardContent>

        </Card>
      ))}

    </div>
  );
}



function OrderInfo({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-muted/20 p-4">

      <div className="text-primary">
        {icon}
      </div>


      <div>

        <p className="text-muted-foreground text-sm">
          {label}
        </p>


        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}