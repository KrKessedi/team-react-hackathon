import React, { useRef, useEffect, useState, useContext } from 'react'
import '../styles/DrawNFT.css'
import GlitchSquiggly from 'react-glitch-effect/core/GlitchClip'
import GlitchText from 'react-glitch-effect/core/GlitchText'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import CreatePost from './posts/CreatePost'
import { useNavigate } from 'react-router-dom'
import { postsContext } from '../contexts/PostContextProvider'
import '../adaptive/adaptive-draw.css'

const DrawNFT = () => {
	const { addImage } = useContext(postsContext)
	const navigate = useNavigate()
	const canvasRef = useRef(null)
	const contextRef = useRef(null)
	const [isDrawing, setIsDrawing] = useState(false)

	const [color, setColor] = useState('white')
	const [colorShadow, setColorShadow] = useState(null)
	const [penSize, setPenSize] = useState(5)

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		context.lineCap = 'round'
		contextRef.current = context
		context.shadowBlur = 5
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		context.strokeStyle = color
		context.shadowColor = colorShadow
		context.lineWidth = penSize
	}, [color, colorShadow, penSize])

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent
		contextRef.current.beginPath()
		contextRef.current.moveTo(offsetX, offsetY)
		contextRef.current.lineTo(offsetX, offsetY)
		contextRef.current.stroke()
		setIsDrawing(true)
		nativeEvent.preventDefault()
	}

	const draw = ({ nativeEvent }) => {
		if (!isDrawing) {
			return
		}
		const { offsetX, offsetY } = nativeEvent
		contextRef.current.lineTo(offsetX, offsetY)
		contextRef.current.stroke()
		nativeEvent.preventDefault()
	}

	const stopDrawing = () => {
		contextRef.current.closePath()
		setIsDrawing(false)
	}

	const saveImageToLocal = (e) => {
		// let link = e.currentTarget
		// link.setAttribute('download', 'canvas.png')

		let image = canvasRef.current.toDataURL('image/png')
		// setImageUrl(image)
		addImage(image)
		// console.log(image, 'df')
		// link.setAttribute('href', image)
	}

	const setToDraw = () => {
		contextRef.current.globalCompositeOperation = 'source-over'
	}

	const setToErase = () => {
		contextRef.current.globalCompositeOperation = 'destination-out'
	}

	const [mQuery, setMQuery] = React.useState({
		matches: window.innerWidth > 880 ? true : false,
	})

	useEffect(() => {
		let mediaQuery = window.matchMedia('(max-width: 880px)')
		mediaQuery.addListener(setMQuery)
		return () => mediaQuery.removeListener(setMQuery)
	}, [])

	return (
		<div className='canvas-container'>
			<div className='gradient-border'>
				{mQuery && !mQuery.matches ? (
					<canvas
						width={300}
						height={300}
						ref={canvasRef}
						// onTouchStart={startDrawing}
						// onTouchMove={draw}
						// onTouchEnd={stopDrawing}
						onMouseDown={startDrawing}
						onMouseMove={draw}
						onMouseUp={stopDrawing}
						onMouseLeave={stopDrawing}
					></canvas>
				) : (
					<canvas
						width={500}
						height={500}
						ref={canvasRef}
						// onTouchStart={startDrawing}
						// onTouchMove={draw}
						// onTouchEnd={stopDrawing}
						onMouseDown={startDrawing}
						onMouseMove={draw}
						onMouseUp={stopDrawing}
						onMouseLeave={stopDrawing}
					></canvas>
				)}
			</div>
			<GlitchSquiggly onHover>
				<GlitchText>
					<div className='instrument-draw'>
						<div className='instrument-draw__inner'>
							<div className='instrument-draw__inner-inst'>
								<ModeEditOutlineRoundedIcon
									fontSize='large'
									onClick={setToDraw}
								/>
								<img
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABA0lEQVRIie3VSw6CMBCA4T8egJ1ET6B38GBuPYPiiYwXkCZsfSyMHkJc0MZqgM4UcMUkk1DI8EHbSWEMfSRABlxtZvbeoJECOVD+ZAHM/40OiofQQXAp2iueAkaBujR02HCxqMtdDDpFN711eYlBTx3REjhrUH8jPTrC2xg0t+NNJCreXP70FsDMe7ZWouJ2akO1eDTaVhTCxWjCZ00N1ZqGomnNpfVAdZypi2pwbT03W7jQFFnEtZoaheoQ18J1LacON9XSF/SCwvfmCr3IPzA6oS4k7eT/aVOf944PhtYBBlja7HV6JbgkD17tMTBm0gI/gRWwB+6CDy2961dgPMb/4g3RIv06WnlM6QAAAABJRU5ErkJggg=='
									width='35px'
									height='35px'
									onClick={setToErase}
								/>
							</div>
							<input
								className='range'
								type='range'
								min={5}
								max={40}
								onChange={(e) => setPenSize(e.target.value)}
								defaultValue={5}
							/>
							<div className='instrument-adaptive'>
								<div>
									<h3>Color</h3>
									<div className='instrument-draw__inner-color'>
										<div
											className='color-draw'
											style={{ background: 'black' }}
											onClick={() => setColor('black')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'white' }}
											onClick={() => setColor('white')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'green' }}
											onClick={() => setColor('green')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'blue' }}
											onClick={() => setColor('blue')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'red' }}
											onClick={() => setColor('red')}
										></div>
										<input
											className='color-draw'
											type='color'
											onChange={(e) => setColor(e.target.value)}
										></input>
									</div>
								</div>
								<div>
									<h3>Color Shadow</h3>
									<div className='instrument-draw__inner-color'>
										<div
											className='color-draw'
											style={{ background: 'white' }}
											onClick={() => setColorShadow('white')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'purple' }}
											onClick={() => setColorShadow('purple')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'blue' }}
											onClick={() => setColorShadow('blue')}
										></div>
										<div
											className='color-draw'
											style={{ background: 'red' }}
											onClick={() => setColorShadow('red')}
										></div>
										<input
											className='color-draw'
											type='color'
											onChange={(e) => setColorShadow(e.target.value)}
										></input>
										<NotInterestedIcon
											className='color-draw'
											fontSize='large'
											onClick={() => setColorShadow('transparent')}
										/>
									</div>
								</div>
							</div>
							<button
								id='download_image_link'
								onClick={() => {
									navigate('/add')
									saveImageToLocal()
								}}
							>
								Download
							</button>
						</div>
					</div>
				</GlitchText>
			</GlitchSquiggly>
		</div>
	)
}

export default DrawNFT
