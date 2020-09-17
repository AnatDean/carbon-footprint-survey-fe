# carbon-footprint-survey-fe

carbon-footprint-survey-fe is a SPA prototype of a multiple choice question survey.

It queries a locally running backend server [found here ](https://github.com/AnatDean/carbon-footprint-survey-be) for questions and answers.

Currently designs are only implemented for mobile view though much effort has been taken to make it moderately responsive given a small timeframe.

## Prerequisites

- Node

## Run Tests

Install dependencies (this will take a while)

```bash
npm install OR yarn add
```

Then run the tests with

```bash
yarn test OR npm test
```

## Run Locally

To run the project locally:

1. Clone this repository
2. Install the dependencies (specified in `Run Tests`)

3. Clone the backend repository and got it up running - instructions will be [found here](https://github.com/AnatDean/carbon-footprint-survey-be)

4. Run the server on port 3000 using

```bash
npm start OR yarn start
```

## Built Using

- React / hooks
- Typescript
- Styled-components
- polished
- axios
- react
- react testing library
