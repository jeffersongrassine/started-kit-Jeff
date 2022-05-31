<template>
    <header class="bg-c2 h-full">
        <div class="flex flex-col items-center justi p-10">
            <Link :href="route('homepage')">
                <h1 class="font-mono text-3xl text-rosa3">Merielle Grassine</h1>
            </Link>
            <p class="font-mono text-2xl text-roxo3 mt-4">nutricionista</p>
        </div>
        <!-- Section-1 Modibile -->
        <div class="md:hidden -mt-20 -ml-10">
            <img
                class=""
                src="../Assets/merielleGrassine.png"
                alt="Merielle Grassine"
            />
        </div>
        <div
            class="bg-gradient-to-r from-c2 to-c3 md:hidden grid grid-flow-row justify-center border-b-2 border-roxo3"
        >
            <h2 class="text-4xl text-roxo3 font-black mt-5">
                Nutrição Personalizada
            </h2>
            <p class="md:text-1xl">
                A saúde sempre começa com um estilo de vida saudável
            </p>
            <div class="mb-8">
                <button
                    class="bg-roxo3 px-6 py-3 mt-4 rounded-md shadow-md font-semibold hover:scale-110"
                    type="button"
                >
                    <span class="text-white">FALE COMIGO!</span>
                </button>
            </div>
        </div>
        <!-- Section-1 - MD -->
        <div class="hidden md:grid md:grid-cols-2">
            <div class="pl-8 md:pl-16">
                <h2
                    class="text-4xl md:text-7xl text-roxo3 font-black md:font-extrabold mt-10 AlturaLinha"
                >
                    Nutrição<br />
                    Personalizada
                </h2>
                <p class="md:text-1xl">
                    A saúde sempre começa com um estilo de vida saudável
                </p>
                <div class="text-white">
                    <button
                        class="bg-roxo3 px-6 py-3 mt-4 rounded-md shadow-md font-semibold hover:scale-110"
                        type="button"
                    >
                        <span class="">FALE COMIGO!</span>
                    </button>
                </div>
            </div>
            <div class="-mt-52 -ml-10">
                <img
                    class=""
                    src="../Assets/merielleGrassine.png"
                    alt="Merielle Grassine"
                />
            </div>
        </div>
    </header>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    name: "HomeSection1",
    setup() {
        return {};
    },
    components: {
        Link,
        Head,
    },
};
</script>

<style lang="css" scoped>
/* .button-fale-comigo {
    color: #f7f7f7;
} */
.AlturaLinha {
    line-height: 0.8;
}
</style>
