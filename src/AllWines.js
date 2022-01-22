import sampleWines from "./sampleData";
import SingleWine from "./SingleWine";

const AllWines = () => {

    return (
        <div id='all-wines-container'>
            {sampleWines.map((el, idx) => {
                return (
                    <SingleWine
                        key={idx}
                        wineInfo={el}
                    />
                )
            })}
        </div>
    )
}

export default AllWines