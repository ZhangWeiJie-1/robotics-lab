# ROS、Gazebo、RViz 与 TF 排错
## ROS 数据流
```bash
rosnode list
rostopic list
rostopic info /scan
rostopic hz /scan
rostopic echo -n 1 /scan/header
```
有话题名称不代表持续有数据。先确认发布者，再检查频率、时间戳与 frame_id。
## TF 排错
```bash
rosrun tf tf_echo odom base_link
rosrun tf tf_echo base_link laser
rosparam get /use_sim_time
rostopic hz /clock
```
遇到 extrapolation 时，核对消息时间、变换时间、仿真时间与主机时钟。不要通过随意增加静态 TF 隐藏错误发布者。
## Gazebo 调试
模型缺失：核对模型资源路径与插件安装；控制器失败：检查 YAML、关节名与 transmission；底盘不稳：检查惯性、碰撞体和万向轮。
```bash
rosservice list
rostopic info /joint_states
rostopic info /cmd_vel
```
## RViz 调试
先看 Global Status 与各显示项的错误。检查 Fixed Frame、话题、TF 和数据是否匹配；图像没有画面时先确认图像话题实际有帧。

若界面正常但机器人不动，沿着“控制命令发布者 → cmd_vel → 底盘驱动 → 里程计”逐段检查。
