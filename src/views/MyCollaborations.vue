<template>
    <!-- class my-collaborations -->
    <div class="my-collaborations w-full lg:ml-120px lg:px-9 px-4 pt-32 pb-20 border-l-4 border-F2F3F7">

        <!-- header -->
        <div class="header flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between items-center">
            <div class="font-bold lg:text-5xl text-3xl text-011728">
                My collaborations
            </div>

            <button 
                @click="toNewCollaboration"
                class="bg-8269BD h-42px w-219px rounded-lg text-base text-white font-bold">
                Set up New Collaboration
            </button>
        </div>

        <!-- search filter card-->
        <div class="search-filters-card flex lg:flex-row lg:space-y-0 space-y-4 flex-col items-center justify-between lg:px-8 px-4 lg:py-6 py-4 bg-white rounded-lg shadow w-full lg:h-90px h-auto border border-D2E3E7 mt-12">

            <!-- search input -->
            <div class="wrap-search relative flex items-center lg:w-auto w-full">
                <input
                    class="search-input text-6B737B text-sm lg:w-439px w-full h-42px bg-F2FAFB rounded-lg border border-D2E3E7 focus:outline-none px-4" 
                    placeholder="Search my collaborations"
                    type="text" 
                    name="" 
                    id="">
                <img
                    class="absolute right-4" 
                    src="../assets/img/search-icon.png" alt="">
            </div><!-- search input -->

            <!-- filters button -->
            <button class="w-114px h-42px border border-4DD4E3 rounded-lg flex items-center justify-center space-x-3">
                <img src="../assets/img/filters-icon.png" alt="">
                <span class="text-6B737B text-sm">Filters</span>
            </button>

        </div><!-- search filter card-->

        <!-- collaborations card-->
        <div class="collaborations-table w-full mt-7">

            <!-- header -->
            <div class="header flex items-center lg:space-x-1 space-x-4 lg:px-8 px-2 pb-2 border-b border-D2E3E7 lg:text-sm text-xs font-bold text-6B737B w-full overflow-auto">
                <div class="a w-56">TYPE / NAME</div>
                <div class="b w-32 flex items-baseline space-x-1 cursor-pointer">
                    <div>DATE</div>
                    <img src="../assets/img/small-arrow-down.png" alt="">
                </div>
                <div class="c w-48 flex items-baseline space-x-1 cursor-pointer">
                    <div>CREATOR</div>
                    <img src="../assets/img/small-arrow-down.png" alt="">
                </div>
                <div class="d w-64">COLLABORATORS</div>
                <div class="e w-44 flex items-baseline space-x-1 cursor-pointer">
                    <div>STATUS</div>
                    <img src="../assets/img/small-arrow-down.png" alt="">
                </div>
            </div><!-- header -->

            <!-- body -->
            <div class="body mt-4 flex flex-col space-y-3">
                
                <!-- content loop this -->
                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto w-full">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Overlap</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">Advertiser CMS</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">Today</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">Me</div>
                    </div>
                    <div class="d w-64 flex items-center space-x-2">
                        <!-- kantar round -->
                        <div class="kantar-round flex items-center justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="text-011728 lg:text-sm text-xs text-center">Kantar</div>
                        </div>

                        <!-- user round -->
                        <div class="user-round flex items-center justify-center rounded-full px-2 h-25px bg-white border border-7AC6D7 w-max">
                            <img src="../assets/img/user-icon.png" alt="">
                        </div>

                        <!-- user round -->
                        <div class="user-round flex items-center justify-center rounded-full px-2 h-25px bg-white border border-7AC6D7 w-max">
                            <img src="../assets/img/user-icon.png" alt="">
                        </div>
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F4F8 text-11306D text-sm w-max">
                            <img src="../assets/img/reload-icon.png" alt="">
                            <div>Collecting data</div>
                        </button>
                    </div>
                </div>

                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Enrichment</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">New Secure Enrichment</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">08/21/21</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">Me</div>
                    </div>
                    <div class="d w-64 flex items-center space-x-2">
                        <div class="text-6B737B lg:text-sm text-xs">None</div>
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F8F8 text-0D6964 text-sm w-max">
                            <img src="../assets/img/draft-icon.png" alt="">
                            <div>Draft</div>
                        </button>
                    </div>
                    <div class="f">
                        <button @click="toAdvertiser" class="round flex items-center justify-center w-98px h-26px rounded-full bg-white text-8269BD lg:text-sm text-xs font-bold border border-8269BD">
                            <div>Continue</div>
                        </button>
                    </div>
                </div>

                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Overlap</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">New Secure Overlap</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">08/21/21</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">J. Adams</div>
                    </div>
                    <div class="d w-64 flex items-center">
                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                P&G
                            </div>
                        </div>
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F4F8 text-11306D lg:text-sm text-xs w-max">
                            <img src="../assets/img/bell-icon.png" alt="">
                            <div>Data request</div>
                        </button>
                    </div>
                    <div class="f">
                        <button 
                            @click="addAdvertiser"
                            class="round flex items-center justify-center w-98px h-26px rounded-full bg-8269BD text-white lg:text-sm text-xs font-bold border border-8269BD">
                            <div>Add Data</div>
                        </button>
                    </div>
                </div>

                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Overlap</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">New Secure Overlap</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">08/21/21</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">J. Adams</div>
                    </div>
                    <div class="d w-64 flex items-center space-x-2">
                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                P&G
                            </div>
                        </div>

                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 text-sm text-center">
                                Kantar
                            </div>
                        </div>

                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 text-sm text-center">
                                +2
                            </div>
                        </div>
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F4F8 text-5E9D7F text-sm w-max">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div>All data ready</div>
                        </button>
                    </div>
                    <div class="f">
                        <button class="round flex items-center justify-center w-98px h-26px rounded-full bg-8269BD text-white lg:text-sm text-xs font-bold border border-8269BD">
                            <div>Analyze</div>
                        </button>
                    </div>
                </div>

                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Overlap</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">New Secure Overlap</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">08/21/21</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">J. Adams</div>
                    </div>
                    <div class="d w-64 flex items-center space-x-2">
                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                P&G
                            </div>
                        </div>

                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                Kantar
                            </div>
                        </div>
                        
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F4F8 text-11306D text-sm w-max">
                            <img src="../assets/img/reload-icon.png" alt="">
                            <div>Analyzing data</div>
                        </button>
                    </div>
                </div>

                <div class="content flex items-center lg:space-x-1 space-x-4 h-90px bg-white rounded-lg shadow border border-D2E3E7 lg:px-8 px-2 lg:py-5 py-2 overflow-auto">
                    <div class="a w-56 flex flex-col space-y-2">
                        <div class="text-3E797E text-xs font-bold w-max">Secure Overlap</div>
                        <div class="text-011728 lg:text-sm text-xs w-max">New Secure Overlap</div>
                    </div>
                    <div class="b w-32">
                        <div class="text-011728 lg:text-sm text-xs">08/21/21</div>
                    </div>
                    <div class="c w-48">
                        <div class="text-011728 lg:text-sm text-xs">J. Adams</div>
                    </div>
                    <div class="d w-64 flex items-center space-x-2">
                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                P&G
                            </div>
                        </div>

                        <!-- kantar round -->
                        <div class="kantar-round flex items-center space-x-1 justify-center px-2 h-25px rounded-full bg-white border border-7AC6D7">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div class="text-011728 lg:text-sm text-xs text-center">
                                Kantar
                            </div>
                        </div>
                        
                    </div>
                    <div class="e w-44">
                        <button class="round flex items-center justify-center space-x-1 px-2 h-26px rounded-full bg-F2F4F8 text-5E9D7F text-sm w-max">
                            <div class="icons w-14px h-14px flex items-center justify-center rounded-full bg-5E9D7F">
                                <img class="z-20" src="../assets/img/white-check.png" alt="">
                            </div>
                            <div>Analysis completed</div>
                        </button>
                    </div>
                    <div class="f">
                        <button class="round flex items-center justify-center w-98px h-26px rounded-full bg-8269BD text-white lg:text-sm text-xs font-bold border border-8269BD">
                            <div>Activate</div>
                        </button>
                    </div>
                </div>

            </div><!-- body -->

        </div><!-- collaborations card-->

    </div><!-- class my-collaborations -->
</template>

<script>
export default {
    data() {
		return {
			
		}
	},
	methods: {
        // // open menu mobile
        // openNav() {
        //     document.getElementById("navbar-menu").style.left = "0";
        //     setTimeout(() => { 
        //         // alert("Hello"); 
        //         document.querySelector('body').style.height = "100vh";
        //     },500);
        // },
        // // // close menu mobile
        // closeNav() {
        //     document.getElementById("navbar-menu").style.left = "-1024px";
        //     document.querySelector('body').style.height = "100%";
        // },
        addAdvertiser() {
            this.$router.push('/add-advertiser')
        },
        toAdvertiser() {
            this.$router.push('/advertiser')
        },
		toNewCollaboration() {
			this.$router.push('/new-collaboration')
		},
	},
}
</script>