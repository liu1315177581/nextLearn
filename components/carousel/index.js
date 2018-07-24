import { Component } from 'react'
import style from './index.less'



export default class Carousel extends Component{
	constructor(props){
		super(props)
		this.state = {
			banner_pointer:0
		}
	}

	componentDidMount(){

	}


	switchSlideFun(index){

	}

	render(){
		return(
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
                                <li onClick={this.switchSlideFun.bind(this,index)} className={[style.banner_navigateLi_home]} key={index}>
                                    <a href={item.url_link} className="clearfix">
                                        <img className={style.imgContent} src={item.img} alt=""/>
                                        <dl className={style.textContent}>
                                            <dt className={[this.state.index == index ? 'dt_active' : '']}>
                                                {item.title}
                                            </dt>
                                            <dd className={[this.state.index == index ? 'dd_active' : '']}>
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