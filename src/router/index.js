import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Login from '@/page/Login'
import Home from '@/page/Home'

// Window
import WinSetPsd from '@/page/Window/SetPsd'                        // 修改密码
import WinFirstInfo from '@/page/Window/FirstInfo'                  // 前台消息
import WinInfos from '@/page/Window/Infos'                          // 信息对比

// Customer 客户库
import CustomerIndex from '@/page/Customer/Index'                   // 客户列表
import CustomerAdd from '@/page/Customer/Add'                       // 添加客户
import CustomerRecycle from '@/page/Customer/Recycle'               // 客户恢复
import CustomerPolicy from '@/page/Customer/Policy'                 // 优惠政策


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/',
          components:{
            // window
            winSetPsd: WinSetPsd,
            winFirstInfo: WinFirstInfo,
            winInfos: WinInfos,
            // page
            home: Home,
            customerIndex: CustomerIndex,
            customerAdd: CustomerAdd,
            customerRecycle: CustomerRecycle,
            customerPolicy: CustomerPolicy,
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    }
  ]
})
