const Card = ({ title, content, Img }) => {
    return (
      <div className="card">
        <img src={Img}  alt="Img do card" />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;