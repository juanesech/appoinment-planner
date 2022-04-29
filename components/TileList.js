import Tile from "./Tile";

const TileList = ({objectArray, onDelete}) => {
  return (
    <div>
      {objectArray.map((item, index) => {
        return (
          <Tile
            item={item}
            key={index}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TileList;
