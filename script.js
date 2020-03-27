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

const names = function() {
  const allNames = randomPersonData.map(item => item.name);

  const womanNames = allNames.sort();
  return womanNames;
};
console.log("names", names());

const olderThan = function() {
  const allAges = randomPersonData.map(item => item.age);
  //console.log(allAges);
  const olderAge = allAges.filter(function checkAge(age) {
    return age >= 30;
  });
  return olderAge;
};
console.log("olderThan", olderThan());

const filterWomen = data => {
  women = randomPersonData.filter(person => person.gender === "female");
  return women;
};
console.log("filerW", filterWomen());

const filterBirthday = function() {
  birthdayfilter = randomPersonData.filter(person => {
    let [day, month] = person.birthday.dmy.split("/");
    return (day > 22 && month == 12) || (day < 19 && month === 1);
  });

  return birthdayfilter;
};
console.log("filterBirthday", filterBirthday());

const addPeopleList = randomPersonData => {
  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  let imgnode = document.createElement("img");
  let namenode = document.createElement("p");

  imgnode.src = randomPersonData.photo;
  namenode.innerText = randomPersonData.name + " " + randomPersonData.surname;

  divnode.appendChild(namenode);
  divnode.appendChild(imgnode);
  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(divnode);
};

const peopleToDom = () => {
  filterBirthday(olderThan(filterWomen(names()))).forEach(element => {
    addPeopleList(element);
  });
};

document.getElementById("steenbok").addEventListener("click", () => {
  peopleToDom();
});
