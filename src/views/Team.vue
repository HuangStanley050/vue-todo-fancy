<template>
  <div>
    <h1 class="grey--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap> </v-row>
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
