import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <div className="titulo-app">
      <div className="row">
      <div className="col s4 left">
      <a><i class="medium material-icons my-color">chevron_left</i>
            </a>
      </div>
      <div className="col s4">
              <p className="grey-text my-text">
                Mi carrito
              </p>
      </div>
      <div className="col s4 right-align">
      <a><i class="medium material-icons red-text">delete</i>
            </a>
      </div>
      </div>
      </div>
      <div className="area-grid"> 
      <div className="col s6 m8 offset-m2 l6 offset-l3">
        <p className="large black-text center"><strong>Tienes 12 de 30 unid</strong></p>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 center">
              <img src={require("./images/mandarina.jpg")} />
            </div>
            <div className="col s3">
              <p className="grey-text my-text-detail">
                Mandarina
              </p>
              <p className="grey-text my-text-detail">
                frutas / verduras
              </p>
              <p className="green-text my-text-detail">
                <strong>$ 2.59/Kg</strong>
              </p>
            </div>
            <div className="col s2 right-align">
            <a><i class="medium material-icons my-color">remove_circle</i>
            </a>
            </div>
            <div className="col s1">
            <p className="black-text my-text" ><strong>5</strong></p>
            </div>
            <div className="col s2 left-align">
            <a><i class="medium material-icons orange-text">add_circle</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 center">
              <img src={require("./images/platano.jpg")} />
            </div>
            <div className="col s3">
              <p className="grey-text my-text-detail">
                platano
              </p>
              <p className="grey-text my-text-detail">
                frutas / verduras
              </p>
              <p className="green-text my-text-detail">
                <strong>$ 1.59/Kg</strong>
              </p>
            </div>
            <div className="col s2 right-align">
            <a><i class="medium material-icons my-color">remove_circle</i>
            </a>
            </div>
            <div className="col s1">
            <p className="black-text my-text" ><strong>5</strong></p>
            </div>
            <div className="col s2 left-align">
            <a><i class="medium material-icons orange-text">add_circle</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 center">
              <img src={require("./images/fruto_seco.jpg")} />
            </div>
            <div className="col s3">
              <p className="grey-text my-text-detail">
                Fruto seco
              </p>
              <p className="grey-text my-text-detail">
                frutas / confiteria
              </p>
              <p className="green-text my-text-detail">
                <strong>$ 11.59/Kg</strong>
              </p>
            </div>
            <div className="col s2 right-align">
            <a><i class="medium material-icons my-color">remove_circle</i>
            </a>
            </div>
            <div className="col s1">
            <p className="black-text my-text" ><strong>5</strong></p>
            </div>
            <div className="col s2 left-align">
            <a><i class="medium material-icons orange-text">add_circle</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 center">
              <img src={require("./images/papaya.jpg")} />
            </div>
            <div className="col s3">
              <p className="grey-text my-text-detail">
                Papaya
              </p>
              <p className="grey-text my-text-detail">
                frutas / verduras
              </p>
              <p className="green-text my-text-detail">
                <strong>$ 2.59/Kg</strong>
              </p>
            </div>
            <div className="col s2 right-align">
            <a><i class="medium material-icons my-color">remove_circle</i>
            </a>
            </div>
            <div className="col s1">
            <p className="black-text my-text" ><strong>5</strong></p>
            </div>
            <div className="col s2 left-align">
            <a><i class="medium material-icons orange-text">add_circle</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 center">
              <img src={require("./images/sandia.jpg")} />
            </div>
            <div className="col s3">
              <p className="grey-text my-text-detail">
                Sandia
              </p>
              <p className="grey-text my-text-detail">
                frutas / verduras
              </p>
              <p className="green-text my-text-detail">
                <strong>$ 9.59/Kg</strong>
              </p>
            </div>
            <div className="col s2 right-align">
            <a><i class="medium material-icons my-color">remove_circle</i>
            </a>
            </div>
            <div className="col s1">
            <p className="black-text my-text" ><strong>5</strong></p>
            </div>
            <div className="col s2 left-align">
            <a><i class="medium material-icons orange-text">add_circle</i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="footer-app">
      <div className="row">
      <div className="col s6 left-align">
        <p className="black-text total"><strong>Total</strong></p>
        <p className="black-text total"><strong>$140.00</strong></p>
      </div>
      <div className="col s6 right-align">
      <a class="btn-large green"><i class="small material-icons white-text right">chevron_right</i>Ir a Pagar</a>
      </div>
      </div>
      </div>
     </div>
    
  );
}

export default App;
