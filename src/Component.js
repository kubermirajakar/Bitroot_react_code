import { useState } from "react";

export default function Component({ data }) {
  const [popup, setPopup] = useState(false);

  let posts = data.map((el) => {
    const date = new Date(el.date).getDate();
    let month = new Date(el.date).getMonth();
    if (month === 0) month = "Jan";
    const year = new Date(el.date).getFullYear();
    return (
      <>
        <div className="card">
          <img
            src={el.thumbnail.small}
            onClick={() => {
              setPopup(true);
            }}
            alt="i"
          />
          <span className="dot1"></span>
          <span className="dot2"></span>
          <h1 className="title">{el.title}</h1>
          <p className="content">{el.content}</p>
          <div className="cardfooter">
            <p className="name">
              {el.author.name} - {el.author.role}
            </p>
            <p className="date">{`${month} ${date},${year}`}</p>
          </div>
        </div>
      </>
    );
  });

  let [popups] = data.filter((el) => el.id === 1);

  let pop1 = popups && (
    <div
      className="popupcard"
      onClick={() => {
        setPopup(false);
      }}
    >
      <img className="img1" src={popups.thumbnail.small} alt="i" />
      <h1 className="title1">{popups.title}</h1>
      <p className="content">{popups.content}</p>
      <div className="cardfooter1">
        <img className="img2" src={popups.author.avatar} alt="i" />
        <p className="name1">
          {popups.author.name} - {popups.author.role}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="ímageContainer">
        <div className={`ímageContainer__1 ${popup ? "blur" : ""}`}>
          {posts}
        </div>
        <div className="popup">{popup && pop1}</div>
      </div>
    </>
  );
}

// {posts}
