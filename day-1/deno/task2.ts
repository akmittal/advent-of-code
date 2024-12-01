async function solve() {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("./day-1/input.txt");
  const str = decoder.decode(data);
  const parsed = str.split("\n").map((line) => line.split("   "));

  const list1 = parsed
    .map((list) => list[0])
    .map((item) => parseInt(item))
    .sort((a, b) => (a > b ? 1 : -1));
  const list2 = parsed
    .map((list) => list[1])
    .map((item) => parseInt(item))
    .sort((a, b) => (a > b ? 1 : -1));

  const map = new Map();

  list2.forEach((item1) => {
    if (map.get(item1)) {
      map.set(item1, map.get(item1) + 1);
    } else {
      map.set(item1, 1);
    }
  });
  let sum = 0;
  list1.forEach((item) => {
    if (map.has(item)) {
      sum += item * map.get(item);
    }
  });
  return sum;
}

console.log(await solve());
