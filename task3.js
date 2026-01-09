export function ageCalculator(y, m, d) {
  let hoy = new Date();
  let birthday = new Date(y, m, d);
  let age = hoy.getFullYear() - birthday.getFullYear();
  let mes = hoy.getMonth() - birthday.getMonth();

  if (mes < 0 || (theMonth === 0 && hoy.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
}