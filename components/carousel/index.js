/**
 * banner 组件
 */
import { Component } from 'react'
import style from './index.less'


export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /* 轮播标识 */
            banner_pointer: 0,
            /* 定时器 */
            timer: null,
            /* 轮播间隔时间 */
            time: 3000
        }
    }

    componentDidMount() {}

    /* 点击切换函数 */
    switchSlideFun(index, e) {
        e.stopPropagation();
        this.setState({ banner_pointer: index });
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
            <div className={style.container}>
				<div className={style.left}>
					<section className={style.banner_con}>
						{
	                        this.props.banner_message.map((item,index)=>{
	                            return (
	                                <div key={index} style={this.state.banner_pointer === index ? {transition: 'all 1s ease-in',opacity: 1}: {opacity: 0}} className={style.banner_item_img}>
	                                    <a href={item.url_link}>
	                                        <img className={style.images} src={item.img} alt=""/>
	                                    </a>
	                                    <div className={style.popUp_banner_home}>
	                                        <h3>
	                                            {item.title}
	                                        </h3>
	                                        <p>
	                                            {item.text}
	                                        </p> 
	                                    </div>
	                                </div>
	                            )
	                        })
	                    }
                    </section>
				</div>
				<div className={style.right}>
                    {
                        this.props.banner_message.map((item,index)=>{
                            return (
                                <li onClick={this.switchSlideFun.bind(this,index)} style={this.state.banner_pointer === index ? {'backgroundColor':'#ff8d1b'}:{}} className={style.banner_navigateLi_home} key={index}>
                                    <a href={item.url_link}>
                                   		<div className={style.img_con}>
                                        	<img className={style.img} src={item.img} alt=""/>
                                        </div>
                                        <dl className={style.textContent}>
                                            <dt style={this.state.banner_pointer === index ? {'color':'#000'}:{}}>
                                                {item.title}
                                            </dt>
                                            <dd style={this.state.banner_pointer === index ? {'color':'#000'}:{}}>
                                                {item.text}
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                            )
                        })
                    }
				</div>
			</div>
        )
    }
}