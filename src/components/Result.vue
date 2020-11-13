<template>
  <div id="result-container">
        <fieldset class="result-section">
            <legend><h3>Game over</h3></legend>
            <h2 id="current-score">Your score: {{this.$store.getters.getCurrentScore}}</h2>
            <h4>Your score question by question</h4>
            <table>
                <tr id="answers"></tr>
            </table>
        <div>
            <p>Save your score</p>
            <input type="text" id="name" placeholder="Name">
            <input type="submit" value="Submit">
        </div>
        </fieldset>

        <div id="tooltip">
        </div>

        <fieldset class="highscore-section">
            <legend><h3>High scores</h3></legend>
            <h4>Current highscore is held by: Person, 1200p</h4>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'Result',
    mounted() {
        const tooltip = document.getElementById("tooltip");
        const answers = document.getElementById("answers");
        answers.innerHTML = ''
        function showTooltip(answer) { // show tooltip on hover and creates p-tags containing answer-info
            tooltip.style.display = "block";
            tooltip.style.borderColor = answer.answer === answer.correct ? "green" : "red";
            let questionText = document.createElement("p");
            questionText.innerHTML = answer.question;
            let answerText = document.createElement("p");
            answerText.innerHTML = `Provided answer: ${answer.answer}`;
            let correctText = document.createElement("p");
            correctText.innerHTML = `Correct answer: ${answer.correct}`;
            tooltip.append(questionText, answerText, correctText); // append p-tags to tooltip
        }
        function hideTooltip() { // hide tooltip
            tooltip.style.display = "none";
            tooltip.innerHTML = '';
        }
        
        this.$store.getters.getAnswers.forEach(answer => { // loop through all answers
            let answerBox = document.createElement("td") // create cell for each answer and append styling depending on if correct or not
            if(answer.answer === answer.correct) {
                answerBox.innerHTML = "v"
                answerBox.style.backgroundColor = "green"
            } else {
                answerBox.innerHTML = "x"
                answerBox.style.backgroundColor = "red"   
            }
            answerBox.addEventListener("mouseover", function () { // show tooltip on hover
                showTooltip(answer)
            });
            answerBox.addEventListener("mouseout", hideTooltip);
           
            answers.appendChild(answerBox)
        });
    }
}
</script>

<style lang="scss">
.result-section {
    width: 50%;
    color: white;
    margin-left: 10%;
    float: left;
}
.highscore-section {
    width: 20%;
    color: white;
    margin-left: 10%;
    float: left;
}
input[type=text], select {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 4px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 20%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
table {
    margin: 0 auto;
}
#tooltip {
    display: none;
    position: absolute;
    border: 2px solid white;
    background-color: #333;
    width: 33.3%;
    z-index: 1;
    left: 33.3%;
    bottom: 5%;
    padding: 15px;
    box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.4);
}
#answers {
    td {
        padding:5px;
        cursor: pointer;
    }
}

</style>