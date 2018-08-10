import {
    Component
} from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout/index'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import detail from './index.less'
import getConfig from 'next/config'
const api = getConfig().publicRuntimeConfig.api;


class Index extends Component {

    static async getInitialProps(context) {

        let res = null;
        let api = getConfig().publicRuntimeConfig.api;
        if(context.req){
            res = await fetch(api+'v2/movie/in_theaters')
        }else{
            res = await fetch('v2/movie/in_theaters')
        }
        const data = await res.json()

        console.log(data)

        return {
            detail_message:[
                {
                id: 1,
                title: 'Tarzan',
                text: ' Tarzan, having acclimated to life in London, is called back to his former home in the jungle to investigate the activities at a mining encampment.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/5.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m5.jpg",
                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id: 2,
                title: 'Maximum Ride',
                text: 'Six children, genetically cross-bred with avian DNA, take flight around the country to discover their origins. Along the way, their mysterious past is ...',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/4.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m4.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:3,
                title: 'Independence',
                text: 'The fate of humanity hangs in the balance as the U.S. President and citizens decide if these aliens are to be trusted ...or feared.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/3.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m3.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:4,
                title: 'Central Intelligence',
                text: 'Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. Claiming to be on a... ',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/2.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m2.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }, {
                id:5,
                title: 'Ice Age',
                text: 'In the film\'s epilogue, Scrat keeps struggling to control the alien ship until it crashes on Mars, destroying all life on the planet.',
                img: 'http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/1.jpg',
                item_img:"http://demo.cssmoban.com/cssthemes5/cpts_994_bml/images/m1.jpg",

                url_link: 'javascript:;',
                show_year: '2016-10-10',
                score_num: '',
            }],
            moviesList:data
        }
	}
    render() {
        return (
            <Layout>
                <div className={detail.detail_content}>
                    <div className={detail.left_content}>
                        <h2 className={detail.header}>{this.props.moviesList.subjects[0].title}</h2>
                        <img className={detail.big_img} src={this.props.detail_message[0].img}/>
                        <div className={detail.banner_text}>
                            <h5>描述</h5>
                            <p>	{this.props.detail_message[0].text} </p>
                        </div>
                    </div>

                    <div className={detail.reight_content}>

                        <h3>{this.props.moviesList.title}</h3>

                        <ul className={detail.detail_list}>
                            {this.props.moviesList.subjects.map((item) => (
                                <li key={item.id} className={detail.list_item}>
                                    <div className={detail.item_left_img}>
                                        <img src={item.images.small} alt=""/>

                                    </div>
                                    <div className={detail.item_right_text}>
                                        <p className={detail.title}>{item.title}</p>
                                        <p className={detail.casts}>
                                            {item.casts.map((casts_item)=>(
                                                <a href={casts_item.alt}>{casts_item.name}  </a>
                                            ))}
                                        </p>
                                        <p>
                                            {item.directors.map((directors_item)=>(
                                                <a  href={directors_item.alt}>{directors_item.name}  </a>
                                            ))}
                                        </p>
                                        <p className={detail.views}>{item.collect_count} views</p>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

				
				
				<Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
			</Layout>
        )
    }
}


export default Index