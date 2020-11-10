<template>
  <div class="home-page">
      <div id="home-page-title">Vue Trivia Game</div>
      <button id="play-now-button" v-on:click="clickEvent">Play!</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
      clickEvent: function() {
          console.log(this);
      }
  }
}




</script>


<style lang="scss">
$extra-large: 110px;
$color1: green;
$color2: pink;

body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #444;
    margin: 0;
}
#home-page-title {
    width: 100%;
    text-align: center;
    margin-top: 10%;
    $random-text: 'Vue Trivia Game';
    $stroke-width: $extra-large*0.04;
    position: relative;
    display: inline-block;
    font-size: $extra-large;
    font-weight: 800;
    text-transform: uppercase;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke-width: $stroke-width;
    -webkit-text-stroke-color: white;
    white-space: nowrap;
    $x: 14px;
    $y: 12px;
    $step: 1px;
        
    text-shadow: $x $y $color1,
                 $x + $step $y + $step $color2,
                 $x + $step * 2 $y + $step * 2 $color2,
                 $x + $step * 3 $y + $step * 3 $color2,
                 $x + $step * 4 $y + $step * 4 $color2,
                 $x + $step * 5 $y + $step * 5 $color2,
                 $x + $step * 6 $y + $step * 6 $color2,
                 $x + $step * 7 $y + $step * 7 $color2,
}
#play-now-button {
    font-size: 42px;
    margin: 50px calc(50% - 75px);
    color: white;
    width: 150px;
    padding: 10px;
    text-align: center;
    background-color: #999;
    transition: ease-in-out .3s;
    border: 2px #222 solid;
    box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.3);
    text-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.3);
    
}
#play-now-button:hover {
    cursor: pointer;
    background-color: #aaa;
    border: 2px #eee solid;
    text-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.6);
    padding: 12px;
}
</style>
