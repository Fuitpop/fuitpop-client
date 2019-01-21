<template>
    <router-link :exact-active-class="$style.navigationButtonActive" :class="$style.navigationButton" :to="to">
        <icon :icon="icon" />
        <span :class="$style.navigationLabel"><slot /></span>
    </router-link>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Icon } from '@components/UI';

    @Component({
        components: { Icon }
    })
    export default class NavigationButton extends Vue {

        @Prop({ required: true, type: String })
        public to: string;

        @Prop({ required: true, type: String })
        public icon: string;

    }
</script>

<style module lang="scss">
    
    .navigationButton {
        display: grid;
        grid-template-rows: auto auto;
        align-items: center;
        justify-items: center;
        grid-gap: 0.5rem;

        text-decoration: none;
        color: inherit;

        padding: 1rem;
        contain: content;
    }

        .navigationButtonActive {
            color: var(--primary);
        }

        .navigationLabel {
            display: block;

            font-size: 0.875rem;
            font-weight: 600;
            white-space: nowrap;
        }

</style>
