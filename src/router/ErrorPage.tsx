
import { Link } from 'react-router-dom';

function ErrorPage() {

  return (
    <div>
            <h2>404 - Page not found!</h2>
            <h3>I told you!!!</h3>
            <p>Now you have to start over again! <Link className="item" to="/">Back to Home</Link></p> 
            <img src="https://media.tenor.com/ZaitWKx4C9oAAAAC/the-simpson-homer-simpson.gif" alt="gif"/>

    </div>
  )
}

export default ErrorPage
