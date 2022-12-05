import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import Card from 'react-bootstrap/Card'

import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    const info = [
        {
            "name": "Lê Cao Minh Trí",
            "img": "./images/ava1.png",
            "title": "Member",
            "description": "MSSV: 1915651."
        },
        {
            "name": "Đào Xuân Đạt",
            "img": "./images/ava1.png",
            "title": "Member",
            "description": "MSSV: 1911000."
        },
        {
            "name": "Dư Văn An",
            "img": "./images/ava1.png",
            "title": "Member",
            "description": "MSSV: 2012545."
        },
        {
            "name": "Nguyễn Phúc Vinh",
            "img": "./images/ava1.png",
            "title": "Member",
            "description": "MSSV: 1915940."
        }
    ]
    return (
        <>
            <Header></Header>
            <AboutPage>
                <Row xs={1} md={2} className="g-4">
                    {info.map((member, idx) => (
                        <Col key={idx} >
                            <Card>
                                <Card.Img variant="top" src={require(`${member.img}`)} />
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <p>Member</p>
                                    <Card.Text>{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </AboutPage>
            <Footer></Footer>
        </>
    );
};

const AboutPage = styled.div`
  width: 70%;
  margin: 40px auto;
`;

export default About;
