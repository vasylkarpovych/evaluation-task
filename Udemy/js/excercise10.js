"use strict";

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// => 'Мне 29 и я владею языками: RU ENG'

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (personalPlanPete) {
    return `Мне ${
      personalPlanPete.age
    } и я владею языками: ${personalPlanPete.skills.languages
      .join(" ")
      .toUpperCase()}`;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  // первое решение циклами {FOR IN}
  // for (let key in plan) {
  //   if (typeof plan[key] === "object") {
  //     // console.log(plan[key]);
  //     for (let j in plan[key]) {
  //       if (typeof plan[key][j] === "string") {
  //         // console.log(plan[key][j]);
  //         return plan[key][j];
  //       }
  //     }
  //   }
  // }
  // Второе решение при помощи деструктуризации
  // const { exp } = plan.skills;
  // return exp;
}

showExperience(personalPlanPeter);

// "Язык js изучен на 20% Язык php изучен на 10%"

showProgrammingLangs(personalPlanPeter);

function showProgrammingLangs(plan) {
  //   let infString = "";
  //   const { programmingLangs } = plan.skills;
  //   for (let key in programmingLangs) {
  //     infString += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  //   }
  //   // console.log(infString);
  //   return infString;
}

showProgrammingLangs(personalPlanPeter);
