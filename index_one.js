function getDisplayNameOne(firstName, lastName) {
  const capitalize = (string1) =>
    string1.slice(0, 1).toUpperCase() + string1.slice(1);
  return `${capitalize(firstName)} ${capitalize(lastName)}`;
}

console.log(getDisplayNameOne("samuel", "njenga"));

const upperFirstCharacter = (string1) =>
  string1.slice(0, 1).toUpperCase() + string1.slice(1);

function getDisplayNameTwo(firstName, lastName) {
  return `${upperFirstCharacter(firstName)} ${upperFirstCharacter(lastName)}`;
}

console.log(getDisplayNameTwo("samuel", "njenga"));
