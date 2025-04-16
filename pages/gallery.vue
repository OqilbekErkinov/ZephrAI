<template>
    <div class="container about-page">
      <div class="content-wrapper">
        <NuxtImg format="webp" loading="lazy" class="about-image" src="/images/gallery-back2.png" alt="Textpic"/>
        <NuxtLink to="/styles">
          <button class="about-button">Premium</button>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
    margin-top: -2rem;
  }
  
  .content-wrapper {
    width: 100%;
    max-width: 600px;
  }
  
  .about-image {
    width: 100%;
    height: auto;
  }
  
  .about-button {
    background: #F0A8E1;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    width: 100%;
    margin-top: 3rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-size: 20px;
  }
  </style>
  