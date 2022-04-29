const Tile = ({item, onDelete}) => {

  const handleDelete = () => {
    onDelete(item.id);
  }

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
    <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default Tile;
