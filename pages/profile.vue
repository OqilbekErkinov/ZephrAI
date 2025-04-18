<template>
    <div class="container">
        <h1 class="profile-title">Профиль</h1>
        <div class="profile-photo">
            <div class="photo-container">
                <label for="fileUpload" class="photo-placeholder">
                    <NuxtImg format="webp" loading="lazy" :src="userImage || '/images/profile.png'" alt=""
                        class="avatar-img" />
                    <input type="file" id="fileUpload" @change="onFileChange" hidden />
                </label>
            </div>
        </div>
        <div class="premium-card">
            <NuxtLink to="/" class="premium-name">Zephyr<span style="color: #F0A8E1;">AI</span></NuxtLink>
            <NuxtLink to="/styles" class="premium-link">
                Премиум <br> подписка <span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="#F0A8E1" stroke-linecap="round" />
                    </svg>
                </span>
            </NuxtLink>
        </div>
        <div class="menu-items">
            <div class="menu-item">
                <div class="balance-label">Баланс</div>
                <div class="balance-value">
                    <svg @click="showModal = true" class="me-2" width="13" height="13" viewBox="0 0 13 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.8125 6.5C0.8125 3.35888 3.35888 0.8125 6.5 0.8125C9.64112 0.8125 12.1875 3.35888 12.1875 6.5C12.1875 9.64112 9.64112 12.1875 6.5 12.1875C3.35888 12.1875 0.8125 9.64112 0.8125 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0ZM6.31632 3.4125C6.08747 3.4125 5.90195 3.59802 5.90195 3.82687V4.02035C5.90195 4.24471 6.08383 4.4266 6.3082 4.4266C6.34507 4.4266 6.38079 4.42169 6.41475 4.41248C6.44871 4.42169 6.48444 4.4266 6.52131 4.4266C6.74568 4.4266 6.92756 4.24471 6.92756 4.02035V3.82687C6.92756 3.59802 6.74204 3.4125 6.51319 3.4125H6.31632ZM5.45574 5.63007C5.23137 5.63007 5.04949 5.81196 5.04949 6.03632C5.04949 6.26069 5.23137 6.44257 5.45574 6.44257H5.98719V8.775H5.2C4.97563 8.775 4.79375 8.95688 4.79375 9.18125C4.79375 9.40562 4.97563 9.5875 5.2 9.5875H6.39344H7.8C8.02436 9.5875 8.20625 9.40562 8.20625 9.18125C8.20625 8.95688 8.02436 8.775 7.8 8.775H6.79969V6.04445C6.79969 5.8156 6.61417 5.63007 6.38532 5.63007H5.45574Z"
                            fill="#808080" />
                    </svg>
                    <span class="credit-label">Кредит</span>
                    <span class="credit-value">0</span>
                    <CreditInfoModal :visible="showModal" @close="showModal = false" />
                </div>
            </div>
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <NuxtLink to="/gallery-pro" class="menu-text">
                    <svg class="me-2" width="24" height="19" viewBox="0 0 24 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.66667 0C5.19583 0 4 1.21719 4 2.71429V12.2143C4 13.7114 5.19583 14.9286 6.66667 14.9286H21.3333C22.8042 14.9286 24 13.7114 24 12.2143V2.71429C24 1.21719 22.8042 0 21.3333 0H6.66667ZM16.5 4.52522L20.5 10.6324C20.7042 10.9462 20.725 11.3449 20.55 11.6757C20.375 12.0065 20.0375 12.2143 19.6667 12.2143H13.6667H11.6667H8.33333C7.95 12.2143 7.6 11.9895 7.43333 11.6375C7.26667 11.2855 7.3125 10.8656 7.55417 10.5603L10.2208 7.16741C10.4125 6.92567 10.6958 6.78571 11 6.78571C11.3042 6.78571 11.5917 6.92567 11.7792 7.16741L12.5 8.08348L14.8333 4.52098C15.0208 4.24107 15.3333 4.07143 15.6667 4.07143C16 4.07143 16.3125 4.24107 16.5 4.52522ZM8 4.07143C8 3.71149 8.14048 3.3663 8.39052 3.11178C8.64057 2.85727 8.97971 2.71429 9.33333 2.71429C9.68696 2.71429 10.0261 2.85727 10.2761 3.11178C10.5262 3.3663 10.6667 3.71149 10.6667 4.07143C10.6667 4.43137 10.5262 4.77656 10.2761 5.03107C10.0261 5.28559 9.68696 5.42857 9.33333 5.42857C8.97971 5.42857 8.64057 5.28559 8.39052 5.03107C8.14048 4.77656 8 4.43137 8 4.07143ZM2 3.73214C2 3.16808 1.55417 2.71429 1 2.71429C0.445833 2.71429 0 3.16808 0 3.73214V13.2321C0 16.4172 2.5375 19 5.66667 19H19C19.5542 19 20 18.5462 20 17.9821C20 17.4181 19.5542 16.9643 19 16.9643H5.66667C3.64167 16.9643 2 15.2933 2 13.2321V3.73214Z"
                            fill="#515151" />
                    </svg>
                    Генераций <span style="font-size: 20px">0</span>
                </NuxtLink>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div v-if="!showTariffDropdown">
                <div class="menu-item" @click="toggleSettings">
                    <div class="menu-text" :class="{ 'subtitle-greyed': showSettings }">
                        <svg v-if="!showSettings" class="me-2" width="18" height="19" viewBox="0 0 18 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.9501 6.18363C18.0695 6.50654 17.9688 6.86658 17.7114 7.0967L16.0963 8.55909C16.1373 8.86716 16.1597 9.18265 16.1597 9.50186C16.1597 9.82106 16.1373 10.1365 16.0963 10.4446L17.7114 11.907C17.9688 12.1371 18.0695 12.4972 17.9501 12.8201C17.786 13.2618 17.5883 13.6849 17.3608 14.0932L17.1855 14.3938C16.9393 14.8021 16.6633 15.1881 16.3611 15.5519C16.1411 15.8191 15.7755 15.9082 15.4473 15.8043L13.3697 15.1473C12.8699 15.5296 12.3178 15.8488 11.7285 16.0901L11.2622 18.2094C11.1876 18.5472 10.9265 18.8144 10.5834 18.8701C10.0686 18.9555 9.53898 19 8.99814 19C8.45729 19 7.92763 18.9555 7.41289 18.8701C7.06973 18.8144 6.80863 18.5472 6.73403 18.2094L6.26779 16.0901C5.67845 15.8488 5.12641 15.5296 4.62659 15.1473L2.55272 15.808C2.22448 15.9119 1.85894 15.8191 1.63887 15.5556C1.33674 15.1918 1.06072 14.8058 0.814545 14.3975L0.639236 14.0969C0.411707 13.6886 0.214018 13.2655 0.0498982 12.8238C-0.0694614 12.5009 0.0312482 12.1408 0.288617 11.9107L1.9037 10.4483C1.86267 10.1365 1.84029 9.82106 1.84029 9.50186C1.84029 9.18265 1.86267 8.86716 1.9037 8.55909L0.288617 7.0967C0.0312482 6.86658 -0.0694614 6.50654 0.0498982 6.18363C0.214018 5.74194 0.411707 5.31881 0.639236 4.91053L0.814545 4.60988C1.06072 4.2016 1.33674 3.81559 1.63887 3.45185C1.85894 3.18461 2.22448 3.09553 2.55272 3.19945L4.63032 3.85642C5.13014 3.47412 5.68218 3.15491 6.27152 2.91366L6.73776 0.794296C6.81236 0.456534 7.07346 0.189295 7.41662 0.13362C7.93136 0.0445399 8.46102 0 9.00187 0C9.54271 0 10.0724 0.04454 10.5871 0.129908C10.9303 0.185583 11.1914 0.452823 11.266 0.790584L11.7322 2.90994C12.3216 3.1512 12.8736 3.4704 13.3734 3.85271L15.451 3.19574C15.7793 3.09181 16.1448 3.18461 16.3649 3.44813C16.667 3.81188 16.943 4.19789 17.1892 4.60617L17.3645 4.90682C17.592 5.3151 17.7897 5.73823 17.9538 6.17992L17.9501 6.18363ZM9.00187 12.4712C9.79327 12.4712 10.5523 12.1583 11.1119 11.6015C11.6715 11.0446 11.9859 10.2894 11.9859 9.50186C11.9859 8.71434 11.6715 7.95908 11.1119 7.40222C10.5523 6.84537 9.79327 6.53253 9.00187 6.53253C8.21046 6.53253 7.45147 6.84537 6.89187 7.40222C6.33226 7.95908 6.01788 8.71434 6.01788 9.50186C6.01788 10.2894 6.33226 11.0446 6.89187 11.6015C7.45147 12.1583 8.21046 12.4712 9.00187 12.4712Z"
                                fill="#515151" />
                        </svg>
                        Настройки
                    </div>
                    <div class="menu-arrow">
                        <svg v-if="showSettings" width="14" height="15" viewBox="0 0 14 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.69873L13 13.7669M13 1.69873L1 13.7669" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                        <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <transition name="expand">
                    <div v-if="showSettings" class="dropdown">
                        <div class="dropdown-subtitle" @click="toggleAvatarDropdown"
                            :class="{ 'subtitle-greyed': showAvatarDropdown }">
                            <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_449_7706)">
                                    <path
                                        d="M15.085 14.8289C14.3762 13.0959 12.6729 11.875 10.6875 11.875H8.3125C6.32715 11.875 4.62383 13.0959 3.91504 14.8289C2.59395 13.441 1.78125 11.567 1.78125 9.5C1.78125 5.23613 5.23613 1.78125 9.5 1.78125C13.7639 1.78125 17.2188 5.23613 17.2188 9.5C17.2188 11.567 16.4061 13.441 15.085 14.8289ZM9.5 19C12.0196 19 14.4359 17.9991 16.2175 16.2175C17.9991 14.4359 19 12.0196 19 9.5C19 6.98044 17.9991 4.56408 16.2175 2.78249C14.4359 1.00089 12.0196 0 9.5 0C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19ZM6.23438 7.42188C6.23438 8.28797 6.57843 9.1186 7.19085 9.73102C7.80328 10.3434 8.6339 10.6875 9.5 10.6875C10.3661 10.6875 11.1967 10.3434 11.8091 9.73102C12.4216 9.1186 12.7656 8.28797 12.7656 7.42188C12.7656 6.55578 12.4216 5.72515 11.8091 5.11273C11.1967 4.50031 10.3661 4.15625 9.5 4.15625C8.6339 4.15625 7.80328 4.50031 7.19085 5.11273C6.57843 5.72515 6.23438 6.55578 6.23438 7.42188Z"
                                        :fill="showAvatarDropdown ? '#F0A8E1' : '#515151'" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_449_7706">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Выбор аватара
                            <span class="menu-arrow">
                                <svg v-if="showAvatarDropdown" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
                                </svg>
                                <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                                </svg>
                            </span>
                        </div>
                        <transition name="expand">
                            <div v-if="showAvatarDropdown" class="dropdown-list pb-2"
                                :class="{ 'just-border': isDropdownOpen || selectedAvatar !== avatar }">
                                <div v-for="(avatar, index) in avatars" :key="index" class="dropdown-item"
                                    @click="selectedAvatar = avatar" :class="{
                                    'active-avatar': selectedAvatar === avatar,
                                    'greyed': isDropdownOpen || selectedAvatar !== avatar}">
                                    {{ avatar }}
                                    <span v-if="selectedAvatar === avatar" class="checkmark">
                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.5 9.5L0.812525 5.07503C0.291314 4.44958 0.736072 3.5 1.55023 3.5C1.83522 3.5 2.10549 3.62659 2.28794 3.84552L4.5 6.5L9.21206 0.845522C9.39451 0.626587 9.66478 0.5 9.94977 0.5C10.7639 0.5 11.2087 1.44958 10.6875 2.07503L4.5 9.5Z"
                                                fill="#23C72D" />
                                        </svg>
                                    </span>
                                </div>
                                <NuxtLink to="/selection" class="dropdown-ite add-new mt-3"
                                    style="text-decoration: none;">Добавить новый аватар
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.70459 6.61523H12M6.35231 1.23046V12" stroke="#F0A8E1"
                                            stroke-linecap="round" />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </transition>
                        <div class="dropdown-subtitle" @click="toggleAspectDropdown"
                            :class="{ 'subtitle-greyed': showAspectDropdown }">
                            <svg class="me-2" width="17" height="19" viewBox="0 0 17 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5714 2.96875C14.9054 2.96875 15.1786 3.23594 15.1786 3.5625V15.4375C15.1786 15.7641 14.9054 16.0312 14.5714 16.0312H2.42857C2.09464 16.0312 1.82143 15.7641 1.82143 15.4375V3.5625C1.82143 3.23594 2.09464 2.96875 2.42857 2.96875H14.5714ZM2.42857 1.1875C1.08906 1.1875 0 2.25254 0 3.5625V15.4375C0 16.7475 1.08906 17.8125 2.42857 17.8125H14.5714C15.9109 17.8125 17 16.7475 17 15.4375V3.5625C17 2.25254 15.9109 1.1875 14.5714 1.1875H2.42857Z"
                                    :fill="showAspectDropdown ? '#F0A8E1' : '#515151'" />
                            </svg>
                            Соотношение сторон
                            <span class="menu-arrow">
                                <svg v-if="showAspectDropdown" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L10 4L13 7" stroke="white" stroke-linecap="round" />
                                </svg>
                                <svg v-else width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                                </svg>
                            </span>
                        </div>
                        <transition name="expand">
                            <div v-if="showAspectDropdown" class="dropdown-list"
                                :class="{ 'just-border': isDropdownOpen || selectedAspect !== option }">
                                <div v-for="(option, index) in aspectRatios" :key="index" class="dropdown-item"
                                    @click="selectedAspect = option" :class="{
                                    'active-avatar': selectedAspect === option,
                                    'greyed': isDropdownOpen || selectedAspect !== option}">
                                    {{ option }}
                                    <span v-if="selectedAspect === option" class="checkmark">
                                        <svg width="15" height="14" viewBox="0 0 11 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.5 9.5L0.812525 5.07503C0.291314 4.44958 0.736072 3.5 1.55023 3.5C1.83522 3.5 2.10549 3.62659 2.28794 3.84552L4.5 6.5L9.21206 0.845522C9.39451 0.626587 9.66478 0.5 9.94977 0.5C10.7639 0.5 11.2087 1.44958 10.6875 2.07503L4.5 9.5Z"
                                                fill="#23C72D" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </transition>
                        <div class="dropdown-subtitle" @click="showLanguageModal = true">
                            <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_449_8189)">
                                    <path
                                        d="M13.0625 9.5C13.0625 10.3238 13.018 11.118 12.94 11.875H6.06367C5.98203 11.118 5.94121 10.3238 5.94121 9.5C5.94121 8.67617 5.98574 7.88203 6.06367 7.125H12.94C13.0217 7.88203 13.0625 8.67617 13.0625 9.5ZM14.1312 7.125H18.6994C18.8961 7.88574 19 8.67988 19 9.5C19 10.3201 18.8961 11.1143 18.6994 11.875H14.1312C14.2092 11.1105 14.25 10.3164 14.25 9.5C14.25 8.68359 14.2092 7.88945 14.1312 7.125ZM18.3098 5.9375H13.9791C13.608 3.56621 12.8732 1.58086 11.927 0.311719C14.8326 1.07988 17.1965 3.1877 18.3061 5.9375H18.3098ZM12.7768 5.9375H6.22324C6.44961 4.58672 6.79844 3.3918 7.2252 2.42324C7.61484 1.54746 8.04902 0.912891 8.46836 0.512109C8.88398 0.11875 9.2291 0 9.5 0C9.7709 0 10.116 0.11875 10.5316 0.512109C10.951 0.912891 11.3852 1.54746 11.7748 2.42324C12.2053 3.38809 12.5504 4.58301 12.7768 5.9375ZM5.0209 5.9375H0.690234C1.80352 3.1877 4.16367 1.07988 7.07305 0.311719C6.12676 1.58086 5.39199 3.56621 5.0209 5.9375ZM0.300586 7.125H4.86875C4.79082 7.88945 4.75 8.68359 4.75 9.5C4.75 10.3164 4.79082 11.1105 4.86875 11.875H0.300586C0.103906 11.1143 0 10.3201 0 9.5C0 8.67988 0.103906 7.88574 0.300586 7.125ZM7.2252 16.573C6.79473 15.6082 6.44961 14.4133 6.22324 13.0625H12.7768C12.5504 14.4133 12.2016 15.6082 11.7748 16.573C11.3852 17.4488 10.951 18.0834 10.5316 18.4842C10.116 18.8813 9.7709 19 9.5 19C9.2291 19 8.88398 18.8813 8.46836 18.4879C8.04902 18.0871 7.61484 17.4525 7.2252 16.5768V16.573ZM5.0209 13.0625C5.39199 15.4338 6.12676 17.4191 7.07305 18.6883C4.16367 17.9201 1.80352 15.8123 0.690234 13.0625H5.0209ZM18.3098 13.0625C17.1965 15.8123 14.8363 17.9201 11.9307 18.6883C12.877 17.4191 13.608 15.4338 13.9828 13.0625H18.3135H18.3098Z"
                                        :fill="showLanguageModal ? '#F0A8E1' : '#515151'" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_449_8189">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Язык
                            <span class="menu-arrow" style="color: #515151; font-size: 15px">Русский</span>
                        </div>
                        <LanguageModal :visible="showLanguageModal" @close="showLanguageModal = false" />
                    </div>
                </transition>
            </div>
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <div @click="toggleTariffDropdown" class="menu-text">
                    <svg class="me-2" width="24" height="19" viewBox="0 0 24 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.98906 1.5375L6.50156 3H3C1.34531 3 0 4.34531 0 6V16C0 17.6547 1.34531 19 3 19H21C22.6547 19 24 17.6547 24 16V6C24 4.34531 22.6547 3 21 3H17.4984L17.0109 1.5375C16.7062 0.61875 15.8484 0 14.8781 0H9.12188C8.15156 0 7.29375 0.61875 6.98906 1.5375ZM12 6.5C13.1935 6.5 14.3381 6.97411 15.182 7.81802C16.0259 8.66193 16.5 9.80653 16.5 11C16.5 12.1935 16.0259 13.3381 15.182 14.182C14.3381 15.0259 13.1935 15.5 12 15.5C10.8065 15.5 9.66193 15.0259 8.81802 14.182C7.97411 13.3381 7.5 12.1935 7.5 11C7.5 9.80653 7.97411 8.66193 8.81802 7.81802C9.66193 6.97411 10.8065 6.5 12 6.5Z"
                            fill="#515151" />
                    </svg>
                    Купить фото
                </div>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <transition name="expand">
                <div v-if="showTariffDropdown" class="tariff-dropdown">
                    <div class="dropdown-header-with-close">
                        <p class="dropdown-header">Выберите один из подходящих тарифов</p>
                        <span class="close-icon" @click="showTariffDropdown = false">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.69873L13 13.7669M13 1.69873L1 13.7669" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                        </span>
                    </div>
                    <div v-for="amount in [25, 50, 100, 200]" :key="amount" class="tariff-btn"
                        @click="selectPackage(amount)">
                        {{ amount }} фото
                    </div>
                </div>
            </transition>
            <PaymentModal :visible="showPaymentModal" @close="showPaymentModal = false" />
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <a @click="showCareServiceModal = true" target="_blank" class="menu-text">
                    <svg class="me-2" width="22" height="19" viewBox="0 0 22 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.04531 11.2064L9.80977 18.527C10.132 18.8308 10.5574 19 11 19C11.4426 19 11.868 18.8308 12.1902 18.527L19.9547 11.2064C21.2609 9.9784 22 8.25566 22 6.45481V6.20313C22 3.16989 19.8301 0.58361 16.8695 0.0845793C14.9102 -0.245215 12.9164 0.401355 11.5156 1.816L11 2.33672L10.4844 1.816C9.08359 0.401355 7.08984 -0.245215 5.13047 0.0845793C2.16992 0.58361 0 3.16989 0 6.20313V6.45481C0 8.25566 0.739062 9.9784 2.04531 11.2064Z"
                            fill="#515151" />
                    </svg>
                    Служба заботы
                </a>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
                <CareServiceModal :visible="showCareServiceModal" @close="showCareServiceModal = false" />
            </div>
            <div class="menu-item" v-if="!showSettings && !showTariffDropdown">
                <div @click="showSocialNetworkModal = true" class="menu-text">
                    <svg class="me-2" width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 0C4.92339 0 0 4.92339 0 11C0 17.0766 4.92339 22 11 22C17.0766 22 22 17.0766 22 11C22 4.92339 17.0766 0 11 0ZM16.1008 7.48266C15.9367 9.22137 15.2181 13.444 14.8544 15.3911C14.6992 16.2161 14.3976 16.4911 14.1048 16.5177C13.4661 16.5754 12.9827 16.0964 12.3617 15.6883C11.3948 15.054 10.8448 14.6593 9.90887 14.0383C8.82218 13.3242 9.52742 12.9294 10.144 12.2863C10.3081 12.1177 13.1202 9.55847 13.1734 9.32782C13.1823 9.29677 13.1867 9.19032 13.1202 9.13266C13.0536 9.075 12.9605 9.09718 12.894 9.11048C12.7964 9.13118 11.2499 10.1528 8.25444 12.1754C7.8168 12.477 7.41909 12.6234 7.06129 12.6145C6.66653 12.6056 5.9125 12.3927 5.34919 12.2109C4.66169 11.9891 4.11169 11.8694 4.16048 11.4879C4.18414 11.2898 4.45766 11.0872 4.98105 10.8802C8.18643 9.48454 10.3243 8.56344 11.3948 8.11694C14.4508 6.84839 15.0851 6.62661 15.4976 6.61774C15.5907 6.61774 15.7903 6.63992 15.9234 6.74637C16.0102 6.82272 16.0656 6.92865 16.0786 7.04355C16.1026 7.18861 16.1101 7.33592 16.1008 7.48266Z"
                            fill="#515151" />
                    </svg>
                    Соцсети
                </div>
                <div class="menu-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="white" stroke-linecap="round" />
                    </svg>
                </div>
                <SocialNetworkModal :visible="showSocialNetworkModal" @close="showSocialNetworkModal = false" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const PaymentModal = defineAsyncComponent(() =>
    import('~/components/PaymentModal.vue')
)
const CreditInfoModal = defineAsyncComponent(() =>
    import('~/components/CreditInfoModal.vue')
)
const CareServiceModal = defineAsyncComponent(() =>
    import('~/components/CareServiceModal.vue')
)
const SocialNetworkModal = defineAsyncComponent(() =>
    import('~/components/SocialNetworkModal.vue')
)
const LanguageModal = defineAsyncComponent(() =>
    import('~/components/LanguageModal.vue')
)

