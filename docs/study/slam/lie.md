---
title: 李群与李代数
status: 初始学习提纲
---
# 李群与李代数

> 初始学习笔记：核心说明与代码片段用于建立理解，未在本站环境验证机器人实验；“我的理解”和实验记录由本人继续补充。

## 1. 学习目标
理解位姿增量如何转成合法的刚体变换。

## 2. 核心原理
旋转矩阵不能直接当普通向量任意相加。局部增量在李代数中表示，再映射回群。

## 3. 公式推导
从本节的观测模型出发，先明确坐标系与变量，再使用下面的核心关系：

$$
T=\begin{bmatrix}R&t\\0&1\end{bmatrix},\quad T\leftarrow\exp(\delta\xi^\wedge)T
$$

推导练习：标出已知量、未知量和矩阵维度；选择一个简单数值例子检查单位与方向。完整手写推导待补充。

## 4. 图解说明
<div class="diagram" role="img" aria-label="位姿 T → 六维增量 → 指数映射 → 更新位姿"><span>位姿 T → 六维增量 → 指数映射 → 更新位姿</span></div>


## 5. C++ / Python 代码
```cpp
// 示意：需要 Sophus 与 Eigen
Eigen::Matrix<double,6,1> delta;
delta.setZero();
Sophus::SE3d updated = Sophus::SE3d::exp(delta) * pose;
```
代码为最小片段，依赖相应的 Eigen / OpenCV / Sophus 上下文；完整可编译工程待补充。

## 6. 实验验证
建议实验：验证零增量不改变位姿；检查 R.transpose()*R 接近单位阵，det(R) 接近 1。

实际结果：**待执行与记录**。请保存输入、版本、命令和原始输出。

## 7. 常见问题
左乘与右乘增量混用；平移和旋转分量顺序未核对。

## 8. 我的理解
待本人填写：用自己的话解释输入、输出、成立条件，以及它与前后章节的联系。

## 延伸学习
[学习中心](/study/) · [OpenCV 官方文档](https://docs.opencv.org/4.x/) · [视觉 SLAM 十四讲配套代码](https://github.com/gaoxiang12/slambook2)
