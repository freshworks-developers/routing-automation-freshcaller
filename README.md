# Routing Automation with Custom Actions on Freshcaller

## Description

A sample serverless app that depicts the actions that could be performed using the Freshcaller's Routing Automation feature that leverages the workflow automation ability of Freshworks marketplace platform. For more information on Routing automation, please refer to the following Knowledge Base articles

1. [Overview of Routing Automation](https://support.freshcaller.com/en/support/solutions/articles/50000002321-overview-of-routing-automation)
2. [Configuring Routing Automation Call Flow](https://support.freshcaller.com/en/support/solutions/articles/50000002359-configuring-routing-automation-call-flow)
3. [Routing Automation Use Cases](https://support.freshcaller.com/en/support/solutions/articles/50000002451-routing-automation-use-cases)

## Features Demonstrated

A serverless app that has the following list of function each depicting an input/response pair allowed in routing automation call flow inside Freshcaller.

Function | Notes
:--------------------: | ------
 [`validateVIPPhoneNumber`] | a function which takes calling customers number as input and sends a response after processing.
 [`validateUserSingleDigit`] | a function which takes single digit input as an input from customer and sends a response after processing.
 [`validateUserMultipleDigits`] | a function which takes multiple digit as an input from customers and sends a response after processing.
 [`validateUserSpeech`] | a function which takes users speech as input and sends the transcripted text as input from customer to the function and a response after processing is sent back to Freshcaller.
 [`respondOrderStatus`] | a function which higlights the Freshcallers ability to read a dynamic message based on the real time processed response from the app.

***

## Prerequisites

1. A trial Freshcaller account.
2. A properly configured [Development environment](https://developers.freshcaller.com/docs/quick-start) along with the [Freshworks CLI (Freshworks Development Kit)]

***

## Procedure to run the app

1. Run the app locally using the [`fdk run`] command.
2. Refer to the [Test your app](https://developers.freshcaller.com/docs/quick-start/#test_the_app) section of the quickstart guide to allow insecure content.
