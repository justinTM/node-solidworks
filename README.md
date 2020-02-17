# node-solidworks
Executing C# Solidworks API actions using HTTP POST request method.

## Purpose
The purpose of this project is to respond to POST requests from an existing
webpage and execute Solidworks CAD actions (Windows-only) using
[Edge.js][electron-edge-link] (to run C# code within Node.js).

A Node.js server will take parameters from the request body, interpret the
request (eg. make a drawing, make a part, change a drawing, change a part,
etc.), and return some output; maybe a link to a PDF drawing, for example.

## Disclaimer
This code will likely be made private/exclusive soon. Until then, the MIT
license has been chosen. The code here is from a Mechanical Engineering student
and shouldn't be expected to be secure against attacks, errors, or misuse.
