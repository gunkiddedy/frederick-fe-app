<template>
    <div id="app" class="bg-F2FAFB flex max-w-screen-2xl mx-auto overflow-auto">
		<Sidebar />
		<router-view></router-view>
  	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
	components: {
		Sidebar,
	}
}
</script>