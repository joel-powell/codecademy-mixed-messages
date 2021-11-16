const arrays = [
    ["I", "We", "You", "He", "She", "They"], 
    ["lived in", "went on holiday to", "have always wanted to go to", "met someone in"], 
    ["London", "Tokyo", "Paris", "Rome", "Berlin", "Bangkok"]
]

console.log(arrays.map((element, index) => element[Math.floor(Math.random() * element.length)]).join(" "));