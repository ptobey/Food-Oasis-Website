//import { IFormattedJson } from "./interface";
const fs = require('fs');



const getBravoData = () => {
  const jsonData = {
    
       "meta": {
        "uuid": "01926e5b-4f1f-5a69-08cf-92c9bbb4925a",
        "errors": []
    },
   

        "response": {
            "entities": [
                {
                    "googlePlaceId": "ChIJfQFwzB5l54gRevYIc9BhPAU",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "4520 Curry Ford Road",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32812",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "19:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJfQFwzB5l54gRevYIc9BhPAU",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJfQFwzB5l54gRevYIc9BhPAU",
                    "c_internalStoreNumber": "45_009",
                    "c_landmarks": "Orlando Fire Station 11, 32822, 32806, 32809",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 4520 Curry Ford Road. Call Bravo Supermarkets at (407) 776-3426 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 4520 Curry Ford Road, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_009\u0026store_zip=32812\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_009\u0026store_zip=32812\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_009\u0026store_zip=32812\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.5232298,
                        "longitude": -81.32843288
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4"
                    },
                    "facebookDescriptor": "4520 Curry Ford Road, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/573861819706733",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsCurryFordRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_009"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.5232608,
                        "longitude": -81.3284997
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/WXeGZCSNIsiyCHmqVdgXxHv1lu0li5peDbWPYISEroA/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/U2AaKlE_AzWrGqSL2Q_-1rUaP7Wvshl8HR0RFOgocusZsmOzPJvE6Bw0dNqHZrt0Ez7GxI7wclrGhOxr=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14077763426",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "CASH",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Parking"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-c5e3e3d338f4",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.5232608,
                        "longitude": -81.3284997
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.523379148145846,
                        "longitude": -81.32903799161147
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.523402714630787,
                        "longitude": -81.3285216663761
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "Z4yq86",
                        "id": "U45_009",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:21",
                        "labels": [
                            "103097"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/7PEj08",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/7PEj08",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJHeVewWxl54gR6We3NdvMYFQ",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "999 North Semoran Blvd",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32807",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJHeVewWxl54gR6We3NdvMYFQ",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJHeVewWxl54gR6We3NdvMYFQ",
                    "c_internalStoreNumber": "45_010",
                    "c_landmarks": "Orange County Fire Station #66, 32814, 32803, 32825",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 999 North Semoran Blvd. Call Bravo Supermarkets at (407) 380-1191 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 999 North Semoran Blvd, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_010\u0026store_zip=32807\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_010\u0026store_zip=32807\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_010\u0026store_zip=32807\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.56031083,
                        "longitude": -81.31013229
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049"
                    },
                    "facebookDescriptor": "999 North Semoran Blvd, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/490531274336639",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsNorthSemoranBlvd",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_010"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.5604607,
                        "longitude": -81.3101404
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/GUO9QXAH3N_PBE5UCIY86hBnxdk0NqxdwQgzXxRFTfIrj3VSx2aT9RVx4wbyOZaHKdb1ep8k3V6OixX5VQ=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14073801191",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Fish",
                        "Lotto",
                        "Beer",
                        "Free Parking",
                        "Delivery",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-7969e12ab049",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.5604607,
                        "longitude": -81.3101404
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.56015045646485,
                        "longitude": -81.31071338391257
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.560248223209975,
                        "longitude": -81.31015146112395
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "Dorv2R",
                        "id": "U45_010",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:14",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/W7N8An",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/W7N8An",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJF8ddASB854gRJMQKOZLm9jE",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "4065 W Oak Ridge Road",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32809",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJF8ddASB854gRJMQKOZLm9jE",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJF8ddASB854gRJMQKOZLm9jE",
                    "c_internalStoreNumber": "45_019",
                    "c_landmarks": "Sadler Elementary School, 32819, 32839, 32812",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 4065 W Oak Ridge Road. Call Bravo Supermarkets at (407) 351-8880 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 4065 W Oak Ridge Road, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_019\u0026store_zip=32809\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_019\u0026store_zip=32809\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_019\u0026store_zip=32809\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.47330791,
                        "longitude": -81.42774017
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e"
                    },
                    "facebookDescriptor": "4065 W Oak Ridge Road, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/164178340406715",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsWOakRidgeRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_019"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.4734017,
                        "longitude": -81.427993
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/_tD0vR5CT3eNfIVEnKdojeMbO88_d_AMTkZILQ2tR0DvwJqxQ0GRa46HnwWB2E381vDNaac027GiV8zeDA=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14073518880",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Fish",
                        "Lotto",
                        "Beer",
                        "Western Union",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-33c34fe6765e",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.4734017,
                        "longitude": -81.427993
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.472367705209944,
                        "longitude": -81.42703514377399
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.4732978485372,
                        "longitude": -81.42771508375927
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "vkl5nP",
                        "id": "U45_019",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:17",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/L0NW3r",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/L0NW3r",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJQxTaNzJ454gRP0U_cZ5mrZA",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "2701 N Hiawassee Road",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32818",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJQxTaNzJ454gRP0U_cZ5mrZA",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJQxTaNzJ454gRP0U_cZ5mrZA",
                    "c_internalStoreNumber": "45_011",
                    "c_landmarks": "Frank's Crab House, 34761, 32808, 32810",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 2701 N Hiawassee Road. Call Bravo Supermarkets at (407) 770-0012 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 2701 N Hiawassee Road, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_011\u0026store_zip=32818\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_011\u0026store_zip=32818\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_011\u0026store_zip=32818\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.57935057,
                        "longitude": -81.47413105
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736"
                    },
                    "facebookDescriptor": "2701 N Hiawassee Road, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/508510315861516",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsNHiawasseeRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_011"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.5792911,
                        "longitude": -81.4739835
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/USlbh6W4xFIc3I9f_aBWPQ7kAYQ1hr3aAj5rBRrAhT5YKE9W0Tf0CeSZoX1s03kLe3lzNng3kIwKTOBdWg=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14077700012",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Fish",
                        "Lotto",
                        "Beer",
                        "Western Union",
                        "Free Parking",
                        "Delivery",
                        "Phone Order",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-e2640f47e736",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.57934965186028,
                        "longitude": -81.47396876206159
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.578960331326257,
                        "longitude": -81.47598742108732
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.579356823102998,
                        "longitude": -81.47431548448242
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "l0MaRD",
                        "id": "U45_011",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:14",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/eEMKwN",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/eEMKwN",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJP77j4v1v54gREk9POaR1gfU",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "398 Sr 436",
                        "city": "Casselberry",
                        "region": "FL",
                        "postalCode": "32707",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.662074,
                        "longitude": -81.320082
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Casselberry",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJP77j4v1v54gREk9POaR1gfU",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJP77j4v1v54gREk9POaR1gfU",
                    "c_internalStoreNumber": "45_141",
                    "c_landmarks": "Kane's Furniture - Casselberry, 32730, 32708, 32701",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Casselberry, FL, located at 398 Sr 436. Call Bravo Supermarkets at (407) 755-6365 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 398 Sr 436, Casselberry, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_141\u0026store_zip=32707\u0026store_city=Casselberry\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_141\u0026store_zip=32707\u0026store_city=Casselberry\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_141\u0026store_zip=32707\u0026store_city=Casselberry\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.65553158,
                        "longitude": -81.33251961
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c"
                    },
                    "facebookDescriptor": "398 Sr 436, Casselberry, FL",
                    "facebookPageUrl": "https://www.facebook.com/466942740416377",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsSr436",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_141"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.6556318,
                        "longitude": -81.3325537
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/iDmwUe9Hy1-XGUG6XbjsdVv8sfVHGhk7E0LCaqXeSKLYXEtmgr-HGOBtvCyzkLEYpLMmgpLcj78VLnqr=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14077556365",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "CASH",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Food",
                        "Western Union",
                        "Parking",
                        "Beer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-c6ae2916337c",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.655631587256803,
                        "longitude": -81.33255337293531
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.655357699039186,
                        "longitude": -81.33298814890748
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.65559171711813,
                        "longitude": -81.33271654044927
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "LNvj8V",
                        "id": "U45_141",
                        "timestamp": "2024-03-07T14:10:52",
                        "createdTimestamp": "2020-01-14T22:31:17",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/o3mE1R",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/o3mE1R",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJ5eUGRx9m54gRg6oBWMwrTHI",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "10659 E Colonial Drive",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32817",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "19:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJ5eUGRx9m54gRg6oBWMwrTHI",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJ5eUGRx9m54gRg6oBWMwrTHI",
                    "c_internalStoreNumber": "45_251",
                    "c_landmarks": "Boardwalk Bowl Entertainment Center, 32826, 32792, 32825",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 10659 E Colonial Drive. Call Bravo Supermarkets at (407) 277-7688 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 10659 E Colonial Drive, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_251\u0026store_zip=32817\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_251\u0026store_zip=32817\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_251\u0026store_zip=32817\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.57092948,
                        "longitude": -81.2311533
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26"
                    },
                    "facebookDescriptor": "10659 E Colonial Drive, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/490527527662792",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsEColonialDrive",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_251"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.5710583,
                        "longitude": -81.231101
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/6ttWC734D6MnYzbvcwKq8dNkebt8WfxNK3LiD7r4Ge0YD-iQCfXNugYnG6ntmBvrcE1w__Hbf_jARk6y5g=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14072777688",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "APPLEPAY",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Bakery",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Free Parking"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-0e47a7e37b26",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.571049817854146,
                        "longitude": -81.23109726183111
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.56959881420072,
                        "longitude": -81.2306021859581
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "o4a3nO",
                        "id": "U45_251",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:17",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/8LQj14",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/8LQj14",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJkwvj_92H3YgRQefqN1OFBKk",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "12402 S Orange Blossom TR",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32837",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orlando",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0?utm_source=facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJkwvj_92H3YgRQefqN1OFBKk",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJkwvj_92H3YgRQefqN1OFBKk",
                    "c_internalStoreNumber": "45_111",
                    "c_landmarks": "Touchstar Cinemas - Southchase 7, 32821, 32824, 34743",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 12402 S Orange Blossom TR. Call Bravo Supermarkets at (407) 730-6081 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 12402 S Orange Blossom TR, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_111\u0026store_zip=32837\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_111\u0026store_zip=32837\u0026store_city=Orlando\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_111\u0026store_zip=32837\u0026store_city=Orlando\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0"
                    },
                    "facebookDescriptor": "12402 S Orange Blossom TR, Orlando, FL",
                    "facebookPageUrl": "https://www.facebook.com/105910924328129",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsSOrangeBlossomTR",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_111"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.384039,
                        "longitude": -81.40563
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/LVDczPLZuqoORDz4_xDc_8Hg1_FaWOEkyM_n1czkXzo/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/DTugGyBEdkyeojXl5KG_7AR7TLLb91f9KMGO1ibjkAoWQcdQv4kMWZ6Miwa1UtqWWowfCClBmakC95oY=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14077306081",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "CASH",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Produce",
                        "Meat",
                        "Lotto",
                        "Deli",
                        "Hot Foods",
                        "Money Trasnfers",
                        "Catering"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-66e3ac12eaa0",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.384027201216224,
                        "longitude": -81.40562664723875
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.383214944663365,
                        "longitude": -81.40467716478686
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "Rqj44P",
                        "id": "U45_111",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-30T04:02:30",
                        "labels": [
                            "103097"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/YDpxxn",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/YDpxxn",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJTdLw445t54gRYL-QfIxfqZQ",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2",
                    "savedFilters": [
                        "5504"
                    ],
                    "address": {
                        "line1": "1271 S US Highway 17-92",
                        "city": "Longwood",
                        "region": "FL",
                        "postalCode": "32750",
                        "countryCode": "US"
                    },
                    "addressHidden": false,
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.697765,
                        "longitude": -81.346199
                    },
                    "closed": false,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2?utm_source=facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJTdLw445t54gRYL-QfIxfqZQ",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJTdLw445t54gRYL-QfIxfqZQ",
                    "c_internalStoreNumber": "45_142",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Longwood, FL, located at 1271 S US Highway 17-92. Call Bravo Supermarkets at (407) 755-4855 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 1271 S US Highway 17-92, Longwood, FL",
                    "c_setStore": "store_code=U45_142\u0026store_zip=32750\u0026store_city=\u0026store_state=FL",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_142\u0026store_zip=32750\u0026store_city=\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookName": "BravoSupermarketsSUSHwy1792",
                    "facebookPageUrl": "https://www.facebook.com/102659295342368",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_142"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.6903523,
                        "longitude": -81.3272529
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14077554855",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "CASH",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Butcher",
                        "Western Union",
                        "Phone Card Recharge"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-e6c906ca65e2",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.690352275767083,
                        "longitude": -81.32725369718881
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.690399160560222,
                        "longitude": -81.32800530844578
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "QvdZw5",
                        "id": "U45_142",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2021-05-12T12:49:53",
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/k4MwYP",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/k4MwYP",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJESoQ32mL3YgRCq5LhOi2rrg",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "13024 Narcoossee Road",
                        "city": "Orlando",
                        "region": "FL",
                        "postalCode": "32832",
                        "countryCode": "US"
                    },
                    "addressHidden": false,
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.553154,
                        "longitude": -81.364438
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35?utm_source=facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJESoQ32mL3YgRCq5LhOi2rrg",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJESoQ32mL3YgRCq5LhOi2rrg",
                    "c_landmarks": "F45 Training Nona, 32827, 32829, 32831",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orlando, FL, located at 13024 Narcoossee Road. Call Bravo Supermarkets at (407) 863-3866 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 13024 Narcoossee Road, Orlando, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_007\u0026store_zip=32832\u0026store_city=\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_007\u0026store_zip=32832\u0026store_city=\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_007\u0026store_zip=32832\u0026store_city=\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "emails": [
                        "bravolakenona13000@gmail.com"
                    ],
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookPageUrl": "https://www.facebook.com/100282552043040",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsNarcoosseeRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_007"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.377384,
                        "longitude": -81.2456694
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14078633866",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "CASH",
                        "CHECK",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery",
                        "Hot Food",
                        "Deli",
                        "Seafoo",
                        "Sushi",
                        "Bakery",
                        "Alcohol"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-1e16f98f9d35",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.377377392267274,
                        "longitude": -81.24581987194209
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.377484344770263,
                        "longitude": -81.24462039732748
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "kZNP0r",
                        "id": "U45_007",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2021-01-07T21:49:57",
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/10w1Od",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/10w1Od",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJzbIi4vaG3YgRqAwaWw4Ck_o",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "3081 Michigan Avenue",
                        "city": "Kissimmee",
                        "region": "FL",
                        "postalCode": "34744",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "19:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.30464,
                        "longitude": -81.415878
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Kissimmee",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJzbIi4vaG3YgRqAwaWw4Ck_o",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJzbIi4vaG3YgRqAwaWw4Ck_o",
                    "c_internalStoreNumber": "45_014",
                    "c_landmarks": "Napleton Chrysler Jeep Dodge Ram, 34743, 34741, 34769",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Kissimmee, FL, located at 3081 Michigan Avenue. Call Bravo Supermarkets at (407) 518-9840 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 3081 Michigan Avenue, Kissimmee, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_014\u0026store_zip=34744\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_014\u0026store_zip=34744\u0026store_city=Kissimmee\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_014\u0026store_zip=34744\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.339567,
                        "longitude": -81.38771385
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88"
                    },
                    "facebookDescriptor": "3081 Michigan Avenue, Kissimmee, FL",
                    "facebookPageUrl": "https://www.facebook.com/168063473349299",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsMichiganAvenue",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_014"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.3394702,
                        "longitude": -81.3875301
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/mXeO-BWA0e46mehvRuga2ft-imWB5xtr6zjmPFKFXSV-5DUyQEfEK4u4_nsN-_yUXMJbGo0Jm1m_KYmHeQ=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14075189840",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Free Parking"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7909d5fdf88",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.339470663634167,
                        "longitude": -81.38753139614658
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.339702016660368,
                        "longitude": -81.38799273609715
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.33955027025773,
                        "longitude": -81.38777011274891
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "xj4Nlm",
                        "id": "U45_014",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:20",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/myrBm3",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/myrBm3",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJaUOq7uaD3YgReeCrYUgxm40",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "4108 West Vine Street",
                        "city": "Kissimmee",
                        "region": "FL",
                        "postalCode": "34741",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "21:00"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.30464,
                        "longitude": -81.415878
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Kissimmee",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJaUOq7uaD3YgReeCrYUgxm40",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJaUOq7uaD3YgReeCrYUgxm40",
                    "c_internalStoreNumber": "45_110",
                    "c_landmarks": "Baymont by Wyndham Kissimmee, 33848, 33744, 32837",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Kissimmee, FL, located at 4108 West Vine Street. Call Bravo Supermarkets at (407) 932-1520 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 4108 West Vine Street, Kissimmee, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_110\u0026store_zip=34741\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_110\u0026store_zip=34741\u0026store_city=Kissimmee\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_110\u0026store_zip=34741\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.30378149,
                        "longitude": -81.44600898
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac"
                    },
                    "facebookDescriptor": "4108 West Vine Street, Kissimmee, FL",
                    "facebookPageUrl": "https://www.facebook.com/550483884984941",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsWestVineStreet",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_110"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.3036783,
                        "longitude": -81.4460112
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/WAEZjHyMJxJ3Dsy7c30sSG26JVhpVxhkhNAcr1y0Wrtji33XerGKxVgoMLi8fxjr9gCaVZd0Z3E5G_PUiQ=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14079321520",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "APPLEPAY",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Free Parking",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-b7cb56f607ac",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.30366332563384,
                        "longitude": -81.44603091713276
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.304289479478523,
                        "longitude": -81.44660644790935
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.303830244131056,
                        "longitude": -81.44607205907039
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "zkyqnW",
                        "id": "U45_110",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:17",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/q3mezR",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/q3mezR",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJTWF-UTYT54gRZ_0OwB4DWt4",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "2921 Orlando Drive",
                        "city": "Sanford",
                        "region": "FL",
                        "postalCode": "32773",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:30"
                                }
                            ]
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "08:00",
                                    "end": "20:00"
                                }
                            ]
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.786636,
                        "longitude": -81.283724
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Sanford",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJTWF-UTYT54gRZ_0OwB4DWt4",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJTWF-UTYT54gRZ_0OwB4DWt4",
                    "c_internalStoreNumber": "45_140",
                    "c_landmarks": "Lake Jennie, 32746, 32708, 32765",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Sanford, FL, located at 2921 Orlando Drive. Call Bravo Supermarkets at (407) 328-0884 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 2921 Orlando Drive, Sanford, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_140\u0026store_zip=32773\u0026store_city=Sanford\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_140\u0026store_zip=32773\u0026store_city=Sanford\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_140\u0026store_zip=32773\u0026store_city=Sanford\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.77222575,
                        "longitude": -81.27823812
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3"
                    },
                    "facebookDescriptor": "2921 Orlando Drive, Sanford, FL",
                    "facebookPageUrl": "https://www.facebook.com/519645164741371",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsOrlandoDrive",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_140"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.7724195,
                        "longitude": -81.2782061
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/UWYN5y7BAML8HbzNBvuBn9KmJ-vzHxHbTNlx9nLZFATkCwfEbD56m2467WI_iQnuFbk1hrp4XuSEtNPv7A=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14073280884",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "ANDROIDPAY",
                        "APPLEPAY",
                        "CHECK",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Free Parking",
                        "Delivery",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-faeef075dbf3",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.7724195,
                        "longitude": -81.2782061
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.771695787966216,
                        "longitude": -81.27939729211391
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.772199628852157,
                        "longitude": -81.27819247055601
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "AMoE5k",
                        "id": "U45_140",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:14",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/Z1l8o5",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/Z1l8o5",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJqeeoJl8Q54gR44JJcJan_pc",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "2413 Enterprise Road",
                        "city": "Orange City",
                        "region": "FL",
                        "postalCode": "32763",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:30"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "21:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:30",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.933268,
                        "longitude": -81.298874
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Orange%20City",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJqeeoJl8Q54gR44JJcJan_pc",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJqeeoJl8Q54gR44JJcJan_pc",
                    "c_internalStoreNumber": "45_200",
                    "c_landmarks": "Hungry Howie's Pizza, 32713, 32725, 32744",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Orange City, FL, located at 2413 Enterprise Road. Call Bravo Supermarkets at (386) 774-0007 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 2413 Enterprise Road, Orange City, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_200\u0026store_zip=32763\u0026store_city=Orange%20City\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_200\u0026store_zip=32763\u0026store_city=Orange%20City\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_200\u0026store_zip=32763\u0026store_city=Orange%20City\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.92289105,
                        "longitude": -81.29735824
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099"
                    },
                    "facebookDescriptor": "2413 Enterprise Road, Orange City, FL",
                    "facebookPageUrl": "https://www.facebook.com/384186891688639",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsEnterpriseRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_200"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.9229182,
                        "longitude": -81.2971289
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/qdFqebXu4WjQ5R0u30qigYG5yBjD3G3HmuY2q4Bfi0FuaVufQeovijwWfsmtUYIYX2sG0mWqn7_aP8B4LA=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+13867740007",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Bakery",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Western Union",
                        "Free Parking",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-8804a292f099",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.9229182,
                        "longitude": -81.2971289
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.92280191653903,
                        "longitude": -81.29856129469567
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "gwr4nV",
                        "id": "U45_200",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:14",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/gjAgza",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/gjAgza",
                    "timeZoneUtcOffset": "-04:00"
                },
                {
                    "googlePlaceId": "ChIJL1s_dxOc3YgRddM0aYR4OkY",
                    "landingPageUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4",
                    "savedFilters": [
                        "5504",
                        "82068"
                    ],
                    "address": {
                        "line1": "4651 Old Pleasant Hill Road",
                        "city": "Kissimmee",
                        "region": "FL",
                        "postalCode": "34758",
                        "countryCode": "US"
                    },
                    "hours": {
                        "monday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "tuesday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "wednesday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "thursday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "friday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "saturday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        },
                        "sunday": {
                            "openIntervals": [
                                {
                                    "start": "07:00",
                                    "end": "20:00"
                                }
                            ],
                            "isClosed": false
                        }
                    },
                    "logo": {
                        "image": {
                            "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/170x170.png",
                            "width": 170,
                            "height": 170,
                            "thumbnails": [
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/150x150.png",
                                    "width": 150,
                                    "height": 150
                                },
                                {
                                    "url": "http://a.mktgcdn.com/p/VuLRcjqsPE25tTI7405qAAWVY9sS1k1klGbpvAwdpRc/94x94.png",
                                    "width": 94,
                                    "height": 94
                                }
                            ]
                        }
                    },
                    "name": "Bravo Supermarkets",
                    "cityCoordinate": {
                        "latitude": 28.30464,
                        "longitude": -81.415878
                    },
                    "closed": false,
                    "c_activeOnAnswers": true,
                    "c_baseWebsiteURL": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4",
                    "c_brandURL": "https://www.bravosupermarkets.com",
                    "c_cityEncode": "Kissimmee",
                    "c_detailDescription": "Bravo Supermarkets are neighborhood grocery stores that your family can depend on! Because all of our stores are independently owned and operated, we have the unique ability to truly cater to the needs of our communities, which is why no two Bravo Supermarkets are exactly alike! At Bravo you'll find the products that are meant for the people who live in the neighborhood\\- stocked with a large assortment of products.",
                    "c_facebookWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4?utm_source=Facebook\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "c_getDirectionsBaseURL": "https://www.google.com/maps/place/?q=place_id:ChIJL1s_dxOc3YgRddM0aYR4OkY",
                    "c_getDirectionsLink": "https://www.google.com/maps/place/?q=place_id:ChIJL1s_dxOc3YgRddM0aYR4OkY",
                    "c_internalStoreNumber": "45_120",
                    "c_landmarks": "Poinciana Marketplace, 33837, 33896, 34746",
                    "c_liveOnPages": true,
                    "c_locationPageMetaDescription": "Visit your neighborhood grocery store in Kissimmee, FL, located at 4651 Old Pleasant Hill Road. Call Bravo Supermarkets at (407) 343-0478 to discover what products we offer!",
                    "c_locationPageMetaTitle": "Bravo Store Near Me | 4651 Old Pleasant Hill Road, Kissimmee, FL",
                    "c_secondaryCTA": {
                        "label": "Weekly Circular",
                        "linkType": "OTHER",
                        "link": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_120\u0026store_zip=34758\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_setStore": "store_code=U45_120\u0026store_zip=34758\u0026store_city=Kissimmee\u0026store_state=FL",
                    "c_storeName": "Bravo",
                    "c_weeklyCircular": {
                        "ctaDescription": "Weekly Circular",
                        "ctaUrl": "https://www.bravosupermarkets.com/weekly-circular?store_code=U45_120\u0026store_zip=34758\u0026store_city=Kissimmee\u0026store_state=FL"
                    },
                    "c_yelpWebsite": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4?utm_source=Yelp\u0026utm_medium=Listings\u0026utm_campaign=Jan%20Pilot",
                    "displayCoordinate": {
                        "latitude": 28.14669796,
                        "longitude": -81.44297537
                    },
                    "facebookCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/3344x1253.jpg",
                        "width": 3344,
                        "height": 1253,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/1900x711.jpg",
                                "width": 1900,
                                "height": 711
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/619x231.jpg",
                                "width": 619,
                                "height": 231
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/600x224.jpg",
                                "width": 600,
                                "height": 224
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/BrL1jyv-sg73sEeZ0hBVYms86tu7VJxTQgSuXr794Fc/196x73.jpg",
                                "width": 196,
                                "height": 73
                            }
                        ]
                    },
                    "facebookCallToAction": {
                        "type": "SHOP_NOW",
                        "value": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4"
                    },
                    "facebookDescriptor": "4651 Old Pleasant Hill Road, Kissimmee, FL",
                    "facebookPageUrl": "https://www.facebook.com/178235962325084",
                    "facebookParentPageId": "176728006802",
                    "facebookProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/518x518.jpg",
                        "width": 518,
                        "height": 518,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/450x450.jpg",
                                "width": 450,
                                "height": 450
                            },
                            {
                                "url": "http://a.mktgcdn.com/p/OrmLuzLTvaKi_SfoLKMrhkhUIKoeLXmv23V4_UniGgU/196x196.jpg",
                                "width": 196,
                                "height": 196
                            }
                        ]
                    },
                    "facebookVanityUrl": "BravoSupermarketsOldPleasantHillRoad",
                    "featuredMessage": {
                        "description": "Grocery-International-Hot food-Meat-Deli-and more",
                        "url": "https://www.bravosupermarkets.com/Weekly-Circular?store_code=U45_120"
                    },
                    "photoGallery": [
                        {
                            "image": {
                                "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/984x656.jpg",
                                "width": 984,
                                "height": 656,
                                "thumbnails": [
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/619x412.jpg",
                                        "width": 619,
                                        "height": 412
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/600x400.jpg",
                                        "width": 600,
                                        "height": 400
                                    },
                                    {
                                        "url": "http://a.mktgcdn.com/p/iCcPcvOcCGEScPmYar1BEmOXda3pSrpmkR-bv5UPMSQ/196x130.jpg",
                                        "width": 196,
                                        "height": 130
                                    }
                                ]
                            }
                        }
                    ],
                    "geocodedCoordinate": {
                        "latitude": 28.1466688,
                        "longitude": -81.4429838
                    },
                    "googleAccountId": "114708917908456747148",
                    "googleCoverPhoto": {
                        "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/5150x2897.jpg",
                        "width": 5150,
                        "height": 2897,
                        "thumbnails": [
                            {
                                "url": "http://a.mktgcdn.com/p/tK1W9iE6wQGKURYI4c78LDjkr2ojTXoJ63NE_-m6F-0/2119x1192.jpg",
                                "width": 2119,
                                "height": 1192
                            }
                        ]
                    },
                    "googleProfilePhoto": {
                        "url": "http://a.mktgcdn.com/p/AgZN0u9yv5vwtVGtqIa-fNyPGiBh1_QKtJE2_Cx66xk/270x270.jpg",
                        "width": 270,
                        "height": 270,
                        "sourceUrl": "https://lh3.googleusercontent.com/lxpMZas7C8xZsa2ztxKCpdsUrr4046KR92ovTX0iMpLE0JE6ZKrfDTxcZGlcmUhTRjefPyeLRUqft48HqQ=s0"
                    },
                    "googleWebsiteOverride": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4?utm_source=google\u0026utm_medium=organic\u0026utm_campaign=Yext",
                    "isoRegionCode": "FL",
                    "mainPhone": "+14073430478",
                    "paymentOptions": [
                        "AMERICANEXPRESS",
                        "DISCOVER",
                        "MASTERCARD",
                        "VISA"
                    ],
                    "rankTrackingEnabled": true,
                    "rankTrackingFrequency": "WEEKLY",
                    "rankTrackingKeywords": [
                        "NAME",
                        "PRIMARY_CATEGORY"
                    ],
                    "rankTrackingQueryTemplates": [
                        "KEYWORD_ZIP",
                        "KEYWORD_CITY",
                        "KEYWORD_NEAR_ME",
                        "KEYWORD_CITY_STATE"
                    ],
                    "rankTrackingSites": [
                        "GOOGLE_DESKTOP",
                        "GOOGLE_MOBILE",
                        "BING_DESKTOP",
                        "BING_MOBILE",
                        "YAHOO_DESKTOP",
                        "YAHOO_MOBILE"
                    ],
                    "services": [
                        "Grocery Store",
                        "Deli",
                        "Prepared Foods",
                        "Lotto",
                        "Beer",
                        "Free Parking",
                        "Money Transfer"
                    ],
                    "timezone": "America/New_York",
                    "websiteUrl": {
                        "url": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4",
                        "displayUrl": "https://locations.bravosupermarkets.com/bravo-supermarkets-0767652214b4",
                        "preferDisplayUrl": false
                    },
                    "yextDisplayCoordinate": {
                        "latitude": 28.14683054448683,
                        "longitude": -81.44288789006043
                    },
                    "yextRoutableCoordinate": {
                        "latitude": 28.14637518422579,
                        "longitude": -81.44355274580727
                    },
                    "yextWalkableCoordinate": {
                        "latitude": 28.14669919220181,
                        "longitude": -81.4429814352871
                    },
                    "meta": {
                        "accountId": "4489659737660950802",
                        "uid": "5PaygJ",
                        "id": "U45_120",
                        "timestamp": "2023-10-05T18:51:20",
                        "createdTimestamp": "2020-01-14T22:31:17",
                        "labels": [
                            "102613"
                        ],
                        "folderId": "310312",
                        "schemaTypes": [
                            "GroceryStore"
                        ],
                        "language": "en",
                        "countryCode": "US",
                        "entityType": "location"
                    },
                    "categoryIds": [
                        "1500886",
                        "1059493",
                        "1143"
                    ],
                    "reviewGenerationUrl": "https://www.leavefeedback.app/tp/MqPdob",
                    "firstPartyReviewPage": "https://www.leavefeedback.app/survey/MqPdob",
                    "timeZoneUtcOffset": "-04:00"
                }
            ],
            "count": 14,
            "geo": {
                "coordinate": {
                    "latitude": 28.5383832,
                    "longitude": -81.3789269,
                    "granularity": "LOCALITY"
                },
                "address": {
                    "line1": "",
                    "region": "FL",
                    "postalCode": "",
                    "country": "US",
                    "city": "Orlando"
                }
            },
            "distances": [
                {
                    "id": "U45_009",
                    "distanceMiles": 3.23461585505293,
                    "distanceKilometers": 5.205609618634303
                },
                {
                    "id": "U45_010",
                    "distanceMiles": 4.444864497252234,
                    "distanceKilometers": 7.153316009465899
                },
                {
                    "id": "U45_019",
                    "distanceMiles": 5.388224585370853,
                    "distanceKilometers": 8.67150690711907
                },
                {
                    "id": "U45_011",
                    "distanceMiles": 6.424738336047562,
                    "distanceKilometers": 10.339614092688128
                },
                {
                    "id": "U45_141",
                    "distanceMiles": 8.57568381967028,
                    "distanceKilometers": 13.801225301083448
                },
                {
                    "id": "U45_251",
                    "distanceMiles": 9.251305149950548,
                    "distanceKilometers": 14.888532435242016
                },
                {
                    "id": "U45_111",
                    "distanceMiles": 10.787595056957906,
                    "distanceKilometers": 17.360951379344865
                },
                {
                    "id": "U45_142",
                    "distanceMiles": 10.95787328056382,
                    "distanceKilometers": 17.6349876168357
                },
                {
                    "id": "U45_007",
                    "distanceMiles": 13.752520256263642,
                    "distanceKilometers": 22.132535959296355
                },
                {
                    "id": "U45_014",
                    "distanceMiles": 13.753501777894387,
                    "distanceKilometers": 22.134115565243665
                },
                {
                    "id": "U45_110",
                    "distanceMiles": 16.722353262830357,
                    "distanceKilometers": 26.91201888941646
                },
                {
                    "id": "U45_140",
                    "distanceMiles": 17.28509344552077,
                    "distanceKilometers": 27.817661425988177
                },
                {
                    "id": "U45_200",
                    "distanceMiles": 27.027101872170736,
                    "distanceKilometers": 43.495904235366744
                },
                {
                    "id": "U45_120",
                    "distanceMiles": 27.33187871603426,
                    "distanceKilometers": 43.986395020377444
                }
            ]
        }
    };

    let arr = [] ;

    jsonData.response.entities.forEach((feature) => {
      arr.push({
        address: { 
            streetAddress: feature.address.line1,
            city: feature.address.city,
            state: feature.address.region,
            zip: feature.address.postalCode
        }
        ,
        hours: {
           Monday: {
           open: feature.hours.monday.openIntervals[0].start + " AM",
         close: parseInt(feature.hours.monday.openIntervals[0].end) -12 + ":00 PM"
        },

        Tuesday: {
            open: feature.hours.tuesday.openIntervals[0].start + " AM",
          close: parseInt(feature.hours.tuesday.openIntervals[0].end) -12 + ":00 PM"
         }

         ,

        Wednesday: {
            open: feature.hours.wednesday.openIntervals[0].start + " AM",
          close: parseInt(feature.hours.wednesday.openIntervals[0].end) -12 + ":00 PM"
         }
         
         ,

        Thursday: {
            open: feature.hours.thursday.openIntervals[0].start + " AM",
          close: parseInt(feature.hours.thursday.openIntervals[0].end) -12 + ":00 PM"
         }
         ,

         Friday: {
             open: feature.hours.friday.openIntervals[0].start + " AM",
           close: parseInt(feature.hours.friday.openIntervals[0].end) -12 + ":00 PM"
          }
          ,

        Saturday: {
              open: feature.hours.saturday.openIntervals[0].start + " AM",
            close: parseInt(feature.hours.saturday.openIntervals[0].end) -12 + ":00 PM"
           }
           ,

        Sunday: {
            open: feature.hours.sunday.openIntervals[0].start + " AM",
          close: parseInt(feature.hours.sunday.openIntervals[0].end) -12 + ":00 PM"
         }

            
        }
            ,
        lat: feature.yextDisplayCoordinate.latitude,
        long: feature.yextDisplayCoordinate.longitude,
        phoneNumber: "(" + feature.mainPhone.slice(2,5) + ") " + feature.mainPhone.slice(5,8) + "-" + feature.mainPhone.slice(8)
        
        
        ,
        type: "Bravo",
        website: feature.websiteUrl.displayUrl,
        lastUpdated: new Date().toLocaleDateString(),
        image: feature.googleCoverPhoto.url
       
      });
    });
  
    console.log(arr);
    const jsonString = JSON.stringify(arr);
    fs.writeFileSync('bravo.json', jsonString);

  };

getBravoData();