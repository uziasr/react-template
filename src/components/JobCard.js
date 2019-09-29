import React from 'react'
import styled from 'styled-components'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom'

const CardWrapper =styled.div`
margin: 2%;
width: 35%;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
}
`

export default function JobCard(props){
    return (
    <CardWrapper>
        <div>
        <Card body outline color="primary">
        <CardTitle className='h3'>{props.title}</CardTitle>
        <CardText>{props.p_title} | {props.type}</CardText> <CardText>Location: {props.locate}</CardText><CardText>Job Created: {props.created}</CardText>
        <Link to={`/Job/${props.job}-${props.city}-${props.id}`}{...props}><Button color="primary">Learn More</Button></Link>
        </Card>
    </div>
    </CardWrapper>
    )
}

