<template>
    <div
        class="w-full bg-gradient-to-l from-roxo2 to-roxo3 md:hidden flex flex-row px-5 pb-5 border-b-2 border-roxo3"
    >
        <!-- Mobile -->
        <ul class="">
            <!-- Icone Maçã -->
            <li>
                <div class="grid grid-cols-12 items-center mt-6">
                    <div class="col-span-1">
                        <img
                            class="w-10 h-10"
                            src="../Assets/maca.svg"
                            alt="Icone de uma maçã"
                        />
                    </div>
                    <div class="col-span-11 ml-2">
                        <p class="text-sm text-c1 opacity-70">
                            Garantia de entrega de um plano alimentar totalmente
                            personalizado, considerando a sua história.
                        </p>
                    </div>
                </div>
                <hr />
            </li>

            <!-- Icone Balança -->
            <li>
                <div class="grid grid-cols-12 items-center mt-6">
                    <div class="col-span-1">
                        <img
                            class="w-10 h-10 mb-2"
                            src="../Assets/balanca.svg"
                            alt="Icone de uma maçã"
                        />
                    </div>
                    <div class="col-span-11 ml-2">
                        <p class="text-sm text-c1 opacity-70">
                            Análise de dados antropométricos e laboratoriais, vou te ajudar a consquistar as melhores medidas.
                        </p>
                    </div>
                </div>
                <hr />
            </li>

            <!-- Icone Relógio -->
            <li>
                <div class="grid grid-cols-12 items-center mt-6">
                    <div class="col-span-1">
                        <img
                            class="w-10 h-10"
                            src="../Assets/relogio.svg"
                            alt="Icone de uma maçã"
                        />
                    </div>
                    <div class="col-span-11 ml-2">
                        <p class="text-sm text-c1 opacity-70">
                           Você sabia que o seu atendimento pode ser elaborado de acordo com a sua rotina? Vou te acompanhar de forma presencial, por telefone, e e-mail e whatsApp.
                        </p>
                    </div>
                </div>
                <hr />
            </li>

            <!-- Icone Ficha -->
            <li>
                <div class="grid grid-cols-12 items-center mt-4">
                    <div class="col-span-1">
                        <img
                            class="w-9 h-9"
                            src="../Assets/ficha.svg"
                            alt="Icone de uma maçã"
                        />
                    </div>
                    <div class="col-span-11 ml-2">
                        <p class="text-sm text-c1 opacity-70">
                            Na busca em elaborar o melhor tratamento para o seu perfil. Faremos uma análise minuciosa da sua história, para montar o plano ideal.
                        </p>
                    </div>
                </div>
                <hr />
            </li>
        </ul>
    </div>

    <!-- Section-1 - MD -->
    <div
        class="w-full bg-gradient-to-l from-roxo2 to-roxo3 hidden md:flex md:flex-row px-5 pb-5 border-b-2 border-roxo3 justify-center items-center"
    >
        <div class="mt-8">
            <img src="../Assets/foto-alimento.png" alt="" />
        </div>

        <div>
            <ul class="">
                <!-- Icone Maçã -->
                <li>
                    <div class="grid grid-cols-12 items-center mt-6">
                        <div class="col-span-1">
                            <img
                                class="w-10 h-10"
                                src="../Assets/maca.svg"
                                alt="Icone de uma maçã"
                            />
                        </div>
                        <div class="col-span-11 ml-2">
                            <p class="text-sm text-c1 opacity-70">
                                Garantia de entrega de um plano alimentar
                                totalmente personalizado, considerando a sua
                                história.
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>

                <!-- Icone Balança -->
                <li>
                    <div class="grid grid-cols-12 items-center mt-6">
                        <div class="col-span-1">
                            <img
                                class="w-10 h-10 mb-2"
                                src="../Assets/balanca.svg"
                                alt="Icone de uma maçã"
                            />
                        </div>
                        <div class="col-span-11 ml-2">
                            <p class="text-sm text-c1 opacity-70">
                               Análise de dados antropométricos e laboratoriais, vou te ajudar a consquistar as melhores medidas.
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>

                <!-- Icone Relógio -->
                <li>
                    <div class="grid grid-cols-12 items-center mt-6">
                        <div class="col-span-1">
                            <img
                                class="w-10 h-10"
                                src="../Assets/relogio.svg"
                                alt="Icone de uma maçã"
                            />
                        </div>
                        <div class="col-span-11 ml-2">
                            <p class="text-sm text-c1 opacity-70">
                                Você sabia que o seu atendimento pode ser elaborado de acordo com a sua rotina? Vou te acompanhar de forma presencial, por telefone, e e-mail e whatsApp.
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>

                <!-- Icone Ficha -->
                <li>
                    <div class="grid grid-cols-12 items-center mt-4">
                        <div class="col-span-1">
                            <img
                                class="w-9 h-9"
                                src="../Assets/ficha.svg"
                                alt="Icone de uma maçã"
                            />
                        </div>
                        <div class="col-span-11 ml-2">
                            <p class="text-sm text-c1 opacity-70">
                               Na busca em elaborar o melhor tratamento para o seu perfil. Faremos uma análise minuciosa da sua história, para montar o plano ideal.
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSection2",
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
