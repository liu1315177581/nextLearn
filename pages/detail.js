import {
    Component
} from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import detail from './css/detail.less'
import getConfig from 'next/config'

class Index extends Component {
    static async getInitialProps(context) {
    	let res = null;
    	let api = getConfig().publicRuntimeConfig.api;
    	if(context.req){
    		res = await fetch(api+'v2/book/1220562')
    	}else{
    		res = await fetch('v2/book/1220562')
    	}
        const data = await res.json()
        return {
            shows: data
        }
	}

    render() {
        return (
            <Layout>
				<div>
					<div className={detail.leftContent}>
                        <h2 className={detail.header}>THE LEGEND OF TARZAN - Official Trailer 2</h2>
                        <img src="/static/logo.jpg"/>
					</div>
				</div>
				
				<div>
					<div className={detail.reightContent}>
                        {/*<ul>
                            {this.props.shows.map(({show}) => (
                                <li key={show.id}>
                                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`} passHref>
                                        <p>{show.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>*/}
					</div>
				</div>
				
				
				<Link href="/?counter=10"><a>Changes with scrolling to top</a></Link>
			</Layout>
        )
    }
}

export default Index