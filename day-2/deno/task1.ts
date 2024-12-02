async function solve() {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("./day-2/input.txt");
  const str = decoder.decode(data);
  const parsed = str.split("\n");

  let safe = 0;
  for (let i = 0; i < parsed.length; i++) {
    const arr = parsed[i].split(" ").map((item) => parseInt(item));
    
    if ((isIncreasing(arr) && diff(arr)) || (isDecreasing(arr) && diff(arr))) {
      safe++;
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
    if (Math.abs(arr[i + 1] - arr[i]) > 3 || Math.abs(arr[i + 1] - arr[i]) === 0) {
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
