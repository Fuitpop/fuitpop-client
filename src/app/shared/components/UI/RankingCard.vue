<template>
    <div :class="$style.rankingCard">
        <div :style="{ backgroundImage: `url(/images/${driver.firstName}_${driver.lastName}.jpg)` }" :class="$style.rankingCardPicture"></div>
        <div :class="$style.rankingCardDetails">
            <span>{{driver.firstName}} {{driver.lastName}}</span>
            <span :class="$style.secondaryText">{{driver.code || `${driver.points} Points`}}</span>
        </div>
        <div :class="$style.rankingCardSubDetails">
            <circular-progress v-if="driver.popularity" :progress="driver.polarity * 100" :rating="true">Polarity</circular-progress>
            <circular-progress v-if="driver.popularity" :progress="driver.popularity * 100">Popularity</circular-progress>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { CircularProgress } from './index';

    @Component({
        components: { CircularProgress }
    })
    export default class RankingCard extends Vue {
        
        @Prop()
        public driver: any;

        private publicPath = process.env.BASE_URL;

    }
</script>

<style module lang="scss">
    
    .rankingCard {
        background: var(--background-secondary);
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 0.25rem;

        display: grid;
        grid-template-columns: 4rem auto auto;
        grid-gap: 1rem;

        min-height: 5rem;
        align-items: center;

        transition: transform 0.25s ease;
        will-change: transform;
        cursor: pointer;

        contain: paint;

        &:hover {
            transform: scale(1.025);
        }

        // &:first-child {
        //     background: hsl(45, 100%, 63%);
        //     border: 1px solid hsl(45, 100%, 43%);
        // }

        // &:nth-child(2) {
        //     background: hsl(0, 0%, 74%);
        //     border: 1px solid hsl(0, 0%, 44%);
        // }

        // &:nth-child(3) {
        //     background: hsl(30, 61%, 50%);
        //     border: 1px solid hsl(30, 61%, 30%);
        // }
    }

    .secondaryText {
        font-size: 0.75rem;
        color: var(--foreground-secondary);
    }

    .rankingCardSubDetails {
        display: grid;
        grid-auto-flow: column;
        justify-content: end;
        grid-gap: 0.75rem;
    }

    .rankingCardPicture {
        width: 4rem;
        height: 4rem;

        background-color: hsl(0, 0%, 7%);
        background-position: center top;
        background-size: 200%;
        border-radius: 50%;
    }

    .rankingCardDetails {
        display: grid;
        grid-gap: 0.5rem;
    }

    .polarity {
        height: 0.25rem;
        width: 75%;
        display: flex;
        flex-direction: row;
        position: relative;
        background: #EF9A9A;
        border-radius: 0.25rem;
        overflow: hidden;
    }

        .positive {
            background: #81C784;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

    .subtext {
        font-size: 0.75rem;
        color: var(--foreground-secondary);
    }



</style>
