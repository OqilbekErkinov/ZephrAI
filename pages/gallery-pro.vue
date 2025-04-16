<template>
    <div class="container">
        <h1 style="color: #F0A8E1; margin-top: 1rem">Галерея</h1>

        <div class="about-gallery">
            <div class="image-cardd specialll" v-for="(image, index) in aboutGalleryImages" :key="index">
                <NuxtImg format="webp" loading="lazy" :src="image" :alt="`Image ${index + 5}`" @click="openImage(image, index)" />
            </div>
        </div>

        <!-- Fullscreen image viewer -->
        <div class="image-viewer fullscreen-viewer" v-if="selectedImage" @click="closeImage">
            <div class="viewer-header">
                <div class="back-button" @click.stop="closeImage">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#ffff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span style="color: white;">Назад</span>
                </div>
            </div>
            <div class="viewer-content" @click.stop>
                <div class="image-container">
                    <NuxtImg format="webp" loading="lazy" :src="selectedImage" alt="Selected image" />
                </div>
                <button class="nav-button prev-button" @click.stop="showPreviousImage">
                    <svg class="me-1" width="8" height="13" viewBox="0 0 6 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.14275 10C5.32552 10 5.50838 9.93025 5.64767 9.79073C5.92669 9.51171 5.92669 9.0597 5.64767 8.78068L1.86593 4.99994L5.64767 1.21932C5.92669 0.940301 5.92669 0.488287 5.64767 0.209266C5.36865 -0.0697552 4.91663 -0.0697552 4.63761 0.209266L0.35185 4.49503C0.0728288 4.77405 0.0728288 5.22606 0.35185 5.50508L4.63761 9.79085C4.77668 9.9308 4.95971 10 5.14275 10Z"
                            fill="#969696" />
                    </svg>
                </button>
                <button class="nav-button next-button" @click.stop="showNextImage">
                    <svg class="ms-1" width="8" height="13" viewBox="0 0 6 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.857249 10C0.674479 10 0.491619 9.93025 0.352332 9.79073C0.0733112 9.51171 0.0733112 9.0597 0.352332 8.78068L4.13407 4.99994L0.352332 1.21932C0.0733112 0.940301 0.0733112 0.488287 0.352332 0.209266C0.631353 -0.0697552 1.08337 -0.0697552 1.36239 0.209266L5.64815 4.49503C5.92717 4.77405 5.92717 5.22606 5.64815 5.50508L1.36239 9.79085C1.22332 9.9308 1.04029 10 0.857249 10Z"
                            fill="#969696" />
                    </svg>
                </button>
            </div>
            <div class="viewer-footer">
                <div class="share-button" @click.stop="openSelectionViewer">
                    <svg class="share" width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1H10.1191M15 1V5.87048M15 1L6.86523 9.11747M7.50781 2.01205H1V15H14.0156V8.50602"
                            stroke="white" stroke-width="0.9" stroke-linecap="round" />
                    </svg>
                    <svg class="line5" width="400" height="2" viewBox="0 0 400 2" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H400" stroke="#fff" stroke-width="0.5" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Selection modal -->
        <div class="modal-overlay" v-if="showSelectionViewer" @click="closeSelectionViewer">
            <div class="selection-modal" @click.stop>
                <div class="selection-header">
                    <span class="selection-title">Выбрано {{ selectedImages.length }} фото</span>
                    <button class="close-button" @click="closeSelectionViewer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                <!-- Vue3 Carousel -->
                <Carousel ref="carouselRef" v-model="currentSlide" :items-to-show="1.25" :wrap-around="true"
                    :snap-align="'center'" class="vue3-carousel">
                    <Slide v-for="(image, index) in aboutGalleryImages" :key="index">
                        <div class="slide-content">
                            <NuxtImg format="webp" loading="lazy" :src="image" :alt="`Image ${index + 1}`" />
                            <div class="image-checkmark" :class="{ checked: isImageSelected(image) }"
                                @click="toggleImageSelection(image)">
                                <svg v-if="isImageSelected(image)" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </Slide>

                    <!-- Custom Navigation Buttons -->
                    <template #addons>
                        <div class="custom-navigation">
                            <button class="nav-button prev-button prevv" @click="goPrev">
                                <svg width="8" height="13" viewBox="0 0 6 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.14275 10C5.32552 10 5.50838 9.93025 5.64767 9.79073C5.92669 9.51171 5.92669 9.0597 5.64767 8.78068L1.86593 4.99994L5.64767 1.21932C5.92669 0.940301 5.92669 0.488287 5.64767 0.209266C5.36865 -0.0697552 4.91663 -0.0697552 4.63761 0.209266L0.35185 4.49503C0.0728288 4.77405 0.0728288 5.22606 0.35185 5.50508L4.63761 9.79085C4.77668 9.9308 4.95971 10 5.14275 10Z"
                                        fill="#969696" />
                                </svg>
                            </button>
                            <button class="nav-button next-button nextt" @click="goNext">
                                <svg width="8" height="13" viewBox="0 0 6 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.857249 10C0.674479 10 0.491619 9.93025 0.352332 9.79073C0.0733112 9.51171 0.0733112 9.0597 0.352332 8.78068L4.13407 4.99994L0.352332 1.21932C0.0733112 0.940301 0.0733112 0.488287 0.352332 0.209266C0.631353 -0.0697552 1.08337 -0.0697552 1.36239 0.209266L5.64815 4.49503C5.92717 4.77405 5.92717 5.22606 5.64815 5.50508L1.36239 9.79085C1.22332 9.9308 1.04029 10 0.857249 10Z"
                                        fill="#969696" />
                                </svg>
                            </button>
                        </div>
                    </template>
                </Carousel>
                <!-- Social media buttons -->
                <div class="social-buttons">
                    <button class="social-btn instagram" @click="shareToSocial('instagram')">
                        <img src="/images/icon-instagram.png" class="icon" />
                    </button>
                    <button class="social-btn telegram" @click="shareToSocial('telegram')">
                        <img src="/images/icon-telegram.png" class="icon" />
                    </button>
                    <button class="social-btn facebook" @click="shareToSocial('facebook')">
                        <img src="/images/icon-facebook.png" class="icon" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const aboutGalleryImages = ref([
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
    "/images/gallery8.png",
    "/images/gallery9.png"
]);

