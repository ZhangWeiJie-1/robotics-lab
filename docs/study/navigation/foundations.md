# 运动学、规划与控制
## 1. 学习目标
连接差速运动学、里程计、SLAM、路径规划、障碍物检测与控制器。
## 2. 核心原理
轮编码器估计局部运动，SLAM 构建地图并估计位置，全局规划选择路线，局部规划处理近处障碍，控制器输出速度。PID 根据误差调节；MPC 用预测模型在约束下优化未来控制。
## 3. 公式推导
设左右轮线速度为 $v_l,v_r$，轮距为 $L$：
$$v=(v_r+v_l)/2,\quad\omega=(v_r-v_l)/L$$
$$\dot x=v\cos\theta,\quad\dot y=v\sin\theta,\quad\dot\theta=\omega$$
## 4. 图解说明
<div class="diagram"><span>传感器与里程计</span> → <span>定位 / 地图</span> → <span>规划</span> → <span>速度控制</span></div>

## 5. C++ / Python 代码
```python
def differential_drive(v_left, v_right, track_width):
    if track_width <= 0:
        raise ValueError('轮距必须为正')
    return (v_left + v_right) / 2, (v_right - v_left) / track_width
```
## 6. 实验验证
左右同速应直行；反向同速应原地转动。实际测试先使用低速和紧急停止，记录时间戳、速度与轨迹。
## 7. 常见问题
轮距或轮半径错误导致里程计漂移；只做跟随 PID 却没有障碍物速度仲裁；控制频率与传感器延迟未记录。
## 8. 我的理解
待补充：为什么“看到目标”和“能够安全到达目标”是不同的问题？
