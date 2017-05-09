'use strict';

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

// Overwrite settings from ".env"-file to not leak settings to test-snapshots
// and facilitate running the unit-tests without any prior configuration
process.env.REACT_APP_BACKEND_PROTOCOL = 'http'
process.env.REACT_APP_BACKEND_HOST = 'localhost'
process.env.REACT_APP_BACKEND_PORT = 8000
process.env.REACT_APP_FB_API_KEY = 'FB_API_KEY'
process.env.REACT_APP_FB_AUTH_DOMAIN = 'FB_AUTH_DOMAIN'
process.env.REACT_APP_FB_DATABASE_URL =  'FB_DATABASE_URL'
process.env.REACT_APP_FB_STORAGE_BUCKET = 'FB_STORAGE_BUCKET'
process.env.REACT_APP_FB_MESSAGING_SENDER_ID = 'FB_MESSAGING_SENDER_ID'

const jest = require('jest');
const argv = process.argv.slice(2);

jest.run(argv);
