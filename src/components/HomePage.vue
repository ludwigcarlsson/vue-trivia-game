<template>
  <div class="home-page">
    <router-link id="play-now-button" to="/question">Play!</router-link>
  </div>
</template>

<script>

export default {
    name: 'HomePage'
}

</script>

<style lang="scss">
#play-now-button {
    font-size: 42px;
    margin: 0 calc(50% - 75px);
    color: white;
    width: 150px;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    background-color: #999;
    transition: ease-in-out .3s;
    border: 2px #222 solid;
    border-radius: 5px;
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
