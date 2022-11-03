import React, { useContext, useEffect, useState } from 'react'
import '../../styles/CreatePost.css'
import { useNavigate } from 'react-router'
import { postsContext, usePosts } from '../../contexts/PostContextProvider'
import '../../adaptive/adaptive-add.css'

const CreatePost = () => {
	const { imageUrl } = useContext(postsContext)
	const navigate = useNavigate()
	const { addPost } = usePosts()

	const [product, setProduct] = useState({
		author: JSON.parse(window.localStorage.getItem('username')),
		title: '',
		description: '',
		price: '',
		image: imageUrl,
		category: 'cyberpunk',
		comments: [],
	})

	const handleInp = (e) => {
		if (e.target.name === 'price') {
			let obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			}
			setProduct(obj)
		} else {
			let obj = {
				...product,
				[e.target.name]: e.target.value,
			}
			setProduct(obj)
		}
	}

	const [drawCheck, setDrawCheck] = useState(false)

	return (
		<div className='create-block'>
			<div className='column block-add p-1'>
				<h2 className='play-once'>Create NFT</h2>
				<div className='create-block__inner'>
					<div className='field w-24'>
						<label className='glow text'>URL</label>
						<div className='create-block__inner-img'>
							<input
								className='input2 url2'
								name='image'
								value={product.image}
								onChange={handleInp}
							/>
							<button className='yellow' onClick={() => navigate('/draw-nft')}>
								Draw
							</button>
						</div>
					</div>
					<div>
						<div className='field'>
							<label className='glow text'>Title</label>
							<input
								type='text'
								name='title'
								className='input2 title-add'
								onChange={handleInp}
							/>
						</div>
						<div className='field'>
							<label className='glow text'>Category</label>
							<select
								className='select2'
								name='category'
								onChange={handleInp}
								style={{ color: 'black' }}
							>
								<option value='cyberpunk'>cyberpunk</option>
								<option value='man'>man</option>
								<option value='painting'>painting</option>
								<option value='art'>art</option>
							</select>
						</div>
						<div className='field'>
							<div className='field w-24' data-unit='$'>
								<label className='glow text price-text'>Price</label>
								<input
									style={{ appearance: 'none' }}
									type='number'
									onChange={handleInp}
									name='price'
									className='input2 price2'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex row w-100 justify-space-between flex-wrap'></div>
				<div className='yellow mb-1'>
					<div>
						<div className=''>
							<label className='glow text'>Description</label>

							<textarea
								type='text'
								name='description'
								onChange={handleInp}
								className='input2 desc2'
							/>
						</div>
					</div>
				</div>
				<h2></h2>
				<div className='add2'>
					<button
						className='green'
						onClick={() => {
							addPost(product)
							navigate('/')
						}}
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
