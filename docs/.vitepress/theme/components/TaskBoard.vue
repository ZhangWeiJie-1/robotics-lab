<script setup lang="ts">
import { tasks, projectBoardUrl } from '../data'
const columns = ['待办','进行中','已完成（历史记录）']
</script>
<template><div><a v-if="projectBoardUrl" class="lab-button primary" :href="projectBoardUrl" target="_blank" rel="noreferrer">打开 GitHub Projects ↗</a><p v-else class="notice">GitHub Projects 尚未关联，以下为手动维护的任务摘要。</p><div class="kanban"><section v-for="status in columns" :key="status"><h3>{{status}} <span>{{tasks.filter(t=>t.status===status).length}}</span></h3><article v-for="task in tasks.filter(t=>t.status===status)" :key="task.title" class="task"><span class="eyebrow">{{task.project}}</span><h4>{{task.title}}</h4><p>{{task.detail}}</p></article></section></div></div></template>
