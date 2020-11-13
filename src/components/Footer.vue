<template>
    <div id="footer-container">
        <fieldset class="footer-section" id="footer-contact">
            <legend><h3>Contact</h3></legend>
            Created by <a href="https://github.com/ludwigcarlsson">[Ludwig Carlsson]</a> and <a href="https://github.com/englundjesper">[Jesper Englund]</a>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
#footer-container {
    width: 90%;
    position: absolute;
    left: 5%;
    bottom: 5%;
    display: grid;
    color: white;
}
.footer-section {
    border: 2px solid white;
    padding: 0 10px 10px 10px;
    
    a {
        text-decoration: none;
        color: #bbb;
    }
}
</style>