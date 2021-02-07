# Ciphora-HackBU
Ciphora E2E extension to encrypt private messages - Project for HackBU 2021

  <a href="https://github.com/andrewflik/Ciphora-HackBU">
    <span><img src="https://github.com/andrewflik/Ciphora-HackBU/blob/main/ciphora-extension/public/logo.jpeg" alt="Logo" width="400"><img src = "hhttps://github.com/andrewflik/Ciphora-HackBU/blob/main/Screenshots_Progress/graphics2.png" width = "400"/></span>
  
  </a>
  <br>
 
 [![Build Status](https://img.shields.io/circleci/project/all-contributors/all-contributors/master.svg)](https://circleci.com/gh/all-contributors/workflows/all-contributors/tree/master) [![All Contributors](https://img.shields.io/badge/all_contributors-2-blue.svg?style=flat-square)](#contributors-) 
 <br>
 
## CIPHORA

Ciphora in the present version is intended to be E2E Encryption Browser Plugin.
We are using a NodeJS server on the backend with MySQL to handle the organization of the keys. We plan to only store the encrypted chat keys on the server, so that a high standard of security is maintained. All generation, encryption and decryption functions are performed client side using the C implementation of OpenSSL/RSA Encryption. This also ensures that only the client will ever have the power to generate keys and encrypt/decrypt messages, while also having a completely platform-independent security library.  
<br><br>

<img src="https://github.com/andrewflik/Ciphora-HackBU/blob/main/Screenshots_Progress/3.png" width="750" />

## Project Images
<p float="left">
  <img src="https://github.com/andrewflik/Ciphora-HackBU/blob/main/Screenshots_Progress/messenger_1.gif" width="400" />
  &nbsp
  <img src="https://github.com/andrewflik/Ciphora-HackBU/blob/main/Screenshots_Progress/messenger_2.png" width="400" /> 
  &nbsp
</p>

