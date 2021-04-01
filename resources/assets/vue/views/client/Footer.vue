<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

@Component({
  components: {
  },
})
export default class VueFooter extends Vue {
    prohibited_business(){
       this.$router.push('/prohibited_business'); 
    }
    about_us(){
       this.$router.push('/about_us'); 
    }
    contact_us(){
       this.$router.push('/contact_us'); 
    }
    online_payment(){
       this.$router.push('/online_payment'); 
    }
    online_payment_demo(){
       this.$router.push('/online_payment_demo'); 
    }
    mounted() {
        
    }
}
</script>

<template>
<div>
  <footer>
      <div class="container">
          <div class="wrapper">
              <div class="col">
                  <div class="footMenu">
                      <span class="title">Products</span>
                      <ul>
                          <li><a href="javascript:" @click.prevent="">No Website (Paybylink )</a></li>
                          <li><a href="javascript:" @click.prevent="">Website ( Simple API )</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col">
                  <div class="footMenu">
                      <span class="title">Features</span>
                      <ul>
                          <li><a href="javascript:" @click.prevent="online_payment()">Payments methods</a></li>
                          <li><a href="javascript:" @click.prevent="online_payment_demo()">Integrations</a></li>
                          <li><a href="javascript:" @click.prevent="">Security</a></li>
                          <li><a href="javascript:" @click.prevent="">Checkout</a></li>
                          <li><a href="javascript:" @click.prevent="">Invoice Payments</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col">
                  <div class="footMenu">
                      <span class="title">Money Space</span>
                      <ul>
                          <li><a href="javascript:" @click.prevent="about_us()">About Us</a></li>
                          <li><a href="javascript:" @click.prevent="">Compliance</a></li>
                          <li><a href="javascript:" @click.prevent="contact_us()">Contact</a></li>
                          <li><a href="javascript:" @click.prevent="">Press & PR</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col">
                  <div class="footMenu">
                      <span class="title">FAQs</span>
                      <ul>
                          <li><a href="javascript:" @click.prevent="prohibited_business()">Prohibit Businesses</a></li>
                          <li><a href="javascript:" @click.prevent="">Facebook</a></li>
                          <li><a href="javascript:" @click.prevent="">Instagram</a></li>
                          <li><a href="javascript:" @click.prevent="">Youtube</a></li>
                      </ul>
                  </div>
              </div>
              <div class="langBlock invert">
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
          </div>
      </div>
  </footer>
</div>
</template>

<style>
</style>