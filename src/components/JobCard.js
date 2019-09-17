import React from 'react'
import styled from 'styled-components'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom'

const CardWrapper =styled.div`
// display:flex;
// flex-direction: row;
// flex-wrap: wrap;
// justify-content: space-around;
margin: 2%;
width: 35%;
`

export default function JobCard(props){
    return (
    <CardWrapper>
        <div>
        <Card body outline color="primary">
        <CardTitle className='h3'>{props.title}</CardTitle>
        <CardText>{props.p_title} | {props.type}</CardText> <CardText>Location: {props.location}</CardText><CardText>Job Created: {props.created}</CardText>
        <Link to={`/Job/${props.id}`}><Button color="primary">Learn More</Button></Link>
        </Card>
    </div>
    </CardWrapper>
    )
}