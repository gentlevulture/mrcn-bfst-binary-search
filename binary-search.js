function binarySearch(arr, element){
  // Get the starting index and ending index of the collection

  // const veryAmericanBreakfast = [
  //   "Avocado",
  //   "Bacon",
  //   "Coffee",
  //   "Eggs",
  //   "French Toast",
  //   "Grits",
  //   "Oatmeal",
  //   "Pancakes",
  //   "Taco",
  //   "Waffle",
  // ]
  
  // arr is the array veryAmericanBreakfast
  // element is the string Avocado

  let start = 0
  let end = arr.length - 1

  // While we have not found the element and have not exhausted the search
  while(start <= end) {
    // Find the midpoint by adding the indexes together and dividing by 2
    midPoint = Math.floor((start + end) / 2)

    // if our search element is less than the midpoint element
    if (element < arr[midPoint]) {
      // limit the search to the left of the midpoint
      end = midPoint - 1

    } else if (element > arr[midPoint]) {
      // else, limit the search to the right of the midpoint
      start = midPoint + 1

    } else if (element === arr[midPoint]) {
      // if we have found the correct element, return its index!
      return midPoint
    }
  }

  // If we never found the correct element return -1
  return -1

  // If we are using binaryInsert and never found the correct element, return the bitwise NOT (bitwise complement) of the starting index
  // return ~start
}

const veryAmericanBreakfast = [
  "Avocado",
  "Bacon",
  "Coffee",
  "Eggs",
  "French Toast",
  "Grits",
  "Oatmeal",
  "Pancakes",
  "Taco",
  "Waffle",
]

console.log(binarySearch(veryAmericanBreakfast, "Poptarts"))

/** binary search if found element in array returns a number from 0 - last element in array
 * Bitwise NOT of "Poptarts" is -8
 * 
 * */

// const element = "Pancakes"

// const newBreakfastArray = binarySearch(veryAmericanBreakfast, element)

// console.log(newBreakfastArray)

function binaryInsert(arr, element) {
  const index = binarySearch(arr, element)
  // Make a copy of the incoming array
  const outputArr = [...arr]
  if (index >= 0) {
    console.log(`${element} already exists at index ${index}`)
  } else {
    // Use the bitwise NOT of the index to place it in the correct index. 
    outputArr.splice(~index, 0, element)
  }
  return outputArr
}