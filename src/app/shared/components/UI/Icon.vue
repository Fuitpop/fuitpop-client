<template>
    <svg :class="$style.icon" viewBox="0 0 24 24">
        <path :d="iconDefinition" />
    </svg>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import Icons from '@assets/icons';

    @Component
    export default class Icon extends Vue {
        
        @Prop({ required: true, type: String })
        public icon: string;

        public get iconDefinition(): string {
            return Icons[this.icon];
        }

    }
</script>

<style module lang="scss">
    
    .icon {
        display: block;
        fill: currentColor;

        width: 1.5rem;
        height: 1.5rem;

        pointer-events: none;
    }

</style>
