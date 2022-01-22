

const SingleReview = props => {
    const {personInfo, key} = props;
    const {name, review} = personInfo;

    return (
        <div className="single-review-container" key={key} >
            <h5>{name}:</h5>
            <p>{review}</p>
        </div>
    )
}

export default SingleReview