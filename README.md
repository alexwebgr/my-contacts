## My Contacts

An application to manage contacts 

Features
- Add 
- Import 
- Export
- Delete
- View a single contact

### Run locally
The following instructions are for Ubuntu but similar actions are needed for all operating systems. 
 
In order to run locally you will need to 
- clone the repo 
- run `npm install` (assuming node, npm and bower are already installed) 
- have a web server like apache in place
- have php in place
- have installed and enabled the mod_php module for apache 
- ensure the php user e.g. www-data has write permission to the `app/data` directory

Also a vhost entry for apache, you will then need to enable the new site by typing `sudo a2ensite my-contacts` as well as  
add an entry under `/etc/hosts` for `my-contacts.local`, then restart `sudo service apache2 restrt` 
and then navigate to [http://my-contacts.local](http://my-contacts.local) and if everything went smoothly 
you should be able to see the contact list.

### Run the unit tests 
From the command line with `npm test`

### Run the e2e tests
From the command line the first time you can run  `npm run protractor-first` in order to install webdriver as well and then just `npm run protractor`