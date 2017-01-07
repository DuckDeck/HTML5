<template>
    <div>
     <header class="doubanHead">
        <div class="doubanHeadDiv">
             <a href="#/index" style="color: #2384E8;">电影</a>
             <a href="#/book" style="color: #9F7860;">图书</a>
        </div>
        <div class="doubanSearchDiv">
            <input class="doubanSearch" type="text" placeholder="请输入作品名称搜索" name="" value="">
        </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<style >
ul{
    margin: 0;
    padding: 0;
}
.doubanHead{
    width: 100%;
    background: #ddd;
    font-size: 0.5rem;
    padding-top: 0.1rem;
}

div.doubanHeadDiv a{
    text-decoration: none;
    padding-left: 0.1rem;
}
div.doubanSearchDiv{
    padding: 0.2rem;
}
input.doubanSearch{
    width: 99%;
    border: 1px #c40000 solid;
    height: 0.6rem;
}
</style>