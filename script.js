console.log("hallo, dit is script");
console.log(randomPersonData.length);

// const regionNames = randomPersonData.map(item => item.region);
// const uniqueRegionNames = regionNames.filter((region, index, regions) => {
//   return regions.indexOf(region) === index;
// });

const addRegionsToDom = function() {
  const regionList = document.getElementById("resultaat");
  const regionNames = randomPersonData.map(item => item.region);
  const uniqueRegionNames = regionNames.filter((region, index, regions) => {
    return regions.indexOf(region) === index;
  });
  const sortedNames = uniqueRegionNames.sort();
  console.log(sortedNames);
  const listItems = sortedNames.map(function(item) {
    const listItem = document.createElement("li");
    return listItem;
  });

  listItems.forEach(function(item) {
    regionList.appendChild(item);
  });
};