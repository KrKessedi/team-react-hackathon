import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../contexts/PostContextProvider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import '../../styles/PostDetails.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useBasket } from '../../contexts/BasketContextProvider'

const PostDetails = () => {
	const { id } = useParams()

	const { getOnePost, onePost } = usePosts()
	const { addPostToBasket } = useBasket()

	// setTimeout(function () {
	// 	useEffect(() => {
	// 		getOnePost(id)
	// 	}, [])
	// }, 1000)

	useEffect(() => {
		setTimeout(() => {
			getOnePost(id)
		}, 2000)
	}, [])

	return (
		<div className='post-detail'>
			{onePost ? (
				// <div className='card-in-detail'>
				// 	<Card
				// 		sx={{ display: 'flex', maxWidth: '70vw', margin: ' 1.6vw auto' }}
				// 		style={{
				// 			border: '2px solid black',
				// 			padding: '1.7vw',
				// 			position: 'relative',
				// 			borderRadius: '1vw',
				// 			clipPath:
				// 				'polygon(4% 0%, 100% 0, 100% 35%, 100% 100%, 42% 100%, 38% 95%, 30% 95%, 26% 100%, 0 100%, 0 10%)',
				// 			// boxShadow,

				// 			// fontSize: '50px',
				// 		}}
				// 	>
				// 		<Box
				// 			sx={{ display: 'flex', flexDirection: 'column' }}
				// 			style={{ fontSize: '2em' }}
				// 		>
				// 			<CardContent>
				// 				<Typography
				// 					style={{ fontSize: '1.3em' }}
				// 					gutterBottom
				// 					variant='h5'
				// 					component='div'
				// 				>
				// 					Author: {onePost.author}
				// 				</Typography>
				// 				<br />

				// 				<Typography
				// 					variant='body2'
				// 					style={{ fontSize: '20px' }}
				// 					color='text.secondary'
				// 				>
				// 					{onePost.description}
				// 				</Typography>
				// 				<br />
				// 				<Typography
				// 					variant='body2'
				// 					color='text.dark'
				// 					style={{ fontSize: '40px' }}
				// 				>
				// 					Price: {onePost.price}$
				// 				</Typography>
				// 			</CardContent>
				// 		</Box>
				// 		<div className='btn btn--primary'>
				// 			<button
				// 				onClick={() => addPostToBasket(onePost)}
				// 				className='btn__container'
				// 			>
				// 				Add to basket
				// 			</button>
				// 			<div className='btn__bottom'></div>
				// 			<div className='btn__noise'></div>
				// 		</div>
				// 		<CardMedia
				// 			style={{
				// 				borderRadius: '1vw',
				// 				backgroundColor: 'black',
				// 				clipPath:
				// 					'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
				// 			}}
				// 			component='img'
				// 			width='450'
				// 			height='450'
				// 			image={onePost.image}
				// 			alt={onePost.category}
				// 		/>
				// 	</Card>
				// </div>
				<article className='t'>
					<header className='card__thumb'>
						<a href='#'>
							<img src={onePost.image} width='100%' height='250px' />
						</a>
					</header>

					<div className='card__body'>
						<div className='card__category'>
							<p>{onePost.author}</p>
						</div>
						<h2 className='card__title' style={{ color: 'white' }}>
							<div href='#'>{onePost.title}</div>
						</h2>
						<p className='card__description'>{onePost.description}</p>
					</div>

					<footer className='card__footer'>
						<div className='btn btn--primary'>
							<button
								onClick={() => addPostToBasket(onePost)}
								className='btn__container'
							>
								Add to basket
							</button>
							<div className='btn__bottom'></div>
							<div className='btn__noise'></div>
						</div>
					</footer>
				</article>
			) : (
				<div className='preloader' style={{ marginTop: '13vw', color: 'aqua' }}>
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
		</div>
	)
}

export default PostDetails
