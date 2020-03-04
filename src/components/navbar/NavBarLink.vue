<template>
    <router-link class="nav-item" tag="li" active-class="active" :to="to">
        <a class="nav-link">{{ text }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        'text': String,
        'to': String
    }
}
</script>