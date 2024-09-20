import { useState } from 'react';
import axios from 'axios';

const RecipePage = () => {
    const [accessToken, setAccessToken] = useState('');

    const getAccessToken = async () => {
            axios.post("http://localhost:5000/recipe-types/v2?format=json").then((response: any) => {
                setAccessToken(response.data.recipe_types.recipe_type[0]);
            });

    };

    return (
        <div>
            <h1>FatSecret API Access Token</h1>
            <button onClick={getAccessToken}>Get Access Token</button>
            {accessToken && (
                <div>
                    <h2>Access Token:</h2>
                    <p>{accessToken}</p>
                </div>
            )}
        </div>
    );
};

export default RecipePage;