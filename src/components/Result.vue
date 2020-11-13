<template>
  <div id="result-container">
        <fieldset class="result-section">
            <legend><h3>Game over</h3></legend>
            <h1 id="current-score">Your score: {{this.$store.getters.getCurrentScore}}</h1>
            <h2>Your score question by question</h2>
            <table>
                <tr id="answers"></tr>
            </table>
        </fieldset>

        <!-- <div class="tooltip">
            {{question}}
            Correct answer: {{correct}}
            Provided answer: {{answer}}
        </div> -->

        <fieldset class="highscore-section">
            <legend><h3>High scores</h3></legend>
            Current highscore is held by: Person, 1200p
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'Result',
    mounted() {
        const answers = document.getElementById("answers");
        this.$store.getters.getAnswers.forEach(answer => {
            let answerBox = document.createElement("td")
            console.log(answer.question);
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
    width: 60%;
    height: 30%;
    position: absolute;
    left: 20%;
    color: white;
    margin-left: auto;
}

/*här behöver vi fixa så att det finns ett avstånd mellan result-section och highscore-section*/

.highscore-section { 
    width: 60%;
    height: 30%; 
    position: absolute;
    left: 20%;
    top: 50%;
    color: white;
    margin-left: auto;
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