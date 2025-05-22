function areAllUnique(arr) {
      const uniqueSet = new Set(arr);
      return uniqueSet.size === arr.length;
    }
    const uniqueArray = [1, 2, 3, 4, 5];
    const hasDuplicates = areAllUnique(uniqueArray);
    console.log("Унікальний масив:", hasDuplicates); // true
    const arrayWithDuplicates = [1, 2, 3, 2, 4, 5];
    const hasDuplicates2 = areAllUnique(arrayWithDuplicates);
    console.log("Масив з дублями:", hasDuplicates2); // false
    const output = document.createElement('div');
    output.innerHTML = `
      <p>Унікальний масив: ${hasDuplicates}</p>
      <p>Масив з дублями: ${hasDuplicates2}</p>`;
    document.body.appendChild(output);