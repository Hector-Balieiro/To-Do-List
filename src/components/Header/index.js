import Rotas from  '../../routes'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div className="borda container">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <Link to='\criar'></Link>
                </div>
            </nav>
        </div>
    )
}