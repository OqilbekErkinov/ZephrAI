<template>
  <div class="promo-wrapper">
    <h1 class="main-titlee">Выберите параметры для генерации</h1>
    <p class="subtextt">
      Убедитесь, что ваш выбор <br> правильный, так как при <br> создании цифрового аватара, <br> изменить данные будет
      нельзя.
    </p>
    <div class="premium-box">
      <h4 class="mb-3">Названия моделя</h4>
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
        <div
          class="dropdown-header"
          @click="toggleDropdown('age')"
          :class="{ 'subtitle-greyed': age }"
        >
          Возраст
          <span class="ml-2">
            <svg v-if="showAge" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
            </svg>
            <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
            </svg>
          </span>
        </div>
        <div v-if="showAge" class="dropdown-options">
          <label class="option mb-4">
            <input type="radio" value="child" v-model="age" @change="ageError = false" />
            Ребенок
          </label>
          <label class="option mt-4 pb-3" style="border-bottom: 1px solid #393939">
            <input type="radio" value="adult" v-model="age" @change="ageError = false" />
            Взрослый
          </label>
        </div>
      </div>
      <p v-if="ageError" class="error-msg">Пожалуйста, выберите возраст</p>

      <!-- Пол Dropdown -->
      <div class="dropdown mb-1">
        <div
          class="dropdown-header pol-header"
          style="border-top: none; margin-top: -1rem;"
          @click="toggleDropdown('gender')"
          :class="{ 'subtitle-greyed': gender }"
        >
          Пол
          <span>
            <svg v-if="showGender" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
            </svg>
            <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
            </svg>
          </span>
        </div>
        
        <div v-if="showGender" class="dropdown-options">
          <label class="option mb-4">
            <input type="radio" value="male" v-model="gender" @change="genderError = false"/>
            Мужчина
          </label>
          <label class="option mt-4 pb-3" style="border-bottom: 1px solid #393939">
            <input type="radio" value="female" v-model="gender" @change="genderError = false"/>
            Женщина
          </label>
        </div>
      </div>
      <p v-if="genderError" class="error-msg mt-2">Пожалуйста, выберите пол</p>
    </div>

    <!-- Confirm button -->
    <button class="premium-button" @click="handleSubmit">Подтверить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const age = ref('')
const gender = ref('')
const nameError = ref(false)
const ageError = ref(false)
const genderError = ref(false)


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
  let hasError = false

  if (!name.value.trim()) {
    nameError.value = true
    hasError = true
  }

  if (!age.value) {
    ageError.value = true
    hasError = true
  } else {
    ageError.value = false
  }

  if (!gender.value) {
    genderError.value = true
    hasError = true
  } else {
    genderError.value = false
  }

  if (hasError) return

  router.push('/download')
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
  padding: 14px;
  margin-bottom: 1rem;
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
  padding: 14px;
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
  padding: 0 1rem;
  margin: 10px 0;
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
  color: white;
}

.error-msg {
  color: #A50A0A;
  font-size: 13px;
  margin: -0.5rem 0 1rem 0.5rem;
}
</style>