<template>
    <div class="container">
        <div class="shop_top"><shop-top></shop-top></div>
        <div><banner :list="banner_list"></banner></div>
        <banner-bottom-adv :index_adv="banner_bottom_adv"></banner-bottom-adv>
        <div class="shop_content">
            
        </div>
    </div>
</template>
<script>
import ShopTop from "@/components/home/public/head.vue";
import banner from "@/components/home/public/banner.vue";
import BannerBottomAdv from "@/components/home/public/banner_bottom_adv.vue";
import seckill from "@/components/home/public/seckill.vue";
export default {
    data(){
        return{
            banner_list:[
                {adv_image:"@/assets/images/logo.png",adv_link:"/"},
                {adv_image:"@/assets/images/logo.png",adv_link:"/"},
                {adv_image:"@/assets/images/logo.png",adv_link:"/"}
            ],  // 幻灯片
            banner_bottom_adv:[], // 三联广告图片
        }
    },
    components:{
        ShopTop,
        banner,
        BannerBottomAdv,
        seckill
    }
}
</script>
<style  lang="scss" scoped>
.shop_content{
    background: #f5f5f5;
    padding:20px 0 60px 0;
    margin-top:40px;
}
</style>