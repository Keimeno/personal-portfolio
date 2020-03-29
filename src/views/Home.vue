<template>
  <div class="home view">
    <div class="container">
      <section>
        <h3 class="section__header">Links</h3>
        <portfolio-links />
      </section>
      <section>
        <h3 class="section__header">My Projects</h3>
        <masonry :cols="2" :gutter="6" class="projects grid">
          <div
            @click="openInternalLinkByName('projects', {id: project.to})"
            v-for="(project, index) in projects"
            :key="index"
          >
            <!-- 
							Prevent default click event on <a> tag to prevent the website
							from actually reloading, as it defeats the purpose of the SPA
            -->
            <a @click.prevent :href="'/projects/' + project.to">
              <img
                v-if="project.hasImage"
                :src="require(`@/assets/projects/${project.image}.png`)"
                :alt="`${project.image}`"
              />
              <p v-else>{{ project.displayName }}</p>
            </a>
          </div>
        </masonry>
      </section>
      <section>
        <h3 class="section__header">Open Source Contributions</h3>
        <div class="open-source grid">
          <div
            @click="openInternalLinkByName('open-source', {id: openSource.to })"
            v-for="(openSource, index) in openSource"
            :key="index"
          >
            <a @click.prevent :href="'/open-source/' + openSource.to">
              <img
                v-if="openSource.hasImage"
                :src="require(`@/assets/open-source/${openSource.image}.png`)"
                :alt="`${openSource.image}`"
              />
              <p v-else>{{ openSource.displayName }}</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import PortfolioLinks from '@/components/base/Links.vue';
import linkMixins from '@/mixins/link.mixin';
import {
  GET_PROJECTS_LIST,
  GET_OPEN_SOURCE_LIST,
} from '../store/types/getters.type';
import TList from '../types/ListType';

export default Vue.extend({
  name: 'Home',
  components: {
    PortfolioLinks,
  },
  mixins: [linkMixins],
  methods: {
    ...mapGetters([GET_PROJECTS_LIST, GET_OPEN_SOURCE_LIST]),
  },
  computed: {
    projects(): TList {
      return this[GET_PROJECTS_LIST]();
    },
    openSource(): TList {
      return this[GET_OPEN_SOURCE_LIST]();
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.home {
  section {
    margin-bottom: 30px;

    .section__header {
      font-weight: normal;
      font-size: 22px;
      margin-bottom: 6px;
    }

    .grid {
      width: 100%;
      padding: 5px;

      div {
        user-select: none;
        cursor: pointer;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
        background: white;
        transform: translateZ(0);

        // need to set the box shadow to this initially, as css columns cuts off the upper rights border
        box-shadow: 0px 3px rgba($color: #000000, $alpha: 0);

        transition: all 0.15s;

        &:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0px 3px rgba($color: #000000, $alpha: 0.5);
        }

        a {
          text-decoration: none;
          color: unset;
        }

        img {
          padding: 5px;
          width: 100%;
          height: auto;
        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 60px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
