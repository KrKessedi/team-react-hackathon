import React, { useEffect, useState } from 'react'
import { usePosts } from '../contexts/PostContextProvider'
import PostCard from '../components/posts/PostCard'
import Pagination from '@mui/material/Pagination'
import '../styles/PostsList.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useSearchParams } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import '../styles/adaptive.css/adaptive1.css'

const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},
	},
})

const PostsList = () => {
	const { posts, getPosts, fetchByParams, getCategories, allCategories } =
		usePosts()

	useEffect(() => {
		getPosts()
	}, [])

	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('q') || '')

	useEffect(() => {
		setSearchParams({
			q: search,
		})
	}, [search])

	useEffect(() => {
		getPosts()
		setPage(1)
	}, [searchParams])

	const [page, setPage] = useState(1)

	const itemsOnPage = 6

	const count = Math.ceil(posts.length / itemsOnPage)

	const handlePage = (e, p) => {
		setPage(p)
	}

	function currentData() {
		const begin = (page - 1) * itemsOnPage
		const end = begin + itemsOnPage

		return posts.slice(begin, end)
	}

	useEffect(() => {
		getCategories()
	}, [])

	function unique(arr) {
		let result = []

		for (let str of arr) {
			if (!result.includes(str)) {
				result.push(str)
			}
		}

		return result
	}

	// useEffect(() => {})
	let categories = []
	posts.map((item) => {
		categories.push(item.category)
	})

	allCategories.forEach((item) => {
		categories.push(item.category)
	})

	let uniqCategory = unique(categories)

	return (
		<>
			<div className='parentList'>
				<div className='parentList__inner'>
					<div className='container123'>
						<input
							autoComplete='off'
							id='box'
							type='text'
							placeholder='Search anything...'
							className='search__box'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<i className='fas fa-search search__icon' id='icon'></i>
					</div>

					<ThemeProvider theme={lightTheme}>
						<div className='category-block2'>
							<Select
								sx={{ marginTop: '6px' }}
								labelId='demo-simple-select-standard-label'
								id='demo-simple-select-standard'
								onChange={(e) => fetchByParams('category', e.target.value)}
								label='Age'
								defaultValue='all'
								size='small'
							>
								<MenuItem value='all'>All</MenuItem>
								{uniqCategory.map((item) => (
									<MenuItem key={item} value={item}>
										{item}
									</MenuItem>
								))}
							</Select>
						</div>
					</ThemeProvider>
				</div>
				<div className='postsList'>
					{posts ? (
						currentData().map((item) => <PostCard key={item.id} item={item} />)
					) : (
						<h3>Loading...</h3>
					)}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<ThemeProvider theme={lightTheme}>
						<Pagination
							className='pagination'
							count={count}
							page={page}
							onChange={handlePage}
							variant='outlined'
							sx={{ paddingBottom: '40px' }}
						/>
					</ThemeProvider>
				</div>
			</div>
		</>
	)
}

export default PostsList
