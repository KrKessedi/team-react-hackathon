import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useBasket } from '../../contexts/BasketContextProvider'
import '../../styles/Basket.css'
import OrderForm from '../OrderForm'

function Basket() {
	const { getBasket, basket, changePostCount, deletePostInBasket } = useBasket()

	useEffect(() => {
		getBasket()
	}, [])

	return (
		<TableContainer className='basket' component={Paper} sx={{ my: 15 }}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell sx={{ color: 'white' }} align='center'>
							Image
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Name
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Category
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Price
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Count
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Sub Price
						</TableCell>
						<TableCell sx={{ color: 'white' }} align='center'>
							Description
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{basket?.posts.map(row => (
						<TableRow
							key={row.item.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align='center' style={{ marginLeft: '2vw' }}>
								<img src={row.item.image} alt='' width='100' height='100' />
							</TableCell>
							<TableCell sx={{ color: 'white' }} align='center'>
								{row.item.title}
							</TableCell>
							{/* <TableCell component='th' scope='row'>
									{row.title}
								</TableCell> */}
							<TableCell sx={{ color: 'white' }} align='center'>
								{row.item.category}
							</TableCell>
							<TableCell sx={{ color: 'white' }} align='center'>
								{row.item.price}$
							</TableCell>
							<TableCell sx={{ color: 'white' }} align='center'>
								<input
									style={{ width: '2vw', textAlign: 'center' }}
									type='number'
									value={row.count}
									onChange={e => changePostCount(e.target.value, row.item.id)}
								/>
							</TableCell>
							<TableCell sx={{ color: 'white' }} align='center'>
								{row.subPrice}
							</TableCell>
							<TableCell
								sx={{ color: 'white' }}
								align='center'
								style={{ width: '15vw' }}
							>
								{row.item.description}
							</TableCell>
							<Button
								onClick={() => deletePostInBasket(row.item.id)}
								color='error'
								variant='contained'
								sx={{ my: 6 }}
							>
								<DeleteIcon />
							</Button>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<hr
				style={{
					background: 'linear-gradient(90deg, rgb(0,0,255), rgb(255, 0,0))',
					border: ' none',
					height: '1px',
					boxShadow: ' 0 10px 20px red',
				}}
			/>

			<Typography
				style={{ margin: '2vw' }}
				variant='h6'
				component='div'
				align='right'
			>
				Total price: {basket?.totalPrice}$ <br />
				{basket ? <OrderForm /> : null}
			</Typography>
		</TableContainer>
	)
}

export default Basket
