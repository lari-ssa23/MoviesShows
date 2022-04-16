// imports
import React, { Component } from "react";
import axios from "axios";

// url base da API que estamos consumindo
const SeriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=af720c40d365a1532390dc044928ac3c&language=en-US&page=1"
});

class Series extends Component {
  state = {
    listSeries: [],
    filtroBusca:[]
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getSeries();
  }

  // Função que trás os dados da API
  getSeries = async () => {
    const response = await SeriesApi.get();
    console.log("Series:", response.data.results);

    const series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      listSeries: series,
      filtroBusca: series
    });
  };

  buscarSeries = (event) => {
    let { listSeries } = this.state;
    const seriesFiltradas = listSeries.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      filtroBusca: seriesFiltradas
    });
  };
  render() {
    return (
      <section>
        <div>
          <h2>SERIES</h2>
          <input
            onChange={this.buscarSeries}
            type="text"
            placeholder="Busque uma serie"
          />
        </div>

        <div>
          {this.state.filtroBusca.map((item, id) => (
            <div key={id}>
              <p>{item.name}</p>
              <p>{item.vote_average}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Series;
