import {Link} from 'react-router-dom'
import '../App.css'

const HomePage = () => {
  return (
    <div>
      <div className='text'>
        <h1>Bring your <br/>home to life.</h1>
        <p>Elevate your living space with a touch of nature.</p>
        <p>We offer a range of easy care house plants</p>
        <button><Link to="/shop">Browse Plants</Link></button>
      </div>
      <img  className="HomeImg" src="https://cdn.mos.cms.futurecdn.net/JbrLe2So3PGdCkeju4GYcc.jpg"  width="500px" hieght="390px" alt="plant image"></img>
    </div>
  )
}

export default HomePage;
