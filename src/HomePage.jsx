import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{ 'padding': '50px' }}>
            <Link to={'/week-1'}><h6>week-1</h6></Link>
            <Link to={'/week-2'}><h6>week-2</h6></Link>
            <Link to={'/week-3'}><h6>week-3</h6></Link>
        </div>
    )
}
export default HomePage;