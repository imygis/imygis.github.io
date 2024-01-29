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
import{a as sr,b as fr}from"./chunk-VWKHEOOZ.js";import{a as tr}from"./chunk-ZCVEPFKV.js";import{a as Ue}from"./chunk-FHACSVTR.js";import{a as ar}from"./chunk-R342DLSA.js";import"./chunk-LIYSS65T.js";import"./chunk-6BM2HRAM.js";import{a as nr}from"./chunk-5QO2XXQ5.js";import"./chunk-GN2CGLQJ.js";import"./chunk-CJ3BUWJF.js";import{d as er,i as ir}from"./chunk-KRUAPDMK.js";import"./chunk-XLNRNYRL.js";import{b as xe,c as ae,d as rr}from"./chunk-RZVOXF67.js";import"./chunk-WJY2YZOB.js";import{a as ie,c as Ie}from"./chunk-6DBWVLDX.js";import{a as ge}from"./chunk-ZEICRW3N.js";import"./chunk-E4M5DU35.js";import{a as He}from"./chunk-TCDHAGGB.js";import{a as Y}from"./chunk-KW3W45S2.js";import{a as he}from"./chunk-ANRF456S.js";import{c as Ir,d as xr,e as G}from"./chunk-5REUCI47.js";var ur=Ir(((e,t)=>{/* Copyright 2015-2018 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */!function(){var e,i,r,a,n,s,l=(e={defaultNoDataValue:-34027999387901484e22,decode:function(t,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,o=n(t,s.inputOffset||0,l),f=null!==s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=i(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),h={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(h.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(h.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(h.fileInfo=r(o),s.computeUsedBitDepths&&(h.fileInfo.bitDepths=a(o))),h}},i=function(e,t,i,r,a){var n,l,o,f=0,u=e.pixels.numBlocksX,h=e.pixels.numBlocksY,c=Math.floor(e.width/u),m=Math.floor(e.height/h),d=2*e.maxZError,g=Number.MAX_VALUE;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(o=new Uint8Array(e.width*e.height));for(var p,w,x=new Float32Array(c*m),k=0;k<=h;k++){var y=k!==h?m:e.height%h;if(0!==y)for(var I=0;I<=u;I++){var U=I!==u?c:e.width%u;if(0!==U){var b,v,T,A,M=k*e.width*m+I*c,V=e.width-U,D=e.pixels.blocks[f];if(D.encoding<2?(0===D.encoding?b=D.rawData:(s(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,d,x,e.pixels.maxValue),b=x),v=0):T=2===D.encoding?0:D.offset,i)for(w=0;w<y;w++){for(7&M&&(A=i[M>>3],A<<=7&M),p=0;p<U;p++)7&M||(A=i[M>>3]),128&A?(o&&(o[M]=1),g=g>(n=D.encoding<2?b[v++]:T)?n:g,l[M++]=n):(o&&(o[M]=0),l[M++]=r),A<<=1;M+=V}else if(D.encoding<2)for(w=0;w<y;w++){for(p=0;p<U;p++)g=g>(n=b[v++])?n:g,l[M++]=n;M+=V}else for(g=g>T?T:g,w=0;w<y;w++){for(p=0;p<U;p++)l[M++]=T;M+=V}if(1===D.encoding&&v!==D.numValidPixels)throw"Block and Mask do not match";f++}}}return{resultPixels:l,resultMask:o,minValue:g}},r=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},a=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},r=0;r<t;r++){var a=e.pixels.blocks[r];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},n=function(e,t,i){var r={},a=new Uint8Array(e,t,10);if(r.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!==r.fileIdentifierString.trim())throw"Unexpected file identifier string: "+r.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(r.fileVersion=n.getInt32(0,!0),r.imageType=n.getInt32(4,!0),r.height=n.getUint32(8,!0),r.width=n.getUint32(12,!0),r.maxZError=n.getFloat64(16,!0),t+=24,!i)if(n=new DataView(e,t,16),r.mask={},r.mask.numBlocksY=n.getUint32(0,!0),r.mask.numBlocksX=n.getUint32(4,!0),r.mask.numBytes=n.getUint32(8,!0),r.mask.maxValue=n.getFloat32(12,!0),t+=16,r.mask.numBytes>0){var s=new Uint8Array(Math.ceil(r.width*r.height/8)),l=(n=new DataView(e,t,r.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(l>0)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<r.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";r.mask.bitset=s,t+=r.mask.numBytes}else r.mask.numBytes|r.mask.numBlocksY|r.mask.maxValue||(r.mask.bitset=new Uint8Array(Math.ceil(r.width*r.height/8)));n=new DataView(e,t,16),r.pixels={},r.pixels.numBlocksY=n.getUint32(0,!0),r.pixels.numBlocksX=n.getUint32(4,!0),r.pixels.numBytes=n.getUint32(8,!0),r.pixels.maxValue=n.getFloat32(12,!0),t+=16;var h=r.pixels.numBlocksX,c=r.pixels.numBlocksY,m=h+(r.width%h>0?1:0),d=c+(r.height%c>0?1:0);r.pixels.blocks=new Array(m*d);for(var g=0,p=0;p<d;p++)for(var w=0;w<m;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};r.pixels.blocks[g++]=y;var I=n.getUint8(0);if(x++,y.encoding=63&I,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==I&&2!==I){if(I>>=6,y.offsetType=I,2===I)y.offset=n.getInt8(1),x++;else if(1===I)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==I)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(I=n.getUint8(x),x++,y.bitsPerPixel=63&I,I>>=6,y.numValidPixelsType=I,2===I)y.numValidPixels=n.getUint8(x),x++;else if(1===I)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==I)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var U;if(t+=x,3!==y.encoding)if(0===y.encoding){var b=(r.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";U=new ArrayBuffer(4*b),new Uint8Array(U).set(new Uint8Array(e,t,4*b));var v=new Float32Array(U);y.rawData=v,t+=4*b}else if(1===y.encoding){var T=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),A=Math.ceil(T/4);U=new ArrayBuffer(4*A),new Uint8Array(U).set(new Uint8Array(e,t,T)),y.stuffedData=new Uint32Array(U),t+=T}}else t++}return r.eofOffset=t,r},s=function(e,t,i,r,a,n,s){var l,o,f,u=(1<<t)-1,h=0,c=0,m=Math.ceil((s-r)/a),d=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*d,l=0;l<i;l++){if(0===c&&(f=e[h++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var g=t-c;o=(f&u)<<g&u,o+=(f=e[h++])>>>(c=32-g)}n[l]=o<m?r+o*a:s}return n},e),o=function(){"use strict";var e=function(e,t,i,r,a,n,s,l){var o,f,u,h,c,m=(1<<i)-1,d=0,g=0,p=4*e.length-Math.ceil(i*r/8);if(e[e.length-1]<<=8*p,a)for(o=0;o<r;o++)0===g&&(u=e[d++],g=32),g>=i?(f=u>>>g-i&m,g-=i):(f=(u&m)<<(h=i-g)&m,f+=(u=e[d++])>>>(g=32-h)),t[o]=a[f];else for(c=Math.ceil((l-n)/s),o=0;o<r;o++)0===g&&(u=e[d++],g=32),g>=i?(f=u>>>g-i&m,g-=i):(f=(u&m)<<(h=i-g)&m,f+=(u=e[d++])>>>(g=32-h)),t[o]=f<c?n+f*s:l},t=function(e,t,i,r,a,n){var s,l=(1<<t)-1,o=0,f=0,u=0,h=0,c=0,m=[],d=4*e.length-Math.ceil(t*i/8);e[e.length-1]<<=8*d;var g=Math.ceil((n-r)/a);for(f=0;f<i;f++)0===h&&(s=e[o++],h=32),h>=t?(c=s>>>h-t&l,h-=t):(c=(s&l)<<(u=t-h)&l,c+=(s=e[o++])>>>(h=32-u)),m[f]=c<g?r+c*a:n;return m.unshift(r),m},i=function(e,t,i,r,a,n,s,l){var o,f,u,h,c=(1<<i)-1,m=0,d=0,g=0;if(a)for(o=0;o<r;o++)0===d&&(u=e[m++],d=32,g=0),d>=i?(f=u>>>g&c,d-=i,g+=i):(f=u>>>g&c,d=32-(h=i-d),f|=((u=e[m++])&(1<<h)-1)<<i-h,g=h),t[o]=a[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<r;o++)0===d&&(u=e[m++],d=32,g=0),d>=i?(f=u>>>g&c,d-=i,g+=i):(f=u>>>g&c,d=32-(h=i-d),f|=((u=e[m++])&(1<<h)-1)<<i-h,g=h),t[o]=f<p?n+f*s:l}return t},r=function(e,t,i,r,a,n){var s,l=(1<<t)-1,o=0,f=0,u=0,h=0,c=0,m=0,d=[],g=Math.ceil((n-r)/a);for(f=0;f<i;f++)0===h&&(s=e[o++],h=32,m=0),h>=t?(c=s>>>m&l,h-=t,m+=t):(c=s>>>m&l,h=32-(u=t-h),c|=((s=e[o++])&(1<<u)-1)<<t-u,m=u),d[f]=c<g?r+c*a:n;return d.unshift(r),d},a=function(e,t,i,r){var a,n,s,l,o=(1<<i)-1,f=0,u=0,h=4*e.length-Math.ceil(i*r/8);for(e[e.length-1]<<=8*h,a=0;a<r;a++)0===u&&(s=e[f++],u=32),u>=i?(n=s>>>u-i&o,u-=i):(n=(s&o)<<(l=i-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[a]=n;return t},n=function(e,t,i,r){var a,n,s,l,o=(1<<i)-1,f=0,u=0,h=0;for(a=0;a<r;a++)0===u&&(s=e[f++],u=32,h=0),u>=i?(n=s>>>h&o,u-=i,h+=i):(n=s>>>h&o,u=32-(l=i-u),n|=((s=e[f++])&(1<<l)-1)<<i-l,h=l),t[a]=n;return t},s={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,i=65535,r=e.length,a=Math.floor(r/2),n=0;a;){var s=a>=359?359:a;a-=s;do{t+=e[n++]<<8,i+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),i=(65535&i)+(i>>>16)}return 1&r&&(i+=t+=e[n]<<8),((i=(65535&i)+(i>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var i=t.ptr,r=new Uint8Array(e,i,6),a={};if(a.fileIdentifierString=String.fromCharCode.apply(null,r),0!==a.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+a.fileIdentifierString;i+=6;var n,s=new DataView(e,i,8),l=s.getInt32(0,!0);if(a.fileVersion=l,i+=4,l>=3&&(a.checksum=s.getUint32(4,!0),i+=4),s=new DataView(e,i,12),a.height=s.getUint32(0,!0),a.width=s.getUint32(4,!0),i+=8,l>=4?(a.numDims=s.getUint32(8,!0),i+=4):a.numDims=1,s=new DataView(e,i,40),a.numValidPixel=s.getUint32(0,!0),a.microBlockSize=s.getInt32(4,!0),a.blobSize=s.getInt32(8,!0),a.imageType=s.getInt32(12,!0),a.maxZError=s.getFloat64(16,!0),a.zMin=s.getFloat64(24,!0),a.zMax=s.getFloat64(32,!0),i+=40,t.headerInfo=a,t.ptr=i,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,i-n,a.blobSize-14))!==a.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var i=t.headerInfo,r=this.getDataTypeArray(i.imageType),a=i.numDims*this.getDataTypeSize(i.imageType),n=this.readSubArray(e,t.ptr,r,a),s=this.readSubArray(e,t.ptr+a,r,a);t.ptr+=2*a;var l,o=!0;for(l=0;l<i.numDims;l++)if(n[l]!==s[l]){o=!1;break}return i.minValues=n,i.maxValues=s,o},readSubArray:function(e,t,i,r){var a;if(i===Uint8Array)a=new Uint8Array(e,t,r);else{var n=new ArrayBuffer(r);new Uint8Array(n).set(new Uint8Array(e,t,r)),a=new i(n)}return a},readMask:function(e,t){var i,r,a=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,a,4),f={};if(f.numBytes=o.getUint32(0,!0),a+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)i=new Uint8Array(Math.ceil(s/8)),f.bitset=i,r=new Uint8Array(s),t.pixels.resultMask=r,a+=f.numBytes;else if(f.numBytes>0){i=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,a,f.numBytes)).getInt16(0,!0),h=2,c=0,m=0;do{if(u>0)for(;u--;)i[c++]=o.getUint8(h++);else for(m=o.getUint8(h++),u=-u;u--;)i[c++]=m;u=o.getInt16(h,!0),h+=2}while(h<f.numBytes);if(-32768!==u||c<i.length)throw"Unexpected end of mask RLE encoding";r=new Uint8Array(s);var d=0,g=0;for(g=0;g<s;g++)7&g?(d=i[g>>3],d<<=7&g):d=i[g>>3],128&d&&(r[g]=1);t.pixels.resultMask=r,f.bitset=i,a+=f.numBytes}return t.ptr=a,t.mask=f,!0},readDataOneSweep:function(e,t,i){var r,a=t.ptr,n=t.headerInfo,l=n.numDims,o=n.width*n.height,f=n.imageType,u=n.numValidPixel*s.getDataTypeSize(f)*l,h=t.pixels.resultMask;if(i===Uint8Array)r=new Uint8Array(e,a,u);else{var c=new ArrayBuffer(u);new Uint8Array(c).set(new Uint8Array(e,a,u)),r=new i(c)}if(r.length===o*l)t.pixels.resultPixels=r;else{t.pixels.resultPixels=new i(o*l);var m=0,d=0,g=0,p=0;if(l>1)for(g=0;g<l;g++)for(p=g*o,d=0;d<o;d++)h[d]&&(t.pixels.resultPixels[p+d]=r[m++]);else for(d=0;d<o;d++)h[d]&&(t.pixels.resultPixels[d]=r[m++])}return a+=u,t.ptr=a,!0},readHuffmanTree:function(e,t){var i=this.HUFFMAN_LUT_BITS_MAX,r=new DataView(e,t.ptr,16);if(t.ptr+=16,r.getInt32(0,!0)<2)throw"unsupported Huffman version";var a=r.getInt32(4,!0),n=r.getInt32(8,!0),o=r.getInt32(12,!0);if(n>=o)return!1;var f=new Uint32Array(o-n);s.decodeBits(e,t,f);var u,h,c,m,d=[];for(u=n;u<o;u++)d[h=u-(u<a?0:a)]={first:f[u-n],second:null};var g=e.byteLength-t.ptr,p=Math.ceil(g/4),w=new ArrayBuffer(4*p);new Uint8Array(w).set(new Uint8Array(e,t.ptr,g));var x,k=new Uint32Array(w),y=0,I=0;for(x=k[0],u=n;u<o;u++)(m=d[h=u-(u<a?0:a)].first)>0&&(d[h].second=x<<y>>>32-m,32-y>=m?32===(y+=m)&&(y=0,x=k[++I]):(y+=m-32,x=k[++I],d[h].second|=x>>>32-y));var U=0,b=0,v=new l;for(u=0;u<d.length;u++)void 0!==d[u]&&(U=Math.max(U,d[u].first));b=U>=i?i:U,U>=30&&console.log("WARning, large NUM LUT BITS IS "+U);var T,A,M,V,D,B=[];for(u=n;u<o;u++)if((m=d[h=u-(u<a?0:a)].first)>0)if(T=[m,h],m<=b)for(A=d[h].second<<b-m,M=1<<b-m,c=0;c<M;c++)B[A|c]=T;else for(A=d[h].second,D=v,V=m-1;V>=0;V--)A>>>V&1?(D.right||(D.right=new l),D=D.right):(D.left||(D.left=new l),D=D.left),0===V&&!D.val&&(D.val=T[1]);return{decodeLut:B,numBitsLUTQick:b,numBitsLUT:U,tree:v,stuffedData:k,srcPtr:I,bitPos:y}},readHuffman:function(e,t,i){var r,a,n,s,l,o,f,u,h,c=t.headerInfo,m=c.numDims,d=t.headerInfo.height,g=t.headerInfo.width,p=g*d,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,I=w.srcPtr,U=w.bitPos,b=w.numBitsLUTQick,v=w.numBitsLUT,T=0===t.headerInfo.imageType?128:0,A=t.pixels.resultMask,M=0;U>0&&(I++,U=0);var V,D=y[I],B=1===t.encodeMode,S=new i(p*m),P=S;for(V=0;V<c.numDims;V++){if(m>1&&(P=new i(S.buffer,p*V,p),M=0),t.headerInfo.numValidPixel===g*d)for(u=0,o=0;o<d;o++)for(f=0;f<g;f++,u++){if(a=0,l=s=D<<U>>>32-b,32-U<b&&(l=s|=y[I+1]>>>64-U-b),x[l])a=x[l][1],U+=x[l][0];else for(l=s=D<<U>>>32-v,32-U<v&&(l=s|=y[I+1]>>>64-U-v),r=k,h=0;h<v;h++)if(!(r=s>>>v-h-1&1?r.right:r.left).left&&!r.right){a=r.val,U=U+h+1;break}U>=32&&(U-=32,D=y[++I]),n=a-T,B?(n+=f>0?M:o>0?P[u-g]:M,n&=255,P[u]=n,M=n):P[u]=n}else for(u=0,o=0;o<d;o++)for(f=0;f<g;f++,u++)if(A[u]){if(a=0,l=s=D<<U>>>32-b,32-U<b&&(l=s|=y[I+1]>>>64-U-b),x[l])a=x[l][1],U+=x[l][0];else for(l=s=D<<U>>>32-v,32-U<v&&(l=s|=y[I+1]>>>64-U-v),r=k,h=0;h<v;h++)if(!(r=s>>>v-h-1&1?r.right:r.left).left&&!r.right){a=r.val,U=U+h+1;break}U>=32&&(U-=32,D=y[++I]),n=a-T,B?(f>0&&A[u-1]?n+=M:o>0&&A[u-g]?n+=P[u-g]:n+=M,n&=255,P[u]=n,M=n):P[u]=n}t.ptr=t.ptr+4*(I+1)+(U>0?4:0)}t.pixels.resultPixels=S},decodeBits:function(s,l,o,f,u){var h=l.headerInfo,c=h.fileVersion,m=0,d=new DataView(s,l.ptr,5),g=d.getUint8(0);m++;var p=g>>6,w=0===p?4:3-p,x=(32&g)>0,k=31&g,y=0;if(1===w)y=d.getUint8(m),m++;else if(2===w)y=d.getUint16(m,!0),m+=2;else{if(4!==w)throw"Invalid valid pixel count type";y=d.getUint32(m,!0),m+=4}var I,U,b,v,T,A,M,V,D,B=2*h.maxZError,S=h.numDims>1?h.maxValues[u]:h.zMax;if(x){for(l.counter.lut++,V=d.getUint8(m),k,m++,v=Math.ceil((V-1)*k/8),T=Math.ceil(v/4),U=new ArrayBuffer(4*T),b=new Uint8Array(U),l.ptr+=m,b.set(new Uint8Array(s,l.ptr,v)),M=new Uint32Array(U),l.ptr+=v,D=0;V-1>>>D;)D++;v=Math.ceil(y*D/8),T=Math.ceil(v/4),U=new ArrayBuffer(4*T),(b=new Uint8Array(U)).set(new Uint8Array(s,l.ptr,v)),I=new Uint32Array(U),l.ptr+=v,A=c>=3?r(M,k,V-1,f,B,S):t(M,k,V-1,f,B,S),c>=3?i(I,o,D,y,A):e(I,o,D,y,A)}else l.counter.bitstuffer++,D=k,l.ptr+=m,D>0&&(v=Math.ceil(y*D/8),T=Math.ceil(v/4),U=new ArrayBuffer(4*T),(b=new Uint8Array(U)).set(new Uint8Array(s,l.ptr,v)),I=new Uint32Array(U),l.ptr+=v,c>=3?null==f?n(I,o,D,y):i(I,o,D,y,!1,f,B,S):null==f?a(I,o,D,y):e(I,o,D,y,!1,f,B,S))},readTiles:function(e,t,i){var r=t.headerInfo,a=r.width,n=r.height,l=r.microBlockSize,o=r.imageType,f=s.getDataTypeSize(o),u=Math.ceil(a/l),h=Math.ceil(n/l);t.pixels.numBlocksY=h,t.pixels.numBlocksX=u,t.pixels.ptr=0;var c,m,d,g,p,w,x,k,y=0,I=0,U=0,b=0,v=0,T=0,A=0,M=0,V=0,D=0,B=0,S=0,P=0,E=0,F=0,N=new i(l*l),L=n%l||l,R=a%l||l,O=r.numDims,Y=t.pixels.resultMask,C=t.pixels.resultPixels;for(U=0;U<h;U++)for(v=U!==h-1?l:L,b=0;b<u;b++)for(D=U*a*l+b*l,B=a-(T=b!==u-1?l:R),k=0;k<O;k++){if(O>1&&(C=new i(t.pixels.resultPixels.buffer,a*n*k*f,a*n)),A=e.byteLength-t.ptr,m={},F=0,F++,V=(M=(c=new DataView(e,t.ptr,Math.min(10,A))).getUint8(0))>>6&255,(M>>2&15)!==(b*l>>3&15))throw"integrity issue";if((p=3&M)>3)throw t.ptr+=F,"Invalid block encoding ("+p+")";if(2!==p)if(0===p){if(t.counter.uncompressed++,t.ptr+=F,S=(S=v*T*f)<(P=e.byteLength-t.ptr)?S:P,d=new ArrayBuffer(S%f==0?S:S+f-S%f),new Uint8Array(d).set(new Uint8Array(e,t.ptr,S)),g=new i(d),E=0,Y)for(y=0;y<v;y++){for(I=0;I<T;I++)Y[D]&&(C[D]=g[E++]),D++;D+=B}else for(y=0;y<v;y++){for(I=0;I<T;I++)C[D++]=g[E++];D+=B}t.ptr+=E*f}else if(w=s.getDataTypeUsed(o,V),x=s.getOnePixel(m,F,w,c),F+=s.getDataTypeSize(w),3===p)if(t.ptr+=F,t.counter.constantoffset++,Y)for(y=0;y<v;y++){for(I=0;I<T;I++)Y[D]&&(C[D]=x),D++;D+=B}else for(y=0;y<v;y++){for(I=0;I<T;I++)C[D++]=x;D+=B}else if(t.ptr+=F,s.decodeBits(e,t,N,x,k),F=0,Y)for(y=0;y<v;y++){for(I=0;I<T;I++)Y[D]&&(C[D]=N[F++]),D++;D+=B}else for(y=0;y<v;y++){for(I=0;I<T;I++)C[D++]=N[F++];D+=B}else t.counter.constant++,t.ptr+=F}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:s.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,i=e.headerInfo.numDims,r=e.headerInfo.height*e.headerInfo.width,a=r*i,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(i>1)for(n=0;n<i;n++)for(l=n*r,s=0;s<r;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<r;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<a;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:default:t=Float32Array;break;case 7:t=Float64Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:default:t="F32";break;case 7:t="F64"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var i;switch(e){case 0:i=t>=-128&&t<=127;break;case 1:i=t>=0&&t<=255;break;case 2:i=t>=-32768&&t<=32767;break;case 3:i=t>=0&&t<=65536;break;case 4:i=t>=-2147483648&&t<=2147483647;break;case 5:i=t>=0&&t<=4294967296;break;case 6:i=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:i=t>=5e-324&&t<=17976931348623157e292;break;default:i=!1}return i},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var i=e;switch(e){case 2:case 4:i=e-t;break;case 3:case 5:i=e-2*t;break;case 6:i=0===t?e:1===t?2:1;break;case 7:i=0===t?e:e-2*t+1;break;default:i=e}return i},getOnePixel:function(e,t,i,r){var a=0;switch(i){case 0:a=r.getInt8(t);break;case 1:a=r.getUint8(t);break;case 2:a=r.getInt16(t,!0);break;case 3:a=r.getUint16(t,!0);break;case 4:a=r.getInt32(t,!0);break;case 5:a=r.getUInt32(t,!0);break;case 6:a=r.getFloat32(t,!0);break;case 7:a=r.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return a}},l=function(e,t,i){this.val=e,this.left=t,this.right=i},o={decode:function(e,t){var i=(t=t||{}).noDataValue,r=0,a={};if(a.ptr=t.inputOffset||0,a.pixels={},s.readHeaderInfo(e,a)){var n=a.headerInfo,l=n.fileVersion,o=s.getDataTypeArray(n.imageType);s.readMask(e,a),n.numValidPixel!==n.width*n.height&&!a.pixels.resultMask&&(a.pixels.resultMask=t.maskData);var f,u=n.width*n.height;if(a.pixels.resultPixels=new o(u*n.numDims),a.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)s.constructConstantSurface(a);else if(l>=4&&s.checkMinMaxRanges(e,a))s.constructConstantSurface(a);else{var h=new DataView(e,a.ptr,2),c=h.getUint8(0);if(a.ptr++,c)s.readDataOneSweep(e,a,o);else if(l>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var m=h.getUint8(1);if(a.ptr++,a.encodeMode=m,m>2||l<4&&m>1)throw"Invalid Huffman flag "+m;m?s.readHuffman(e,a,o):s.readTiles(e,a,o)}else s.readTiles(e,a,o)}a.eofOffset=a.ptr,t.inputOffset?(f=a.headerInfo.blobSize+t.inputOffset-a.ptr,Math.abs(f)>=1&&(a.eofOffset=t.inputOffset+a.headerInfo.blobSize)):(f=a.headerInfo.blobSize-a.ptr,Math.abs(f)>=1&&(a.eofOffset=a.headerInfo.blobSize));var d={width:n.width,height:n.height,pixelData:a.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:a.pixels.resultMask};if(a.pixels.resultMask&&s.isValidPixelValue(n.imageType,i)){var g=a.pixels.resultMask;for(r=0;r<u;r++)g[r]||(d.pixelData[r]=i);d.noDataValue=i}return a.noDataValue=i,t.returnFileInfo&&(d.fileInfo=s.formatFileInfo(a)),d}},getBandCount:function(e){for(var t=0,i=0,r={ptr:0,pixels:{}};i<e.byteLength-58;)s.readHeaderInfo(e,r),i+=r.headerInfo.blobSize,t++,r.ptr=i;return t}};return o}(),f=function(){var e=new ArrayBuffer(4),t=new Uint8Array(e);return new Uint32Array(e)[0]=1,1===t[0]}(),u={decode:function(e,t){if(!f)throw"Big endian system is not supported.";var i,r,a,n,s,u=(t=t||{}).inputOffset||0,h=new Uint8Array(e,u,10),c=String.fromCharCode.apply(null,h);if("CntZImage"===c.trim())i=l,r=1;else{if("Lerc2"!==c.substring(0,5))throw"Unexpected file identifier string: "+c;i=o,r=2}for(var m,d,g,p=0,w=e.byteLength-10,x=[],k={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};u<w;){var y=i.decode(e,{inputOffset:u,encodedMaskData:m,maskData:g,returnMask:0===p,returnEncodedMask:0===p,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});u=y.fileInfo.eofOffset,0===p&&(m=y.encodedMaskData,g=y.maskData,k.width=y.width,k.height=y.height,k.dimCount=y.dimCount||1,k.pixelType=y.pixelType||y.fileInfo.pixelType,k.mask=y.maskData),r>1&&y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&x.push(y.maskData),p++,k.pixels.push(y.pixelData),k.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}if(r>1&&x.length>1){for(s=k.width*k.height,k.bandMasks=x,(g=new Uint8Array(s)).set(x[0]),a=1;a<x.length;a++)for(d=x[a],n=0;n<s;n++)g[n]=g[n]&d[n];k.maskData=g}return k}};"function"==typeof define&&define.amd?define([],(function(){return u})):typeof t<"u"&&t.exports?t.exports=u:this.Lerc=u}()})),Ur={NONE:0,LERC:1},or=Object.freeze(Ur),Q={};Q.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var Ye=new ie,Tr=new xe,kr=new ie,yr=new ie;Q.computeVertices=function(e){if(!G(e)||!G(e.heightmap))throw new he("options.heightmap is required.");if(!G(e.width)||!G(e.height))throw new he("options.width and options.height are required.");if(!G(e.nativeRectangle))throw new he("options.nativeRectangle is required.");if(!G(e.skirtHeight))throw new he("options.skirtHeight is required.");let t,i,r,a,n=Math.cos,s=Math.sin,l=Math.sqrt,o=Math.atan,f=Math.exp,u=ge.PI_OVER_TWO,h=ge.toRadians,c=e.heightmap,m=e.width,d=e.height,g=e.skirtHeight,p=g>0,w=Y(e.isGeographic,!0),x=Y(e.ellipsoid,Ie.WGS84),k=1/x.maximumRadius,y=ae.clone(e.nativeRectangle),I=ae.clone(e.rectangle);G(I)?(t=I.west,i=I.south,r=I.east,a=I.north):w?(t=h(y.west),i=h(y.south),r=h(y.east),a=h(y.north)):(t=y.west*k,i=u-2*o(f(-y.south*k)),r=y.east*k,a=u-2*o(f(-y.north*k)));let U=e.relativeToCenter,b=G(U);U=b?U:ie.ZERO;let v=Y(e.includeWebMercatorT,!1),T=Y(e.exaggeration,1),A=Y(e.exaggerationRelativeHeight,0),M=1!==T,V=Y(e.structure,Q.DEFAULT_STRUCTURE),D=Y(V.heightScale,Q.DEFAULT_STRUCTURE.heightScale),B=Y(V.heightOffset,Q.DEFAULT_STRUCTURE.heightOffset),S=Y(V.elementsPerHeight,Q.DEFAULT_STRUCTURE.elementsPerHeight),P=Y(V.stride,Q.DEFAULT_STRUCTURE.stride),E=Y(V.elementMultiplier,Q.DEFAULT_STRUCTURE.elementMultiplier),F=Y(V.isBigEndian,Q.DEFAULT_STRUCTURE.isBigEndian),N=ae.computeWidth(y),L=ae.computeHeight(y),R=N/(m-1),O=L/(d-1);w||(N*=k,L*=k);let C,z,H=x.radiiSquared,_=H.x,j=H.y,X=H.z,W=65536,Z=-65536,q=ir.eastNorthUpToFixedFrame(U,x),K=xe.inverseTransformation(q,Tr);v&&(C=Ue.geodeticLatitudeToMercatorAngle(i),z=1/(Ue.geodeticLatitudeToMercatorAngle(a)-C));let J=kr;J.x=Number.POSITIVE_INFINITY,J.y=Number.POSITIVE_INFINITY,J.z=Number.POSITIVE_INFINITY;let $=yr;$.x=Number.NEGATIVE_INFINITY,$.y=Number.NEGATIVE_INFINITY,$.z=Number.NEGATIVE_INFINITY;let ee=Number.POSITIVE_INFINITY,te=m*d,re=te+(g>0?2*m+2*d:0),ne=new Array(re),se=new Array(re),le=new Array(re),oe=v?new Array(re):[],fe=M?new Array(re):[],ue=0,ce=d,me=0,de=m;p&&(--ue,++ce,--me,++de);let pe=1e-5;for(let e=ue;e<ce;++e){let p=e;p<0&&(p=0),p>=d&&(p=d-1);let I=y.north-O*p;I=w?h(I):u-2*o(f(-I*k));let U=(I-i)/(a-i);U=ge.clamp(U,0,1);let b=e===ue,T=e===ce-1;g>0&&(b?I+=pe*L:T&&(I-=pe*L));let A,V=n(I),Y=s(I),H=X*Y;v&&(A=(Ue.geodeticLatitudeToMercatorAngle(I)-C)*z);for(let e=me;e<de;++e){let i=e;i<0&&(i=0),i>=m&&(i=m-1);let a,o=p*(m*P)+i*P;if(1===S)a=c[o];else{let e;if(a=0,F)for(e=0;e<S;++e)a=a*E+c[o+e];else for(e=S-1;e>=0;--e)a=a*E+c[o+e]}a=a*D+B,Z=Math.max(Z,a),W=Math.min(W,a);let f=y.west+R*i;w?f=h(f):f*=k;let u=(f-t)/(r-t);u=ge.clamp(u,0,1);let I=p*m+i;if(g>0){let t=e===me,r=e===de-1,n=b||T||t||r;if((b||T)&&(t||r))continue;n&&(a-=g,t?(I=te+(d-p-1),f-=pe*N):T?I=te+d+(m-i-1):r?(I=te+d+m+p,f+=pe*N):b&&(I=te+d+m+d+i))}let L=V*n(f),O=V*s(f),C=_*L,z=j*O,X=1/l(C*L+z*O+H*Y),G=C*X,Q=z*X,q=H*X,re=new ie;re.x=G+L*a,re.y=Q+O*a,re.z=q+Y*a,xe.multiplyByPoint(K,re,Ye),ie.minimumByComponent(Ye,J,J),ie.maximumByComponent(Ye,$,$),ee=Math.min(ee,a),ne[I]=re,le[I]=new rr(u,U),se[I]=a,v&&(oe[I]=A),M&&(fe[I]=x.geodeticSurfaceNormal(re))}}let we,ke,ye=er.fromPoints(ne);G(I)&&(we=ar.fromRectangle(I,W,Z,x)),b&&(ke=new sr(x).computeHorizonCullingPointPossiblyUnderEllipsoid(U,ne,W));let be=new nr(J,$,U),ve=new fr(U,be,ee,Z,q,!1,v,M,T,A),Te=new Float32Array(re*ve.stride),Ae=0;for(let e=0;e<re;++e)Ae=ve.encode(Te,Ae,ne[e],le[e],se[e],void 0,oe[e],fe[e]);return{vertices:Te,maximumHeight:Z,minimumHeight:W,encoding:ve,boundingSphere3D:ye,orientedBoundingBox:we,occludeePointInScaledSpace:ke}};var lr=Q,cr=xr(ur(),1);function Mr(e,t){if(e.encoding===or.LERC){let t;try{t=cr.default.decode(e.heightmap)}catch(e){throw new He(e)}if(t.statistics[0].minValue===Number.MAX_VALUE)throw new He("Invalid tile data");e.heightmap=t.pixels[0],e.width=t.width,e.height=t.height}e.ellipsoid=Ie.clone(e.ellipsoid),e.rectangle=ae.clone(e.rectangle);let i=lr.computeVertices(e),r=i.vertices;return t.push(r.buffer),{vertices:r.buffer,numberOfAttributes:i.encoding.stride,minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,gridWidth:e.width,gridHeight:e.height,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}}var Pr=tr(Mr);export{Pr as default};