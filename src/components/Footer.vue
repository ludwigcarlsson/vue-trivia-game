<template>
    <div id="footer-container">
        <fieldset class="footer-section" id="footer-contact">
            <legend><h3>Contact</h3></legend>
            Created by <a href="https://github.com/ludwigcarlsson">[Ludwig Carlsson]</a> and <a href="https://github.com/englundjesper">[Jesper Englund]</a>
        </fieldset>
        <fieldset class="footer-section" id="footer-highscore">
            <legend><h3>Highscore</h3></legend>
            Current highscore is held by: Person, 1200p
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {

    }
}
</script>

<style>
#footer-container {
    width: 90%;
    position: absolute;
    left: 5%;
    bottom: 5%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 25px;
    color: white;
}
.footer-section {
    border: 2px solid white;
    padding: 0 10px 10px 10px;
}
#footer-contact a {
    text-decoration: none;
    color: #bbb;
}
</style>