import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const API = 'http://35.239.251.89/'

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [error, setError] = useState('')

	let navigate = useNavigate()

	const config = {
		headers: { 'Content-Type': 'multipart/form-data' },
	}

	const registration = async (username, password) => {
		let formData = new FormData()
		formData.append('username', username)
		formData.append('password', password)

		try {
			const res = await axios.post(`${API}register/`, formData, config)
			navigate('/login')
		} catch (error) {
			setError('Error occured')
		}
	}

	const login = async (username, password) => {
		let formData = new FormData()
		formData.append('username', username)
		formData.append('password', password)

		try {
			const res = await axios.post(`${API}api/token/`, formData, config)

			navigate('/list')

			localStorage.setItem('token', JSON.stringify(res.data))
			localStorage.setItem('username', JSON.stringify(username))
			setUser(username)
		} catch (error) {
			alert('Wrong username or password')
			setError('WRONG USERNAME OR PASSWORD', error)
		}
	}

	async function checkAuthorization() {
		let token = JSON.parse(localStorage.getItem('token'))

		try {
			const Authorization = `Bearer ${token.access}`

			let res = await axios.post(
				`${API}api/token/refresh/`,
				{ refresh: token.refresh },
				{ headers: { Authorization } }
			)
			localStorage.setItem(
				'token',
				JSON.stringify({ refresh: token.refresh, access: res.data.access })
			)

			let username = localStorage.getItem('username')
			setUser(username)
		} catch (error) {
			console.error(error)
			logout()
		}
	}

	function logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('username')
		setUser('')
		navigate('/')
	}

	const values = {
		user,
		error,

		registration,
		login,
		checkAuthorization,
		logout,
	}

	return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContextProvider
