const Tile = ({item}) => {
  return (
    <div className='tile-container'>
      {Object.values(item).map((element, index) => {
        return (
          <p
            className={index === 0? 'tile-tittle': 'tile'}
            key={index}
          >{element}</p>
        );
      })}
    </div>
  );
}

export default Tile;
