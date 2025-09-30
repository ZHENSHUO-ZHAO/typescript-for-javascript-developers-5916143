type User = { id: number; name: string; role: "admin" | "user" | "guest" };
type Age = { age: number };

// Sample data
const data: User[] = [
  { id: 1, name: "Zia", role: "admin" },
  { id: 2, name: "Gaia", role: "user" },
  { id: 3, name: "Noora", role: "guest" },
];

// Function to find a user by ID
function findUserById(id: number): User | undefined {
  return data.find((user) => user.id === id);
}

// Function to log user details
function logUserDetails(user: User): void {
  console.log(`Name: ${user.name}, Role: ${user.role}`);
}

// Function to merge two objects: a user and an age key value pair { age: 22 }
function mergeObjects(user: User, age: Age): User & Age {
  return { ...user, ...age };
}
