mkdir -p ./lambdasArchive

cd ./lambdaBuilds
zip -j ../lambdasArchive/accountService.zip ./accountService/accountService.js
