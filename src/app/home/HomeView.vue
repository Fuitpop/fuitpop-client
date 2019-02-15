<template>
    <div :class="$style.homeView">
        <ranking-section color="#FF6859" icon="flag" label="Daily Ranking" :description="`A daily rank of drivers' popularity on Twitter for ${currentDate}.`">
            <ranking-card daily :driver="driver" :index="index" v-for="(driver, index) in daily.drivers" :key="`${driver.firstName}-${driver.lastName}-${driver.popularity}`">

            </ranking-card>
            <span v-if="Object.entries(daily).length === 0">There is currently no data for the daily drivers.</span>
        </ranking-section>

        <ranking-section id="lastRace" color="#72DEFF" icon="trophy" label="Last Race" description="Drivers' popularity after the last race.">
            <span v-if="Object.entries(lastRace).length === 0">There is currently no data. Once the next race happens, the results will be listed here.</span>
        </ranking-section>

        <ranking-section color="#FFCF44" icon="podium" label="Championship" description="Drivers' popularity championship.">
            <ranking-card daily :driver="driver" :index="index" v-for="(driver, index) in championship" :key="`${driver.firstName}-${driver.lastName}-${driver.tally}`">

            </ranking-card>
            <span v-if="Object.entries(championship).length === 0">There is currently no data for the championship.</span>
        </ranking-section>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';
    import { RankingSection, RankingCard } from '@components/UI';

    import moment from "moment";

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

        public get currentDate() {
            return moment(new Date).format("DD/MM/YYYY");
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
