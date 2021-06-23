import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Libros from "./books.json";
import { useState } from "react";
import { Card } from "./components/cardComponents/Card";
import { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { IconButton, CardHeader } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Input from '@material-ui/core/Input'

class App extends Component {
  state = {
    busqueda: "",
  };

  renderLibros = (libro) => {
    const { busqueda } = this.state;
    var code = libro.id;

    return (
      <Card style={{ width: "250px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {libro.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Author: {libro.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Language: {libro.language}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Year: {libro.year}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="aLINK">
              <LinkIcon />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  };

  onchange = (e) => {
    this.setState({ busqueda: e.target.value });
  };

  render() {
    const { busqueda } = this.state;
    const filteredBooks = Libros.filter((libro) => {
      return libro.title.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1;
    });

    return (
      <div className={styles.principal}>
        <header>
          <h1 className={styles.title}>The Bookshelf</h1>
        </header>
        <main>
          <div className={styles.buscar}>
            <Input 
              placeholder="Search Book Title"
              icon="search"
              onChange={this.onchange}
            />
          </div>
          <ul className={styles.librosGrid}>
            {filteredBooks.map((libro) => {
              return this.renderLibros(libro);
            })}
          </ul>
        </main>
        <footer>
          <label>By:Irene Rojas</label>
        </footer>
      </div>
      
    );
  }
}

export default App;
