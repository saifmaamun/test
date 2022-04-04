import React, { useState, useEffect } from 'react';
import { Form, ModelAddForm } from '../Models/Models.styled';
import { GrAttachment } from 'react-icons/gr';
import { useForm } from 'react-hook-form';

import axios from "axios";
import useAuth from '../../../hooks/useAuth';
import "./CreateProjects.css"
import { useHistory } from 'react-router-dom';

const CreateProjects = () => {
    const { user, serverUrl } = useAuth();
    const [models, setModels] = useState([])
    const history = useHistory();
    const categories = ["Animals & Pets",
    "Architecture",
    "Art & Abstract",
    "Cars & Vehicles",
    "Characters & Creatures",
"Cultural Heritage & History",
    "Electronics & Gadgets",
    "Fashion & Style",
    "Food & Drink",
    "Furniture & Home",
    "Music",
    "Nature & Plants",
    "News & Politics",
    "People",
    "Places & Travel",
    "Science & Technology",
    "Sports & Fitness",
    "Weapons & Military"
    ]

    useEffect(() => {
        fetch(`${serverUrl}/models/getAll`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                const added = data.filter(items => items.User_Id === user.uid)
                setModels(added)
            })
    }, [])
    // const [user, setUser] = useState("");
    const [project, setProject] = useState("");
    const [format, setFormat] = useState("");
    const [form, setForm] = useState({
        user: "",
        project: "",
        format: "",
    });

    const onChange = (value) => {
        setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setUser((prev) => form.user);
        setProject((prev) => form.project);
        setFormat((prev) => form.format);

        const userProject = {
            Name: user.displayName,
            User_Id:user.uid,
            Project_Name: form.project,
            Description:form.description,
            // Thumbnail: form.thumbnail,
            // Status: form.status,
            Model_Id: form.model
        };

        console.log(userProject);

        try {
            const res = await axios.post(
                `${serverUrl}/projects/create`,
                userProject
                );
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        alert('Created Project Successfully')
        history.push('/projects')
    };

    const uploadModel = () => {
        history.push('/addmodel')
    }


    return (
        <div>
            <h1>Create Project</h1>
            <ModelAddForm>

            
                <Form>
                    <div>
                <div>
                    <label htmlFor="user">User </label>
                            <div>
                                

                    <input
                        type="text"
                        id="user"
                        value={user.displayName}
                        />
                        </div>
                </div> <br />
                <div>
                            <label htmlFor="project">Project </label>
                            <div>

                    <input
                        type="text"
                        id="project"
                        value={form.project}
                        onChange={(e) => onChange({ project: e.target.value })}
                        />
                        </div>
                    </div> <br />
                <div>
                            <label htmlFor="description">Description </label>
                            <div>

                    <input
                        type="text"
                        id="description"
                        value={form.description}
                        onChange={(e) => onChange({ description: e.target.value })}
                        />
                        </div>
                </div> <br />
               
                <div>
                            <label htmlFor="userId">userId </label>
                            <div>

                    <input
                        type="text"
                        id="userId"
                        value={user.uid}
                        // onChange={(e) => onChange({ project: e.target.value })}
                        />
                        </div>
                </div> <br />
               
                <div>
                            <label htmlFor="model">Choose A Model </label>
                            <div>

                                <select
                                    className="inputFeild"
                        type="select"
                        id="model"
                        value={form.model}
                        onChange={(e) => onChange({ model: e.target.value })}
                        >
                        <option>--select an option--</option>
                        {
                            models.map((model) => (
                                
                                <option
                                key={model._id }
                                value={model._id}
                                id={model._id}
                                >{model.Model_Name}</option>
                                
                            ))
                        }
                    </select>
                            </div> <br />
                            <label htmlFor="model">Or  Upload A Model </label><br />
                            <button onClick={() => uploadModel()}>Upload Model</button>
                            
                </div> <br />
                
                {/* <div>
                    <label htmlFor="category">Category </label>
                    <select
                        type="select"
                        id="category"
                        value={form.category}
                        // onChange={(e) => onChange({ format: e.target.value })}
                    >
                        {
                            categories.map((category) => (
                                
                                <option value={categories[i]}>{name }</option>
                                
                            ))
                        }
                    </select>
                </div> */}
                
                <button onClick={handleSubmit} type="submit">
                    Create Project
                    </button>
                </div>
                </Form>
            </ModelAddForm>
        </div>
    );
};

export default CreateProjects;