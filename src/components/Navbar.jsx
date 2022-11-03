import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'

// const pages = ['Nfts', 'Basket']

const pages = [
	{
		type: 'Basket',
		path: '/basket',
	},
	{
		type: 'Add',
		path: '/add',
	},
	{
		type: '404',
		path: '/*',
	},
]

function ResponsiveAppBar() {
	const { user, logout, checkAuthorization } = useAuth()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuthorization()
		}
	}, [])

	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const navigate = useNavigate()

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<>
			<div className='subNavbar'></div>
			<AppBar position='static' className='navbar'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters className='wr'>
						<CurrencyBitcoinIcon sx={{ color: 'white	' }} />
						<Typography
							onClick={() => navigate('/list')}
							className='glitchTitle'
							data-text='NFT'
							variant='h6'
							noWrap
							component='a'
							sx={{
								mr: 2,
								ml: 2,
								color: 'white',
								display: { xs: 'none', md: 'flex' },
								// fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
							style={{ cursor: 'pointer' }}
						>
							NFT
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none', color: 'black' },
								}}
							>
								<MenuItem onClick={handleCloseNavMenu}>
									<Button
										// className='testing'
										onClick={() => navigate(user ? '/add' : '/login')}
										sx={{ color: 'black', display: 'block' }}
									>
										Add
									</Button>
								</MenuItem>
								<MenuItem>
									<Button
										// className='testing'
										onClick={() => navigate(user ? '/favorites' : '/login')}
										sx={{ color: 'black', display: 'block' }}
									>
										Favorites
									</Button>
								</MenuItem>
								<MenuItem>
									<Button
										// className='testing'
										onClick={() => navigate(user ? '/basket' : '/login')}
										sx={{ color: 'black', display: 'block' }}
									>
										Basket
									</Button>
								</MenuItem>
							</Menu>
						</Box>
						{/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
						<Typography
							className='glitchTitle'
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								color: 'white',
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								textDecoration: 'none',
							}}
							onClick={() => navigate('/list')}
							style={{ cursor: 'pointer' }}
						>
							NFT
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button
								className='testing'
								onClick={() => navigate(user ? '/add' : '/login')}
								sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
							>
								Add
							</Button>
							<Button
								className='testing'
								onClick={() => navigate(user ? '/favorites' : '/login')}
								sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
							>
								Favorites
							</Button>
						</Box>

						<Button
							className='testing'
							onClick={() => navigate(user ? '/basket' : '/login')}
							sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
							// disabled={user ? false : true}
						>
							Basket
						</Button>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										style={{ width: '50px', height: '50px', fontSize: '2vw' }}
										sx={{
											bgcolor: '',
											// maxWidth: '5vw',
										}}
										alt={user[1]}
										src='...'
										// variant='rounded'
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography
										className='glitch'
										onClick={() => navigate('/reg')}
									>
										Register
									</Typography>
								</MenuItem>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography
										className='glitch'
										onClick={() => navigate('/login')}
									>
										Login
									</Typography>
								</MenuItem>
								<MenuItem
									id='app'
									className='menu-items'
									onClick={handleCloseUserMenu}
								>
									<Typography className='glitch' onClick={logout}>
										Logout
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}
export default ResponsiveAppBar
