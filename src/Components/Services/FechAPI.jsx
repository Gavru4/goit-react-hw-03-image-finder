// // KEY = "25285051-4b045d69a43564daa3e04547c";
// let PAGE = 1;

// function FechApi({ name }) {
//   // console.log(name);

//   return fetch(
//     `https://pixabay.com/api/?q=${name}&page=${PAGE}&key=25285051-4b045d69a43564daa3e04547c&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(new Error(`Запрос с именем ${name} не найден`));
//     })
//     .then((result) => {
//       this.setState({ status: "resolved" });
//     })
//     .catch((err) => {
//       this.setState({ status: "rejected" });
//     });
// }
// const api = {
//   FechApi,
// };

// export default FechApi;
