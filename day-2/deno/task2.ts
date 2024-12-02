async function solve() {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("./day-2/input.txt");
  const str = decoder.decode(data);
  const parsed = str.split("\n");

  let safe = 0;
  for (let i = 0; i < parsed.length; i++) {
    let arr = parsed[i].split(" ").map((item) => parseInt(item));

    for (let i = 0; i < arr.length; i++) {
      const arr1 = [...arr.slice(0, i), ...arr.slice(i + 1)];
      if (
        (isIncreasing(arr1) && diff(arr1)) ||
        (isDecreasing(arr1) && diff(arr1))
      ) {
        safe++;
        break;
      }
    }
  }
  return safe;
}

function isIncreasing(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function diff(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      Math.abs(arr[i + 1] - arr[i]) > 3 ||
      Math.abs(arr[i + 1] - arr[i]) === 0
    ) {
      return false;
    }
  }
  return true;
}

function isDecreasing(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(await solve());
