<template>
    <div :class="$style.rankingCard">
        <div :class="$style.rankingCardPicture"></div>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class RankingCard extends Vue {
        
    }
</script>

<style module lang="scss">
    
    .rankingCard {
        background: var(--background-secondary);
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 0.25rem;

        display: grid;
        grid-template-columns: 4rem auto;

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

    .rankingCardPicture {
        width: 4rem;
        height: 4rem;

        background: hsl(0, 0%, 7%);
        border-radius: 50%;
    }

</style>
