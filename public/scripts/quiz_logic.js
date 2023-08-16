// PLATFORMS DATA -> ideally would like to put this into a DB
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
        platformDescription: 'Shoutem is perfect for you because you Shoutem balances the factors of user friendliness, cost, and customization. There is no coding requirement. There is an option for an HTML plugin, so if one has some coding experience, the option is there for further customization. Shoutem and Goodbarber both offer contact lines with highly rated customer service teams to walk you through building the app. With both platforms, infrastructure for the app is already in place, which means you do not need to be an IT wiz to run your app. This infrastructure also allows your application to be created fairly quickly and easily, though for someone less tech-savvy things could move a bit slower.',
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
        platformDescription: 'GoodBarber is perfect for your company because your company desires a platform that is very user friendly. You’re fine with spending a moderate amount of time and money on the platform. Shoutem and Goodbarber both offer contact lines with highly rated customer service teams to walk you through building the app. With both platforms, infrastructure for the app is already in place, which means you do not need to be an IT wiz to run your app. This infrastructure also allows your application to be created fairly quickly and easily, though for someone less tech-savvy things could move a bit slower.',
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

// Rank variables
let plain = 'white';
let active = 'rgb(214, 30, 92)';
let nblack = '#2e2d28';

// Add-ons
var recAppsheets = false;
var recPowerApps = false;

// preparing backgrounds for rankPlatforms()
function setBackgrounds() {

    document.getElementById("questionOneYes").style.backgroundColor = plain;
    document.getElementById("questionOneNo").style.backgroundColor = plain;

    document.getElementById("questionTwoYes").style.backgroundColor = plain;
    document.getElementById("questionTwoNo").style.backgroundColor = plain;

    document.getElementById("questionThreeYes").style.backgroundColor = plain;
    document.getElementById("questionThreeNo").style.backgroundColor = plain;

    document.getElementById("questionFourYes").style.backgroundColor = plain;
    document.getElementById("questionFourNo").style.backgroundColor = plain;

    document.getElementById("data-one").style.backgroundColor = plain;
    document.getElementById("data-two").style.backgroundColor = plain;
    document.getElementById("data-three").style.backgroundColor = plain;
    document.getElementById("data-four").style.backgroundColor = plain;

    document.getElementById("website").style.backgroundColor = plain;
    document.getElementById("mobile-app").style.backgroundColor = plain;

    document.getElementById("money-one").style.backgroundColor = plain;
    document.getElementById("money-two").style.backgroundColor = plain;
    document.getElementById("money-three").style.backgroundColor = plain;
    document.getElementById("money-four").style.backgroundColor = plain;
    document.getElementById("money-five").style.backgroundColor = plain;

    document.getElementById("one-customization").style.backgroundColor = plain;
    document.getElementById("one-time").style.backgroundColor = plain;
    document.getElementById("one-cost").style.backgroundColor = plain;
    document.getElementById("one-ux").style.backgroundColor = plain;

    document.getElementById("two-customization").style.backgroundColor = plain;
    document.getElementById("two-time").style.backgroundColor = plain;
    document.getElementById("two-cost").style.backgroundColor = plain;
    document.getElementById("two-ux").style.backgroundColor = plain;

    document.getElementById("three-customization").style.backgroundColor = plain;
    document.getElementById("three-time").style.backgroundColor = plain;
    document.getElementById("three-cost").style.backgroundColor = plain;
    document.getElementById("three-ux").style.backgroundColor = plain;
}

setBackgrounds();

