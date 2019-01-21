<template>
    <footer :class="$style.footer">
        <div class="container" :class="$style.footerContainer">
            <logo :class="$style.footerLogo" />
            <span>
                Developed by <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/_reypato">@_reypato</a> and <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/jacobrclevenger">@jacobrclevenger</a>. <br/> 
                Powered by <a rel="noopener noreferrer" href="http://ergast.com/mrd/">Ergast Developer API</a>. <br />
                Copyright © 2019 Fuitpop
            </span>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Logo } from '@components/UI';

    @Component({
        components: { Logo }
    })
    export default class AppFooter extends Vue {
        
    }
</script>

<style module lang="scss">
    
    .footer {
        background: var(--background-secondary);
        border-top: 1px solid var(--border-color);
        padding: 2rem;
        text-align: center;
        font-size: 0.75rem;
        color: var(--foreground-secondary);
        line-height: 1.25rem;
    }

    .footerContainer {
        display: grid;
        justify-items: center;
        grid-gap: 1rem;
    }

    .footerLogo {
        max-width: 12rem;
        display: block;
    }

</style>
