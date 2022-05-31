<template>
    <div
        class="w-full relative bg-rosa1 flex flex-col p-5 mt-6 md:mt-4 md:p-20 justify-center"
    >
        <div
            class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
            style="height: 80px"
        >
            <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    class="text-rosa1 fill-current"
                    points="2660 0 2660 100 0 100"
                ></polygon>
            </svg>
        </div>

        <div class="flex flex-col items-center">
            <h1 class="text-center text-3xl md:mb-0 md:text-4xl font-extrabold">
                Um pouco mais sobre mim
            </h1>

            <div>
                <img
                    src="../Assets/merielle-sentada.png"
                    alt="Foto Merielle Nutricionista sentada"
                    class="w-28 md:w-48"
                />
            </div>
        </div>

        <!-- Accordion -->
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingOne">
                        <button
                            class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-c2 text-left bg-roxo2 border-0 rounded-none transition focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            SOBRE MIM
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body py-4 px-5">
                            Sou a <code>Merielle</code> , apaixonada por tudo
                            que envolve alimentação, nutrição e saúde.
                            Nutricionista Graduada, Pós-graduada em Fitoperapia
                            e Nutrição Clínica, atuo em projetos voltados à
                            perda de gordura corporal, ganho de massa magra
                            (músculos), saúde, tendo como foco principal a
                            qualidade de vida dos meus pacientes. Meu
                            atendimento ocorre de forma presencial e on-line,
                            onde analiso sua necessidade, afim de agregar meus
                            conhecimentos, tornando possível seu processo de
                            mudança de hábito alimentar, e consequentemente uma
                            <strong>vida saudável.</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingTwo">
                        <button
                            class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-c2 text-left bg-roxo2 border-0 rounded-none transition focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            MINHA ALIMENTAÇÃO
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body py-4 px-5">
                            Entendendo a <strong>minha história</strong>, e os
                            meus objetivos, sigo um plano alimentar que envolve
                            escolhas de alimentos saudáveis, com refeições
                            reguladas e controladas para que eu sempre que ao
                            olhar no espelho me sinta feliz. Ter uma alimentação
                            saudável e nutritiva está na moda hoje, e a cada dia
                            que passa mais e mais pessoas estão preocupadas com
                            o que comer. E, dentro desse contexto, sigo uma
                            alimentação balanceada e adequada que tem papel
                            fundamental na prevenção de doenças graves, como
                            diabetes, colesterol e até mesmo alguns tipos de
                            câncer.
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingThree">
                        <button
                            class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-c2 text-left bg-roxo2 border-0 rounded-none transition focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            ESTILO DE VIDA
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body py-4 px-5">
                            Acredito que um estilo de vida saudável de forma
                            constante pode prevenir, tratar, e ainda, reverter
                            diversas doenças crônicas. Um estilo de vida
                            saudável vai além de uma consulta com algumas
                            prescrições. Ressignificar a mentalidade para busca
                            de escolhas alimentares saudáveis, aliadas à prática
                            regular de atividade física, garante um resultado
                            satisfatório. Desta forma, minha rotina diária
                            consiste em uma boa alimentação, desenvolvendo a
                            prática de atividade física e garantindo a qualidade
                            do sono, que influencia diretamente como indicador
                            para uma <strong>vida saudável.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSection4",
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
