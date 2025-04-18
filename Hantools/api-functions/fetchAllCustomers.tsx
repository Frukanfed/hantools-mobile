import { Customer } from "@/constants/Types";

export default function FetchAllCustomers() {
  const data = [
    {
      id: 1,
      name: "Jane Doe",
      phone: 1111111111,
      city: "Istanbul",
      district: "Beşiktaş",
      taxNumber: 12345678901,
      taxOffice: "Beşiktaş Vergi Dairesi",
      billingAddress: "Nispetiye Caddesi No:15, Beşiktaş, Istanbul",
      address: "Sunset Boulevard No:101, Levent, Istanbul",
    },
    {
      id: 2,
      name: "Arthur Morgan",
      phone: 0o000112233,
      city: "Blackwater",
      district: "Santa Fe",
      taxNumber: 98765432109,
      taxOffice: "Santa Fe Revenue Office",
      billingAddress: "145 Railroad Ave, Santa Fe, Blackwater",
      address: "Copperhead Road No:55, Blackwater",
    },
    {
      id: 3,
      name: "Muster1",
      phone: 22222222,
      city: "Istanbul",
      district: "Beşiktaş",
      taxNumber: 45678912300,
      taxOffice: "Levent Vergi Dairesi",
      billingAddress: "Mecidiyeköy Mahallesi No:45, Beşiktaş, Istanbul",
      address: "Mimarsinan Mahallesi No:23, Beşiktaş, Istanbul",
    },
    {
      id: 4,
      name: "Müşteri",
      phone: 222,
      city: "BAŞAKŞEHİR",
      district: "BAŞAKŞEHİR",
      taxNumber: 11223344556,
      taxOffice: "Başakşehir Vergi Dairesi",
      billingAddress: "2. Etap Yolu Caddesi No:8, Başakşehir, Istanbul",
      address: "Bahçeşehir Mahallesi No:12, Başakşehir, Istanbul",
    },
  ];

  const customers: Customer[] = data.map((item) => ({
    id: item.id,
    name: item.name,
    phone: item.phone,
    city: item.city,
    district: item.district,
    address: item.address,
    taxNumber: item.taxNumber,
    taxOffice: item.taxOffice,
    billingAddress: item.billingAddress,
  }));

  return customers;
}
