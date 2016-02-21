# 生命周期图片
![](https://github.com/XiaoPingJiang/sw_study_react_native_lifecycle/blob/master/clipboard.png)

# SimpleLifeCycle 案例生命周期
程序启动时:
- constructor()
- componentWillMount()
- fetchData()
- render()
- componentDidMount()
  
当点击TestStateLifecycle按钮时 (本质是state更新的生命周期) :
- TestStateLifecycle()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

# FullLifeCycl 案例生命周期
程序启动时：
- constructor()
- componentWillMount()
- fetchData()
- render()
- 此处进入子组建的生命周期
- constructor()
- componentWillMount()
- render()
- componentDidMount()
- 结束子组建的生命周期，回到父组件
- componentDidMount()

当点击TestStateLifecycle按钮时 :
- FullLifeCycle TestStateLifecycle()
- FullLifeCycle shouldComponentUpdate()
- FullLifeCycle componentWillUpdate()
- FullLifeCycle render()
-   此处进入 ListView Props 生命周期
-   MyListView componentWillReceiveProps()
-   MyListView shouldComponentUpdate()
-   MyListView componentWillUpdate()
-   MyListView render()
-   MyListView componentDidUpdate()
-   此处结束 ListView Props 生命周期
- FullLifeCycle componentDidUpdate()