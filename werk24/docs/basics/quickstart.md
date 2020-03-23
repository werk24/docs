# Getting Started

Werk24 is designed to make your life as developer who want to handle Technical Drawings as simple and convenient as possible. If you have never used Werk24 before, this tutorial helps you getting started.

Getting started with Werk24 follows a simple three step process

1. [Install the Client](#install-the-client)
2. [Configure the Client](#configure-the-client)
3. [Test the Client](#test-the-client)

## Install the Client

Werk24 provides an easy-to-use and easy-to-extend Python-based client.
Install our Python Client using [pip](https://pip.pypa.io/en/stable/):

    pip install git+https://github.com/werk24/werk24-python.git@master#egg=werk24

!!! note

    Should you be interested in a client for a different language, please get in touch with us.

## Configure the Client

After you completed downloading and installing the Werk24 client, you'll need to provide the access information.
During the registration process we will have provided you with a `.env` file, that contains your access information.
It will look similar to this:

    W24TECHREAD_AUTH_REGION="eu-central-1"
    W24TECHREAD_AUTH_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    W24TECHREAD_AUTH_USERNAME="xx@xx.xx"
    W24TECHREAD_AUTH_PASSWORD="--- INSERT HERE ---"
    W24TECHREAD_SERVER_HTTPS="techread.w24.io"
    W24TECHREAD_SERVER_WSS="techread-ws.w24.io"
    W24TECHREAD_VERSION="v1"

In the welcome email we will also have provided you with a temporary password for your application.
You will need to update the password through this link: [set password](https://w24io.auth.eu-central-1.amazoncognito.com/login?client_id=2ksl69eldrro9ud0cbn2sspo2o&response_type=code&scope=email+openid&redirect_uri=https://www.werk24.biz) before you will be able to access the API. Replace the `--- INSERT HERE ---` line with your password and store the file in the base path of your project.

!!! note

    Do not replace any existing `.env` file; simply append its content.

For more details see [Authentication](/basics/authentication)

## Test the Client

You can check whether client is installed and configured correctly by submitting a simple Techread request through the CLI. The request submits a technical drawing of your chose to the API and returns a thumbnail of the individual cuts. To be able to see the image, ensure that you have the [Pillow](https://python-pillow.org) package installed.

    pip install Pillow

After that you can submit the request by running

    w24cli techread "./your-file.pdf"

If everything works correctly, you will now see one or more images of the individual cuts on your Technical Drawing.
Have a look at the additional details at the [CLI Documentation](/cli/basic).
