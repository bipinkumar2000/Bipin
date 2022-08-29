import Card from './Component/card';
import './Home.css';


function Todo() {
    return (
    <body>
        <div className="nav-header">
            <li><h1>NETFLEX</h1></li>
            <li className="li-link"><a href="#home"> Home</a></li>
            <li className="li-link"><a href="#tvshows">TV Shows</a></li>
            <li className="li-link"><a href="#movies">Movies</a></li>
        </div>
        <div className="main-content" id="#home">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className="headingtwo"> 
                <h2 id="tvshows">TV SHOWS</h2>
            <div className="main-content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
        <div className="headingtwo">
            <h2 id="movies">Movies</h2>
            <div className="main-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </body>
  
    );
}

export default Todo;