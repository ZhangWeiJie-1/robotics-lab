---
title: 非线性优化
status: 初始学习提纲
---
# 非线性优化

> 初始学习笔记：核心说明与代码片段用于建立理解，未在本站环境验证机器人实验；“我的理解”和实验记录由本人继续补充。

## 1. 学习目标
把残差最小化写成迭代线性系统。

## 2. 核心原理
Gauss–Newton 对残差做一阶近似。正规方程中的负号取决于残差定义与更新约定，需要保持一致。

## 3. 公式推导
从本节的观测模型出发，先明确坐标系与变量，再使用下面的核心关系：

$$
\min_x\frac12\sum_i\|r_i(x)\|^2,\quad J^TJ\Delta x=-J^Tr
$$

推导练习：标出已知量、未知量和矩阵维度；选择一个简单数值例子检查单位与方向。完整手写推导待补充。

## 4. 图解说明
<div class="diagram" role="img" aria-label="初值 → 计算残差与雅可比 → 解增量 → 更新 → 检查代价"><span>初值 → 计算残差与雅可比 → 解增量 → 更新 → 检查代价</span></div>


## 5. C++ / Python 代码
```cpp
Eigen::MatrixXd H = J.transpose() * J;
Eigen::VectorXd b = -J.transpose() * residual;
Eigen::VectorXd dx = H.ldlt().solve(b);
```
代码为最小片段，依赖相应的 Eigen / OpenCV / Sophus 上下文；完整可编译工程待补充。

## 6. 实验验证
建议实验：使用简单曲线拟合，逐轮记录代价；比较解析雅可比与有限差分。

实际结果：**待执行与记录**。请保存输入、版本、命令和原始输出。

## 7. 常见问题
矩阵病态、初值太差；不检查增量或代价是否有限。

## 8. 我的理解
待本人填写：用自己的话解释输入、输出、成立条件，以及它与前后章节的联系。

## 延伸学习
[学习中心](/study/) · [OpenCV 官方文档](https://docs.opencv.org/4.x/) · [视觉 SLAM 十四讲配套代码](https://github.com/gaoxiang12/slambook2)
