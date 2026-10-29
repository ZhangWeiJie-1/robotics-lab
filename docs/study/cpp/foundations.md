# C++、Eigen 与 OpenCV
## 1. 学习目标
读懂机器人代码中的容器、引用、矩阵、图像与构建过程。
## 2. 核心原理
STL 管理集合，Eigen 处理线性代数，OpenCV 处理图像与视觉算法，CMake 描述编译依赖。先写小函数验证输入输出，再整合进 ROS 节点。
## 3. 公式推导
三维刚体变换：$p'=Rp+t$；R 为 3×3，p、t 为 3×1，因此输出也是 3×1。
## 4. 图解说明
<div class="diagram"><span>数据结构</span> → <span>算法函数</span> → <span>CMake 编译</span> → <span>运行验证</span></div>

## 5. C++ / Python 代码
```cpp
#include <Eigen/Core>
#include <iostream>
int main() {
  Eigen::Vector3d p(1, 2, 3), t(0.1, 0, 0);
  Eigen::Matrix3d R = Eigen::Matrix3d::Identity();
  std::cout << (R * p + t).transpose() << '\n';
}
```
## 6. 实验验证
输出应为 1.1、2、3；然后尝试绕 Z 轴旋转。完整构建命令与本机输出待记录。
## 7. 常见问题
引用与拷贝混淆；Eigen 维度不匹配；cv::Mat 类型与 `at<T>` 不一致；头文件存在却没有链接库。
## 8. 我的理解
待补充：用自己的话说明编译和链接分别完成什么。
