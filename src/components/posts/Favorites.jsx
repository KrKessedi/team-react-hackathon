import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import '../../styles/Favorites.css'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFav } from '../../contexts/FavoriteContext'
import { useEffect } from 'react'

const Favorites = () => {
	const { getFavorite, favorites, deletePostInFavorite } = useFav()

	useEffect(() => {
		getFavorite()
	}, [])

	return (
		<>
			{favorites?.posts.map((elem) => (
				<div key={elem.item.id} className='relativeCard'>
					<div className='subCard'></div>
					<Card
						style={{
							borderRadius: '1vw',
							height: '620px',
							padding: '1vw',
							margin: '1.5vw',
							border: '4px solid yellow',
							background:
								'linear-gradient(180deg, rgb(255,255, 0, .4), transparent), url(https://www.cyberpunk.net/build/images/cosplay-contest/bg-b0fe6faf.jpg)',
							clipPath:
								'polygon(100% 0, 100% 61%, 97% 67%, 97% 77%, 100% 83%, 100% 100%, 43% 100%, 35% 98%, 20% 98%, 12% 100%, 0 100%, 0 0)',
						}}
						sx={{ maxWidth: 345 }}
						key={elem.item.id}
					>
						<CardMedia
							className='fav-image'
							style={{
								borderRadius: '1vw',
								background: '#000',
								transition: '.5s',
							}}
							component='img'
							image={elem.item.image}
							alt={elem.item.title}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								sx={{ color: 'white' }}
							>
								Author: <b>{elem.item.author}</b>
							</Typography>
							<Typography
								variant='body2'
								style={{ textShadow: '3px  0 black', color: 'white' }}
							>
								Title: {elem.item.title}
							</Typography>
							<br />
							<Typography
								variant='body2'
								style={{ textShadow: '3px  0 black', color: 'white' }}
							>
								{elem.item.description}
							</Typography>
							<br />
							<Typography variant='body2' color='primary'>
								Price: <b>{elem.item.price}$</b>
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								color='error'
								variant='contained'
								endIcon={<DeleteIcon />}
								onClick={() => deletePostInFavorite(elem.item.id)}
							>
								Delete in favorites
							</Button>
						</CardActions>
					</Card>
				</div>
			))}
		</>
	)
}

export default Favorites
