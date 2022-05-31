<template>
    <div class="w-full bg-c2 flex flex-row p-5 md:p-20 justify-center">
        
        <div class="bg-white w-full p-14 rounded-xl">
            <h1 class="text-center text-xl md:text-4xl font-extrabold">
                Quer receber dicas de alimentação?
            </h1>
            <div class="sm:col-span-4">
                <div class="mt-5 flex justify-center">
                    <input
                        name="nome"
                        type="text"
                        autocomplete="nome"
                        placeholder="Digite o seu nome"
                        class="shadow-sm focus:ring-c3 focus:border-c3 block w-96 sm:text-sm border-c3 rounded-md"
                    />
                </div>
                <div class="mt-5 flex justify-center">
                    <input
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="Digite o seu e-mail"
                        class="shadow-sm focus:ring-c3 focus:border-c3 block w-96 sm:text-sm border-c3 rounded-md"
                    />
                </div>
            </div>

            <div class="flex justify-center mt-5">
                 <button
                    class="bg-roxo3 px-6 py-3 rounded-md shadow-md font-semibold hover:scale-110"
                    type="button"
                >
                    <span class="text-white">CADASTRAR</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSection3",
    setup() {
        return {};
    },
};
</script>

<style lang="css" scoped>
hr {
    height: 0.01rem;
    background-color: #f7f7f7;
    border: none;
    opacity: 0.3;
}
</style>
