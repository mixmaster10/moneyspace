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
export default class Contact extends Vue {
  mounted() {
      window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="bodyWrap">
        <div class="contactsSection">
            <Header></Header>
            <div class="container">
                <div class="contactBlock">
                    <div class="wrapper">
                        <div class="left">
                            <div class="titleContainer">
                                <span class="pageTitle">Contact Us</span>
                                <span class="pageSubtitle">Money space (Pay enterprise co.,ltd)</span>
                            </div>
                            <div class="contentContainer">
                                <div class="timingBlock">
                                    <span class="title">Opening hours:</span>
                                    <span class="data">From Monday to Friday. 08.30-17.30 hrs.</span>
                                </div>
                                <ul class="contactsList">
                                    <li>
                                        <a href="mailto:th@moneyspace.net">
                                            <img src="img/mail.svg" alt="mail" class="icon">
                                            <span class="data">th@moneyspace.net</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:021070364 ">
                                            <img src="img/phone.svg" alt="phone" class="icon">
                                            <span class="data">02-107-0364 </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right">
                            <div class="mapWrapper">
                                <div class="mapBlock">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.714213689474!2d100.56133511483033!3d13.735744490357867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29efd295efcf3%3A0x4ca047bcbe11ce24!2zU29pIFN1a2h1bXZpdCAyNSwgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDExMCwg0KLQsNC40LvQsNC90LQ!5e0!3m2!1sru!2sby!4v1601449484351!5m2!1sru!2sby"
                                        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                                        tabindex="0"></iframe>
                                </div>
                                <div class="locationBlock">
                                    <div class="title">
                                        <img src="img/location.svg" alt="location" class="icon">
                                        <span class="data">Bangkok</span>
                                    </div>
                                    <div class="content">
                                        <p>No.1 Glas Haus Building, P Floor, Room No. P01, Soi Sukhumvit 25,
                                            Sukhumvit road, Khlong Toei Nuea Sub-district, Vadhana District</p>
                                    </div>
                                </div>
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
