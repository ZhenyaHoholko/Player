const info ={
    title: "it-incubator",
    graduatesCount: 2000,
    areYouChampion: true
}

const pageTitleEltment = document.createElement("h1");
pageTitleEltment.append(info.title);
document.body.append(pageTitleEltment);

let graduatesCountElement = document.createElement("input");
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

const areYouChampionEltment = document.createElement("input");
areYouChampionEltment.type = "checkbox";
areYouChampionEltment.checked=info.areYouChampion;
document.body.append(areYouChampion);


const YouChampionEltment = document.createElement("input");
YouChampionEltment.type = "checkbox";
YouChampionEltment.checked=YouChampionEltment;
document.body.append(YouChampionEltment);