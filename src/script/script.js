// API - это ссылка которая отдает данные с базы данных

// API - написан формате JSON

// http://localhost:3000/posts

// сделать fetch зарос на http://localhost:3000/posts эту ссылку

const API = `http://localhost:3000/posts`;

const content = document.querySelector("#content");

fetch(API) // специальный метод для http запросов GET
  .then((response) => {
    return response.json(); // JSON => object
  })
  .then((data) => {
    renderPosts(data);
  });

const renderPosts = (posts) => {
  posts.map((post) => {
    content.innerHTML += `
            <div class="post">
                <img src="${post.img}" alt="">
                <div>
                    <h2>${post.title}</h2>
                    <h2>${post.descr}</h2>
                </div>

                <div class="post__buttons">
                  <button class="btn-delete" id="${post.id}">DELETE</button>
                </div>

            </div>
        `;
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "btn-delete") {
    const id = e.target.id
    deletePost(id)
  }
});

const deletePost = (id) => {
  // Здесь нужно получить id 
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type" : "application/json"
    }
  })
}


// http post запрос почитать про это и подготовить краткое объяснение зачем это нужно и как это работает

// Добавьте в базу данных ещё три объекта
