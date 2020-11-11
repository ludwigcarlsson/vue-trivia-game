<template>
<div class = "question-container">
  <fieldset class = "question-body">
      <legend><h3>Question 1 of 10</h3></legend>
      <h2>What country is the largest in South America?</h2>
</fieldset>
<div class = "option-body">
<button type="button" id="btnAlt1" onclick="">Alternative 1</button>
<button type="button" id="btnAlt2" onclick="">Alternative 2</button>
<button type="button" id="btnAlt3" onclick="">Alternative 3</button>
<button type="button" id="btnAlt4" onclick="">Alternative 4</button>
</div>
  </div>
</template>

<script>
export default {
name: 'Question'
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
    background-color: orange;
    width: 35px;
}

#btnAlt1, #btnAlt2, #btnAlt3, #btnAlt4  {
    background-color: orange;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 30px;
    width: 350px;
}

#btnAlt1:hover, #btnAlt2:hover, #btnAlt3:hover, #btnAlt4:hover {
    cursor: pointer;
    background-color: rgb (238, 238, 238);
    border: 2px #eee solid;
    padding: 30px;
}

</style>