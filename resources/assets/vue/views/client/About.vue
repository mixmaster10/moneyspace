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
export default class About extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="bodyWrap">
        <div class="aboutPageHeader" style="background-image: url(img/about_back.png);">
            <Header></Header>
            <div class="container">
                <div class="aboutBanner">
                    <div class="wrapper">
                        <span class="pageTitle">About us.</span>
                        <div class="info">
                            <p>We are an online payment service provider under the affiliation of Pay Enterprise Co.,
                                Ltd.
                                We began with a simple idea - to help clients capitalize on windows of opportunity. We
                                understand what it takes to successfully - <span>More Options. More Payments. More
                                    Success.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutInfo">
            <div class="container">
                <div class="wrapper">
                    <div class="left">
                        <div class="titleBlock">
                            <span class="title">100% Independent</span>
                        </div>
                        <div class="contentBlock">
                            <div class="textBlock">
                                <p>Being independent means that Money space has grown without taking money from
                                    investors or other third parties. Not only does this mean our business is rock
                                    solid, but also that we are free to put the customer needs first, and not the profit
                                    demands of venture capital, private equity, or shareholders. Our customers want to
                                    know that our service will always be there for them, not fall apart after an
                                    acquisition or be deprioritized when other shiny objects take priority.</p>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="quoteBlock wow animate__animated animate__fadeInUpBig">
                            <p class="wow animate__animated animate__fadeIn" data-wow-delay="1s">At Money space , we
                                discover the easy way to elevate your ecommerce business, with
                                Thailand’s fastest and most affordable gateway processing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="joinSection about">
            <div class="container">
                <div class="joinBlock">
                    <div class="img dotsBottom">
                        <img src="img/image_4.jpg" alt="image">
                    </div>
                    <div class="info">
                        <span class="title md">Real Customer Service</span>
                        <div class="content">
                            <div class="textBlock">
                                <p>Our friendly service team has no tiers, no bots, no hand-offs. Just highly-trained
                                    professionals who actually answer the phone and solve your issue. At Money space,
                                    customer experience is at the center of everything we do – not our company's
                                    valuation or stock price.</p>
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
