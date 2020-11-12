<template>
  <div id="result-container">
        <fieldset class="result-section">
            <legend><h3>Game over</h3></legend>
            <h1>Your score:</h1>
            <h2>Your score question by question</h2>
        </fieldset>

        <fieldset class="highscore-section">
            <legend><h3>High scores</h3></legend>
            Current highscore is held by: Person, 1200p
        </fieldset>
    </div>

</template>

<script>
export default {

}
</script>

<style>
body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #444;
    margin: 0;
}

.result-section {
    width: 60%;
    height: 50%;
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
    color: white;
    margin-left: auto;
}

</style>