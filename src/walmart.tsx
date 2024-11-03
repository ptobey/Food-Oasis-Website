//import { IFormattedJson } from "./interface";
const fs = require('fs');


const getWalmartData = () => {
  const jsonData = {
    data: {
      nearByNodes: {
        nodes: [
          {
            id: "3162",
            distance: "1.84",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-241-4080",
            address: {
              addressLineOne: "2715 S Orange Ave",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32806",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1162146f-458d-4b84-b71e-817a9f281a77",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "749496b7-eb0b-4e94-8c19-cd0e6a2f6e75",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "92bcc1cf-787a-45ea-9368-b697bebdbd4c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "962a3086-a109-47a2-9f78-ccdb5828f2f3",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bee19186-921d-437b-9a19-9e2ab0dcd559",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "e895b186-6a73-4978-a97a-79ded3862595",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 1.84,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-241-4402",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-241-4080",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-241-4400",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-241-4402",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-241-4402",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-241-4402",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-241-4402",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.511893,
              longitude: -81.374947,
            },
          },
          {
            id: "4160",
            distance: "2.39",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-563-9069",
            address: {
              addressLineOne: "1101 S Goldwyn Ave",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32805",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "521f02bf-bd3d-4d16-89c4-7244598fec61",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "a265f245-9cb2-4328-a28d-b6bb5e1a9dbe",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "ce711912-6b88-44b0-a06e-3739c5eaf29a",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "db09d0d9-1cda-4b86-8832-a8774b706891",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ef3f8859-23f9-4a65-a988-44592d0e7cab",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 2.39,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-563-9147",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-563-9069",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-563-9147",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-563-9147",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-563-9147",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.527849,
              longitude: -81.416855,
            },
          },
          {
            id: "4588",
            distance: "3.25",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "321-354-2096",
            address: {
              addressLineOne: "3101 W Princeton St",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32808",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0946b59f-60b7-4b83-91c8-57f6d8db76e4",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "4caab9cf-cdd8-410c-b67a-e86caadfa0fc",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "583b368a-5443-4434-8a9c-bffb23361d5a",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "8fc11458-f7e3-4757-96e4-de543b3dea84",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "ac3e2fa3-70c6-499a-8970-0c3747b50f49",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b969967e-7d64-469b-a783-63ffe3dcefb0",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "c997f405-dd34-497c-a015-7d2b34b2b64e",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "d3e9ec1d-147a-493e-94fd-f8e7e7c43dca",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 3.25,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "321-354-2213",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "321-354-2096",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "321-354-2094",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "321-354-2215",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "321-354-2098",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Quest Diagnostic",
                name: "QUEST_DIAGNOSTICS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "321-354-2213",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "321-354-2213",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "321-354-2213",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "321-354-2213",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.571318,
              longitude: -81.417418,
            },
          },
          {
            id: "5871",
            distance: "4.54",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "321-247-4817",
            address: {
              addressLineOne: "5734 S Orange Blossom Trl",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32839",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "172267e4-d269-45af-ac87-6f7f7ee333bd",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "22428ddb-c2df-4514-938e-36c03db9e045",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "2c9a9908-e5e2-4a51-ba09-b86579d73b83",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "32eb94ae-6325-481f-8548-7f91970d939f",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "8dd38136-2498-4060-b183-6ab0fb225c6b",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "8f979de0-5917-4e38-95e6-a4591b520fed",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "b5726cce-41d8-477f-861c-b5f335344460",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d342d170-1d0e-47d6-bb92-fff51697981e",
                accessPointType: "PICKUP_BAKERY",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 4.54,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "321-247-4820",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "321-247-4822",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "321-247-4822",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "321-247-4817",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "321-247-4819",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "321-247-4820",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "321-247-4820",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "321-247-4820",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "321-247-4820",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.474913,
              longitude: -81.399118,
            },
          },
          {
            id: "1084",
            distance: "4.64",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Store",
            name: "Walmart",
            phoneNumber: "407-277-4314",
            address: {
              addressLineOne: "3838 S Semoran Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32822",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "37020543-7811-4f60-be11-f4fd4f40f4b3",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "6840e9c4-4c78-4d7c-92d4-0bc4506f7761",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "77c1f563-2194-4288-8657-caeb4874543f",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "8b85ac4b-9096-4d65-a9c3-6aa24016c9cb",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ad326fca-9fd2-4049-bb84-d0c764083fb3",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "c1151380-b8bc-4961-bf1f-81b99d515fb7",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 4.64,
            },
            services: [
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-277-4168",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-277-4314",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-277-0267",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-277-4168",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-277-4168",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-277-4168",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.504997,
              longitude: -81.312793,
            },
          },
          {
            id: "4197",
            distance: "4.65",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-204-8740",
            address: {
              addressLineOne: "902 Lee Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32810",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "006e016c-9b27-4a79-9534-5eed18430311",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "1a6d46db-6aa0-4609-a72a-0acfc97de527",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "6c8fcc70-c585-4ee5-8b8e-d66f89baaa4b",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "8cba896e-3511-4ea7-93cd-32f12d7ae5dd",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b3d2918d-de2c-40ee-a7b8-39bb76ff36d6",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "c0117b0b-269d-4248-8bd8-fd5956b89a96",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "ec928ba2-79cc-49c1-aa0e-ba42d087cb56",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 4.65,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-204-8739",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-204-8740",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-204-8739",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-204-8739",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-204-8739",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.604364,
              longitude: -81.394253,
            },
          },
          {
            id: "4142",
            distance: "4.94",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-563-9167",
            address: {
              addressLineOne: "4520 S Semoran Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32822",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "2d26a867-64de-4acc-acd8-c4d3bb34bdd6",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "2e366ae4-b00c-46f9-bf09-b2a1d027a887",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "8c81fe24-65c5-4ae1-9df8-d8080e9813d1",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "8d8e5044-1419-498d-9e30-8c916eb112b7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "992d3fe8-3e1d-4a73-b935-53eadf9e960d",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bd659b66-09df-4735-9633-0a8df204c5b2",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 4.94,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-563-9170",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-563-9167",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-563-9169",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-563-9170",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-563-9170",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-563-9170",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.498068,
              longitude: -81.311871,
            },
          },
          {
            id: "5988",
            distance: "5.02",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-551-5160",
            address: {
              addressLineOne: "2271 N Semoran Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32807",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "006372c5-1698-4645-be20-ab7a3d0a0230",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "93fb3273-2ea7-441a-b4cb-5fc4db202087",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "9f0a1e55-0414-4b7f-beee-d1bc8bae1230",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "a6a89276-d2c4-45c8-901e-6fa11b655f60",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "ce436c6e-9a5d-416f-8dc0-f369e13bb0db",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ef149d46-8d8e-4b90-96ad-37e59000c497",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 5.02,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-551-5162",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-551-5160",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-551-5162",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-551-5162",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-551-5162",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.576341,
              longitude: -81.308611,
            },
          },
          {
            id: "1220",
            distance: "5.31",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-290-6977",
            address: {
              addressLineOne: "2500 S Kirkman Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32811",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "37be1eb8-d942-433c-8e78-f3d9679161e1",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4929fe01-0473-4431-a61e-eb3290df63a2",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "522800b5-d0a8-4ae0-9a23-7720fa97a0bd",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "5ff254ff-f810-49f0-856f-5bbeac87ea40",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "9989a3fc-3b87-4157-a47f-eade3a512168",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "9df3fbaf-12a6-4a21-8472-e0e656e52a7f",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "a5a2a1c8-96db-468b-9b4b-f90fca4c22e4",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "dbe468cf-c29a-43ee-85d3-c1396b76ff7c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f410a6ea-b6ac-4011-9c59-fa712ef13d36",
                accessPointType: "ACC",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 5.31,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-297-9785",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-290-3414",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-563-3661",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-523-8088",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-523-0617",
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Axiom Bank",
                name: "AXIOM_BANK",
                phone: null,
              },
              {
                displayName: "Nail Port",
                name: "NAIL_PORT",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Cellairis",
                name: "CELLAIRIS",
                phone: null,
              },
              {
                displayName: "McDonald's",
                name: "MC_DONALDS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: "800-539-7571",
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-297-9785",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-297-9785",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-297-9785",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-297-9785",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.515447,
              longitude: -81.462833,
            },
          },
          {
            id: "5179",
            distance: "6.26",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-380-9971",
            address: {
              addressLineOne: "201 S Chickasaw Trl",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32825",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1a92a66d-1b28-4dbc-84c8-11fec61b95d3",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "309d06ec-c22f-49bc-89ba-9823ca3cdeca",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "7512e622-afca-4fd0-945a-ee1bdb17adeb",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "9678aecf-f652-4a03-9faf-9176381b67e9",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "c623cb24-697c-4ca8-a8e6-34ba6cecadf3",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "cb455331-ac6d-42ae-8c4f-6713ac40d50c",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 6.26,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-380-9724",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-380-9971",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "321-558-1730",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-380-9724",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-380-9724",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-380-9724",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.540487,
              longitude: -81.275996,
            },
          },
          {
            id: "4425",
            distance: "6.82",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-522-4552",
            address: {
              addressLineOne: "7818 Colonial West Drive",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32818",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "22e5ee2f-9636-4b62-bf11-f611893ec72c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "261f6576-d045-463b-ba3f-cc6319bb737b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "2d87357a-b532-40a3-8991-79b9e412b7c9",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "525e27d1-44d3-42c7-a423-4f898738087b",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "f412992c-aaf6-4188-867c-dfde1aec53de",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fe82bd7c-a5ca-4252-aa3f-77a12e77fd88",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 6.82,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-522-5107",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-293-0464",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-522-5107",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-522-5107",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-522-5107",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.550012,
              longitude: -81.490882,
            },
          },
          {
            id: "908",
            distance: "6.84",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-354-5665",
            address: {
              addressLineOne: "8101 S John Young Pkwy",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32819",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "27ef81e6-7eed-4563-bdc8-ea9a75834059",
                accessPointType: "ACC",
              },
              {
                accessPointId: "39246e35-b84b-4b2f-920d-59d38ef74487",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "45333fd5-876b-42e6-9e4a-718b2245b78f",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "69fbb4b6-1183-4cb3-b7c5-7cfa31b18912",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "8089278d-15cf-42c8-9e77-9bf94761d4eb",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "a06b1bd9-a284-4929-b13f-387d0808404d",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "a5031cb1-a655-4048-a86b-f71e8675b7f7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ce2340fc-2053-4294-8e07-ca8a67104d85",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "fde8adee-6352-4785-ac1d-fcffa200e533",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 6.84,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-354-5474",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "321-354-2284",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-354-3313",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-354-2203",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-354-2492",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-354-1238",
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Budget Truck Rental",
                name: "BUDGET_TRUCK_RENTAL",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-354-5474",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-354-5474",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-354-5474",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-354-5474",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-354-5474",
              },
              {
                displayName: "Esports Arena",
                name: "ESPORTS_ARENA",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-363-4468",
              },
              {
                displayName: "iFixandRepair",
                name: "IFIXANDREPAIR",
                phone: null,
              },
              {
                displayName: "McDonald's",
                name: "MC_DONALDS",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.447665,
              longitude: -81.424513,
            },
          },
          {
            id: "4211",
            distance: "6.85",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-294-7276",
            address: {
              addressLineOne: "5559 Clarcona Ocoee Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32810",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1427358e-6e4b-46f0-9270-967ceae1b78c",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "429cdfd5-7c20-4491-ac49-a35dddd8fdde",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4b06186b-315a-4beb-8097-152e46e7d938",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "4cd52d5f-2b83-42e8-918c-7599e14abede",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "70d2a28f-94d5-4dfe-8a72-ca001af2b2e0",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "9eb533a0-a620-47bd-a23b-ec11888d713d",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 6.85,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-294-7176",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-294-7276",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-294-7176",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-294-7176",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-294-7176",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.612496,
              longitude: -81.454284,
            },
          },
          {
            id: "3782",
            distance: "7.16",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-382-8880",
            address: {
              addressLineOne: "5991 S Goldenrod Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32822",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "23420f80-e94c-41cb-a19f-8ee7184c43b1",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "352ca3ad-bf65-4c11-91f4-c1cc19690c6a",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "3ab3e85c-4239-4184-a028-70d6aaeae840",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "69791b39-b88c-438a-a47d-1f83f96b2dcd",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "6c70134d-b5a8-490e-a5dd-5aee9cc17aee",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "6f910b11-d3ff-4651-bab3-bb5f92f45263",
                accessPointType: "ACC",
              },
              {
                accessPointId: "71dece6e-02b5-4dd6-bc7f-0b12047ea314",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "8736672c-95b4-4b46-b8de-f3d6863a3ea8",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fbc92c32-ace2-43cf-bb31-657b89f7187c",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 7.16,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-382-8383",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-382-8552",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-382-8552",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-382-8515",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-382-8511",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-382-8969",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-382-1633",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-382-8909",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-382-8383",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-382-8383",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-382-8383",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.473815,
              longitude: -81.286894,
            },
          },
          {
            id: "943",
            distance: "7.5",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Casselberry Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-679-0377",
            address: {
              addressLineOne: "1239 State Road 436 Ste 101",
              addressLineTwo: null,
              state: "FL",
              city: "Casselberry",
              postalCode: "32707",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "46559859-c02c-47af-9141-9181ea9593fb",
                accessPointType: "ACC",
              },
              {
                accessPointId: "4c179372-2f85-4fce-8401-5b3628c7a851",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "8407b98b-7845-4c00-aa0e-4d0c1c2eb3b2",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d191ac3d-ff37-4408-938a-158273f38791",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "e0b3a3d5-12cc-4fa2-b3de-5cf1194ed86c",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "e56ed067-fb73-4204-894c-7fc8746ee157",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f16a1186-d70f-4cc4-a352-00a6efc9818b",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "f253a75d-d492-4196-a10d-3e556af437bf",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "fe4567d6-9e06-46d7-bc37-844fd0d3651c",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 7.5,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-679-0373",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-671-4161",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-671-4161",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-679-2721",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-679-1185",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-671-1091",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-679-1908",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-677-7813",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-671-1134",
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "McDonald's",
                name: "MC_DONALDS",
                phone: null,
              },
              {
                displayName: "Quest Diagnostic",
                name: "QUEST_DIAGNOSTICS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: "800-539-7571",
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-679-0373",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-679-0373",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-679-0373",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-679-0373",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.635337,
              longitude: -81.323396,
            },
          },
          {
            id: "5741",
            distance: "7.55",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-845-6531",
            address: {
              addressLineOne: "9047 Curry Ford Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32825",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0c3207e4-d2b7-438b-84ef-752b78466ac4",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "12fc5e29-795c-4c64-be72-6fc06fad7d39",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "95035d76-8655-4ae9-be7f-d15f7d237219",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b678ecb9-957d-4c79-ab55-abcf189407b9",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "e63d4cb0-1738-4ea2-bcc9-0c88e8ffff53",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 7.55,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-845-6530",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-845-6531",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-845-6530",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-845-6530",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-845-6530",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.511211,
              longitude: -81.258603,
            },
          },
          {
            id: "2499",
            distance: "8.27",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-605-4001",
            address: {
              addressLineOne: "8801 Conroy Windermere Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32835",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "9d76e44b-0058-46f9-a778-ba38b6643cbb",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "b159aa49-8ae5-4a90-86ff-9bf685565942",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d9bda3e3-d766-4cc4-9171-7c90d8a732bc",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f8d02ef4-799b-41ea-87b0-7010dae42197",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "fbb07403-85a5-4a57-8ffe-eae3132798b6",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 8.27,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-605-4006",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-605-4001",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-605-4003",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-605-4006",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-605-4006",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-605-4006",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.495775,
              longitude: -81.506571,
            },
          },
          {
            id: "1374",
            distance: "8.77",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Altamonte Springs Store",
            name: "Walmart",
            phoneNumber: "407-774-9966",
            address: {
              addressLineOne: "200 S State Road 434",
              addressLineTwo: null,
              state: "FL",
              city: "Altamonte Springs",
              postalCode: "32714",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "200e9ee4-571c-481b-873d-82eb9c302c8e",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "3f7cc46e-187f-4af7-8205-222ad59368f3",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "569ec35f-e562-436f-ac9c-dbceabd33d00",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "b953b2e0-dc80-4a5b-9a13-9a9878b01dbe",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "cd02b8cb-07d5-4045-a68f-d87c65938ea5",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fd934bec-6b53-4db3-9d11-e650d5c61a74",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 8.77,
            },
            services: [
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-774-6255",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-774-9966",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-774-1282",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-774-6255",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-774-6255",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-774-6255",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-774-6255",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.659976,
              longitude: -81.421135,
            },
          },
          {
            id: "4332",
            distance: "9",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-351-2229",
            address: {
              addressLineOne: "8990 Turkey Lake Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32819",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0e4f7360-4658-4211-b994-f6e3dc03ce15",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "212546de-03f5-4ca5-8cb5-cd96fc44bbb7",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "4a3091a3-3755-4989-87ee-cdfdea5a7d6f",
                accessPointType: "ACC",
              },
              {
                accessPointId: "71b48af8-1bcf-4b35-acdb-11dc5793426b",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "bee09b3b-aed3-4eba-960e-c5922e5018ae",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "c69af2de-7de3-45cd-90d1-e806ad84be93",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ddc19e4a-2f0a-46cf-a1b1-e69e411a4e99",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "e03e5e62-1bac-40bb-b186-6d19b08c1d6c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f2867dca-3e72-49cb-ad4d-58d177a2d374",
                accessPointType: "PICKUP_BAKERY",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-351-2191",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-351-2307",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-351-2307",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-351-2229",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-351-2827",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-351-4142",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-351-2994",
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Da-Vi Nails",
                name: "DA_VI_NAILS",
                phone: null,
              },
              {
                displayName: "McDonald's",
                name: "MC_DONALDS",
                phone: null,
              },
              {
                displayName: "Cellairis",
                name: "CELLAIRIS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-351-2191",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-351-2191",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-351-2191",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-351-2191",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-351-2191",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.439871,
              longitude: -81.476496,
            },
          },
          {
            id: "5894",
            distance: "9.04",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Oviedo Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-618-5013",
            address: {
              addressLineOne: "5511 Deep Lake Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Oviedo",
              postalCode: "32765",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0103a7fd-a2a8-45e8-9d78-aac8c704e757",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "18a815cd-b786-4e54-b643-f6aa56c9d1f1",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "488eda83-0823-4ecf-9cbb-8f8135ce9581",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "bf522de4-7779-4a3a-9c51-ed74e8372855",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "cf30a7e9-c00f-4b94-91a2-cfb422c5b47b",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "d54eb81f-12e5-462f-8dde-ec603630e975",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "e76a36e4-d0b6-47ab-a9a2-ebca0e153323",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9.04,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-618-2622",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-618-5018",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-618-5018",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-618-5013",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-618-2624",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-618-2622",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-618-2622",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-618-2622",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.617165,
              longitude: -81.260129,
            },
          },
          {
            id: "942",
            distance: "9.32",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Ocoee Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-877-6900",
            address: {
              addressLineOne: "10500 W Colonial Dr",
              addressLineTwo: null,
              state: "FL",
              city: "Ocoee",
              postalCode: "34761",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1b27b117-3326-4ab3-b56c-c7031b3d6e08",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "22afb0b4-51be-4d44-a770-9ff72b3f46e6",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "234c15d4-22ab-40fe-9250-ef89b3e4b604",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "2bba7b74-0537-47bd-b5d3-8c6b8cfed116",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "476ac2bd-778e-44e4-9bf2-fd90d7151b37",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "933e58d1-86ed-4c26-bd48-79f93fede74d",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b1cf838d-13aa-483b-b3dc-3a7f6835179e",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b7676c32-6923-40cc-9439-3006eff29b6e",
                accessPointType: "ACC",
              },
              {
                accessPointId: "dfbe1a32-f7e9-46bb-b708-8bf23f7c1fe7",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9.32,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-877-6910",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-877-6561",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-877-6561",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-877-6900",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-877-2924",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-877-4049",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-877-0155",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-877-9440",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-654-7075",
              },
              {
                displayName: "Budget Truck Rental",
                name: "BUDGET_TRUCK_RENTAL",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-877-6910",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-877-6910",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-877-6910",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-877-6910",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-877-6910",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.549566,
              longitude: -81.532407,
            },
          },
          {
            id: "955",
            distance: "9.43",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Apopka Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-889-8668",
            address: {
              addressLineOne: "1700 S Orange Blossom Trail",
              addressLineTwo: null,
              state: "FL",
              city: "Apopka",
              postalCode: "32703",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "16ab9d32-6769-4bf0-bd99-2ae3ef21146e",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "46161bfd-0f4b-42d9-a4e3-26bfc5fb873d",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "764a7342-1423-49b5-8b52-9b5b54e0189a",
                accessPointType: "ACC",
              },
              {
                accessPointId: "87398c74-38bc-4194-87b9-76ef5eb81688",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "ac496e7a-48f6-42b9-9d6e-16c119473533",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b39404f2-b4ea-4abf-b487-5caab9fa30aa",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "f1a29393-5bf3-457c-b8c6-ded20df3eeca",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fa546ac2-8316-4ec9-a61f-e35e77e8a092",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fc8608ed-3104-473f-9a98-9c2d4917e223",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9.43,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-889-7707",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-889-9709",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-889-9709",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-889-2473",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-889-5765",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-889-3255",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-889-3025",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-889-8956",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Fed Ex",
                name: "FED_EX",
                phone: "407-358-7220",
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-889-7707",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-889-7707",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-889-7707",
              },
              {
                displayName: "Licensed Insurance Agent",
                name: "INSURANCE_SERVICES",
                phone: "407-889-8668",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-889-7707",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-889-7707",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.649608,
              longitude: -81.469306,
            },
          },
          {
            id: "5132",
            distance: "9.77",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Winter Springs Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-699-7050",
            address: {
              addressLineOne: "5216 Red Bug Lake Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Winter Springs",
              postalCode: "32708",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "3daad016-278b-4bc3-abe7-3e2ece443824",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "823bfc26-b292-4b70-afd9-8e33e28774b0",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "8da180bf-0631-41af-893a-42c9303c2531",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ab22a3a2-f52e-47b5-96dd-8a739a89d987",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b3fc3705-284b-4139-b81c-adc34243b266",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "eb368eee-1cf0-4063-ba35-2b492c03a526",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9.77,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-699-7055",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-699-7050",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-699-7055",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-699-7055",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-699-7055",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.648605,
              longitude: -81.278136,
            },
          },
          {
            id: "890",
            distance: "9.97",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-281-8941",
            address: {
              addressLineOne: "11250 E Colonial Dr",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32817",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "2444a681-ff09-4091-86f3-d4612fb32fa2",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "2b448020-debb-48af-8b9c-90e9a56d5fff",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "331a198f-9e85-4816-867d-ab52ae52e5da",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4a366c9a-a001-43c6-a274-5c4731daf81b",
                accessPointType: "ACC",
              },
              {
                accessPointId: "79be7583-3ee9-4fcb-9f76-6a38b12fca7d",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "8f23dba3-aaf3-40a7-9ced-b6b6a83fe1a8",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "c83b3cd1-3c98-4088-abf3-f679f410e285",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "eff6f9a1-9fb5-4dbf-bc81-6da69c6859d8",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "f20832da-9a9a-4d44-8dbd-fd46d8b456f5",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 9.97,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-281-8905",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-482-5557",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-482-5557",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-281-8941",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-482-4433",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-482-5550",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-482-4407",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-482-4939",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-281-8905",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-281-8905",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-281-8905",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-281-8905",
              },
              {
                displayName: "Da-Vi Nails",
                name: "DA_VI_NAILS",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "McDonald's",
                name: "MC_DONALDS",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.565997,
              longitude: -81.217893,
            },
          },
          {
            id: "6894",
            distance: "10.27",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Apopka Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-457-6291",
            address: {
              addressLineOne: "820 Balmy Beach Dr",
              addressLineTwo: null,
              state: "FL",
              city: "Apopka",
              postalCode: "32703",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "03c11e8c-d2b9-4873-be77-d98953b31b1b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "384b6f32-84e5-4155-a116-dee791d4de41",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "3f4ebeaf-d69d-4875-8b25-fa69f30dab03",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "92b6b954-46b8-4db5-90f7-f7095becb2df",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "cf809a29-5099-4775-9b4d-2e8623408225",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "f6f93baa-0127-41c6-b50c-446967882194",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 10.27,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-457-6293",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: "407-551-0638",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-457-6291",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-457-6297",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-457-6293",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-457-6293",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-457-6293",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.670684,
              longitude: -81.45652,
            },
          },
          {
            id: "3617",
            distance: "10.32",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-380-0384",
            address: {
              addressLineOne: "600 S Alafaya Trl",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32828",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0b45a68c-db90-4d6f-a51f-6b89aebf8ece",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "4ee9015d-e894-4a93-ad35-b0eb4e94e6c8",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "51ed71a5-6ec3-4529-874b-74ef0c7b073f",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "9a4bf6ee-aa4a-44fe-a266-3ef59928625c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b451537a-42c9-4700-b222-35630a62dafd",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 10.32,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-380-0546",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-380-0384",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-380-0546",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-380-0546",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-380-0546",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.536161,
              longitude: -81.209114,
            },
          },
          {
            id: "5875",
            distance: "10.88",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-541-1273",
            address: {
              addressLineOne: "12550 S Orange Blossom Trl",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32837",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "56d2a46f-bf1c-4458-91a2-affa73416a0c",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "9543b1fa-bcba-4568-ac9f-19da161d4f42",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ade92dc9-fdd3-40bd-a9e5-6e9939a4f8e5",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "e595a82f-f09d-473f-9f1b-a706ffcfab23",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "f48a694d-d8fa-4b29-9ee2-e22d4c1632d6",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 10.88,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-541-1270",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-541-1273",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-541-1276",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-541-1270",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-541-1270",
              },
              {
                displayName: "Licensed Insurance Agent",
                name: "INSURANCE_SERVICES",
                phone: "407-541-1273",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-541-1270",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.382506,
              longitude: -81.406268,
            },
          },
          {
            id: "5106",
            distance: "11.54",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Oviedo Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-359-6707",
            address: {
              addressLineOne: "4255 Alafaya Trl",
              addressLineTwo: null,
              state: "FL",
              city: "Oviedo",
              postalCode: "32765",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1c3fd2e3-7226-437f-b9e4-bc8f48ec2eaf",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "5042538c-7c39-43b7-bd9b-1a157dddcf27",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "8a7eb4f2-7952-46a9-9453-210dc854bf2b",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "b6f04ade-7214-4aee-9449-53554f5b2378",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ca490e30-e66a-458c-9b78-31cdb385a266",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 11.54,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-359-6989",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-359-6707",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "321-348-3047",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-359-6989",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-359-6989",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-359-6989",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.613362,
              longitude: -81.209084,
            },
          },
          {
            id: "6149",
            distance: "11.93",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-723-4435",
            address: {
              addressLineOne: "13801 Landstar Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32824",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "58a4d0ed-c785-409f-a3d4-a8290f198a4b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "63412448-174e-48de-85ff-e5bfea2d6db2",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "64f4ce8d-f779-465b-bb09-3470efae85fe",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "760bdd07-b249-478f-97b6-4199860c703a",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "a6ee7f25-d4fe-4997-b0a6-af033b5eaa50",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 11.93,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-723-4446",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-723-4435",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-723-4445",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-723-4446",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-723-4446",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-723-4446",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.366009,
              longitude: -81.364767,
            },
          },
          {
            id: "4365",
            distance: "12.96",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-204-2039",
            address: {
              addressLineOne: "11930 Narcoossee Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32832",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0cd1ea6b-ee4e-491f-a7b4-3869fc1c1c37",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "260145ac-e1e9-43ba-83cd-dce586384ec7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "3bf0ff1f-7a3f-44e9-a6b7-6a4b78d5f3df",
                accessPointType: "ACC",
              },
              {
                accessPointId: "8a3dd5e5-5737-4c18-9719-825e7eda372b",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "8fd21123-42ee-40a3-96c5-eba148ca41d9",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "c741ad70-cae7-4a33-b539-8ad071ca6c9e",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "d40a544e-e0af-47ff-b2ad-fc03de2afe51",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f6ed558e-bdf0-4bb8-94c3-cedab3f481b4",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 12.96,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-204-2026",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-204-2034",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-204-2034",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-204-2039",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-204-2031",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-204-2032",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-204-2033",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-204-2035",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Cellairis",
                name: "CELLAIRIS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-204-2026",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-204-2026",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-204-2026",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-204-2026",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.389851,
              longitude: -81.248596,
            },
          },
          {
            id: "2881",
            distance: "13.44",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-870-2277",
            address: {
              addressLineOne: "1471 E Osceola Pkwy",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34744",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0d8a9104-d992-4fa1-b20f-3575fc68828d",
                accessPointType: "ACC",
              },
              {
                accessPointId: "16d722f5-05c6-4e2a-b653-bc6b68707063",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "227f2fbb-5cf4-4507-a8b4-d1a6d7a5c4df",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4f20b685-afdb-42f0-a2b7-f151c4944281",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "6b931ca4-8c58-4a84-be99-136dba4366d6",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "9add2336-4332-44ed-ad89-3488e8916e99",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "9dd9ae0e-0f4c-4b7b-a540-875e72251cc7",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "cbe4718e-22ed-401c-b4f2-e78ca0542fea",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "f6932b98-95c3-48d6-b81b-79ce0031960c",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 13.44,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-870-2235",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-870-2142",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-870-2142",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-870-1978",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-870-5021",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-870-0053",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-870-9944",
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Axiom Bank",
                name: "AXIOM_BANK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Churromania",
                name: "CHURROMANIA",
                phone: null,
              },
              {
                displayName: "Budget Truck Rental",
                name: "BUDGET_TRUCK_RENTAL",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-870-2235",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-870-2235",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-870-2235",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-870-2235",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.343836,
              longitude: -81.386087,
            },
          },
          {
            id: "4159",
            distance: "13.92",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-552-0029",
            address: {
              addressLineOne: "2850 E Osceola Parkway",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34743",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "4d3e3252-9c7d-4460-b7a1-abe7761d0aad",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "7ef7e0c4-2cd3-45c7-94bc-5fd222476647",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "81ddf73c-2d78-4825-8584-caf208baf1a0",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "cf3af0a5-9502-4523-8c3e-6495503a8068",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "e4020127-5cd0-41f8-9a55-d0474ef70b1b",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 13.92,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-552-0036",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-552-0029",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-552-0055",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-552-0036",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-552-0036",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "407-552-0036",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-552-0036",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.341743,
              longitude: -81.328767,
            },
          },
          {
            id: "3817",
            distance: "13.97",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orlando Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-207-0071",
            address: {
              addressLineOne: "433 Avalon Park South Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Orlando",
              postalCode: "32828",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "168601f2-2495-423c-a21e-a805cd9a34c5",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "382fe61e-72c9-483f-b2b7-49cbbb0dc0dd",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "839cc439-ebb5-445a-893e-589ecb6fc417",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bfc982dc-57eb-4795-aff1-1cd43f695726",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f8a90c81-fe2a-4aec-88a3-390e287dc3f5",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 13.97,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-207-1958",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-207-0071",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-207-1958",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-207-1958",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-207-1958",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.537102,
              longitude: -81.148894,
            },
          },
          {
            id: "5420",
            distance: "15.06",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-397-1125",
            address: {
              addressLineOne: "3250 Vineland Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34746",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0438d5cf-d6ea-4ae2-a6eb-499d489de93c",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "2e074a18-a283-4420-bdaa-94099baddd89",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "3d1f090d-f05e-45d1-a0b6-13e1cea735b0",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "7ba4a1a6-30ad-4e8b-85f3-f6e7a0ab01b9",
                accessPointType: "ACC",
              },
              {
                accessPointId: "7c8df16b-cee2-41f0-be33-c5bf7f258c54",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "820e964b-7fce-4e7d-90d4-0bdd70356364",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "847b7458-1a7d-4ba5-9045-69a25006b392",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "a72aa0f6-e700-4d25-b63d-68b9d93679f9",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "fa9ebbbb-02b9-4962-b3fb-33380ad0178b",
                accessPointType: "PICKUP_BAKERY",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 15.06,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-397-1202",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-397-0275",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-397-1130",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-397-1185",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-397-3038",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-397-1551",
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Churromania",
                name: "CHURROMANIA",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-397-1202",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-397-1202",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-397-1202",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-397-1202",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.341633,
              longitude: -81.486426,
            },
          },
          {
            id: "110",
            distance: "15.77",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Winter Garden Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-554-0182",
            address: {
              addressLineOne: "16313 New Independence Parkway",
              addressLineTwo: null,
              state: "FL",
              city: "Winter Garden",
              postalCode: "34787",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "8d8ecdac-04bf-45f5-be8a-e641f537ff59",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "98a44633-be00-496a-a63e-4fff9d42d1bd",
                accessPointType: "ACC",
              },
              {
                accessPointId: "9b3ce6e2-5b0d-4573-b222-88d700d89fd6",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bafd019d-28c4-4f4c-9dfe-fc9c46a56bb1",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "cc166f83-f146-4eab-b7a1-2b8959b0f529",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "d6cbc0af-4447-4b6e-beb6-c83c7e99d857",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "de1afec5-62b7-4116-b638-47f5e7a80fdd",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "fd341721-e14f-4047-89fe-9fac8cdaaeb8",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 15.77,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-554-0181",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-554-0178",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-554-0178",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-554-0182",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-554-0183",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-554-0172",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-554-0177",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-554-0179",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Dunkin Brands",
                name: "DUNKIN_BRANDS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-554-0181",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-554-0181",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-554-0181",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.476488,
              longitude: -81.629452,
            },
          },
          {
            id: "5846",
            distance: "16.36",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-452-0224",
            address: {
              addressLineOne: "3183 W Vine St",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34741",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "20a8b807-ef6a-4914-9ce2-3080562d6cae",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4885ff75-bcdc-4ffc-a61e-3bffafec4940",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "6544ff53-f191-4f02-9248-d6babde152f9",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "b200bdf7-400e-4cea-8df1-750238f9005d",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bd5e0023-16e5-40db-b635-3b7d99adc8ec",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 16.36,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-452-0895",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-452-0224",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-452-0895",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-452-0895",
              },
              {
                displayName: "Licensed Insurance Agent",
                name: "INSURANCE_SERVICES",
                phone: "407-452-0224",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-452-0895",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.306557,
              longitude: -81.435157,
            },
          },
          {
            id: "857",
            distance: "16.37",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Sanford Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-321-1371",
            address: {
              addressLineOne: "3653 S Orlando Dr",
              addressLineTwo: null,
              state: "FL",
              city: "Sanford",
              postalCode: "32773",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "053cd4f4-bc70-4df5-91ed-458e7658e3de",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "08240962-92ff-480b-b23f-886cbb457d2b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "0ba52989-dcd5-433d-878c-bcaabaaa6e02",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "49b2836c-f5fe-49f5-a7af-e9840eeb63a0",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "5740fef4-b7c2-4060-96e0-00d485a19bd6",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b9dfd3d4-25d1-44d3-b433-7a9b472eaee9",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "de5dc442-af65-484a-9984-5f6753b20fdb",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "e8ebfbfb-7add-49e9-b257-e40570435904",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 16.37,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-321-7610",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-324-5790",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-324-5790",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-321-3313",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-321-3551",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-688-6084",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "HEALTH_AND_WELLNESS",
                name: "HEALTH_AND_WELLNESS",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-321-7610",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-321-7610",
              },
              {
                displayName: "Licensed Insurance Agent",
                name: "INSURANCE_SERVICES",
                phone: "407-321-1371",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-321-7610",
              },
              {
                displayName: "Da-Vi Nails",
                name: "DA_VI_NAILS",
                phone: null,
              },
              {
                displayName: "Fed Ex",
                name: "FED_EX",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.759542,
              longitude: -81.281821,
            },
          },
          {
            id: "817",
            distance: "17.03",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-397-7000",
            address: {
              addressLineOne: "4444 W Vine St",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34746",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "269c2462-bc2d-4987-adb1-a810ff9fef5b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4a305bce-15d9-4528-9e67-77335c13ee09",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "5721c16d-dd30-4256-b215-c09d5e38137f",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "81ae8054-5fae-44df-9559-b7a678dda57d",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "8d28ab87-a470-4808-8624-42f28622943c",
                accessPointType: "ACC",
              },
              {
                accessPointId: "92841a0c-45f1-4d8e-bf13-db04462b0f76",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ac3dbfb3-4ca9-478f-9302-d392c7e58c7a",
                accessPointType: "DELIVERY_IN_HOME",
              },
              {
                accessPointId: "b1c7f6ea-3868-4cf3-9e89-446da2d4ee04",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "edf0ce7b-053f-42b0-8a31-a3699f09064e",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 17.03,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-397-1002",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-397-2011",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "321-677-3035",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-397-1223",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-397-0141",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-397-0010",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Budget Truck Rental",
                name: "BUDGET_TRUCK_RENTAL",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-397-1002",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-397-1002",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-397-1002",
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-396-9661",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.301786,
              longitude: -81.458738,
            },
          },
          {
            id: "525",
            distance: "17.6",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Lake Mary Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-562-4470",
            address: {
              addressLineOne: "825 Casa Verde Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Lake Mary",
              postalCode: "32746",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "05e4e7b3-1bdf-4aef-9f23-47a910445b25",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "2427f2c9-9bcf-4ce4-a179-b31a49d05c79",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "5102978a-2027-4981-afd4-303b3d2367cc",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "dc2d8af1-6f9b-4fc4-bdd7-7a1d82d13969",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "fcb2ef8b-bb1e-4fce-87ca-3a5171f3e5e0",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 17.6,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-562-4469",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-562-4470",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-562-4469",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-562-4469",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-562-4469",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.784512,
              longitude: -81.304091,
            },
          },
          {
            id: "3207",
            distance: "18.51",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Sanford Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-321-1540",
            address: {
              addressLineOne: "1601 Rinehart Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Sanford",
              postalCode: "32771",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "031ee008-5c51-40e8-882d-f0d7a54ad454",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "12b7ae76-2b74-43dd-8ea6-e04b012dee05",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "3f3810de-3c7b-48f9-91d0-afaa6d6a4b0f",
                accessPointType: "ACC",
              },
              {
                accessPointId: "5333e17b-77b1-4872-aa90-f64b39d345fd",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "73ec8c4f-3c1a-4371-bbc8-b5f6405f97ce",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "7d7110e5-6ed3-4473-9374-a62d58efda23",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "925ac595-7a41-4eed-a408-5f7bb1279184",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "a32c223b-9478-463a-b777-2781f1bc1f10",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "e0f86f2f-0dd4-4c2e-9f7c-3548c15f21d0",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 18.51,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-321-1717",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-321-8122",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-321-8122",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-321-8055",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-321-3637",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-321-1512",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-321-3781",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-321-1986",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "MFC_ALERT",
                name: "MFC_ALERT",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Axiom Bank",
                name: "AXIOM_BANK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-321-1150",
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-321-1717",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-321-1717",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "407-321-1717",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-321-1717",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.802594,
              longitude: -81.328163,
            },
          },
          {
            id: "5214",
            distance: "19.18",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Kissimmee Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-606-0109",
            address: {
              addressLineOne: "2855 N Old Lake Wilson Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Kissimmee",
              postalCode: "34747",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "329b6720-78ac-48bd-aae3-a7b8c4d56d01",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "334dd9e4-5fbf-4a9d-8593-50c36e2cac8f",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "44de892c-5456-4df3-8b81-16c20c12745e",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "4a84a916-8de1-4ebc-a549-ca59b4474578",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "6403003c-44f4-4796-90cf-33185fc0f653",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "69d76753-ee11-46d4-8676-5d5b341cbf7d",
                accessPointType: "ACC",
              },
              {
                accessPointId: "8214ccdf-a70b-4bfc-b739-e40a7992b48c",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "f2e0a944-95be-44fa-81aa-b9d5c820b5a9",
                accessPointType: "PICKUP_BAKERY",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:59",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:59",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:59",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 19.18,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-606-0111",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-606-0109",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-606-0117",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-606-0110",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-606-0116",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-606-0113",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "Wayback Burgers",
                name: "WAYBACK_BURGERS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-606-0111",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-606-0111",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-606-0111",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.330027,
              longitude: -81.588346,
            },
          },
          {
            id: "1086",
            distance: "19.91",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Saint Cloud Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-957-1300",
            address: {
              addressLineOne: "4400 13th St",
              addressLineTwo: null,
              state: "FL",
              city: "Saint Cloud",
              postalCode: "34769",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1d6cf060-e110-47b9-afc0-5e3fdbc34539",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "50d51d0a-2cd4-4dac-bf6c-ad03605cfc94",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "9034a0fd-93d7-4456-8231-31c6d22aa416",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b87722a0-8743-407e-b41d-b6334d1a10d3",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "bcb9f1dc-f1c7-40b4-a8d2-06165513f313",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "bd96508f-09e4-4c5f-a301-06136d7c86c3",
                accessPointType: "ACC",
              },
              {
                accessPointId: "e733d739-e74f-482a-ae30-794509ad6c2c",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "eeaedb82-a9ad-4dee-9f12-222d650fee6f",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 19.91,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-957-4333",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "407-957-4114",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "407-957-4114",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-957-1300",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-957-1370",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-957-7077",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "407-957-5610",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-957-9338",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Axiom Bank",
                name: "AXIOM_BANK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-957-5042",
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-957-4333",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-957-4333",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-957-4333",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.255405,
              longitude: -81.315638,
            },
          },
          {
            id: "2695",
            distance: "21.37",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Clermont Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "352-243-6151",
            address: {
              addressLineOne: "1450 Johns Lake Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Clermont",
              postalCode: "34711",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "6695ea0f-d1a9-4364-a6e5-442ab2f66d7a",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "72eab216-4ace-44c0-9cfe-af9e13725b98",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "8c5080c2-2d5c-425e-8bdd-1760bb0b0853",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "92c4f0b2-4f81-4029-b6a5-34c1f23e2a7a",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "a35f04f6-88d1-4f69-883d-cb33911b3b9b",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ae7a8f4c-5df3-4ab4-8e2c-797115a02a77",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b79c9fcc-b3eb-44bd-8cbb-18c33ada4966",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "e0c58879-ad6d-4173-bfce-8145c5c25e88",
                accessPointType: "ACC",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 21.37,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "352-243-6270",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "352-243-6323",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "352-243-6323",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "352-243-6151",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "352-243-3830",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "352-243-5343",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "352-243-6373",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "352-243-5652",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "DrPhoneFix",
                name: "DRPHONEFIX",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "352-394-2322",
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Florida Blue",
                name: "FLORIDA_BLUE",
                phone: null,
              },
              {
                displayName: "Compass Insurance",
                name: "COMPASS_INSURANCE",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "352-243-6270",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "352-243-6270",
              },
              {
                displayName: "HIV Specialty Pharmacy of the Community",
                name: "HIV_SPECIALTY_PHARMACY",
                phone: "352-243-6270",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "352-243-6270",
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.529979,
              longitude: -81.731337,
            },
          },
          {
            id: "5299",
            distance: "21.84",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Clermont Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "352-536-2750",
            address: {
              addressLineOne: "550 Us Highway 27",
              addressLineTwo: null,
              state: "FL",
              city: "Clermont",
              postalCode: "34714",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1899cd29-e368-45df-9162-26973f78e4e7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "350991cd-6dba-4be8-aed0-ab4e947918c7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "5145dc7f-fa4b-4f11-82eb-b21ce2dbbfc7",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "58509d31-1725-48c8-b3fc-d8c6a3eb9589",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "849e73b3-5de2-4a12-85db-1737e8de1f4f",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "98516cb6-ee4c-4039-b287-6bcd6ab662f5",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "c003e4e2-45bd-438d-b42b-197a3d4c1dfe",
                accessPointType: "ACC",
              },
              {
                accessPointId: "da1f31f2-9f7a-4eb2-bfb2-ad40e643751c",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 21.84,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "352-536-2730",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "352-536-2750",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "352-536-2751",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "352-536-2765",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "352-536-2764",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "352-536-2729",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Da-Vi Nails",
                name: "DA_VI_NAILS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: "800-539-7571",
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "352-536-2730",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "352-536-2730",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "352-536-2730",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "352-536-2730",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.355155,
              longitude: -81.672532,
            },
          },
          {
            id: "5265",
            distance: "22.39",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Saint Cloud Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "407-556-0995",
            address: {
              addressLineOne: "2125 Nolte Rd",
              addressLineTwo: null,
              state: "FL",
              city: "Saint Cloud",
              postalCode: "34772",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "017dc6b2-4c49-43fb-8524-60978d760b58",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "77550279-edd3-4931-bfa0-106c5fdd9452",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "7b21c81f-3eed-4c70-8a40-e171fed190a7",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "7dc89cf9-0811-436c-b615-dc2ff3a2e1d0",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "a736c09e-05c6-4747-bf5e-7869389a6ba8",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 22.39,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-556-0994",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-556-0995",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-556-0994",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-556-0994",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-556-0994",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.222821,
              longitude: -81.293842,
            },
          },
          {
            id: "3606",
            distance: "25.3",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Debary Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "386-601-0037",
            address: {
              addressLineOne: "185 N Charles Richard Beall Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Debary",
              postalCode: "32713",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "06b49635-63f1-4cd1-b838-2b5ae747e042",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "6fca2b2d-9fa5-49ba-87b7-58fc13677139",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "913feb9e-c9d8-492f-b947-e075a3bdf6f6",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "b010d472-11f5-42d3-83db-2ee348f70278",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "ed5d0e8d-ca70-46a7-b799-a14f82772317",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 25.3,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "386-601-0036",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "386-601-0037",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "386-601-0036",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "386-601-0036",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "386-601-0036",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.898809,
              longitude: -81.304008,
            },
          },
          {
            id: "705",
            distance: "26.25",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Mount Dora Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "352-735-3000",
            address: {
              addressLineOne: "17030 Us Highway 441",
              addressLineTwo: null,
              state: "FL",
              city: "Mount Dora",
              postalCode: "32757",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "1501f6e6-e27d-4ef9-956d-b90f2626f7db",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "23c7f535-a67a-4e51-84cb-c85647f95a2b",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "28b797c1-c1f9-478d-bb6d-55f54d1482ce",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "6fbecd43-358e-4587-b67f-6a9584df0485",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "72994304-5bb6-4325-8990-f1895182ad46",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "744ed7eb-6a81-45b5-a4a9-6f760860f4a3",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "8dfca532-9858-459d-b17c-656b6628bc25",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d40354c8-7361-4b4d-b7db-19d2b9631ca6",
                accessPointType: "DELIVERY_IN_HOME",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 26.25,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "352-735-0011",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "352-735-3700",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "352-735-3700",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "352-735-4721",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "352-729-8029",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "352-735-3307",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "352-735-5900",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Wayback Burgers",
                name: "WAYBACK_BURGERS",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "352-735-0011",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "352-735-0011",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "352-735-0011",
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "352-735-3099",
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "DrPhoneFix",
                name: "DRPHONEFIX",
                phone: null,
              },
              {
                displayName: "Murphy Fuel Station",
                name: "GAS_MURPHY",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.817715,
              longitude: -81.673133,
            },
          },
          {
            id: "3310",
            distance: "26.33",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Deltona Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "407-328-8052",
            address: {
              addressLineOne: "101 Howland Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Deltona",
              postalCode: "32738",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "27141ea2-db41-42ea-8048-0f9b14f3f900",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "48219b60-7030-4f86-a1c5-376191cc3ecd",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "5dba018b-590e-42ee-896d-91d353313e98",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "7770db1d-014b-47be-b215-1941a6d8c34e",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "aaa2c396-1c1e-4a7d-bea2-a95956c370cf",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "d0f26703-da4b-4b24-a16e-8ead8a4458c5",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d9cb7e76-3820-415e-bc56-76c01ea337ed",
                accessPointType: "ACC",
              },
              {
                accessPointId: "f32c6259-817c-418b-9eb1-690fac07c62b",
                accessPointType: "PICKUP_INSTORE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 26.33,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "407-328-9414",
              },
              {
                displayName: "Walmart Fuel Station",
                name: "GAS_STATION",
                phone: null,
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "407-328-8052",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "407-328-8610",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "407-328-9417",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "407-328-9380",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Regal Nails",
                name: "REGAL_NAILS",
                phone: "407-688-4366",
              },
              {
                displayName: "Quest Diagnostic",
                name: "QUEST_DIAGNOSTICS",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Gameplay",
                name: "GAMEPLAY",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "407-328-9414",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "407-328-9414",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "407-328-9414",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.869772,
              longitude: -81.164118,
            },
          },
          {
            id: "563",
            distance: "26.63",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Orange City Supercenter",
            name: "Walmart Supercenter",
            phoneNumber: "386-775-1500",
            address: {
              addressLineOne: "2400 Veterans Memorial Pkwy",
              addressLineTwo: null,
              state: "FL",
              city: "Orange City",
              postalCode: "32763",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "0d1e598e-a942-4025-a99c-ef5667c4d6c3",
                accessPointType: "ACC",
              },
              {
                accessPointId: "4cd86f3e-3c58-4fca-bae3-cc6ad8053645",
                accessPointType: "DELIVERY_SPECIAL_EVENT",
              },
              {
                accessPointId: "6887f34a-0d4f-4d46-ae1b-c1f93b8a8768",
                accessPointType: "PICKUP_CURBSIDE",
              },
              {
                accessPointId: "68f7beae-9671-4f11-8d87-3ef9088da794",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "aad5c86b-e835-495f-a7d0-09ab6aceeb4d",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "b30cc45e-708b-41c4-93b4-027a1f2f6b36",
                accessPointType: "PICKUP_BAKERY",
              },
              {
                accessPointId: "c39613ad-9df9-494e-8057-0266796a0cc5",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d5aef158-0dc6-4222-b702-6a9ddd2477c3",
                accessPointType: "DELIVERY_ADDRESS",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 26.63,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "386-775-4844",
              },
              {
                displayName: "Photo Center",
                name: "PHOTO_CENTER",
                phone: "386-774-5658",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "1-Hour Photo Center",
                name: "PHOTO_CENTER_ONE_HOUR",
                phone: "386-774-5658",
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "386-775-1500",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: "386-457-6023",
              },
              {
                displayName: "Auto Care Center",
                name: "TIRE_AND_LUBE",
                phone: "386-774-5170",
              },
              {
                displayName: "Wireless Services",
                name: "WIRELESS_MOBILE",
                phone: "386-775-1574",
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: "Vision Center",
                name: "VISION_CENTER",
                phone: "386-774-1987",
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "GM_PICKUP_CURBSIDE",
                name: "GM_PICKUP_CURBSIDE",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "ecoATM-Kiosk",
                name: "ECOATM",
                phone: null,
              },
              {
                displayName: "Quicktag",
                name: "QUICK_TAG",
                phone: null,
              },
              {
                displayName: "MiniMelts",
                name: "MINI_MELTS",
                phone: null,
              },
              {
                displayName: "Minute Key-Kiosk",
                name: "MINUTE_KEY",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk A",
                name: "REDBOX_A",
                phone: "866-733-2693",
              },
              {
                displayName: "Redbox-Kiosk B",
                name: "REDBOX_B",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "386-775-4844",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "386-775-4844",
              },
              {
                displayName: "Licensed Insurance Agent",
                name: "INSURANCE_SERVICES",
                phone: "386-775-1500",
              },
              {
                displayName: "Naloxone for First Reponders",
                name: "NALOXONE_FIRST_RESPONDERS",
                phone: "386-775-4844",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "386-775-4844",
              },
              {
                displayName: "Smart Style Hair Salon",
                name: "SMART_STYLE_HAIR_SALON",
                phone: null,
              },
              {
                displayName: "Space Coast Credit Union",
                name: "SPACE_COAST_CREDIT_UNION",
                phone: null,
              },
              {
                displayName: "Da-Vi Nails",
                name: "DA_VI_NAILS",
                phone: null,
              },
              {
                displayName: "Subway",
                name: "SUBWAY",
                phone: null,
              },
              {
                displayName: "Claire's",
                name: "CLAIRES",
                phone: null,
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.913784,
              longitude: -81.278896,
            },
          },
          {
            id: "6398",
            distance: "26.71",
            type: "STORE",
            isGlassEligible: true,
            displayName: "Deltona Neighborhood Market",
            name: "Neighborhood Market",
            phoneNumber: "386-457-6185",
            address: {
              addressLineOne: "1569 Saxon Blvd",
              addressLineTwo: null,
              state: "FL",
              city: "Deltona",
              postalCode: "32725",
              country: "US",
            },
            capabilities: [
              {
                accessPointId: "4836f7f8-c630-4f8e-9488-b75695233697",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "8a9b2ac3-63fd-45ca-bd18-1b6adf168106",
                accessPointType: "PICKUP_INSTORE",
              },
              {
                accessPointId: "9846299b-7f1b-4ff1-a969-ff0a7cdf5fb0",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "abb29d6d-bf33-4e91-bb25-900496883cd2",
                accessPointType: "DELIVERY_ADDRESS",
              },
              {
                accessPointId: "d42a58dd-2c21-479b-9b2c-81484daa6eed",
                accessPointType: "PICKUP_CURBSIDE",
              },
            ],
            open24Hours: false,
            operationalHours: [
              {
                day: "Sunday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Monday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Tuesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Wednesday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Thursday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Friday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
              {
                day: "Saturday",
                start: "06:00",
                end: "23:00",
                closed: false,
              },
            ],
            tempOperationalHours: null,
            nodeDistance: {
              unitOfMeasure: "MI",
              value: 26.71,
            },
            services: [
              {
                displayName: "Deli",
                name: "DELI",
                phone: null,
              },
              {
                displayName: "Pharmacy",
                name: "PHARMACY",
                phone: "386-457-6190",
              },
              {
                displayName: "Garden Center",
                name: "GARDEN_CENTER",
                phone: null,
              },
              {
                displayName: "Grocery",
                name: "GROCERY",
                phone: null,
              },
              {
                displayName: "Financial Services",
                name: "FINANCIAL_SERVICES",
                phone: "386-457-6185",
              },
              {
                displayName: "Bakery",
                name: "BAKERY",
                phone: null,
              },
              {
                displayName: "Liquor",
                name: "LIQUOR",
                phone: null,
              },
              {
                displayName: ".COM_SERVICES",
                name: ".COM_SERVICES",
                phone: null,
              },
              {
                displayName: "SCAN_AND_GO",
                name: "SCAN_AND_GO",
                phone: null,
              },
              {
                displayName: "SERVICE DESK",
                name: "SERVICE_DESK",
                phone: null,
              },
              {
                displayName: "Coinstar",
                name: "COINSTAR",
                phone: null,
              },
              {
                displayName: "Redbox-Kiosk",
                name: "REDBOX",
                phone: "866-733-2693",
              },
              {
                displayName: "Rug Doctor-Kiosk",
                name: "RUG_DOCTOR",
                phone: "800-784-3628",
              },
              {
                displayName: "Pharmacy Drive-Thru",
                name: "PHARMACY_DRIVE_THRU",
                phone: null,
              },
              {
                displayName: "Flu Shots and Immunizations",
                name: "IMMUNIZATIONS",
                phone: "386-457-6190",
              },
              {
                displayName: "Test and Treat dotcom appointment scheduling",
                name: "TEST_AND_TREAT",
                phone: "386-457-6190",
              },
              {
                displayName: "COVID Immunizations",
                name: "COVID_IMMUNIZATIONS",
                phone: "386-457-6190",
              },
              {
                displayName: "Grocery Pickup and Delivery",
                name: "GROCERY_PICKUP_DELIVERY",
                phone: null,
              },
            ],
            geoPoint: {
              latitude: 28.906876,
              longitude: -81.245296,
            },
          },
        ],
      },
    },
  };
  let arr = [] ;

  jsonData.data.nearByNodes.nodes.forEach((node) => {
    arr.push({
      address: {
        streetAddress: node.address.addressLineOne,
        state: node.address.state,
        city: node.address.city,
        zip: node.address.postalCode,
      },
      hours: {
        Monday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 

        Tuesday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 
        
        Wednesday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 
        
        Thursday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 

        Friday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 

        Saturday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }, 
        
        Sunday:{
          open:"6:00 AM", 
          close:"11:00 PM"
        }
        
       } ,
      long: node.geoPoint.longitude,
      lat: node.geoPoint.latitude,
      phoneNumber: "(" + node.phoneNumber.replace(/-/,") "),
      type: "Walmart",
      website: "http://www.walmart.com",
      lastUpdated: new Date().toLocaleDateString(),
      image: ""

      
      
    });
  });

  console.log(arr);
  const jsonString = JSON.stringify(arr);
  fs.writeFileSync('walmart.json', jsonString);
  
};
getWalmartData();