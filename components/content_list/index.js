/**
 * 内容列表组件
 */
import { Component } from 'react';
import { connect } from 'react-redux'
import style from './index.less'

class ContentList extends Component{
	constructor(props){
		super(props)
	}

	/* 评分转换对应html */
	appraise_num_parse_fun(params){
		let html = [];
		let num = 4;
		for (var i = 0; i < 5; i++) {
			if(Number(params) > 0){
				num--;
				html.push(<a key={i} href="#"><i className={style.fa_star} aria-hidden="true">&#xe64a;</i></a>)
			}else{
				html.push(<a key={i} href="#"><i className={style.fa_star} aria-hidden="true">&#xe64b;</i></a>)
			}
		}
		return html
	}

	render(){
		return(
			<div className={style.container}>
				<div className={style.w3_agile_banner_bottom_grid}>
					{
						this.props.vedio_message.map((item,index)=>{
							return (
								<ul key={index} className={style.owl_item}>
									<li className={style.w3l_movie_gride_agile}>
										<a className={style.hvr_shutter_out_horizontal}>
											<img src={item.img_min} className={style.img_responsive} alt=" "/>
										</a>
										<div className={style.agileits_w3layouts_mid_1_home}>
											<div className={style.w3l_movie_text}>
												<h6>{item.title}</h6>							
											</div>
											<div className={style.gile_mid_2_home}>
												<p>{item.show_year}</p>
												<div className={style.block_stars}>
													{
														this.appraise_num_parse_fun(item.appraise_num ? item.appraise_num : 0)
													}
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</li>
								</ul>
							)
						})
					}
					
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	let { vedio_message } = state;
	return {
		vedio_message
	}
}

export default connect(mapStateToProps)(ContentList)