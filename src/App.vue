<template>
	<div id="app">
		{{ loc }}
		<a :href="this.url + this.s_a"><button v-on:click="page_run(s_a)">1</button></a>
		<a :href="this.url + this.s_b"><button v-on:click="page_run(s_b)">2</button></a>
		<a :href="this.url + this.s_c"><button v-on:click="page_run(s_c)">3</button></a>
		<a :href="this.url + this.s_d"><button v-on:click="page_run(s_d)">4</button></a>
		<a :href="this.url + this.s_e"><button v-on:click="page_run(s_e)">5</button></a>
		<hooper :settings="hooperSettings">
			<slide v-for="(n,index) of products" :key="n">
				<img :src="url + 'manga/'+ (index) +'.webp'" />
				<div class="page_n">{{ n }}</div>
			</slide>
			<hooper-navigation slot="hooper-addons"></hooper-navigation>
			<hooper-pagination slot="hooper-addons"></hooper-pagination>
			<hooper-progress slot="hooper-addons"></hooper-progress>
		</hooper>
	</div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';
var page = 107;
var loc = window.location.pathname.split('/').slice(-1)[0];
//let loc = window.location.pathname.split('/').slice(0)[3];

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
					url: "https://manga.syui.ai/",
					s_a: 0,
					s_b: 17,
					s_c: 41,
					s_d: 51,
					s_e: 60,
      products: [...Array(Number(page)).keys()],
      hooperSettings: {
							itemsToShow: 1,
							centerMode: true,
							initialSlide: loc,
						}
    };
		},
		methods: {
			page_run(s) {
				this.loc = s;
				this.hooperSettings.initialSlide = s;
			}
		}
};
</script>

<style>
.hooper{height:100%}button.hooper-indicator{background-color:#000}img{width:100%}.page_n{text-align:center;height:50px}.hooper-pagination{position:fixed}.hooper-next,.hooper-prev{background-color:rgba(184,207,224,.24)}
button {
    padding: 10px;
    margin: 5px;
}
ul.hooper-track {
	padding: 0px;
}
</style>
