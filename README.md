
# mbs_data_storytelling

<table>
<tr>
<td>
A quiz made to be implemented into Devon McGuinness' wesbite. Users can take the quiz by answering yes or no questions and have their results displayed in the end. The quiz is used to find out what no-code platform is best suited for them.
</td>
</tr>
</table>

![](https://github.com/aidanandrucyk/mbs_data_storytelling/blob/main/assets/ezgif.com-crop.gif)

## Quiz Logic Explanation:

Explanations for the quiz logic can be found on our [Quiz Logic Documentation](https://docs.google.com/document/d/1Vg9u90q4_qkNhzvl3R_821J7QjYMaAssX50YsxEbuxs/edit?usp=sharing) and [2022 Research](https://docs.google.com/document/d/1SP6esbi5cwugqKMzAqEd4ydZVKJx2WZv/edit?usp=sharing&ouid=106331700266022311408&rtpof=true&sd=true).

## Node 
Code is currently run using Node.js. In order to run the code locally, go to the terminal and type node server.js. This will run the server. Then, go to chrome/safari and type localhost:2525 and it will show you how the platform currently looks. More detailed info in handoff presentation slide 30.

## File Structure: 

data/appDevToolRatings.csv is our dataset handed over to us by a previous extern team.

original_java_code is the Java code handed over to us by a previous extern team. This code was semi-functional and not able to intergrate well into a website.

assets/ contain all images used to populate the website.

quiz_logic.js is our JavaScript code to make the quiz functional, display differing results, and send users their results.

server.js is our Javascript code for the server-side setup of code that sends the client an email of their results. More information can be found in hand-off slides 28+29

index.html is our primary markup document to fill and structure our website.

public/style.css is our primary design document that was based on Figma Prototypes provided by Elo, Gemma, & and Tonai.

[landing.css](landing.css) and [landing.html](landing.html) are the exported prototypes from Figma.

data/appDevToolRatings.csv is the data set detailing the app builders and their respective features.

## Data Set:

data/appDevToolRatings.csv reasoning derived from the research performed by the [Summer 2022 Externship Team](https://docs.google.com/document/d/1SP6esbi5cwugqKMzAqEd4ydZVKJx2WZv/edit).

## Built with:
- [chart.js](https://www.chartjs.org/docs/4.3.3/) - Library with multiple, customizable, built-in charts.
- [chartjs-plugin](https://chartjs-plugin-datalabels.netlify.app/) - Plugin with features to make charts more customizable.

## Recommendations
- Add more app builders (especially web app builders) in data set
- Draw data set from a database or reading from updatable source 
- Account for adding app builders to data set
- Better tie-breaking mechanism
- Flesh out “add-on” platform recommendations 
- Better integration of quiz within website

## Team
 - Aidan Andrucyk
 - Elo Hernandez
 - Ge (Gemma) Gao
 - Tonai Crockett
 - Ji Wu
 - Uthara Das









## Uthara - quiz logic implementation + bar graphs + anything else?
