import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Like = () => {
	const [like, setLike] = React.useState(false)

	return (
		<div onClick={() => setLike(!like)}>
			{like ? (
				<FavoriteIcon color='error' fontSize='large' />
			) : (
				<FavoriteBorderOutlinedIcon sx={{ color: 'black' }} fontSize='large' />
			)}
		</div>
	)
}

export default Like
