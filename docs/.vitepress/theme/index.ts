import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import LabHome from './components/LabHome.vue'
import EntryGrid from './components/EntryGrid.vue'
import TaskBoard from './components/TaskBoard.vue'
import './style.css'
export default { extends: DefaultTheme, enhanceApp({app}) { app.component('LabHome',LabHome); app.component('EntryGrid',EntryGrid); app.component('TaskBoard',TaskBoard) } } satisfies Theme
