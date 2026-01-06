<template>
    <nav class="nav">
        <ul>
            <li v-for="(item, idx) in navItems" :key="idx">
                <a :href="item.href">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '#' },
        { name: 'About', href: '#' },
    ];
</script>

<style lang="scss" scoped>
.nav {
    display:flex;
    background:darkslateblue;
    // padding: 15px;
    border-radius:5px;
    ul{
        display:flex;
        li{
            a{
                padding:10px;
                color:#fff;

            }
        }
    }
}
</style>