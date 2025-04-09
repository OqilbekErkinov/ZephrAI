<template>
    <div class="container">
        <img class="about-image" src="/images/text.png" alt="Textpic">
        <NuxtLink to="/gallery-pro">
            <button class="about-button">Создать генерацию</button>
        </NuxtLink>
    </div>
</template>
<style scoped>
.about-image {
    margin-top: 8rem;
    width: 100%;
}

.about-button {
    background: #F0A8E1;
    color: white;
    border-radius: 7px;
    border: none;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 8rem;
}
</style>