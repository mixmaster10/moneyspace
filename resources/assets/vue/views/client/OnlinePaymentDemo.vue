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
export default class OnlinePaymentDemo extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
    <div class="bodyWrap">
        <div class="demoPage">
            <Header></Header>
            <div class="demoSection">
                <div class="container">
                    <div class="wrapper">
                        <div class="titleBlock">
                            <span class="pageTitle">Demo</span>
                        </div>
                        <div class="contentBlock">
                            <div class="demoInfo">
                                <div class="productCard">
                                    <div class="name">
                                        <span>Apple Watch <br>
                                            Series 5 Hermes </span>
                                    </div>
                                    <div class="description">
                                        <p>Series 5 Apple Watch Hermes 44 mm case in Space Black stainless steel &
                                            Rallye single tour band in Black Gala calfskin…</p>
                                    </div>
                                    <a href="#" class="more">Read more</a>
                                    <div class="productInfo">
                                        <div class="item dropdownItem">
                                            <div class="head">
                                                <span class="title">Product details</span>
                                                <div class="btn"><span></span><span></span></div>
                                            </div>
                                            <div class="content">
                                                <div class="in">
                                                    <p>Product details</p>
                                                    <p>Product details</p>
                                                    <p>Product details</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item dropdownItem">
                                            <div class="head">
                                                <span class="title">Care</span>
                                                <div class="btn"><span></span><span></span></div>
                                            </div>
                                            <div class="content">
                                                <div class="in">
                                                    <p>Care</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item dropdownItem">
                                            <div class="head">
                                                <span class="title">Delivery & returns</span>
                                                <div class="btn"><span></span><span></span></div>
                                            </div>
                                            <div class="content">
                                                <div class="in">
                                                    <p>Delivery & returns</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item dropdownItem">
                                            <div class="head">
                                                <span class="title">Gifting</span>
                                                <div class="btn"><span></span><span></span></div>
                                            </div>
                                            <div class="content">
                                                <div class="in">
                                                    <p>Gifting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buy">
                                        <button class="btnIconType5">
                                            <span class="icon">
                                                <img src="img/logo_2.png" alt="logo">
                                            </span>
                                            <span class="text">Pay with Money Space</span>
                                        </button>
                                        <span class="cost"><span>฿</span>37230</span>
                                    </div>
                                </div>
                            </div>
                            <div class="demoSlider scrollSlider">
                                <div class="main scrollBlock">
                                    <div class="inner">
                                        <div class="item">
                                            <div class="in">
                                                <img src="img/demo_image.jpg" alt="demo">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="in">
                                                <img src="img/demo_image.jpg" alt="demo">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="in">
                                                <img src="img/demo_image.jpg" alt="demo">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="in">
                                                <img src="img/demo_image.jpg" alt="demo">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="in">
                                                <img src="img/demo_image.jpg" alt="demo">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="preview">
                                    <div class="item active">
                                        <img src="img/demo_image.jpg" alt="demo">
                                    </div>
                                    <div class="item">
                                        <img src="img/demo_image.jpg" alt="demo">
                                    </div>
                                    <div class="item">
                                        <img src="img/demo_image.jpg" alt="demo">
                                    </div>
                                    <div class="item">
                                        <img src="img/demo_image.jpg" alt="demo">
                                    </div>
                                    <div class="item">
                                        <img src="img/demo_image.jpg" alt="demo">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <a href="#" class="btnIconType6">
                                <span class="icon-arrow"></span>
                                <span class="text">Return to API Instructions</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>
