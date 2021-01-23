#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion



aws cloudfront create-invalidation --distribution-id E3FW68C232HTDC --paths "/*" --profile=cerebellum

nvm exec yarn build cd ./packages/apps/ && aws s3 sync build/ s3://block-viewer.cere.io --profile=cerebellum
