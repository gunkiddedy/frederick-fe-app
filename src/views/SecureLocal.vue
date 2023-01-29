<template>
	<!-- class secure-local -->
  	<div class="secure-local w-full lg:ml-120px lg:px-9 px-4 lg:pt-20 pt-32 pb-20 border-l-4 border-F2F3F7">
		
		<!-- header -->
		<div class="header flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between items-start">

			<!-- left text -->
			<div class="left-text flex flex-col space-y-4">
				<div class="title text-011728 lg:text-5xl text-3xl font-bold">
					Secure Overlap Setup
				</div>
				<div class="description text-011728 text-lg font-normal">
					Securely determine the overlap between your and your partner’s encrypted data sets.
				</div>
			</div><!-- left text -->

			<!-- 2 button right-->
			<div class="right flex items-center space-x-2">
				<button class="text-8269BD border border-8269BD rounded-lg px-5 py-2 text-base font-bold focus:outline-none">
					Save Draft
				</button>

				<button class="text-white bg-8269BD opacity-30 rounded-lg px-5 py-2 border border-8269BD focus:outline-none">
					Create Collaboration
				</button>
			</div><!-- 2 button right-->
		</div><!-- header -->

		<!-- main -->
		<div class="main flex lg:flex-row flex-col lg:space-y-0 space-y-8 justify-between items-start mt-14 lg:space-x-8 space-x-0">

			<!-- left content -->
			<!--<div class="left-content w-832px">-->
			<div class="left-content lg:w-70-persen w-full flex flex-col space-y-8">

				<!-- ROUNDED NAME w-832px h-135px-->
				<div class="field-text w-full h-135px bg-white rounded-lg border border-D2E3E7 px-8 pt-7 shadow-md">

					<div class="text-base text-011728 mb-3 font-bold leading-tight">
						Name your collaboration
					</div>

					<input
						class="bg-F2FAFB border border-D2E3E7 w-full h-42px rounded-lg focus:outline-none px-4" 
						type="text" 
						name="" 
						id="">

				</div>

				<!-- ROUNDED tabulator -->
				<!--<div class="tabulator w-832px h-428px rounded-lg border border-D2E3E7 bg-white pt-7 shadow-md">-->
				<div class="tabulator w-full min-h-428px rounded-lg border border-D2E3E7 bg-white pt-7 px-6 shadow-md">

					<div class="font-bold text-base leading-tight text-011728 mb-8">
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

						<button @click="toAbout" class="bg-F2FAFB w-204px h-62px lg:text-lg text-sm font-bold text-3F7992 border border-D2E3E7 rounded-tl-lg rounded-tr-lg">
							Search Existing
						</button>
					</div>

					<div class="lg:text-base text-sm text-011728 mt-8 mb-5">
						Choose a CSV file to contribute to the analysis.
					</div>

					<!-- upload -->
					<!-- <div class="upload w-full h-158px rounded-lg bg-F2FAFB border border-dashed border-D2E3E7 flex items-center justify-center">
						<div class="font-bold text-base text-8269BD">
							<span class="underline">Upload</span> or Drop CSV File here
						</div>
					</div> -->

					<!-- upload -->
					<div class="upload w-full min-h-158px rounded-lg bg-F2FAFB border border-dashed border-D2E3E7 flex items-center justify-center">
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
								<div class="lg:text-base text-sm">
									<span class="underline">Upload</span> or Drop CSV File here
								</div>
							</label>

							<div 
								class="mt-4 flex flex-col items-center space-y-2" 
								v-if="this.filelist.length" 
								v-cloak>
								<div 
									class="flex items-center space-x-2" 
									v-for="(file, index) in filelist" 
									:key="index">
									<div class="filename text-8269BD text-sm font-medium text-center h-46px bg-white rounded-lg border border-D2E3E7 shadow flex items-center justify-center px-4">
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

					<!-- upload vue dropzone -->
					<!-- <vue-dropzone 
						id="dropzone"
						:options="dropzoneOptions" 
						:useCustomSlot=true>
						<div class="font-bold text-base text-8269BD">
							<span class="underline">Upload</span> or Drop CSV File here
						</div>
					</vue-dropzone> -->
					

					<div class="lg:text-sm text-xs text-6B737B my-4">
						By loading your data, you agree to the <a href="#" class="underline">Terms of Service.</a>
					</div>

				</div>

			</div><!-- left content -->

			<!-- right -->
			<!-- <div class="right-content w-336px"> -->
			<div class="right-content lg:w-30-persen w-full">

				<!-- ROUNDED right content w-336px h-595px-->
				<div class="bg-white w-full min-h-595px h-auto rounded-lg border border-D2E3E7 shadow-md px-8 pt-7 relative">

					<div class="text-base font-bold text-011728 mb-6">
						Add collaborator(s)
					</div>

					<div class="text-sm text-011728 font-semibold mb-8">
						Invite up to 6 collaborators by email anytime during the collaboration or send them an invite link. 
					</div>
					
					<div class="wrap-email-chkcbk flex flex-col space-y-8">
						<!-- <component
							v-for="(component, index) in components"
							:key="index"
							:is="component"
						/> -->
						<EmailComponent
							v-for="(component, index) in components"
							:key="index" 
							:numb="index"/>
					</div>

					<div class="text-A0A8AE text-xs ml-5">
						This can be changed later
					</div>

					<!-- add another -->
					<button
						@click="addEmail()" 
						class="w-full h-42px border border-D2E3E7 bg-white rounded-lg text-8269BD text-sm font-bold mt-4">
						Add another
					</button>

					<!-- footer -->
					<div
						:class="{'relative mt-10 -mx-8' : moreThanTwo > 2, 'absolute bottom-4': lessThanTwo == 0}" 
						class="footer-card border-t border-D2E3E7 inset-x-0 px-8">

						<div class="text-sm font-bold text-011728 my-6">
							Send them an invite link.
						</div>

						<button class="bg-white w-full rounded-lg h-8 text-sm text-center font-bold text-8269BD border border-D2E3E7 flex items-center justify-center space-x-2">
							<img src="../assets/img/link.png" alt="">
							<span>Generate Invite Link</span>
						</button>


						<div class="text-xs text-center text-6B737B mt-6">
							The link will be valid for 48 hours
						</div>
					</div>

				</div><!-- ROUNDED right content w-336px h-595px-->

			</div><!-- right -->
		</div><!-- main -->

  	</div><!-- class secure-local -->
</template>

<script>
import EmailComponent from '@/components/EmailComponent.vue';
// import vue2Dropzone from 'vue2-dropzone'
// import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
	delimiters: ['${', '}'], // Avoid Twig conflicts
	components: { 
		EmailComponent,
		// vueDropzone: vue2Dropzone
	},
	data() {
		return {
			components: [EmailComponent],
			lessThanTwo: 0,
			moreThanTwo: 0,

			filelist: [],

			// dropzoneOptions: {
			// 	url: 'https://httpbin.org/post',
			// 	thumbnailWidth: 160,
			// 	thumbnailHeight: 46,
			// 	addRemoveLinks: true,
			// 	acceptedFiles: '.csv', //application/pdf,.doc,.docx,.xls,.xlsx,.csv
			// }
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
		toAbout() {
			this.$router.push('/about')
		},
		addEmail() {
			this.components.push(EmailComponent)
			this.moreThanTwo = this.components.length;
		}
	},
};
</script>

<style scoped>

</style>
