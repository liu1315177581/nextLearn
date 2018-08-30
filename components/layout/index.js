/**
 * 模板
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '@/components/header' /* 头部组件 */
import Nav from '@/components/nav' /* 导航组件 */
import '@/assets/css/common.less'
import 'lodash' /* 调用深比较方法 */
class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation_message: [{
                btn_text: '电影',
                key: 'film'
            }, {
                btn_text: '电视剧',
                key: 'tv_play'
            }, {
                btn_text: '综艺',
                key: 'variety'
            }, {
                btn_text: '体育',
                key: 'sports'
            }, {
                btn_text: '动漫',
                key: 'cartoon'
            }, {
                btn_text: '搞笑短视频',
                key: 'short_video'
            }]
        }
    }

    render() {
        return (
            <div>
				<Header/>
                <Nav navigation_message={this.state.navigation_message}/>
				{this.props.children}

                {/* 遮罩loading 开始 */}
                <div  
                    style={{
                        display:this.props.mark_onoff ? 'block' : 'none',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        background: 'rgba(255,255,255,.6)'
                    }}
                >
                    <img 
                        src="https://loading.io/spinners/blocks/lg.rotating-squares-preloader-gif.gif" 
                        style={{
                            position: 'relative',
                            display: 'block',
                            margin: '0 auto',
                            top: '40%',
                            width: '120px',
                            height: '120px'
                        }}
                    >
                    </img>
                </div>
                {/* 遮罩laoding 结束 */}
			</div>
        )
    }
}

const mapStateToProps = (state) => {
    const { mark_onoff } = state
    return {
        mark_onoff /* 控制loading的开关 */
    }
}

export default connect(mapStateToProps)(Layout)