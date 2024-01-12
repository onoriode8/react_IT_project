import './home.css';
import undraw_buy_house_image from "../../../assests/undraw_buy_house.svg";
import undraw_home_settings_image from "../../../assests/undraw_home_settings.svg";
import undraw_house_searching_image from "../../../assests/undraw_house_searching.svg"

const home = () => {
    return (
        <div>
             {/* <header>
        <div>
            <ul id='ul'>
                <li><a className='list' href='/buy' title="Buy">Buy</a></li>
                <li><a className='list' href='/sell' title="Sell">Sell</a></li>
                <li><a className='list' href='/rent' title="Rent">Rent</a></li>
                <li><a className='list' href='/home_loans' title="Home Loans">Home Loans</a></li>
                <li><a className='list' href='/mortgage_rent' title="Mortgage Rent">Mortgage Rent</a></li>
            </ul>
        </div>
        <nav>
            <span>LOGO</span>
            <ul>
                <li><a className='list_a'   href='/' title="Home">Home</a></li>
                <li><a className='list_a' href='/buy' title="Buy">Buy</a></li>
                <li><a className='list_a' href='/sell' title="Sell">Sell</a></li>
                <li><a className='list_a' href='/rent' title="Rent">Rent</a></li>
                <li><a className='list_a' href='/home_loans' title="Home Loans">Home Loans</a></li>
                <li><a className='list_a' href='/mortgage_rent' title="Mortgage Rent">Mortgage Rent</a></li>
            </ul>
            <span className="menu">MENU</span>
        </nav>
    </header> */}
    <section>
        <div className="section_image">
            <p className="home_cont">
               Homes
            </p>
        </div>
        <div className="sec">
            <h1>We Sell And Rent Out Properties</h1>
            <p>website name contributes to building and renting out great cities around the world. 
               The unique way in which we work has enabled us to consistently build
               on our knowledge and experience and hone our capabilities over many
               diverse markets. Our work in healthcare, commercial, mixed use, 
               cultural, residential & hospitality, government & judicial, education
               and beyond means there’s no ground we haven’t covered. We’re proud to 
               be one of the most trusted RealEstate to deliver on projects that are
              vital to our communities.
            </p>
        </div>
    </section>
    <article>
        <div className="article_container">
        <div className="inner_container">
            <img src={undraw_buy_house_image} alt="" />
            <h2>Buy a home</h2>
            <p>Find your place with an immersive photo experience and the most 
               listings, including things you won’t find anywhere else.
            </p>
            <button>Browse Homes</button>
        </div>

        <div className="inner_container">
            <img src={undraw_home_settings_image} alt="" />
            <h2>Sell a home</h2>
            <p>No matter what path you take to sell your home, 
                we can help you navigate a successful sale.
               
            </p>
            <button>See Your Options</button>
        </div>

        <div className="inner_container">
            <img src={undraw_house_searching_image} alt="" />
            <h2>Rent a home</h2>
            <p>We’re creating a seamless online experience – from shopping
               on the largest rental network, to applying, to paying rent.
            </p>
            <button>Find Rented Appartment.</button>
        </div>
    </div>
    </article>
        </div>
    )
}

export default home;