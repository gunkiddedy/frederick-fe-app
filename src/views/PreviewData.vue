<template>
	<!-- class preview -->
  	<div class="preview w-full ml-120px lg:pt-20 pt-32 pb-4 overflow-x-hidden border-l-4 border-F2F3F7">
	
		<!-- header -->
		<div class="header lg:px-9 px-4">
			<div class="text-and-button flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:items-center justify-between">
				<div class="title flex relative lg:items-center items-baseline lg:space-x-2 space-x-0">
					<div class="text-011728 lg:text-5xl text-3xl font-bold">Preview your data contribution</div>
                    <img class="lg:mt-3 mt-0 lg:relative absolute lg:right-0 right-16" src="../assets/img/i-icon.png" alt="">
				</div>
                <!-- 2 button right-->
                <div class="right flex items-center space-x-2">
                    <button class="text-8269BD border border-8269BD rounded-lg px-5 py-2 text-base font-bold focus:outline-none">
                        Cancel
                    </button>

                    <button
                        @click="saving = !saving" 
                        class="text-white bg-8269BD rounded-lg px-5 py-2 border border-8269BD focus:outline-none">
                        Save
                    </button>
                </div><!-- 2 button right-->
			</div>
            <div class="description text-011728 text-sm font-normal lg:mt-3 mt-6 lg:mb-0 mb-6">
                Displaying 300 entries (with 100 columns) of your data contribution. All 300 entries are deduplicated, encrypted, and included in the analysis.
            </div>
		</div><!-- header -->

        <!-- table -->
        <div id="style-1" class="tables w-full h-screen overflow-auto mt-5 lg:-ml-9 -ml-4 lg:px-9 px-4">
            <table class="w-full">
                <!-- header -->
                <tr class="text-white text-xs">
                    <td rowspan="2" class="bg-F2FAFB text-011728 w-28 font-bold">
                        <div class="flex items-center px-9 space-x-2">
                            <span>Match Columns</span>
                            <img src="../assets/img/right-arrow.png" alt="">
                        </div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C1</div>
                    </td>
                    <td class="w-216px">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C2</div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C3</div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C4</div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C5</div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C6</div>
                    </td>
                    <td class="w-44">
                        <div class="bg-664886 h-6 flex items-center justify-center font-bold text-center">C7</div>
                    </td>
                </tr><!-- header -->
                
                <!-- SELECT checkbox -->
                <tr class="text-xs font-bold text-011728">
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc1" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc1">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-216px">
                            <label for="selectc2" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc2">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc3" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc3">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc4" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc4">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc5" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc5">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc6" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc6">
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center justify-center text-center h-8 bg-white w-44">
                            <label for="selectc7" class="mr-2">Select</label>
                            <input type="checkbox" name="" id="selectc7">
                        </div>
                    </td>
                </tr><!-- SELECT checkbox -->

                <!-- label -->
                <tr>
                    <td rowspan="1" class="bg-F2FAFB text-011728 w-28 font-bold text-xs">
                        <div class="flex items-center px-9 space-x-2 w-28">
                            <span>Label Column</span>
                            <img src="../assets/img/right-arrow.png" alt="">
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-between px-6 items-center bg-white">
                            <div class="text-011728 text-base mr-2 font-bold">Name</div>
                            <button>
                                <img class="w-3 h-auto" src="../assets/img/pencil.png" alt="">
                            </button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 px-4 flex justify-center items-center bg-white relative">
                            <span class="font-bold text-xs text-011728 absolute left-6 top-0 rounded-md bg-white px-3">
                                Label
                            </span>
                            <input
                                class="bg-F2FAFB w-full px-4 border border-D2E3E7 rounded-lg h-9 focus:outline-none text-sm" 
                                type="text"
                                placeholder="Email" 
                                name="" 
                                id="">
                            <button class="absolute right-6 font-bold text-xs text-8269BD">Add</button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-center items-center bg-white">
                            <button class="text-xs text-8269BD font-bold">Add Label</button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-center items-center bg-white">
                            <button class="text-xs text-8269BD font-bold">Add Label</button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-center items-center bg-white">
                            <button class="text-xs text-8269BD font-bold">Add Label</button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-center items-center bg-white">
                            <button class="text-xs text-8269BD font-bold">Add Label</button>
                        </div>
                    </td>
                    <td>
                        <div class="text-center h-14 flex justify-center items-center bg-white">
                            <button class="text-xs text-8269BD font-bold">Add Label</button>
                        </div>
                    </td>
                </tr><!-- label -->

                <!-- mark row -->
                <tr>
                    <td colspan="8">
                        <div class="bg-white h-10 px-9 flex items-center text-011728 text-xs">
                            <input type="checkbox" name="" id="mark" class="mr-2">
                            <label for="mark">Mark row one as header and exclude from analysis</label>
                        </div>
                    </td>
                </tr><!-- mark row -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R1</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R2</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R3</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R4</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R5</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R6</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R7</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R8</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R9</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->

                <!-- content -->
                <tr class="text-6B737B text-xs font-bold">
                    <td>
                        <div class="h-14 bg-white flex items-center justify-center">R10</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Nathan Weeks</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">rhernandez@thompson.com</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">736-62-4144</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-white flex items-center pl-2">Sample</div>
                    </td>
                    <td>
                        <div class="h-14 bg-blue-50 flex items-center pl-2">Sample</div>
                    </td>
                </tr><!-- content -->
            </table>
        </div><!-- table -->

        <!-- <div v-if="!saving" class="overlay bg-overlay opacity-50 z-50 absolute inset-y-0 inset-x-0 w-full min-h-900px">
            
        </div> -->
        <div v-show="saving">
            <overlay :msg="saving" />
        </div>
             
  	</div><!-- class preview -->
</template>

<script>
import overlay from '@/components/Overlay';
export default {
    components: {
        overlay
    },
	data() {
		return {
            saving: null,
		}
	},
    watch: {
        saving() {
            console.log('parent clicked')
        }
    }
};
</script>

<style scoped>
.tables::-webkit-scrollbar {
  width: 5px;
  height: 10px;
  background-color: #DEF6F9;
  border-radius: 10px;
}
.tables::-webkit-scrollbar:vertical {
  width: 10px;
  height: 5px;
  background-color: #DEF6F9;
  border-radius: 10px;
}
.tables::-webkit-scrollbar-thumb:horizontal {
  background: #8269BD;
  border-radius: 10px;
}
.tables::-webkit-scrollbar-thumb {
  background: #8269BD;
  border-radius: 10px;
}
.tables::-webkit-scrollbar-button {
    /* for horizontal scrollbar */
  width: 400px; 
  /* for vertical scrollbar */
  height: 200px; 
}

</style>
