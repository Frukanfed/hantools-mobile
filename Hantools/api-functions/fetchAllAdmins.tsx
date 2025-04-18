import { Admin } from "@/constants/Types";

export default function FetchAllAdmins() {
  const data = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      username: "jane",
    },
    {
      id: 3,
      first_name: "Leon",
      last_name: "Kennedy",
      username: "leon",
    },
    {
      id: 4,
      first_name: "Admin",
      last_name: "Admin",
      username: "admin",
    },
  ];

  const admins: Admin[] = data.map((item) => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    username: item.username,
  }));

  return admins;
}
