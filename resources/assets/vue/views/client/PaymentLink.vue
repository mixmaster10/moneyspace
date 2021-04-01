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
export default class PaymentLink extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="bodyWrap">
        <div class="linksPage">
            <div class="linksPageHeader">
                <Header></Header>
                <div class="container">
                    <div class="linksBanner">
                        <div class="pageCaption">
                            <span class="title">Payment Links</span>
                        </div>
                        <div class="info">
                            <div class="textBlock">
                                <p>Your merchant can accept an online credit card payment from your customer even if
                                    your merchant does not have a website for selling products/services. This payment
                                    can be made as we will create a payment link and will send it directly to your
                                    customers through various global social media channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="linksPageContent">
                <div class="stepsList">
                    <div class="item">
                        <div class="stepItem type1">
                            <span class="num">1</span>
                            <div class="img wow animate__animated animate__fadeInUp" data-wow-offset="0">
                                <img src="img/step_1.png" alt="step">
                            </div>
                            <div class="content">
                                <p>A payment link request is sent to <br>MoneySpace and
                                    a link is created</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="stepItem type2">
                            <span class="num">2</span>
                            <div class="img wow animate__animated animate__fadeInUp" data-wow-delay="0.5s"
                                data-wow-offset="0">
                                <img src="img/step_2.png" alt="step">
                            </div>
                            <div class="content">
                                <p>Place link on your <br>
                                    social media platforms
                                    or blogs</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="stepItem type3">
                            <span class="num">3</span>
                            <div class="img wow animate__animated animate__fadeInUp" data-wow-delay="1s"
                                data-wow-offset="0">
                                <img src="img/step_3.png" alt="step">
                            </div>
                            <div class="content">
                                <p>Your customer opens <br>
                                    the link to complete payment</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="stepItem type4">
                            <span class="num">4</span>
                            <div class="img wow animate__animated animate__fadeInUp" data-wow-delay="1.5s"
                                data-wow-offset="0">
                                <img src="img/step_4.png" alt="step">
                            </div>
                            <div class="content">
                                <p>You receive instant
                                    notificaton when <br>
                                    payment is done</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="linkSectionBuy">
                    <div class="container">
                        <div class="wrapper">
                            <div class="left">
                                <div class="linkFormBuyWrapper">
                                    <div class="linkFormBuy wow animate__animated animate__bounceInLeft"
                                        data-wow-delay="0.5s">
                                        <div class="headBlock">
                                            <span class="title">Paid link for buyer to fill in.</span>
                                            <span class="subtitle">You can copy this link to your buyers.</span>
                                        </div>
                                        <div class="formBlock">
                                            <div class="radioWrap">
                                                <span class="label">Who is responsible for fee:</span>
                                                <ul class="radioList">
                                                    <li>
                                                        <div class="radioBtn">
                                                            <input type="radio" name="type" id="seller" checked>
                                                            <label for="seller">Seller</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="radioBtn">
                                                            <input type="radio" name="type" id="buyer">
                                                            <label for="buyer">Buyer</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="fieldsWrap">
                                                <div class="fieldItem">
                                                    <div class="inBlockType3">
                                                        <label for="buyerTerms">
                                                            Terms & Conditions
                                                            <span class="note">I acknowledge that I will NOT claim
                                                                the
                                                                refund or cancel the order.</span>
                                                        </label>
                                                        <div class="inWrap">
                                                            <input type="text" class="terms" name="buyerTerms"
                                                                id="buyerTerms"
                                                                value="I acknowledge that I will NOT claim the refund or cancel the order."
                                                                readonly>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fieldItem">
                                                    <div class="inBlockType3">
                                                        <label for="buyerLink">MPay Link</label>
                                                        <div class="inWrap">
                                                            <input type="text" name="buyerLink" id="buyerLink"
                                                                value="https://www.moneyspace.net/merchantapi/makepaym…"
                                                                readonly>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="buttons">
                                                <button class="btnSimpleType1">Print</button>
                                                <span class="btnFillType6">Copy Link</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="linkInfo">
                                    <div class="titleBlock">
                                        <span class="subtitle invert">Most flexible</span>
                                        <span class="title invert">Buyer fill in</span>
                                    </div>
                                    <div class="contentBlock">
                                        <div class="textBlock invert">
                                            <p>payment link that a payer can fill in price and product’s detail by
                                                themselves. (After the payment is done. Both merchant and payer will got
                                                e-mail notification)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="linkDescr invert">
                                    <div class="item">
                                        <span class="cap">Benefits</span>
                                        <p>Merchant don’t need to handle about this payment link much , a payer will
                                            fill in by themselves</p>
                                    </div>
                                    <div class="item">
                                        <span class="cap">Restriction</span>
                                        <p>If a payer fill in wrongly, or forgot some transportation expense or some
                                            extra plans to pay. Will cause more merchant’s back-end system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="linkSectionMerch">
                    <div class="container">
                        <div class="wrapper">
                            <div class="left">
                                <div class="linkInfo">
                                    <div class="titleBlock">
                                        <span class="subtitle">Most precise</span>
                                        <span class="title">Merchant Link</span>
                                    </div>
                                    <div class="contentBlock">
                                        <div class="textBlock">
                                            <p>Online merchants will fill in product’s detail and price and picture to
                                                confirm payer’s need. (After the payment is done. Both merchant and
                                                payer will got e-mail notification)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="linkDescr">
                                    <div class="item">
                                        <span class="cap">Benefits</span>
                                        <p>A payer just only double check the product’s detail before making a
                                            <br>payment.
                                        </p>
                                        <p>A payment link can be counted as <br>per success payment. This can help
                                            <br>the stock
                                            of products.</p>
                                    </div>
                                    <div class="item">
                                        <span class="cap">Restriction</span>
                                        <p>A payment link can be used for <br>individual payer only.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="linkMerchFormWrapper">
                                    <div class="linkMerchForm wow animate__animated animate__bounceInRight"
                                        data-wow-delay="0.5s">
                                        <div class="headBlock">
                                            <span class="title">Get paid shop details</span>
                                            <span class="subtitle">You can set details and send links to your
                                                customers.</span>
                                        </div>
                                        <div class="formBlock">
                                            <div class="fieldsWrap">
                                                <div class="fieldItem">
                                                    <div class="inBlockType1">
                                                        <label for="name">Prouduct / Service Name:</label>
                                                        <div class="inWrap">
                                                            <input type="text" name="name" id="name"
                                                                value="iPhone 8 / 32gb">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fieldItem">
                                                    <div class="inBlockType1">
                                                        <label for="sum">Amount ( ฿ )</label>
                                                        <div class="inWrap">
                                                            <input type="text" name="sum" id="sum" value="25,000 ">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkWrap">
                                                <ul class="checkList">
                                                    <li>
                                                        <div class="checkBtn">
                                                            <input type="checkbox" name="card" id="card">
                                                            <label for="card">Credit / Debit Card</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="checkBtn">
                                                            <input type="checkbox" name="plan" id="plan">
                                                            <label for="plan">Installment payment plan</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="radioWrap">
                                                <span class="label">Responsible free person</span>
                                                <ul class="radioList">
                                                    <li>
                                                        <div class="radioBtn invert">
                                                            <input type="radio" name="typeMerch" id="sellerMerch"
                                                                checked>
                                                            <label for="sellerMerch">Seller</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="radioBtn invert">
                                                            <input type="radio" name="typeMerch" id="buyerMerch">
                                                            <label for="buyerMerch">Buyer</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="fieldsWrap">
                                                <div class="fieldItem">
                                                    <div class="inBlockType1">
                                                        <label for="buyerTerms" class="lg">
                                                            Terms & Conditions
                                                            <span class="note">I acknowledge that I will NOT claim
                                                                the
                                                                refund or cancel the order.</span>
                                                        </label>
                                                        <div class="inWrap">
                                                            <input type="text" class="terms" name="buyerTerms"
                                                                id="buyerTerms"
                                                                value="I acknowledge that I will NOT claim the refund or cancel the order."
                                                                readonly>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="more">
                                                <a href="#" class="btnSimpleType2">More Details</a>
                                                <span class="line"></span>
                                            </div>
                                            <button class="btnFillType2 full">Create Payment Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="joinSection links">
                    <div class="container">
                        <div class="joinBlock lg">
                            <div class="img">
                                <img src="img/image_3.jpg" alt="image">
                            </div>
                            <div class="info">
                                <span class="title sm">No monthly fee <br>
                                    No set up / integration <br>
                                    No sale maintenance <br>
                                </span>
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
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>
