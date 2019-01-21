<template>
    <div :class="$style.homeView">
        <ranking-section color="#FF6859" icon="flag" label="Daily Ranking" description="A daily rank of drivers' popularity on Twitter.">
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
        </ranking-section>

        <ranking-section id="lastRace" color="#72DEFF" icon="trophy" label="Last Race" description="Drivers' popularity after the previous race.">
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
        </ranking-section>

        <ranking-section color="#FFCF44" icon="podium" label="Championship" description="Drivers' popularity after a race weekend concludes.">
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
            <ranking-card></ranking-card>
        </ranking-section>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { RankingSection, RankingCard } from '@components/UI';

    @Component({
        components: { RankingSection, RankingCard }
    })
    export default class HomeView extends Vue {
        
    }
</script>

<style module lang="scss">
    
    .homeView {
        display: grid;
        // grid-auto-flow: column;
        // grid-auto-columns: minmax(10rem, 1fr);
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) );
        grid-gap: 1rem;
    }

</style>
