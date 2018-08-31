/**
 * 公共导航模块
 */
import { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { withRouter } from 'next/router'
import style from './index.less'



class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_li: 'film'
        }
    }

    handleClick(item_key) {
        let that = this;
        if (item_key === that.state.active_li) {
            return
        }
        that.setState({ active_li: item_key })
    }


    /* 优化渲染 */
    shouldComponentUpdate(nextProps, nextState) {
        if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
            /*console.log('渲染')*/
            return true
        } else {
            /*console.log('不渲染')*/
            return false
        }
    }

    render() {
        return (
            <div className={style.movies_nav}>
				<div className={style.container}>
					{
						this.props.navigation_message.map((item,index)=>(
							<Link href={{ pathname: '/', query: { item_key:item.key}}} key={item.key}>
								<div className={item.key === this.props.router.query.item_key ? style.active_li : ''} onClick={this.handleClick.bind(this,item.key)}>{item.btn_text}</div>
							</Link>
						))
					}
				</div>
			</div>
        )
    }
}


const mapStateToProps = (state) => {
    const { navigation_message } = state
    return {
        navigation_message      /* 导航数据 */
    }
}

export default withRouter(connect(mapStateToProps)(Nav))