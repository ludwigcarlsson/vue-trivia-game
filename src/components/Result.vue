<template>
  <div id="result-container">
        <fieldset class="result-section">
            <legend><h3>Game over</h3></legend>
            <h2 id="current-score">Your score:</h2>
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

        <fieldset class="highscore-section">
            <legend><h3>High scores</h3></legend>
            <h4>Current highscore is held by: Person, 1200p</h4>
        </fieldset>
    </div>
</template>

<script>
export default { 
    name: 'Result',
}
</script>

<style>
body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #444;
    margin: 0;
}

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

</style>