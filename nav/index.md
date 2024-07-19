<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './data.ts'
</script>

<MNavLinks :items="NAV_DATA[0].items"/>
