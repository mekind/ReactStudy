import '../css/icon.css'

const imageUrls = {
  logo : 'assets/shared/logo.svg',
  moon : 'assets/destination/image-moon.png',
  mars : 'assets/destination/image-mars.png'
}


const Icon = ({ name }) => {
  const imageUrl = imageUrls[name];
  const className = (name === 'logo') ? 'logo' : 'planet';
  return (
    <img className={className} src={imageUrl}/>
  )
}

export default Icon
