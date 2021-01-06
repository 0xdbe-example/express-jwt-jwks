# Express JWT / JWKS

This is a prototype using [express-jwt](https://www.npmjs.com/package/express-jwt) to verify JWT.
[jwks-rsa](https://www.npmjs.com/package/jwks-rsa) is also used to load public keys from JWKS endpoind.

- Set env vars (in .env file)

```
JWKS=
AUD=
ISS=
```

- Run

```
npm start
```

- Test wihtout token (Result: HTTP 401)

```
curl -v localhost:3000/users
```

- Test with token

```
export TOKEN=...
curl -H "Authorization: Bearer $TOKEN" http://localhost:3000/users
```
