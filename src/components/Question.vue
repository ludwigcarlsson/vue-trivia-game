<template>
    <div class = "question-container">
        <fieldset class = "question-body">
            <legend><h3>Question {{currentQuestion+1}} of {{questions.length}}</h3></legend>
            <div class = "q1" >
                <p>{{questions[currentQuestion].question}}</p>
                <div class = "option-body">
                    <button type="button" class="btn-alt" 
                        v-for="(answer, index) in questions[currentQuestion].answers" :key="answer.index" 
                        v-on:click="answerQuestion(answer, questions[currentQuestion].correct_answer, questions[currentQuestion].question)"
                        v-bind:value="index">{{answer}}</button>
                </div>
            </div>
        </fieldset>
        <div id="currentScore">Current score: {{this.$store.getters.getCurrentScore}}</div>
    </div>
</template>

<script>
export default { 
    name: 'Question',
    data() {
        return {
            questions: [],
            answers: [],
            currentQuestion: 0,
            payload: [],
        }
    },
    created() {
        fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy")
        .then(response=>response.json())
        .then(data=> {
            this.questions = data.results;
            for (let i = 0; i < this.questions.length; i++) { // for each question
                for (let j = 0; j < this.questions[i].incorrect_answers.length; j++) { // for each incorrect answer
                    this.answers.push(this.questions[i].incorrect_answers[j]); // add to all answers-array
                }
                this.answers.push(this.questions[i].correct_answer); // add correct answer to answers-array
                this.$set(this.questions[i], "answers", this.answers); // add answers-array to each question
                this.answers = []; // reset array after adding it
            }
        }) 
    },
    methods: {
        answerQuestion(answer, correct, question) {
            this.payload.push({
                answer: answer,
                correct: correct,
                question: question
            }) // create a payload for dispatching data to store
            this.$store.dispatch('addAnswer', this.payload)
            this.payload = []
            if (answer === correct) {
                this.$store.dispatch('addScore') // call store-action
            }
            if (this.currentQuestion < this.questions.length-1) { // if currentQuestion is equal to last question
                this.currentQuestion++;
            } else { // redirect to result-page when there are no more questions
                this.$router.push(`/result`)
            }
        }
    }
}
</script>

<style>
.question-body {
    width: 60%;
    padding: 20px;
    position: absolute;
    left: 20%;
}
.option-body {
    display: grid;
    grid-template: auto auto / auto auto;
    justify-content: center;
    row-gap: 10px;
    column-gap: 10px;
}
.btn-alt  {
    background-color: orange;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    width: 350px;
}
.btn-alt:hover {
    cursor: pointer;
    background-color: rgb(238, 238, 238);
    border: 2px #eee solid;
}
#currentScore {
    text-align: center;
    font-weight: bold;
}

</style>