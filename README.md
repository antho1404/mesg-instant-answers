# MESG Instant Answers

MESG Instant Answers allows you to get Instant Answers using DuckDuckGo API

## Getting Started

1) Download and install Docker CE
   https://www.docker.com/community-edition
   
2) Initialize Docker Swarm 
   ```
   docker swarm init
   ```

3) Install MESG CLI
   ```
   npm install -g @mesg/cli
   ```

4) Start the Engine
   ```
   mesg-cli daemon:start
   ```
   
5) Clone the repo   
   ```
   git clone https://github.com/viraja1/mesg-instant-answers.git
   ```

6) Change directory   
   ```
   cd mesg-instant-answers
   ```

7) Run service in dev mode
   ```
   mesg-cli service:dev
   ```
   Note down the service id printed in the console

8) Execute a task
   ```
   mesg-cli service:execute {service_id} searchQuery --json inputs.json
   ```
   Replace {service_id} with the actual service id. 
   Update the query in input.json if you want results for some other query
   
   e.g. If input is `{"query": "covid-19"}` then the result will contain a json using which you can generate the following table
   ![](covid-19.png)