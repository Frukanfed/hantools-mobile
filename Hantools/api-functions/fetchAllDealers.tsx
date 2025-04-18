import { Dealer } from "@/constants/Types";

export default function FetchAllDealers() {
  const data = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      phone: 5555555555,
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      username: "jane",
      phone: 2222222222,
    },
    {
      id: 3,
      first_name: "Leon",
      last_name: "Kennedy",
      username: "leon",
      phone: 22233334455,
    },
    {
      id: 4,
      first_name: "Admin",
      last_name: "Admin",
      username: "admin",
      phone: 1111111111,
    },
    {
      id: 5,
      first_name: "Ada",
      last_name: "Wong",
      username: "adawong",
      phone: 3333333333,
    },
    {
      id: 6,
      first_name: "deneme",
      last_name: "deneme",
      username: "deneme",
      phone: 123,
    },
    {
      id: 7,
      first_name: "Ömer",
      last_name: "Şen",
      username: "omersen",
      phone: 1234,
    },
  ];

  const dealers: Dealer[] = data.map((item) => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    username: item.username,
    phone: item.phone,
  }));

  return dealers;
}
