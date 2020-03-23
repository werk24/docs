# Authentication

Werk24 uses the [AWS Cognito Service](https://aws.amazon.com/cognito/) to identify a user.
We have decided to use on this service, mainly because it provides you with two advantages:

1. The source code that handles the authentication is constantly monitored and improved by a dedicated and highly-specialized team.

2. Many standard libraries exist that handle the authentication process for you.

3. We can provide you with diffent user names for different geographies, allowing you to ensure that your customer's data does not leave its region-of-origin. See [General Data Protetion Regulation (GDPR)](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).

## Credentials File

During the registration process, Werk24 will have provided you with an .env file that contains all the information that is required to authenticate with our API. This file assumes that you have only registered one user with Werk24.

The file will look like this

    W24TECHREAD_AUTH_REGION="eu-central-1"
    W24TECHREAD_AUTH_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_USERNAME="xx@xx.xx"
    W24TECHREAD_AUTH_PASSWORD="--- INSERT HERE ---"
    W24TECHREAD_SERVER_HTTPS="techread.w24.io"
    W24TECHREAD_SERVER_WSS="techread-ws.w24.io"
    W24TECHREAD_VERSION="v1"

The content of the file will be used when you call the `TechreadClient.make_from_env()` method.
