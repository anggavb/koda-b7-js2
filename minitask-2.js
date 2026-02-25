const purchase = 2000000
let discount = 0

if (purchase && purchase > 0) {
  if (purchase >= 500000 && purchase <= 1000000) {
    discount = 0.05
  } else if (purchase > 1000000) {
    discount = 0.1
  } else {
    discount = 0
  }

  console.log(`Anda mendapatkan diskon sebesar ${discount * 100}% dengan total diskon sebesar Rp${purchase * discount}`);
} else {
  console.log('Invalid purchase amount!')
}

switch (true) {
  case (purchase >= 500000 && purchase <= 1000000):
    discount = 0.05
    break
  case (purchase > 1000000):
    discount = 0.1
    break
  default:
    discount = 0
}

console.log(`${!purchase || purchase < 0 ? "Invalid purchase amount!" : `Anda mendapatkan diskon sebesar ${discount * 100}% dengan total diskon sebesar Rp${purchase * discount}`}`);