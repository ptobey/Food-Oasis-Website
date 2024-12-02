import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
  Card,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import "./NutritionPage.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";

const NutritionPage: React.FC = () => {
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(0);

  const handleHomeClick = () => navigate("/");
  const handleRecipeClick = () => navigate("/map");
  const handleNewButtonClick = () => navigate("/recipes");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.7)", padding: "8px 16px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/newLogo.png"
              alt="Logo"
              style={{ height: "75px", width: "auto", opacity: 0.85 }}
            />
            <ButtonGroup
              aria-label="horizontal button group"
              variant="text"
              sx={{
                color: "#FFFFFF",
                marginLeft: "16px",
                "& .MuiButton-root": {
                  transition: "all 0.3s ease-in-out",
                },
                "& .MuiButton-root:hover": {
                  backgroundColor: "#ffffff22",
                  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
                  color: "#FFFFAA",
                },
              }}
            >
              <Button
                onClick={handleHomeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Home
              </Button>
              <Button
                onClick={handleRecipeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Explore Map
              </Button>
              <Button
                onClick={handleNewButtonClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Search Recipes
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.5)",
          marginTop: "90px",
          flexGrow: 1,
          padding: "50px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "500",
            letterSpacing: "1px",
            color: "#000000",
            //fontFamily: "'Roboto', sans-serif",
          }}
        >
          Why Eat Healthy?
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontStyle: "normal",
            fontWeight: "500",
            color: "#000000",
            marginTop: "5px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Healthy Eating on a Budget
        </Typography>
        <div className="Victory" style={{ justifySelf: "center" }}>
          <img src=" ./woman_victory.png" alt="" width={"300px"} />
          <img src=" ./man_victory.png" alt="" width={"325px"} />
        </div>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            marginTop: "50px",
            fontStyle: "italic",
            fontWeight: "400",
            color: "#000000",
            letterSpacing: "0.5px",
          }}
        >
          By Kristin Bartholomew, <br />
          Registered Dietitian/Nutritionist and Valencia Nutrition Professor
        </Typography>
        <Typography fontWeight={"bold"} sx={{ marginTop: "20px" }}>
          In the United States,
        </Typography>
        we have an abundance of food. However, many individuals find it
        challenging to access healthy foods. In some areas, inexpensive,
        processed foods are the only option. Unfortunately, these foods are low
        nutrient quality with plenty of calories that contribute to a range of
        health issues, including obesity and diet-related diseases. The
        situation can be due to living in an area with limited access to whole,
        fresh foods. However, it could also be related to an area that may have
        fresh foods but is oversaturated with ultra-processed foods. In these
        areas, the abundance of cheap, processed foods can make it difficult for
        residents to make healthy choices, even when nutritious food is
        available. The marketing and pricing of unhealthy food in these areas
        often target community members, further contributing to poor health
        outcomes. Moreover, deciphering nutrition messages can be a perplexing
        task in the social media era. While diet trends like keto and paleo may
        sound enticing, what about the healthcare professionals advocating for
        the{" "}
        <a
          href={
            "https://www.health.harvard.edu/staying-healthy/guide-to-the-mediterranean-diet"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Mediterranean diet
        </a>{" "}
        or the{" "}
        <a
          href={
            "https://www.myplate.gov/app/shopsimple?utm_source=shop-simple&utm_medium=redirect&utm_campaign=desktop-redirect"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          USDA MyPlate
        </a>
        ?
        <br />
        <br />
        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          The struggle{" "}
        </Typography>
        to find and adhere to the best advice while{" "}
        <a
          href={"https://www.myplate.gov/eat-healthy/healthy-eating-budget"}
          target="_blank"
          rel="noopener noreferrer"
        >
          managing a budget
        </a>{" "}
        and dealing with limited access to fresh produce is a stark reality for
        many. Healthcare professionals advocate for MyPlate and the
        Mediterranean-pattern diet because both promote balanced, nutritious
        eating that supports overall health.
        <div id="header"></div>
        <br />
        MyPlate is a visual guide to help individuals understand portion sizes
        and the importance of including various food groups—fruits, vegetables,
        grains, protein, and dairy—in their meals. Every food group contains
        vital nutrients. Diets that suggest eliminating entire food groups are a
        red flag for poor nutrition. When portion-controlled, whole,
        nutrient-dense food choices are consumed in each food group, MyPlate
        encourages healthy eating habits that prevent diet-related diseases.
        <br /> <br />
        <img src=" ./MyPlate_blue.png" alt="" width={"350px"} />
        <br />
        <Typography variant="caption">
          image source:
          https://www.myplate.gov/resources/graphics/myplate-graphics
        </Typography>
        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          The Mediterranean-pattern diet,
        </Typography>
        characterized by a high intake of fruits, vegetables, whole grains,
        legumes, healthy fats (like olive oil), and moderate consumption of fish
        and poultry, has been linked to numerous health benefits. One of the
        problems with the "Mediterranean Diet" is that we mistakenly believe
        that the foods eaten in the Mediterranean region are critical to this
        diet's success. However, any geographical region can apply the
        principles of this diet to improve their health. This is why we tend to
        refer to it as the Mediterranean-pattern diet. One can follow the
        pattern of whole, fresh fruits, vegetables, grains, and healthy fats
        with their own regional flare. Research shows it can reduce the risk of
        chronic diseases such as heart disease, diabetes, and certain cancers.
        Its emphasis on fresh, seasonal ingredients and a balanced approach to
        meals aligns with promoting longevity and well-being. <br />
        <br />
        <div>
          <img src=" .\Meditarranean_Diet.jpg" alt="" width={"900px"} />
          <br />
          <Typography variant="caption">
            image source:
            <a
              href={
                "https://www.unisa.edu.au/media-centre/Releases/2023/the-mediterranean-diet-good-for-your-health-and-your-hip-pocket/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.unisa.edu.au/media-centre/Releases/2023/the-mediterranean-diet-good-for-your-health-and-your-hip-pocket/
            </a>
          </Typography>
        </div>
        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          When considering diet trends{" "}
        </Typography>
        promoted by social media, staying cautious and recognizing potential red
        flags is essential. The Mayo Clinic advises against diets that promise
        rapid weight loss, particularly those claiming more than 2 pounds lost
        per week, as these can be unrealistic and unhealthy. It is also
        important to be wary of diets that advocate eliminating food groups,
        such as carbohydrates since a varied diet is crucial for obtaining
        necessary nutrients. Additionally, many fad diets come with rigid rules,
        often mandating the purchase of expensive meal replacements or
        emphasizing the consumption of predominantly one type of food. Lastly,
        diets that severely restrict calorie intake may lead to weight loss.
        However, in the long run, it can lead to health problems. Research
        suggests the lower your calorie intake, the more your body hangs onto
        fat. The result is more muscle loss, which affects your health and body
        composition in the long term.
        <br />
        <br />
        {/* Budget Tips Section */}
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{
            color: "black",
            marginTop: "40px",
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          What is the Best Approach, Especially on a Budget?
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            {
              title:
                "Buy frozen fruits and vegetables (with no sauces, salt, or sugar added).",
              description:
                "Freezing helps maintain vitamins and minerals. Plus, they don't deteriorate quickly like fresh ones do, saving you money and reducing grocery trips.",
            },
            {
              title: "Use lots of herbs and spices other than salt.",
              description:
                "They provide antioxidants and phytochemicals that are healthy. You can even grow your own in small pots on a balcony or porch.",
            },
            {
              title: "Canned items are also beneficial.",
              description:
                "Choose fruits in their own juices and no-added-salt vegetables and beans. If low-sodium versions aren't available, you can rinse them.",
            },
            {
              title: "Choose whole-grain pasta, rice, and bread when possible.",
              description: "",
            },
            { title: "Cook at home as often as you can.", description: "" },
            {
              title: "Shop at local farmer's markets.",
              description:
                "Grab a friend to make it a fun event, especially if you need a ride there.",
            },
          ].map((tip, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "#E8F5E9",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                • {tip.title}
              </Typography>
              {tip.description && (
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  {tip.description}
                </Typography>
              )}
            </Card>
          ))}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <BottomNavigation
          showLabels
          value={navValue}
          onChange={(event, newValue) => setNavValue(newValue)}
          sx={{
            backgroundColor: "transparent",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BottomNavigationAction
            label="Need Help?"
            icon={
              <Tooltip title="Email us at guirirk@valenciacollege.edu" arrow>
                <HelpOutlineIcon />
              </Tooltip>
            }
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#FFFFFF",
              },
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ffffff22",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
                color: "#FFFFAA",
              },
            }}
          />
          
          <BottomNavigationAction
            label="Contact Us (407) 299-5000"
            icon={<PhoneIcon />}
            sx={{
              color: "#FFFFFF",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ffffff22",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
                color: "#FFFFAA",
              },
            }}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default NutritionPage;
