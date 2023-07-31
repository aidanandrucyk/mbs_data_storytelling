// PLATFORMS DATA
var platforms = {
    "Shoutem": {
        rating: 0,
        ideal_proficiency: 2,
        user_friendliness: 3,
        cost: 3.3,
        time: 2,
        customization: 3,
        minimum_proficiency: 2,
        dndCharacter: 'Bard',
        dndCharacterTraits: '"• Natural-born storytellers • Someone who is artistic and cares about the visuals',
        finalDescription: 'You are Bard! As a Bard, you are a natural storyteller. Use your gifts to create a customizable application that is useful for your brand.',
        levelCode: 'User friendly and customizable',
        platformDescription: 'Shoutem is perfect for you because you Shoutem balances the factors of user friendliness, cost, and customization.',
    },
    "Goodbarber": {
        rating: 0,
        ideal_proficiency: 3,
        user_friendliness: 4,
        cost: 3.33,
        time: 3,
        customization: 2,
        minimum_proficiency: 2,
        dndCharacter: 'Druid',
        dndCharacterTraits: 'Loves nature • Gains their power and resources from Nature • Resourceful magic based solutions',
        finalDescription: 'You are a Druid! You enjoy resourceful, magic-based solutions to complicated questions. Take your project to the next level by using Goodbarber to complete your next big project.',
        levelCode: 'More User friendly, a little less customizable',
        platformDescription: 'GoodBarber is perfect for your company because your company desires a platform that is very user friendly. You’re fine with spending a moderate amount of time and money on the platform.',
    },
    "Appypie": {
        rating: 0,
        ideal_proficiency: 1,
        user_friendliness: 2,
        cost: 2,
        time: 1,
        customization: 1,
        minimum_proficiency: 1,
        dndCharacter: 'Cleric',
        dndCharacterTraits: '"• Love big goals and wield big weapons, explore morality and strong incentives for or against killing • Someone that likes to use a lot of resources available to them to do magic',
        finalDescription: 'You are a Cleric! As a Cleric you have big goals and don\'t mind using all the sources available to you to complete your magical ideas! Take advantage of all the resources available to you by using AppyPie to create your application.',
        levelCode: 'Little customization, and time spent. Also low in cost and user-friendliness.',
        platformDescription: 'The ideal developer of Appypie is a person with almost no coding experience and has plans to create a simple and small-scale website. Appypie requires no previous coding experience thus the learning curve is very low. The large appeal of this website is its low time to create as well as how low of a risk it is to use it. In comparison to the  other websites in this category it has the quickest time to create, this is due to the limitation in user input thus narrowing the options however at the same time making it more streamline. By having fewer options it allows for less user mistakes thus the risk to use the website is lowered. Likewise all the data is stored on an external cloud, therefore no user data could ever be lost on their end. Another benefit is the direct publishing of the website, the developer does not have to wonder how to release it when it\'s handled already. Lastly the help resources available are found as classes and chat bots that can aid you for any potential problems found. While there are several benefits to using Appypie there are also downsides to it. The first is the cost, while it is not the most expensive website found in the No coding genre it is still a substantial amount of money when compared to free resources such as VSCode. The low time to create comes at this cost just like the level of customization available, drag and drop creation is useful to keep up with a time limitation however it drastically lowers just how much the user can create the app to their liking. Thus developers who have the budget but no time to create an app should go towards Appypie as their website development platform.',
    },
    "Bubble": {
        rating: 0,
        ideal_proficiency: 4,
        user_friendliness: 2,
        cost: 4.3,
        time: 4,
        customization: 4,
        minimum_proficiency: 3,
        dndCharacter: 'Warrior',
        dndCharacterTraits: '"•Enjoy high adrenaline fights, and enjoy combat strategy rely on instinct. •This reminds me of a high knowledge coding platform, or someone who is really willing to take the plunge. Adventurous"',
        finalDescription: 'You are a Warrior! A skilled fighter that enjoys relying on your instincts. Use your instictive knowledge of technology and previous experience to take the huge step in building your own application with Bubble.',
        levelCode: 'Someone who has a lot of resources, lots of money and time to spend.',
        platformDescription: 'Bubble\'s ideal developer aims to create a large-scale app targeting a wide user base on both Android and iOS platforms. Bubble offers several advanced features options without the requisite of coding expertise, although having some would allow some additional functionality to be used. As one of the more premium platforms, Bubble expedites the process of publishing a developer\'s app and allows an easy method to continually update and manage the app\'s progress over time. Additionally, Bubble guarantees protection for all data hosted on its servers, and allows developers to easily import/export data for migration purposes. These characteristics, along with the higher cost, make Bubble ideally suited for industry-level app development: apps with millions of regular users, apps needing regular updates, apps with a more professional aesthetic, etc. The expense of Bubble\'s feature set is mitigated by the fact that most of its clientele consists of larger companies, not individuals or small teams looking to make a start-up application. In fact, most individuals or smaller teams could be overwhelmed by the plethora of options Bubble offers, and may be better suited with a simpler platform like Appypie. Bubble presents an accessible, high performance development platform with the potential for higher customization if the proper expertise and money is available.',
    },
    "VSCode": {
        rating: 0,
        ideal_proficiency: 5,
        user_friendliness: 1,
        cost: 1,
        time: 5,
        customization: 5,
        minimum_proficiency: 5,
        dndCharacter: 'Wizard',
        dndCharacterTraits: '"• Players who enjoy appearing intelligent • Offering knowledge on a variety of topics',
        finalDescription: 'You are a Wizard! As a wizard, you have knowledge about a variety of topics. Put your intelligence to use by creating a specialized application for your company\'s needs and goals. You can find your spellbook in the VSCode Application.',
        levelCode: 'Difficult, someone able to customize things a lot',
        platformDescription: 'VSCode\'s ideal developer has years of software development experience and aims to complete a highly detailed, large-scale project over a longer period of time. While VSCode offers a higher degree of customization to its users, it provides little assistance in the development or publication processes of building an application. This high barrier to entry is compensated by several benefits when compared to other platforms: VSCode is free to use, allows full control over one\'s data, and since code is traditionally saved on GitHub it is easier to see the history of one\'s work and revert to a previous version if necessary. This control is a common theme for VSCode: The downsides come in the form of increased time to create an app (compared to drag & drop platforms like Appypie) and the lack of support from VSCode itself; no customer service, publishing support, or data hosting will be provided. If a problem arises and the developer is stuck, VSCode will not offer any consulting services to assist; it\'s an IDE, not a company designed to help developers publish apps. Therefore, skilled developers with the time to prioritize the customization and cost of their app will find the most success with VSCode.',
    }
};


