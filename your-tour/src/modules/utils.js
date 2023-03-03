// ! Ф-ЦИЯ РАНДОМАЙЗЕР СЛУЧАЙНОГО БОЛЬШОГО ЧИСЛА
export default function generateRandomKey() {
  const randomKey = Math.round(Math.random() * 100000000000);
  return randomKey.toString();
}
