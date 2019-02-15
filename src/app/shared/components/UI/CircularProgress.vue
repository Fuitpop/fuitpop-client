<template>
    <div :class="$style.circularProgress">
        <svg :class="$style.ranking" viewBox="0 0 120 120">
            <circle :class="{[$style.rankingMeter]: true, [$style.rating]: rating }" cx="60" cy="60" r="54" stroke-width="8" />
            <circle :style="{ strokeDashoffset: 2 * Math.PI * 54 * (1 - progress / 100), strokeDasharray: 2 * Math.PI * 54 }" :class="$style.rankingValue" cx="60" cy="60" r="54" stroke-width="8" />
            <text dominant-baseline="middle" text-anchor="middle" x="50%" y="50%" :class="$style.rankingText">{{Math.round(progress)}}%</text>
        </svg>
        <span :class="$style.label"><slot /></span>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class CircularProgress extends Vue {
        
        @Prop()
        public progress: number;

        @Prop()
        public rating: boolean;
        

    }
</script>

<style module lang="scss">
    
    .circularProgress {
        display: grid;
        grid-template-rows: 3.5rem auto;
        place-items: center;
        grid-gap: 0.25rem;
        position: relative;
    }

    .ranking {
        width: 3.5rem;
        height: 3.5rem;
    }

    .rankingMeter {
        fill: none;
        stroke: rgba(0, 0, 0, .24);
    }

    .rankingValue {
        fill: none;
        stroke: var(--primary);
        stroke-linecap: round;
    }

    .rating {
        stroke: #E57373;
    }

    .rankingText {
        fill: var(--foreground-secondary);
        font-size: 1.5rem;
    }

    .label {
        text-align: center;
        font-size: 0.75rem;
    }

</style>
