---
title: 光流法
status: 初始学习提纲
---
# 光流法

> 初始学习笔记：核心说明与代码片段用于建立理解，未在本站环境验证机器人实验；“我的理解”和实验记录由本人继续补充。

## 1. 学习目标
用亮度与梯度理解像素位移的迭代求解。

## 2. 核心原理
亮度不变、小运动和邻域运动相近是局部光流的常见假设。一个像素只有一条约束，因此通常在窗口中联合求解。金字塔先粗后细以处理较大位移。

## 3. 公式推导
从本节的观测模型出发，先明确坐标系与变量，再使用下面的核心关系：

$$
I_1(u,v)\approx I_2(u+\Delta u,v+\Delta v),\quad I_x\Delta u+I_y\Delta v+I_t\approx0
$$

推导练习：标出已知量、未知量和矩阵维度；选择一个简单数值例子检查单位与方向。完整手写推导待补充。

## 4. 图解说明
<div class="diagram" role="img" aria-label="上一帧小图块 → 下一帧局部搜索 → 亮度误差 → 梯度引导更新"><span>上一帧小图块 → 下一帧局部搜索 → 亮度误差 → 梯度引导更新</span></div>


## 5. C++ / Python 代码
```cpp
std::vector<cv::Point2f> next;
std::vector<uchar> status;
std::vector<float> error;
cv::calcOpticalFlowPyrLK(prevGray, nextGray, points, next, status, error);
```
代码为最小片段，依赖相应的 Eigen / OpenCV / Sophus 上下文；完整可编译工程待补充。

## 6. 实验验证
建议实验：先对图像平移 3px，再平移 30px；比较是否使用金字塔，过滤 status=0 的点并保存跟踪图。

实际结果：**待执行与记录**。请保存输入、版本、命令和原始输出。

## 7. 常见问题
把光流当作三维位姿；弱纹理区域梯度不足；曝光变化或遮挡破坏假设。

## 8. 我的理解
待本人填写：用自己的话解释输入、输出、成立条件，以及它与前后章节的联系。

## 延伸学习
[学习中心](/study/) · [OpenCV 官方文档](https://docs.opencv.org/4.x/) · [视觉 SLAM 十四讲配套代码](https://github.com/gaoxiang12/slambook2)
