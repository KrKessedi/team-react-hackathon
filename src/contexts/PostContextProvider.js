import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

export const postsContext = createContext()
export const usePosts = () => useContext(postsContext)

let API_NFT = 'http://localhost:8000/nfts'

const INIT_STATE = {
	allCategories: [],
	posts: [],
	onePost: null,
	imageUrl: '',
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			return { ...state, posts: action.payload }
		case 'GET_ONE_POST':
			return { ...state, onePost: action.payload }
		case 'GET_CATEGORIES':
			return { ...state, allCategories: action.payload }
		case 'GET_IMAGE_URL':
			return { ...state, imageUrl: action.payload }
		default:
			return state
	}
}

const PostContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	let navigate = useNavigate()
	const location = useLocation()

	// add Post

	async function addPost(newPost) {
		await axios.post(API_NFT, newPost)

		getPosts()
	}

	function addImage(newImg) {
		dispatch({
			type: 'GET_IMAGE_URL',
			payload: newImg,
		})
	}

	async function getPosts() {
		const { data } = await axios(`${API_NFT}/${window.location.search}`)

		dispatch({
			type: 'GET_POSTS',
			payload: data,
		})
	}

	async function getCategories() {
		const { data } = await axios(API_NFT)

		dispatch({
			type: 'GET_CATEGORIES',
			payload: data,
		})
	}

	async function getOnePost(id) {
		const { data } = await axios(`${API_NFT}/${id}`)

		dispatch({
			type: 'GET_ONE_POST',
			payload: data,
		})
	}

	async function deletePost(id) {
		await axios.delete(`${API_NFT}/${id}`)

		getPosts()
	}

	async function saveChanges(newPost) {
		await axios.patch(`${API_NFT}/${newPost.id}`, newPost)
		getPosts()
	}

	const fetchByParams = (query, value) => {
		const search = new URLSearchParams(location.search)

		if (value === 'all') {
			search.delete(query)
		} else {
			search.set(query, value)
		}

		const url = `${location.pathname}?${search.toString()}`

		navigate(url)
	}

	// values

	const values = {
		addPost,
		getPosts,
		getOnePost,
		deletePost,
		addImage,
		saveChanges,
		fetchByParams,
		getCategories,

		imageUrl: state.imageUrl,
		posts: state.posts,
		onePost: state.onePost,
		allCategories: state.allCategories,
	}

	return (
		<postsContext.Provider value={values}>{children}</postsContext.Provider>
	)
}

export default PostContextProvider
