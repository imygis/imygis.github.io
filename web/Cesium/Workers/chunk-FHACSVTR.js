/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.111
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as c,b as p,c as f}from"./chunk-6DBWVLDX.js";import{a as d}from"./chunk-ZEICRW3N.js";import{a as u}from"./chunk-KW3W45S2.js";import{a as s}from"./chunk-ANRF456S.js";import{e as a}from"./chunk-5REUCI47.js";function e(e){this._ellipsoid=u(e,f.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(e.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),e.mercatorAngleToGeodeticLatitude=function(e){return d.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},e.geodeticLatitudeToMercatorAngle=function(t){t>e.MaximumLatitude?t=e.MaximumLatitude:t<-e.MaximumLatitude&&(t=-e.MaximumLatitude);let i=Math.sin(t);return.5*Math.log((1+i)/(1-i))},e.MaximumLatitude=e.mercatorAngleToGeodeticLatitude(Math.PI),e.prototype.project=function(t,i){let o=this._semimajorAxis,r=t.longitude*o,u=e.geodeticLatitudeToMercatorAngle(t.latitude)*o,s=t.height;return a(i)?(i.x=r,i.y=u,i.z=s,i):new c(r,u,s)},e.prototype.unproject=function(t,i){if(!a(t))throw new s("cartesian is required");let o=this._oneOverSemimajorAxis,r=t.x*o,u=e.mercatorAngleToGeodeticLatitude(t.y*o),n=t.z;return a(i)?(i.longitude=r,i.latitude=u,i.height=n,i):new p(r,u,n)};var L=e;export{L as a};