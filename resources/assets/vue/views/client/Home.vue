<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import Header from './Header.vue';
import Footer from './Footer.vue';

@Component({
  components: {
      Header,
      Footer
  },
})
export default class Home extends Vue {
    mounted() {
        window.scrollTo(0, 0)
  }
}
</script>

<template>
    <div class="bodyWrap">
        <div class="startSection">
            <Header></Header>
            <div class="container">
                <div class="mainBanner">
                    <div class="wrapper">
                        <div class="left">
                            <div class="bannerInfo">
                                <span class="slogan">Accepting credit cards online just got easier!</span>
                                <p>evolve your business in new markets around the globe with our straightforward payment
                                    solutions.</p>
                                <a href="#" class="btnIconType1">
                                    <span class="in">
                                        <span class="text">Signup</span>
                                        <span class="icon-arrow"></span>
                                    </span>
                                </a>
                            </div>
                            <ul class="partnersList">
                                <li><img src="img/partner_1_2x.png" alt="partner"></li>
                                <li><img src="img/partner_2_2x.png" alt="partner"></li>
                                <li><img src="img/partner_3_2x.png" alt="partner"></li>
                                <li><img src="img/partner_4_2x.png" alt="partner"></li>
                            </ul>
                        </div>
                        <div class="right">
                            <div class="createLinkAnimation">
                                <div class="animationWrapper animated">
                                    <div class="createLinkForm animated">
                                        <div class="headBlock">
                                            <span class="title">Create payment link</span>
                                            <span class="subtitle">You can set details and send links to your
                                                customers.</span>
                                        </div>
                                        <div class="formBlock">
                                            <div class="fieldWrap">
                                                <div class="fieldItem">
                                                    <div class="inBlockType1">
                                                        <span class="label">Prouduct / Service Name:</span>
                                                        <div class="inWrap">
                                                            <div class="input">
                                                                <span class="typingText product animated">iPhone 8 / 32gb</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fieldItem">
                                                    <div class="inBlockType1">
                                                        <span class="label">Amount ( ฿ )</span>
                                                        <div class="inWrap">
                                                            <div class="input">
                                                                <span class="typingText sum animated">25,000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkWrap">
                                                <div class="checkBtn">
                                                    <input type="checkbox" name="card" id="card">
                                                    <label for="card">Credit / Debit Card</label>
                                                </div>
                                            </div>
                                            <span class="btnFillType2 full">Create Payment Link</span>
                                        </div>
                                    </div>
                                    <div class="createLinkCard animated">
                                        <div class="img">
                                            <img src="img/product_image.png" alt="product image">
                                        </div>
                                        <div class="content">
                                            <div class="info">
                                                <span class="title">iPhone 8 / 32gb</span>
                                                <span class="cost">$25,000</span>
                                            </div>
                                            <div class="button">
                                                <button class="btnIconType7">
                                                    <img src="img/logo.png" alt="logo" class="icon">
                                                    <span class="text">Pay</span>
                                                </button>
                                                <button class="btnIconType7 dark animated">
                                                    <img src="img/logo_3.png" alt="logo" class="icon">
                                                    <span class="text">Pay</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="createLinkPayForm animated">
                                        <div class="paymentForm">
                                            <div class="headBlock">
                                                <div class="formTitle">Checkout</div>
                                                <div class="siteLogo2">
                                                    <img src="img/logo.png" alt="logo">
                                                    <div class="data">
                                                        <span class="subtitle">powered by </span>
                                                        <span class="title">money space</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="formBlock">
                                                <div class="fieldsWrap">
                                                    <div class="fieldItem">
                                                        <div class="col">
                                                            <div class="inBlockType1">
                                                                <span class="label">Card Number </span>
                                                                <div class="inWrap">
                                                                    <div class="input">
                                                                        <span class="fadingText animated">1123 2000 3200
                                                                            2391</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="fieldItem">
                                                        <div class="col">
                                                            <div class="inBlockType1">
                                                                <span class="label">Exp Date</span>
                                                                <div class="inWrap comb">
                                                                    <div class="input">
                                                                        <span class="fadingText animated">08</span>
                                                                    </div>
                                                                    <div class="input">
                                                                        <span class="fadingText animated">2020</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="inBlockType1">
                                                                <span class="label">CVC</span>
                                                                <div class="inWrap">
                                                                    <div class="input">
                                                                        <span class="fadingText animated">032</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="checkWrap">
                                                    <div class="checkBtn">
                                                        <input type="checkbox" name="card" id="card">
                                                        <label for="card">Credit / Debit Card</label>
                                                    </div>
                                                </div>
                                                <button class="btnFillType2 full upp">PAY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="createLinkPayCard animated">
                                        <img src="img/card.png" alt="card">
                                    </div>
                                    <div class="createLinkResult animated">
                                        <div class="icon"><img src="img/done.svg" alt="done"></div>
                                        <span class="text">On your way</span>
                                    </div>
                                    <div class="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mainAbout">
            <div class="container">
                <div class="wrapper">
                    <div class="left">
                        <div class="getLinkWrapper">
                            <div class="getLinkBlock animatedBlock">
                                <div class="field nameBlock">
                                    <span class="param">Product Name</span>
                                    <span class="data name animated">iPhone 8 - Black</span>
                                </div>
                                <div class="field priceBlock animated">
                                    <span class="param">Price</span>
                                    <span class="data price animated">$600</span>
                                </div>
                                <div class="btnIconType2 animated">
                                    <span class="text animated">
                                        <span class="animated">space.</span><span class="animated">pay</span><span
                                            class="animated">/</span><span class="animated">22010</span>
                                    </span>
                                    <span class="icon-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="titleContainer">
                            <span class="sectionTitle lg">No Website,<br> Pay-by-Link</span>
                        </div>
                        <div class="contentContainer">
                            <div class="textBlock">
                                <p>If you sell on social media platforms or blogs, our payment form and payment button
                                    is the perfect solution for you. Now you can create and share links instantly –
                                    whenever, wherever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages">
            <div class="container">
                <div class="wrapper">
                    <div class="advantagesList">
                        <div class="item">
                            <div class="advantagesItem type1">
                                <div class="img">
                                    <img src="img/advantage_1.svg" alt="advantage">
                                </div>
                                <span class="title">Fraud <br>management</span>
                                <p>Powered by advanced machine learning techniques to safeguard your profits,
                                    without lowering conversion.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="advantagesItem type2">
                                <div class="img">
                                    <img src="img/advantage_2.svg" alt="advantage">
                                </div>
                                <span class="title">Lowest <br>Price</span>
                                <p>Capitalize on operational and cost efficiencies to further grow your
                                    business, with the rate of 2.59%</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="advantagesItem type3">
                                <div class="img">
                                    <img src="img/advantage_3.svg" alt="advantage">
                                </div>
                                <span class="title">More payment <br>options</span>
                                <p>Boost sales volume and creditability to your online merchant</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="advantagesItem type4">
                                <div class="img">
                                    <img src="img/advantage_4.svg" alt="advantage">
                                </div>
                                <span class="title">Security as <br>a Culture</span>
                                <p>Assure your security with the global certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mainInfo">
            <div class="container">
                <div class="wrapper">
                    <div class="titleContainer">
                        <span class="sectionTitle md">Simple API</span>
                    </div>
                    <div class="contentContainer">
                        <div class="infoBlock">
                            <div class="item">
                                <div class="textBlock lg">
                                    <p>If you own a website, whether a shopping cart platform, or custom developed
                                        using
                                        web platform, our plugins are easy to integrate!</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="textBlock lg">
                                    <span class="title">Safe and Secure</span>
                                    <p>Our industry-leading technology protects your money and guarantees it arrives
                                        safely every time. We’re licensed by government regulators around the world,
                                        so
                                        you can be sure we meet the highest possible standards</p>
                                </div>
                            </div>
                        </div>
                        <ul class="securityList">
                            <li>
                                <img src="img/security_1.png" alt="secutity">
                                <span>PCI DSS </span>
                            </li>
                            <li>
                                <img src="img/security_2.png" alt="secutity">
                                <span>Bank of Thailand</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="apiImg animatedBlock">
                <div class="circleWrap">
                    <div class="circle animated">
                        <span class="text animated">Webiste</span>
                    </div>
                    <div class="circle animated">
                        <span class="text animated">Payment</span>
                    </div>
                </div>
                <div class="overlay animated"></div>
                <span class="text animated">API</span>
                <img src="img/check.svg" alt="check" class="icon animated">
            </div>
        </div>
        <div class="joinSection main">
            <div class="container">
                <div class="joinBlock">
                    <div class="img dotsTop">
                        <img src="img/image_1.jpg" alt="image">
                    </div>
                    <div class="info">
                        <span class="title lg">Better, Faster, Secure</span>
                        <div class="content">
                            <div class="textBlock">
                                <p>Start accepting payments with Money Space</p>
                            </div>
                        </div>
                        <a href="#" class="btnIconType1 sm">
                            <span class="in">
                                <span class="text">Start Now</span>
                                <span class="icon-arrow"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>
