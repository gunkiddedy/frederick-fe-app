<template>
    <!-- class new-collaboration -->
    <div class="new-collaboration w-full lg:ml-120px lg:pl-20 pl-4 lg:pr-9 pr-4 pt-32 pb-20 border-l-4 border-F2F3F7">

        <!-- header -->
        <div class="header flex justify-between items-center w-full">
            <div class="font-bold lg:text-5xl lg:tracking-normal tracking-tighter text-3xl text-011728 w-full">
                Set up a new collaboration
            </div>            
        </div>

        <!-- collaboration card -->
        <div class="wrap-card-collaboration grid lg:grid-cols-3 grid-cols-1 gap-y-5 mt-20">

            <!-- card collaboration-->
            <div class="card-collaboration relative flex flex-col items-center justify-around pt-12 pb-7 px-12 lg:w-352px w-auto h-401px bg-white rounded-lg border border-D2E3E7 shadow">
                <!-- icon image -->
                <img class="absolute top-10" src="../assets/img/double-circle.png" alt="">
                <!-- wrap text -->
                <div class="wrap-text flex flex-col h-36">
                    <!-- title -->
                    <div class="title text-011728 text-2xl font-bold">
                        Secure Overlap
                    </div>
                    <!-- desc -->
                    <div class="desc text-6B737B text-sm mt-6">
                        Securely determine the overlap between your and your partner’s encrypted data sets.
                    </div>
                </div>
                <!-- button -->
                <button
                    @click="toSecureLocal" 
                    class="h-42px px-4 bg-8269BD rounded-lg text-white text-base absolute bottom-7">
                    Set up
                </button>
            </div><!-- card collaboration-->
            <!-- card collaboration-->
            <div class="card-collaboration relative flex flex-col items-center justify-around pt-12 pb-7 px-12 lg:w-352px w-auto h-401px bg-white rounded-lg border border-D2E3E7 shadow">
                <!-- icon image -->
                <img class="absolute top-10" src="../assets/img/stick-icon.png" alt="">
                <!-- wrap text -->
                <div class="wrap-text flex flex-col h-36">
                    <!-- title -->
                    <div class="title text-011728 text-2xl font-bold">
                        Secure Enrichment
                    </div>
                    <!-- desc -->
                    <div class="desc text-6B737B text-sm mt-6">
                        Securely enrich your encripted data set using your partner’s encrypted data set without revealing anything to your partner.
                    </div>
                </div>
                <!-- button -->
                <button
                    @click="toSecureLocal" 
                    class="h-42px px-4 bg-8269BD rounded-lg text-white text-base absolute bottom-7">
                    Set up
                </button>
            </div><!-- card collaboration-->
            <!-- card collaboration-->
            <div class="card-collaboration relative flex flex-col items-center justify-around pt-12 pb-7 px-12 lg:w-352px w-auto h-401px bg-white rounded-lg border border-D2E3E7 shadow">
                <!-- icon image -->
                <img class="absolute top-10" src="../assets/img/analysis-icon.png" alt="">
                <!-- wrap text -->
                <div class="wrap-text flex flex-col h-36">
                    <!-- title -->
                    <div class="title text-011728 text-2xl font-bold">
                        Secure Analysis
                    </div>
                    <!-- desc -->
                    <div class="desc text-6B737B text-sm mt-6">
                        Securely calculate aggregate totals of common entries in your partner and your partner’s encrypted data sets.
                    </div>
                </div>
                <!-- button -->
                <button
                    @click="toSecureLocal" 
                    class="h-42px px-4 bg-8269BD rounded-lg text-white text-base absolute bottom-7">
                    Set up
                </button>
            </div><!-- card collaboration-->

        </div>

    </div><!-- class new-collaborations -->
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toSecureLocal() {
            this.$router.push('/local')
        }
    }
}
</script>