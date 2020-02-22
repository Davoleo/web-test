<template>
  <b-container>
    <div class="page-header">
      <h2 class="text-center">Show Manager</h2>
      <hr>
    </div>
    <b-row>
      <b-col>
        <b-table striped hover :items="shows" :fields="fields">
          <template slot="Title" slot-scope="data">{{data.items.Title}}</template>
          <template slot="Genre" slot-scope="data">{{getGenre(data.items.Genres)}}</template>
          <template slot="Studio" slot-scope="data">{{getStudio(data.items.Studio)}}</template>
          <!-- eslint-disable-next-line -->
          <template slot=" " slot-scope="data">
            <b-btn size="sm" variant="warning">X</b-btn>&nbsp;
            <b-btn size="sm" variant="secondary">M</b-btn>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import {showsRef} from "./firebase";
  import {GenreEnum, StudioEnum} from "./models/anime";

//There should only be one export default{} - exports the object (which will be "cast" to a component once we render it on the page)
export default {
  firebase: {
    shows: []
  },

  data() {
    return {
      showStudios: StudioEnum.properties,
      showGenres: GenreEnum.properties,
      fields: ['Title', 'Genre', 'Studio', ' '],
      shows: showsRef
    }
  },

  methods: {
    getStudio(value) {
      return this.showStudios[value].text;
    },
    getGenre(value) {
      return this.showGenres[value].text;
    }
  }
}
</script>

<style lang="scss">
.page-header {
  background-color: #262;
  color: #FFF;
}

.page-header h2 {
  padding-top: 8px;
}
</style>
