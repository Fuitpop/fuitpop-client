<template>
    <nav :class="$style.navigationContainer">
        <div class="container" :class="$style.navigation">
            <logo :class="$style.logo" />
            <div :class="$style.navigationButtons">
                <slot />
            </div>
            <div :class="$style.navigationControls">
                <a :class="$style.twitterLink" target="_blank" rel="noopener noreferrer" href="https://twitter.com/fuitpop">
                    <icon icon="twitter" />
                    <span>@fuitpop</span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Logo, Icon } from '@components/UI';

    @Component({
        components: { Logo, Icon }
    })
    export default class Navigation extends Vue {
        
    }
</script>

<style module lang="scss">
    
    .navigationContainer {
        position: fixed;
        height: var(--navigation-height);
        top: 0; left: 0; right: 0;
        
        background: var(--background-secondary);
        border-bottom: 4px solid var(--border-color);

        contain: strict;
        padding: 0 1rem;
        z-index: 10;
    }

        .navigation {
            display: grid;
            grid-template-columns: 12rem auto 12rem;
            height: 100%;
            grid-template-rows: var(--navigation-height);
            align-items: center;

            height: 100%;

            @media (max-width: 900px) {
                grid-template-columns: 8rem auto 8rem;
            }
        }

            .navigationButtons {
                display: grid;
                grid-auto-flow: column;

                grid-auto-columns: min-content;
                align-items: center;
                justify-content: center;
                grid-gap: 1rem;
            }

    .navigationControls {
        justify-self: end;
    }

    .twitterLink {
        background: hsl(203, 89%, 53%);
        color: white;
        text-decoration: none;

        display: inline-grid;
        grid-auto-flow: column;
        grid-gap: 0.25rem;
        align-items: center;

        padding: 0.5rem 1rem;
        border-radius: 0.25rem;

        &:hover {
            color: white;
        }
    }

    .logo {
        // max-width: 100%;
        // height: 100%;
        width: 100%;
        height: 100%;
    }

</style>
