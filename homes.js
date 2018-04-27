let homes = {
    "hus1" : { 
        "rooms": [{ 
            "name": "Vardagsrum", 
            "temperature": 21, 
            "humidity": 0.5 
        }, 
        { 
            "name": "Hallen", 
            "temperature": 18, 
            "humidity": 50 
        },
        { 
            "name": "Farstun", 
            "temperature": -3, 
            "humidity": 95 
        }] 
    },
    
    "hus2" : { 
        "rooms": [{ 
            "name": "Vardagsrum", 
            "temperature": 25, 
            "humidity": 0.75 
        }, 
        { 
            "name": "Farstun", 
            "temperature": 15, 
            "humidity": 80 
        },
        {
            "name": "Garaget", 
            "temperature": 10, 
            "humidity": 34
        }] 
    }
};

module.exports = {homes};