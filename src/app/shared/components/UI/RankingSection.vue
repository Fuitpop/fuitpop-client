<template>
    <div :class="$style.rankingSection">
        <div :class="$style.rankingSectionHeader">
            <icon :style="{ color }" :class="$style.rankingSectionIcon" :icon="icon" />
            <div :class="$style.rankingSectionDetails">
                <span :class="$style.label">{{label}}</span>
                <span :class="$style.description">{{description}}</span>
            </div>
        </div>
        <div :class="$style.rankingSectionBody">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Icon } from './index';

    @Component({
        components: { Icon }
    })
    export default class RankingSection extends Vue {
        
        @Prop({ required: true, type: String })
        public icon: string;

        @Prop({ required: true, type: String })
        public label: string;

        @Prop({ required: true, type: String })
        public description: string;

        @Prop({ required: true, type: String })
        public color: string;

    }
</script>

<style module lang="scss">
    
    .rankingSection {
        display: grid;
    }

    .rankingSectionHeader {
        display: grid;
        grid-template-columns: 3rem auto;
        grid-template-rows: 6rem;
        grid-gap: 1rem;
        align-items: center;

        contain: content;
    }

    .rankingSectionIcon {
        width: 3rem !important;
        height: 3rem !important;

        align-self: center;
        justify-self: center;
    }

    .rankingSectionDetails {
        display: grid;
        grid-gap: 0.15rem;
    }

    .label {
        font-size: 1.25rem;
        align-self: end;
    }

    .description {
        align-self: start;
        font-size: .75rem;
        color: var(--foreground-secondary);
    }

    .rankingSectionBody {
        display: grid;
        grid-gap: 1rem;
    }

</style>
