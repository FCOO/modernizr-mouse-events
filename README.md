# modernizr-mouse-events
>


## Description
Modernizr test for mouse-events (mouse, hover, etc.)

## Installation
### bower
`bower install https://github.com/FCOO/modernizr-mouse-events.git --save`

## Demo
http://FCOO.github.io/modernizr-mouse-events/demo/ 

## Usage

Provide css classes to show or hide elements when the device support/have mouse and/or hover-event

    .hide-for-mouse
    .show-for-no-mouse
    .show-for-mouse
    .hide-for-no-mouse
    .hide-for-mouse-hover
    .show-for-no-mouse-hover
    .show-for-mouse-hover
    .hide-for-no-mouse-hover

And sets classes for `<html>`

    .mouse or .no-mouse
    .mouse-hover of .no-mouse-hover

Can be used to prevent `:hover` event on touch devices

    .mouse-hover SELECTOR:hover { .. } 


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-mouse-events/LICENSE).

Copyright (c) 2018 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
