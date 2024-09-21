import { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, TextField, Typography, Button, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecipePage = () => {
    const [recipes, setRecipes] = useState([] as unknown as any[]);
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const resultsPerPage = 18; // Adjust as necessary
    const navigate = useNavigate();

    const getRecipes = () => {
        axios.post(`http://localhost:5000/recipes/search/v3?format=json&search_expression=${value}&page_number=${pageNumber - 1}&max_results=${resultsPerPage}`)
            .then((response) => {
                setRecipes(response.data.recipes.recipe);
                setTotalResults(response.data.recipes.total_results);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
            });
    };

    useEffect(() => {
        if (value) {
            getRecipes();
        }
    }, [pageNumber, value]);

    return (
        <div style={{ padding: '24px' }}>
            <Typography variant="h4" style={{ marginBottom: '16px', textAlign: 'center' }}>
                FatSecret Recipe Search
            </Typography>
            <TextField
                id="outlined-basic"
                label="Search for recipes"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                    setValue(event.target.value.replace(/ /g, "%20")) 
                    setPageNumber(1)
                }}
                style={{ marginBottom: '16px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '24px' }}>
                {recipes && recipes.map((recipe, index) => (
                    <div key={index} onClick={() => navigate(`/recipe/${recipe.recipe_id}`)} style={{ cursor: 'pointer' }}>
                        <Paper 
                            elevation={3} 
                            style={{ 
                                padding: '16px', 
                                margin: '16px', 
                                borderRadius: '8px', 
                                width: '300px', 
                                textAlign: 'center',
                                height: '260px',
                                overflow: 'hidden'
                            }}
                        >
                            {recipe.recipe_image ? (
                                <img 
                                    src={recipe.recipe_image} 
                                    alt={recipe.recipe_name} 
                                    style={{ 
                                        maxWidth: '100%', 
                                        height: '150px', 
                                        objectFit: 'cover', 
                                        borderRadius: '8px' 
                                    }} 
                                />
                            ) : (
                                <img 
                                    src="/empty_image.png" 
                                    alt={recipe.recipe_name} 
                                    style={{ 
                                        maxWidth: '100%', 
                                        height: '150px', 
                                        objectFit: 'cover', 
                                        borderRadius: '8px' 
                                    }} 
                                />
                            )}
                            <Typography variant="h6" style={{ marginTop: '12px', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {recipe.recipe_name}
                            </Typography>
                            <Typography variant="body2" style={{ marginTop: '8px', color: '#555', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                {recipe.recipe_description}
                            </Typography>
                        </Paper>
                    </div>
                ))}
            </div>
            <Pagination
                count={Math.ceil(totalResults / resultsPerPage)}
                page={pageNumber}
                onChange={(event, value) => setPageNumber(value)}
                variant="outlined"
                shape="rounded"
                style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}
            />
        </div>
    );
};

export default RecipePage;
