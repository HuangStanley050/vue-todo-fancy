<template>
  <div>
    <h1 class="grey--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-col
          cols="12"
          sm="3"
          v-for="character in characters"
          :key="character.name"
        >
          <v-card max-width="220" class="pa-2 mx-auto" tile outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="character.img"
            >
            </v-img>
            <v-card-title>Name: {{ character.name }}</v-card-title>
            <v-card-subtitle class="pb-0 text-center"
              >Profession</v-card-subtitle
            >

            <v-card-text class="text--primary text-center">
              <div>
                {{ character.position }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Ryu from "../assets/profiles/ryu.jpg";
import Ken from "../assets/profiles/ken.jpg";
import ChunLi from "../assets/profiles/chunli.jpg";
import Blanka from "../assets/profiles/blanka.jpg";
import Guile from "../assets/profiles/guile.jpg";
import EHonda from "../assets/profiles/honda.jpg";
import Dhalsim from "../assets/profiles/dhalsim.jpeg";
import Zangif from "../assets/profiles/zangif.jpeg";

export default {
  data() {
    return {
      characters: [
        { name: "Ryu", position: "Martial Artis", img: Ryu },
        { name: "Ken", position: "Martial Artis", img: Ken },
        { name: "Chun Li", position: "Police Officer", img: ChunLi },
        { name: "Blanka", position: "Beast", img: Blanka },
        { name: "Guile", position: "Captain", img: Guile },
        { name: "E.Honda", position: "Sumo Wrestler", img: EHonda },
        { name: "Dhalsim", position: "Yogi", img: Dhalsim },
        { name: "Zangief", position: "Wrestler", img: Zangif }
      ]
    };
  }
};
</script>
