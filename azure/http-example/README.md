# Simple HTTP example

In this example we deploy a simple HTTP example of an Azure Function. It has the following enpoints:
- `/hello`: Expects a name via query params, e.g `/hello?name=Mikroways` or body, and returns `Hello <name>`
- `/goodbye`: Expects a name via query params, e.g: `/goodbye?name=Mikroways` or body, and returns `Hello <name>`


## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/azure/http-example -n my-project
```

## Deployment

```
npm run sls:deploy -- --stage <stage>
```

## Local development
```
npm run sls:offline -- --stage <stage>
```