/****************************************************************************
	modernizr-mouse-events.js,

	(c) 2018, FCOO

	https://github.com/FCOO/modernizr-mouse-events
	https://github.com/FCOO
*****************************************************************************/
(function ($, window/*, document, undefined*/) {
	"use strict";

    /*
    Create a Modernizr-test named 'mouse' to detect if there are a mouse-device
    Solution by http://stackoverflow.com/users/1701813/hacktisch
    Mouse devices (also touch screen laptops) first fire mousemove before they can fire touchstart and mouse is set to TRUE.
    Touch devices (also for instance iOS which fires mousemove) FIRST fire touchstart upon click, and then mousemove.
    That is why mouse will be set to FALSE.

    Create a Modernizr-test named 'mouse-hover' to mark if hover "events" is fired. Can be use to prevent :hover {...} css to fail on touch devices
    */

	/******************************************
	Initialize/ready
	*******************************************/
	$(function() {
        var mouseTest         = 'mouse',
            mouseHoverTest    = 'mouse-hover',
            mouseEventPostfix = '.modernizr.mouse.events';

        window.Modernizr.addTest(mouseTest, false);
        window.modernizrOff(mouseTest);

        //If Modernizr-test "touchevents" is included => use if to set "mouse-hover" else set "mouse-hover" = "mouse"
        var hasTouchEventsTest = window.Modernizr && (jQuery.type( window.Modernizr['touchevents'] ) === "boolean"),
            hasTouchEvents = hasTouchEventsTest ? window.Modernizr['touchevents'] : true;

        window.Modernizr.addTest( mouseHoverTest, !hasTouchEvents );
        window.modernizrToggle(   mouseHoverTest, !hasTouchEvents );

        $(window)
            //Check for mouse
            .bind('mousemove'+mouseEventPostfix,function(){
                $(window).unbind(mouseEventPostfix);
                window.Modernizr[mouseTest] = true;
                window.modernizrOn(mouseTest);
                if (!hasTouchEventsTest){
                    window.Modernizr.addTest( mouseHoverTest, true );
                    window.modernizrOn(mouseHoverTest);
                }
            })
            .bind('touchstart'+mouseEventPostfix,function(){
                $(window).unbind(mouseEventPostfix);
                window.Modernizr[mouseTest] = false;
                window.modernizrOff(mouseTest);
            });
    });

    //******************************************

}(jQuery, this, document));