// RECREATE DATA
function createPlatforms() {
    platforms = {
        "Shoutem": {
            rating: 0,
            ideal_proficiency: 2,
            user_friendliness: 3,
            cost: 3.3,
            time: 2,
            customization: 3,
            minimum_proficiency: 2,
            dndCharacter: 'Bard',
            dndCharacterTraits: '"• Natural-born storytellers • Someone who is artistic and cares about the visuals',
            finalDescription: 'You are Bard! As a Bard, you are a natural storyteller. Use your gifts to create a customizable application that is useful for your brand.',
            levelCode: 'User friendly and customizable',
            platformDescription: 'Shoutem is perfect for you because you Shoutem balances the factors of user friendliness, cost, and customization.',
        },
        "Goodbarber": {
            rating: 0,
            ideal_proficiency: 3,
            user_friendliness: 4,
            cost: 3.33,
            time: 3,
            customization: 2,
            minimum_proficiency: 2,
            dndCharacter: 'Druid',
            dndCharacterTraits: 'Loves nature • Gains their power and resources from Nature • Resourceful magic based solutions',
            finalDescription: 'You are a Druid! You enjoy resourceful, magic-based solutions to complicated questions. Take your project to the next level by using Goodbarber to complete your next big project.',
            levelCode: 'More User friendly, a little less customizable',
            platformDescription: 'GoodBarber is perfect for your company because your company desires a platform that is very user friendly. You’re fine with spending a moderate amount of time and money on the platform.',
        },
        "Appypie": {
            rating: 0,
            ideal_proficiency: 1,
            user_friendliness: 2,
            cost: 2,
            time: 1,
            customization: 1,
            minimum_proficiency: 1,
            dndCharacter: 'Cleric',
            dndCharacterTraits: '"• Love big goals and wield big weapons, explore morality and strong incentives for or against killing • Someone that likes to use a lot of resources available to them to do magic',
            finalDescription: 'You are a Cleric! As a Cleric you have big goals and don\'t mind using all the sources available to you to complete your magical ideas! Take advantage of all the resources available to you by using AppyPie to create your application.',
            levelCode: 'Little customization, and time spent. Also low in cost and user-friendliness.',
            platformDescription: 'The ideal developer of Appypie is a person with almost no coding experience and has plans to create a simple and small-scale website. Appypie requires no previous coding experience thus the learning curve is very low. The large appeal of this website is its low time to create as well as how low of a risk it is to use it. In comparison to the  other websites in this category it has the quickest time to create, this is due to the limitation in user input thus narrowing the options however at the same time making it more streamline. By having fewer options it allows for less user mistakes thus the risk to use the website is lowered. Likewise all the data is stored on an external cloud, therefore no user data could ever be lost on their end. Another benefit is the direct publishing of the website, the developer does not have to wonder how to release it when it\'s handled already. Lastly the help resources available are found as classes and chat bots that can aid you for any potential problems found. While there are several benefits to using Appypie there are also downsides to it. The first is the cost, while it is not the most expensive website found in the No coding genre it is still a substantial amount of money when compared to free resources such as VSCode. The low time to create comes at this cost just like the level of customization available, drag and drop creation is useful to keep up with a time limitation however it drastically lowers just how much the user can create the app to their liking. Thus developers who have the budget but no time to create an app should go towards Appypie as their website development platform.',
        },
        "Bubble": {
            rating: 0,
            ideal_proficiency: 4,
            user_friendliness: 2,
            cost: 4.3,
            time: 4,
            customization: 4,
            minimum_proficiency: 3,
            dndCharacter: 'Warrior',
            dndCharacterTraits: '"•Enjoy high adrenaline fights, and enjoy combat strategy rely on instinct. •This reminds me of a high knowledge coding platform, or someone who is really willing to take the plunge. Adventurous"',
            finalDescription: 'You are a Warrior! A skilled fighter that enjoys relying on your instincts. Use your instictive knowledge of technology and previous experience to take the huge step in building your own application with Bubble.',
            levelCode: 'Someone who has a lot of resources, lots of money and time to spend.',
            platformDescription: 'Bubble\'s ideal developer aims to create a large-scale app targeting a wide user base on both Android and iOS platforms. Bubble offers several advanced features options without the requisite of coding expertise, although having some would allow some additional functionality to be used. As one of the more premium platforms, Bubble expedites the process of publishing a developer\'s app and allows an easy method to continually update and manage the app\'s progress over time. Additionally, Bubble guarantees protection for all data hosted on its servers, and allows developers to easily import/export data for migration purposes. These characteristics, along with the higher cost, make Bubble ideally suited for industry-level app development: apps with millions of regular users, apps needing regular updates, apps with a more professional aesthetic, etc. The expense of Bubble\'s feature set is mitigated by the fact that most of its clientele consists of larger companies, not individuals or small teams looking to make a start-up application. In fact, most individuals or smaller teams could be overwhelmed by the plethora of options Bubble offers, and may be better suited with a simpler platform like Appypie. Bubble presents an accessible, high performance development platform with the potential for higher customization if the proper expertise and money is available.',
        },
        "VSCode": {
            rating: 0,
            ideal_proficiency: 5,
            user_friendliness: 1,
            cost: 1,
            time: 5,
            customization: 5,
            minimum_proficiency: 5,
            dndCharacter: 'Wizard',
            dndCharacterTraits: '"• Players who enjoy appearing intelligent • Offering knowledge on a variety of topics',
            finalDescription: 'You are a Wizard! As a wizard, you have knowledge about a variety of topics. Put your intelligence to use by creating a specialized application for your company\'s needs and goals. You can find your spellbook in the VSCode Application.',
            levelCode: 'Difficult, someone able to customize things a lot',
            platformDescription: 'VSCode\'s ideal developer has years of software development experience and aims to complete a highly detailed, large-scale project over a longer period of time. While VSCode offers a higher degree of customization to its users, it provides little assistance in the development or publication processes of building an application. This high barrier to entry is compensated by several benefits when compared to other platforms: VSCode is free to use, allows full control over one\'s data, and since code is traditionally saved on GitHub it is easier to see the history of one\'s work and revert to a previous version if necessary. This control is a common theme for VSCode: The downsides come in the form of increased time to create an app (compared to drag & drop platforms like Appypie) and the lack of support from VSCode itself; no customer service, publishing support, or data hosting will be provided. If a problem arises and the developer is stuck, VSCode will not offer any consulting services to assist; it\'s an IDE, not a company designed to help developers publish apps. Therefore, skilled developers with the time to prioritize the customization and cost of their app will find the most success with VSCode.',
        }
    };
}

