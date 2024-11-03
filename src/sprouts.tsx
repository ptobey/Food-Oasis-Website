//import { IFormattedJson } from "./interface";
const fs = require('fs');

 
  const jsonData = {
    
 
    
        "data": {
           
            
                "shops": [
                    {
                        "id": "515219",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "689-219-8967",
                        "fulfillment_option": "instore",
                        "address": {
                            "street_address": "2530 E Colonial Dr",
                            "city": "Orlando",
                            "state": "FL",
                            "postal_code": "32803",
                            "country_code": "US",
                            "latitude": "28.55301",
                            "longitude": "-81.35049",
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Orlando – Colonial Plaza (Store #642)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/orlando/642-orlando-colonial-plaza/"

                    },
                   
                    {
                        "id": "1616",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "407-702-1212",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "1989 Aloma Ave.",
                            "city": "Winter Park",
                            "state": "FL",
                            "postal_code": "32792",
                            "country_code": "US",
                            "latitude": "28.601145",
                            "longitude": "-81.32503",
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Winter Park (Store #616)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/winter-park/winter-park/"

                    },
                    {
                        "id": "358869",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "689-303-4690",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "12500 Lake Underhill Rd",
                            "city": "Orlando",
                            "state": "FL",
                            "postal_code": "32828",
                            "country_code": "US",
                            "latitude": "28.54575",
                            "longitude": "-81.20118"
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Orlando–Waterford Lakes Village (Store #651)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/orlando/lake-underhill-rd"

                    },
                    {
                        "id": "13341",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "321-340-2023",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "7603 Turkey Lake Rd. Suite 101",
                            "city": "Orlando",
                            "state": "FL",
                            "postal_code": "32819",
                            "country_code": "US",
                            "latitude": "28.4544317",
                                "longitude": "-81.4764715"
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Orlando – Dr. Phillips (Store #634)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/orlando/dr-phillips/"

                    },
                    {
                        "id": "32704",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "407-542-6070",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "1121 Alafaya Trail Suite 1091",
                            "city": "Oviedo",
                            "state": "FL",
                            "postal_code": "32765",
                            "country_code": "US",
                            "latitude": "28.6535047",
                            "longitude": "-81.2094974"
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Oviedo (Store #621)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/oviedo/oviedo/"

                    },
                    {
                        "id": "115658",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "689-336-2070",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "2283 E Semoran Blvd",
                            "city": "Apopka",
                            "state": "FL",
                            "postal_code": "32703",
                            "country_code": "US",
                            "latitude": "28.6750876",
                            "longitude": "-81.4685443"
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "Apopka (Store #646)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/apopka/646-apopka/"

                    },
                    {
                        "id": "277757",
                        "name": "Sprouts Farmers Market",
                        "retailer_key": "sprouts",
                        "phone_number": "352-706-2925",
                        "fulfillment_option": "pickup",
                        "address": {
                            "street_address": "330 Buena Vista Blvd.",
                            "city": "The Villages",
                            "state": "FL",
                            "postal_code": "32162",
                            "country_code": "US",
                            "latitude": "28.9269365",
                            "longitude": "-82.0039015"
                        },
                        "retailer_logo_url": "https://www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png",
                        "location_name": "The Villages (Store #650)",
                        "externalUrlString": "https://www.sprouts.com/store/fl/the-villages/buena-vista-blvd/"

                    }
                ]
            
   } };
    

  let arr = [];

  jsonData.data.shops.forEach((node) => {
    arr.push({
      address: {
        streetAddress: node.address.street_address,
        state: node.address.state,
        city: node.address.city,
        zip: node.address.postal_code,
      },
      hours: {
        Monday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 

        Tuesday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 
        
        Wednesday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 
        
        Thursday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 

        Friday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 

        Saturday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }, 
        
        Sunday:{
          open:"7:00 AM", 
          close:"10:00 PM"
        }
        
       },
      long: node.address.longitude,
      lat: node.address.latitude,
      phoneNumber: "(" + node.phone_number.replace(/-/,") "),
      type: "Sprouts",
      website: node.externalUrlString,
      lastUpdated: new Date().toLocaleDateString(),
      image: node.retailer_logo_url,

      
      
    });
  });

  console.log((arr));
 const jsonString = JSON.stringify(arr);
  fs.writeFileSync('sprouts.json', jsonString);


