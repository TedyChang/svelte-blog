<script>
  import Router from "svelte-spa-router";
  import routes from './pages/routers'
</script>
<svelte:head>
    <!-- Fonts -->
    <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
    />

    <!-- Material Typography -->
    <link
            rel="stylesheet"
            href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css"
    />

    <!-- SMUI -->
    <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css"/>
</svelte:head>
<Router {routes}/>