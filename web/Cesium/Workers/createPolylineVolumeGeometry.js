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
import{a as M}from"./chunk-YF5O2VZO.js";import{a as W}from"./chunk-3ZZKK4JY.js";import"./chunk-LIYSS65T.js";import"./chunk-XDDCDRP7.js";import{a as x,b as j}from"./chunk-67H5LKR2.js";import{a as I}from"./chunk-ZM6G7ZZB.js";import"./chunk-POJWZDI4.js";import"./chunk-5KMA2PPI.js";import{a as g}from"./chunk-GNOVD5HP.js";import"./chunk-6BM2HRAM.js";import"./chunk-5QO2XXQ5.js";import{a as $,b as V}from"./chunk-HUTVDPLR.js";import{a as Z}from"./chunk-QL7V6YKW.js";import"./chunk-EGNG2T22.js";import"./chunk-GN2CGLQJ.js";import"./chunk-CJ3BUWJF.js";import{a as X}from"./chunk-JIRJ27VD.js";import{a as Q}from"./chunk-AD3PINJR.js";import{b as Y,c as z,d as U}from"./chunk-7KSTQKGD.js";import{d as K}from"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import{d as C}from"./chunk-RZVOXF67.js";import{a as B}from"./chunk-WJY2YZOB.js";import{a as T,c as f}from"./chunk-6DBWVLDX.js";import{a as J}from"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import"./chunk-TCDHAGGB.js";import{a as k}from"./chunk-KW3W45S2.js";import{a as D}from"./chunk-ANRF456S.js";import{e as _}from"./chunk-5REUCI47.js";function oe(e,t,n,o){let r=new Q;o.position&&(r.position=new U({componentDatatype:B.DOUBLE,componentsPerAttribute:3,values:e}));let i,a,s,p,c,l,h=t.length,u=e.length/3,m=(u-2*h)/(2*h),k=V.triangulate(t),f=(m-1)*h*6+2*k.length,g=X.createTypedArray(u,f),d=2*h,y=0;for(i=0;i<m-1;i++){for(a=0;a<h-1;a++)s=2*a+i*h*2,l=s+d,p=s+1,c=p+d,g[y++]=p,g[y++]=s,g[y++]=c,g[y++]=c,g[y++]=s,g[y++]=l;s=2*h-2+i*h*2,p=s+1,c=p+d,l=s+d,g[y++]=p,g[y++]=s,g[y++]=c,g[y++]=c,g[y++]=s,g[y++]=l}if(o.st||o.tangent||o.bitangent){let e,o,s=new Float32Array(2*u),p=1/(m-1),c=1/n.height,l=n.height/2,k=0;for(i=0;i<m;i++){for(e=i*p,o=c*(t[0].y+l),s[k++]=e,s[k++]=o,a=1;a<h;a++)o=c*(t[a].y+l),s[k++]=e,s[k++]=o,s[k++]=e,s[k++]=o;o=c*(t[0].y+l),s[k++]=e,s[k++]=o}for(a=0;a<h;a++)e=0,o=c*(t[a].y+l),s[k++]=e,s[k++]=o;for(a=0;a<h;a++)e=(m-1)*p,o=c*(t[a].y+l),s[k++]=e,s[k++]=o;r.st=new U({componentDatatype:B.FLOAT,componentsPerAttribute:2,values:new Float32Array(s)})}let _=u-2*h;for(i=0;i<k.length;i+=3){let e=k[i]+_,t=k[i+1]+_,n=k[i+2]+_;g[y++]=e,g[y++]=t,g[y++]=n,g[y++]=n+h,g[y++]=t+h,g[y++]=e+h}let j=new z({attributes:r,indices:g,boundingSphere:K.fromVertices(e),primitiveType:Y.TRIANGLES});if(o.normal&&(j=W.computeNormal(j)),o.tangent||o.bitangent){try{j=W.computeTangentAndBitangent(j)}catch{I("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(j.attributes.tangent=void 0),o.bitangent||(j.attributes.bitangent=void 0),o.st||(j.attributes.st=void 0)}return j}function R(e){let t=(e=k(e,k.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;if(!_(t))throw new D("options.polylinePositions is required.");if(!_(n))throw new D("options.shapePositions is required.");this._positions=t,this._shape=n,this._ellipsoid=f.clone(k(e.ellipsoid,f.WGS84)),this._cornerType=k(e.cornerType,x.ROUNDED),this._vertexFormat=g.clone(k(e.vertexFormat,g.DEFAULT)),this._granularity=k(e.granularity,J.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";let o=1+t.length*T.packedLength;o+=1+n.length*C.packedLength,this.packedLength=o+f.packedLength+g.packedLength+2}R.pack=function(e,t,n){if(!_(e))throw new D("value is required");if(!_(t))throw new D("array is required");n=k(n,0);let o,r=e._positions,i=r.length;for(t[n++]=i,o=0;o<i;++o,n+=T.packedLength)T.pack(r[o],t,n);let a=e._shape;for(i=a.length,t[n++]=i,o=0;o<i;++o,n+=C.packedLength)C.pack(a[o],t,n);return f.pack(e._ellipsoid,t,n),n+=f.packedLength,g.pack(e._vertexFormat,t,n),n+=g.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var ee=f.clone(f.UNIT_SPHERE),te=new g,v={polylinePositions:void 0,shapePositions:void 0,ellipsoid:ee,vertexFormat:te,cornerType:void 0,granularity:void 0};R.unpack=function(e,t,n){if(!_(e))throw new D("array is required");t=k(t,0);let o,r=e[t++],i=new Array(r);for(o=0;o<r;++o,t+=T.packedLength)i[o]=T.unpack(e,t);r=e[t++];let a=new Array(r);for(o=0;o<r;++o,t+=C.packedLength)a[o]=C.unpack(e,t);let s=f.unpack(e,t,ee);t+=f.packedLength;let p=g.unpack(e,t,te);t+=g.packedLength;let c=e[t++],l=e[t];return _(n)?(n._positions=i,n._shape=a,n._ellipsoid=f.clone(s,n._ellipsoid),n._vertexFormat=g.clone(p,n._vertexFormat),n._cornerType=c,n._granularity=l,n):(v.polylinePositions=i,v.shapePositions=a,v.cornerType=c,v.granularity=l,new R(v))};var ne=new M;R.createGeometry=function(e){let t=e._positions,n=Z(t,T.equalsEpsilon),o=e._shape;if(o=j.removeDuplicatesFromShape(o),n.length<2||o.length<3)return;V.computeWindingOrder2D(o)===$.CLOCKWISE&&o.reverse();let r=M.fromPoints(o,ne);return oe(j.computePositions(n,o,r,e,!0),o,r,e._vertexFormat)};var H=R;function ie(e,t){return _(t)&&(e=H.unpack(e,t)),e._ellipsoid=f.clone(e._ellipsoid),H.createGeometry(e)}var Re=ie;export{Re as default};