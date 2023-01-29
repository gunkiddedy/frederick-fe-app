<template>
	<!-- class secure-local -->
  	<div class="advertisers w-full lg:ml-120px lg:px-9 px-4 lg:pt-20 pt-32 pb-20 relative border-l-4 border-F2F3F7">

		<!-- top content -->
		<div class="top-content flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between lg:space-x-8 space-x-0">

			<!-- left -->
			<div class="left lg:w-70-persen w-full h-200px rounded-lg shadow bg-white border border-D2E3E7">
				<!-- title -->
				<div class="title flex items-center space-x-2 pt-8 lg:pl-8 pl-4">
					<div class="text-40243C text-lg font-bold">Secure Overlap</div>
					<img src="../assets/img/i-icon.png" alt="">
				</div>

				<div class="name text-3E797E text-sm font-black mb-2 mt-8 lg:pl-8 pl-4">
					NAME OF COLLABORATION
				</div>

				<div class="lg:text-5xl text-3xl text-011728 font-bold lg:pl-8 pl-4">
					Advertiser CMS
				</div>
			</div>

			<!-- right -->
			<div class="right lg:w-30-persen w-full relative h-200px rounded-lg shadow bg-white border border-D2E3E7 py-4 lg:px-6 px-4">
				
				<!-- top title -->
				<div class="top-title flex items-center justify-between">
					<div class="left-text text-011728 text-base font-bold">Collaborators</div>
					<div class="right-icon flex items-center space-x-3">
						<img src="../assets/img/user-icon-purple-plus.png" alt="">
						<img src="../assets/img/fullscreen.png" alt="">
					</div>
				</div>

				<!-- circles -->
				<div class="circles-stack flex relative left-16 mt-9">
						<div class="circle-one w-46px h-46px flex items-center justify-center rounded-full border-2 border-white bg-D49D48 absolute left-0">
							<span class="text-base text-white">S</span>
						</div>
						<div class="circle-one w-46px h-46px flex items-center justify-center rounded-full border-2 border-white bg-E5E2EB absolute left-8">
							<img class="w-14px h-auto" src="../assets/img/user-icon.png" alt="">
						</div>
						<div class="circle-one w-46px h-46px flex items-center justify-center rounded-full border-2 border-white bg-E5E2EB absolute left-16">
							<img class="w-14px h-auto" src="../assets/img/user-icon.png" alt="">
						</div>
						<div class="circle-one w-46px h-46px flex items-center justify-center rounded-full border-2 border-white bg-E5E2EB absolute left-24">
							<img class="w-14px h-auto" src="../assets/img/user-icon.png" alt="">
						</div>
				</div><!-- circles -->

				<!-- title footer -->
				<div class="title text-6B737B text-sm absolute bottom-4 inset-x-0 text-center">
					There are 3 pending collaborators - max 6
				</div>

			</div>

		</div><!-- top content -->

		<!-- bottom content -->
		<div class="bottom-content mt-14">
			<!-- title -->
			<div class="title text-011728 font-bold text-lg">
				Encrypted Datasets
			</div>

			<!-- dataset -->
			<div class="dataset w-full flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:items-center justify-between lg:h-90px h-auto bg-white border border-D2E3E7 shadow rounded-lg mt-3 lg:px-8 px-4 py-6">

				<!-- search dataset -->
				<div class="wrap-dataset-search flex items-center relative">
					<input
						class="lg:w-307px w-full h-42px bg-F2FAFB px-4 rounded-lg border border-D2E3E7 text-6B737B text-base focus:outline-none" 
						placeholder="Search datasets"
						type="text" 
						name="" id="">
					<img
						class="absolute right-4"
						src="../assets/img/search-icon.png" alt="">
				</div>

				<!-- sort by -->
				<div class="sort-by flex items-center space-x-2">
					<div class="title text-011728 text-sm font-bold">Sort by:</div>
					<select
                        class="select-newest bg-white appearance-none w-135px h-42px px-4 focus:outline-none flex items-center justify-between border border-4DD4E3 text-011728 text-sm rounded-lg" 
                        name="" 
                        id="">
                        <option value="">Newest</option>
						<option value="">lorem</option>
						<option value="">ipsum</option>
                    </select>
				</div>

				<!-- Display -->
				<div class="display flex items-center space-x-2">
					<div class="title text-011728 text-sm font-bold">Display:</div>
					<select
                        class="select-newest bg-white appearance-none w-221px h-42px px-4 focus:outline-none flex items-center justify-between border border-4DD4E3 text-011728 text-sm rounded-lg" 
                        name="" 
                        id="">
                        <option value="">Data from all Collaborators</option>
						<option value="">Lorem ipsum dolor sit.</option>
						<option value="">Lorem, ipsum dolor.</option>
                    </select>
				</div>

				<button class="w-145px h-42px bg-8269BD rounded-lg text-white text-base font-bold flex items-center justify-center space-x-2">
					<img src="../assets/img/arrow-up-white.png" alt="">
					<div>Add Dataset</div>
				</button>
				
			</div>

			<!-- displaying dataset grid-->
			<div class="displaying mt-8 w-full">
				<!-- title -->
				<div class="title text-011728 text-sm mb-3">Displaying 1 out of 1 datasets</div>

				<!-- dataset grid -->
				<div class="dataset-grid flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-between">

					<!-- card -->
					<div class="card lg:pl-8 pl-4 py-3 pr-5 lg:w-285px w-full h-114px bg-white rounded-lg border border-D2E3E7 shadow relative">
						<!-- top text and icon -->
						<div class="top flex items-center justify-between">
							<div class="title text-011728 text-lg leading-tight">
								Infutor
							</div>
							<img src="../assets/img/guard-icon.png" alt="">
						</div>

						<!-- me -->
						<div class="me text-3E797E text-base">Me</div>

						<!-- time -->
						<div class="time text-3E797E text-sm absolute bottom-4">
							08/21/21   11:11 am
						</div>
					</div>

					<!-- card -->
					<div class="card lg:pl-8 pl-4 py-3 pr-5 lg:w-285px w-full h-114px bg-white rounded-lg border border-D2E3E7 shadow relative">
						<!-- top text and icon -->
						<div class="top flex items-center justify-between">
							<div class="title text-011728 text-lg leading-tight">
								Infutor
							</div>
							<img src="../assets/img/guard-icon.png" alt="">
						</div>

						<!-- me -->
						<div class="me text-3E797E text-base">Me</div>

						<!-- time -->
						<div class="time text-3E797E text-sm absolute bottom-4">
							08/21/21   11:11 am
						</div>
					</div>

					<!-- card -->
					<div class="card lg:pl-8 pl-4 py-3 pr-5 lg:w-285px w-full h-114px bg-white rounded-lg border border-D2E3E7 shadow relative">
						<!-- top text and icon -->
						<div class="top flex items-center justify-between">
							<div class="title text-011728 text-lg leading-tight">
								Infutor
							</div>
							<img src="../assets/img/guard-icon.png" alt="">
						</div>

						<!-- me -->
						<div class="me text-3E797E text-base">Me</div>

						<!-- time -->
						<div class="time text-3E797E text-sm absolute bottom-4">
							08/21/21   11:11 am
						</div>
					</div>

					<!-- card -->
					<div class="card lg:pl-8 pl-4 py-3 pr-5 lg:w-285px w-full h-114px bg-white rounded-lg border border-D2E3E7 shadow relative">
						<!-- top text and icon -->
						<div class="top flex items-center justify-between">
							<div class="title text-011728 text-lg leading-tight">
								Infutor
							</div>
							<img src="../assets/img/guard-icon.png" alt="">
						</div>

						<!-- me -->
						<div class="me text-3E797E text-base">Me</div>

						<!-- time -->
						<div class="time text-3E797E text-sm absolute bottom-4">
							08/21/21   11:11 am
						</div>
					</div>										

				</div><!-- dataset grid -->

			</div>
			
		</div><!-- bottom content -->

		<!-- box green alert -->
		<div class="green-alert w-full flex items-center justify-between h-60px bg-5E9D7F rounded-lg shadow pl-9 pr-2 py-6 mt-36">
			<div class="left flex items-center space-x-4">
				<img src="../assets/img/check-circle-white.png" alt="">
				<div class="text text-white font-bold text-lg">
					All data ready
				</div>
			</div>

			<div class="right">
				<button class="px-6 h-42px bg-white rounded-lg text-8269BD text-base font-bold">
					Analyze
				</button>
			</div>
		</div>

		


  	</div><!-- class secure-local -->
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		
	},
};
</script>

<style scoped>
.select-newest {
    background: url('../assets/img/small-arrow-down.png') no-repeat center right;
    background-size: 0.6rem;
    background-position-x: 92%;
}
</style>
