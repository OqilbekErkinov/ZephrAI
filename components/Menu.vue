<template>
    <div class="menu-back container" style="padding: 0 !important; margin: 0">
        <div class="menu container">
            <NuxtLink to="/" :class="{ active: $route.path === '/' }" aria-label="Home">
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.7144 10.9785C24.7144 11.752 24.0779 12.3578 23.3564 12.3578H21.9984L22.0281 19.2414C22.0281 19.3574 22.0196 19.4734 22.0069 19.5895V20.2855C22.0069 21.2352 21.2472 22.0043 20.3093 22.0043H19.6303C19.5836 22.0043 19.537 22.0043 19.4903 22C19.4309 22.0043 19.3714 22.0043 19.312 22.0043L17.9328 22H16.9143C15.9764 22 15.2167 21.2309 15.2167 20.2813V19.25V16.5C15.2167 15.7395 14.6099 15.125 13.8587 15.125H11.1427C10.3915 15.125 9.78464 15.7395 9.78464 16.5V19.25V20.2813C9.78464 21.2309 9.025 22 8.08711 22H7.06859H5.71481C5.65116 22 5.5875 21.9957 5.52384 21.9914C5.47292 21.9957 5.42199 22 5.37106 22H4.69205C3.75417 22 2.99452 21.2309 2.99452 20.2813V15.4688C2.99452 15.4301 2.99452 15.3871 2.99876 15.3484V12.3535H1.64074C0.87685 12.3535 0.282715 11.752 0.282715 10.9742C0.282715 10.5875 0.41003 10.2438 0.707098 9.94297L11.584 0.34375C11.8811 0.0429688 12.2206 0 12.5177 0C12.8147 0 13.1542 0.0859375 13.4089 0.300781L24.2476 9.94727C24.5871 10.248 24.7569 10.5918 24.7144 10.9785Z"
                        :fill="$route.path === '/' ? '#F0A8E1' : '#525252'" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/gallery" :class="{ active: $route.path === '/gallery' }" aria-label="Gallery">
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_193_17)">
                        <path
                            d="M6.875 1.375C5.3582 1.375 4.125 2.6082 4.125 4.125V13.75C4.125 15.2668 5.3582 16.5 6.875 16.5H22C23.5168 16.5 24.75 15.2668 24.75 13.75V4.125C24.75 2.6082 23.5168 1.375 22 1.375H6.875ZM17.0156 5.95977L21.1406 12.1473C21.3512 12.4652 21.3727 12.8691 21.1922 13.2043C21.0117 13.5395 20.6637 13.75 20.2812 13.75H14.0938H12.0312H8.59375C8.19844 13.75 7.8375 13.5223 7.66562 13.1656C7.49375 12.809 7.54102 12.3836 7.79023 12.0742L10.5402 8.63672C10.7379 8.3918 11.0301 8.25 11.3438 8.25C11.6574 8.25 11.9539 8.3918 12.1473 8.63672L12.8906 9.56485L15.2969 5.95547C15.4902 5.67188 15.8125 5.5 16.1562 5.5C16.5 5.5 16.8223 5.67188 17.0156 5.95977ZM8.25 5.5C8.25 5.13533 8.39487 4.78559 8.65273 4.52773C8.91059 4.26987 9.26033 4.125 9.625 4.125C9.98967 4.125 10.3394 4.26987 10.5973 4.52773C10.8551 4.78559 11 5.13533 11 5.5C11 5.86467 10.8551 6.21441 10.5973 6.47227C10.3394 6.73013 9.98967 6.875 9.625 6.875C9.26033 6.875 8.91059 6.73013 8.65273 6.47227C8.39487 6.21441 8.25 5.86467 8.25 5.5ZM2.0625 5.15625C2.0625 4.58477 1.60273 4.125 1.03125 4.125C0.459766 4.125 0 4.58477 0 5.15625V14.7813C0 18.0082 2.6168 20.625 5.84375 20.625H19.5938C20.1652 20.625 20.625 20.1652 20.625 19.5938C20.625 19.0223 20.1652 18.5625 19.5938 18.5625H5.84375C3.75547 18.5625 2.0625 16.8695 2.0625 14.7813V5.15625Z"
                            :fill="['/gallery', '/gallery-pro'].includes($route.path) ? '#F0A8E1' : '#525252'" />
                    </g>
                    <defs>
                        <clipPath id="clip0_193_17">
                            <rect width="24.75" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </NuxtLink>
            <NuxtLink to="/styles" :class="{ active: $route.path === '/styles' }" aria-label="Styles">
                <NuxtImg format="webp" style="margin-top: -1.2rem; width: 40px;"
                    :src="['/styles', '/premium', '/selection', '/download', '/styles-category', '/styles-type', '/styles-pro'].includes($route.path) ? '/images/logo2.webp' : '/images/logo1.webp'"
                    alt="Logo" />
            </NuxtLink>
            <NuxtLink to="/creator" :class="{ active: $route.path === '/creator' }" aria-label="Creator">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.9375 21.1406L8.92891 21.1492L8.70977 21.3125L7.975 21.8625C7.76875 22.0172 7.48945 22.043 7.25313 21.927C7.0168 21.8109 6.875 21.5746 6.875 21.3125V20.3973V20.1223V20.1094V19.9375V17.875H4.8125H2.75C1.2332 17.875 0 16.6418 0 15.125V2.75C0 1.2332 1.2332 0 2.75 0H19.25C20.7668 0 22 1.2332 22 2.75V15.125C22 16.6418 20.7668 17.875 19.25 17.875H13.2902L8.9375 21.1406ZM5 11C6.10457 11 7 10.1046 7 9C7 7.89543 6.10457 7 5 7C3.89543 7 3 7.89543 3 9C3 10.1046 3.89543 11 5 11ZM13 9C13 10.1046 12.1046 11 11 11C9.89543 11 9 10.1046 9 9C9 7.89543 9.89543 7 11 7C12.1046 7 13 7.89543 13 9ZM17 11C18.1046 11 19 10.1046 19 9C19 7.89543 18.1046 7 17 7C15.8954 7 15 7.89543 15 9C15 10.1046 15.8954 11 17 11Z"
                        :fill="['/creator', '/creator-pro'].includes($route.path) ? '#F0A8E1' : '#525252'" />
                </svg>
            </NuxtLink>
            <NuxtLink to="/profile" :class="{ active: $route.path === '/profile' }" aria-label="Profile">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_193_1091)">
                        <path
                            d="M9.625 11C11.0837 11 12.4826 10.4205 13.5141 9.38909C14.5455 8.35764 15.125 6.95869 15.125 5.5C15.125 4.04131 14.5455 2.64236 13.5141 1.61091C12.4826 0.579463 11.0837 0 9.625 0C8.16631 0 6.76736 0.579463 5.73591 1.61091C4.70446 2.64236 4.125 4.04131 4.125 5.5C4.125 6.95869 4.70446 8.35764 5.73591 9.38909C6.76736 10.4205 8.16631 11 9.625 11ZM7.66133 13.0625C3.42891 13.0625 0 16.4914 0 20.7238C0 21.4285 0.571484 22 1.27617 22H17.9738C18.6785 22 19.25 21.4285 19.25 20.7238C19.25 16.4914 15.8211 13.0625 11.5887 13.0625H7.66133Z"
                            :fill="$route.path === '/profile' ? '#F0A8E1' : '#515151'" />
                    </g>
                    <defs>
                        <clipPath id="clip0_193_1091">
                            <rect width="19.25" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.menu {
    position: fixed;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #2A2A2A;
    box-shadow: 0 0 8px rgba(240, 168, 225, 0.5);
    padding: 8px;
    border-radius: 15px;
    width: 70%;
    height: 50px;
    color: white;
    z-index: 4100;
}
.menu-back {
    background: url('/images/buyangisi.png') no-repeat center;
    background-size: cover;
    width: 100%;
    height: 13.5%;
    position: fixed;
    bottom: 0rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4150;
}
.menu a svg path {
    transition: fill 0.3s ease;
}
.menu a:hover svg path {
    fill: #F0A8E1 !important;
}
.menu a.active svg path {
    fill: #F0A8E1 !important;
}
</style>
