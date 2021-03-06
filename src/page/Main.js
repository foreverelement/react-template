import React from 'react'
import {Grid, Toast} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
// import {dataCollection} from 'api/service'
import Empty from 'components/Empty'

class Tplist extends React.Component{

  state = {
    pagination: {
      current: 1,
      pageSize: 50,
      total: 0
    },
    data: []
  }
  fetchList(){
    Toast.loading('加载中...', 10)
    // dataCollection.fetchList({
    //   page: this.state.pagination.current,
    //   per_page: this.state.pagination.pageSize,
    // }).then(({data})=> {
    //   this.setState({
    //     pagination: {
    //       current: data.pageNum,
    //       pageSize: data.pageSize,
    //       total: data.total
    //     },
    //     data: data.result || []
    //   })
    // }).finally(()=> {
    //   Toast.hide()
    // })
    setTimeout(()=> {
      this.setState({
        // pagination: {
        //   current: data.pageNum,
        //   pageSize: data.pageSize,
        //   total: data.total
        // },
        data: [
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
          {id: Math.random(), name: '测试模板'},
        ]
      })
      Toast.hide()
    }, 1000)
  }
  goDetail (obj) {
    this.props.history.push(`/detail/${obj.id}`)
  }
  render(){
    return (
      <div className="template_list">
        {this.state.data.length>0?<Grid data={this.state.data} onClick={(_el)=>this.goDetail(_el)} columnNum={3} renderItem={_el=> (
          <div>
            {_el.icon?
              <div className="badge_img" style={{backgroundImage: `url(${_el.icon})`}} />:
              <div className="badge">{_el.name.slice(0,2)}</div>
            }
            <div className="tp_title">
              <span>{_el.name}</span>
            </div>
          </div>
        )} />:
        <Empty />}
      </div>
    )
  }
  componentDidMount(){
    document.title = '信息上报'
    this.fetchList()
  }
}
export default withRouter(Tplist)
