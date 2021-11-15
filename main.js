const pronouns = ["I", "We", "You", "He", "She", "They"]
const actions = ["lived in", "went on holiday to", "have always wanted to go to", "met someone in"]
const places = ["London", "Tokyo", "Paris", "Rome", "Berlin", "Bangkok"]
const arrays = [pronouns, actions, places]

console.log(arrays.map((element, index) => element[Math.floor(Math.random() * element.length)]).join(" "));