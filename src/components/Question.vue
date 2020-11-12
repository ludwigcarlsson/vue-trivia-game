<template>
    <div class = "question-container">
        <fieldset class = "question-body">
            <legend><h3>Question {{currentQuestion+1}} of {{questions.length}}</h3></legend>
            <div class = "q1" >
                <p>{{questions[currentQuestion].question}}</p>
                <div class = "option-body">
                    <button type="button" class="btn-alt" v-for="(answer, index) in questions[currentQuestion].answers" :key="answer.index" v-on:click="answerQuestion(answer, questions[currentQuestion].correct_answer)" v-bind:value="index">{{answer}}</button>
                </div>
            </div>
        </fieldset>
        <div id="currentScore">Current score: {{currentScore}}</div>
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
            currentScore: 0,
        }
    },
    created() {
        fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy")
        .then(response=>response.json())
        .then(data=> {
            this.questions = data.results;
            for (let i = 0; i < this.questions.length; i++) {
                for (let j = 0; j < this.questions[i].incorrect_answers.length; j++) {
                    this.answers.push(this.questions[i].incorrect_answers[j]);
                }
                this.answers.push(this.questions[i].correct_answer);
                this.$set(this.questions[i], "answers", this.answers)
                this.answers = []
            }
        }) 
    },
    methods: {
        answerQuestion(answer, correct) {
            if (answer === correct) {
                this.currentScore += 100;
            }
            if (this.currentQuestion < this.questions.length-1) {
                this.currentQuestion++;
            } else {
                this.$router.push('/result')
            }
            
            
        }
    }
}
</script>

<style>
body { 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #444;
    margin: 0;
}

.question-body {
    width: 60%;
    height: 30%;
    position: absolute;
    left: 20%;
    color: white;
    margin-left: auto;
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
    padding: 30px;
    width: 350px;
}

.btn-alt:hover {
    cursor: pointer;
    background-color: rgb(238, 238, 238);
    border: 2px #eee solid;
}

</style>