import { Component } from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import styles from './test.less'

class Index extends Component {
    render() {
        return (
            <Layout>
				<h1 className={styles.example}>Batman TV Shows</h1>
				<ul>
					{this.props.shows.map(({show}) => (
						<li key={show.id}>
							<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
								<a>{show.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</Layout>
        )
    }
}

Index.getInitialProps = async function(context) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    return {
        shows: data
    }
}

export default Index