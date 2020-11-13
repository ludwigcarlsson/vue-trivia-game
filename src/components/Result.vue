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
          <form action="/...">
            <p>Save your score</p>
            <input type="text" id="name" placeholder="Name">
            <input type="submit" value="Submit">
          </form>
        </div>
        </fieldset>

        <!-- <div class="tooltip">
            {{question}}
            Correct answer: {{correct}}
            Provided answer: {{answer}}
        </div> -->

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
        const answers = document.getElementById("answers");
        this.$store.getters.getAnswers.forEach(answer => { // loop through all answers
            let answerBox = document.createElement("td") // create cell for each answer and append styling depending on if correct or not
            if(answer.answer === answer.correct) {
                answerBox.innerHTML = "v"
                answerBox.style.backgroundColor = "green"
            } else {
                answerBox.innerHTML = "x"
                answerBox.style.backgroundColor = "red"   
            }
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
#answers {

    td {
        padding:5px;
    }
}


</style>