import { v4 as uuidv4 } from "uuid";

export const users = Array.from({ length: 20 }, (_, index) => ({
  title: ["Mr", "Ms"][Math.floor(Math.random() * 2)],
  firstname: `John${index}`,
  lastname: `Doe${index}`,
  birthday:
    `202${index}`.slice(-2) +
    "-" +
    (index + 1).toString().padStart(2, "0") +
    "-" +
    (index + 1).toString().padStart(2, "0"),
  nationality: [
    "American",
    "British",
    "Canadian",
    "Australian",
    "New Zealander",
    "South African",
  ][Math.floor(Math.random() * 6)],
  citizenID: Array.from({ length: 14 }, () =>
    Math.floor(Math.random() * 10)
  ).join(""),
  gender: ["male", "female"][Math.floor(Math.random() * 2)],
  mobilePhone: Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10)
  ).join(""),
  passportNo: Array.from({ length: 17 }, () =>
    Math.floor(Math.random() * 10)
  ).join(""),
  expectedSalary: Math.floor(Math.random() * 100000).toString(),
  id: uuidv4(),
}));
