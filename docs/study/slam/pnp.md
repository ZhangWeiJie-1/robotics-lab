---
title: PnP 与重投影误差
status: 初始学习提纲
---
# PnP 与重投影误差

> 初始学习笔记：核心说明与代码片段用于建立理解，未在本站环境验证机器人实验；“我的理解”和实验记录由本人继续补充。

## 1. 学习目标
用 3D–2D 对应估计相机位姿，理解二维残差。

## 2. 核心原理
三维点必须明确所在坐标系。OpenCV solvePnP 返回从物体/参考坐标到当前相机坐标的变换；齐次像素第三维为 1，比较非齐次像素得到二维残差。

## 3. 公式推导
从本节的观测模型出发，先明确坐标系与变量，再使用下面的核心关系：

$$
e_i=p_i-\pi(K(RP_i+t)),\quad \min_{R,t}\sum_i\|e_i\|^2
$$

推导练习：标出已知量、未知量和矩阵维度；选择一个简单数值例子检查单位与方向。完整手写推导待补充。

## 4. 图解说明
<div class="diagram" role="img" aria-label="三维点 P → 当前位姿 → 预测像素 → 与观测像素比较 → 优化位姿"><span>三维点 P → 当前位姿 → 预测像素 → 与观测像素比较 → 优化位姿</span></div>


## 5. C++ / Python 代码
```cpp
cv::Mat rvec, tvec;
cv::solvePnP(points3d, pixels2d, K, distortion, rvec, tvec);
std::vector<cv::Point2f> predicted;
cv::projectPoints(points3d, rvec, tvec, K, distortion, predicted);
```
代码为最小片段，依赖相应的 Eigen / OpenCV / Sophus 上下文；完整可编译工程待补充。

## 6. 实验验证
建议实验：对合成三维点设置已知位姿并投影，再估计位姿；记录旋转误差、平移误差与像素 RMSE。

实际结果：**待执行与记录**。请保存输入、版本、命令和原始输出。

## 7. 常见问题
3D 与 2D 对应顺序不一致；把 T21 当成 T12；混用去畸变点和原始畸变参数。

## 8. 我的理解
待本人填写：用自己的话解释输入、输出、成立条件，以及它与前后章节的联系。

## 延伸学习
[学习中心](/study/) · [OpenCV 官方文档](https://docs.opencv.org/4.x/) · [视觉 SLAM 十四讲配套代码](https://github.com/gaoxiang12/slambook2)
