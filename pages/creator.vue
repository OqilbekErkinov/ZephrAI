<template>
    <div class="container">
        <div class="up">
            <div class="firstup">
                99    
            </div>
            <div class="secondup">
                99
            </div>
        </div>
        <div class="creator">
            <img src="/images/back2.png" alt="">
            <div class="text-fon">
                <div class="text-bg"></div>
                <p>Режим «Создатель» где ты сможешь воплотить свои самые смелые идеи
                    Оплачивай и начинаем прямо <br> сейчас! <NuxtLink to="/styles" style="color: #F0A8E1">PREMIUM</NuxtLink></p>
            </div>
        </div>
        <form style="display: flex; justify-content: center; width: 100%; position: relative;">
            <input class="creator-input me-2" placeholder="Напиши..." disabled/>
            <button type="submit" class="submit-btn" c>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#808080" />
                    <path d="M20 11.5V28.5M20 11.5L14 18.7857M20 11.5L26 18.7857" stroke="#333333" stroke-width="1.96429"
                        stroke-linecap="round" />
                </svg>
            </button>
        </form>
    </div>
</template>
<style scoped>
.creator {
    position: relative;
}
.creator img {
    position: fixed;
    right: 2.5rem;
    bottom: 9rem;
    z-index: 0;
}
.text-fon {
    position: relative;
    width: 90%;
    border-radius: 15px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 12rem;
    margin-bottom: 13rem;
}
.text-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(42, 42, 42, 0.87);
    filter: blur(1px);
    border-radius: 15px;
    z-index: 0;
}
.text-fon p {
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
}
.creator-input {
    border-radius: 20px;
    border: 1px solid #474747;
    background: #191919;
    margin-bottom: 3rem;
    height: 40px;
    width: 78%;
    color: white;
    outline: none;
    padding-left: 1rem;
    position: fixed;
    bottom: 3rem;
    left: 0.8rem;
}

.submit-btn {
    border: none;
    background: transparent;
    margin-bottom: 3rem;
    cursor: pointer;
    padding: 0;
    position: fixed;
    bottom: 3rem;
    right: 0.8rem;
}

.up {
    position: fixed;
    top: 0.8rem;
    z-index: 1000;
}

.firstup {
    background: #303030;
    color: white;
    border-radius: 20px;
    width: 30px;
    position: relative;
    z-index: 1;
    padding-left: 0.4rem;
    font-size: 14px;
}

.secondup {
    background: white;
    border-radius: 20px;
    width: 30px;
    margin-left: 0.5rem;
    margin-top: -1.28rem;
    font-size: 13px;
}
</style>
