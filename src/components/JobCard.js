import React from 'react'
import styled from 'styled-components'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const CardWrapper =styled.div`
// display:flex;
// flex-direction: row;
// flex-wrap: wrap;
// justify-content: space-around;
margin: 1%;
width: 35%;
`


export default function JobCard(props){
    return (
        // <div>
        //     <h1>{props.title}</h1>
        //     <p>{props.url}</p>
        //     {/* <p>Job Created: {props.created}</p> */}
        //     <p>Title: {props.p_title}, {props.type}, Location: {props.location}</p>
        //     {/* <p>Location: {props.location}</p> */}

        // </div>
         <CardWrapper>
             <div>
                <Card body outline color="success">
                <CardTitle>{props.title}</CardTitle>
                <CardText>Title: {props.p_title}, {props.type}, Location: {props.location}, Job Created: {props.created}</CardText>
                <Button color="primary">Apply</Button>
                </Card>
            </div>
         </CardWrapper>
    )
}