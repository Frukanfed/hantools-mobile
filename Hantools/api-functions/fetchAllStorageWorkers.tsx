import { StorageWorker } from "@/constants/Types";

export default function FetchAllStorageWorkers() {
  const data = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      clearance: "sorumlu",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      username: "jane",
      clearance: "çalışan",
    },
    {
      id: 3,
      first_name: "Leon",
      last_name: "Kennedy",
      username: "leon",
      clearance: "sorumlu",
    },
    {
      id: 4,
      first_name: "Admin",
      last_name: "Admin",
      username: "admin",
      clearance: "çalışan",
    },
    {
      id: 5,
      first_name: "test",
      last_name: "test",
      username: "admin",
      clearance: "çalışan",
    },
    {
      id: 6,
      first_name: "testin2",
      last_name: "Admin",
      username: "admin",
      clearance: "çalışan",
    },
  ];

  const storageWorkers: StorageWorker[] = data.map((item) => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    username: item.username,
    clearance: item.clearance,
  }));

  return storageWorkers;
}
