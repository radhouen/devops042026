### Rest API:

1- Request:

- URL: 
https://www.google.com/api/v1/weather?startdate=.....&enddate=....

    - base url: https://www.google.com
    - type: api
    - version: v1
    - entity: weather
    - params: startDate , EndDate

    Why we use version ?

    v1 
    Supported payment methods:
    - virement
    - cache

    v2:
    Supported payment methods:
    - Virement
    - Crypto

- Methods:
    - GET: retrieve data
    - POST: Insert Data
    - PUT: Update/Edite Data: replace entire resource 
    - PATCH: Update/Edite Data: partial replace
    - DELETE: Delete Data
    - OPTIONS
    - ....

- Body:
Data shared between services.
    - JSON(Javascript object Notation)
    ```javascript
    {
        "name": "Wahiba",
        "age": 22 ,
        "email": "wahiba@gmail.com"
        "phones": {
            "phone1": "222222222",
            "phone2": "2222222222"
        }

    }
    ```
    version 2:
    ```javascript
    {
        "name": "Wahiba",
        "age": 22 ,
        "email": "wahiba@gmail.com"
        "phones": {
            "phone1": "222222222",
            "phone2": "2222222222"
        },
        "location": "Tunisia"

    }
    ```

    - FORM: 
    - XML

- Header:

Metadata between service A and Service B.
    - Content-type: json
    - Authorization: Bearer <jwt-token>
    - Accept: application/json
    - cache-control: no-cache
    - Allowed Method
    

- params(Query parameters):
key=value sent throw the URL .
- userid=7653276423847
- name=meher
- location=tunisia
https://www.google.com/api/v1/users?name=meher&location=tunisia

response: return all users with the name meher located in Tunisia.

----
2- Response:
- HTTP STATUS CODE:
    - 100 : informational :
        - 100: continue
        - 101: change protocol
    - 200 : OK
        - 200: ok
        - 201 : created
        - 204: no content
    - 300 : Redirection:
      - 300: multichoice
      - 301: moved permenently
    - 400 : Client error
      - 400: bad request
      - 401: Unauthorized
      - 402: Payment Required
      - 403: Forbidden
      - 404: Not Found
      - 405: Method Not Allowed
    - 500 : Server Error
      - 500: Internal Server Error
      - 501: Not Implemented
      - 502 Bad Gateway
      - 503 Service Unavailable
      - 504 Gateway Timeout

---
To do (Wahiba+ Mouna)
- Create REST API + JWT authentication to manage users.
- Create User
- Delete User
- display Users
- Update User


---
CORS:
CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks requests from one origin (domain/port/protocol) to another unless the server explicitly allows it.

# CORS in REST APIs

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that blocks requests from one origin (domain/port/protocol) to another unless the server explicitly allows it.

## How It Works

```
Browser (localhost:3000)  →  API (api.example.com)
         ↑
   CORS policy checked here — server must say "yes"
```

The browser sends an **`Origin`** header, and the server must respond with **`Access-Control-Allow-Origin`** to permit it.

---

## The Key Headers

| Header | Example Value | Purpose |
|---|---|---|
| `Access-Control-Allow-Origin` | `*` or `https://myapp.com` | Who can access |
| `Access-Control-Allow-Methods` | `GET, POST, PUT, DELETE` | Allowed HTTP methods |
| `Access-Control-Allow-Headers` | `Content-Type, Authorization` | Allowed request headers |
| `Access-Control-Allow-Credentials` | `true` | Allow cookies/auth |
| `Access-Control-Max-Age` | `3600` | Cache preflight duration |

---

## Fixing CORS by Framework

### Node.js / Express
```js
const cors = require('cors');

app.use(cors({
  origin: 'https://myapp.com',       // or '*' for all
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true                  // if using cookies
}));
```

### Python / FastAPI
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://myapp.com"],  # or ["*"]
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
```

### Python / Flask
```python
from flask_cors import CORS

CORS(app, resources={r"/api/*": {"origins": "https://myapp.com"}})
```

### Django (DRF)
```python
# settings.py
INSTALLED_APPS += ['corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

CORS_ALLOWED_ORIGINS = ["https://myapp.com"]
# or CORS_ALLOW_ALL_ORIGINS = True
```

### Nginx
```nginx
location /api/ {
    add_header Access-Control-Allow-Origin "https://myapp.com";
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
    add_header Access-Control-Allow-Headers "Authorization, Content-Type";

    if ($request_method = OPTIONS) {
        return 204;
    }
}
```

---

## Preflight Requests

For non-simple requests (e.g. `PUT`, custom headers), the browser sends an **`OPTIONS` preflight** first:

```
OPTIONS /api/data
Origin: https://myapp.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization
```

Your server **must respond to OPTIONS** with the appropriate headers, or the real request will be blocked.

---

## Common Mistakes

| Problem | Fix |
|---|---|
| `*` with `credentials: true` | Must use explicit origin, not `*` |
| Missing OPTIONS handler | Add preflight response |
| Headers not whitelisted | Add them to `Allow-Headers` |
| CORS set after route handlers | Middleware must come **first** |

---

What framework are you using? I can give you a more tailored solution.