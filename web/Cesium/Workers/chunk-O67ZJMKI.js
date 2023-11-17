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
import{f as C}from"./chunk-KRUAPDMK.js";import{a as n,d as b}from"./chunk-6DBWVLDX.js";import{a as w}from"./chunk-ZEICRW3N.js";var j={},q=new n,L=new n,Q=new C,G=new b;function W(t,e,r,a,o,i,l,s,y,c){let m=t+e;n.multiplyByScalar(a,Math.cos(m),q),n.multiplyByScalar(r,Math.sin(m),L),n.add(q,L,q);let u=Math.cos(t);u*=u;let w=Math.sin(t);w*=w;let x=i/Math.sqrt(l*u+o*w)/s;return C.fromAxisAngle(q,x,Q),b.fromQuaternion(Q,G),b.multiplyByVector(G,y,c),n.normalize(c,c),n.multiplyByScalar(c,s,c),c}var U=new n,Z=new n,N=new n,v=new n;j.raisePositionsToHeight=function(t,e,r){let a=e.ellipsoid,o=e.height,i=e.extrudedHeight,l=r?t.length/3*2:t.length/3,s=new Float64Array(3*l),y=t.length,c=r?y:0;for(let e=0;e<y;e+=3){let l=e+1,y=e+2,m=n.fromArray(t,e,U);a.scaleToGeodeticSurface(m,m);let u=n.clone(m,Z),w=a.geodeticSurfaceNormal(m,v),x=n.multiplyByScalar(w,o,N);n.add(m,x,m),r&&(n.multiplyByScalar(w,i,x),n.add(u,x,u),s[e+c]=u.x,s[l+c]=u.y,s[y+c]=u.z),s[e]=m.x,s[l]=m.y,s[y]=m.z}return s};var D=new n,J=new n,K=new n;j.computeEllipsePositions=function(t,e,r){let a=t.semiMinorAxis,o=t.semiMajorAxis,i=t.rotation,l=t.center,s=8*t.granularity,y=a*a,c=o*o,m=o*a,u=n.magnitude(l),x=n.normalize(l,D),h=n.cross(n.UNIT_Z,l,J);h=n.normalize(h,h);let f=n.cross(x,h,K),z=1+Math.ceil(w.PI_OVER_TWO/s),_=w.PI_OVER_TWO/(z-1),p=w.PI_OVER_TWO-z*_;p<0&&(z-=Math.ceil(Math.abs(p)/_));let O,d,P,M,I,T=e?new Array(3*(z*(z+2)*2)):void 0,g=0,E=U,R=Z,V=4*z*3,A=V-1,j=0,v=r?new Array(V):void 0;for(p=w.PI_OVER_TWO,E=W(p,i,f,h,y,m,c,u,x,E),e&&(T[g++]=E.x,T[g++]=E.y,T[g++]=E.z),r&&(v[A--]=E.z,v[A--]=E.y,v[A--]=E.x),p=w.PI_OVER_TWO-_,O=1;O<z+1;++O){if(E=W(p,i,f,h,y,m,c,u,x,E),R=W(Math.PI-p,i,f,h,y,m,c,u,x,R),e){for(T[g++]=E.x,T[g++]=E.y,T[g++]=E.z,P=2*O+2,d=1;d<P-1;++d)M=d/(P-1),I=n.lerp(E,R,M,N),T[g++]=I.x,T[g++]=I.y,T[g++]=I.z;T[g++]=R.x,T[g++]=R.y,T[g++]=R.z}r&&(v[A--]=E.z,v[A--]=E.y,v[A--]=E.x,v[j++]=R.x,v[j++]=R.y,v[j++]=R.z),p=w.PI_OVER_TWO-(O+1)*_}for(O=z;O>1;--O){if(p=w.PI_OVER_TWO-(O-1)*_,E=W(-p,i,f,h,y,m,c,u,x,E),R=W(p+Math.PI,i,f,h,y,m,c,u,x,R),e){for(T[g++]=E.x,T[g++]=E.y,T[g++]=E.z,P=2*(O-1)+2,d=1;d<P-1;++d)M=d/(P-1),I=n.lerp(E,R,M,N),T[g++]=I.x,T[g++]=I.y,T[g++]=I.z;T[g++]=R.x,T[g++]=R.y,T[g++]=R.z}r&&(v[A--]=E.z,v[A--]=E.y,v[A--]=E.x,v[j++]=R.x,v[j++]=R.y,v[j++]=R.z)}p=w.PI_OVER_TWO,E=W(-p,i,f,h,y,m,c,u,x,E);let B={};return e&&(T[g++]=E.x,T[g++]=E.y,T[g++]=E.z,B.positions=T,B.numPts=z),r&&(v[A--]=E.z,v[A--]=E.y,v[A--]=E.x,B.outerPositions=v),B};var tt=j;export{tt as a};