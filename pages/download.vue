<template>
    <div class="promo-wrapper container">
        <h1 class="download-title">Загрузить фото можно только <br> один раз!</h1>
        <p class="download-text">
            Подойдите к выбору внимательно!
            Если сейчас нет подходящих
            фото можите вернуться к этому
            шагу, кгода будете готовы.
        </p>
        <p class="download-text2">Загрузите ваши фотографи:</p>
        <div class="preview-section">
            <div class="image-preview-container">
                <div class="image-preview" v-for="(file, index) in selectedFiles" :key="index">
                    <NuxtImg format="webp" loading="lazy" :src="file.preview" :alt="'Selected image ' + (index + 1)" />
                    <button class="remove-image" @click="removeImage(index)">×</button>
                </div>
                <div class="download-card" v-if="selectedFiles.length < totalCount">
                    <svg width="53" height="36" viewBox="0 0 53 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                        @click="openFilePicker">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M47.0563 17.4683C48.0286 17.7158 48.8999 18.0691 49.7487 18.4133C49.802 18.4349 49.8551 18.4564 49.9081 18.4779V5.70379C49.9081 2.55367 47.3545 0 44.2044 0H5.70379C2.55367 0 0 2.55367 0 5.70379V25.5245V28.5189C0 28.5763 0.000845673 28.6334 0.00252522 28.6903C0.000844935 28.7452 0 28.8002 0 28.8553C0 31.8197 2.40306 34.2227 5.36739 34.2227H5.70379H35.7489C34.7783 32.5448 34.2227 30.5968 34.2227 28.5189C34.2227 23.6033 37.3319 19.4138 41.691 17.8098L38.4406 14.307C36.5737 12.2951 33.5386 11.8981 31.2171 13.3621L20.0149 20.6866L26.6225 29.4967C26.8887 29.8516 26.6355 30.3582 26.1917 30.3582C26.0239 30.3582 25.8656 30.2799 25.7637 30.1465L19.0756 21.3859C17.5148 19.3416 14.7242 18.69 12.4195 19.8317L4.55793 23.7265C4.51585 23.7473 4.47415 23.7687 4.43284 23.7906V6.44776C4.43284 4.96401 5.63565 3.76119 7.1194 3.76119H43.3881C44.8718 3.76119 46.0746 4.96401 46.0746 6.44776V17.2772C46.4579 17.336 46.7737 17.4138 47.0563 17.4683ZM16.0848 14.4368L15.7485 14.4418C13.3675 14.4779 11.4179 12.5577 11.4179 10.1764C11.4179 7.82038 13.3278 5.91045 15.6839 5.91045H16.0202C18.3748 5.91045 20.2836 7.81924 20.2836 10.1738C20.2836 12.5033 18.4139 14.4015 16.0848 14.4368ZM44.7313 36C49.1826 36 52.791 32.3915 52.791 27.9403C52.791 23.489 49.1826 19.8806 44.7313 19.8806C40.2801 19.8806 36.6716 23.489 36.6716 27.9403C36.6716 32.3915 40.2801 36 44.7313 36ZM44.0597 23.7761C44.0597 23.4794 44.3003 23.2388 44.597 23.2388H44.8657C45.1624 23.2388 45.403 23.4794 45.403 23.7761V27.2687H48.8955C49.1923 27.2687 49.4328 27.5092 49.4328 27.806V28.0746C49.4328 28.3714 49.1923 28.6119 48.8955 28.6119H45.403V32.1045C45.403 32.4012 45.1624 32.6418 44.8657 32.6418H44.597C44.3003 32.6418 44.0597 32.4012 44.0597 32.1045V28.6119H40.5672C40.2704 28.6119 40.0299 28.3714 40.0299 28.0746V27.806C40.0299 27.5092 40.2704 27.2687 40.5672 27.2687H44.0597V23.7761Z"
                            fill="#444444" />
                    </svg>
                </div>
            </div>
        </div>
        <NuxtLink to="/downloading">
            <button class="download-button" :disabled="selectedFiles.length < totalCount"
                :class="{ 'active': selectedFiles.length >= totalCount }">
                {{ buttonText }}
            </button>
        </NuxtLink>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const downloadedCount = ref(0);
const totalCount = 10;
const selectedFiles = ref([]);

const downloadText = computed(() => {
  return `Загружено ${downloadedCount.value} из ${totalCount}`;
});
const buttonText = computed(() => {
  return selectedFiles.value.length >= totalCount ? 'Начать' : downloadText.value;
});
const openFilePicker = () => {
  if (selectedFiles.value.length >= totalCount) return;
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  const remainingSlots = totalCount - selectedFiles.value.length;
  if (remainingSlots > 1) {
    fileInput.multiple = true;
    fileInput.setAttribute('multiple', 'multiple');
  } else {
    fileInput.multiple = false;
    fileInput.removeAttribute('multiple');
  }
  fileInput.click();

  fileInput.onchange = (e) => {
    handleFiles(e.target.files);
  };
};
const handleFiles = (files) => {
  const remainingSlots = totalCount - selectedFiles.value.length;
  const filesToAdd = Array.from(files).slice(0, remainingSlots);
  filesToAdd.forEach(file => {
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        selectedFiles.value.push({
          file: file,
          preview: e.target.result
        });
        downloadedCount.value = selectedFiles.value.length;
      };
      reader.readAsDataURL(file);
    }
  });
};
const removeImage = (index) => {
  selectedFiles.value.splice(index, 1);
  downloadedCount.value = selectedFiles.value.length;
};
</script>
