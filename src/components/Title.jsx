import'../css/Title.css';

const Title = ({number, title}) => {
  return (
    <div className="container-destination">
      <p className="number">{number}</p>
      <p className="stitle">{title}</p>
    </div>
  )
}

export default Title
