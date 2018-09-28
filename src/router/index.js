import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'

// Window
import WinSetPsd from '@/page/Window/SetPsd'
import WinFirstInfo from '@/page/Window/FirstInfo'
import WinInfos from '@/page/Window/Infos'

// Customer 客户库
import CustomerIndex from '@/page/Customer/Index'
import CustomerAdd from '@/page/Customer/Add'
import CustomerRecycle from '@/page/Customer/Recycle'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        // window
        winSetPsd: WinSetPsd,
        winFirstInfo: WinFirstInfo,
        winInfos: WinInfos,
        // page
        index: Index,
        customerIndex: CustomerIndex,
        customerAdd: CustomerAdd,
        customerRecycle: CustomerRecycle,
      }
    }
  ]
})
