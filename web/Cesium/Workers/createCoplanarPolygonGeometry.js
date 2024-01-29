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
import{a as et}from"./chunk-YF5O2VZO.js";import{a as U}from"./chunk-Q4UTVUWJ.js";import"./chunk-R342DLSA.js";import{a as y}from"./chunk-GFQNIEJ4.js";import"./chunk-KPDHOUYP.js";import{a as I}from"./chunk-AYKF23P7.js";import{a as $}from"./chunk-3ZZKK4JY.js";import"./chunk-LIYSS65T.js";import"./chunk-XDDCDRP7.js";import{a as u}from"./chunk-GNOVD5HP.js";import"./chunk-6BM2HRAM.js";import"./chunk-5QO2XXQ5.js";import{b as ot}from"./chunk-HUTVDPLR.js";import{a as tt}from"./chunk-QL7V6YKW.js";import"./chunk-EGNG2T22.js";import"./chunk-GN2CGLQJ.js";import"./chunk-CJ3BUWJF.js";import{a as J}from"./chunk-JIRJ27VD.js";import{a as X}from"./chunk-AD3PINJR.js";import{b as K,c as Y,d as z}from"./chunk-7KSTQKGD.js";import{d as Z,f as Q}from"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import{d as x}from"./chunk-RZVOXF67.js";import{a as N}from"./chunk-WJY2YZOB.js";import{a as i,c as m,d as P}from"./chunk-6DBWVLDX.js";import{a as q}from"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import"./chunk-TCDHAGGB.js";import{a as f}from"./chunk-KW3W45S2.js";import{b as B}from"./chunk-ANRF456S.js";import{e as g}from"./chunk-5REUCI47.js";var st=new i,at=new et,pt=new x,lt=new x,mt=new i,ft=new i,ut=new i,V=new i,yt=new i,ht=new i,nt=new Q,dt=new P,gt=new P,Pt=new i;function wt(t,e,n,o,r,a,s,c,p){let l=t.positions,u=ot.triangulate(t.positions2D,t.holes);u.length<3&&(u=[0,1,2]);let m=J.createTypedArray(l.length,u.length);m.set(u);let h=dt;if(0!==o){let t=Q.fromAxisAngle(s,o,nt);if(h=P.fromQuaternion(t,h),e.tangent||e.bitangent){t=Q.fromAxisAngle(s,-o,nt);let n=P.fromQuaternion(t,gt);c=i.normalize(P.multiplyByVector(n,c,c),c),e.bitangent&&(p=i.normalize(i.cross(s,c,p),p))}}else h=P.clone(P.IDENTITY,h);let y=lt;e.st&&(y.x=n.x,y.y=n.y);let d=l.length,f=3*d,k=new Float64Array(f),w=e.normal?new Float32Array(f):void 0,j=e.tangent?new Float32Array(f):void 0,A=e.bitangent?new Float32Array(f):void 0,v=e.st?new Float32Array(2*d):void 0,F=0,_=0,b=0,D=0,E=0;for(let t=0;t<d;t++){let o=l[t];if(k[F++]=o.x,k[F++]=o.y,k[F++]=o.z,e.st)if(g(r)&&r.positions.length===d)v[E++]=r.positions[t].x,v[E++]=r.positions[t].y;else{let t=a(P.multiplyByVector(h,o,st),pt);x.subtract(t,y,t);let e=q.clamp(t.x/n.width,0,1),i=q.clamp(t.y/n.height,0,1);v[E++]=e,v[E++]=i}e.normal&&(w[_++]=s.x,w[_++]=s.y,w[_++]=s.z),e.tangent&&(j[D++]=c.x,j[D++]=c.y,j[D++]=c.z),e.bitangent&&(A[b++]=p.x,A[b++]=p.y,A[b++]=p.z)}let L=new X;return e.position&&(L.position=new z({componentDatatype:N.DOUBLE,componentsPerAttribute:3,values:k})),e.normal&&(L.normal=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:w})),e.tangent&&(L.tangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:j})),e.bitangent&&(L.bitangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:A})),e.st&&(L.st=new z({componentDatatype:N.FLOAT,componentsPerAttribute:2,values:v})),new Y({attributes:L,indices:m,primitiveType:K.TRIANGLES})}function E(t){let e=(t=f(t,f.EMPTY_OBJECT)).polygonHierarchy,n=t.textureCoordinates;B.defined("options.polygonHierarchy",e);let o=f(t.vertexFormat,u.DEFAULT);this._vertexFormat=u.clone(o),this._polygonHierarchy=e,this._stRotation=f(t.stRotation,0),this._ellipsoid=m.clone(f(t.ellipsoid,m.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=y.computeHierarchyPackedLength(e,i)+u.packedLength+m.packedLength+(g(n)?y.computeHierarchyPackedLength(n,x):1)+2}E.fromPositions=function(t){return t=f(t,f.EMPTY_OBJECT),B.defined("options.positions",t.positions),new E({polygonHierarchy:{positions:t.positions},vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,textureCoordinates:t.textureCoordinates})},E.pack=function(t,e,n){return B.typeOf.object("value",t),B.defined("array",e),n=f(n,0),n=y.packPolygonHierarchy(t._polygonHierarchy,e,n,i),m.pack(t._ellipsoid,e,n),n+=m.packedLength,u.pack(t._vertexFormat,e,n),n+=u.packedLength,e[n++]=t._stRotation,g(t._textureCoordinates)?n=y.packPolygonHierarchy(t._textureCoordinates,e,n,x):e[n++]=-1,e[n++]=t.packedLength,e};var _t=m.clone(m.UNIT_SPHERE),At=new u,bt={polygonHierarchy:{}};E.unpack=function(t,e,n){B.defined("array",t),e=f(e,0);let o=y.unpackPolygonHierarchy(t,e,i);e=o.startingIndex,delete o.startingIndex;let r=m.unpack(t,e,_t);e+=m.packedLength;let a=u.unpack(t,e,At);e+=u.packedLength;let s=t[e++],c=-1===t[e]?void 0:y.unpackPolygonHierarchy(t,e,x);g(c)?(e=c.startingIndex,delete c.startingIndex):e++;let p=t[e++];return g(n)||(n=new E(bt)),n._polygonHierarchy=o,n._ellipsoid=m.clone(r,n._ellipsoid),n._vertexFormat=u.clone(a,n._vertexFormat),n._stRotation=s,n._textureCoordinates=c,n.packedLength=p,n},E.createGeometry=function(t){let e=t._vertexFormat,n=t._polygonHierarchy,o=t._stRotation,r=t._textureCoordinates,a=g(r),s=n.positions;if(s=tt(s,i.equalsEpsilon,!0),s.length<3)return;let c=mt,p=ft,l=ut,u=yt,m=ht;if(!U.computeProjectTo2DArguments(s,V,u,m))return;if(c=i.cross(u,m,c),c=i.normalize(c,c),!i.equalsEpsilon(V,i.ZERO,q.EPSILON6)){let e=t._ellipsoid.geodeticSurfaceNormal(V,Pt);i.dot(c,e)<0&&(c=i.negate(c,c),u=i.negate(u,u))}let h=U.createProjectPointsTo2DFunction(V,u,m),d=U.createProjectPointTo2DFunction(V,u,m);e.tangent&&(p=i.clone(u,p)),e.bitangent&&(l=i.clone(m,l));let f=y.polygonsFromHierarchy(n,a,h,!1),k=f.hierarchy,P=f.polygons,x=a?y.polygonsFromHierarchy(r,!0,(function(t){return t}),!1).polygons:void 0;if(0===k.length)return;s=k[0].outerRing;let w=Z.fromPoints(s),j=y.computeBoundingRectangle(c,d,s,o,at),A=[];for(let t=0;t<P.length;t++){let n=new I({geometry:wt(P[t],e,j,o,a?x[t]:void 0,d,c,p,l)});A.push(n)}let v=$.combineInstances(A)[0];v.attributes.position.values=new Float64Array(v.attributes.position.values),v.indices=J.createTypedArray(v.attributes.position.values.length/3,v.indices);let F=v.attributes;return e.position||delete F.position,new Y({attributes:F,indices:v.indices,primitiveType:v.primitiveType,boundingSphere:w})};var W=E;function kt(t,e){return g(e)&&(t=W.unpack(t,e)),W.createGeometry(t)}var Xt=kt;export{Xt as default};