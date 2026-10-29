# 开发工具箱
先观察现象，再确认数据流、坐标系、时间与环境。使用页面筛选或顶部全文搜索查找命令。
<script setup>
const entries = [
{title:'Ubuntu 与 Git',topic:'系统与版本管理',summary:'进程、磁盘、日志、分支、提交与发布。',url:'/toolbox/ubuntu-git'},
{title:'ROS、Gazebo、RViz 与 TF 排错',topic:'ROS',summary:'节点和话题检查、仿真时间、坐标链与显示故障。',url:'/toolbox/ros-debug'},
{title:'D435、CMake 与 C++ 编译',topic:'设备与构建',summary:'相机无图像、Python 环境、头文件与链接错误。',url:'/toolbox/d435-build'}]
</script>
<EntryGrid :entries="entries" />
