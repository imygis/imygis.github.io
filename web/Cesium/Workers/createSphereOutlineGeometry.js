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
import{a as t}from"./chunk-SFY4ZTLB.js";import"./chunk-45I6HXAM.js";import"./chunk-JIRJ27VD.js";import"./chunk-AD3PINJR.js";import"./chunk-7KSTQKGD.js";import"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import"./chunk-RZVOXF67.js";import"./chunk-WJY2YZOB.js";import{a as d}from"./chunk-6DBWVLDX.js";import"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import"./chunk-TCDHAGGB.js";import{a as l}from"./chunk-KW3W45S2.js";import{b as u}from"./chunk-ANRF456S.js";import{e as a}from"./chunk-5REUCI47.js";function s(i){let s=l(i.radius,1),n={radii:new d(s,s,s),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new t(n),this._workerName="createSphereOutlineGeometry"}s.packedLength=t.packedLength,s.pack=function(i,s,n){return u.typeOf.object("value",i),t.pack(i._ellipsoidGeometry,s,n)};var m=new t,n={radius:void 0,radii:new d,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};s.unpack=function(i,r,e){let o=t.unpack(i,r,m);return n.stackPartitions=o._stackPartitions,n.slicePartitions=o._slicePartitions,n.subdivisions=o._subdivisions,a(e)?(d.clone(o._radii,n.radii),e._ellipsoidGeometry=new t(n),e):(n.radius=o._radii.x,new s(n))},s.createGeometry=function(i){return t.createGeometry(i._ellipsoidGeometry)};var c=s;function p(i,t){return a(t)&&(i=c.unpack(i,t)),c.createGeometry(i)}var w=p;export{w as default};