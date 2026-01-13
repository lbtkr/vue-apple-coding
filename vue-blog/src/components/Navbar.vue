<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg
        " alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Vuelog
            </a>
            <div class="nav-list">
                <router-link
                    to="/"
                    class="nav-link">Home</router-link>
                <router-link
                    class="nav-link"
                    to="/list">List</router-link>
                <router-link
                    class="nav-link"
                    to="/detail">Deatil</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-list{
    display:flex;
    gap:24px;
    padding:0 12px;
}
</style>