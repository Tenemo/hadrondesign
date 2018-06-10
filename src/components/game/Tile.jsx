import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tile = (props = 2) => {
    console.log(props.type);
    let tileClass = classNames({
        tile: true,
        'inactive': props.type === 2,
        'active': props.type === 1
      });
    return (
        <div className={tileClass}>
            <div className="tileInside">
                <div className="front">{JSON.stringify(props.coords)}</div>
                <div className="back"></div>
            </div>
        </div>
    );
};

Tile.propTypes = {
    type: PropTypes.number.isRequired,
    coords: PropTypes.array.isRequired
};

export default Tile;