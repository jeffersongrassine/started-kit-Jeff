<template>
    <!-- MD Visibility -->
    <div
        class="bg-c5 relative hidden md:flex flex h-96 w-full md:mt-0 mt-4 p-14 md:p-12"
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
                    class="text-c5 fill-current"
                    points="2660 0 2660 100 0 100"
                ></polygon>
            </svg>
        </div>

        <div class="flex justify-between w-full">
            <div class="col-span-10 md:ml-4">
                <h4 class="text-c1 font-extrabold">MEUS CONTATOS</h4>
                <p class="text-base font-extralight text-c1 opacity-70 mb-4">
                    Estrada Raul Veiga, 351 - Sala 821 (Stilo Shopping)<br />
                    Alcântara - São Gonçalo - RJ
                </p>

                <!-- Lista de Contato -->
                <div class="flex">
                    <ul class="ml-5 flex flex-col">
                        <!-- Icone Telefone -->
                        <Link href="">
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/phone_icon.svg"
                                            alt="Icone de um telefone"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            Ligue para mim
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>

                        <!-- Icone WhatsApp -->
                        <Link href="">
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/whatsapp_icon.png"
                                            alt="Icone do whatsApp"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            Fale comigo agora
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>

                        <!-- Icone E-mail -->
                        <Link href="">
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/contact_mail_icon.png"
                                            alt="Icone de um envelope"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            Mande uma Mensagem
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>

                        <!-- Icone Instagram -->
                        <Link
                            href="https://www.instagram.com/nutrisinistra/"
                            target="_blank"
                        >
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/instagram_icon.png"
                                            alt="Icone do Instagram"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            SIGA-ME
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div class="col-span-2 border-l-2 border-c1 pl-5">
                <h4 class="text-c1 font-extrabold mr-5 mb-5">O QUE DESEJA?</h4>
                <div class="flex">
                    <ul class="ml-2 flex flex-col">
                        <!-- Icone Add User -->
                        <Link href="">
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/add_avatar_icon.png"
                                            alt="Icone de um telefone"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            Cadastrar
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>

                        <!-- Icone Logar Conta -->
                        <Link href="">
                            <li>
                                <div
                                    class="grid grid-cols-12 items-center mb-2"
                                >
                                    <div class="col-span-1">
                                        <img
                                            class=""
                                            src="../Assets/lock_avatar_icon.svg"
                                            alt="Icone de um telefone"
                                        />
                                    </div>
                                    <div class="col-span-11 ml-2">
                                        <p class="text-sm text-c1 opacity-70">
                                            Entrar
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile -->
    <div class="bg-c5 relative md:hidden flex w-full mt-4 p-8">
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
                    class="text-c5 fill-current"
                    points="2660 0 2660 100 0 100"
                ></polygon>
            </svg>
        </div>

        <div>
            <div class="flex flex-lg-column justify-between w-full">
                <div class="">
                    <h4 class="text-c1 font-extrabold">MEUS CONTATOS</h4>
                    <p class="text-xs font-extralight text-c1 opacity-70 mb-4">
                        Estrada Raul Veiga, 351 <br />Sala 821 - (Stilo
                        Shopping)<br />
                        Alcântara - São Gonçalo - RJ
                    </p>
                </div>
            </div>
        </div>

        <!-- Lista de Contato -->
        <div class="flex ml-10">
            <ul class="ml-5">
                <!-- Icone Telefone -->
                <Link href="">
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/phone_icon.svg"
                                    alt="Icone de um telefone"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    Ligue para mim
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>

                <!-- Icone WhatsApp -->
                <Link href="">
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/whatsapp_icon.png"
                                    alt="Icone do whatsApp"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    Fale comigo agora
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>

                <!-- Icone E-mail -->
                <Link href="">
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/contact_mail_icon.png"
                                    alt="Icone de um envelope"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    Mensagem
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>

                <!-- Icone Instagram -->
                <Link
                    href="https://www.instagram.com/nutrisinistra/"
                    target="_blank"
                >
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/instagram_icon.png"
                                    alt="Icone do Instagram"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    SIGA-ME
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>
                 <!-- Icone Add User -->
                <Link
                    href=""
                    target="_blank"
                >
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/add_avatar_icon.png"
                                    alt="Icone do Instagram"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    Cadastrar
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>
                 <!-- Icone Entrar -->
                <Link
                    href=""
                    target="_blank"
                >
                    <li>
                        <div class="grid grid-cols-12 items-center mb-2">
                            <div class="col-span-1">
                                <img
                                    class=""
                                    src="../Assets/lock_avatar_icon.svg"
                                    alt="Icone do Instagram"
                                />
                            </div>
                            <div class="col-span-11 ml-2">
                                <p class="text-sm text-c1 opacity-70">
                                    Entrar
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>
                
                
            </ul>
        </div>
    </div>

 

    <div class="w-full flex flex-row items-center justify-center bg-c5">
        <Link :href="route('homepage')" class="z-20">
            <img src="../Assets/logo-nova.png" alt="" class="z-10" />
        </Link>
    </div>
    <div class="w-full flex flex-row items-center justify-center bg-c5">
        <p class="block text-c1 opacity-70 text-xs mt-2 mb-4">
            Todos os direitos reservados - 2022
        </p>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    name: "Footer",
    setup() {
        return {};
    },
    components: {
        Link,
    },
};
</script>

<style lang="css" scoped></style>
