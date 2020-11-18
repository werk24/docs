# Getting Started

Werk24 is designed to make your life with handling Technical Drawings as convenient as possible.
This Tutorial will get you set up.

We will:

  + [Install the Client](#install-the-client)
  + [Store the Credentials](#configure-the-client)
  + [Test the Client](#test-the-client)

## Install the Client

Werk24 provides an easy-to-use and easy-to-extend Python-based client.
Install our Python Client using [pip](https://pip.pypa.io/en/stable/) or npm.

=== "Python"
    ```bash
    pip install werk24
    ```

=== "NodeJS"
    ```bash
    npm install werk24
    ```    pip install werk24

!!! note

    Should you be interested in a Client for a different language, please get in touch with us at info@werk24.biz.

## Configure the Client

The Client uses [AWS Cognito](https://aws.amazon.com/cognito/) to handle Authentication.
This has several advantages:

* Security updates are handled by a dedicated team
* Standard libraries are available for a large range of languages
* You will be able to maintain individual accounts for your own customers.

During the registration process we provide you with a `.werk24` file, that contains all the information that you will need. It will look similar to this:

    W24TECHREAD_AUTH_REGION="eu-central-1"
    W24TECHREAD_AUTH_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_USERNAME="xx@xx.xx"
    W24TECHREAD_AUTH_PASSWORD="--- INSERT HERE ---"
    W24TECHREAD_SERVER_HTTPS="techread.w24.io"
    W24TECHREAD_SERVER_WSS="techread-ws.w24.io"
    W24TECHREAD_VERSION="v1"

!!! important

    When you choose to use your .werk24 file directly, add `.werk24` to your .gitignore file to ensure that the credentials remain stored locally. For production environments we strongly recommend setting the credentials as ENVIRONMENT VARIABLES.

For more details see [Authentication](/docs/basics/authentication)

## Test the Client

You can check whether client is installed and configured correctly by submitting a simple Techread request through the CLI. The request submits the technical drawing to the API and returns a thumbnail of the individual sectionals. To be able to see the image, ensure that you have the [Pillow](https://python-pillow.org) package installed.

    pip install Pillow

After that you can submit the request by running

    w24cli techread --ask-page-thumbnail ./your-file.pdf

You should now see one or more images of the individual cuts on your Technical Drawing.
Have a look at the additional details at the [CLI Documentation](/docs/cli/basic).
