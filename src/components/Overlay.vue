<template>
    <div class="overlay bg-overlay bg-opacity-75 flex flex-col items-center justify-center z-50 fixed inset-0 h-screen w-full overflow-hidden">
        <div class="w-full lg:px-40 px-8">
            <base-progress 
                :percentage="contentProgress" 
                class="lg:mx-4 mx-0 h-4">
                <!-- <span class="text-xs text-white w-full flex justify-end pr-2">
                    {{contentProgress}}%
                </span> -->
            </base-progress>
            <p class="text-center text-white text-base font-bold">
                Encrypting data for analysis and inviting collaborators...
            </p>
        </div>
        <!-- <div class="ml-2 mt-1 flex">
                <button
                @click="decreasePercentage"
                class="px-4 border text-xl border-teal-600 border-r-0 text-teal-600 hover:bg-teal-600 hover:text-white rounded-l focus:outline-none focus:shadow-outline"
                >-</button>
                <button
                @click="increasePercentage"
                class="px-4 border text-xl border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-r focus:outline-none focus:shadow-outline"
                >+</button>
            </div> -->
    </div>
</template>

<script>
import BaseProgress from "@/components/BaseProgress";
export default {
    components: {
        BaseProgress
    },
    props: ["msg"],
	data() {
		return {
            progressStart: 5,
            contentProgress: 5
		}
	},
    watch: {
        msg() {
            this.loadData();
        }
    },
	methods: {
        loadData() {
            for(let i = 1; i <= 21; i++){
                setTimeout(()=> {
                    console.log(this.contentProgress += 5) ;
                    if(i == 21){
                        this.$router.push('/')
                    }
                }, i * 1000 / 10)
            }
            console.log('child clicked');
        },
        increasePercentage() {
            if (this.contentProgress <= 80) {
                this.contentProgress += 20;
            }
        },
        decreasePercentage() {
            if (this.contentProgress >= 20) {
                this.contentProgress -= 20;
            }
        }
	},
};
</script>