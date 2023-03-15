"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99338],{270700:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-4ce67332","path":"/devices/SNZB-02_EFEKTA.html","title":"Custom devices (DiY) SNZB-02_EFEKTA control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) SNZB-02_EFEKTA control via MQTT","description":"Integrate your Custom devices (DiY) SNZB-02_EFEKTA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-06T00:31:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Additional functions:","slug":"additional-functions","link":"#additional-functions","children":[]},{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Report_delay (numeric)","slug":"report-delay-numeric","link":"#report-delay-numeric","children":[]},{"level":3,"title":"Enable_temperature (binary)","slug":"enable-temperature-binary","link":"#enable-temperature-binary","children":[]},{"level":3,"title":"High_temperature (numeric)","slug":"high-temperature-numeric","link":"#high-temperature-numeric","children":[]},{"level":3,"title":"Low_temperature (numeric)","slug":"low-temperature-numeric","link":"#low-temperature-numeric","children":[]},{"level":3,"title":"Enable_humidity (binary)","slug":"enable-humidity-binary","link":"#enable-humidity-binary","children":[]},{"level":3,"title":"High_humidity (numeric)","slug":"high-humidity-numeric","link":"#high-humidity-numeric","children":[]},{"level":3,"title":"Low_humidity (numeric)","slug":"low-humidity-numeric","link":"#low-humidity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1678896530000},"filePathRelative":"devices/SNZB-02_EFEKTA.md"}')},641277:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(166252);const o=(0,a._)("h1",{id:"custom-devices-diy-snzb-02-efekta",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#custom-devices-diy-snzb-02-efekta","aria-hidden":"true"},"#"),(0,a.Uk)(" Custom devices (DiY) SNZB-02_EFEKTA")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SNZB-02_EFEKTA")],-1),u=(0,a._)("td",null,"Vendor",-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Alternative firmware for the SONOFF SNZB-02 sensor from EfektaLab, DIY")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, temperature, humidity, report_delay, enable_temperature, high_temperature, low_temperature, enable_humidity, high_humidity, low_humidity, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SNZB-02_EFEKTA.jpg",alt:"Custom devices (DiY) SNZB-02_EFEKTA"})])],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="additional-functions" tabindex="-1"><a class="header-anchor" href="#additional-functions" aria-hidden="true">#</a> Additional functions:</h3><p>binding to clusters of temperature, air humidity, OnOff, direct control of external relays by data on temperature and humidity, direct sending of data on temperature and humidity to other devices.</p><h3 id="build-guide" tabindex="-1"><a class="header-anchor" href="#build-guide" aria-hidden="true">#</a> Build guide</h3>',4),s={href:"https://github.com/smartboxchannel/SONOFF-SNZB-02-Temperature-and-humidity-sensor",target:"_blank",rel:"noopener noreferrer"},m=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric" aria-hidden="true">#</a> Report_delay (numeric)</h3><p>Adjust Report Delay. Setting the time in minutes, by default 5 minutes. Value can be found in the published state on the <code>report_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="enable-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-temperature-binary" aria-hidden="true">#</a> Enable_temperature (binary)</h3><p>Enable Temperature Control. Value can be found in the published state on the <code>enable_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_temperature is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-numeric" aria-hidden="true">#</a> High_temperature (numeric)</h3><p>Setting High Temperature Border. Value can be found in the published state on the <code>high_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>50</code>. The unit of this value is <code>C</code>.</p><h3 id="low-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-numeric" aria-hidden="true">#</a> Low_temperature (numeric)</h3><p>Setting Low Temperature Border. Value can be found in the published state on the <code>low_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-5</code> and the maximum value is <code>50</code>. The unit of this value is <code>C</code>.</p><h3 id="enable-humidity-binary" tabindex="-1"><a class="header-anchor" href="#enable-humidity-binary" aria-hidden="true">#</a> Enable_humidity (binary)</h3><p>Enable Humidity Control. Value can be found in the published state on the <code>enable_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_humidity is ON, if <code>OFF</code> OFF.</p><h3 id="high-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#high-humidity-numeric" aria-hidden="true">#</a> High_humidity (numeric)</h3><p>Setting High Humidity Border. Value can be found in the published state on the <code>high_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>C</code>.</p><h3 id="low-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#low-humidity-numeric" aria-hidden="true">#</a> Low_humidity (numeric)</h3><p>Setting Low Humidity Border. Value can be found in the published state on the <code>low_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),b={},y=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink"),b=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[d,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,a.w5)((()=>[(0,a.Uk)("Custom devices (DiY)")])),_:1})])]),n,l,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a._)("p",null,[(0,a.Uk)("Instructions on how to build this device can be found "),(0,a._)("a",s,[(0,a.Uk)("here"),(0,a.Wm)(b)])]),(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);