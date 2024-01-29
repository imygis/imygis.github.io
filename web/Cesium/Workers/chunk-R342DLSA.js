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
import{a as K}from"./chunk-6BM2HRAM.js";import{a as L}from"./chunk-CJ3BUWJF.js";import{b as v,c as J,d as Z}from"./chunk-KRUAPDMK.js";import{b as B,c as k,d as I}from"./chunk-RZVOXF67.js";import{a as t,b as T,c as F,d}from"./chunk-6DBWVLDX.js";import{a as g}from"./chunk-ZEICRW3N.js";import{a as W}from"./chunk-KW3W45S2.js";import{a as b,b as z}from"./chunk-ANRF456S.js";import{e as p}from"./chunk-5REUCI47.js";function m(e,n){this.center=t.clone(W(e,t.ZERO)),this.halfAxes=d.clone(W(n,d.ZERO))}m.packedLength=t.packedLength+d.packedLength,m.pack=function(e,n,a){return z.typeOf.object("value",e),z.defined("array",n),a=W(a,0),t.pack(e.center,n,a),d.pack(e.halfAxes,n,a+t.packedLength),n},m.unpack=function(e,n,a){return z.defined("array",e),n=W(n,0),p(a)||(a=new m),t.unpack(e,n,a.center),d.unpack(e,n+t.packedLength,a.halfAxes),a};var Ct=new t,ut=new t,Pt=new t,xt=new t,yt=new t,At=new t,Nt=new d,Mt={unitary:new d,diagonal:new d};m.fromPoints=function(e,n){if(p(n)||(n=new m),!p(e)||0===e.length)return n.halfAxes=d.ZERO,n.center=t.ZERO,n;let a,r=e.length,o=t.clone(e[0],Ct);for(a=1;a<r;a++)t.add(o,e[a],o);let i=1/r;t.multiplyByScalar(o,i,o);let s,c=0,u=0,l=0,h=0,f=0,w=0;for(a=0;a<r;a++)s=t.subtract(e[a],o,ut),c+=s.x*s.x,u+=s.x*s.y,l+=s.x*s.z,h+=s.y*s.y,f+=s.y*s.z,w+=s.z*s.z;c*=i,u*=i,l*=i,h*=i,f*=i,w*=i;let b=Nt;b[0]=c,b[1]=u,b[2]=l,b[3]=u,b[4]=h,b[5]=f,b[6]=l,b[7]=f,b[8]=w;let x=d.computeEigenDecomposition(b,Mt),y=d.clone(x.unitary,n.halfAxes),g=d.getColumn(y,0,xt),T=d.getColumn(y,1,yt),M=d.getColumn(y,2,At),O=-Number.MAX_VALUE,N=-Number.MAX_VALUE,A=-Number.MAX_VALUE,C=Number.MAX_VALUE,I=Number.MAX_VALUE,R=Number.MAX_VALUE;for(a=0;a<r;a++)s=e[a],O=Math.max(t.dot(g,s),O),N=Math.max(t.dot(T,s),N),A=Math.max(t.dot(M,s),A),C=Math.min(t.dot(g,s),C),I=Math.min(t.dot(T,s),I),R=Math.min(t.dot(M,s),R);g=t.multiplyByScalar(g,.5*(C+O),g),T=t.multiplyByScalar(T,.5*(I+N),T),M=t.multiplyByScalar(M,.5*(R+A),M);let P=t.add(g,T,n.center);t.add(P,M,P);let L=Pt;return L.x=O-C,L.y=N-I,L.z=A-R,t.multiplyByScalar(L,.5,L),d.multiplyByScale(n.halfAxes,L,n.halfAxes),n};var nt=new t,Ot=new t;function Q(e,n,a,r,o,i,s,c,u,l,h){if(!(p(o)&&p(i)&&p(s)&&p(c)&&p(u)&&p(l)))throw new b("all extents (minimum/maximum X/Y/Z) are required.");p(h)||(h=new m);let f=h.halfAxes;d.setColumn(f,0,n,f),d.setColumn(f,1,a,f),d.setColumn(f,2,r,f);let w=nt;w.x=(o+i)/2,w.y=(s+c)/2,w.z=(u+l)/2;let x=Ot;x.x=(i-o)/2,x.y=(c-s)/2,x.z=(l-u)/2;let y=h.center;return w=d.multiplyByVector(f,w,w),t.add(e,w,y),d.multiplyByScale(f,x,f),h}var $=new T,bt=new t,St=new T,Tt=new T,gt=new T,Et=new T,Rt=new T,Wt=new t,H=new t,zt=new t,tt=new t,It=new t,Lt=new I,Ut=new I,qt=new I,jt=new I,Bt=new I,vt=new t,Vt=new t,_t=new t,Dt=new t,Xt=new I,kt=new t,Zt=new t,Yt=new t,Gt=new L(t.UNIT_X,0);m.fromRectangle=function(e,n,a,r,o){if(!p(e))throw new b("rectangle is required");if(e.width<0||e.width>g.TWO_PI)throw new b("Rectangle width must be between 0 and 2 * pi");if(e.height<0||e.height>g.PI)throw new b("Rectangle height must be between 0 and pi");if(p(r)&&!g.equalsEpsilon(r.radii.x,r.radii.y,g.EPSILON15))throw new b("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");let i,s,c,d,u,l,m;if(n=W(n,0),a=W(a,0),r=W(r,F.WGS84),e.width<=g.PI){let t=k.center(e,$),h=r.cartographicToCartesian(t,bt),p=new K(h,r);m=p.plane;let f=t.longitude,w=e.south<0&&e.north>0?0:t.latitude,b=T.fromRadians(f,e.north,a,St),x=T.fromRadians(e.west,e.north,a,Tt),y=T.fromRadians(e.west,w,a,gt),g=T.fromRadians(e.west,e.south,a,Et),M=T.fromRadians(f,e.south,a,Rt),O=r.cartographicToCartesian(b,Wt),N=r.cartographicToCartesian(x,H),A=r.cartographicToCartesian(y,zt),C=r.cartographicToCartesian(g,tt),I=r.cartographicToCartesian(M,It),R=p.projectPointToNearestOnPlane(O,Lt),P=p.projectPointToNearestOnPlane(N,Ut),E=p.projectPointToNearestOnPlane(A,qt),U=p.projectPointToNearestOnPlane(C,jt),z=p.projectPointToNearestOnPlane(I,Bt);return i=Math.min(P.x,E.x,U.x),s=-i,d=Math.max(P.y,R.y),c=Math.min(U.y,z.y),x.height=g.height=n,N=r.cartographicToCartesian(x,H),C=r.cartographicToCartesian(g,tt),u=Math.min(L.getPointDistance(m,N),L.getPointDistance(m,C)),l=a,Q(p.origin,p.xAxis,p.yAxis,p.zAxis,i,s,c,d,u,l,o)}let h=e.south>0,f=e.north<0,w=h?e.south:f?e.north:0,x=k.center(e,$).longitude,y=t.fromRadians(x,w,a,r,vt);y.z=0;let M=Math.abs(y.x)<g.EPSILON10&&Math.abs(y.y)<g.EPSILON10?t.UNIT_X:t.normalize(y,Vt),O=t.UNIT_Z,N=t.cross(M,O,_t);m=L.fromPointNormal(y,M,Gt);let A=t.fromRadians(x+g.PI_OVER_TWO,w,a,r,Dt);s=t.dot(L.projectPointOntoPlane(m,A,Xt),N),i=-s,d=t.fromRadians(0,e.north,f?n:a,r,kt).z,c=t.fromRadians(0,e.south,h?n:a,r,Zt).z;let C=t.fromRadians(e.east,w,a,r,Yt);return u=L.getPointDistance(m,C),l=0,Q(y,N,O,M,i,s,c,d,u,l,o)},m.fromTransformation=function(t,e){return z.typeOf.object("transformation",t),p(e)||(e=new m),e.center=B.getTranslation(t,e.center),e.halfAxes=B.getMatrix3(t,e.halfAxes),e.halfAxes=d.multiplyByScalar(e.halfAxes,.5,e.halfAxes),e},m.clone=function(e,n){if(p(e))return p(n)?(t.clone(e.center,n.center),d.clone(e.halfAxes,n.halfAxes),n):new m(e.center,e.halfAxes)},m.intersectPlane=function(e,n){if(!p(e))throw new b("box is required.");if(!p(n))throw new b("plane is required.");let a=e.center,r=n.normal,o=e.halfAxes,i=r.x,s=r.y,c=r.z,u=Math.abs(i*o[d.COLUMN0ROW0]+s*o[d.COLUMN0ROW1]+c*o[d.COLUMN0ROW2])+Math.abs(i*o[d.COLUMN1ROW0]+s*o[d.COLUMN1ROW1]+c*o[d.COLUMN1ROW2])+Math.abs(i*o[d.COLUMN2ROW0]+s*o[d.COLUMN2ROW1]+c*o[d.COLUMN2ROW2]),l=t.dot(r,a)+n.distance;return l<=-u?v.OUTSIDE:l>=u?v.INSIDE:v.INTERSECTING};var at=new t,ct=new t,rt=new t,Ft=new t,et=new t,Jt=new t;m.distanceSquaredTo=function(e,n){if(!p(e))throw new b("box is required.");if(!p(n))throw new b("cartesian is required.");let a=t.subtract(n,e.center,nt),r=e.halfAxes,o=d.getColumn(r,0,at),i=d.getColumn(r,1,ct),s=d.getColumn(r,2,rt),c=t.magnitude(o),u=t.magnitude(i),l=t.magnitude(s),m=!0,h=!0,f=!0;c>0?t.divideByScalar(o,c,o):m=!1,u>0?t.divideByScalar(i,u,i):h=!1,l>0?t.divideByScalar(s,l,s):f=!1;let w,x,y,T=!m+!h+!f;if(1===T){let e=o;w=i,x=s,h?f||(e=s,x=o):(e=i,w=o),y=t.cross(w,x,et),e===o?o=y:e===i?i=y:e===s&&(s=y)}else if(2===T){w=o,h?w=i:f&&(w=s);let e=t.UNIT_Y;e.equalsEpsilon(w,g.EPSILON3)&&(e=t.UNIT_X),x=t.cross(w,e,Ft),t.normalize(x,x),y=t.cross(w,x,et),t.normalize(y,y),w===o?(i=x,s=y):w===i?(s=x,o=y):w===s&&(o=x,i=y)}else 3===T&&(o=t.UNIT_X,i=t.UNIT_Y,s=t.UNIT_Z);let M=Jt;M.x=t.dot(a,o),M.y=t.dot(a,i),M.z=t.dot(a,s);let O,N=0;return M.x<-c?(O=M.x+c,N+=O*O):M.x>c&&(O=M.x-c,N+=O*O),M.y<-u?(O=M.y+u,N+=O*O):M.y>u&&(O=M.y-u,N+=O*O),M.z<-l?(O=M.z+l,N+=O*O):M.z>l&&(O=M.z-l,N+=O*O),N};var Kt=new t,Qt=new t;m.computePlaneDistances=function(e,n,a,r){if(!p(e))throw new b("box is required.");if(!p(n))throw new b("position is required.");if(!p(a))throw new b("direction is required.");p(r)||(r=new J);let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=e.center,c=e.halfAxes,u=d.getColumn(c,0,at),l=d.getColumn(c,1,ct),m=d.getColumn(c,2,rt),h=t.add(u,l,Kt);t.add(h,m,h),t.add(h,s,h);let f=t.subtract(h,n,Qt),w=t.dot(a,f);return o=Math.min(w,o),i=Math.max(w,i),t.add(s,u,h),t.add(h,l,h),t.subtract(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.add(s,u,h),t.subtract(h,l,h),t.add(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.add(s,u,h),t.subtract(h,l,h),t.subtract(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.subtract(s,u,h),t.add(h,l,h),t.add(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.subtract(s,u,h),t.add(h,l,h),t.subtract(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.subtract(s,u,h),t.subtract(h,l,h),t.add(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),t.subtract(s,u,h),t.subtract(h,l,h),t.subtract(h,m,h),t.subtract(h,n,f),w=t.dot(a,f),o=Math.min(w,o),i=Math.max(w,i),r.start=o,r.stop=i,r};var $t=new t,Ht=new t,te=new t;m.computeCorners=function(e,n){z.typeOf.object("box",e),p(n)||(n=[new t,new t,new t,new t,new t,new t,new t,new t]);let a=e.center,r=e.halfAxes,o=d.getColumn(r,0,$t),i=d.getColumn(r,1,Ht),s=d.getColumn(r,2,te);return t.clone(a,n[0]),t.subtract(n[0],o,n[0]),t.subtract(n[0],i,n[0]),t.subtract(n[0],s,n[0]),t.clone(a,n[1]),t.subtract(n[1],o,n[1]),t.subtract(n[1],i,n[1]),t.add(n[1],s,n[1]),t.clone(a,n[2]),t.subtract(n[2],o,n[2]),t.add(n[2],i,n[2]),t.subtract(n[2],s,n[2]),t.clone(a,n[3]),t.subtract(n[3],o,n[3]),t.add(n[3],i,n[3]),t.add(n[3],s,n[3]),t.clone(a,n[4]),t.add(n[4],o,n[4]),t.subtract(n[4],i,n[4]),t.subtract(n[4],s,n[4]),t.clone(a,n[5]),t.add(n[5],o,n[5]),t.subtract(n[5],i,n[5]),t.add(n[5],s,n[5]),t.clone(a,n[6]),t.add(n[6],o,n[6]),t.add(n[6],i,n[6]),t.subtract(n[6],s,n[6]),t.clone(a,n[7]),t.add(n[7],o,n[7]),t.add(n[7],i,n[7]),t.add(n[7],s,n[7]),n};var ee=new d;m.computeTransformation=function(t,e){z.typeOf.object("box",t),p(e)||(e=new B);let n=t.center,a=d.multiplyByUniformScale(t.halfAxes,2,ee);return B.fromRotationTranslation(a,n,e)};var ne=new Z;m.isOccluded=function(t,e){if(!p(t))throw new b("box is required.");if(!p(e))throw new b("occluder is required.");let n=Z.fromOrientedBoundingBox(t,ne);return!e.isBoundingSphereVisible(n)},m.prototype.intersectPlane=function(t){return m.intersectPlane(this,t)},m.prototype.distanceSquaredTo=function(t){return m.distanceSquaredTo(this,t)},m.prototype.computePlaneDistances=function(t,e,n){return m.computePlaneDistances(this,t,e,n)},m.prototype.computeCorners=function(t){return m.computeCorners(this,t)},m.prototype.computeTransformation=function(t){return m.computeTransformation(this,t)},m.prototype.isOccluded=function(t){return m.isOccluded(this,t)},m.equals=function(e,n){return e===n||p(e)&&p(n)&&t.equals(e.center,n.center)&&d.equals(e.halfAxes,n.halfAxes)},m.prototype.clone=function(t){return m.clone(this,t)},m.prototype.equals=function(t){return m.equals(this,t)};var ye=m;export{ye as a};