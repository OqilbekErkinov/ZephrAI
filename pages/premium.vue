<template>
  <div class="promo-wrapper conatiner">
    <div class="image-galleryy">
      <!-- <img v-for="(img, i) in images" :key="i" :src="img" alt="photo" class="gallery-img" /> -->
      <img src='/images/premium1.png' alt="premium" class="gallery-img">
      <img src='/images/premium2.png' alt="premium" class="gallery-img">
      <div class="premiumtexttt">Совместное
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 3.57143L2.14286 0.714286C1.74837 0.319797 1.10877 0.319797 0.714286 0.714286C0.319797 1.10877 0.319796 1.74837 0.714285 2.14286L3.57143 5L0.714285 7.85714C0.319796 8.25163 0.319797 8.89122 0.714286 9.28571C1.10877 9.6802 1.74837 9.6802 2.14286 9.28571L5 6.42857L7.85714 9.28571C8.25163 9.6802 8.89122 9.6802 9.28571 9.28571C9.6802 8.89122 9.6802 8.25163 9.28571 7.85714L6.42857 5L9.28571 2.14286C9.6802 1.74837 9.6802 1.10877 9.28571 0.714286C8.89122 0.319797 8.25163 0.319797 7.85714 0.714286L5 3.57143Z"
            fill="#E90000" />
        </svg>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Низкое качества
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 3.57143L2.14286 0.714286C1.74837 0.319797 1.10877 0.319797 0.714286 0.714286C0.319797 1.10877 0.319796 1.74837 0.714285 2.14286L3.57143 5L0.714285 7.85714C0.319796 8.25163 0.319797 8.89122 0.714286 9.28571C1.10877 9.6802 1.74837 9.6802 2.14286 9.28571L5 6.42857L7.85714 9.28571C8.25163 9.6802 8.89122 9.6802 9.28571 9.28571C9.6802 8.89122 9.6802 8.25163 9.28571 7.85714L6.42857 5L9.28571 2.14286C9.6802 1.74837 9.6802 1.10877 9.28571 0.714286C8.89122 0.319797 8.25163 0.319797 7.85714 0.714286L5 3.57143Z"
            fill="#E90000" />
        </svg>
      </div>
      <img src='/images/premium3.png' alt="premium" class="gallery-img">
      <img src='/images/premium4.png' alt="premium" class="gallery-img">
      <div class="premiumtextt">Одиночное
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 9L0.312525 4.57503C-0.208686 3.94958 0.236072 3 1.05023 3C1.33522 3 1.60549 3.12659 1.78794 3.34552L4 6L8.71206 0.345522C8.89451 0.126587 9.16478 0 9.44977 0C10.2639 0 10.7087 0.949578 10.1875 1.57503L4 9Z"
            fill="#23C72D" />
        </svg>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Высокое качества
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 9L0.312525 4.57503C-0.208686 3.94958 0.236072 3 1.05023 3C1.33522 3 1.60549 3.12659 1.78794 3.34552L4 6L8.71206 0.345522C8.89451 0.126587 9.16478 0 9.44977 0C10.2639 0 10.7087 0.949578 10.1875 1.57503L4 9Z"
            fill="#23C72D" />
        </svg>
      </div>
    </div>
    <h1 class="maintitle">Спасибо за покупку!</h1>
    <h3 class="sub-title">Теперь нужно добавить 10 ваших фотографи чтобы обучить модель</h3>
    <p class="sub-text">
      <span class="text-light">Следует заметить:</span> Для наилучшего результата загрузи обычные фото подойдут любые,
      но студийные фотографии могут
      дать еще более крутой эффект!
    </p>
    <p class="sub-text2">Важно<span class="text-danger">!</span> <br>
        Используйте разные ракурсы, выражения лиц, освещение и фоны используйте крупный план, лицо должно быть хорошо
        видно, это придаст нейрофотографиям максимально естественный эффект.
      </p>
      <NuxtLink to="/download">
        <button class="continue-button">Продолжать</button>
      </NuxtLink>
  </div>
</template>

<script setup>
const images = [
  '/images/premium1.png',
  '/images/premium2.png',
  '/images/premium3.png',
  '/images/premium4.png'
]
</script>

<style scoped>
.premiumtexttt {
  position: absolute;
  bottom: 8.5rem;
  font-size: 10px;
  color: white;
  background: rgba(25, 25, 25, 0.8);
  left: 0.95rem;
  right: 0;
  padding-left: 2.2rem;
}
.premiumtextt {
  position: absolute;
  bottom: 0rem;
  font-size: 10px;
  color: white;
  background: rgba(25, 25, 25, 0.8);
  left: 0.95rem;
  right: 0;
  padding-left: 2.2rem;
}
.promo-wrapper {
  background: #0F0F0F;
  color: white;
  padding: 2rem 1rem;
  max-width: 400px;
  margin: 0 auto;
  font-family: sans-serif;
}
.image-galleryy {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  position: relative;
}
.gallery-img {
  width: 45%;
  object-fit: cover;
}
.maintitle {
    font-size: 40px;
    font-weight: 550;
    color: #F0A8E1;
    text-align: left;
    margin-top: 1rem;
}
.sub-title {
    font-size: 22px;
    font-weight: 550;
    color: #fff;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.sub-text {
    color: #ccc;
    font-size: 15px;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: regular;
}
.sub-text2 {
    color: #fff;
    font-size: 15px;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: regular;
}
.continue-button {
  width: 100%;
  background: #F0A8E1;
  color: white;
  padding: 0.75rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>