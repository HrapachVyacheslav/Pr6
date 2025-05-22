function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let cleaned = aclean(arr);
alert(cleaned); 
let list = document.getElementById("anagram-list");
cleaned.forEach(word => {
  let li = document.createElement("li");
  li.textContent = word;
  list.appendChild(li);
});