// For fullscreen viewer
const selectedImage = ref(null);
const currentImageIndex = ref(0);
const currentSlide = ref(0);
const carousel = ref(null);

const carouselRef = ref(null);
const goPrev = () => {
    if (carouselRef.value) {
        carouselRef.value.prev();
    }
};

const goNext = () => {
    if (carouselRef.value) {
        carouselRef.value.next();
    }
};

function openImage(image, index) {
    selectedImage.value = image;
    currentImageIndex.value = index;
    document.body.classList.add('no-scroll');
}

function closeImage() {
    selectedImage.value = null;
    document.body.classList.remove('no-scroll');
}

function showNextImage() {
    if (currentImageIndex.value < aboutGalleryImages.value.length - 1) {
        currentImageIndex.value++;
        selectedImage.value = aboutGalleryImages.value[currentImageIndex.value];
    }
}

function showPreviousImage() {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
        selectedImage.value = aboutGalleryImages.value[currentImageIndex.value];
    }
}

// For selection functionality
const selectedImages = ref([]);
const showSelectionViewer = ref(false);

function openSelectionViewer() {
    // Start with current image selected
    if (selectedImage.value && !selectedImages.value.includes(selectedImage.value)) {
        selectedImages.value = [selectedImage.value];
    }
    showSelectionViewer.value = true;
    document.body.classList.add('no-scroll');

    // Set initial slide to current image
    nextTick(() => {
        currentSlide.value = currentImageIndex.value;
    });
}

