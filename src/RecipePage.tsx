import { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, TextField, Typography, Button, Pagination, Box } from '@mui/material'; // Import Box from @mui/material
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
        <div 
            style={{ 
                padding: '24px',
                backgroundImage: 'url(/backgroundThree.jpeg)', 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}
        >
            {/* Header Section */}
            <header 
                style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    padding: '32px', // Increased padding for a thicker header
                    height: '200px', // Adjust height
                    position: 'fixed', 
                    top: 0, 
                    width: '100%', 
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Centered Logo */}
                <Box>
                    <img
                        src="/logo.png" 
                        alt="Logo"
                        style={{ height: '200px', width: 'auto', opacity: 0.8 }} // Adjusted logo dimensions and opacity
                    />
                </Box>

                {/* Search Bar inside header */}
                <TextField
                    id="outlined-basic"
                    label="Search for recipes"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => {
                        setValue(event.target.value.replace(/ /g, "%20"));
                        setPageNumber(1);
                    }}
                    style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        maxWidth: '600px', // Adjust the width of the search bar
                        borderRadius:'8px', // Rounded corners for better visual appeal
                        border: '1px solid black', // Black outline for the search bar
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'black' // Optional: Make the label black as well
                        }
                    }}
                />
            </header>

            {/* Add some margin top to avoid content overlap with the header */}
            <div style={{ marginTop: '240px' }}> {/* Adjusted margin to account for header height */}
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
        </div>
    );
};

export default RecipePage;

