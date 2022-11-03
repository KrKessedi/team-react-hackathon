import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePostPage from './pages/CreatePostPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import Basket from './components/posts/Basket'
import PostList from './pages/PostsList'
import DrawNFT from './components/DrawNFT'
import PostDetails from './components/posts/PostDetails'
import EditPostPage from './pages/EditPostPage'
import FavoritesPage from './pages/FavoritesPage'

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<PostList />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/add' element={<CreatePostPage />} />
				<Route path='/edit/:id' element={<EditPostPage />} />
				<Route path='/reg' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/list' element={<PostList />} />
				<Route path='/draw-nft' element={<DrawNFT />} />
				<Route path='/details/:id' element={<PostDetails />} />
				<Route path='/favorites' element={<FavoritesPage />} />
			</Routes>
		</>
	)
}

export default MainRoutes
