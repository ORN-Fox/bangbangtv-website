<template>
    <div id="preloader">
        <div class="loader"></div>
    </div>
</template>

<style lang="css">
    .loader, #preloder {
        transition: opacity 0.6s ease;
    }
</style>

<script lang="js">
    window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    var preloder = document.getElementById('preloder');

    // Faire disparaître le loader
    if (loader) {
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = 'none';
        }, 600); // Délai pour faire disparaître
    }

    // Faire disparaître le preloder après un délai
    if (preloder) {
        setTimeout(function() {
            preloder.style.opacity = 0;
            setTimeout(function() {
                preloder.style.display = 'none';
            }, 600); // Délai pour faire disparaître
        }, 200); // Délai avant de faire disparaître
    }
});
</script>