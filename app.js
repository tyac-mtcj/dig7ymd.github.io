// window.addEventListener("load", () => {
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

// theMealDBから必要な情報を取得
// getMeal(url);

function getMeal(url) {
  let mealName;
  let mealimg;
  let mealLink;

  const nameElm = document.getElementById("mealName");
  const imgElm = document.getElementById("mealImg");
  const lnkElm = document.getElementById("mealLink");


  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      mealName = res.meals[0].strMeal;
      // console.log("console1", mealName);
      nameElm.innerText = mealName;

      mealimg = res.meals[0].strMealThumb;
      // console.log(mealimg);
      imgElm.src = mealimg;

      mealLink = res.meals[0].strSource;
      console.log(mealLink);
      lnkElm.href = mealLink;
      // return mealName;
    });
}

// });

const urlArray = [
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=side",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese",
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=French",
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
];

function clickEvents(cnt) {
  fetch(urlArray[cnt])
    .then((res) => res.json())
    .then((res) => res.meals)
    .then((res) => {
      console.log(res);

      let count = res.length;
      console.log("count",count);
      let mathCnt = Math.floor(Math.random() * count);
      console.log("問題点",mathCnt);
      let idMealUrl = res[mathCnt].idMeal
      console.log(idMealUrl);
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMealUrl}`;
      getMeal(url);
    });
}

window.onload = getMeal(url);
