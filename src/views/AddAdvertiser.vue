<template>
	<!-- class secure-local -->
  	<div class="add-advertiser w-full lg:ml-120px lg:px-9 px-4 lg:pt-20 pt-32 pb-20 border-l-4 border-F2F3F7">
		<!-- header -->
		<div class="header">
            <!-- text and button -->
			<div class="left-text flex items-center justify-between">
				<div class="title text-011728 lg:text-5xl text-3xl font-bold">
					Advertiser CMS
				</div>
                <button
                    @click="toCollaborations" 
                    class="text-white bg-8269BD rounded-lg px-5 py-2 text-base font-bold focus:outline-none">
                    Submit
                </button>
			</div>
            <div class="description text-011728 text-lg font-normal mt-3">
				Add your data to contribute to the collaboration
            </div>
		</div><!-- header -->

        <!-- ROUNDED tabulator -->
        <div class="tabulator mt-12 w-full min-h-428px rounded-lg border border-D2E3E7 bg-white py-7 px-6 shadow-md">
            
            <div class="font-bold lg:text-base text-sm leading-tight text-011728 mb-8">
                Load & Encrypt your data
            </div>

            <!-- TABS button -->
            <div class="tabs flex border-b border-D2E3E7 -ml-6 -mr-6 lg:pl-6 pl-2 lg:pr-0 pr-2">
                <button @click="toLocal" class="bg-white w-204px h-62px lg:text-lg text-sm font-bold text-40243C border border-D2E3E7 rounded-tl-lg rounded-tr-lg">
                    Local CSV
                </button>

                <button @click="toCloud" class="bg-F2FAFB w-204px h-62px lg:text-lg text-sm font-bold text-3F7992 border border-D2E3E7 rounded-tl-lg rounded-tr-lg mx-1">
                    Cloud Data Source
                </button>

                <button @click="toCollaborations" class="bg-F2FAFB w-204px h-62px lg:text-lg text-sm font-bold text-3F7992 border border-D2E3E7 rounded-tl-lg rounded-tr-lg">
                    Search Existing
                </button>
            </div>
            <div class="lg:text-base text-sm text-011728 mt-8 mb-5">
                Choose a CSV file to contribute to the analysis.
            </div>
            <!-- upload -->
            <div class="upload w-full min-h-324px rounded-lg bg-F2FAFB border border-dashed border-D2E3E7 flex items-center justify-center">
                <div 
                    class="p-12 bg-F2FAFB flex flex-col items-center" 
                    @dragover="dragover" 
                    @dragleave="dragleave" 
                    @drop="drop">
                    <input 
                        type="file" 
                        multiple 
                        name="fields[assetsFieldHandle][]" 
                        id="assetsFieldHandle" 
                        class="w-px h-px opacity-0 overflow-hidden absolute" 
                        @change="onChange" 
                        ref="file" 
                        accept=".csv" />
                
                    <label 
                        for="assetsFieldHandle" 
                        class="block cursor-pointer">
                        <div class="lg:text-sm text-xs">
                            <span class="underline">Upload</span> or Drop CSV File here
                        </div>
                    </label>

                    <div 
                        class="mt-4 flex flex-col items-center space-y-2" 
                        v-if="this.filelist.length" 
                        v-cloak>
                        <div class="flex items-center space-x-2" v-for="(file, index) in filelist" :key="index">
                            <div class="filename text-8269BD lg:text-sm text-xs font-medium text-center h-46px bg-white rounded-lg border border-D2E3E7 shadow flex items-center justify-center px-4">
                                <span>{{ file.name }}</span>
                            </div>
                            <button 
                                class="text-xs font-bold text-5E9D7F" 
                                type="button" 
                                @click="remove(filelist.indexOf(file))" 
                                title="Remove file">
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            </div><!-- upload -->
            <div class="lg:text-sm text-xs text-6B737B mt-4">
                By loading your data, you agree to the <a href="#" class="underline">Terms of Service.</a>
            </div>
        </div>
  	</div><!-- class secure-local -->
</template>

<script>
export default {
    delimiters: ['${', '}'], // Avoid Twig conflicts
	data() {
		return {
            filelist: []
		}
	},
	methods: {
        onChange() {
            this.filelist = [...this.$refs.file.files];
        },
        remove(i) {
            this.filelist.splice(i, 1);
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
		toLocal() {
			this.$router.push('/local')
		},
		toCloud() {
			this.$router.push('/cloud')
		},
		toCollaborations() {
			this.$router.push('/')
		},
	},
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
