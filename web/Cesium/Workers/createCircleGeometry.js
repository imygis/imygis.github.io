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
import{a as s}from"./chunk-47ZYJU5T.js";import"./chunk-O67ZJMKI.js";import"./chunk-AYKF23P7.js";import"./chunk-3ZZKK4JY.js";import"./chunk-LIYSS65T.js";import"./chunk-XDDCDRP7.js";import"./chunk-45I6HXAM.js";import{a as d}from"./chunk-GNOVD5HP.js";import"./chunk-GN2CGLQJ.js";import"./chunk-CJ3BUWJF.js";import"./chunk-JIRJ27VD.js";import"./chunk-AD3PINJR.js";import"./chunk-7KSTQKGD.js";import"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import"./chunk-RZVOXF67.js";import"./chunk-WJY2YZOB.js";import{a as l,c as a}from"./chunk-6DBWVLDX.js";import"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import"./chunk-TCDHAGGB.js";import{a as c}from"./chunk-KW3W45S2.js";import{b as p}from"./chunk-ANRF456S.js";import{e as m}from"./chunk-5REUCI47.js";function n(e){let t=(e=c(e,c.EMPTY_OBJECT)).radius;p.typeOf.number("radius",t);let i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s(i),this._workerName="createCircleGeometry"}n.packedLength=s.packedLength,n.pack=function(e,t,i){return p.typeOf.object("value",e),s.pack(e._ellipseGeometry,t,i)};var x=new s({center:new l,semiMajorAxis:1,semiMinorAxis:1}),t={center:new l,radius:void 0,ellipsoid:a.clone(a.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new d,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};n.unpack=function(e,i,r){let o=s.unpack(e,i,x);return t.center=l.clone(o._center,t.center),t.ellipsoid=a.clone(o._ellipsoid,t.ellipsoid),t.height=o._height,t.extrudedHeight=o._extrudedHeight,t.granularity=o._granularity,t.vertexFormat=d.clone(o._vertexFormat,t.vertexFormat),t.stRotation=o._stRotation,t.shadowVolume=o._shadowVolume,m(r)?(t.semiMajorAxis=o._semiMajorAxis,t.semiMinorAxis=o._semiMinorAxis,r._ellipseGeometry=new s(t),r):(t.radius=o._semiMajorAxis,new n(t))},n.createGeometry=function(e){return s.createGeometry(e._ellipseGeometry)},n.createShadowVolume=function(e,t,i){let r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,s=t(r,o),a=i(r,o);return new n({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:a,vertexFormat:d.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(n.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}});var _=n;function g(e,t){return m(t)&&(e=_.unpack(e,t)),e._ellipseGeometry._center=l.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.clone(e._ellipseGeometry._ellipsoid),_.createGeometry(e)}var E=g;export{E as default};