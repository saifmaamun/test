import React, { useState, useEffect } from 'react';
import { Form, ModelAddForm } from '../Models/Models.styled';
import { GrAttachment } from 'react-icons/gr';
import { useForm } from 'react-hook-form';

import axios from "axios";
import useAuth from '../../../hooks/useAuth';

const CreateProjects = () => {
    const { user, serverUrl, localUrl} = useAuth();
    const [models, setModels] = useState([])
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
        fetch(`${localUrl}/models/getAll`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setModels(data))
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
            user: user.displayName,
            project: form.project,
            format: form.format,
            model: form.model
        };

        console.log(userProject);

        try {
            const res = await axios.post(
                `${localUrl}/projects/create`,
                userProject
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Create Project</h1>
            <form>
                <div>
                    <label htmlFor="user">User </label>
                    <input
                        type="text"
                        id="user"
                        value={user.displayName}
                        // onChange={(e) => onChange({ user: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="project">Project </label>
                    <input
                        type="text"
                        id="project"
                        value={form.project}
                        onChange={(e) => onChange({ project: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="model">Models </label>
                    <select
                        type="select"
                        id="model"
                        value={form.model}
                    onChange={(e) => onChange({ model: e.target.value })}
                    >
                        <option>--select an option--</option>
                        {
                            models.map((model) => (

                                <option
                                    value={model.name}
                                    id={model._id}
                                >{model.name}</option>

                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="format">Format </label>
                    <input
                        type="text"
                        id="format"
                        value={form.format}
                        onChange={(e) => onChange({ format: e.target.value })}
                    />
                </div>
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
            </form>
        </div>
    );
};

export default CreateProjects;