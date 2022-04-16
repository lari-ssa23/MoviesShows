// imports
import React, { Component } from "react";
import axios from "axios";

// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=af720c40d365a1532390dc044928ac3c"
});

class Movies extends Component {
  state = {
    listMovies: [],
    resultMovies: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getMovies();
  }

  // Função que trás os dados da API
  getMovies = async () => {
    const response = await MoviesApi.get();
    console.log("Filmes:", response.data.results);

    const Movies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      listMovies: Movies,
      resultMovies: Movies
    });
  };

  buscarFilmes = (event) => {
    let { listMovies } = this.state;
    const filterMovies = listMovies.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      resultMovies: filterMovies
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>FILMES</h2>
          <input
            onChange={this.buscarFilmes}
            type="text"
            placeholder="Buscar filme"
          />
        </div>

        <div>
          {this.state.resultMovies.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Movies;
