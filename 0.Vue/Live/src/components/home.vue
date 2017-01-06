<template>
    <div class="home">
        <router-link to="/list">to list</router-link>
        <router-link to="/live">to live</router-link>
    </div>
</template>
<script>
    export default{
        name:'home',
        data(){
            return{}
        }
    }
</script>
<style>
.fade-transition {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
</style>