import axios from "axios";

//Spring Boot API Config 
const URL ='http://localhost:8080';


const SignUp = (username, password, email, phone, age) => axios.post(URL+'/auth/signup', {username, password, email, phone, age});
const SignIn=(username,password)=>axios.post(URL+'/auth/signin',{username,password})



const Gamesx= () => axios.get(`${URL}/games`)
const GameView = (id) => axios.get(`${URL}/game/${id}`);
const GameDelete = (id) =>axios.delete(`${URL}/game/${id}`);
const GameUpdate = (id, updatedGame) => axios.put(`${URL}/game/${id}`, updatedGame);
const GameAdd =(addGame) => axios.post(`${URL}/game`,addGame);
const GameCover =()=> axios.get(`${URL}/game/coverurl1data`);
const GameCategoriesData = () => axios.get(`${URL}/gametypes`);
const GameCategoriesDataView = (gametype) => axios.get(`${URL}/game/categories/${gametype}`);



export{SignIn,SignUp,Gamesx,GameAdd,GameView,GameUpdate,GameDelete,GameCover,GameCategoriesData,GameCategoriesDataView}