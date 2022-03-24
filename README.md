# LFGrow-Hackathon
LFGrow-Hackathon

https://docs.lens.dev/docs/quick-setup
https://github.com/aave/lens-protocol

0. export USERID=$UID && docker-compose build && docker-compose run --user node contracts-env bash

https://github.com/aave/lens-protocol/issues/56

1. Start the Blockchain
In the first of the two terminals connected to the Docker container:

$ npm run compile
$ npx hardhat node

2. Deploy the Protocol
In the second of the two terminals connected to the Docker container:

$ npx hardhat full-deploy --network hardhat
