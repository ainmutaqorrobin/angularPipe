const obj = { 1: 2, 3: 4 };

for (const value of Object.values(obj)) {
  console.log(value);
}
for (const value in obj) {
  console.log(value);
}
