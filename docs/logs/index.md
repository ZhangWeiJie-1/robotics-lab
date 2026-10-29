---
title: 研究日志
---
<script setup>
import { logs } from '../.vitepress/theme/data'
</script>
# 研究日志
记录问题、假设、实验与下一步。按日期倒序维护，支持主题与关键词筛选。
<EntryGrid :entries="logs" />

## 写一篇日志
复制仓库的 `templates/daily-log.md`、`weekly-report.md` 或 `experiment.md` 到 `docs/logs/`，填写日期和证据。再更新 `docs/.vitepress/theme/data.ts` 的 `logs` 数组，首页和本页会共用同一份索引。

日志类型：每日学习 / 每周总结 / 实验记录 / 组会周报。当前只有一篇根据已知讨论整理的初始记录，不补写虚构的实验历史。
