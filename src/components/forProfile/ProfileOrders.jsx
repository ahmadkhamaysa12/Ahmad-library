import useProfile from '@/hooks/useProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProfileOrders() {
  const { data: profile, isLoading, error } = useProfile();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading orders</p>;
  }

  const orders = profile?.orders || [];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>Order #{order.id}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p>Amount: {order.amountPaid} $</p>

              <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>

              <div className="flex gap-2">
                <Badge>{order.paymentStatus || 'Pending'}</Badge>

                <Badge variant="outline">
                  {typeof order.status === 'number'
                    ? 'Completed'
                    : order.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