const showSettings = ref(false)
const showAvatarDropdown = ref(false)
const showAspectDropdown = ref(false)
const showModal = ref(false)
const showCareServiceModal = ref(false)
const showSocialNetworkModal = ref(false)
const showTariffDropdown = ref(false)
const showPaymentModal = ref(false)
const showLanguageModal = ref(false)
const avatars = ref(['Аватар 1', 'Аватар 2', 'Наташа'])
const selectedAvatar = ref('Аватар 2')
const aspectRatios = ref(['Фото 3:4', 'Фото 16:9', 'Фото Квадрат', 'Фото Альбом'])
const selectedAspect = ref('Фото 3:4')
const selectedPhotoPackage = ref(null)
const userImage = ref('')
const onFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            userImage.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}
const addNewAvatar = () => {
    const newName = prompt('Yangi avatar nomi:')
    if (newName) avatars.value.push(newName)
}
const toggleSettings = () => {
    showSettings.value = !showSettings.value
    showTariffDropdown.value = false
    if (!showSettings.value) {
        showAvatarDropdown.value = false
        showAspectDropdown.value = false
    }
}
const toggleAvatarDropdown = () => {
    showAvatarDropdown.value = !showAvatarDropdown.value
    showAspectDropdown.value = false
}
const toggleAspectDropdown = () => {
    showAspectDropdown.value = !showAspectDropdown.value
    showAvatarDropdown.value = false
}
const toggleTariffDropdown = () => {
    showTariffDropdown.value = !showTariffDropdown.value
    showSettings.value = false
}
const selectPackage = (amount) => {
    selectedPhotoPackage.value = amount
    showPaymentModal.value = true
}
</script>