import data from "../data/dataset.json";

const PopulateCores = () => {
  //declare an array to store all the cores
  const cores = [];
  //parsing json file
  const jsonData = JSON.parse(JSON.stringify(data.data));

  //create 4 arrays to store cores for each grid
  const groups = Array.from({ length: 4 }, () => []);

  //loop through json data, for each core, loop through the no. of repetitions
  //take diode and unmask and boolean varibles
  for (var i = 0; i < jsonData.length; i++) {
    const core = jsonData[i];
    const name = core["product"];
    const repetition = core["repeat"];

    for (var j = 0; j < repetition; j++) {
      cores.push({
        name,
        diode: false,
        unmask: false,
      });
    }
  }

  //count all the cores #80
  let totalCount = 0;
  for (let index in jsonData) {
    totalCount += jsonData[index].repeat;
  }

  //sort the cores based on repetition
  jsonData.sort((a, b) => {
    return b.repeat - a.repeat;
  });

  //add i4 and i5 cores to the top
  const core5 = jsonData.find((el) => el.product.includes("i5"));
  jsonData.unshift(core5);

  const core4 = jsonData.find((el) => el.product.includes("i4"));
  jsonData.unshift(core4);

  while (totalCount > 0) {
    for (let ci in jsonData) {
      //for placing first 40 cores, consider top 5 most repeated cores
      if(ci > 7 && totalCount > 40){
        continue;
      }

      let core = jsonData[ci];
      for (let g = 0; g < 4; g++) {
        if (core.repeat > 0 && groups[g].length < 20) {
          //add i4 and i5 in groups 1 and 2 only
          if (
            g > 1 &&
            (core.product.includes("i4") || core.product.includes("i5"))
          ) {
            break;
          }
            groups[g].push({
              name: core.product,
              diode: false,
              unmask: false,
              //color: core.color,
            });

          core.repeat = core.repeat - 1;
          totalCount = totalCount - 1;
        }
      }
    }
  }

  return groups;
};

export default PopulateCores;
