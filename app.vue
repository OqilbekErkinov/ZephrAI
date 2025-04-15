<template>
  <div>
    <NuxtLayout>
      <LoadingText />
      <Transition name="page" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
  </div>
</template>
<style>

.app-wrapper {
  margin: 0;
  padding: 0;
  background-color: #131313;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>