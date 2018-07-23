import { Component } from 'react'
import Layout from '../components/layout'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'



const Content = withRouter((props) => (
    <div>
		<h1>{props.shows.id}</h1>
	</div>
))



const Post = withRouter((props) => (
    <Layout>
		<Content shows={props.shows}></Content>
	</Layout>
))

Post.getInitialProps = async (context) => {
    let id = context.query.id;
    let res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    let data = await res.json();
    return {
        shows: data
    }
}

export default Post