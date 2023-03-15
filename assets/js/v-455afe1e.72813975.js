"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38489],{959866:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-455afe1e","path":"/devices/ZBDongle-E.html","title":"SONOFF ZBDongle-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBDongle-E control via MQTT","description":"Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"How to create a SONOFF ZBDongle-E Router","slug":"how-to-create-a-sonoff-zbdongle-e-router","link":"#how-to-create-a-sonoff-zbdongle-e-router","children":[]},{"level":3,"title":"Hints","slug":"hints","link":"#hints","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light_indicator_level (numeric)","slug":"light-indicator-level-numeric","link":"#light-indicator-level-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1678896530000},"filePathRelative":"devices/ZBDongle-E.md"}')},568237:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var o=i(166252);const n=(0,o._)("h1",{id:"sonoff-zbdongle-e",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#sonoff-zbdongle-e","aria-hidden":"true"},"#"),(0,o.Uk)(" SONOFF ZBDongle-E")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZBDongle-E")],-1),a=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"light_indicator_level, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg",alt:"SONOFF ZBDongle-E"})])],-1),u=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),c=(0,o._)("h3",{id:"how-to-create-a-sonoff-zbdongle-e-router",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-to-create-a-sonoff-zbdongle-e-router","aria-hidden":"true"},"#"),(0,o.Uk)(" How to create a SONOFF ZBDongle-E Router")],-1),g={href:"https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router",target:"_blank",rel:"noopener noreferrer"},p=(0,o._)("h3",{id:"hints",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#hints","aria-hidden":"true"},"#"),(0,o.Uk)(" Hints")],-1),_=(0,o._)("p",null,"The guide from SONOFF is not very detailed. Here are some additional hints:",-1),w=(0,o._)("li",null,[(0,o.Uk)("First, you have to disassemble the device and pull the logic board out of its housing. You need a "),(0,o._)("strong",null,"J00 Phillips screwdriver"),(0,o.Uk)(" for this. "),(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-screws.jpg",width:"130",height:"129"}),(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-board-in-housing.jpg",width:"130",height:"117"})],-1),m={href:"https://en.wikipedia.org/wiki/XMODEM",target:"_blank",rel:"noopener noreferrer"},k=(0,o._)("li",null,[(0,o.Uk)("Third, you must operate on the naked logic board while it is plugged in. This is a lot easier if you use a "),(0,o._)("strong",null,"USB extension cable"),(0,o.Uk)(".")],-1),b=(0,o._)("li",null,[(0,o.Uk)("Forth, to enter the Bootloader Mode, you have to "),(0,o._)("ul",null,[(0,o._)("li",null,"Plug the device in"),(0,o._)("li",null,"Connect to the device with the serial software (for serial connection parameters, see guide)"),(0,o._)("li",null,'Press and hold the "BOOT" button (upper button in the lower right corner next to the USB plug in the photo below)'),(0,o._)("li",null,[(0,o.Uk)('and then press the "RST." button (lower button in the lower right corner next to the USB plug in the photo below) to restart the device '),(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-naked.jpg",width:"648",height:"242"})])])],-1),v=(0,o._)("li",null,"Then follow the steps in the guide to load and install the firmware.",-1),F=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light-indicator-level-numeric" tabindex="-1"><a class="header-anchor" href="#light-indicator-level-numeric" aria-hidden="true">#</a> Light_indicator_level (numeric)</h3><p>Brightness of the indicator light. Value can be found in the published state on the <code>light_indicator_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),O={},N=(0,i(983744).Z)(O,[["render",function(e,t){const i=(0,o.up)("RouterLink"),O=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[l,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[a,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,o.w5)((()=>[(0,o.Uk)("SONOFF")])),_:1})])]),d,s,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,c,(0,o._)("p",null,[(0,o.Uk)('You can create a powerful Zigbee router from an ordinary Sonoff Zigbee 3.0 USB Dongle Plus (Model "ZBDongle-E" with EFR32MG21 chip) by flashing a router firmware onto the device. You can find the official guide for flashing the device here: '),(0,o._)("a",g,[(0,o.Uk)("SONOFF Zigbee 3.0 USB dongle plus firmware flashing"),(0,o.Wm)(O)]),(0,o.Uk)(". The guide also contains the link to the official "),(0,o._)("a",f,[(0,o.Uk)("SONOFF Router Firmware for the ZBDongle-E"),(0,o.Wm)(O)]),(0,o.Uk)(".")]),p,_,(0,o._)("ul",null,[w,(0,o._)("li",null,[(0,o.Uk)("Second, you need a "),(0,o._)("strong",null,[(0,o.Uk)("software supporting the "),(0,o._)("a",m,[(0,o.Uk)("XMODEM file transfer protocol"),(0,o.Wm)(O)])]),(0,o.Uk)(" for sending the firmware image to the device.")]),k,b,v]),(0,o.kq)(" Notes END: Do not edit below this line "),F])}]])}}]);