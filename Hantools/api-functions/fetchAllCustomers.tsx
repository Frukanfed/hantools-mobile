import { Customer } from "@/constants/Types";

export default function FetchAllCustomers() {
  const data = [
    {
      id: 1,
      name: "Jane Doe",
      phone: 1111111111,
      city: "Istanbul",
      district: "Beşiktaş",
    },
    {
      id: 2,
      name: "Arthur Morgan",
      phone: 0o000112233,
      city: "Blackwater",
      district: "Santa Fe",
    },
    {
      id: 3,
      name: "Muster1",
      phone: 22222222,
      city: "Istanbul",
      district: "Beşiktaş",
    },
    {
      id: 4,
      name: "Müşteri",
      phone: 222,
      city: "BAŞAKŞEHİR",
      district: "BAŞAKŞEHİR",
    },
  ];

  const customers: Customer[] = data.map((item) => ({
    id: item.id,
    name: item.name,
    phone: item.phone,
    city: item.city,
    district: item.district,
  }));

  return customers;
}