// QUIZ RATING MANIPULATION
function rankPlatforms() {
    // @Uthara implement quiz logic
    // change the "rating" of each as users press buttons
    // return the platforms dict with updated ratings

    // yes or no questions
    var questionOne = document.getElementById("questionOneYes");
    questionOne.addEventListener("click", function qOneFunction() {
        platforms['Appypie']['rating'] += 3;
        // alert("3 has been added to appypie");
    });
    var questionTwo = document.getElementById("questionTwoYes");
    questionTwo.addEventListener("click", function qTwoFunction() {
        platforms["Appypie"]["rating"] += 3;
        // alert("3 has been added to appypie");
    });
    var questionThree = document.getElementById("questionThreeYes");
    questionThree.addEventListener("click", function qThreeFunction() {
        platforms["Appypie"]["rating"] += 3;
        platforms["Goodbarber"]["rating"] += 3;
        platforms["Shoutem"]["rating"] += 3;
        // alert("3 has been added to appypie, goodbarber, and shoutem");
    });
    var questionFour = document.getElementById("questionFourYes");
    questionFour.addEventListener("click", function qFourFunction() {
        platforms["Goodbarber"]["rating"] += 5;
        platforms["Shoutem"]["rating"] += 5;
        // alert("5 has been added to goodbarber, and shoutem");
    });

    // selection questions
    var sevenWebsite = document.getElementsById("website");
    sevenWebsite.addEventListener("click", function sevenWebsiteFunction() {
        platforms["Bubble"]["rating"] += 5;
        platforms["Appypie"]["rating"] += 5;
        platforms["Goodbarber"]["rating"] += 1;
    })
    var sevenApp = document.getElementsById("mobile app");
    sevenApp.addEventListener("click", function sevenAppFunction() {
        platforms["Shoutem"]["rating"] += 5;
        platforms["Appypie"]["rating"] += 5;
        platforms["Goodbarber"]["rating"] += 5;
    })
    var eightOne = document.getElementById("money one");
    eightOne.addEventListener("click", function eightOneFunction() {
        platforms["VSCode"]["rating"] += 3;
        platforms["Bubble"]["rating"] += 1;
        platforms["Goodbarber"]["rating"] -= 3;
        platforms["Appypie"]["rating"] -= 3;
        platforms["Shoutem"]["rating"] -= 3;

    })
    var eightTwo = document.getElementById("money two");
    eightOne.addEventListener("click", function eightTwoFunction() {
        platforms["Bubble"]["rating"] += 3;
        platforms["Goodbarber"]["rating"] += 3;
        platforms["Appypie"]["rating"] += 3;
        platforms["Shoutem"]["rating"] += 3;
    })
    var eightThree = document.getElementById("money three")
    eightThree.addEventListener("click", function eightThreeFunction() {
        platforms["Appypie"]["rating"] += 3;
        platforms["Shoutem"]["rating"] += 3;
        platforms["Bubble"]["rating"] += 3;
    })
    var eightFour = document.getElementById("money four");
    eightFour.addEventListener("click", function eightFourFunction() {
        platforms["Shoutem"]["rating"] += 3;
        platforms["Bubble"]["rating"] += 3;
    })
    var eightFive = document.getElementById("money five");
    eightFive.addEventListener("click", function eightFiveFunction() {
        platforms["Bubble"]["rating"] += 3;
    })

    // preference questions
    var cusRankingOne = document.getElementsById("one customization");
    cusRankingOne.addEventListener("click", function cusOneFunction() {
        for (let key in platforms) {
            if (platforms[key]["customization"] >= 3) {
                platforms[key]["rating"] += 3;
            }
        }
    })
    var buildRankingOne = document.getElementsById("one build time");
    buildRankingOne.addEventListener("click", function buildOneFunction() {
        for (let key in platforms) {
            if (platforms[key]["time"] <= 3) {
                platforms[key]["rating"] += 3;
            }
        }
    })
    var costRankingOne = document.getElementsById("one cost");
    costRankingOne.addEventListener("click", function costOneFunction() {
        for (let key in platforms) {
            if (platforms[key]["cost"] <= 3) {
                platforms[key]["rating"] += 3;
            }
        }
    })
    var userRankingOne = document.getElementsById("one user friendliness");
    userRankingOne.addEventListener("click", function userOneFunction() {
        for (let key in platforms) {
            if (platforms[key]["user_friendliness"] >= 3) {
                platforms[key]["rating"] += 3;
            }
        }
    })
    var cusRankingTwo = document.getElementsById("two customization");
    cusRankingTwo.addEventListener("click", function cusTwoFunction() {
        for (let key in platforms) {
            if (platforms[key]["customization"] >= 3) {
                platforms[key]["rating"] += 2;
            }
        }
    })
    var buildRankingTwo = document.getElementsById("two build time");
    buildRankingTwo.addEventListener("click", function buildTwoFunction() {
        for (let key in platforms) {
            if (platforms[key]["time"] <= 3) {
                platforms[key]["rating"] += 2;
            }
        }
    })
    var costRankingTwo = document.getElementsById("two cost");
    costRankingTwo.addEventListener("click", function costTwoFunction() {
        for (let key in platforms) {
            if (platforms[key]["cost"] <= 3) {
                platforms[key]["rating"] += 2;
            }
        }
    })
    var userRankingTwo = document.getElementsById("two user friendliness");
    userRankingTwo.addEventListener("click", function userTwoFunction() {
        for (let key in platforms) {
            if (platforms[key]["user_friendliness"] >= 3) {
                platforms[key]["rating"] += 2;
            }
        }
    })
    var cusRankingThree = document.getElementsById("three customization");
    cusRankingThree.addEventListener("click", function cusThreeFunction() {
        for (let key in platforms) {
            if (platforms[key]["customization"] >= 3) {
                platforms[key]["rating"] += 1;
            }
        }
    })
    var buildRankingThree = document.getElementsById("three build time");
    buildRankingThree.addEventListener("click", function buildThreeFunction() {
        for (let key in platforms) {
            if (platforms[key]["time"] <= 3) {
                platforms[key]["rating"] += 1;
            }
        }
    })
    var costRankingThree = document.getElementsById("three cost");
    costRankingThree.addEventListener("click", function costThreeFunction() {
        for (let key in platforms) {
            if (platforms[key]["cost"] <= 3) {
                platforms[key]["rating"] += 1;
            }
        }
    })
    var userRankingThree = document.getElementsById("three user friendliness");
    userRankingThree.addEventListener("click", function userThreeFunction() {
        for (let key in platforms) {
            if (platforms[key]["user_friendliness"] >= 3) {
                platforms[key]["rating"] += 1;
            }
        }
    })
}

