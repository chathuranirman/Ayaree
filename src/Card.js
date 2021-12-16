import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from './data/db.json';


import './css/Card.css';


function Card({ src, title, description, price }) {



    return (


        data.map(
            (info) => {
                console.log(info.id);

                return (
                    <Col xs={12} md={4} key={info.id}>
                        <div className='card'>
                            <img className="card-img-top" src={info.image} alt="" />
                            <div className="card-body flex-column d-flex">
                                <h4 className="card-title">{info.title}</h4>
                                <p className="card-text">{info.desc}</p>
                                <h4 className="card-price mt-auto">{info.price}</h4>
                                {/* <a href="" class="btn btn-primary"></a> */}
                            </div>
                        </div>
                    </Col>
                )
            })





    )
}

export default Card