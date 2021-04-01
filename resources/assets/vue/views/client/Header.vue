<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Header extends Vue {
  payment_links(){
       this.$router.push('/payment_links'); 
    }
    contact_us(){
       this.$router.push('/contact_us'); 
    }
    pricing_plans(){
       this.$router.push('/pricing_plans'); 
    }
    goToHome(){
       this.$router.push('/'); 
    }
    mounted() {
        
    }
}
</script>

<template>
  <header>
    <div class="wrapper">
        <div class="left">
            <div class="logoWrapper">
                <div class="siteLogo">
                    <img src="img/logo.png" alt="logo">
                    <span>money space</span>
                    <a href="javascript:" @click.prevent="goToHome()">main</a>
                </div>
            </div>
            <div class="menuWrapper menuSm">
                <div class="inner">
                    <span class="icon-close close closeMenuBtn"></span>
                    <span class="menuTitleSm">Menu</span>
                    <nav>
                        <ul class="menuList">
                            <li><a href="javascript:" @click.prevent="payment_links()">Payment Links</a></li>
                            <li><a href="javascript:" @click.prevent="pricing_plans()">Pricing & Plans</a></li>
                            <li><a href="javascript:" @click.prevent="contact_us()">Contact Us</a></li>

                            <!-- <li><a href="#">Payment Links</a></li>
                            <li><a href="#">Pricing & Plans</a></li>
                            <li><a href="#">Contact Us</a></li> -->
                        </ul>
                        <div class="langBlock sm">
                            <div class="title">Language</div>
                            <div class="head">
                                <div class="in">
                                    <img src="img/eng.png" alt="eng" class="lang">
                                    <span class="text">English</span>
                                    <img src="img/arrow_right.svg" alt="arrow" class="arr">
                                </div>
                            </div>
                            <div class="list">
                                <div class="in">
                                    <a href="#">
                                        <img src="img/thai.png" alt="thai" class="lang">
                                        <span class="text">Thai</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="langBlock">
                <div class="head">
                    <div class="in">
                        <img src="img/eng.png" alt="eng" class="lang">
                        <img src="img/arrow.svg" alt="arrow" class="arr">
                    </div>
                </div>
                <div class="list">
                    <div class="in">
                        <a href="#">
                            <img src="img/thai.png" alt="thai" class="lang">
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" class="btnFillType1">Signup</a>
            <a href="#" class="siteLink loginSm">Sign Up</a>
            <div class="openMenuBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  </header>
</template>

<style>
</style>