export const projects = [
 {title:'P3-DX 移动机器人',topic:'自主导航',summary:'从差速底盘控制与 Gazebo 仿真，到人员跟随、激光避障与地图导航。',url:'/projects/p3dx'},
 {title:'RealSense D435 + YOLO',topic:'机器人感知',summary:'RGB-D 采集、目标检测、深度测距与相机坐标系下的三维恢复。',url:'/projects/d435-yolo'},
 {title:'中草药智能识别系统',topic:'深度学习',summary:'ConvNeXt 改进模型与 PyQt5 桌面应用，连接分类实验与可用系统。',url:'/projects/herbal'}
]
export const logs = [{title:'从相机模型走向光流跟踪',topic:'视觉 SLAM',date:'2026-10-29',summary:'整理近期讨论的三角测量、PnP、重投影误差与光流问题；下一步做两帧图像验证。',url:'/logs/2026-10-29-slam'}]
export const tasks = [
 {status:'待办',title:'设计 D435 两帧 RGB-D 位姿实验',project:'D435',detail:'保存对齐图像、标定参数与时间戳，比较 PnP 的重投影误差。'},
 {status:'待办',title:'加入 2D 雷达实时避障',project:'P3-DX',detail:'从静态障碍和低速停车开始，记录最小距离与控制延迟。'},
 {status:'进行中',title:'串联第七、八讲几何与跟踪方法',project:'视觉 SLAM',detail:'根据近期学习记录整理；待补自主实验与代码提交。'},
 {status:'已完成（历史记录）',title:'D435 可乐检测与三维测距',project:'D435',detail:'历史运行记录已给出像素与 XYZ 输出；尚缺公开复现材料。'},
 {status:'已完成（历史记录）',title:'P3-DX 实物人员 PID 跟踪',project:'P3-DX',detail:'依据已确认记录；待补视频与实验配置。'}
]
// 创建真实 GitHub Project 后填写；空值时明确显示尚未关联。
export const projectBoardUrl = 'https://github.com/users/ZhangWeiJie-1/projects/2'
