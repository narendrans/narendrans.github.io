---
layout: post
title:  "Getting started with Raspberry Pi"
date:   2017-02-21 21:45:34 -0500
categories: raspberry
---

Recently I got myself a Raspberry pi 3 from Amazon. Instead of just buying the pi, I got the one sold by [Cana Kit Ultimate][CanaKit] as having a breadboard and some jumper wires will allow me to get started quickly. One of the main reason why I became a Software Engineer was my fascination with computers when I was young. I still remember the configuration of the first computer my dad got me. It was an Intel Celeron 1.6Ghz, 768 MB RAM and yes, there was no graphics card. The initial few days or even months when I was totally hooked up to it could be another blog post by itself. 

Coming back to the pi, with the curiosity to learn more about basic electronics, I also got the [Elegoo Mega Kit][Elegoo-mega-kit]. This one comes with a version of Arduino. I stareted out by following few tutorials given with the Elegoo kit. Led, RGB Led circuits and other simple circuits with the sensors given in the Elegoo kit. With enough basic knowledge, I wanted to address the following problem I faced:

      Control the temperature of the room through mobile

Out of the many other possible solutions that involve, changing the apartment, installing an expensive thermostat etc. I decided to finalize on this:

      Record the room temperature with a temperature sensor and trigger the thermostat knob with the help of a servo. Control this through API and eventually build a simple mobile app to do this.

The first project would involve making use of the DHT11 to record the termperature and the humidity of my room. This isn't the most accurate way but it definitely serves my purpose well. The Elegoo kit comes with a DHT11 and also a LCD. So the first real circuit I made is recording the temperature and the humidity of the room and displaying it in the LCD (<a href="http://narendran.info/images/lcd.jpeg">Pic</a>)

One of the issues I encountered was that, the contrast of this cheap LCD made it impossible to view the readings. So a simple googling on that suggested that I should use a potentiometer to adjust the resistance depending on the contrast that is comfortable to view the readings. When I turned the potentiometer all the way, the circuit got shorted and the smokes started coming out. So I replaced the potentiometer with some resistors and voila, this issue was solved!

The difficult part was to fix the servo on the thermostat. There are two issues here. The first one is to place the servo properly such that when it is activated, it turns the knob. The second one is with the servo itself. To find a servo that can provide that much torque. I haven't yet figured this out, lets see if I get some time to solve this. But, nevertheless, building the circuits and controlling from python programs is really cool and interesting. I wish to see this cheap device used by many people throughtout the world and get kids interested in computers and electronics at a very early age when the whole world is rapidly moving towards more and more automation.


[CanaKit]: https://www.amazon.com/gp/product/B01C6Q4GLE
[Elegoo-mega-kit]: https://www.amazon.com/gp/product/B01EWNUUUA

