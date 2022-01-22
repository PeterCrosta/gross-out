import AllReviews from "./AllReviews";

const SingleWine = (props) => {
    const {wineInfo, key} = props;
    const {maker, varietal, year, type, price, dateTasted, imageUrl, reviews} = wineInfo;

    return (
        <div className="single-wine-container" key={key}>
            <img src={imageUrl} alt='wine bottle' />
            <h1>{maker}</h1>
            <h2>{varietal}</h2>
            <h2>{year}</h2>
            <h5>{type}</h5>
            <h5>$ {price/100}</h5>
            <h5>{dateTasted}</h5>
            <AllReviews reviews={reviews} />
        </div>
    )
}

export default SingleWine