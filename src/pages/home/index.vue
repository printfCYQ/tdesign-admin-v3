<template>
    <div class="bg-[#edfacd]">
        {{ appStore.count }} --- <t-button @click="appStore.increment">add</t-button> --- {{ appStore.doubleCount }}
    </div>
    <div>
        <t-button @click="login">login</t-button>
    </div>
</template>
  
<script setup lang="ts">
import router from "@/router";
import { useAppStore } from "@/store/index";
const appStore = useAppStore()

const login = () => {
    router.push('/login')
}
</script>
  
<style scoped></style>