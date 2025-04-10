<template>
    <div class="promo-wrapper">
      <h1 class="main-titlee">Выберите параметры для генерации</h1>
      <p class="subtextt">
        Убедитесь, что ваш выбор <br> правильный, так как при <br> создании цифрового аватара, <br> изменить данные будет нельзя.
      </p>
      <div class="premium-box">
        <h3>Названия моделя</h3>
        <input
          type="text"
          v-model="name"
          :placeholder="nameError ? 'Имя*' : 'Имя*'"
          :class="{ error: nameError }"
          class="text-input"
          @focus="nameError = false"
        />
  
        <!-- Возраст Dropdown -->
        <div class="dropdown">
          <div class="dropdown-header" @click="toggleDropdown('age')"
          :class="{ 'subtitle-greyed': showAge }">
            Возраст
            <span>{{ showAge ? '˄' : '›' }}</span>
          </div>
          <div v-if="showAge" class="dropdown-options">
            <label class="option">
              <input type="radio" value="child" v-model="age" />
              Ребенок
            </label>
            <label class="option">
              <input type="radio" value="adult" v-model="age" style="color: transparent"/>
              Взрослый
            </label>
          </div>
        </div>
  
        <!-- Пол Dropdown -->
        <div class="dropdown">
          <div class="dropdown-header" @click="toggleDropdown('gender')"
          :class="{ 'subtitle-greyed': showGender }">
            Пол
            <span>{{ showGender ? '˄' : '›' }}</span>
          </div>
          <div v-if="showGender" class="dropdown-options">
            <label class="option">
              <input type="radio" value="male" v-model="gender" />
              Мужчина
            </label>
            <label class="option">
              <input type="radio" value="female" v-model="gender" />
              Женщина
            </label>
          </div>
        </div>
      </div>
    <NuxtLink to="/download">
      <button class="premium-button" @click="handleSubmit">Подтверит</button>
    </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const age = ref('')
  const gender = ref('')
  const nameError = ref(false)
  const showAge = ref(false)
  const showGender = ref(false)
  
  const toggleDropdown = (type) => {
    if (type === 'age') {
      showAge.value = !showAge.value
      showGender.value = false
    } else {
      showGender.value = !showGender.value
      showAge.value = false
    }
  }
  
  const handleSubmit = () => {
    if (!name.value.trim()) {
      nameError.value = true
      return
    }
    alert(`Name: ${name.value}, Age: ${age.value}, Gender: ${gender.value}`)
  }
  </script>
  
  <style scoped>
.subtitle-greyed {
    color: #F0A8E1 !important;
}



  .promo-wrapper {
    background: #131313;
    color: white;
    max-width: 450px;
    font-family: sans-serif;
    padding: 1rem;
  }
  
  .main-titlee {
    font-size: 40px;
    font-weight: bold;
    color: #F0A8E1;
    margin-bottom: 1rem;
  }
  
  .subtextt {
    color: #ccc;
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
  
  .premium-box {
    background: #222222;
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .text-input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #393939;
    margin-bottom: 1rem;
    background: #1E1E1E;
    color: white;
    font-size: 14px;
  }
  
  .text-input.error::placeholder {
    color: #A50A0A;
  }

  .dropdown {
    margin-bottom: 1rem;
  }
  
  .dropdown-header {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    font-size: 14px;
    border-bottom: 1px solid #393939;
    border-top: 1px solid #393939;
  }
  
  .dropdown-options {
    padding: 0.5rem 1rem;
  }
  
  .option {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 14px;
  }
  
  .premium-button {
    width: 100%;
    background: #F0A8E1;
    color: white;
    padding: 0.75rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  margin-right: 8px;
  vertical-align: middle;
}

input[type="radio"]:checked::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.option {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 0.75rem;
  color: white;
}

  </style>
  