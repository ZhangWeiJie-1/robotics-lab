# 学习中心

围绕“感知 → 定位 → 规划 → 控制”组织学习。先读原理，再用小实验验证。

<script setup>
const entries = [{"title": "相机模型", "topic": "视觉 SLAM", "summary": "把像素、归一化平面与相机坐标连接起来。", "url": "/study/slam/camera"}, {"title": "李群与李代数", "topic": "视觉 SLAM", "summary": "理解位姿增量如何转成合法的刚体变换。", "url": "/study/slam/lie"}, {"title": "非线性优化", "topic": "视觉 SLAM", "summary": "把残差最小化写成迭代线性系统。", "url": "/study/slam/optimization"}, {"title": "特征点提取与匹配", "topic": "视觉 SLAM", "summary": "理解检测、描述与匹配各自负责什么。", "url": "/study/slam/features"}, {"title": "对极几何", "topic": "视觉 SLAM", "summary": "从两幅图像中的同一点理解本质矩阵。", "url": "/study/slam/epipolar"}, {"title": "三角测量", "topic": "视觉 SLAM", "summary": "观察基线、视差与深度不确定性的关系。", "url": "/study/slam/triangulation"}, {"title": "PnP 与重投影误差", "topic": "视觉 SLAM", "summary": "用 3D–2D 对应估计相机位姿，理解二维残差。", "url": "/study/slam/pnp"}, {"title": "ICP 与 3D–3D 配准", "topic": "视觉 SLAM", "summary": "理解两帧 RGB-D 配对点为什么属于不同坐标系。", "url": "/study/slam/icp"}, {"title": "光流法", "topic": "视觉 SLAM", "summary": "用亮度与梯度理解像素位移的迭代求解。", "url": "/study/slam/optical-flow"}, {"title": "直接法", "topic": "视觉 SLAM", "summary": "区分跟踪二维像素与优化相机位姿。", "url": "/study/slam/direct"}, {"title": "后端优化", "topic": "视觉 SLAM", "summary": "理解多帧约束如何联合改善轨迹和地图。", "url": "/study/slam/backend"}, {"title": "ROS1 与通信机制", "topic": "ROS 学习", "summary": "Noetic、Topic、Service、Action 与节点通信。", "url": "/study/ros/basics"}, {"title": "TF 与导航系统", "topic": "ROS 学习", "summary": "TF、URDF、Gazebo、RViz、AMCL 与 move_base 的连接。", "url": "/study/ros/tf-navigation"}, {"title": "C++、Eigen 与 OpenCV", "topic": "C++ 与算法", "summary": "C++ 基础、STL、矩阵、图像与 CMake。", "url": "/study/cpp/foundations"}, {"title": "运动学、规划与控制", "topic": "机器人导航", "summary": "里程计、SLAM、路径规划、障碍物检测、PID 与 MPC。", "url": "/study/navigation/foundations"}]
</script>
<EntryGrid :entries="entries" />

## 维护约定
每篇笔记使用八节模板，公式由 MathJax 在构建时渲染，代码由 Shiki 高亮。初始提纲不等于已完成学习；实验结果必须链接原始证据。

新增笔记请复制仓库 `templates/study-note.md`，修改侧栏和本页索引后提交。
