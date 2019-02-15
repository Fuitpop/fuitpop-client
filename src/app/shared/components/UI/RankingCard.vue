<template>
    <div :class="$style.rankingCard">
        <div :style="{ backgroundImage: `url(/images/${driver.firstName}_${driver.lastName}.jpg)` }" :class="$style.rankingCardPicture"></div>
        <div :class="$style.rankingCardDetails">
            <span>{{driver.firstName}} {{driver.lastName}}</span>
            <span v-if="driver.points !== undefined" :class="$style.secondaryText">{{`${driver.points} Points`}}</span>
        </div>
        <div :class="$style.rankingCardSubDetails">
            <div v-if="driver.polarity" :positive="driver.polarity >= 0.5" :class="$style.cardPolarityContainer">
                <svg viewBox="0 0 14 100">
                    <path d="M4.598 100s-10.014-8.485 0-26.013c10.014-17.528-5.759-17.245 0-26.518s10.344-15.866 0-25.42C-5.746 12.495 4.598 0 4.598 0h9v100h-9z"/>
                </svg>
                <div :style="{ width: `${(driver.polarity - 0.5) * 100 * 2}%` }" :class="$style.polarityFill">

                </div>
            </div>
            <!-- <circular-progress v-if="driver.popularity" :progress="driver.polarity * 100" :rating="true">Polarity</circular-progress> -->
            <div :class="$style.ranking">#{{index + 1}}</div>
            <circular-progress v-if="driver.popularity" :progress="driver.popularity * 100"></circular-progress>
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

        @Prop()
        public index: number;

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
        border-left: 3px solid transparent;

        &[daily] {
            &:nth-child(1) {
                border-left: 3px solid gold;
            }

            &:nth-child(2) {
                border-left: 3px solid silver;
            }

            &:nth-child(3) {
                border-left: 3px solid #cd7f32;
            }
        }

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
        align-items: center;
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

    .cardPolarityContainer {
        position: absolute;
        right: 0; top: 0; bottom: 0;
        width: 50%;
        opacity: 0.25;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        &[positive] {
            svg {
                fill: #81C784;
            }

            .polarityFill {
                background: #81C784;
            }
        }

        svg {
            fill: #EF9A9A;
            margin: 0;
            height: 100%;
            margin-right: -1px;
            // width: auto;
        }
    }


    .polarityFill {
        background: #EF9A9A;
        width: 0%;
        height: 100%;
    }

    .ranking {
        font-size: 1.75rem;
    }

</style>
