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
export default class PricingPlan extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="bodyWrap">
      <Header></Header>
      <div class="pricigPageHeader">
          <div class="container">
              <div class="pricingBanner">
                  <div class="pageCaption">
                      <span class="subtitle">Big Fees, Big Problems,</span>
                      <span class="title">Not Here!</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="pricingPageContent">
          <div class="container">
              <div class="calculator">
                  <div class="calcForm">
                      <div class="headBlock">
                          <span class="title">Fee Calculator</span>
                      </div>
                      <div class="formBlock">
                          <form action="#">
                              <div class="fieldsWrap">
                                  <div class="fieldItem">
                                      <div class="inBlockType2">
                                          <label for="amount1">Transaction Amount</label>
                                          <div class="inWrap">
                                              <input type="text" name="amount1" id="amount1">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="fieldItem">
                                      <div class="inBlockType2">
                                          <label for="amount2">Free amount including VAT</label>
                                          <div class="inWrap">
                                              <input type="text" name="amount2" id="amount2">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <button class="btnFillType2 full">Calculate</button>
                          </form>
                      </div>
                  </div>
                  <div class="calcInfo">
                      <span class="info">The lowest free <br>rate of 2.59% <br>per transaction</span>
                      <span class="note">free rate may be negotiable for high volume merchants</span>
                  </div>
              </div>
              <div class="pricingInfo">
                  <div class="titleContainer">
                      <span class="subtitle">Best in Class</span>
                      <span class="title">Withdrawal Fees</span>
                  </div>
                  <div class="contentContainer">
                      <div class="info">
                          <div class="textBlock">
                              <p>We provide a free refund service to your customer before 20.00 hrs. After 20.00 hrs.,
                                  only a credit card fee is charged for the refund.</p>
                          </div>
                      </div>
                      <div class="buttons">
                          <a href="#" class="btnFillType4">Get Started</a>
                          <a href="#" class="btnFillType5">Learn More</a>
                      </div>
                  </div>
              </div>
              <div class="tariffList">
                  <div class="item">
                      <div class="tariffItem">
                          <span class="cost num">15<span>Baht</span></span>
                          <div class="info">
                              <p>for a merchant who is receiving a transaction less than 30,000 Baht</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="tariffItem">
                          <span class="cost">Free</span>
                          <div class="info">
                              <p>for a merchant who is receiving a transaction more than or equal to 30,000 Baht</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="joinSection ">
                  <div class="joinBlock lg">
                      <div class="img">
                          <img src="img/image_2.jpg" alt="image">
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
      <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
