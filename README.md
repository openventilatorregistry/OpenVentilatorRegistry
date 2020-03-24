# Open Ventilator Registry
The Open Ventilator Registry project is answering [the call](https://www.nytimes.com/2020/03/22/opinion/health/ventilator-shortage-coronavirus-solution.html) to provide a cloud-based national registry of ventilators and the hospitals that need them most
in order to facilitate their distribution during the COVID19 pandemic.  Even with a ramp up in ventilator production, there is still the significant problem 
of their efficient distribution.  

The Open Ventilator Registry is calling on software engineers to help build a platform for hospitals to report on their stock of ventilators and if they have a surplus
or deficit.  Hospitals with a surplus can then send their supply to hospitals in greatest need.  We aim to create a nimble and decentralized supply chain and 
distribution network of these life saving devices.

We have registered the domain www.openventilatorregistry.org and will deploy the web application there when it is ready.

### How to Help

Join our Slack channel to meet others interested in helping and learn about what's currently being worked on.  Look at the open issues, create your own if you have an idea, submit pull requests to the right projects.

### Central Communication Channel

There have been a number of communication channels set up and we may end up using those for individual teams, but for now let's centralize around the one below and we can break out later.

https://join.slack.com/t/ovr-project/shared_invite/zt-d0qld5rq-RDeKgJPyIALLeiwW05fNZA

### Teams
There are two teams: UI and Backend.  Each team has its own section within this organization.  Each team can create repos and manage their projects.

### Tech Stack

We're open to whatever technologies will make us most effective.

This project includes:

- **A serverless monolithic backend** - powered by a single AWS Lambda function and a single AWS API Gateway endpoint, which sends all requests to the function, enabling you to do routing and logic all in your code.

- **A serverless website with a React application\*** - powered by AWS S3, AWS Cloudfront, AWS Route 53 and an AWS ACM SSL Certificate. The backend API endpoint is already passed into the front-end, and the React application is already configured to use it.

- **An on-demand AWS DynamoDB auto-scaling table** - powered by AWS DynamoDB (shocker!).

&nbsp;

1. [Install](#1-install)
2. [Development](#2-development)

&nbsp;

### 1. Install

Install the NPM dependencies in the front-end `dashboard` directory:

```console
$ npm i
```

### 2. Development

You are be able to run the front-end locally and have it communicate to the live back-end, in the cloud.

```console
$ npm run start
```

### Attitude

Time is of the essence.  Many projects get bogged down with disagreements over technologies, coding style, frameworks,
and methodologies.  We will not let any individual's sense of perfection get in the way of what's good enough to get the job
done.  We believe our work will help save lives, and we want to save as many as we can.

March 22nd, 2020 is day 1 of this project.  [According to some public officials, we will be in crisis in 10 days](https://www.msn.com/en-us/news/us/coronavirus-update-de-blasio-says-nyc-10-days-away-from-widespread-shortages-of-critical-medical-equipment/ar-BB11xrvg?li=BBnb7Kz).  

#letsgo

