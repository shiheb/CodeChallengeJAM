import ReactAudioPlayer from 'react-audio-player';
import React, { useState} from 'react';
import axios from 'axios';
import {Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

function Counter({ initialCount }, {id}) {
	const [identifier] = useState(id);
    const [count, setCount] = useState(initialCount);
    const [liked, setLiked] = useState(false);
	

	if(liked) {
		return < >

    <Button 
color="primary" size="md" className="mr-2" 
onClick={() => {
setCount(prevCount => prevCount -1);
setLiked(prevLiked => !prevLiked );


}}
>

{count}
<span role="img" aria-label="Like">👍</span>

</Button>

    <
    />;

	}

else

    return ( 
    	<>

        <Button 
      color="info" size="md" className="mr-2" 
      onClick={() => {
      	setCount(prevCount => prevCount + 1);
      	setLiked(prevLiked => !prevLiked );
					axios.post('https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', {
			    id: {identifier},
			   
			  })
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		


      }


      }>

      {count}
      <span role="img" aria-label="Like">👍</span>

      </Button>

        </>
    );
}


function Comment({ initialCount },{id}) {
    const [identifier] = useState(id);
    const [count, setCount] = useState(initialCount);
    const [newCommentModal, setNewCommentModal] = useState(false);
	const [value, setValue] = useState("");


  return ( <>
    <Button color="success" size="md" onClick={()=> {
        setNewCommentModal(true);
        }
        }> {count}
        <span role="img" aria-label="Comment">✍</span>
    </Button>
    <Modal isOpen={newCommentModal}>
        <Form>
            <FormGroup>
                <ModalHeader>Add Comment to the Song</ModalHeader>
                <ModalBody>
                    <Label for="exampleText">Comments</Label>
                    <Input type="textarea" name="comment" id="exampleText" placeholder="say something about the song" value={value} onChange={e=> setValue(e.target.value)} required />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=> {
                        setCount(prevCount => prevCount + 1);
                        setNewCommentModal(false);
                        axios.post('https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',
                        {
                        id: {identifier},
                        type: 'song',
                        message: {value},
                        })
                        .then(function (response) {
                        console.log(response);
                        })
                        .catch(function (error) {
                        console.log(error);
                        });
                        }
                        }>
                        Add Comment
                    </Button>{' '}
                    <Button color="secondary" onClick={()=> {
                        setNewCommentModal(false);
                        }
                        }>Cancel</Button>
                </ModalFooter>
            </FormGroup>
        </Form>
    </Modal>
</>
    );
}

const Tracks = ({ tracks , loading }) => {
	
	if(loading) {
		return <h2> Loading... </h2>;

	}


	return (
		<Table striped hover>
    <thead>
        <tr>
            <th> Title </th>
            <th> Duration </th>
            <th> Thumbnail </th>
            <th> Music Player </th>
            <th> Actions </th>
        </tr>
    </thead>
    <tbody>
        {tracks.map(track => (
        <tr key={track.id}>
            <td> {track.name}</td>
            <td> {track.duration}</td>
            <td> <img className="img-thumbnail rounded mx-auto mb-2 shadow-sm" src={track.cover_image_path} alt={track.name} style={{ width: "80px", height: "58px" }} />
            </td>
            <td>
                <ReactAudioPlayer src={track.music_file_path} controls />
            </td>
            <td>
                <Counter initialCount={track.likes} id={track.id} />
                <Comment initialCount={track.comments} id={track.id} />
            </td>
        </tr>
        ))}
    </tbody>
</Table>
				    );
	

};

export default Tracks;