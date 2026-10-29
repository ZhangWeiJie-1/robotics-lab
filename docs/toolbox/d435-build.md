# D435、CMake 与 C++ 编译
## RealSense D435 排错
```bash
lsusb
realsense-viewer
python3 -c "import sys; print(sys.executable)"
python3 -m pip show pyrealsense2 opencv-python
```
先确认 USB 与设备图像，再检查 Python/ROS。D435 彩色、深度要用实际启用的分辨率与帧率；对齐后使用对应的内参。

如果 ROS 图像话题没有新消息：
```bash
rostopic info /camera/color/image_raw
rostopic hz /camera/color/image_raw
```
相机名和话题可能因 launch 配置不同而改变，先 `rostopic list` 核对。
## CMake 与 C++ 编译
```bash
cmake -S . -B build
cmake --build build -j2
```
| 错误 | 优先检查 |
| --- | --- |
| fatal error: header not found | 开发包、include 路径、find_package |
| undefined reference | 是否 target_link_libraries、库版本与符号 |
| Eigen 维度断言 | 编译期与运行期矩阵形状 |
| protobuf 版本冲突 | protoc 和链接库是否来自同一环境 |

最小 OpenCV 构建示例：
```cmake
cmake_minimum_required(VERSION 3.16)
project(camera_demo LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 17)
find_package(OpenCV REQUIRED)
add_executable(camera_demo main.cpp)
target_include_directories(camera_demo PRIVATE ${OpenCV_INCLUDE_DIRS})
target_link_libraries(camera_demo PRIVATE ${OpenCV_LIBS})
```
这里的示例用于诊断，不代表已经适配所有机器环境。
