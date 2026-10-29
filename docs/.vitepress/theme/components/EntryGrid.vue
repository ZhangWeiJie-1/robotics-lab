<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { filterEntries } from '../lib/content.mjs'
interface Entry { title: string; summary: string; topic: string; url: string; date?: string }
const props = defineProps<{ entries: Entry[] }>()
const query = ref(''), topic = ref('全部')
const topics = computed(()=>['全部',...new Set(props.entries.map(e=>e.topic))])
const visible = computed(()=>filterEntries(props.entries,query.value,topic.value))
</script>
<template><section class="entry-browser">
<label class="filter-search">筛选内容<input v-model="query" type="search" placeholder="输入主题、关键词…" /></label>
<div class="filter-tabs" aria-label="主题分类"><button v-for="item in topics" :key="item" :aria-pressed="topic===item" @click="topic=item">{{item}}</button></div>
<p class="result-count" role="status">{{visible.length}} 条内容</p>
<div class="entry-grid"><a class="entry-card" v-for="entry in visible" :key="entry.url" :href="withBase(entry.url)"><span class="eyebrow">{{entry.topic}} <span v-if="entry.date"> / {{entry.date}}</span></span><h3>{{entry.title}} <span aria-hidden="true">↗</span></h3><p>{{entry.summary}}</p></a></div>
<p v-if="!visible.length" class="empty-state">暂未找到相关内容，请换一个关键词。</p>
</section></template>
