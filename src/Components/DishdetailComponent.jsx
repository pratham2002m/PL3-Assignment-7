import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import React, { Component } from 'react'

export default class DishdetailComponent extends Component {
    render() {

        function renderComment(comments) {
            return <>
                <ul>
                    {
                        comments.map((comment, index) => (
                            <li key={index}>
                                <div >
                                    {comment.comment}
                                </div>
                                <div >
                                    -- {comment.author},{comment.date}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </>
        }

        return (
            <div className='row m-1 '>
                <div className='col-md-7 col-lg-7 col-sm-12 d-flex justify-content-center'>
                    <Card  id='card'>
                        <Card.Img variant="top" id='image' src={this.props.dish.image}/>
                        <Card.Body>
                            <Card.Title>{this.props.dish.name}</Card.Title>
                            <Card.Text>
                                {this.props.dish.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-5 col-lg-5 col-sm-12 text-start'>
                    <h4>Comments</h4>
                    <div className=''>
                    {renderComment(this.props.dish.comments)}
                    </div>
                </div>

            </div>
        )
    }
}
