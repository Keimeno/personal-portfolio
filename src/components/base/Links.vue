<template>
  <div class="links">
    <a :href="link.to" target="_blank" v-for="(link, index) in links" :key="index" rel="noopener">
      <div class="image">
        <img
          :src="require(`@/assets/branding/${link.img}.png`)"
          :alt="`${link.img} logo`"
          :class="{ 
            inverted: link.invertedOnLowContrast && hasLowContrastBackground,
            border: link.hasBorder
          }"
        />
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import linkMixin from '@/mixins/link.mixin';

export default Vue.extend({
  name: 'PortfolioLinks',
  props: {
    hasLowContrastBackground: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [linkMixin],
  data: () => ({
    links: [
      {
        img: 'github',
        to: 'https://github.com/Keimeno',
        invertedOnLowContrast: true,
        hasBorder: false,
      },
      {
        img: 'twitter',
        to: 'https://twitter.com/_Keimeno',
        invertedOnLowContrast: false,
        hasBorder: false,
      },
      {
        img: 'stackoverflow',
        to: 'https://stackoverflow.com/users/11098471/Keimeno',
        invertedOnLowContrast: false,
        hasBorder: true,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  user-select: none;

  .image {
    > img {
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
      transition: box-shadow 0.1s, transform 0.1s;

      &.inverted {
        filter: invert(1);
      }

      &.border {
        border: 1px solid #777;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 3px rgba($color: #000000, $alpha: 0.5);
      }
    }
  }
}
</style>
