<template>
  <div id="result-container">
        <fieldset class="result-section">
            <legend><h3>Game over</h3></legend>
            <h1 id="current-score">Your score: {{pts}}</h1>
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
    name: 'Result',
    props: ['pts'],
    mounted() {
        console.log(this.pts);
    }
}
</script>

<style>
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

</style>