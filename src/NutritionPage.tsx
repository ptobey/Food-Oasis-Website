import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Paper } from '@mui/material'; 
import "./NutritionPage.css";

const NutritionPage: React.FC = () => {

  return (
    <Container sx ={{bgcolor: "lightgreen"}}>
     
      <Typography variant="h3" gutterBottom align={"center"}>
        Why eat Healthy?
      </Typography>
     
              <Typography variant="h4" align='center'>-Healthy Eating On A Budget-</Typography>


<div  style={{justifyContent: "center", display:"flex" }}>
<div   style=  {{overflow:"Hidden", maxWidth :  "635px", maxHeight:"350px", borderRadius: "25px"}}>
    <iframe 
    src="https://bit.ly/4eal1kJ"
    allow="autoplay; fullscreen; encrypted-media;"
      width = "20px"
  ></iframe> 
</div>
</div>


<Typography variant = "h6" align='center'>  by Kristin Bartholomew, Registered Dietitian/Nutritionist and Valencia Nutrition Professor.
</Typography>
<Typography variant="body1">
<Typography fontWeight={"bold"}>In the United States, </Typography>
we have an abundance of food. However, many individuals find it challenging to access healthy foods.
 In some areas, inexpensive, processed foods are the only option. Unfortunately, these foods are low nutrient quality with 
 plenty of calories that contribute to a range of health issues, including obesity and diet-related diseases. The situation 
 can be due to living in an area with limited access to whole, fresh foods. However, it could also be related to an area that 
 may have fresh foods but is oversaturated with ultra-processed foods. In these areas, the abundance of cheap, processed foods 
 can make it difficult for residents to make healthy choices, even when nutritious food is available. <br/>
 
 The marketing and pricing <br/>
 of unhealthy food in these areas often target community members, further contributing to poor health outcomes.
Moreover, deciphering nutrition messages can be a perplexing task in the social media era. While diet trends like keto and paleo 
may sound enticing, what about the healthcare professionals advocating for the {" "}


<a
                  href={
                    "https://www.health.harvard.edu/staying-healthy/guide-to-the-mediterranean-diet"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Mediterranean diet
                </a>
 {" "} or the {" "} 


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
<br/><br/>
<Typography fontWeight={"bold"}>The struggle </Typography>
to find and adhere to the best advice while {" "}

<a
                  href={
                    "https://www.myplate.gov/eat-healthy/healthy-eating-budget"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                managing a budget
                </a>

{" "}
and dealing with limited access to fresh produce is a stark reality for many. 
Healthcare professionals advocate for MyPlate and the Mediterranean-pattern diet because both promote balanced, nutritious eating that supports overall health. 

<br/> 
MyPlate is a visual guide to help individuals understand portion sizes and the importance of including various food groups—fruits, 
vegetables, grains, protein, and dairy—in their meals. Every food group contains vital nutrients. Diets that suggest eliminating 
entire food groups are a red flag for poor nutrition. When portion-controlled, whole, nutrient-dense food choices are consumed in 
each food group, MyPlate encourages healthy eating habits that prevent diet-related diseases.
<br/> <br/>


<Typography fontWeight={"bold"}>The Mediterranean-pattern diet, </Typography>



characterized by a high intake of fruits, vegetables, whole grains, legumes, healthy fats (like olive oil), 
and moderate consumption of fish and poultry, has been linked to numerous health benefits. One of the problems with the "Mediterranean Diet" is 
that we mistakenly believe that the foods eaten in the Mediterranean region are critical to this diet's success. However, any geographical region 
can apply the principles of this diet to improve their health. This is why we tend to refer to it as the Mediterranean-pattern diet. One can follow 
the pattern of whole, fresh fruits, vegetables, grains, and healthy fats with their own regional flare. Research shows it can reduce the risk of chronic diseases 
such as heart disease, diabetes, and certain cancers. Its emphasis on fresh, seasonal ingredients and a balanced approach to meals aligns with promoting 
longevity and well-being. <br/><br/>

<Typography fontWeight={"bold"}>When considering diet trends  </Typography>
promoted by social media, staying cautious and recognizing potential red flags is essential. The Mayo Clinic advises against 
diets that promise rapid weight loss, particularly those claiming more than 2 pounds lost per week, as these can be unrealistic and unhealthy. It is also important to be wary of diets that advocate eliminating food groups, 
such as carbohydrates since a varied diet is crucial for obtaining necessary nutrients. Additionally, many fad diets come with rigid rules, often mandating the purchase of expensive meal replacements or emphasizing the consumption of 
predominantly one type of food. Lastly, diets that severely restrict calorie intake may lead to weight loss. However, in the long run, it can lead to health problems. Research suggests the lower your calorie intake, the more your body hangs onto fat. 
The result is more muscle loss, which affects your health and body composition in the long term.<br/><br/>


<Typography variant= {"h6"} fontWeight={"bold"} textAlign={"center"}>What is the best approach, especially on a budget?</Typography> <br/>

<Typography variant ={"body1"} fontWeight={"bold"}>

  <Card sx={{bgcolor:"greenyellow"}}>
•	Buy frozen fruits and vegetables (with no sauces, salt, or sugar added). <br/>
Believe it or not, freezing helps maintain vitamins and minerals. <br/>
Plus, they don't deteriorate quickly like fresh ones do. This saves you money and how often you have to grocery shop.<br/>
</Card>
<br/>
<Card sx={{bgcolor:"greenyellow"}}>
•	Use lots of herbs and spices other than salt. 
They provide added benefits like antioxidants and phytochemicals that are healthy. You can grow your own in small 
pots on a balcony, porch, or outside your door.
</Card>
<br/>

<Card sx={{bgcolor:"greenyellow"}}>
•	Canned items are also beneficial. 

Choose fruits in its own juices and no-added-salt vegetables and beans (kidney, black, lima, etc). If low-sodium versions 
are not available, you can rinse them.
</Card>
<br/>

<Card sx={{bgcolor:"greenyellow"}}>
•	Choose whole-grain pasta, rice, and bread when possible.
</Card><br/>

<Card sx={{bgcolor:"greenyellow"}}>
•	Cook at home as often as you can.
</Card>
<br/>

<Card sx={{bgcolor:"greenyellow"}}>
•	Shop at local farmer's markets. <br/>
Grab a friend to go with and make it a fun event, especially if you need a ride there.
</Card>
 <br/>


</Typography>


           <Typography    variant='caption' >I live here. and no one notices...</Typography>
              </Typography>
    </Container>
  );
};



export default NutritionPage;
