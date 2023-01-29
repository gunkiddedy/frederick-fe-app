<template>
    <!-- email and check box -->
    <div class="email-and-chxbox">
        <!-- email -->
        <div class="input-email relative">
            <span class="font-bold text-sm text-011728 absolute left-4 -top-3 rounded-md bg-white px-3">
                Email
            </span>
            <input
                class="bg-F2FAFB w-full px-4 border border-D2E3E7 rounded-lg h-42px focus:outline-none" 
                type="text" 
                name="" 
                id="">
        </div>

        <!-- checkbox -->
        <div class="checkbox1 flex items-center mt-2 space-x-2">
            <input 
                checked="checked"
                type="checkbox" 
                name="" 
                :id="'check'+numb">

            <label class="text-011728 text-sm" :for="'check'+numb">
                Allow to receive results
            </label>
        </div>
    </div><!-- email and check box -->
</template>

<script>
export default {
    name: 'EmailComponent',
    props: {
        numb: {
            type: Number,
            default: 1
        },
    },
    watch: {
        numb() {
            // this.numb += 1;
            console.log('email clicked' + this.numb);
        }
    },
}
</script>