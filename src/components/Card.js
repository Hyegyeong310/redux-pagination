import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function CardComponent() {
  const { post } = useSelector((state) => state.post);
  return (
    <Card style={{ width: "50rem", minHeight: 400 }} className="text-center">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>{post.createdAt}</ListGroup.Item>
          <ListGroup.Item>{post.createdAt}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
