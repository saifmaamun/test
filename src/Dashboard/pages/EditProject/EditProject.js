import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from "axios";
import "@google/model-viewer/dist/model-viewer";
import './EditProject.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import skyboxImage from "./HDR_Free_City_Night_Lights/HDR_Free_City_Night_Lights_Ref.hdr";
import environmentImage from "./HDR_Free_City_Night_Lights/HDR_Free_City_Night_Lights_Env.hdr";
import handImage from "../../../images/Logo.webp";
// change
import { Rnd } from 'react-rnd';


const EditProject = () => {
    const { user, serverUrl } = useAuth();
    const history = useHistory();

    const { id } = useParams();
    const [project, setProject] = useState();
    const [model, setModel] = useState();
    const { link, setLink } = useState('')

    const [headline, setHeadline] = useState(true);
    const [headlineInput, setHeadlineInput] = useState('');


    const [logo, setlogo] = useState(false);
    const [logoInput, setlogoInput] = useState('');

    const [text, setText] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleHeadline = () => {
        setHeadline(true)
        setlogo(false)
        setText(false)
    }
    const handleLogo = () => {
        setHeadline(false)
        setText(false)
        setlogo(true)
    }
    const handleText = () => {
        setHeadline(false)
        setlogo(false)
        setText(true)
    }


    // change
// dummy data
    // 
    const headlines = [
        {
            id: 1,
            text: 'happy birthday'
        },
        {
            id: 2,
            text: 'good morning'
        },
        {
            id: 3,
            text: 'happy new year'
        }
    ]
    const logos = [
        {
            id: 1,
            text: 'logo 1'
        },
        {
            id: 2,
            text: 'logo 2'
        },
        {
            id: 3,
            text: 'logo 3'
        }
    ]
    const texts = [
        {
            id: 1,
            text: 'text 1'
        },
        {
            id: 2,
            text: 'text 2'
        },
        {
            id: 3,
            text: 'text 3'
        }
    ]


    //
    // 



    useEffect(() => {
        fetch(`${serverUrl}/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    useEffect(() => {
        if (project) {

            fetch(`${serverUrl}/projects/${id}`)
                .then(res => res.json())
                .then(data => setProject(data))
            fetch(`${serverUrl}/models/${project.Model_Id}`)
                .then(res => res.json())
                .then(data => setModel(data))
            // const url = `${serverUrl}/publishProject/${user.displayName}/${project.Project_Name}/glb`

        }
    }, [project])
    // console.log("project",project)
    // console.log("model",model)

    // publish link
    const url = `${serverUrl}/publishProject/${user.displayName}/${project ? project.Project_Name : ''}`

    return (

        <div className="row">

            <div className="col sidebar">
                <div><button onClick={handleHeadline}> heading</button> </div> <br />
                <div> <button onClick={handleLogo}> logo</button></div> <br />
                <div> <button onClick={handleText}> text</button> </div> <br />
            </div>



            <div className="col left">
                <input type="text" onChange={(e) => setHeadlineInput(e.target.value)} />
                {headline &&
                    <div  >
                        {
                            headlines.map(headline =>
                                // <Rnd
                                // minWidth={100}
                                // minHeight={190}
                                // bounds="window"
                                // >
                                // </Rnd>
                                <div
                                    key={headline.id}>
                                    {/* <button onClick={() => headTry(headline.id)}>{headline.text}</button> */}
                                    <button onClick={() => setHeadlineInput( headline.text )}>{headline.text}</button>
                                </div>
                            )
                        }
                    </div>}
                {logo &&
                    <div>
                        {
                            logos.map(logo =>
                                <div>
                                    <button onClick={() => setlogoInput(logo.text)}>{logo.text}</button>
                                </div>
                            )
                        }
                    </div>}
                {text &&
                    <div>
                        {
                            texts.map(text =>
                                <div >
                                    <p>{text.text}</p>
                                </div>
                            )
                        }
                    </div>}
            </div>
            <div className="col content ">

                <model-viewer
                    exposure="1"
                    style={{ width: '100%', height: '100vh' }}
                    src={model ? model.Resource_Url : ""}
                    ios-src=""
                    poster=""
                    alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    skybox-image={skyboxImage}
                    // environment-image={environmentImage}
                    // environment-image={environmentImage}
                    auto-rotate
                    ar
                >
                    <Rnd

                        bounds="window"
                    >
                        <div style={{

                            color: 'red',
                            position: "absolute",
                            left: "50%",
                            top: "0px"
                        }}>
                            <img src={handImage} alt="" />
                        </div>
                    </Rnd>
                    <Rnd

                        bounds="window"
                    >
                        <div style={{
                            color: 'yellow',
                            position: "absolute",
                            left: "75%",
                            top: "0px"
                        }}>

                            <h3>{logoInput} </h3>
                        </div>
                    </Rnd>
                    <Rnd

                        bounds="window"
                    >
                        <div style={{
                            color: 'white',
                            position: "absolute",
                            left: "75%",
                            top: "0px"
                        }}>
                            {/* {
                                headlineInput.map((head) =>
                                    (<h3>1 </h3>)
                                )
                            } */}
                            <h3>{headlineInput} </h3>
                        </div>
                    </Rnd>
                </model-viewer>
            </div>
            <div className="col right">

                <h2>want to share??</h2>
                <input className="input-text" type="text" name="Link" value={url} id="" /> <br />
                <button> <Link to="/presentation">Presentation</Link></button>
            </div>


        </div >
    );
};

export default EditProject;