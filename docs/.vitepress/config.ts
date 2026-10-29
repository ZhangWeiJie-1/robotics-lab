import { defineConfig } from 'vitepress'
import { resolveBase } from './theme/lib/content.mjs'
import { tokenizeSearch } from './theme/lib/search.mjs'
const SLAM = [['相机模型','camera'],['李群与李代数','lie'],['非线性优化','optimization'],['特征点与匹配','features'],['对极几何','epipolar'],['三角测量','triangulation'],['PnP','pnp'],['ICP','icp'],['光流法','optical-flow'],['直接法','direct'],['后端优化','backend']]
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'robotics-lab'
export default defineConfig({
 title: 'Robotics Lab', description: '从原理到实物 · 自主导航与视觉 SLAM 学习实验室', lang: 'zh-CN',
 vite: { server: { allowedHosts: ['terminal.local'] } },
 base: resolveBase(repository), cleanUrls: true, lastUpdated: true,
 head: [['link',{rel:'icon',href:resolveBase(repository)+'favicon.svg'}]],
 markdown: { math: true },
 themeConfig: {
 logo: '/favicon.svg', siteTitle: 'Robotics Lab',
 nav: [ {text:'首页',link:'/'},{text:'学习中心',link:'/study/'},{text:'项目中心',link:'/projects/'},{text:'任务看板',link:'/dashboard/'},{text:'研究日志',link:'/logs/'},{text:'工具箱',link:'/toolbox/'},{text:'关于我',link:'/about/'} ],
 search: {provider:'local',options:{miniSearch:{options:{tokenize:tokenizeSearch},searchOptions:{combineWith:'AND',fuzzy:false,prefix:true}},locales:{root:{translations:{button:{buttonText:'搜索知识库',buttonAriaLabel:'搜索知识库'},modal:{noResultsText:'没有找到相关内容',resetButtonTitle:'清除搜索',displayDetails:'显示详情',backButtonTitle:'返回',footer:{selectText:'选择',navigateText:'切换',closeText:'关闭'}}}}}}},
 sidebar: {
 '/study/': [{text:'学习中心',link:'/study/'},{text:'视觉 SLAM 十四讲',collapsed:false,items:SLAM.map(([text,path])=>({text,link:'/study/slam/'+path}))},{text:'ROS 学习',items:[{text:'ROS1 与通信机制',link:'/study/ros/basics'},{text:'TF 与导航系统',link:'/study/ros/tf-navigation'}]},{text:'C++ 与算法',items:[{text:'C++、Eigen 与 OpenCV',link:'/study/cpp/foundations'}]},{text:'机器人导航',items:[{text:'运动学、规划与控制',link:'/study/navigation/foundations'}]}],
 '/projects/':[{text:'项目中心',link:'/projects/'},{text:'P3-DX 移动机器人',link:'/projects/p3dx'},{text:'D435 + YOLO',link:'/projects/d435-yolo'},{text:'中草药智能识别',link:'/projects/herbal'}],
 '/toolbox/':[{text:'开发工具箱',link:'/toolbox/'},{text:'Ubuntu 与 Git',link:'/toolbox/ubuntu-git'},{text:'ROS / TF / 仿真排错',link:'/toolbox/ros-debug'},{text:'D435 与 C++ 编译',link:'/toolbox/d435-build'}],
 '/logs/':[{text:'研究日志',link:'/logs/'},{text:'2026-10-29 · 学习主题整理',link:'/logs/2026-10-29-slam'}],
 '/dashboard/':[{text:'任务看板',link:'/dashboard/'}], '/about/':[{text:'关于我',link:'/about/'}]
 },
 socialLinks:[{icon:'github',link:'https://github.com/ZhangWeiJie-1'}],
 editLink:{pattern:'https://github.com/ZhangWeiJie-1/robotics-lab/edit/main/docs/:path',text:'在 GitHub 编辑本页'},
 outline:{label:'本页目录',level:[2,3]},lastUpdated:{text:'内容更新于'},docFooter:{prev:'上一篇',next:'下一篇'},
 footer:{message:'从原理到代码，从仿真到实物。',copyright:'Robotics Lab · 持续学习与实验'}
 }
})
