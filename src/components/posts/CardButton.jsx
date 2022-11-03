import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { purple } from '@mui/material/colors'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	// fontSize: 16,
	padding: '.1vw .1vw',
	border: '1px solid',
	lineHeight: 1.5,
	backgroundColor: '#0063cc',
	borderColor: '#0063cc',
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
		backgroundColor: '#0069d9',
		borderColor: '#0062cc',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#0062cc',
		borderColor: '#005cbf',
	},
	'&:focus': {
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
	},
})

export default function CustomizedButtons() {
	return (
		<Stack spacing={2} direction='colum'>
			<BootstrapButton variant='contained' disableRipple>
				<AddShoppingCartIcon />
			</BootstrapButton>
		</Stack>
	)
}
