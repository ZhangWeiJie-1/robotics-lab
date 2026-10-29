# Ubuntu 与 Git
## Ubuntu 常用命令
```bash
pwd                         # 当前目录
ls -lh                      # 文件大小
ps -ef                      # 进程
df -h                       # 磁盘剩余
free -h                     # 内存
journalctl -n 100 --no-pager  # 最近系统日志
```
先缩小问题范围，保留有用日志；不把删除系统目录作为排错步骤。
## Git 日常更新
```bash
git status
git switch -c notes/new-topic
git add docs/study/
git commit -m "docs: add a study note"
git push -u origin notes/new-topic
```
在 GitHub 创建 PR，合并到 main 后触发网站部署。也可在自己的新仓库直接向 main 提交。
## Git 排错
- push 被拒绝：先 `git fetch origin` 和 `git status`，理解分支差异，不直接 force push。
- 意外提交：先查看 `git log --oneline -5`，已共享提交优先使用 `git revert` 生成逆向提交。
- 本地文件变化：先用 `git diff` 检查，再决定保存或恢复。
