import { useState } from 'react';
import axios from 'axios';

const RecipePage = () => {
    const [accessToken, setAccessToken] = useState(null as unknown as any[]);

    const getAccessToken = async () => {
            axios.post("http://localhost:5000/recipe-types/v2?format=json").then((response: any) => {
                setAccessToken(response.data.recipe_types.recipe_type);
            });

    };

    return (
        <div>
            <h1>FatSecret API Access Token</h1>
            <button onClick={getAccessToken}>Get Access Token</button>
            {accessToken && accessToken.map((recipe, index) => (
                <p key={index}>{recipe}</p>
            ))}
        </div>
    );
};

export default RecipePage;