// QUIZ RATING MANIPULATION
function rankPlatforms() {
    // yes or no questions

    // Q1
    // Q1 yes
    document.getElementById("questionOneYes").addEventListener("click", function () {
        // first selection AND switching from no to yes
        console.log(document.getElementById("questionOneYes").style.backgroundColor)
        if (document.getElementById("questionOneYes").style.backgroundColor === plain) {

            platforms['Appypie']['rating'] += 3;

            document.getElementById("questionOneYes").style.backgroundColor = active;
            document.getElementById("questionOneYes").style.color = plain;

            document.getElementById("questionOneNo").style.backgroundColor = plain;
            document.getElementById("questionOneNo").style.color = nblack;
        }
    });
    // Q1 no
    document.getElementById("questionOneNo").addEventListener("click", function () {
        // first selection
        if (document.getElementById("questionOneNo").style.backgroundColor === plain) {
            // switching from yes to no
            console.log(document.getElementById("questionOneYes").style.backgroundColor);
            console.log(active);

            if (document.getElementById("questionOneYes").style.backgroundColor === active) {
                platforms['Appypie']['rating'] -= 3;
            }

            document.getElementById("questionOneNo").style.backgroundColor = active;
            document.getElementById("questionOneNo").style.color = plain;

            document.getElementById("questionOneYes").style.backgroundColor = plain;
            document.getElementById("questionOneYes").style.color = nblack;
        }
    });


    // Q2
    // Q2 yes
    document.getElementById("questionTwoYes").addEventListener("click", function () {
        // first selection AND switching from no to yes
        console.log(document.getElementById("questionTwoYes").style.backgroundColor)
        if (document.getElementById("questionTwoYes").style.backgroundColor === plain) {

            platforms['Appypie']['rating'] += 3;

            document.getElementById("questionTwoYes").style.backgroundColor = active;
            document.getElementById("questionTwoYes").style.color = plain;

            document.getElementById("questionTwoNo").style.backgroundColor = plain;
            document.getElementById("questionTwoNo").style.color = nblack;
        }
    });
    // Q2 no
    document.getElementById("questionTwoNo").addEventListener("click", function () {
        // first selection
        if (document.getElementById("questionTwoNo").style.backgroundColor === plain) {
            // switching from yes to no
            if (document.getElementById("questionTwoYes").style.backgroundColor === active) {

                platforms['Appypie']['rating'] -= 3;

                document.getElementById("questionTwoYes").style.backgroundColor = plain;
                document.getElementById("questionTwoYes").style.color = nblack;
            }

            document.getElementById("questionTwoNo").style.backgroundColor = active;
            document.getElementById("questionTwoNo").style.color = plain;
        }
    });

    // Q3
    // Q3 yes
    document.getElementById("questionThreeYes").addEventListener("click", function () {
        // first selection AND switching from no to yes
        console.log(document.getElementById("questionThreeYes").style.backgroundColor)
        if (document.getElementById("questionThreeYes").style.backgroundColor === plain) {

            platforms["Appypie"]["rating"] += 3;
            platforms["Goodbarber"]["rating"] += 3;
            platforms["Shoutem"]["rating"] += 3;

            document.getElementById("questionThreeYes").style.backgroundColor = active;
            document.getElementById("questionThreeYes").style.color = plain;

            document.getElementById("questionThreeNo").style.backgroundColor = plain;
            document.getElementById("questionThreeNo").style.color = nblack;
        }
    });
    // Q3 no
    document.getElementById("questionThreeNo").addEventListener("click", function () {
        // first selection
        if (document.getElementById("questionThreeNo").style.backgroundColor === plain) {
            // switching from yes to no
            if (document.getElementById("questionThreeYes").style.backgroundColor === active) {

                platforms["Appypie"]["rating"] -= 3;
                platforms["Goodbarber"]["rating"] -= 3;
                platforms["Shoutem"]["rating"] -= 3;

                document.getElementById("questionThreeYes").style.backgroundColor = plain;
                document.getElementById("questionThreeYes").style.color = nblack;
            }

            document.getElementById("questionThreeNo").style.backgroundColor = active;
            document.getElementById("questionThreeNo").style.color = plain;
        }
    });

    // Q4
    // Q4 yes
    document.getElementById("questionFourYes").addEventListener("click", function () {
        // first selection AND switching from no to yes
        console.log(document.getElementById("questionFourYes").style.backgroundColor)
        if (document.getElementById("questionFourYes").style.backgroundColor === plain) {

            platforms["Goodbarber"]["rating"] += 5;
            platforms["Shoutem"]["rating"] += 5;

            document.getElementById("questionFourYes").style.backgroundColor = active;
            document.getElementById("questionFourYes").style.color = plain;

            document.getElementById("questionFourNo").style.backgroundColor = plain;
            document.getElementById("questionFourNo").style.color = nblack;
        }
    });
    // Q4 no
    document.getElementById("questionFourNo").addEventListener("click", function () {
        // first selection
        if (document.getElementById("questionFourNo").style.backgroundColor === plain) {
            // switching from yes to no
            if (document.getElementById("questionFourYes").style.backgroundColor === active) {

                platforms["Goodbarber"]["rating"] -= 5;
                platforms["Shoutem"]["rating"] -= 5;

                document.getElementById("questionFourYes").style.backgroundColor = plain;
                document.getElementById("questionFourYes").style.color = nblack;
            }

            document.getElementById("questionFourNo").style.backgroundColor = active;
            document.getElementById("questionFourNo").style.color = plain;
        }
    });

    // selection questions
    // Q6
    document.getElementById("data-one").addEventListener("click", function () {
        if (document.getElementById("data-one").style.backgroundColor === plain) {

            document.getElementById("data-one").style.backgroundColor = active;
            document.getElementById("data-one").style.color = plain;

            recAppsheets = false;
            recPowerApps = false;

            document.getElementById("data-two").style.backgroundColor = plain;
            document.getElementById("data-two").style.color = nblack;

            document.getElementById("data-three").style.backgroundColor = plain;
            document.getElementById("data-three").style.color = nblack;

            document.getElementById("data-four").style.backgroundColor = plain;
            document.getElementById("data-four").style.color = nblack;

        }
    });

    document.getElementById("data-two").addEventListener("click", function () {
        if (document.getElementById("data-two").style.backgroundColor === plain) {

            document.getElementById("data-two").style.backgroundColor = active;
            document.getElementById("data-two").style.color = plain;

            recAppsheets = true;
            recPowerApps = false;

            document.getElementById("data-one").style.backgroundColor = plain;
            document.getElementById("data-one").style.color = nblack;

            document.getElementById("data-three").style.backgroundColor = plain;
            document.getElementById("data-three").style.color = nblack;

            document.getElementById("data-four").style.backgroundColor = plain;
            document.getElementById("data-four").style.color = nblack;

        }
    });

    document.getElementById("data-three").addEventListener("click", function () {
        if (document.getElementById("data-three").style.backgroundColor === plain) {

            document.getElementById("data-three").style.backgroundColor = active;
            document.getElementById("data-three").style.color = plain;

            recAppsheets = false;
            recPowerApps = true;

            document.getElementById("data-two").style.backgroundColor = plain;
            document.getElementById("data-two").style.color = nblack;

            document.getElementById("data-one").style.backgroundColor = plain;
            document.getElementById("data-one").style.color = nblack;

            document.getElementById("data-four").style.backgroundColor = plain;
            document.getElementById("data-four").style.color = nblack;

        }
    });

    document.getElementById("data-four").addEventListener("click", function () {
        // first selection
        if (document.getElementById("data-four").style.backgroundColor === plain) {

            document.getElementById("data-four").style.backgroundColor = active;
            document.getElementById("data-four").style.color = plain;

            recAppsheets = false;
            recPowerApps = false;

            document.getElementById("data-two").style.backgroundColor = plain;
            document.getElementById("data-two").style.color = nblack;

            document.getElementById("data-three").style.backgroundColor = plain;
            document.getElementById("data-three").style.color = nblack;

            document.getElementById("data-one").style.backgroundColor = plain;
            document.getElementById("data-one").style.color = nblack;

        }
    });

    // Q7
    document.getElementById("website").addEventListener("click", function () {
        if (document.getElementById("website").style.backgroundColor === plain) {
            platforms["Bubble"]["rating"] += 5;
            platforms["Appypie"]["rating"] += 5;
            platforms["Goodbarber"]["rating"] += 1;

            // switching
            if (document.getElementById("mobile-app").style.backgroundColor === active) {
                document.getElementById("mobile-app").style.backgroundColor = plain;
                document.getElementById("mobile-app").style.color = nblack;

                platforms["Shoutem"]["rating"] -= 5;
                platforms["Appypie"]["rating"] -= 5;
                platforms["Goodbarber"]["rating"] -= 5;
            }

            document.getElementById("website").style.backgroundColor = active;
            document.getElementById("website").style.color = plain;
        }
    });
    document.getElementById("mobile-app").addEventListener("click", function () {
        if (document.getElementById("mobile-app").style.backgroundColor === plain) {
            platforms["Shoutem"]["rating"] += 5;
            platforms["Appypie"]["rating"] += 5;
            platforms["Goodbarber"]["rating"] += 5;

            // switching
            if (document.getElementById("website").style.backgroundColor === active) {
                document.getElementById("website").style.backgroundColor = plain;
                document.getElementById("website").style.color = nblack;

                platforms["Bubble"]["rating"] -= 5;
                platforms["Appypie"]["rating"] -= 5;
                platforms["Goodbarber"]["rating"] -= 1;
            }

            document.getElementById("mobile-app").style.backgroundColor = active;
            document.getElementById("mobile-app").style.color = plain;
        }
    });


    // Q8
    document.getElementById("money-one").addEventListener("click", function () {
        if (document.getElementById("money-one").style.backgroundColor === plain) {

            document.getElementById("money-one").style.backgroundColor = active;
            document.getElementById("money-one").style.color = plain;

            platforms["VSCode"]["rating"] += 3;
            platforms["Bubble"]["rating"] += 1;
            platforms["Goodbarber"]["rating"] -= 3;
            platforms["Appypie"]["rating"] -= 3;
            platforms["Shoutem"]["rating"] -= 3;

            document.getElementById("money-two").style.backgroundColor = plain;
            document.getElementById("money-two").style.color = nblack;

            document.getElementById("money-three").style.backgroundColor = plain;
            document.getElementById("money-three").style.color = nblack;

            document.getElementById("money-four").style.backgroundColor = plain;
            document.getElementById("money-four").style.color = nblack;

            document.getElementById("money-five").style.backgroundColor = plain;
            document.getElementById("money-five").style.color = nblack;
        }
    });

    document.getElementById("money-two").addEventListener("click", function () {
        if (document.getElementById("money-two").style.backgroundColor === plain) {

            document.getElementById("money-two").style.backgroundColor = active;
            document.getElementById("money-two").style.color = plain;

            platforms["Bubble"]["rating"] += 3;
            platforms["Goodbarber"]["rating"] += 3;
            platforms["Appypie"]["rating"] += 3;
            platforms["Shoutem"]["rating"] += 3;

            document.getElementById("money-one").style.backgroundColor = plain;
            document.getElementById("money-one").style.color = nblack;

            document.getElementById("money-three").style.backgroundColor = plain;
            document.getElementById("money-three").style.color = nblack;

            document.getElementById("money-four").style.backgroundColor = plain;
            document.getElementById("money-four").style.color = nblack;

            document.getElementById("money-five").style.backgroundColor = plain;
            document.getElementById("money-five").style.color = nblack;
        }
    });

    document.getElementById("money-three").addEventListener("click", function () {
        if (document.getElementById("money-three").style.backgroundColor === plain) {

            document.getElementById("money-three").style.backgroundColor = active;
            document.getElementById("money-three").style.color = plain;

            platforms["Appypie"]["rating"] += 3;
            platforms["Shoutem"]["rating"] += 3;
            platforms["Bubble"]["rating"] += 3;

            document.getElementById("money-two").style.backgroundColor = plain;
            document.getElementById("money-two").style.color = nblack;

            document.getElementById("money-one").style.backgroundColor = plain;
            document.getElementById("money-one").style.color = nblack;

            document.getElementById("money-four").style.backgroundColor = plain;
            document.getElementById("money-four").style.color = nblack;

            document.getElementById("money-five").style.backgroundColor = plain;
            document.getElementById("money-five").style.color = nblack;

        }
    });

    document.getElementById("money-four").addEventListener("click", function () {
        if (document.getElementById("money-four").style.backgroundColor === plain) {

            document.getElementById("money-four").style.backgroundColor = active;
            document.getElementById("money-four").style.color = plain;

            recAppsheets = false;
            recPowerApps = false;

            document.getElementById("money-two").style.backgroundColor = plain;
            document.getElementById("money-two").style.color = nblack;

            document.getElementById("money-three").style.backgroundColor = plain;
            document.getElementById("money-three").style.color = nblack;

            document.getElementById("money-one").style.backgroundColor = plain;
            document.getElementById("money-one").style.color = nblack;

            document.getElementById("money-five").style.backgroundColor = plain;
            document.getElementById("money-five").style.color = nblack;

        }
    });

    document.getElementById("money-five").addEventListener("click", function () {
        if (document.getElementById("money-five").style.backgroundColor === plain) {

            document.getElementById("money-five").style.backgroundColor = active;
            document.getElementById("money-five").style.color = plain;

            platforms["Bubble"]["rating"] += 3;

            document.getElementById("money-two").style.backgroundColor = plain;
            document.getElementById("money-two").style.color = nblack;

            document.getElementById("money-three").style.backgroundColor = plain;
            document.getElementById("money-three").style.color = nblack;

            document.getElementById("money-four").style.backgroundColor = plain;
            document.getElementById("money-four").style.color = nblack;

            document.getElementById("money-one").style.backgroundColor = plain;
            document.getElementById("money-one").style.color = nblack;
        }
    });

    // preference questions
    // top priority
    document.getElementById("one-customization").addEventListener("click", function () {
        if (document.getElementById("one-customization").style.backgroundColor === plain) {

            document.getElementById("one-customization").style.backgroundColor = active;
            document.getElementById("one-customization").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["customization"] >= 3) {
                    platforms[key]["rating"] += 3;
                }
            }

            document.getElementById("one-time").style.backgroundColor = plain;
            document.getElementById("one-time").style.color = nblack;

            document.getElementById("one-cost").style.backgroundColor = plain;
            document.getElementById("one-cost").style.color = nblack;

            document.getElementById("one-ux").style.backgroundColor = plain;
            document.getElementById("one-ux").style.color = nblack;

        }
    });

    document.getElementById("one-time").addEventListener("click", function () {
        if (document.getElementById("one-time").style.backgroundColor === plain) {

            document.getElementById("one-time").style.backgroundColor = active;
            document.getElementById("one-time").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["time"] <= 3) {
                    platforms[key]["rating"] += 3;
                }
            }

            document.getElementById("one-customization").style.backgroundColor = plain;
            document.getElementById("one-customization").style.color = nblack;

            document.getElementById("one-cost").style.backgroundColor = plain;
            document.getElementById("one-cost").style.color = nblack;

            document.getElementById("one-ux").style.backgroundColor = plain;
            document.getElementById("one-ux").style.color = nblack;

        }
    });

    document.getElementById("one-cost").addEventListener("click", function () {
        if (document.getElementById("one-cost").style.backgroundColor === plain) {

            document.getElementById("one-cost").style.backgroundColor = active;
            document.getElementById("one-cost").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["cost"] <= 3) {
                    platforms[key]["rating"] += 3;
                }
            }

            document.getElementById("one-time").style.backgroundColor = plain;
            document.getElementById("one-time").style.color = nblack;

            document.getElementById("one-customization").style.backgroundColor = plain;
            document.getElementById("one-customization").style.color = nblack;

            document.getElementById("one-ux").style.backgroundColor = plain;
            document.getElementById("one-ux").style.color = nblack;

        }
    });

    document.getElementById("one-ux").addEventListener("click", function () {
        if (document.getElementById("one-ux").style.backgroundColor === plain) {

            document.getElementById("one-ux").style.backgroundColor = active;
            document.getElementById("one-ux").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["user_friendliness"] >= 3) {
                    platforms[key]["rating"] += 3;
                }
            }

            document.getElementById("one-time").style.backgroundColor = plain;
            document.getElementById("one-time").style.color = nblack;

            document.getElementById("one-cost").style.backgroundColor = plain;
            document.getElementById("one-cost").style.color = nblack;

            document.getElementById("one-customization").style.backgroundColor = plain;
            document.getElementById("one-customization").style.color = nblack;
        }
    });

    // 2nd priority
    document.getElementById("two-customization").addEventListener("click", function () {
        if (document.getElementById("two-customization").style.backgroundColor === plain) {

            document.getElementById("two-customization").style.backgroundColor = active;
            document.getElementById("two-customization").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["customization"] >= 3) {
                    platforms[key]["rating"] += 2;
                }
            }

            document.getElementById("two-time").style.backgroundColor = plain;
            document.getElementById("two-time").style.color = nblack;

            document.getElementById("two-cost").style.backgroundColor = plain;
            document.getElementById("two-cost").style.color = nblack;

            document.getElementById("two-ux").style.backgroundColor = plain;
            document.getElementById("two-ux").style.color = nblack;

        }
    });

    document.getElementById("two-time").addEventListener("click", function () {
        if (document.getElementById("two-time").style.backgroundColor === plain) {

            document.getElementById("two-time").style.backgroundColor = active;
            document.getElementById("two-time").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["time"] <= 3) {
                    platforms[key]["rating"] += 2;
                }
            }

            document.getElementById("two-customization").style.backgroundColor = plain;
            document.getElementById("two-customization").style.color = nblack;

            document.getElementById("two-cost").style.backgroundColor = plain;
            document.getElementById("two-cost").style.color = nblack;

            document.getElementById("two-ux").style.backgroundColor = plain;
            document.getElementById("two-ux").style.color = nblack;

        }
    });

    document.getElementById("two-cost").addEventListener("click", function () {
        if (document.getElementById("two-cost").style.backgroundColor === plain) {

            document.getElementById("two-cost").style.backgroundColor = active;
            document.getElementById("two-cost").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["cost"] <= 3) {
                    platforms[key]["rating"] += 2;
                }
            }

            document.getElementById("two-time").style.backgroundColor = plain;
            document.getElementById("two-time").style.color = nblack;

            document.getElementById("two-customization").style.backgroundColor = plain;
            document.getElementById("two-customization").style.color = nblack;

            document.getElementById("two-ux").style.backgroundColor = plain;
            document.getElementById("two-ux").style.color = nblack;

        }
    });

    document.getElementById("two-ux").addEventListener("click", function () {
        if (document.getElementById("two-ux").style.backgroundColor === plain) {

            document.getElementById("two-ux").style.backgroundColor = active;
            document.getElementById("two-ux").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["user_friendliness"] >= 3) {
                    platforms[key]["rating"] += 2;
                }
            }

            document.getElementById("two-time").style.backgroundColor = plain;
            document.getElementById("two-time").style.color = nblack;

            document.getElementById("two-cost").style.backgroundColor = plain;
            document.getElementById("two-cost").style.color = nblack;

            document.getElementById("two-customization").style.backgroundColor = plain;
            document.getElementById("two-customization").style.color = nblack;
        }
    });

    // 3rd priority
    document.getElementById("three-customization").addEventListener("click", function () {
        if (document.getElementById("three-customization").style.backgroundColor === plain) {

            document.getElementById("three-customization").style.backgroundColor = active;
            document.getElementById("three-customization").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["customization"] >= 3) {
                    platforms[key]["rating"] += 1;
                }
            }

            document.getElementById("three-time").style.backgroundColor = plain;
            document.getElementById("three-time").style.color = nblack;

            document.getElementById("three-cost").style.backgroundColor = plain;
            document.getElementById("three-cost").style.color = nblack;

            document.getElementById("three-ux").style.backgroundColor = plain;
            document.getElementById("three-ux").style.color = nblack;

        }
    });

    document.getElementById("three-time").addEventListener("click", function () {
        if (document.getElementById("three-time").style.backgroundColor === plain) {

            document.getElementById("three-time").style.backgroundColor = active;
            document.getElementById("three-time").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["time"] <= 3) {
                    platforms[key]["rating"] += 1;
                }
            }

            document.getElementById("three-customization").style.backgroundColor = plain;
            document.getElementById("three-customization").style.color = nblack;

            document.getElementById("three-cost").style.backgroundColor = plain;
            document.getElementById("three-cost").style.color = nblack;

            document.getElementById("three-ux").style.backgroundColor = plain;
            document.getElementById("three-ux").style.color = nblack;

        }
    });

    document.getElementById("three-cost").addEventListener("click", function () {
        if (document.getElementById("three-cost").style.backgroundColor === plain) {

            document.getElementById("three-cost").style.backgroundColor = active;
            document.getElementById("three-cost").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["cost"] <= 3) {
                    platforms[key]["rating"] += 1;
                }
            }

            document.getElementById("three-time").style.backgroundColor = plain;
            document.getElementById("three-time").style.color = nblack;

            document.getElementById("three-customization").style.backgroundColor = plain;
            document.getElementById("three-customization").style.color = nblack;

            document.getElementById("three-ux").style.backgroundColor = plain;
            document.getElementById("three-ux").style.color = nblack;

        }
    });

    document.getElementById("three-ux").addEventListener("click", function () {
        if (document.getElementById("three-ux").style.backgroundColor === plain) {

            document.getElementById("three-ux").style.backgroundColor = active;
            document.getElementById("three-ux").style.color = plain;

            for (let key in platforms) {
                if (platforms[key]["user_friendliness"] >= 3) {
                    platforms[key]["rating"] += 1;
                }
            }

            document.getElementById("three-time").style.backgroundColor = plain;
            document.getElementById("three-time").style.color = nblack;

            document.getElementById("three-cost").style.backgroundColor = plain;
            document.getElementById("three-cost").style.color = nblack;

            document.getElementById("three-customization").style.backgroundColor = plain;
            document.getElementById("three-customization").style.color = nblack;
        }
    });
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
    topPlatform = Object.keys(rankedPlatforms[0])[0];

    // BAR GRAPH
    var barPlatforms = [];
    dict = {}
    for (const [key, value] of Object.entries(platforms)) {
        dict[key] = value["rating"]
    }
    barPlatforms = sort_object(dict);
    let first = barPlatforms[Object.keys(barPlatforms)[0]];
    let second = barPlatforms[Object.keys(barPlatforms)[1]];
    let third = barPlatforms[Object.keys(barPlatforms)[2]];
    let fourth = barPlatforms[Object.keys(barPlatforms)[3]];
    let fifth = barPlatforms[Object.keys(barPlatforms)[4]];
    let firstName = Object.keys(barPlatforms)[0];
    let secondName = Object.keys(barPlatforms)[1];
    let thirdName = Object.keys(barPlatforms)[2];
    let fourthName = Object.keys(barPlatforms)[3];
    let fifthName = Object.keys(barPlatforms)[4];
    const data = {
        labels: [firstName, secondName, thirdName, fourthName, fifthName],
        datasets: [{
            label: '',
            data: [(first / first) * 100, Math.round((second / first) * 100), Math.round((third / first) * 100), Math.round((fourth / first) * 100), Math.round((fifth / first) * 100)],
            barThickness: 30,
            borderWidth: 0.5,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
            minBarLength: 120,
            image: [
                document.querySelector('.platform-icon').src = 'assets/platform_logo/' + [Object.keys(barPlatforms)[0]] + '.png'
                , document.querySelector('.platform-icon').src = 'assets/platform_logo/' + [Object.keys(barPlatforms)[1]] + '.png'
                , document.querySelector('.platform-icon').src = 'assets/platform_logo/' + [Object.keys(barPlatforms)[2]] + '.png'
                , document.querySelector('.platform-icon').src = 'assets/platform_logo/' + [Object.keys(barPlatforms)[3]] + '.png'
                , document.querySelector('.platform-icon').src = 'assets/platform_logo/' + [Object.keys(barPlatforms)[4]] + '.png'
            ],
            backgroundColor: [
                "rgba(214,30,92)", "rgba(214,30,92)", "rgba(214,30,92)", "rgba(214,30,92)", "rgba(214,30,92)"
            ],
            datalabels: {
                color: 'white',
                anchor: 'end',
                align: 'left',
                font: 'Montserrat',
                fontSize: '30px',
            }
        }]
    };
    const imageItems = {
        id: 'imageItems',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, scales: { x, y } } = chart;
            ctx.save();
            const imageSize = options.layout.padding.left;
            data.datasets[0].image.forEach((imageLink, index) => {
                const logo = new Image();
                logo.src = imageLink;
                ctx.drawImage(logo, 20, y.getPixelForValue(index)+20 - imageSize / 2, imageSize*(1/2), imageSize*(1/2))

            })

        }
    }
      const firstLabel = {
        id: 'firstLabel',
        afterDatasetDraw(chart, args, plugins){
            console.log(chart)
            const {ctx, chartArea: {top}, scales: {x,y}} = 
            chart;
            for(let i=0;i<5; i++){
                const xPosition = 120;
                const yPosition = y.getPixelForValue(i)+3;
                ctx.save();
                ctx.fillStyle = 'white';
                ctx.font = 'bolder 14px Montserrat';
                ctx.fillText(data.labels[i], xPosition, yPosition)
            }
        }
      }
    // config 
    const config = {
        type: 'bar',
        data,
        plugins: [ChartDataLabels, imageItems, firstLabel],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 100,
                    right: 10
                }
            },
            plugins: {
                tooltip: {
                    titleFont: 'Montserrat',
                    displayColors: false,
                    callbacks: {
                        title: function (context) {
                            console.log();
                            return;
                        },
                    }
                },
                legend: {
                    display: false
                }
            },
            indexAxis: 'y',
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display:false,
                    // original y-axis labbels
                    // grid: {
                    //     drawOnChartArea: false,
                    //     drawTicks: false,
                    //     display: false
                    // },
                    // ticks: {
                    //     display: true,
                    //     font: {
                    //         family: 'Montserrat',
                    //         size: 20,
                        }
                    }
                },
            }
    //     },
    // };

    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    maxScale(myChart)
    function maxScale(chart) {
        console.log(chart.scales.x.end);
        if (chart.scales.x.end >= first) {
            chart.config.options.scales.x.grace = 0;
            chart.update();
        }
    }

    // populating HTML elements
    document.querySelector('.platform-name').innerHTML = topPlatform;
    document.querySelector('.large-image').src = 'assets/Avatars/' + rankedPlatforms[1][topPlatform]['dndCharacter'].toLowerCase() + '.png'
    document.querySelector('.dnd-name').innerHTML = rankedPlatforms[1][topPlatform]['dndCharacter'];
    document.querySelector('.dnd-description').innerHTML = rankedPlatforms[1][topPlatform]['finalDescription'];
    // document.querySelector('.results-rating').innerHTML = rankedPlatforms[1][topPlatform]['rating'];
    const topLogoURL = 'assets/platform_logo/' + String(topPlatform) + '.png';
    document.querySelector('.platform-icon').src = 'assets/platform_logo/' + String(topPlatform) + '.png';
    document.querySelector('.platform-description').innerHTML = rankedPlatforms[1][topPlatform]['platformDescription'];

    // add-ons
    if (recAppsheets == true) {
        document.querySelector('.additional-rec').innerHTML = "We also recommend AppSheet for Google Drive integration!"

    }
    else if (recPowerApps == true) {
        document.querySelector('.additional-rec').innerHTML = "We also recommend PowerApps for Microsoft integration!"
    }

}

function retakeQuiz() {
    results = [];
    location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function quizLogic() {
    // changed
    return orderRankedPlatforms(rankPlatforms(platforms));
}

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