function toggleImageSelection(image) {
    const imageIndex = selectedImages.value.indexOf(image);
    if (imageIndex === -1) {
        selectedImages.value.push(image);
    } else {
        selectedImages.value.splice(imageIndex, 1);
    }
}

function isImageSelected(image) {
    return selectedImages.value.includes(image);
}

function closeSelectionViewer() {
    showSelectionViewer.value = false;
    document.body.classList.remove('no-scroll');
}

function shareToSocial(platform) {
    if (selectedImages.value.length === 0) return;

    const imageUrls = selectedImages.value.map(img =>
        new URL(img, window.location.origin).href
    ).join('\n');

    switch (platform) {
        case 'instagram':
            alert('Sharing these images to Instagram:\n' + imageUrls);
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(imageUrls)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrls)}`, '_blank');
            break;
    }
}
</script>

<style scoped>
.container {
    max-width: 450px;
    margin: 0 auto;
    padding: 0;
}

.about-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
    justify-content: center;
    /* padding: 8px; */
    margin-bottom: 5rem;
}

.image-cardd.specialll {
    width: 100%;
    height: 160px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
    cursor: pointer;
}

.about-gallery .image-cardd img {
    height: 160px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
}
/* Fullscreen image viewer */
.image-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1000;
    display: flex;
    flex-direction: column;
}

.fullscreen-viewer .viewer-header {
    display: flex;
    justify-content: space-between;
    padding: 16px 10px;
    background-color: rgba(0, 0, 0, 0.8);
}

.fullscreen-viewer .viewer-content {
    flex: 0.9;
    /* height: 350px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.image-container {
    width: 95%;
    min-height: 550px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
}

.viewer-content img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
}

.viewer-footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px auto;
    background-color: rgba(0, 0, 0, 0.8);

}

.back-button {
    display: flex;
    align-items: center;
    color: white;
    cursor: p
}

.back-button span {
    margin-left: 8px;
}

.prev-button {
    left: 30px;
}

.next-button {
    right: 30px;
}
.prevv {
    left: 34px;
}
.nextt {
    right: 34px;
}
.nav-button {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(2px);
    color: #969696;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
}

.nav-button:hover {
    background: rgba(255, 255, 255, 0.4);
}

.share-button {
    cursor: pointer;
    padding: 8px;
    margin: auto;
    margin-top: -7rem;
}

.share {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 25px;
}

.line5 {
    margin-top: 2rem;
    width: 100%;
}

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
}

.selection-modal {
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
    padding-bottom: 8rem;
    margin-bottom: -7rem;
}

.selection-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.selection-title {
    color: white;
    font-size: 16px;
    font-weight: 500;
}

.close-button {
    background: none;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Vue3 Carousel styles */
.vue3-carousel {
    position: relative;
    width: 100%;
    height: 67vh;
    padding-top: 20px;
    --carousel-slide-width: 80%;
}

.carousel__viewport {
    height: 100%;
    overflow: visible !important;
}

.carousel__track {
    height: 100%;
}

.carousel__slide {
    flex: 0 0 var(--carousel-slide-width);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    padding: 0 14px;
}

.slide-content {
    position: relative;
    width: 100%;
    min-height: 350px;
    border-radius: 15px;
    overflow: hidden;
}

.slide-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Checkmark */
.image-checkmark {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 16px;
}

.image-checkmark.checked {
    background-color: #0099FF;
    border-color: #0099FF;
}

/* Navigation buttons */
::v-deep(.carousel__prev),
::v-deep(.carousel__next) {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: #969696;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
}

::v-deep(.carousel__prev:hover),
::v-deep(.carousel__next:hover) {
    background: rgba(255, 255, 255, 0.4);
}

::v-deep(.carousel__prev) {
    left: 30px;
}

::v-deep(.carousel__next) {
    right: 30px;
}

/* Social buttons */
.social-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    padding-top: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    /* padding-bottom: 7rem; */
}

.social-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background: transparent;
}
</style>