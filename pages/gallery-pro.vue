<template>
    <div class="container">
        <h1 style="color: #F0A8E1; margin-top: 1rem">Галерея</h1>

        <!-- Gallery grid -->
        <div class="about-gallery">
            <div class="image-cardd specialll" v-for="(image, index) in aboutGalleryImages" :key="index">
                <!-- Image that opens fullscreen when clicked -->
                <img :src="image" :alt="`Image ${index + 5}`" @click="openImage(image, index)" />

                <!-- Selection checkbox at bottom -->
                <div class="selection-checkbox" :class="{ checked: isImageSelected(image) }"
                    @click.stop="toggleImageSelection(image, index)">
                    <svg v-if="isImageSelected(image)" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
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
                    <img :src="selectedImage" alt="Selected image" />
                </div>
            </div>
            <div class="viewer-footer">
                <div class="share-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.59 13.51L15.42 17.49" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15.41 6.51L8.59 10.49" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Selection viewer with Swiper carousel -->
        <div class="image-viewer selection-viewer" v-if="showSelectionViewer">
            <div class="selection-header">
                <span class="selection-title">Выбрано {{ selectedImages.length }} фото</span>
                <button class="close-button" @click="closeSelectionViewer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <!-- Swiper carousel for selected images -->
            <div class="swiper-container selected-carousel">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(image, index) in selectedImages" :key="index">
                        <div class="slide-content">
                            <img :src="image" :alt="`Selected ${index + 1}`" />
                            <div class="image-checkmark">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

            <!-- Social media buttons -->
            <div class="social-buttons">
                <button class="social-btn instagram" @click="shareToSocial('instagram')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2" />
                        <circle cx="12" cy="12" r="5" stroke="white" stroke-width="2" />
                        <circle cx="18" cy="6" r="1" fill="white" />
                    </svg>
                </button>
                <button class="social-btn telegram" @click="shareToSocial('telegram')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 3L2 10L10 12L17 7L12 14L14 22L22 3Z" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="social-btn facebook" @click="shareToSocial('facebook')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const aboutGalleryImages = ref([
    "/images/img9.png",
    "/images/img13.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img5.png",
    "/images/img10.png",
    "/images/img11.png",
    "/images/img12.png",
    "/images/img2.png"
]);

// For selection functionality
const selectedImages = ref([]);
const showSelectionViewer = ref(false);
let selectionSwiper = null;

// Initialize Swiper when selection viewer opens
watch(showSelectionViewer, (newVal) => {
    if (newVal) {
        nextTick(() => {
            selectionSwiper = new Swiper('.selected-carousel', {
                modules: [Navigation],
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 30
                    }
                }
            });
        });
    } else if (selectionSwiper) {
        selectionSwiper.destroy();
        selectionSwiper = null;
    }
});

// Toggle selection of an image
function toggleImageSelection(image, index) {
    const imageIndex = selectedImages.value.indexOf(image);
    if (imageIndex === -1) {
        selectedImages.value.push(image);
    } else {
        selectedImages.value.splice(imageIndex, 1);
    }

    // Open selection viewer if there are selected images
    showSelectionViewer.value = selectedImages.value.length > 0;
    document.body.classList.toggle('no-scroll', showSelectionViewer.value);
}

// Check if an image is selected
function isImageSelected(image) {
    return selectedImages.value.includes(image);
}

// Close selection viewer
function closeSelectionViewer() {
    showSelectionViewer.value = false;
    selectedImages.value = [];
    document.body.classList.remove('no-scroll');
}

// Share to social media
function shareToSocial(platform) {
    if (!selectionSwiper || selectedImages.value.length === 0) return;
    
    const currentIndex = selectionSwiper.activeIndex;
    const currentImage = selectedImages.value[currentIndex];
    const imageUrl = new URL(currentImage, window.location.origin).href;

    switch (platform) {
        case 'instagram':
            alert('Sharing to Instagram: ' + imageUrl);
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(imageUrl)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`, '_blank');
            break;
    }
}

// Keep your existing fullscreen viewer functions
const selectedImage = ref(null);
function openImage(image, index) {
    selectedImage.value = image;
    document.body.classList.add('no-scroll');
}
function closeImage() {
    selectedImage.value = null;
    document.body.classList.remove('no-scroll');
}
</script>

<style scoped>
/* Selection viewer with Swiper carousel */
.selection-viewer {
    background-color: rgba(0, 0, 0, 0.95);
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
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Swiper carousel styles */
.selected-carousel {
    width: 100%;
    height: 60vh;
    padding: 20px 0;
}

.swiper-slide {
    width: 80%;
    max-width: 400px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-content {
    position: relative;
    width: 100%;
    height: 150%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    margin-top: 6rem;
}

.slide-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-checkmark {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0099FF;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Navigation buttons */
.swiper-button-prev,
.swiper-button-next {
    color: white;
    background: rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    background: rgba(255, 255, 255, 0.4);
}

.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 20px;
    font-weight: bold;
}

/* Social buttons */
.social-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 3rem;
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
}

.social-btn.instagram {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.social-btn.telegram {
    background: #0088cc;
}

.social-btn.facebook {
    background: #3b5998;
}



.about-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
    justify-content: center;
    padding: 8px;
    margin-bottom: 5rem;
}

.image-cardd.specialll {
    width: 100px;
    height: 140px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
    cursor: pointer;
}

.about-gallery .image-cardd img {
    height: 140px;
    width: 100px;
    object-fit: cover;
    border-radius: 10px;
}

/* Selection checkbox */
.selection-checkbox {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    cursor: pointer;
}

.selection-checkbox.checked {
    background-color: #0099FF;
    border-color: #0099FF;
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
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.8);
}

.back-button {
    display: flex;
    align-items: center;
    color: #0099FF;
    cursor: pointer;
}

.back-button span {
    margin-left: 8px;
}

.fullscreen-viewer .viewer-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    overflow: hidden;
}

.image-container {
    width: 90%;
    height: 85%;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.viewer-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.viewer-footer {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.8);
}

.share-button {
    cursor: pointer;
    padding: 8px;
}

/* Selection viewer with carousel */
.selection-viewer {
    display: flex;
    flex-direction: column;
}

.selection-viewer .viewer-header {
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.8);
}

.selection-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 16px;
}

.close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

/* Carousel container */
.carousel-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    position: relative;
}

.carousel-current {
    position: relative;
    width: 220px;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.carousel-current img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-prev-hint,
.carousel-next-hint {
    position: absolute;
    width: 60px;
    height: 250px;
    overflow: hidden;
    opacity: 0.7;
    border-radius: 10px;
    cursor: pointer;
}

.carousel-prev-hint {
    left: 10px;
    z-index: 1;
}

.carousel-next-hint {
    right: 10px;
    z-index: 1;
}

.carousel-prev-hint img,
.carousel-next-hint img {
    width: 180px;
    height: 250px;
    object-fit: cover;
}

.carousel-prev-hint img {
    position: relative;
    left: -60px;
}

.carousel-next-hint img {
    position: relative;
    left: -60px;
}

/* Social buttons */
.social-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0.8);
}

.social-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
}

.social-btn.instagram {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.social-btn.telegram {
    background: #0088cc;
}

.social-btn.facebook {
    background: #3b5998;
}

:global(body.no-scroll) {
    overflow: hidden;
}
</style>