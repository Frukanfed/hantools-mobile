import { Order } from "@/constants/Types";

export default function FetchAllOrders() {
  const data = [
    {
      id: 1,
      date: "17/04/2025",
      seller: "Leon Kennedy",
      paymentMethod: "Han",
      products: "Urun2",
      cost: 76.0,
      status: "Beklemede",
    },
    {
      id: 2,
      date: "17/04/2025",
      seller: "Leon Kennedy",
      paymentMethod: "Nejat",
      products: "RETOOLS ELEKTRİKLİ 3’LÜ SET (2.28)",
      cost: 76.0,
      status: "Beklemede",
    },
    {
      id: 3,
      date: "17/04/2025",
      seller: "Leon Kennedy",
      paymentMethod: "Nejat",
      products: "Urun123",
      cost: 0.0,
      status: "Beklemede",
    },
    {
      id: 4,
      date: "17/04/2025",
      seller: "Leon Kennedy",
      paymentMethod: "Nejat",
      products: "-",
      cost: 0.0,
      status: "Beklemede",
    },
    {
      id: 5,
      date: "17/04/2025",
      seller: "Leon Kennedy",
      paymentMethod: "Nejat",
      products: "-",
      cost: 0.0,
      status: "Beklemede",
    },
  ];

  const orders: Order[] = data.map((item) => ({
    id: item.id,
    date: item.date,
    seller: item.seller,
    payment_method: item.paymentMethod,
    products: item.products,
    cost: item.cost,
    status: item.status,
  }));

  return orders;
}
