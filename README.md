# Robotics Lab

个人机器人学习、项目与研究日志网站。VitePress 1.6.4 + Vue 3 + TypeScript，无数据库或应用后端。

- 网站：https://zhangweijie-1.github.io/robotics-lab/
- 仓库：https://github.com/ZhangWeiJie-1/robotics-lab
- 任务看板：https://github.com/users/ZhangWeiJie-1/projects/2 （需要有权限的 GitHub 账号）

## 本地开发

建议 Node.js 22。首次拉取：

```bash
git clone https://github.com/ZhangWeiJie-1/robotics-lab.git
cd robotics-lab
npm ci
npm run docs:dev
```

生产检查：

```bash
npm test
npm run typecheck
npm run docs:build
npm run check:site
npm run docs:preview
```

`npm test` 验证仓库 base 和中文关键词/主题筛选。`check:site` 验证七个入口、三个项目详情、构建后的数学/代码高亮和站内链接/资源。浏览器交互验证记录见 `engineering/verification.md`。

## 目录职责

| 目录 | 内容 |
| --- | --- |
| `docs/` | 所有公开网站内容 |
| `docs/.vitepress/config.ts` | 七个导航入口、侧栏、搜索、base、数学配置 |
| `docs/.vitepress/theme/` | Vue 组件、统一样式与共享项目/日志/任务数据 |
| `docs/study/` | 四类知识域、11 个 SLAM 主题与 ROS/C++/导航提纲 |
| `docs/projects/` | 三个项目详情 |
| `docs/dashboard/` | 手动任务摘要与 Projects 入口 |
| `docs/logs/` | 日期与主题日志 |
| `docs/toolbox/` | 机器人开发与排错命令 |
| `docs/about/` | 适合公开的简要介绍 |
| `docs/public/` | 静态图片、视频等资源 |
| `templates/` | 笔记、每日记录、周报、实验、项目模板 |
| `scripts/`、`tests/` | 构建产物检查与功能测试 |
| `.github/workflows/deploy.yml` | main 推送后检查、构建与 Pages 发布 |
| `engineering/` | 实施与验收记录，不作为网站页面发布 |

## 添加学习笔记

1. 复制 `templates/study-note.md` 到如 `docs/study/slam/new-topic.md`。
2. 填写八节内容。用 `$...$` / `$$...$$` 写数学，代码块注明语言。
3. 在 `docs/.vitepress/config.ts` 的 sidebar 和 `docs/study/index.md` 的条目数组添加入口。
4. 图片放入 `docs/public/notes/`，Markdown 使用 `![说明](/notes/example.png)`；不要把文件系统路径写成网址。
5. 运行构建和链接检查后提交。新 Markdown 正文会被本地全文搜索索引。

## 添加学习日志和周报

复制 `templates/daily-log.md`、`weekly-report.md` 或 `experiment.md` 到 `docs/logs/YYYY-MM-DD-topic.md`。填写 `date`、`topic`、`type`，在 `docs/.vitepress/theme/data.ts` 的 `logs` 中添加索引，按日期倒序；本页和首页共享索引。需要侧栏入口时同步编辑 config。

## 发布项目成果

复制 `templates/project.md` 到 `docs/projects/`，填写背景、技术栈、架构、过程、结果、问题与后续计划。在 `data.ts` 的 `projects` 数组和 config 侧栏加入入口。图片放到 `docs/public/projects/<slug>/`；确保每个指标有数据划分、评价方式与原始证据。

现有三个项目的图片、视频和公开源码仍待补充。首页 SVG 均为概念图，不是实验截图。历史数值没有在本站开发过程中重新测量。

## 更新网站

```bash
git pull --ff-only
# 编辑 Markdown / 图片 / 索引
npm run docs:build
npm run check:site
git add docs templates
git commit -m "docs: update research notes"
git push origin main
```

也可在 GitHub 网页编辑 Markdown 后提交。Actions 自动执行安装、测试、类型检查、构建、链接检查与部署；在仓库 Actions 页查看绿色完成状态后访问网站。分支工作可通过 PR 合并到 main。

## 任务管理

实际任务在 GitHub Projects 中维护，关联本仓库 Issues。本页手动摘要位于 `data.ts` 的 `tasks`，更新看板不会自动修改静态摘要。没有 localStorage 勾选状态，没有自动计算或虚构完成百分比。历史已完成事项依据已有确认记录，并保留待补证据提示。

## 部署配置

仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。官方工作流在 `.github/workflows/deploy.yml`，仅对 main 自动发布。每次使用锁文件 `npm ci`。无需添加个人访问令牌。

项目仓库 base 为 `/robotics-lab/`；如果迁移到 `用户名.github.io`，CI 根据 `GITHUB_REPOSITORY` 自动使用 `/`；本地非 CI 默认 robotics-lab。迁移时同时更新导航中的仓库编辑链接、README 网址和检查脚本的 base。

## 内容与隐私

只公开经选择的学习与项目内容；不要提交密钥、私人联系方式、未公开原始数据或研究资料。初始笔记是可扩展的学习提纲，实验区尚待本人运行填写；“我的理解”没有代写成已确认结论。

## 官方参考

- https://vitepress.dev/guide/markdown
- https://vitepress.dev/guide/deploy
- https://docs.github.com/en/pages

后续可增加自动日志索引、图片画廊、论文阅读与实验数据可视化；当前不提供在线编辑后台或看板自动同步。
