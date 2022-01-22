import SingleReview from "./SingleReview";

const AllReviews = props => {
    const {reviews, key} = props;
    console.log('REVIEWS --- ', reviews)

    return (
        <div className="all-reviews-container" key={key}>
            {reviews.map((el, idx) => <SingleReview personInfo={el} key={idx} />)}
        </div>
    )
}

export default AllReviews