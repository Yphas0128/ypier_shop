<template>
    <div class="shop_head">
        <head-top></head-top>
        <div class="center_top width_center_1200" v-show="center_top">
             <div class="shop_logo float_left">
                <router-link to="/"><img width="180px" height="55px" src="@/assets/images/logo.png" alt="商城"></router-link>
            </div>
            <div class="shop_top_seach float_left">
                 <ul>
                    <li><input class="search_input" v-model="keywords" type="text" placeholder="手机 笔记本电脑 衣服"></li>
                    <li><button class="search_button" type="button" @click="search()"><svg-icon icon-class="search" ></svg-icon></button></li>
                    <li>
                        <div class="index_my_car">
                            <span @click="to_my_store()">我的商城<svg-icon icon-class="shop" ></svg-icon></span>
                            <span><router-link to="/cart/index">我的购物车<svg-icon icon-class="cart" ></svg-icon></router-link><div class="shop_car_dot">{{cart_count}}</div></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import HeadTop from "@/components/home/public/head_top.vue";
export default {
    data(){
        return {
            center_top: true,
            keywords:"",
            cart_count:"",
        }
    },
    components:{
        HeadTop
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.shop_head{
    z-index: 666;
    position: fixed;
    background: #fff;
    left:0;
    right: 0;
    top:0
}
.center_top:after{
    display: block;
    clear:both;
    content:'';
}
.shop_logo{
    margin-top: 40px;
    margin-bottom: 40px;
}
.shop_top_seach{
    margin-top: 44px;
    margin-left: 200px;
    ul li{
        float: left;
    }
    .search_input{
        width: 434px;
        height: 38px;
        padding: 10px;
        outline: 0;
        border: 1px solid #efefef;
        border-right: none;
        float: left;
        box-sizing: border-box;
        font-size: 12px;
    }
    .search_button{
        border: 1px solid #efefef;
        float: left;
        width: 38px;
        height: 38px;
        background: #fff;
        outline: 0;
        text-align: center;
    }
    .search_button:hover{
        color:#fff;
        background:#333;
    }
    .index_my_car{
        height: 38px;
        border: 1px solid #efefef;
        margin-left: 30px;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 38px;
        padding: 0 20px;
        span:hover{
            color:#ca151e;
        }
        span{
            margin-right: 20px;
            position: relative;
            i{
                font-size: 13px;
                margin-left: 6px;
            }
            a:hover{
                color:#ca151e;
            }
            .shop_car_dot {
                position: absolute;
                top: -24px;
                line-height: 16px;
                background: #ca151e;
                padding: 0 4px;
                color: #fff;
                border-radius: 4px;
                right: -10px;
            }
        }
        span:last-child{
            margin-right: 0;
            i{
                font-size: 14px;
            }
        }
        
    }
}
</style>