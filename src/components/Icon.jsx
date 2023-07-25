import '/src/css/icon.css'

const imageUrls = {
  logo : '/public/assets/shared/logo.svg',
}


const Icon = ({ name }) => {
  const imageUrl = imageUrls[name];
  const className = (name === 'logo') ? 'logo' : 'planet';
  return (
    <img className={className} src={imageUrl}/>
  )
}

export default Icon
