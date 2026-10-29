# ROS1 与通信机制

## 1. 学习目标
掌握节点通信的选择，能用命令证明消息是否真实流动。
## 2. 核心原理
Topic 面向持续数据流；Service 面向请求与响应；Action 支持耗时任务、反馈与取消。Noetic 工程通常通过 catkin 管理。
## 3. 公式推导
频率估算：$f=N/\Delta t$。消息数量和时间窗口都必须从实际观测获得。
## 4. 图解说明
<div class="diagram"><span>传感器节点</span> → <span>Topic</span> → <span>感知 / 控制节点</span></div>

## 5. C++ / Python 代码
```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
rospy.init_node('lab_listener')
rospy.Subscriber('/lab_note', String, lambda msg: rospy.loginfo(msg.data))
rospy.spin()
```
## 6. 实验验证
启动 roscore 与监听节点，再发布 `/lab_note`。用 `rostopic info /lab_note` 检查发布者与订阅者。待本人记录输出。
## 7. 常见问题
没有 source 工作空间；节点名冲突；消息类型与话题不一致。
## 8. 我的理解
待补充：分别写出适合 Topic、Service、Action 的机器人场景。
