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
export default class Business extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="bodyWrap">
        <div class="businessSection">
            <Header></Header>
            <div class="container">
                <div class="businessBlock">
                    <div class="wrapper">
                        <div class="titleBlock">
                            <span class="title">Prohibited businesses</span>
                            <span class="subtitle">Restricted by local law or regulation for any payment
                                channel</span>
                        </div>
                        <div class="contentBlock">
                            <ul class="listTempl1">
                                <li>
                                    <span class="num">1</span>
                                    Medical, drugs and Pharmaceuticals
                                </li>
                                <li>
                                    <span class="num">2</span>
                                    Weapons : Firearms and weapons of all kind
                                </li>
                                <li>
                                    <span class="num">3</span>
                                    Money transfer services, Cash gifting, Donations or Check Cashing Gambling
                                </li>
                                <li>
                                    <span class="num">4</span>
                                    Adult or related products or services : Adult entertainment / All
                                    sexually-orientated or pornographic merchants
                                </li>
                            </ul>
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
