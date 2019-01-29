<template>
    <div :class="$style.homeView">
        <ranking-section color="#FF6859" icon="flag" label="Daily Ranking" description="A daily rank of drivers' popularity on Twitter.">
            <ranking-card :driver="driver" v-for="driver in daily.drivers" :key="`${driver.firstName}-${driver.lastName}-${driver.popularity}`">

            </ranking-card>
        </ranking-section>

        <ranking-section id="lastRace" color="#72DEFF" icon="trophy" label="Last Race" description="Drivers' popularity after the previous race.">
            {{lastRace}}
        </ranking-section>

        <ranking-section color="#FFCF44" icon="podium" label="Championship" description="Drivers' popularity after a race weekend concludes.">
            <ranking-card :driver="driver" v-for="driver in championship" :key="`${driver.firstName}-${driver.lastName}-${driver.tally}`">

            </ranking-card>
        </ranking-section>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';
    import { RankingSection, RankingCard } from '@components/UI';

    @Component({
        components: { RankingSection, RankingCard }
    })
    export default class HomeView extends Vue {

        @State
        public lastRace: any;

        @State
        public daily: any;

        @State
        public championship: any;
        
        @Action
        public refreshLastRace: () => Promise<any>;

        @Action
        public refreshDaily: () => Promise<any>;

        @Action
        public refreshChampionship: () => Promise<any>;

        private lastRaceLoading: boolean = true;
        private championshipLoading: boolean = true;
        private dailyLoding: boolean = true;

        public mounted() {
            this.refreshLastRace()
                .finally(() => this.lastRaceLoading = false);

            this.refreshDaily()
                .finally(() => this.dailyLoding = false);

            this.refreshChampionship()
                .finally(() => this.championshipLoading = false);
        }

    }
</script>

<style module lang="scss">
    
    .homeView {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) );
        grid-gap: 1rem;
    }

</style>
