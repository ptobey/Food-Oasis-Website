//import { IFormattedJson } from "./interface";
const fs = require('fs');


const getCostcoData = () => {
  const jsonData = {
    
 
        "warehouses": [
            {
                "warehouseId": "1235",
                "name": [
                    {
                        "value": "S Orlando",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 4.459443942268244,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4696 GARDENS PARK BLVD",
                    "city": "ORLANDO",
                    "territory": "FL",
                    "postalCode": "32839-2171",
                    "countryName": "US",
                    "latitude": 28.49558124,
                    "longitude": -81.42512154,
                    "geoText": "28.49558124 -81.42512154 WGS84"
                },
                "phone": "(407) 586-7221",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 586-7243"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 586-7241"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 586-7234"
                    },
                    {
                        "id": "1087130",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 586-7231",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(407) 586-7222"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "propane",
                        "name": [
                            {
                                "value": "Propane",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1986-09-18"
            },
            {
                "warehouseId": "185",
                "name": [
                    {
                        "value": "E Orlando",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 6.020237323664919,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "3333 UNIVERSITY BLVD",
                    "city": "WINTER PARK",
                    "territory": "FL",
                    "postalCode": "32792-7428",
                    "countryName": "US",
                    "latitude": 28.59878957,
                    "longitude": -81.30008827,
                    "geoText": "28.59878957 -81.30008827 WGS84"
                },
                "phone": "(407) 681-2119",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 681-1604"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 551-2252"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 681-2105"
                    },
                    {
                        "id": "1087382",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 681-2110",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 681-1606",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "BBQ Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Gourmet Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "propane",
                        "name": [
                            {
                                "value": "Propane",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1999-12-08"
            },
            {
                "warehouseId": "183",
                "name": [
                    {
                        "value": "Altamonte Springs",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 8.379037137632958,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "741 ORANGE AVE",
                    "city": "ALTAMONTE SPRINGS",
                    "territory": "FL",
                    "postalCode": "32714-3031",
                    "countryName": "US",
                    "latitude": 28.66100954,
                    "longitude": -81.41771511,
                    "geoText": "28.66100954 -81.41771511 WGS84"
                },
                "phone": "(407) 786-7802",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 786-7821"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 786-7804"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 786-7814"
                    },
                    {
                        "id": "1078624",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 786-7818",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(407) 786-7833",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1985-06-20"
            },
            {
                "warehouseId": "651",
                "name": [
                    {
                        "value": "Orlando Bus Ctr",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 9.89878991799112,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "Business Center",
                    "name": [
                        {
                            "value": "Business Center",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2101 WATERBRIDGE BLVD",
                    "city": "ORLANDO",
                    "territory": "FL",
                    "postalCode": "32837-9283",
                    "countryName": "US",
                    "latitude": 28.40404658,
                    "longitude": -81.40614041,
                    "geoText": "28.40404658 -81.40614041 WGS84"
                },
                "phone": "(407) 586-7271",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "07:00:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "07:00:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "08:00:00",
                        "close": "16:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Deliver",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Delivery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Office Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Restaurant Supplies",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Select Produce & Area",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Tobacco",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "BD",
                "openingDate": "2016-08-26"
            },
            {
                "warehouseId": "1649",
                "name": [
                    {
                        "value": "Clermont",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 17.544478291305804,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4600 COLLINA TERRACE",
                    "city": "CLERMONT",
                    "territory": "FL",
                    "postalCode": "34711",
                    "countryName": "US",
                    "latitude": 28.547545,
                    "longitude": -81.6667294,
                    "geoText": "28.547545 -81.6667294 WGS84"
                },
                "phone": "(689) 407-3663",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3685"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3698",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3683"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3676"
                    },
                    {
                        "id": "5755410",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3673",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(689) 407-3664"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(689) 407-3675",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bedding",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Beer",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Beer & Wine",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Carpeting/Area Rugs",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Delivery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "diesel",
                        "name": [
                            {
                                "value": "Diesel",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "EV Station",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fine Wines and Liquor",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Fish",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information - English",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Lighting",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Office Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rebates",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Select Produce & Area",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Self Check-out",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Shipping Department",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2023-11-14"
            },
            {
                "warehouseId": "1450",
                "name": [
                    {
                        "value": "Melbourne",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 47.012436999890575,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4305 PINEDA CAUSEWAY",
                    "city": "MELBOURNE",
                    "territory": "FL",
                    "postalCode": "32940",
                    "countryName": "US",
                    "latitude": 28.18942,
                    "longitude": -80.719726,
                    "geoText": "28.18942 -80.719726 WGS84"
                },
                "phone": "(321) 428-2910",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(321) 428-2932"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "id": "5748782",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(321) 428-2920",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(321) 428-2911"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2021-12-09"
            },
            {
                "warehouseId": "1681",
                "name": [
                    {
                        "value": "Daytona",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 48.38074094438318,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "150 PIT ROAD",
                    "city": "DAYTONA BEACH",
                    "territory": "FL",
                    "postalCode": "32114",
                    "countryName": "US",
                    "latitude": 29.19118,
                    "longitude": -81.07229,
                    "geoText": "29.19118 -81.07229 WGS84"
                },
                "phone": "(386) 267-3200",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(386) 267-3222"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(386) 267-3220"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(386) 267-3213"
                    },
                    {
                        "id": "5756587",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(386) 267-3210",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(386) 267-3201"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(386) 267-3212",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Beer",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Beer & Wine",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Lighting",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Office Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Self Check-out",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2024-02-22"
            },
            {
                "warehouseId": "1249",
                "name": [
                    {
                        "value": "Wesley Chapel",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 66.53971860452782,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2225 GRAND CYPRESS DR",
                    "city": "LUTZ",
                    "territory": "FL",
                    "postalCode": "33559-6797",
                    "countryName": "US",
                    "latitude": 28.18938944,
                    "longitude": -82.39380947,
                    "geoText": "28.18938944 -82.39380947 WGS84"
                },
                "phone": "(813) 279-7031",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 279-7045"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 279-7043"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 279-7036"
                    },
                    {
                        "id": "5733301",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 279-7033",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 279-7035",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2017-02-08"
            },
            {
                "warehouseId": "358",
                "name": [
                    {
                        "value": "Brandon",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 72.32468308351335,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "10921 CAUSEWAY BLVD",
                    "city": "BRANDON",
                    "territory": "FL",
                    "postalCode": "33511-1997",
                    "countryName": "US",
                    "latitude": 27.92138188,
                    "longitude": -82.33062041,
                    "geoText": "27.92138188 -82.33062041 WGS84"
                },
                "phone": "(813) 952-0103",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 952-0119"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 952-0147"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 952-0101"
                    },
                    {
                        "id": "1091254",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 952-0102",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 952-0118",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2000-11-28"
            },
            {
                "warehouseId": "1262",
                "name": [
                    {
                        "value": "W Tampa",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 81.0784474271966,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "8712 W LINEBAUGH AVE",
                    "city": "TAMPA",
                    "territory": "FL",
                    "postalCode": "33625-3713",
                    "countryName": "US",
                    "latitude": 28.0419239,
                    "longitude": -82.58036482,
                    "geoText": "28.0419239 -82.58036482 WGS84"
                },
                "phone": "(813) 616-7001",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7023"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7036",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7021"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7014"
                    },
                    {
                        "id": "5733298",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7011",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(813) 616-7002"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(813) 616-7013",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2017-02-09"
            },
            {
                "warehouseId": "336",
                "name": [
                    {
                        "value": "Clearwater",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 91.78806094822532,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2655 GULF TO BAY BLVD",
                    "city": "CLEARWATER",
                    "territory": "FL",
                    "postalCode": "33759-4936",
                    "countryName": "US",
                    "latitude": 27.95656447,
                    "longitude": -82.72823477,
                    "geoText": "27.95656447 -82.72823477 WGS84"
                },
                "phone": "(727) 373-1951",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(727) 373-1955"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(727) 373-1967"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(727) 373-1949"
                    },
                    {
                        "id": "1098436",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(727) 373-1953",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(727) 373-1956",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2003-05-15"
            },
            {
                "warehouseId": "1364",
                "name": [
                    {
                        "value": "Bradenton",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 98.61996113297224,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "805 LIGHTHOUSE DRIVE",
                    "city": "BRADENTON",
                    "territory": "FL",
                    "postalCode": "34212",
                    "countryName": "US",
                    "latitude": 27.49462445,
                    "longitude": -82.47014406,
                    "geoText": "27.49462445 -82.47014406 WGS84"
                },
                "phone": "(941) 213-0747",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 213-0769"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 213-0767"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 213-0760"
                    },
                    {
                        "id": "5741649",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 213-0757",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 213-0759"
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2019-08-21"
            },
            {
                "warehouseId": "1615",
                "name": [
                    {
                        "value": "St Augustine",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 99.53273058484814,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "215 WORLD COMMERCE PARKWAY",
                    "city": "ST. AUGUSTINE",
                    "territory": "FL",
                    "postalCode": "32092",
                    "countryName": "US",
                    "latitude": 29.98205,
                    "longitude": -81.46277,
                    "geoText": "29.98205 -81.46277 WGS84"
                },
                "phone": "(904) 687-1299",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1321"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1334",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1319"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1312"
                    },
                    {
                        "id": "5751018",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1309",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "06:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(904) 687-1300"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 687-1311",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information - English",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2022-08-03"
            },
            {
                "warehouseId": "1123",
                "name": [
                    {
                        "value": "Sarasota Mall",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 113.32199243876127,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "8201 S TAMIAMI TRL UNIT 501",
                    "city": "SARASOTA",
                    "territory": "FL",
                    "postalCode": "34238-2966",
                    "countryName": "US",
                    "latitude": 27.23473942,
                    "longitude": -82.49078657,
                    "geoText": "27.23473942 -82.49078657 WGS84"
                },
                "phone": "(941) 554-2800",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 554-2823"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 554-2821"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 554-2814"
                    },
                    {
                        "id": "5710858",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 554-2801",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 554-2813",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2012-08-17"
            },
            {
                "warehouseId": "1294",
                "name": [
                    {
                        "value": "W Jacksonville",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 116.84551934422603,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "8000 PARRAMORE RD",
                    "city": "JACKSONVILLE",
                    "territory": "FL",
                    "postalCode": "32244-5704",
                    "countryName": "US",
                    "latitude": 30.20170935,
                    "longitude": -81.75663509,
                    "geoText": "30.20170935 -81.75663509 WGS84"
                },
                "phone": "(904) 479-7521",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 479-7543"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 479-7541"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 479-7533"
                    },
                    {
                        "id": "5736484",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 479-7522",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 479-7532"
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2018-02-08"
            },
            {
                "warehouseId": "357",
                "name": [
                    {
                        "value": "E Jacksonville",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 118.44752696456021,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4901 GATE PKWY",
                    "city": "JACKSONVILLE",
                    "territory": "FL",
                    "postalCode": "32246-4405",
                    "countryName": "US",
                    "latitude": 30.25199439,
                    "longitude": -81.53411741,
                    "geoText": "30.25199439 -81.53411741 WGS84"
                },
                "phone": "(904) 997-7003",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 997-7019"
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 997-7027"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 997-7001"
                    },
                    {
                        "id": "1091266",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 997-7002",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(904) 997-7041",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2000-11-29"
            },
            {
                "warehouseId": "1682",
                "name": [
                    {
                        "value": "North Port",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 118.62972631826798,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "11700 MEZZO DRIVE",
                    "line2": "11700 MEZZO DRIVE",
                    "city": "NORTH PORT",
                    "territory": "FL",
                    "postalCode": "34293",
                    "countryName": "US",
                    "latitude": 27.0398,
                    "longitude": -82.30727,
                    "geoText": "27.03980 -82.30727 WGS84"
                },
                "phone": "(941) 548-4712",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4771"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4791",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4769"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4757"
                    },
                    {
                        "id": "5757236",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4752",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(941) 548-4713"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(941) 548-4756",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information - English",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Self Check-out",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2024-06-05"
            },
            {
                "warehouseId": "351",
                "name": [
                    {
                        "value": "Fort Myers",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 141.65521354003354,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "7171 CYPRESS LAKE DR",
                    "city": "FORT MYERS",
                    "territory": "FL",
                    "postalCode": "33907-6521",
                    "countryName": "US",
                    "latitude": 26.54489238,
                    "longitude": -81.87422182,
                    "geoText": "26.54489238 -81.87422182 WGS84"
                },
                "phone": "(239) 415-3806",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 415-3824"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 267-6389"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 415-3800"
                    },
                    {
                        "id": "1087217",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 415-3802",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 415-3827",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "A PS Processing",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "BBQ Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Beer & Wine",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Gourmet Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Tobacco",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1999-09-30"
            },
            {
                "warehouseId": "93",
                "name": [
                    {
                        "value": "Palm Beach Gardens",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 143.87644636521196,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "3250 NORTHLAKE BLVD",
                    "city": "PALM BEACH GARDENS",
                    "territory": "FL",
                    "postalCode": "33403-1702",
                    "countryName": "US",
                    "latitude": 26.8069823,
                    "longitude": -80.08754456,
                    "geoText": "26.8069823 -80.08754456 WGS84"
                },
                "phone": "(561) 776-3052",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 776-3040"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 776-3045"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 776-3033"
                    },
                    {
                        "id": "1078713",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 776-3037",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1989-05-18"
            },
            {
                "warehouseId": "621",
                "name": [
                    {
                        "value": "Estero",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 144.36009608532277,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "10088 GULF CENTER DR",
                    "city": "FORT MYERS",
                    "territory": "FL",
                    "postalCode": "33913-8961",
                    "countryName": "US",
                    "latitude": 26.48959901,
                    "longitude": -81.78613876,
                    "geoText": "26.48959901 -81.78613876 WGS84"
                },
                "phone": "(239) 433-7240",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 433-7255"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 433-7264"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 433-7251"
                    },
                    {
                        "id": "1025003",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 433-7249",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 433-7257",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2007-04-12"
            },
            {
                "warehouseId": "623",
                "name": [
                    {
                        "value": "Royal Palm Beach",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 147.0303750714015,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "11001 SOUTHERN BLVD",
                    "city": "ROYAL PALM BEACH",
                    "territory": "FL",
                    "postalCode": "33411-4240",
                    "countryName": "US",
                    "latitude": 26.68296389,
                    "longitude": -80.22086613,
                    "geoText": "26.68296389 -80.22086613 WGS84"
                },
                "phone": "(561) 803-8822",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 803-8835"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 803-8844"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 803-8831"
                    },
                    {
                        "id": "1025041",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 803-8829",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2007-04-13"
            },
            {
                "warehouseId": "180",
                "name": [
                    {
                        "value": "Lantana",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 157.2670077801235,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1873 LANTANA RD",
                    "city": "LANTANA",
                    "territory": "FL",
                    "postalCode": "33462-2601",
                    "countryName": "US",
                    "latitude": 26.58857476,
                    "longitude": -80.07119551,
                    "geoText": "26.58857476 -80.07119551 WGS84"
                },
                "phone": "(561) 533-0958",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 533-0498"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 533-0558",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 227-1228"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 533-5577"
                    },
                    {
                        "id": "1067188",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 533-5522",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 533-5078",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1984-11-15"
            },
            {
                "warehouseId": "354",
                "name": [
                    {
                        "value": "Naples",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 162.64980380997994,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "6275 NAPLES BLVD",
                    "city": "NAPLES",
                    "territory": "FL",
                    "postalCode": "34109-2030",
                    "countryName": "US",
                    "latitude": 26.22016994,
                    "longitude": -81.77530803,
                    "geoText": "26.22016994 -81.77530803 WGS84"
                },
                "phone": "(239) 596-6404",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 596-6415"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 596-3744"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 596-6408"
                    },
                    {
                        "id": "1087623",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 596-6410",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(239) 596-6417",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "A PS Processing",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "BBQ Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Gourmet Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Take Out Pizza",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Wheelchair Available",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1999-12-07"
            },
            {
                "warehouseId": "345",
                "name": [
                    {
                        "value": "Boca Raton",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 167.03712113953821,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "17800 CONGRESS AVE",
                    "city": "BOCA RATON",
                    "territory": "FL",
                    "postalCode": "33487-1200",
                    "countryName": "US",
                    "latitude": 26.41241745,
                    "longitude": -80.10079168,
                    "geoText": "26.41241745 -80.10079168 WGS84"
                },
                "phone": "(561) 981-5004",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 981-5008"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 981-5012"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 981-5002"
                    },
                    {
                        "id": "1096280",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 981-5003",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(561) 981-5009",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1990-08-30"
            },
            {
                "warehouseId": "1323",
                "name": [
                    {
                        "value": "Coral Springs",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 170.01118694935226,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4621 CORAL RIDGE DR.",
                    "city": "CORAL SPRINGS",
                    "territory": "FL",
                    "postalCode": "33076-2200",
                    "countryName": "US",
                    "latitude": 26.28861328,
                    "longitude": -80.27997073,
                    "geoText": "26.28861328 -80.27997073 WGS84"
                },
                "phone": "(954) 715-8240",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 715-8262"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 715-8260"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 715-8253"
                    },
                    {
                        "id": "5739822",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 715-8250",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(954) 715-8241"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 715-8252"
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2019-02-07"
            },
            {
                "warehouseId": "88",
                "name": [
                    {
                        "value": "Pompano",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 174.292716281399,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1800 W SAMPLE RD",
                    "city": "POMPANO BEACH",
                    "territory": "FL",
                    "postalCode": "33064-1324",
                    "countryName": "US",
                    "latitude": 26.27345964,
                    "longitude": -80.14939326,
                    "geoText": "26.27345964 -80.14939326 WGS84"
                },
                "phone": "(954) 968-7114",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 968-7104"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 247-3565"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 972-0244"
                    },
                    {
                        "id": "1067164",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 972-0313",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 968-2118",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1988-11-29"
            },
            {
                "warehouseId": "91",
                "name": [
                    {
                        "value": "Davie",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 183.0378856240409,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1890 S UNIVERSITY DR",
                    "city": "DAVIE",
                    "territory": "FL",
                    "postalCode": "33324-5808",
                    "countryName": "US",
                    "latitude": 26.0966429,
                    "longitude": -80.24786345,
                    "geoText": "26.0966429 -80.24786345 WGS84"
                },
                "phone": "(954) 370-8990",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 236-7857"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 236-7858"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 236-7833"
                    },
                    {
                        "id": "1067176",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 236-7837",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 236-7853",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1989-08-17"
            },
            {
                "warehouseId": "742",
                "name": [
                    {
                        "value": "Pembroke Pines",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 186.18886016759618,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "15915 PINES BLVD",
                    "city": "PEMBROKE PINES",
                    "territory": "FL",
                    "postalCode": "33027-1201",
                    "countryName": "US",
                    "latitude": 26.0098,
                    "longitude": -80.3601,
                    "geoText": "26.0098 -80.3601 WGS84"
                },
                "phone": "(954) 266-3460",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 266-3465"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 266-3471"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 438-2021"
                    },
                    {
                        "id": "1012448",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 266-3488",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(954) 266-3466",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2005-10-14"
            },
            {
                "warehouseId": "181",
                "name": [
                    {
                        "value": "Miami Lakes",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 193.09828840655126,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "16580 NW 59TH AVE",
                    "city": "MIAMI LAKES",
                    "territory": "FL",
                    "postalCode": "33014-5611",
                    "countryName": "US",
                    "latitude": 25.92339894,
                    "longitude": -80.29882045,
                    "geoText": "25.92339894 -80.29882045 WGS84"
                },
                "phone": "(305) 825-9818",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 824-3214"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 821-8502"
                    },
                    {
                        "id": "1086506",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 825-2662",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 821-2152",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1992-12-12"
            },
            {
                "warehouseId": "1332",
                "name": [
                    {
                        "value": "N Miami",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 197.04131960684938,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "14800 SOLE MIA WAY",
                    "city": "NORTH MIAMI",
                    "territory": "FL",
                    "postalCode": "33181",
                    "countryName": "US",
                    "latitude": 25.91236913,
                    "longitude": -80.15407949,
                    "geoText": "25.91236913 -80.15407949 WGS84"
                },
                "phone": "(305) 944-8711",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 944-5572"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 944-1419"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 354-8022"
                    },
                    {
                        "id": "1094933",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 956-3874",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(305) 956-5842"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 945-9167",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1992-12-12"
            },
            {
                "warehouseId": "1229",
                "name": [
                    {
                        "value": "Miami",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 202.30982687432956,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "7795 WEST FLAGLER STREET",
                    "line2": "STE 01",
                    "city": "MIAMI",
                    "territory": "FL",
                    "postalCode": "33144-2359",
                    "countryName": "US",
                    "latitude": 25.77502135,
                    "longitude": -80.32244769,
                    "geoText": "25.77502135 -80.32244769 WGS84"
                },
                "phone": "(786) 482-7135",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(786) 482-7157"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(786) 482-7155"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(786) 482-7148"
                    },
                    {
                        "id": "1078838",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(786) 482-7145",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1989-10-26"
            },
            {
                "warehouseId": "1023",
                "name": [
                    {
                        "value": "Kendall",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 208.61723563399653,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "13450 SW 120TH ST",
                    "city": "MIAMI",
                    "territory": "FL",
                    "postalCode": "33186-7393",
                    "countryName": "US",
                    "latitude": 25.65398952,
                    "longitude": -80.41262414,
                    "geoText": "25.65398952 -80.41262414 WGS84"
                },
                "phone": "(305) 964-4227",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 964-4242"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 964-4251"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 964-4238"
                    },
                    {
                        "id": "1032743",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(305) 964-4236",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "propane",
                        "name": [
                            {
                                "value": "Propane",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1988-11-16"
            },
            {
                "warehouseId": "1026",
                "name": [
                    {
                        "value": "Tallahassee",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 216.06014798029025,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "4067 LAGNIAPPE WAY",
                    "city": "TALLAHASSEE",
                    "territory": "FL",
                    "postalCode": "32317-1201",
                    "countryName": "US",
                    "latitude": 30.46091165,
                    "longitude": -84.21289584,
                    "geoText": "30.46091165 -84.21289584 WGS84"
                },
                "phone": "(850) 219-2500",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2515"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2550",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2521"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2511"
                    },
                    {
                        "id": "1032755",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2509",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(850) 219-2516",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2008-04-09"
            },
            {
                "warehouseId": "1485",
                "name": [
                    {
                        "value": "Pooler",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 244.63528472925944,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "200 MOSAIC CIRCLE",
                    "city": "POOLER",
                    "territory": "GA",
                    "postalCode": "31322",
                    "countryName": "US",
                    "latitude": 32.0806428,
                    "longitude": -81.27739327,
                    "geoText": "32.0806428 -81.27739327 WGS84"
                },
                "phone": "(912) 348-4569",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(912) 348-4591"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(912) 348-4589"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(912) 348-4582"
                    },
                    {
                        "id": "1176709",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(912) 348-4579",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(912) 348-4570"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(912) 348-4581",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2021-11-18"
            },
            {
                "warehouseId": "360",
                "name": [
                    {
                        "value": "Charleston",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 304.64800365780894,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "3050 ASHLEY TOWN CENTER DR",
                    "city": "CHARLESTON",
                    "territory": "SC",
                    "postalCode": "29414-5664",
                    "countryName": "US",
                    "latitude": 32.79543709,
                    "longitude": -80.03564508,
                    "geoText": "32.79543709 -80.03564508 WGS84"
                },
                "phone": "(843) 460-2003",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 460-2007"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 460-2028"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 460-2001"
                    },
                    {
                        "id": "4223474",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 460-2002",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 460-2009",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Hot Dog Stand",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "propane",
                        "name": [
                            {
                                "value": "Propane",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2001-04-18"
            },
            {
                "warehouseId": "1319",
                "name": [
                    {
                        "value": "Mt Pleasant",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 314.8269448588231,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "3525 PARK AVENUE BLVD",
                    "city": "MOUNT PLEASANT",
                    "territory": "SC",
                    "postalCode": "29466-7242",
                    "countryName": "US",
                    "latitude": 32.88157339,
                    "longitude": -79.76966865,
                    "geoText": "32.88157339 -79.76966865 WGS84"
                },
                "phone": "(843) 375-7021",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 375-7043"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 375-7041"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 375-7034"
                    },
                    {
                        "id": "4235708",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 375-7031",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 375-7033"
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2018-08-08"
            },
            {
                "warehouseId": "1102",
                "name": [
                    {
                        "value": "Augusta",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 346.5479957806426,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "825 CABELA DR",
                    "city": "AUGUSTA",
                    "territory": "GA",
                    "postalCode": "30909-8202",
                    "countryName": "US",
                    "latitude": 33.52479023,
                    "longitude": -82.0202708,
                    "geoText": "33.52479023 -82.0202708 WGS84"
                },
                "phone": "(706) 739-1700",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 739-1722"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 739-1720"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 739-1713"
                    },
                    {
                        "id": "1161734",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 739-1701",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 739-1712",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2011-11-16"
            },
            {
                "warehouseId": "1675",
                "name": [
                    {
                        "value": "Stockbridge",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 380.67076702289637,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2245 JODECO ROAD",
                    "city": "MCDONOUGH",
                    "territory": "GA",
                    "postalCode": "30253",
                    "countryName": "US",
                    "latitude": 33.481273,
                    "longitude": -84.218946,
                    "geoText": "33.481273 -84.218946 WGS84"
                },
                "phone": "(678) 272-3288",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3310"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3323",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3308"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3303"
                    },
                    {
                        "id": "1179743",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3298",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(678) 272-3289"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 272-3300"
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "EV Station",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information - English",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2023-11-16"
            },
            {
                "warehouseId": "1232",
                "name": [
                    {
                        "value": "Columbia SC",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 382.4824723956993,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "507 PINEY GROVE RD",
                    "city": "COLUMBIA",
                    "territory": "SC",
                    "postalCode": "29210-3405",
                    "countryName": "US",
                    "latitude": 34.0708318,
                    "longitude": -81.13971642,
                    "geoText": "34.0708318 -81.13971642 WGS84"
                },
                "phone": "(803) 875-7130",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(803) 875-7152"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(803) 875-7150"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(803) 875-7143"
                    },
                    {
                        "id": "4233893",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(803) 875-7140",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(803) 875-7131"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(803) 875-7142",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2016-08-10"
            },
            {
                "warehouseId": "338",
                "name": [
                    {
                        "value": "Myrtle Beach",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 385.5540802489356,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1021 OAK FOREST LN",
                    "city": "MYRTLE BEACH",
                    "territory": "SC",
                    "postalCode": "29577-9795",
                    "countryName": "US",
                    "latitude": 33.70578275,
                    "longitude": -78.91593686,
                    "geoText": "33.70578275 -78.91593686 WGS84"
                },
                "phone": "(843) 839-6604",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 839-6610"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 839-6616"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 839-6608"
                    },
                    {
                        "id": "4225036",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 839-6606",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(843) 839-6611",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fine Wines and Liquor",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "propane",
                        "name": [
                            {
                                "value": "Propane",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2004-03-18"
            },
            {
                "warehouseId": "1361",
                "name": [
                    {
                        "value": "Sharpsburg",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 386.98144917751193,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "40 FISCHER CROSSINGS DR",
                    "city": "SHARPSBURG",
                    "territory": "GA",
                    "postalCode": "30277",
                    "countryName": "US",
                    "latitude": 33.400461,
                    "longitude": -84.621576,
                    "geoText": "33.400461 -84.621576 WGS84"
                },
                "phone": "(678) 621-8594",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 621-8616"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 621-8614"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 621-8607"
                    },
                    {
                        "id": "1173753",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 621-8604",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(678) 621-8595"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 621-8606",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2019-08-22"
            },
            {
                "warehouseId": "1009",
                "name": [
                    {
                        "value": "Montgomery",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 388.1898233448627,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "8251 EASTCHASE PKWY",
                    "city": "MONTGOMERY",
                    "territory": "AL",
                    "postalCode": "36117-7033",
                    "countryName": "US",
                    "latitude": 32.36370029,
                    "longitude": -86.15090717,
                    "geoText": "32.36370029 -86.15090717 WGS84"
                },
                "phone": "(334) 270-7452",
                "timeZone": "America/Chicago",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(334) 270-7465"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(334) 270-7474"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(334) 270-7461"
                    },
                    {
                        "id": "0134712",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(334) 270-7459",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2007-10-04"
            },
            {
                "warehouseId": "579",
                "name": [
                    {
                        "value": "Morrow Bus Ctr",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 389.2856734334036,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "Business Center",
                    "name": [
                        {
                            "value": "Business Center",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1700 MOUNT ZION RD",
                    "city": "MORROW",
                    "territory": "GA",
                    "postalCode": "30260-3014",
                    "countryName": "US",
                    "latitude": 33.57211196,
                    "longitude": -84.33365782,
                    "geoText": "33.57211196 -84.33365782 WGS84"
                },
                "phone": "(678) 201-0003",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "07:00:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "07:00:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "08:00:00",
                        "close": "16:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 422-9906",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Deliver",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Business Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Delivery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Office Furniture",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Restaurant & Hospitality Products",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Restaurant Supplies",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Tobacco",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "BD",
                "openingDate": "2012-09-04"
            },
            {
                "warehouseId": "1621",
                "name": [
                    {
                        "value": "Athens",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 391.5795323433883,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "5550 PARKWAY BLVD",
                    "city": "ATHENS",
                    "territory": "GA",
                    "postalCode": "30606",
                    "countryName": "US",
                    "latitude": 33.9203376702672,
                    "longitude": -83.45650520584108,
                    "geoText": "33.9203376702672 -83.45650520584108 WGS84"
                },
                "phone": "(706) 247-8134",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 247-8156"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 247-8154"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 247-8147"
                    },
                    {
                        "id": "1178359",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(706) 247-8144",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ],
                        "fax": "(706) 247-8135"
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "*General Information - English",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2022-11-15"
            },
            {
                "warehouseId": "187",
                "name": [
                    {
                        "value": "Gwinnett",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 407.85867104084235,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "3980 VENTURE DR",
                    "city": "DULUTH",
                    "territory": "GA",
                    "postalCode": "30096-5077",
                    "countryName": "US",
                    "latitude": 33.94754172,
                    "longitude": -84.14335143,
                    "geoText": "33.94754172 -84.14335143 WGS84"
                },
                "phone": "(770) 622-1330",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 622-2320"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 576-2532"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 622-2313"
                    },
                    {
                        "id": "1143180",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 622-2317",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 622-2312",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "A PS Processing",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1996-11-13"
            },
            {
                "warehouseId": "1084",
                "name": [
                    {
                        "value": "Brookhaven",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 407.9034029817948,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "500 BROOKHAVEN AVE NE",
                    "city": "ATLANTA",
                    "territory": "GA",
                    "postalCode": "30319-3291",
                    "countryName": "US",
                    "latitude": 33.87271767,
                    "longitude": -84.33613548,
                    "geoText": "33.87271767 -84.33613548 WGS84"
                },
                "phone": "(404) 460-1915",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(404) 460-1930"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(404) 460-1939"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(404) 460-1928"
                    },
                    {
                        "id": "1160314",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(404) 460-1924",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:00:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2010-10-28"
            },
            {
                "warehouseId": "366",
                "name": [
                    {
                        "value": "Mall Of Georgia",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 411.7661578356004,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "1550 MALL OF GEORGIA BLVD",
                    "city": "BUFORD",
                    "territory": "GA",
                    "postalCode": "30519-6551",
                    "countryName": "US",
                    "latitude": 34.06248679,
                    "longitude": -83.99586113,
                    "geoText": "34.06248679 -83.99586113 WGS84"
                },
                "phone": "(678) 288-3009",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 288-3026"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 288-3035"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 288-3022"
                    },
                    {
                        "id": "1154258",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 288-3020",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 288-3028",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2006-05-03"
            },
            {
                "warehouseId": "188",
                "name": [
                    {
                        "value": "Perimeter",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 411.83711487839673,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "6350 PEACHTREE DUNWOODY RD",
                    "city": "ATLANTA",
                    "territory": "GA",
                    "postalCode": "30328-4568",
                    "countryName": "US",
                    "latitude": 33.92861865,
                    "longitude": -84.3544181,
                    "geoText": "33.92861865 -84.3544181 WGS84"
                },
                "phone": "(770) 352-8660",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 352-0858"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 671-0601"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 352-8673"
                    },
                    {
                        "id": "1143192",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 352-8677",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:00:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 352-8672",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "ATM",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Pizza Kitchen",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Service Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Special Order Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Travel",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "1996-11-13"
            },
            {
                "warehouseId": "631",
                "name": [
                    {
                        "value": "Cumberland Mall",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 411.88786449869997,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2900 CUMBERLAND MALL SE",
                    "city": "ATLANTA",
                    "territory": "GA",
                    "postalCode": "30339-8107",
                    "countryName": "US",
                    "latitude": 33.88101004,
                    "longitude": -84.47076316,
                    "geoText": "33.88101004 -84.47076316 WGS84"
                },
                "phone": "(770) 431-1700",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 431-1715"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 431-1724"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 431-1713"
                    },
                    {
                        "id": "1155046",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(770) 431-1709",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "T-Mobile Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2006-11-15"
            },
            {
                "warehouseId": "743",
                "name": [
                    {
                        "value": "Alpharetta",
                        "localeCode": "en-US"
                    }
                ],
                "distance": 420.08778509227733,
                "distanceUnit": "mi",
                "type": {
                    "code": "Warehouse",
                    "name": [
                        {
                            "value": "Warehouse",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "subType": {
                    "code": "No Minor Type",
                    "name": [
                        {
                            "value": "No Minor Type",
                            "localeCode": "en-US"
                        }
                    ]
                },
                "address": {
                    "line1": "2855 JORDAN CT",
                    "city": "ALPHARETTA",
                    "territory": "GA",
                    "postalCode": "30004-3869",
                    "countryName": "US",
                    "latitude": 34.09070077,
                    "longitude": -84.27849057,
                    "geoText": "34.09070077 -84.27849057 WGS84"
                },
                "phone": "(678) 823-4950",
                "timeZone": "America/New_York",
                "hours": [
                    {
                        "title": [
                            {
                                "value": "Mon-Fri",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "20:30:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sat",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            7
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "09:30:00",
                        "close": "18:00:00"
                    },
                    {
                        "title": [
                            {
                                "value": "Sun",
                                "localeCode": "en-US"
                            }
                        ],
                        "weekDays": [
                            1
                        ],
                        "hoursType": {
                            "code": "open",
                            "name": [
                                {
                                    "value": "open",
                                    "localeCode": "en-US"
                                }
                            ]
                        },
                        "open": "10:00:00",
                        "close": "18:00:00"
                    }
                ],
                "services": [
                    {
                        "code": "food",
                        "name": [
                            {
                                "value": "Food Court",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 823-4955"
                    },
                    {
                        "code": "gas",
                        "name": [
                            {
                                "value": "Gas Station",
                                "localeCode": "en-US"
                            }
                        ],
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "06:00:00",
                                "close": "21:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "07:00:00",
                                "close": "19:00:00"
                            }
                        ]
                    },
                    {
                        "code": "hearing",
                        "name": [
                            {
                                "value": "Hearing Aids",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 823-4961"
                    },
                    {
                        "code": "optical",
                        "name": [
                            {
                                "value": "Optical Department",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 823-4953"
                    },
                    {
                        "id": "1153042",
                        "code": "pharmacy",
                        "name": [
                            {
                                "value": "Pharmacy",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 823-4978",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "19:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "close",
                                    "name": [
                                        {
                                            "value": "close",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "00:00:00",
                                "close": "00:00:00"
                            }
                        ]
                    },
                    {
                        "code": "auto",
                        "name": [
                            {
                                "value": "Tire Service Center",
                                "localeCode": "en-US"
                            }
                        ],
                        "phone": "(678) 823-4956",
                        "hours": [
                            {
                                "title": [
                                    {
                                        "value": "Mon-Fri",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "20:30:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sat",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    7
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "09:30:00",
                                "close": "18:00:00"
                            },
                            {
                                "title": [
                                    {
                                        "value": "Sun",
                                        "localeCode": "en-US"
                                    }
                                ],
                                "weekDays": [
                                    1
                                ],
                                "hoursType": {
                                    "code": "open",
                                    "name": [
                                        {
                                            "value": "open",
                                            "localeCode": "en-US"
                                        }
                                    ]
                                },
                                "open": "10:00:00",
                                "close": "18:00:00"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "AT&T Cellular Kiosk",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Auto Buying Program",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Bakery",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Executive Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Deli",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Meat",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Fresh Produce",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Independent Optometrist",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Membership",
                                "localeCode": "en-US"
                            }
                        ]
                    },
                    {
                        "code": "specialty_item",
                        "name": [
                            {
                                "value": "Rotisserie Chicken",
                                "localeCode": "en-US"
                            }
                        ]
                    }
                ],
                "regionCode": "SE",
                "openingDate": "2005-06-04"
            }
        ]
    }

  let arr = [] ;

  jsonData.warehouses.forEach((node) => {
    arr.push({
      address: {
        streetAddress: node.address.line1.toLowerCase().split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' '),
        state: node.address.territory,
        city: node.address.city.toLowerCase().split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' '),
        zip: node.address.postalCode.slice(0,5),
      },
      hours: {
    Monday:{ 
        open:node.hours[0].open.slice(0,5) + " AM",
        close:parseInt(node.hours[0].close.slice(0,5)) -12 + ":00 PM"
    },
    Tuesday:{ 
        open:node.hours[0].open.slice(0,5) + " AM",
        close:parseInt(node.hours[0].close.slice(0,5)) -12 + ":00 PM"
    },
    Wednesday:{ 
        open:node.hours[0].open.slice(0,5) + " AM",
        close:parseInt(node.hours[0].close.slice(0,5)) -12 + ":00 PM"
    },
    Thursday:{ 
        open:node.hours[0].open.slice(0,5) + " AM",
        close:parseInt(node.hours[0].close.slice(0,5)) -12 + ":00 PM"
    },
    Friday:{ 
        open:node.hours[0].open.slice(0,5) + " AM",
        close:parseInt(node.hours[0].close.slice(0,5)) -12 + ":00 PM"
    },
    Saturday:{ 
        open:node.hours[1].open.slice(0,5) + " AM",
        close:parseInt(node.hours[1].close.slice(0,5)) -12 + ":00 PM"
    },
    Sunday:{ 
        open:node.hours[2].open.slice(0,5) + " AM",
        close:parseInt(node.hours[1].close.slice(0,5)) -12 + ":00 PM"
    }
      
      },
      long: node.address.longitude,
      lat: node.address.latitude,
      phoneNumber:  node.phone.slice(0,5) + " " +node.phone.slice(6),
      type: "Costco",
      website: "http://www.costco.com",
      lastUpdated: new Date().toLocaleDateString(),
      image: "",

      
      
    });
  });

  console.log(arr);

  const jsonString = JSON.stringify(arr);
  fs.writeFileSync('costco.json', jsonString);
};
getCostcoData();