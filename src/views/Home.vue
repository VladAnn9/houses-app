<template>
  <div class="home">
    <div class="home-item__container">
      <div>
        <h2>Kilaka słów o nas</h2>
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor
          magnam voluptates odio nulla, atque porro ratione eveniet soluta iusto
          ducimus doloribus quae ipsa recusandae exercitationem odit repellat
          cum similique.
        </p>
        <router-link to="/list" class="custom-btn">Zobacz więcej</router-link>
      </div>
    </div>
    <div class="home-item__container home-item__container--nested">
      <div class="home-item__container"><div></div></div>
      <div class="home-item__container">
        <div></div>
      </div>
      <div class="home-item__container"><div></div></div>
      <div class="home-item__container">
        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio natus
          ipsa delectus repellendus facilis unde laboriosam labore.
        </p>
      </div>
    </div>
    <div class="home-item__container home-item__container--overlay">
      <div>
        <h3>Lorem ipsum dolor</h3>
        <h3>Lorem ipsum dolor</h3>
        <h3>Lorem ipsum dolor</h3>
        <h3>Lorem ipsum dolor</h3>
        <h3>Lorem ipsum dolor</h3>
      </div>
    </div>
    <div class="home-item__container">
      <div>
        <h2>Kilaka słów o nas</h2>
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor
          magnam voluptates odio nulla, atque porro ratione eveniet soluta iusto
          ducimus doloribus quae ipsa recusandae exercitationem odit repellat
          cum similique.
        </p>
        <router-link to="/list" class="custom-btn">Zobacz więcej</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/style/_variable.scss';
.home {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
  overflow-x: hidden;

  &-item__container {
    height: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 $space * 4;

    @media screen and (max-width: 960px) {
      width: 100%;
    }

    &:first-of-type,
    &:last-of-type {
      h6 {
        color: $secondColor;
        margin-bottom: $space * 2;
      }

      > div {
        p {
          margin-bottom: $space * 3;
        }
      }
    }

    &--overlay {
      background: linear-gradient(
          rgba(37, 118, 194, 0.7),
          rgba(37, 118, 194, 0.7)
        ),
        url(../assets/house.jpg) center no-repeat;
      background-size: cover;

      justify-content: center;

      h3 {
        color: $color2 !important;
      }
    }

    &--nested {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 960px) {
        width: 100%;

        > div {
          width: 50%;
        }
      }

      @media screen and (max-width: 600px) {
        > div {
          width: 100%;
          height: 25%;
        }
      }

      > div:first-of-type,
      div:last-of-type {
        background: linear-gradient(
            rgba(37, 118, 194, 0.9),
            rgba(37, 118, 194, 0.9)
          ),
          url(../assets/house.jpg) center no-repeat;
        background-size: cover;
        color: $color2 !important;
      }

      > div:nth-child(2),
      div:nth-child(3) {
        background: url(../assets/family.jpg) center no-repeat;
        background-size: cover;
        color: $color2 !important;
      }
    }
  }
}
</style>
