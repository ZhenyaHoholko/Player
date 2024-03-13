const info ={
    title: "it-incubator",
    graduatesCount: 2000,
    areYouChampion: true
}

const pageTitleEltment = document.createElement("h1");
pageTitleEltment.innerText = title;
document.body.append(pageTitleEltment);

let graduatesCountElement = document.createElement("input");
graduatesCountElement.value = graduatesCount;
document.body.append(graduatesCountElement);

const areYouChampionEltment = document.createElement("input");
areYouChampionEltment.type = "checkbox";
areYouChampionEltment.checked=areYouChampionEltment;
document.body.append(areYouChampionEltment);