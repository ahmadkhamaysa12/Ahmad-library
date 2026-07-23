import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OrderSummary({ cart, books }) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {cart?.items?.map((item) => {
          const book = books?.find((book) => book.id === item.productId);

          return (
            <div
              key={item.productId}
              className="bg-muted/30 flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {book?.name ?? item.productName}
                </h3>

                <p className="text-muted-foreground text-sm">
                  Quantity: {item.count}
                </p>

                <p className="text-muted-foreground text-sm">
                  Price: ${item.price}
                </p>
              </div>

              <p className="font-bold">${item.totalPrice}</p>
            </div>
          );
        })}

        <div className="bg-primary/10 flex justify-between rounded-lg p-4 text-xl font-bold">
          <span>Total</span>
          <span>${cart?.cartTotal}</span>
        </div>
      </CardContent>
    </Card>
  );
}
