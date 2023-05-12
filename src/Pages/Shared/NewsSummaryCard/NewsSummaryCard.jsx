import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({ news }) => {
    const { image_url, details, total_view, author, title, _id , rating} = news;
    console.log(news);
    return (
        <Card className="">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author.img}
                        style={{ height: " 60px" }}
                    ></Image>
                    <div className='d-flex gap-2'>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='gap-2
                '>
                    <FaRegBookmark className='me-2'/>
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ? <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-2'/>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'/>
                        <span>{total_view}</span>
                    </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;