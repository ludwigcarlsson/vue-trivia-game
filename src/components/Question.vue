<template>
<div class = "question-container">
  <fieldset class = "question-body">
  <div class = "q1">
      <legend><h3>Question 1 of 10</h3></legend>
      <p>What country is the largest in South America?</p>
      <div class = "optionBody">
      </div>
      <div class = "q1Options">
          <p></p>
      </div>
  </div>

  <div class = "q2">
      <h3>Question 2 of 10</h3>
      <p>How long is an Olympic swimming pool?</p>
  </div>
  <div class = "q3">
      <h3>Question 3 of 10</h3>
      <p>In what year was Google launched on the web?</p>
  </div>
  <div class = "q4">
      <h3>Question 4 of 10</h3>
      <p>Who did the Mona Lisa paint?</p>
  </div>
  <div class = "q5">
      <h3>Question 5 of 10</h3>
      <p>What is the Turkish word for lamb?</p>
  </div>
  <div class = "q6">
      <h3>Question 6 of 10</h3>
      <p>Which bird can swim but cannot fly?</p>
  </div>
  <div class = "q7">
      <h3>Question 7 of 10</h3>
      <p>Who was the first president of the USA?</p>
  </div>
  <div class = "q8">
      <h3>Question 8 of 10</h3>
      <p>Which planet is nearest the sun?</p>
  </div>
  <div class = "q9">
      <h3>Question 9 of 10</h3>
      <p>What was Mozart s nationality?</p>
  </div>
  <div class = "q10">
      <h3>Question 10 of 10</h3>
      <p>Which country does the Peroni beer come from?</p>
  </div>
  </fieldset>
  </div>
  
</template>
<script>

export default {
name: 'Question'
}
</script>

<style>
.question-body {
    width: 90%;
    height: 50%;
    position: absolute;
    left: 5%;
    bottom: 5%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 25px;
    color: white;
}

.option-body {
    background-color: orange;
    width: 35px;
}

</style>