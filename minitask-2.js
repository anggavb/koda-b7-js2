const purchase = 400000
let discount = 0

if (purchase) {
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
