function unique(arr) {
      return Array.from(new Set(arr));
    }

    let values = [
      "Hare", "Krishna", "Hare", "Krishna",
      "Hare", "Krishna", "Hare", "Krishna", ":-O",
      "1"
    ];

    let uniqueValues = unique(values);
    alert(uniqueValues); // Hare, Krishna, :-O, 1
    let list = document.getElementById("unique-list");
    uniqueValues.forEach(value => {
      let li = document.createElement("li");
      li.textContent = value;
      list.appendChild(li);
    });