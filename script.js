console.log("hallo, dit is script");
console.log(randomPersonData.length);

const addRegionsToDom = function() {
  const regionList = document.getElementById("resultaat");
  const regionNames = randomPersonData.map(item => item.region);
  const uniqueRegionNames = regionNames.filter((region, index, regions) => {
    return regions.indexOf(region) === index;
  });

  const sortedNames = uniqueRegionNames.sort();
  console.log(sortedNames);
  const listItems = sortedNames.map(function(item) {
    console.log(item);
    const listItem = document.createElement("li");
    listItem.innerText = item;

    return listItem;
  });

  listItems.forEach(function(item) {
    regionList.appendChild(item);
  });
};

const steenbokVrouwen = function() {
  console.log("steenbokVrouwen is geklikt");
  const womenList = document.getElementById("resultaat");
  womenList.innerText = "";
  const allAges = randomPersonData.map(item => item.age);
  console.log(allAges);
  const olderAge = allAges.filter(function checkAge(age) {
    return age >= 30;
  });
  console.log("dit is older age", olderAge);

  const allNames = randomPersonData.map(item => item.name);

  const womanNames = allNames.sort();
  console.log(womanNames);
};

allGender = randomPersonData.map(item => item.gender);
console.log(allGender);
const allFemale = allGender.filter(function checkGender(gender) {
  return gender === "female";
});

console.log(allFemale);
