import React, { useState, useEffect } from 'react'
import '../../styles/EditPost.css'
import { usePosts } from '../../contexts/PostContextProvider'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
	const { getOnePost, onePost, saveChanges } = usePosts()
	const [post, setPost] = useState(onePost)

	const navigate = useNavigate()
	const { id } = useParams()

	useEffect(() => {
		getOnePost(id)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setPost(onePost)
		}, 1999)
	}, [onePost])

	function handleEdit(e) {
		let obj = {
			...post,
			[e.target.name]: e.target.value,
		}

		setPost(obj)
	}

	return (
		<>
			{post ? (
				<div className='edit-page'>
					<div className='edit-container on'>
						<div className='screen'>
							<div className='box--outer'>
								<div className='box'>
									<div className='box--inner'>
										<div className='edit-content'>
											<div className='holder'>
												<br />
												<br />
												<div className='row'>
													<div className='col col__left label'>Picture</div>
													<div className='col col__center'>
														<input
															autoComplete='off'
															className='rows'
															type='text'
															id='image'
															name='image'
															placeholder=''
															data-error=''
															value={post.image}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col col__left label'>Title</div>
													<div className='col col__center'>
														<input
															autoComplete='off'
															className='rows'
															type='text'
															id='title'
															name='title'
															placeholder=''
															data-error=''
															value={post.title}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col col__left label'>Description</div>
													<div className='col col__center'>
														<input
															autoComplete='off'
															className='rows'
															type='text'
															id='desc'
															name='description'
															placeholder=''
															data-error=''
															value={post.description}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='row'>
													<div className='col col__left label'>Category</div>
													<div className='col col__center'>
														<input
															autoComplete='off'
															className='rows'
															type='text'
															id='category'
															name='category'
															placeholder=''
															data-error=''
															value={post.category}
															onChange={handleEdit}
														/>
													</div>
												</div>
												<div className='edit-form'>
													<div className='row'>
														<div className='col col__left label'>Price</div>
														<div className='col col__center '>
															<input
																autoComplete='off'
																className='rows'
																type='text'
																id='price'
																name='price'
																placeholder=''
																data-error=''
																value={post.price}
																onChange={handleEdit}
															/>
														</div>
														<button
															onClick={() => {
																saveChanges(post)
																navigate('/list')
															}}
															className='rows save-btn'
															type='submit'
															id='submit'
															style={{
																marginLeft: '-9.8vw',
															}}
														>
															[Save]
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className='preloader'
					style={{ marginTop: '13vw', color: 'black' }}
				>
					<div className='preloader__ring'>
						<div className='preloader__sector'>L</div>
						<div className='preloader__sector'>o</div>
						<div className='preloader__sector'>a</div>
						<div className='preloader__sector'>d</div>
						<div className='preloader__sector'>i</div>
						<div className='preloader__sector'>n</div>
						<div className='preloader__sector'>g</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
					</div>
					<div className='preloader__ring'>
						<div className='preloader__sector'>L</div>
						<div className='preloader__sector'>o</div>
						<div className='preloader__sector'>a</div>
						<div className='preloader__sector'>d</div>
						<div className='preloader__sector'>i</div>
						<div className='preloader__sector'>n</div>
						<div className='preloader__sector'>g</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'>.</div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
						<div className='preloader__sector'></div>
					</div>
				</div>
			)}
		</>
	)
}

export default EditPost
