import React, { createContext, useContext, useReducer } from 'react'

const favContext = createContext()
export const useFav = () => useContext(favContext)

const INIT_STATE = {
	favorites: JSON.parse(localStorage.getItem('favorites')),
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case 'GET_FAVORITES':
			return { ...state, favorites: action.payload }
		default:
			return state
	}
}

const FavoriteContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getFavorite = () => {
		let favorites = JSON.parse(localStorage.getItem('favorites'))

		if (!favorites) {
			localStorage.setItem(
				'favorites',
				JSON.stringify({
					posts: [],
				})
			)
			favorites = {
				posts: [],
			}
		}

		dispatch({
			type: 'GET_FAVORITES',
			payload: favorites,
		})
	}

	const addPostToFavorite = (post) => {
		let favorites = JSON.parse(localStorage.getItem('favorites'))

		if (!favorites) {
			favorites = {
				posts: [],
			}
		}

		let newPost = {
			item: post,
		}

		let postToFind = favorites.posts.filter((elem) => elem.item.id === post.id)

		if (postToFind.length === 0) {
			favorites.posts.push(newPost)
		} else {
			favorites.post = favorites.posts.filter(
				(elem) => elem.item.id !== post.id
			)
		}

		localStorage.setItem('favorites', JSON.stringify(favorites))

		dispatch({
			type: 'GET_FAVORITES',
			payload: favorites,
		})
	}

	function deletePostInFavorite(id) {
		let favorites = JSON.parse(localStorage.getItem('favorites'))

		favorites.posts = favorites.posts.filter((elem) => elem.item.id !== id)

		localStorage.setItem('favorites', JSON.stringify(favorites))

		getFavorite()

		dispatch({
			type: 'GET_BASKET_LENGTH',
			payload: favorites,
		})
	}

	const values = {
		favorites: state.favorites,

		getFavorite,
		addPostToFavorite,
		deletePostInFavorite,
	}
	return <favContext.Provider value={values}>{children}</favContext.Provider>
}

export default FavoriteContextProvider
