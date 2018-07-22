import { Component } from 'react'
import Layout from '../components/layout/index'
import Link from 'next/link'



class PostLink extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
				<Link as={`/p/${this.props.title}`} href={`/post?id=${this.props.title}`}>
					<a className="example a">{this.props.title}</a>
				</Link>
               
			</div>
        )
    }
}

export default class About extends Component {
    render() {
        return (
            <Layout>
				<p>This is the about page</p>
				<PostLink title="1"></PostLink>
				<PostLink title="2"></PostLink>
			</Layout>
        )
    }
}