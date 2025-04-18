import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [results, setResults] = useState(false)
	const [photos, setPhotos] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((res) => res.json())
			.then(
				(result) => {
					setResults(true)
					setPhotos(result)
				},
				(error) => {
					setResults(false)
					console.log(error)
				},
			)
	}, [])
	return (
		<div className='App'>
			{results &&
				photos.map((photo) => {
					return (
						<div className='Apps' key={photo.id}>
							<div className='titleId'>
								<h3>{photo.title}</h3>
								<div className='id'>
									<p>{photo.id}</p>
								</div>
							</div>

							<img
								src={photo.thumbnailUrl}
								alt='photo'
								style={{ width: '300px' }}
							/>
						</div>
					)
				})}
		</div>
	)
}

export default App
