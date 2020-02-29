// set debugging (0,1,2)
exports.debug = 0;

// port on which node.js service is reachable, if fhem.js is running as non-root, port must be greater than 1000
exports.nodePort = 8086;

// Hostname or IP of the FHEM server
exports.fhemHost = "127.0.0.1";

// telnet port of FHEM server
exports.fhemPort = 7072;

// extended mode
// 0 - no JsonList2 pushed on change of device (better performance)
// 1 - JsonList2 of device emitted to clients on changed values
exports.extendedMode = 0;

// poll in seconds for refresh fhem devices
// just for keeping buffer sync to fhem server
// in case of connection problems or configuratuion changes
// that may not sent from fhem by inform on
exports.pollForAllDevices = 600

// webserver root directory:
// path for Webfiles (html,css,js, ...) !! no php !!
// change to path of web directory only if you want to deliver
// web files by this server
// set to false else
exports.pathHTML = false;
//exports.pathHTML = '/var/www/homepage';

// default html page
exports.indexHTML = 'index.html';

// use SSL for connections (true/false)
exports.useSSL = false;

// use connection password (true/false)
// it is recommended to use this only if useSSL is also true
// else the password is send as plain text
exports.useClientPassword = false;

// location of sha-256 hashed password
// only needed if useClientPassword = true
// create it on Linux shell with
// echo -n "mein Passwort" | sha256sum | cut -d' ' -f1 > /etc/fhem.js/pw_client_auth
exports.connectionPasswordFile = '/etc/fhem.js/pw_client_auth';

// location of SSL and client-auth certificats
// only used then useSSL set to true
exports.sslcert =
{
   key:    '/etc/ssl/private/bundle/ssl.key',
   cert:   '/etc/ssl/private/bundle/allcert.pem',
}
exports.cipher = 'HIGH:!aNULL:!MD5';

// use this application for providing mySql values to fhem
// before using this feature first install mysql modul with
// npm install -g mysql

exports.readDB = false;

// fhem.js reads every "refresh" seconds from "table"."column" ordered by "sort" desc one value
// from database "fhem"@"localhost" and set the fhem dummy device "fhem_name" to this value.
//
// in /etc/fhem.js (default) must exist a file named pw_host_user containing password for mysql connection
// every possible combination of host and user from readDBvalues below requires a password file

exports.pwdir = '/etc/fhem.js';

exports.readDBvalues =
[
   {table: 'wetterstation.em1010_readings', column: 'total_energy', sort: 'datetime', fhem_name: 'sunenergy', refresh: 60, host: 'localhost', user: 'fhem' },
   {table: 'wetterstation.em1010_readings', column: 'power', sort: 'datetime', fhem_name: 'sunpower', refresh: 60, host: 'localhost', user: 'fhem' },
   {table: 'wetterstation.weather', column: 'wind_speed', sort: 'datetime', fhem_name: 'windspeed', refresh: 60, host: 'localhost', user: 'fhem' },
   {table: 'wetterstation.weather', column: 'wind_gust', sort: 'datetime', fhem_name: 'windgust', refresh: 60, host: 'localhost', user: 'fhem' },
];

exports.message404 = '<html><head><title>404 Not Found</title></head><body bgcolor="white"><center><h1>404 Not Found</h1></center></body></html>';
