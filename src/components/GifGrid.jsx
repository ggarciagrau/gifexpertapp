import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { isLoading && <h2>Cargando...</h2> }
            <div className="card-grid">
                {
                    images.map(({ id, title, url }) => (
                        <GifGridItem 
                            key={id}
                            {...{title, url, id}}
                        />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}