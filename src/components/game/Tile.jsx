import PropTypes from 'prop-types';
import classNames from 'classnames';
import { numToAlpha } from '../../helpers/helpers';

const Tile = ({type, coords, size, onMoveClick}) => {
    //console.log(onMoveClick);
    let tileClass = classNames({
        tile: true,
        'coords': type === 3 || type === 4,
        'inactive': type === 2,
        'active': type === 1,
        'flipped': type === 0
      });
    coords = numToAlpha(coords, size, type);
    return (
        <div className={tileClass}>
            <div className="tileInside">
                <div className="front" coords={coords} onClick={onMoveClick}>
                    {coords}
                </div>
                <div className="back" coords={coords} onClick={onMoveClick}>
                    {coords}
                </div>
            </div>
        </div>
    );
};

Tile.propTypes = {
    type: PropTypes.number.isRequired,
    coords: PropTypes.array.isRequired,
    size: PropTypes.number.isRequired,
    onMoveClick: PropTypes.func
};

export default Tile;