<template>
    <Head title="Home" />

    <Section1 />

    <Section2 />

    <Section3 />

    <Section4 />

    <Section5 />

    <Footer />

</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import { Link } from "@inertiajs/inertia-vue3";
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";
import Footer from "../Footer/Index.vue";
export default {
    name: "Home",
    setup() {
        return {};
    },
    components: {
        Link,
        Head,
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Footer
    },
};
</script>

<style lang="css" scoped></style>
