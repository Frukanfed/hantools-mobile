import { Report } from "@/constants/Types";

export default function FetchAllReports() {
  const data = [
    {
      id: 1,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "Urun2",
      amount: 76.0,
      customer: "Arthur Morgan",
      date: "17.04.2025 13:55:22",
    },
    {
      id: 2,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "RETOOLS ELEKTRİKLİ 3’LÜ SET (2.28)",
      amount: 76.0,
      customer: "Arthur Morgan",
      date: "17.04.2025 13:54:46",
    },
    {
      id: 3,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "Urun123",
      amount: 0.0,
      customer: "Arthur Morgan",
      date: "17.04.2025 13:52:28",
    },
    {
      id: 4,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "",
      amount: 0.0,
      customer: "Arthur Morgan",
      date: "17.04.2025 13:51:47",
    },
    {
      id: 5,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "RETOOLS 5’Lİ SET MAVİ (4 LÜ SET (3 AKÜ 1 ŞARJ) + 800 NM )",
      amount: 77.0,
      customer: "Müşteri",
      date: "15.04.2025 16:15:48",
    },
    {
      id: 6,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "RETOOLS 7 Lİ SET PRO MAVİ ( DEKUPAJ + DAL BUDAMA + TESTERE)",
      amount: 22.0,
      customer: "Arthur Morgan",
      date: "15.04.2025 16:15:21",
    },
    {
      id: 7,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product:
        "RETOOLS 2’Lİ SET (AKÜLÜ ALÇIPAN VİDALAMA + 16 YÖNLÜ KUMANDALI LAZER)",
      amount: 66.0,
      customer: "Arthur Morgan",
      date: "15.04.2025 16:05:47",
    },
    {
      id: 8,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "RETOOLS ELEKTRİKLİ 3’LÜ SET (2.28)",
      amount: 33.0,
      customer: "Arthur Morgan",
      date: "15.04.2025 16:05:32",
    },
    {
      id: 9,
      dealer: "Leon Kennedy",
      action: "Oluştur",
      product: "Urun123",
      amount: 10.0,
      customer: "Jane Doe",
      date: "15.04.2025 11:54:45",
    },
  ];

  const reports: Report[] = data.map((item) => ({
    id: item.id,
    dealer: item.dealer,
    action: item.action,
    product: item.product,
    amount: item.amount,
    customer: item.customer,
    date: item.date,
  }));

  return reports;
}
