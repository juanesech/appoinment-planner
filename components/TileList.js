import Tile from "./Tile";

const TileList = ({objectArray}) => {
  return (
    <div>
      {objectArray.map((item, index) => {
        return (
          <Tile
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default TileList;
