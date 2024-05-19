const API = `http://localhost:3000/posts`;

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newData = {
    title: e.target[0].value,
    img: e.target[1].value,
    descr: e.target[2].value,
  };

  fetch(API, {
    method: "POST", // POST - для отправки данных
    headers : {
        "Content-type" : "application/json" // это нужно для того чтобы сервер и сайт понимали друг друга
    },
    body: JSON.stringify(newData) // переводим из {} = json формат
  });

});

// cd api
// json-server db.json