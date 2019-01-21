<template>
    <div class="app">
        <navigation>
            <navigation-button to="/" icon="flag">Daily Ranking</navigation-button>
            <navigation-button to="/#lastrace" icon="trophy">Last Race</navigation-button>
            <navigation-button to="/#championship" icon="podium">Championship</navigation-button>
        </navigation>
        <main class="container">
            <router-view></router-view>
        </main>
        <app-footer />
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Navigation, NavigationButton, AppFooter } from './components';

    @Component({
        components: { Navigation, NavigationButton, AppFooter }
    })
    export default class App extends Vue {
        
    }
</script>

<style lang="scss">

    @import '@shared/styles/main.scss';

    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    html {
        --background: hsl(240, 9%, 22%);
        --background-secondary: hsl(240, 10%, 17%);

        --foreground: hsla(0, 0%, 100%, 0.72);
        --foreground-secondary: hsla(0, 0%, 100%, 0.56);

        --divider: hsla(0, 0%, 0%, 0.12);
        --border-color: hsla(0, 0%, 0%, 0.24);

        --primary: hsl(158, 72%, 42%);

        --navigation-height: 6rem;

        @media (max-width: 900px) {
            --navigation-height: 4rem;
        }
    }

    body {
        background: var(--background);
        color: var(--foreground);

        font-family: 'Work Sans', sans-serif;

        
    }

    main {
        padding: var(--navigation-height) 1rem 1rem 1rem;
    }

    .app {
        display: grid;
        grid-template-rows: auto min-content;
        width: 100%;

        min-height: 100vh;
    }

</style>
