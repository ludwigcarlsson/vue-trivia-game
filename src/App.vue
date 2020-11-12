<template>
  <div id="app">
    <router-link to="/" id="home-page-title">Vue Trivia Game</router-link>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer 
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
    color: white;
}
#home-page-title {
    width: 100%;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 50px;
    $random-text: 'Vue Trivia Game';
    $stroke-width: $extra-large*0.04;
    position: relative;
    display: inline-block;
    font-size: $extra-large;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    font-style: italic;
    color: #eee;
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
</style>
