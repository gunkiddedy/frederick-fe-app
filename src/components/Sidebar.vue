<template>
    <div>
        <!-- sidebar w-120px h-900px-->
        <div class="sidebar w-120px min-h-full bg-white pt-6 pb-10 hidden lg:flex flex-col items-center justify-between fixed z-50">

            <!-- logo -->
            <a href="/" class="logo">
                <img 
                    class="w-16 h-auto text-8269BD"
                    src="../assets/svg/logo.svg" 
                    alt="">
            </a>

            <!-- MyCollaborations menus -->
            <div
                v-if="$route.name =='MyCollaborations'" 
                class="icons flex flex-col space-y-8 relative">
                <router-link 
                    v-tooltip.right="'My collaborations'" 
                    to="/" 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg">
                    <img class="w-6 h-auto" src="../assets/img/deal-purple.png" alt="">
                    <div class="active-purple bg-8269BD rounded-tr-xl rounded-br-xl w-1 h-50px absolute -right-5"></div>
                </router-link>
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Set up new collaboration'" 
                    to="/new-collaboration">
                    <img class="w-5 h-auto" src="../assets/img/plus.png" alt="">
                </router-link>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Help'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/q-mark.png" alt="">
                </a>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Setting'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/setting.png" alt="">
                </a>
            </div>

            <!-- New Collaboration menus -->
            <div
                v-else-if="$route.name =='NewCollaboration'" 
                class="icons flex flex-col space-y-8 relative">
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'My collaborations'" 
                    to="/">
                    <img class="w-6 h-auto" src="../assets/img/deal.png" alt="">
                </router-link>
                <router-link
                    v-tooltip.right="'Set up new collaboration'"
                    to="/new-collaboration" 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg">
                    <img class="w-5 h-auto" src="../assets/img/plus-purple.png" alt="">
                    <div class="active-purple bg-8269BD rounded-tr-xl rounded-br-xl w-1 h-50px absolute -right-5"></div>
                </router-link>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Help'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/q-mark.png" alt="">
                </a>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Setting'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/setting.png" alt="">
                </a>
            </div>

            <div
                v-else 
                class="icons flex flex-col space-y-8">
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'My collaborations'" 
                    to="/">
                    <img class="w-6 h-auto" src="../assets/img/deal.png" alt="">
                </router-link>
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Set up new collaboration'" 
                    to="/new-collaboration">
                    <img class="w-5 h-auto" src="../assets/img/plus.png" alt="">
                </router-link>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Help'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/q-mark.png" alt="">
                </a>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-8 py-3 rounded-lg"
                    v-tooltip.right="'Setting'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/setting.png" alt="">
                </a>
            </div>
            
            <!-- circle bottom -->
            <div class="btm-fixed">
                <div class="circle w-10 h-10 rounded-full bg-8269BD flex flex-nowrap justify-center items-center">
                    <span class="text-sm text-white text-center">S</span>
                </div>
            </div>

        </div>

        <!-- sidebar MOBILE -->
        <div class="sidebar fixed z-50 w-full bg-white px-4 py-2 lg:hidden flex items-center justify-between">

            <!-- logo -->
            <a href="/" class="logo">
                <img 
                    class="w-12 h-auto"
                    src="../assets/img/nth-logo.png" 
                    alt="">
            </a>

            <div
                class="icons flex items-center justify-between space-x-4">
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-2 py-3 rounded-lg"
                    v-tooltip.right="'My collaborations'" 
                    to="/">
                    <img class="w-6 h-auto" src="../assets/img/deal.png" alt="">
                </router-link>
                <router-link
                    class="flex items-center justify-center hover:bg-F2FAFB px-2 py-3 rounded-lg"
                    v-tooltip.right="'Set up new collaboration'" 
                    to="/new-collaboration">
                    <img class="w-5 h-auto" src="../assets/img/plus.png" alt="">
                </router-link>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-2 py-3 rounded-lg"
                    v-tooltip.right="'Help'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/q-mark.png" alt="">
                </a>
                <a 
                    class="flex items-center justify-center hover:bg-F2FAFB px-2 py-3 rounded-lg"
                    v-tooltip.right="'Setting'"
                    href="#">
                    <img class="w-5 h-auto" src="../assets/img/setting.png" alt="">
                </a>
            </div>
            
            <!-- circle bottom -->
            <div class="btm-fixed">
                <div class="circle w-10 h-10 rounded-full bg-8269BD flex flex-nowrap justify-center items-center">
                    <span class="text-sm text-white text-center">S</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>