# TF 与导航系统
## 1. 学习目标
理解地图定位、里程计、机器人本体和传感器之间的坐标链。
## 2. 核心原理
常见导航链：`map → odom → base_footprint → base_link → laser`。里程计负责连续局部运动，定位系统修正地图中的长期漂移。每个变换应有明确的发布者。

URDF 描述连杆和关节；Gazebo 提供仿真物理与传感器；RViz 显示数据；AMCL 利用已知地图与激光定位；move_base 连接全局路径与局部运动规划。
## 3. 公式推导
$$T_{map,laser}=T_{map,odom}T_{odom,base}T_{base,laser}$$
按从右到左的顺序将激光坐标转换到地图坐标。
## 4. 图解说明
<div class="diagram"><span>map</span> → <span>odom</span> → <span>base_link</span> → <span>laser</span></div>

## 5. C++ / Python 代码
```bash
rosrun tf tf_echo odom base_link
rostopic echo /use_sim_time
rostopic hz /scan
```
## 6. 实验验证
先验证 TF 连通，再检查地图、扫描、里程计与速度命令。仿真中检查 `/clock`；实物中确认时间源一致。实际导航结果待补充。
## 7. 常见问题
TF extrapolation、传感器 frame_id 不匹配、同一变换被多个节点发布；把 move_base 当作不需传感器与配置的单一控制器。
## 8. 我的理解
待补充：是谁发布 map→odom？为什么不直接把 map 和 base_link 固定连接？
