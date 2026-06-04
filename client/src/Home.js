import React, { useState } from "react";

function Home() {

    const [showInput, setShowInput] = useState(false);
    const [resumeName, setResumeName] = useState("");

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (file) {

            setResumeName(file.name);

        }

    };

    return (

        <div className="container text-center mt-5">

            <h1 className="display-1 fw-bold">
                AI Resume Analyzer
            </h1>

            <p className="fs-2 mt-4">
                Upload Resume and Analyze Skills using AI
            </p>

            {!showInput ? (

                <button
                    className="btn btn-primary btn-lg mt-4"
                    onClick={() => setShowInput(true)}
                >
                    Upload Resume
                </button>

            ) : (

                <div>

                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="form-control mt-4"
                    />

                    {resumeName && (

                        <div className="card shadow p-5 mt-5">

                            <h1 className="fw-bold">
                                Uploaded Resume
                            </h1>

                            <h2 className="mt-5">
                                {resumeName}
                            </h2>

                            <h1 className="mt-5 fw-bold">
                                Skills Detected
                            </h1>

                            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">

                                <button className="btn btn-primary">
                                    HTML
                                </button>

                                <button className="btn btn-primary">
                                    CSS
                                </button>

                                <button className="btn btn-primary">
                                    JavaScript
                                </button>

                                <button className="btn btn-primary">
                                    React
                                </button>

                                <button className="btn btn-primary">
                                    Node.js
                                </button>

                                <button className="btn btn-primary">
                                    Python
                                </button>

                                <button className="btn btn-primary">
                                    Java
                                </button>

                            </div>

                            <h1 className="mt-5 fw-bold">
                                ATS Score
                            </h1>

                            <div className="progress mt-4" style={{ height: "25px" }}>

                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "98%" }}
                                >
                                    98%
                                </div>

                            </div>

                        </div>

                    )}

                </div>

            )}

        </div>

    );

}

export default Home;