<template>
    <div class="home">
        <a v-link="{path:'/list'}">
            <div class="om-list">
                <div class="om-list-title om-ellipsis">
                    进入列表
                </div>
            </div>
        </a>
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