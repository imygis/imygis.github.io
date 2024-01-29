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
import{a as O}from"./chunk-KRUAPDMK.js";import{c as I,e as V}from"./chunk-RZVOXF67.js";import{a as W,b as v}from"./chunk-6DBWVLDX.js";import{a as R}from"./chunk-ZEICRW3N.js";import{a as k}from"./chunk-ANRF456S.js";import{e as N}from"./chunk-5REUCI47.js";var z=Math.cos,Z=Math.sin,D=Math.sqrt,L={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,l=g.latitude-t.granYCos*r+o*t.granXSin,u=z(l),c=Z(l),C=i.z*c,R=g.longitude+r*t.granYSin+o*t.granXCos,S=u*z(R),w=u*Z(R),m=i.x*S,d=i.y*w,O=D(m*S+d*w+C*c);if(s.x=m/O,s.y=d/O,s.z=C/O,a){let n=t.stNwCorner;N(n)?(l=n.latitude-t.stGranYCos*r+o*t.stGranXSin,R=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(R-t.stWest)*t.lonScalar,e.y=(l-t.stSouth)*t.latScalar):(e.x=(R-h.west)*t.lonScalar,e.y=(l-h.south)*t.latScalar)}}},A=new V,g=new W,F=new v,b=new W,q=new O;function B(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,l=a*i,u=Math.sin(n),c=r*u,C=a*u;g=q.project(t,g),g=W.subtract(g,b,g);let R=V.fromRotation(n,A);g=V.multiplyByVector(R,g,g),g=W.add(g,b,g),s-=1,e-=1;let S=(t=q.unproject(g,t)).latitude,w=S+s*C,m=S-h*e,d=S-h*e+s*C,O=Math.max(S,w,m,d),X=Math.min(S,w,m,d),p=t.longitude,I=p+s*l,Y=p+e*c,f=p+e*c+s*l;return{north:O,south:X,east:Math.max(p,I,Y,f),west:Math.min(p,I,Y,f),granYCos:h,granYSin:c,granXCos:l,granXSin:C,nwCorner:t}}L.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,g=t.west,h=t.north,l=t.south,u=!1,c=!1;h===R.PI_OVER_TWO&&(u=!0),l===-R.PI_OVER_TWO&&(c=!0);let C,S=h-l;C=g>i?R.TWO_PI-g+i:i-g;let w=Math.ceil(C/n)+1,m=Math.ceil(S/n)+1,d=C/(w-1),O=S/(m-1),X=I.northwest(t,s),p=I.center(t,F);(0!==a||0!==r)&&(p.longitude<X.longitude&&(p.longitude+=R.TWO_PI),b=q.project(p,b));let W=O,Y=d,f=I.clone(t,o),_={granYCos:W,granYSin:0,granXCos:Y,granXSin:0,nwCorner:X,boundingRectangle:f,width:w,height:m,northCap:u,southCap:c};if(0!==a){let t=B(X,a,d,O,p,w,m);if(h=t.north,l=t.south,i=t.east,g=t.west,h<-R.PI_OVER_TWO||h>R.PI_OVER_TWO||l<-R.PI_OVER_TWO||l>R.PI_OVER_TWO)throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");_.granYCos=t.granYCos,_.granYSin=t.granYSin,_.granXCos=t.granXCos,_.granXSin=t.granXSin,f.north=h,f.south=l,f.east=i,f.west=g}if(0!==r){a-=r;let t=I.northwest(f,e),n=B(t,a,d,O,p,w,m);_.stGranYCos=n.granYCos,_.stGranXCos=n.granXCos,_.stGranYSin=n.granYSin,_.stGranXSin=n.granXSin,_.stNwCorner=t,_.stWest=n.west,_.stSouth=n.south}return _};var nt=L;export{nt as a};