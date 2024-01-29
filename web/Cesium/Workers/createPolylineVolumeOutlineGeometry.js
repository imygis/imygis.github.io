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
import{a as w}from"./chunk-YF5O2VZO.js";import{a as N,b as E}from"./chunk-67H5LKR2.js";import"./chunk-ZM6G7ZZB.js";import"./chunk-POJWZDI4.js";import"./chunk-5KMA2PPI.js";import"./chunk-6BM2HRAM.js";import"./chunk-5QO2XXQ5.js";import{a as G,b as v}from"./chunk-HUTVDPLR.js";import{a as q}from"./chunk-QL7V6YKW.js";import"./chunk-EGNG2T22.js";import"./chunk-GN2CGLQJ.js";import"./chunk-CJ3BUWJF.js";import{a as k}from"./chunk-JIRJ27VD.js";import{a as O}from"./chunk-AD3PINJR.js";import{b as A,c as S,d as R}from"./chunk-7KSTQKGD.js";import{d as C}from"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import{d as _}from"./chunk-RZVOXF67.js";import{a as b}from"./chunk-WJY2YZOB.js";import{a,c as s}from"./chunk-6DBWVLDX.js";import{a as D}from"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import"./chunk-TCDHAGGB.js";import{a as d}from"./chunk-KW3W45S2.js";import{a as y}from"./chunk-ANRF456S.js";import{e as u}from"./chunk-5REUCI47.js";function U(e,o){let r=new O;r.position=new R({componentDatatype:b.DOUBLE,componentsPerAttribute:3,values:e});let i,t,n=o.length,s=r.position.values.length/3,a=e.length/3/n,p=k.createTypedArray(s,2*n*(a+1)),c=0;i=0;let u=i*n;for(t=0;t<n-1;t++)p[c++]=t+u,p[c++]=t+u+1;for(p[c++]=n-1+u,p[c++]=u,i=a-1,u=i*n,t=0;t<n-1;t++)p[c++]=t+u,p[c++]=t+u+1;for(p[c++]=n-1+u,p[c++]=u,i=0;i<a-1;i++){let e=n*i,o=e+n;for(t=0;t<n;t++)p[c++]=t+e,p[c++]=t+o}return new S({attributes:r,indices:k.createTypedArray(s,p),boundingSphere:C.fromVertices(e),primitiveType:A.LINES})}function g(e){let o=(e=d(e,d.EMPTY_OBJECT)).polylinePositions,r=e.shapePositions;if(!u(o))throw new y("options.polylinePositions is required.");if(!u(r))throw new y("options.shapePositions is required.");this._positions=o,this._shape=r,this._ellipsoid=s.clone(d(e.ellipsoid,s.WGS84)),this._cornerType=d(e.cornerType,N.ROUNDED),this._granularity=d(e.granularity,D.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let i=1+o.length*a.packedLength;i+=1+r.length*_.packedLength,this.packedLength=i+s.packedLength+2}g.pack=function(e,o,r){if(!u(e))throw new y("value is required");if(!u(o))throw new y("array is required");r=d(r,0);let i,t=e._positions,n=t.length;for(o[r++]=n,i=0;i<n;++i,r+=a.packedLength)a.pack(t[i],o,r);let p=e._shape;for(n=p.length,o[r++]=n,i=0;i<n;++i,r+=_.packedLength)_.pack(p[i],o,r);return s.pack(e._ellipsoid,o,r),r+=s.packedLength,o[r++]=e._cornerType,o[r]=e._granularity,o};var B=s.clone(s.UNIT_SPHERE),P={polylinePositions:void 0,shapePositions:void 0,ellipsoid:B,height:void 0,cornerType:void 0,granularity:void 0};g.unpack=function(e,o,r){if(!u(e))throw new y("array is required");o=d(o,0);let i,t=e[o++],n=new Array(t);for(i=0;i<t;++i,o+=a.packedLength)n[i]=a.unpack(e,o);t=e[o++];let p=new Array(t);for(i=0;i<t;++i,o+=_.packedLength)p[i]=_.unpack(e,o);let c=s.unpack(e,o,B);o+=s.packedLength;let h=e[o++],l=e[o];return u(r)?(r._positions=n,r._shape=p,r._ellipsoid=s.clone(c,r._ellipsoid),r._cornerType=h,r._granularity=l,r):(P.polylinePositions=n,P.shapePositions=p,P.cornerType=h,P.granularity=l,new g(P))};var M=new w;g.createGeometry=function(e){let o=e._positions,r=q(o,a.equalsEpsilon),i=e._shape;if(i=E.removeDuplicatesFromShape(i),r.length<2||i.length<3)return;v.computeWindingOrder2D(i)===G.CLOCKWISE&&i.reverse();let t=w.fromPoints(i,M);return U(E.computePositions(r,i,t,e,!1),i)};var L=g;function j(e,o){return u(o)&&(e=L.unpack(e,o)),e._ellipsoid=s.clone(e._ellipsoid),L.createGeometry(e)}var he=j;export{he as default};