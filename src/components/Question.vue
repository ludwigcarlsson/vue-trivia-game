<template>
    <div class = "question-container">
        <fieldset class = "question-body">
            <legend><h3>Question {{currentQuestion+1}} of {{questions.length}}</h3></legend>
            <div class = "q1" >
                <p>{{questions[currentQuestion].question}}</p>
                <div class = "optionBody">
                </div>
                <div class = "q1Options" v-for="(answer, index) in questions[currentQuestion].answers" :key="answer.index">
                    <button v-on:click="answerQuestion(answer, questions[currentQuestion].correct_answer)" v-bind:value="index">{{answer}}</button>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    name: 'Question',
    data() {
        return {
            questions: [],
            currentQuestion: 0,
            answers: []
        }
    },
    mounted() {
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
            this.currentQuestion++;
            console.log(answer == correct ? "true" : "false");
        }
    }
}
</script>

<style>
.question-body {
    width: 70%;
    height: 30%;
    position: absolute;
    left: 15%;
    color: white;
}

.option-body {
    background-color: orange;
    width: 35px;
}

</style>