rankPlatforms();

// SORTING RATINGS
function sort_object(obj) {
    items = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
    items.sort(function (first, second) {
        return second[1] - first[1];
    });
    sorted_obj = {}
    items.forEach(function (v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return (sorted_obj)
}

function orderRankedPlatforms() {
    var unrankedPlatforms = platforms
    var rankedPlatforms = [];
    var plats = Object.keys(unrankedPlatforms);
    dict = {}
    for (const [key, value] of Object.entries(unrankedPlatforms)) {
        dict[key] = value["rating"]
    }
    rankedPlatforms = sort_object(dict)
    return rankedPlatforms
}

// SHARING TO SOCIAL MEDIA

// Function to open Twitter share popup
function tweet() {
    // text to share on Twitter
    var textForSharing = "I am a " + results[1][Object.keys(results[0])[0]]['dndCharacter'] + ", recommended app builders like " + Object.keys(results[0])[0] + "! Find out which app development platform fits your personality & skillset! #DataStorytelling\n\nTake the quiz: https://devonmcguinness.com/";
    const tweetUrl = "https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)};";
    window.open(tweetUrl, "_blank");
};

// Function to share on Facebook
function shareOnFacebook() {
    // Check if the code is running on a secure environment (HTTPS)
    if (location.protocol !== 'https:') {
        // alert("Facebook sharing requires a secure (HTTPS) environment.");
        return;
    }

    // text to share on FB
    var textForSharing = "I am a " + results[1][Object.keys(results[0])[0]]['dndCharacter'] + ", recommended app builders like " + Object.keys(results[0])[0] + "! Find out which app development platform fits your personality & skillset! #DataStorytelling\n\nTake the quiz: https://devonmcguinness.com/";

    // Use the Facebook Share Dialog
    FB.ui({
        method: 'share',
        href: 'https://devonmcguinness.com/',
        quote: textForSharing
    }, function (response) {
        // Optional callback function after sharing is complete
    });
};

// SUBMITTING QUIZ & DISPLAYING RESULTS
function retakeQuiz() {
    results = [];
    createPlatforms()
    location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayResults(rankedPlatforms) {
    // Aidan
    topPlatform = Object.keys(rankedPlatforms[0])[0];
    document.querySelector('.platform-name').innerHTML = topPlatform;
    document.querySelector('.large-image').src = 'assets/avatars/' + rankedPlatforms[1][topPlatform]['dndCharacter'] + '.png'
    document.querySelector('.dnd-name').innerHTML = rankedPlatforms[1][topPlatform]['dndCharacter'];
    document.querySelector('.dnd-description').innerHTML = rankedPlatforms[1][topPlatform]['finalDescription'];
    document.querySelector('.results-rating').innerHTML = rankedPlatforms[1][topPlatform]['rating'];
    document.querySelector('.platform-icon').src = 'assets/platform_logo/' + topPlatform + '.png'
    document.querySelector('.platform-description').innerHTML = rankedPlatforms[1][topPlatform]['platformDescription'];
}

// SUBMIT QUIZ

function submitQuiz() {
    const targetDiv = document.getElementById("questionsPage");
    const newDiv = document.getElementById("resultsPage");
    const submitBtn = document.getElementById("submit");

    // changing displays from quiz to results
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        newDiv.style.display = "block";
    } else {
        targetDiv.style.display = "block";
        newDiv.style.display = "none";
    }

    // displaying results
    var results = [orderRankedPlatforms(platforms), platforms]
    displayResults(results);
}