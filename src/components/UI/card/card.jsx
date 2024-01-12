import css from './card.module.css'

const card = (props) => (
    <div>
        <div className={css.card_style}>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div className={css.text}>
                <div><strong>${props.price}</strong></div>
                <div>{props.apartmentSize}</div>
                <div>{props.address}</div>
            </div>
        </div>
        {/* <div></div> */}
    </div>
);

export default card;