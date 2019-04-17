rm -rf node_modules/demo-authentication
rsync -av ../Authentication ./node_modules --exclude node_modules
cd node_modules 
mv Authentication demo-authentication