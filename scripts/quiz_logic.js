// DATA
function createPlatforms() {
    var platforms = {
        "Shoutem": {
            rating: 0,
            ideal_proficiency: 2,
            user_friendliness: 3,
            cost: 3.3,
            time: 2,
            customization: 3,
            minimum_proficiency: 2,
        },
        "Goodbarber": {
            rating: 0,
            ideal_proficiency: 3,
            user_friendliness: 4,
            cost: 3.33,
            time: 3,
            customization: 2,
            minimum_proficiency: 2,
        },
        "Appypie": {
            rating: 0,
            ideal_proficiency: 1,
            user_friendliness: 2,
            cost: 2,
            time: 1,
            customization: 1,
            minimum_proficiency: 1,
        },
        "Bubble": {
            rating: 0,
            ideal_proficiency: 4,
            user_friendliness: 2,
            cost: 4.3,
            time: 4,
            customization: 4,
            minimum_proficiency: 3,
        },
        "VSCode": {
            rating: 0,
            ideal_proficiency: 5,
            user_friendliness: 1,
            cost: 1,
            time: 5,
            customization: 5,
            minimum_proficiency: 5,
        }
    };

    // console.log(platforms);
    // console.log(platforms["Shoutem"]);
    // console.log(platforms["Shoutem"]["cost"]);
    return platforms;
}

// QUIZ RATING MANIPULATION
function rankPlatforms(platforms) {
    // @Uthara implement quiz logic
    // change the "rating" of each as users press buttons
    // return the platforms dict with updated ratings

    // yes or no questions
    var questionOne = document.getElementById("questionOneYes");
    questionOne.addEventListener("click", function qOneFunction(){
        platforms["Appypie"]["ranking"] += 3;
        alert("3 has been added to appypie");
    });
    var questionTwo = document.getElementById("questionTwoYes");
    questionTwo.addEventListener("click", function qTwoFunction(){
        platforms["Appypie"]["ranking"] += 3;
        alert("3 has been added to appypie");
    });
    var questionThree = document.getElementById("questionThreeYes");
    questionThree.addEventListener("click", function qThreeFunction(){
        platforms["Appypie"]["ranking"] += 3;
        platforms["Goodbarber"]["ranking"] += 3;
        platforms["Shoutem"]["ranking"] += 3;
        alert("3 has been added to appypie, goodbarber, and shoutem");
    });
    var questionFour = document.getElementById("questionFourYes");
    questionFour.addEventListener("click", function qFourFunction(){
        platforms["Goodbarber"]["ranking"] += 5;
        platforms["Shoutem"]["ranking"] += 5;
        alert("5 has been added to goodbarber, and shoutem");
    });

 
    // selection questions

    // preference questions
    var cusRankingOne = document.getElementsById("customization");
    cusRankingOne.addEventListener("click", function cOneFunction(){
        for(let key in platforms){
                if(platforms[key]["customization"] >= 3){
                    platforms[key][ranking] += 3;
                }
        }
    })
    // probably a shorter way to write this out


    console.log(platforms);
    return platforms;
}
    rankPlatforms(createPlatforms());

// SORTING RATINGS
function sortJsObject(dict) {
    var keys = [];
    for(var key in dict) { 
       keys[keys.length] = key;
     }
     var values = [];     
     for(var i = 0; i < keys.length; i++) {
         values[values.length] = dict[keys [i]];
     }
     var sortedValues = values.sort(sortNumber);
     console.log(sortedValues);
}

function sortNumber(a,b) {
   return a - b;
}

function orderRankedPlatforms(platforms) {
    var rankedPlatforms = [];
    var plats = Object.keys(platforms);
    dict = {}
    for (const [key, value] of Object.entries(platforms)) {
        dict[key] = value["rating"]
      }
    rankedPlatforms = sortJsObject(dict)
    return(rankedPlatforms)
}

// SUBMITTING QUIZ & DISPLAYING RESULTS
function submitQuiz() {
    // Aidan & Uthara

    document.getElementById("questions").style.display = 'none';
    var x = document.getElementById("questions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displayInfo(rankedPlatforms) {
    // Aidan
}

function quizLogic() {
    return orderRankedPlatforms(rankPlatforms(createPlatforms()));
}

window.onload = function () {   
    // submit quiz
    const targetDiv = document.getElementById("questions");
    const newDiv = document.getElementById("resultsPage");
    const btn = document.getElementById("submit");
    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
            newDiv.style.display = "block";
        } else {
            targetDiv.style.display = "block";
            newDiv.style.display = "none";
        }
        displayInfo(quizLogic())
    };
};
