import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//import routes from './routes';
import Line from '../Widgets/Line';
import Bar from '../Widgets/Bar';
import Pie from '../Widgets/Pie';
import Radar from '../Widgets/Radar';
import Area from '../Widgets/Area';
import Scatter from '../Widgets/Scatter';
import {Container, Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';


class Home extends Component {

  render() {
    return (
        <div className="Hom" style={{backgroundColor:"green"}}>
    	<h1>home first</h1>

        <main>
        <Container>
        <Row>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="line">
                    <Line />
                </div>
            </Col>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="bar">
                    <Bar />
                </div>
            </Col>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="pie">
                    <Pie />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="radar">
                    <Radar />
                </div>
            </Col>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="area">
                    <Area />
                </div>
            </Col>
            <Col xl="3" lg="4" md="5" xs="12">
                <div class="scatter">
                    <Scatter />
                </div>
            </Col>
        </Row>
        </Container>
        </main> 

        </div>
    );
  }
}

export default Home;

