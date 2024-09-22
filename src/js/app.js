// TODO: write your code here

export default function orderByProps(obj, arr){
  let result = [];
  // Можно было так сделать, придумывал потом как for in переделать
  //[...arr, ...Object.keys(obj).filter((x) => !arr.includes(x)).sort()].forEach((elm) => result.push({key: elm, value: obj[elm]}));

  let obj1 = {};
  [...arr, ...Object.keys(obj).filter((x) => !arr.includes(x)).sort()].forEach((elm) => obj1[elm] = '');

  for (const property in obj) {
    obj1[property] = obj[property];
  }

  for (const property in obj1) {
    result.push({key: property, value: obj1[property]})
  }

  return result;
}
