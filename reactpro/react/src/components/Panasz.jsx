/* eslint-disable react/prop-types */
const Panasz = (props) => {
  return (
    <>
      <div className='panasz'>
        <h2>{props.Panasznev}</h2>
        <p>{props.Panaszleiras}</p>
        <h3>{props.Bejelento}</h3>
        <p>
          <strong>{props.Datum}</strong>
        </p>

        <footer>
          <button onClick={props.Panasztorles}>Töreles</button>
        </footer>
      </div>
    </>
  );
};

export default Panasz;
