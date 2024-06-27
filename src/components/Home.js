import '../App.css'

export default function Home(props) {
  return (
    <div id="Home">
      <div className="Name">
        <h3 className='Primary-text' onMouseEnter={props.heroEnter} onMouseLeave={props.heroLeave}>HELLO! I'M</h3>
        <h1 className='Main-text' onMouseEnter={props.heroEnter} onMouseLeave={props.heroLeave}>Akuthota Manikanta</h1>
      </div>
    </div>
  )
}
