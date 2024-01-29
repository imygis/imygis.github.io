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
import{a as y}from"./chunk-LIYSS65T.js";import{d as F}from"./chunk-KRUAPDMK.js";import{b as d,c as W,d as x}from"./chunk-RZVOXF67.js";import{a as A}from"./chunk-WJY2YZOB.js";import{a as s,c as M}from"./chunk-6DBWVLDX.js";import{a as q}from"./chunk-ZEICRW3N.js";import{a as P}from"./chunk-KW3W45S2.js";import{b as z}from"./chunk-ANRF456S.js";import{e as u}from"./chunk-5REUCI47.js";function T(t,e){z.typeOf.object("ellipsoid",t),this._ellipsoid=t,this._cameraPosition=new s,this._cameraPositionInScaledSpace=new s,this._distanceToLimbInScaledSpaceSquared=0,u(e)&&(this.cameraPosition=e)}Object.defineProperties(T.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){let e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),i=s.magnitudeSquared(e)-1;s.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=i}}});var L=new s;T.prototype.isPointVisible=function(t){return D(this._ellipsoid.transformPositionToScaledSpace(t,L),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},T.prototype.isScaledSpacePointVisible=function(t){return D(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var et=new s;T.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){let i,o,r=this._ellipsoid;return u(e)&&e<0&&r.minimumRadius>-e?(o=et,o.x=this._cameraPosition.x/(r.radii.x+e),o.y=this._cameraPosition.y/(r.radii.y+e),o.z=this._cameraPosition.z/(r.radii.z+e),i=o.x*o.x+o.y*o.y+o.z*o.z-1):(o=this._cameraPositionInScaledSpace,i=this._distanceToLimbInScaledSpaceSquared),D(t,o,i)},T.prototype.computeHorizonCullingPoint=function(t,e,i){return Z(this._ellipsoid,t,e,i)};var j=M.clone(M.UNIT_SPHERE);T.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,i,o){return Z(U(this._ellipsoid,i,j),t,e,o)},T.prototype.computeHorizonCullingPointFromVertices=function(t,e,i,o,r){return v(this._ellipsoid,t,e,i,o,r)},T.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,i,o,r,s){return v(U(this._ellipsoid,r,j),t,e,i,o,s)};var it=[];T.prototype.computeHorizonCullingPointFromRectangle=function(t,e,i){z.typeOf.object("rectangle",t);let o=W.subsample(t,e,0,it),r=F.fromPoints(o);if(!(s.magnitude(r.center)<.1*e.minimumRadius))return this.computeHorizonCullingPoint(r.center,o,i)};var at=new s;function U(t,e,i){if(u(e)&&e<0&&t.minimumRadius>-e){let o=s.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,at);t=M.fromCartesian3(o,i)}return t}function Z(t,e,i,o){z.typeOf.object("directionToPoint",e),z.defined("positions",i),u(o)||(o=new s);let r=K(t,e),a=0;for(let e=0,o=i.length;e<o;++e){let o=Q(t,i[e],r);if(o<0)return;a=Math.max(a,o)}return J(r,a,o)}var O=new s;function v(t,e,i,o,r,a){z.typeOf.object("directionToPoint",e),z.defined("vertices",i),z.typeOf.number("stride",o),u(a)||(a=new s),o=P(o,3),r=P(r,s.ZERO);let n=K(t,e),c=0;for(let e=0,s=i.length;e<s;e+=o){O.x=i[e]+r.x,O.y=i[e+1]+r.y,O.z=i[e+2]+r.z;let o=Q(t,O,n);if(o<0)return;c=Math.max(c,o)}return J(n,c,a)}function D(t,e,i){let o=e,r=i,a=s.subtract(t,o,L),n=-s.dot(a,o);return!(r<0?n>0:n>r&&n*n/s.magnitudeSquared(a)>r)}var nt=new s,st=new s;function Q(t,e,i){let o=t.transformPositionToScaledSpace(e,nt),r=s.magnitudeSquared(o),a=Math.sqrt(r),n=s.divideByScalar(o,a,st);r=Math.max(1,r),a=Math.max(1,a);let c=1/a;return 1/(s.dot(n,i)*c-s.magnitude(s.cross(n,i,n))*(Math.sqrt(r-1)*c))}function J(t,e,i){if(!(e<=0||e===1/0||e!=e))return s.multiplyByScalar(t,e,i)}var R=new s;function K(t,e){return s.equals(e,s.ZERO)?e:(t.transformPositionToScaledSpace(e,R),s.normalize(R,R))}var xt=T,b={getHeight:function(t,e,i){return(t-i)*e+i}},ct=new s;b.getPosition=function(t,e,i,o,r){let a=e.cartesianToCartographic(t,ct),n=b.getHeight(a.height,i,o);return s.fromRadians(a.longitude,a.latitude,n,e,r)};var X=b,rt={NONE:0,BITS12:1},S=Object.freeze(rt),C=new s,mt=new s,f=new x,G=new d,dt=new d,lt=Math.pow(2,12);function h(t,e,i,o,r,a,n,c,l,m){let h,f,p=S.NONE;if(u(e)&&u(i)&&u(o)&&u(r)){let t=e.minimum,a=e.maximum,n=s.subtract(a,t,mt),c=o-i;p=Math.max(s.maximumComponent(n),c)<lt-1?S.BITS12:S.NONE,h=d.inverseTransformation(r,new d);let l=s.negate(t,C);d.multiply(d.fromTranslation(l,G),h,h);let m=C;m.x=1/n.x,m.y=1/n.y,m.z=1/n.z,d.multiply(d.fromScale(m,G),h,h),f=d.clone(r),d.setTranslation(f,s.ZERO,f),r=d.clone(r,new d);let u=d.fromTranslation(t,G),x=d.fromScale(n,dt),y=d.multiply(u,x,G);d.multiply(r,y,r),d.multiply(f,y,f)}this.quantization=p,this.minimumHeight=i,this.maximumHeight=o,this.center=s.clone(t),this.toScaledENU=h,this.fromScaledENU=r,this.matrix=f,this.hasVertexNormals=a,this.hasWebMercatorT=P(n,!1),this.hasGeodeticSurfaceNormals=P(c,!1),this.exaggeration=P(l,1),this.exaggerationRelativeHeight=P(m,0),this.stride=0,this._offsetGeodeticSurfaceNormal=0,this._offsetVertexNormal=0,this._calculateStrideAndOffsets()}h.prototype.encode=function(t,e,i,o,r,a,n,c){let l=o.x,m=o.y;if(this.quantization===S.BITS12){(i=d.multiplyByPoint(this.toScaledENU,i,C)).x=q.clamp(i.x,0,1),i.y=q.clamp(i.y,0,1),i.z=q.clamp(i.z,0,1);let o=this.maximumHeight-this.minimumHeight,s=q.clamp((r-this.minimumHeight)/o,0,1);x.fromElements(i.x,i.y,f);let a=y.compressTextureCoordinates(f);x.fromElements(i.z,s,f);let c=y.compressTextureCoordinates(f);x.fromElements(l,m,f);let u=y.compressTextureCoordinates(f);if(t[e++]=a,t[e++]=c,t[e++]=u,this.hasWebMercatorT){x.fromElements(n,0,f);let i=y.compressTextureCoordinates(f);t[e++]=i}}else s.subtract(i,this.center,C),t[e++]=C.x,t[e++]=C.y,t[e++]=C.z,t[e++]=r,t[e++]=l,t[e++]=m,this.hasWebMercatorT&&(t[e++]=n);return this.hasVertexNormals&&(t[e++]=y.octPackFloat(a)),this.hasGeodeticSurfaceNormals&&(t[e++]=c.x,t[e++]=c.y,t[e++]=c.z),e};var ht=new s,Y=new s;h.prototype.addGeodeticSurfaceNormals=function(t,e,i){if(this.hasGeodeticSurfaceNormals)return;let o=this.stride,r=t.length/o;this.hasGeodeticSurfaceNormals=!0,this._calculateStrideAndOffsets();let s=this.stride;for(let a=0;a<r;a++){for(let i=0;i<o;i++){let r=a*o+i;e[a*s+i]=t[r]}let r=this.decodePosition(e,a,ht),n=i.geodeticSurfaceNormal(r,Y),c=a*s+this._offsetGeodeticSurfaceNormal;e[c]=n.x,e[c+1]=n.y,e[c+2]=n.z}},h.prototype.removeGeodeticSurfaceNormals=function(t,e){if(!this.hasGeodeticSurfaceNormals)return;let i=this.stride,o=t.length/i;this.hasGeodeticSurfaceNormals=!1,this._calculateStrideAndOffsets();let r=this.stride;for(let s=0;s<o;s++)for(let o=0;o<r;o++){let a=s*i+o;e[s*r+o]=t[a]}},h.prototype.decodePosition=function(t,e,i){if(u(i)||(i=new s),e*=this.stride,this.quantization===S.BITS12){let o=y.decompressTextureCoordinates(t[e],f);i.x=o.x,i.y=o.y;let r=y.decompressTextureCoordinates(t[e+1],f);return i.z=r.x,d.multiplyByPoint(this.fromScaledENU,i,i)}return i.x=t[e],i.y=t[e+1],i.z=t[e+2],s.add(i,this.center,i)},h.prototype.getExaggeratedPosition=function(t,e,i){i=this.decodePosition(t,e,i);let o=this.exaggeration,r=this.exaggerationRelativeHeight;if(1!==o&&this.hasGeodeticSurfaceNormals){let s=this.decodeGeodeticSurfaceNormal(t,e,Y),a=this.decodeHeight(t,e),n=X.getHeight(a,o,r)-a;i.x+=s.x*n,i.y+=s.y*n,i.z+=s.z*n}return i},h.prototype.decodeTextureCoordinates=function(t,e,i){return u(i)||(i=new x),e*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(t[e+2],i):x.fromElements(t[e+4],t[e+5],i)},h.prototype.decodeHeight=function(t,e){return e*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(t[e+1],f).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight:t[e+3]},h.prototype.decodeWebMercatorT=function(t,e){return e*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(t[e+3],f).x:t[e+6]},h.prototype.getOctEncodedNormal=function(t,e,i){let o=t[e=e*this.stride+this._offsetVertexNormal]/256,r=Math.floor(o),s=256*(o-r);return x.fromElements(r,s,i)},h.prototype.decodeGeodeticSurfaceNormal=function(t,e,i){return e=e*this.stride+this._offsetGeodeticSurfaceNormal,i.x=t[e],i.y=t[e+1],i.z=t[e+2],i},h.prototype._calculateStrideAndOffsets=function(){let t=0;if(this.quantization===S.BITS12)t+=3;else t+=6;this.hasWebMercatorT&&(t+=1),this.hasVertexNormals&&(this._offsetVertexNormal=t,t+=1),this.hasGeodeticSurfaceNormals&&(this._offsetGeodeticSurfaceNormal=t,t+=3),this.stride=t};var H={position3DAndHeight:0,textureCoordAndEncodedNormals:1,geodeticSurfaceNormal:2},V={compressed0:0,compressed1:1,geodeticSurfaceNormal:2};h.prototype.getAttributes=function(t){let e=A.FLOAT,i=A.getSizeInBytes(e),o=this.stride*i,r=0,s=[];function a(a,n){s.push({index:a,vertexBuffer:t,componentDatatype:e,componentsPerAttribute:n,offsetInBytes:r,strideInBytes:o}),r+=n*i}if(this.quantization===S.NONE){a(H.position3DAndHeight,4);let t=2;t+=this.hasWebMercatorT?1:0,t+=this.hasVertexNormals?1:0,a(H.textureCoordAndEncodedNormals,t),this.hasGeodeticSurfaceNormals&&a(H.geodeticSurfaceNormal,3)}else{let t=this.hasWebMercatorT||this.hasVertexNormals,e=this.hasWebMercatorT&&this.hasVertexNormals;a(V.compressed0,t?4:3),e&&a(V.compressed1,1),this.hasGeodeticSurfaceNormals&&a(V.geodeticSurfaceNormal,3)}return s},h.prototype.getAttributeLocations=function(){return this.quantization===S.NONE?H:V},h.clone=function(t,e){if(u(t))return u(e)||(e=new h),e.quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=s.clone(t.center),e.toScaledENU=d.clone(t.toScaledENU),e.fromScaledENU=d.clone(t.fromScaledENU),e.matrix=d.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e.hasGeodeticSurfaceNormals=t.hasGeodeticSurfaceNormals,e.exaggeration=t.exaggeration,e.exaggerationRelativeHeight=t.exaggerationRelativeHeight,e._calculateStrideAndOffsets(),e};var At=h;export{xt as a,At as b};