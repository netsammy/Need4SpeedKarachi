(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="183",ld=0,ul=1,cd=2,xr=1,ah=2,Ms=3,Wn=0,Kt=1,dn=2,Hn=0,Gi=1,fl=2,pl=3,ml=4,hd=5,_i=100,dd=101,ud=102,fd=103,pd=104,md=200,gd=201,_d=202,xd=203,Da=204,Na=205,vd=206,Sd=207,yd=208,Md=209,bd=210,wd=211,Td=212,Ed=213,Ad=214,Ua=0,Fa=1,Oa=2,qi=3,ka=4,Ba=5,za=6,Va=7,oh=0,Cd=1,Rd=2,Tn=0,lh=1,ch=2,hh=3,dh=4,uh=5,fh=6,ph=7,gl="attached",Pd="detached",mh=300,Mi=301,$i=302,Xr=303,qr=304,Ur=306,Mn=1e3,bn=1001,Tr=1002,At=1003,gh=1004,bs=1005,Ct=1006,vr=1007,zn=1008,en=1009,_h=1010,xh=1011,Rs=1012,No=1013,Cn=1014,rn=1015,Xn=1016,Uo=1017,Fo=1018,Ps=1020,vh=35902,Sh=35899,yh=1021,Mh=1022,an=1023,qn=1026,Si=1027,Oo=1028,ko=1029,Ki=1030,Bo=1031,zo=1033,Sr=33776,yr=33777,Mr=33778,br=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,$a=37492,Ka=37496,Ya=37488,ja=37489,Za=37490,Ja=37491,Qa=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,xo=36284,vo=36285,So=36286,Ls=2300,Is=2301,$r=2302,_l=2303,xl=2400,vl=2401,Sl=2402,Ld=2500,Id=0,bh=1,yo=2,Dd=3200,wh=0,Nd=1,si="",kt="srgb",jt="srgb-linear",Er="linear",it="srgb",Ti=7680,yl=519,Ud=512,Fd=513,Od=514,Vo=515,kd=516,Bd=517,Ho=518,zd=519,Mo=35044,Ml="300 es",wn=2e3,Ds=2001;function Vd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){const s=Ns("canvas");return s.style.display="block",s}const bl={};function Ar(...s){const e="THREE."+s.shift();console.log(e,...s)}function Th(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=Th(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function De(...s){s=Th(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Cr(...s){const e=s.join(" ");e in bl||(bl[e]=!0,Ce(...s))}function Wd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xd={[Ua]:Fa,[Oa]:za,[ka]:Va,[qi]:Ba,[Fa]:Ua,[za]:Oa,[Va]:ka,[Ba]:qi};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const Ts=Math.PI/180,Yi=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Go(s,e){return(s%e+e)%e}function qd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $d(s,e,t){return s!==e?(t-s)/(e-s):0}function Es(s,e,t){return(1-t)*s+t*e}function Kd(s,e,t,n){return Es(s,e,1-Math.exp(-t*n))}function Yd(s,e=1){return e-Math.abs(Go(s,e*2)-e)}function jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Zd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qd(s,e){return s+Math.random()*(e-s)}function eu(s){return s*(.5-Math.random())}function tu(s){s!==void 0&&(wl=s);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nu(s){return s*Ts}function iu(s){return s*Yi}function su(s){return(s&s-1)===0&&s!==0}function ru(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function au(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ou(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oe={DEG2RAD:Ts,RAD2DEG:Yi,generateUUID:pn,clamp:Ke,euclideanModulo:Go,mapLinear:qd,inverseLerp:$d,lerp:Es,damp:Kd,pingpong:Yd,smoothstep:jd,smootherstep:Zd,randInt:Jd,randFloat:Qd,randFloatSpread:eu,seededRandom:tu,degToRad:nu,radToDeg:iu,isPowerOfTwo:su,ceilPowerOfTwo:ru,floorPowerOfTwo:au,setQuaternionFromProperEuler:ou,normalize:st,denormalize:un};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new D,Tl=new $n;class Ve{constructor(e,t,n,i,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],b=i[4],M=i[7],A=i[2],E=i[5],R=i[8];return r[0]=a*x+o*S+l*A,r[3]=a*m+o*b+l*E,r[6]=a*p+o*M+l*R,r[1]=c*x+h*S+d*A,r[4]=c*m+h*b+d*E,r[7]=c*p+h*M+d*R,r[2]=u*x+f*S+g*A,r[5]=u*m+f*b+g*E,r[8]=u*p+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Ve,El=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){const s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:El,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:El,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const je=lu();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class cu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=Ns("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hu=0;class Wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let du=0;const Zr=new D;class Rt extends ts{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=bn,i=bn,r=Ct,a=zn,o=an,l=en,c=Rt.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=pn(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zr).x}get height(){return this.source.getSize(Zr).y}get depth(){return this.source.getSize(Zr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=mh;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,A=(p+1)/2,E=(h+u)/4,R=(d+x)/4,v=(g+m)/4;return b>M&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=R/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=v/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Rt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pu,e,mu)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(n,Jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(n,Jt)),jn.normalize(),zs.crossVectors(Jt,jn),i[0]=jn.x,i[4]=zs.x,i[8]=Jt.x,i[1]=jn.y,i[5]=zs.y,i[9]=Jt.y,i[2]=jn.z,i[6]=zs.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],b=n[7],M=n[11],A=n[15],E=i[0],R=i[4],v=i[8],w=i[12],G=i[1],C=i[5],F=i[9],O=i[13],B=i[2],k=i[6],z=i[10],W=i[14],ne=i[3],Q=i[7],me=i[11],he=i[15];return r[0]=a*E+o*G+l*B+c*ne,r[4]=a*R+o*C+l*k+c*Q,r[8]=a*v+o*F+l*z+c*me,r[12]=a*w+o*O+l*W+c*he,r[1]=h*E+d*G+u*B+f*ne,r[5]=h*R+d*C+u*k+f*Q,r[9]=h*v+d*F+u*z+f*me,r[13]=h*w+d*O+u*W+f*he,r[2]=g*E+x*G+m*B+p*ne,r[6]=g*R+x*C+m*k+p*Q,r[10]=g*v+x*F+m*z+p*me,r[14]=g*w+x*O+m*W+p*he,r[3]=S*E+b*G+M*B+A*ne,r[7]=S*R+b*C+M*k+A*Q,r[11]=S*v+b*F+M*z+A*me,r[15]=S*w+b*O+M*W+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=l*f-c*u,b=o*f-c*d,M=o*u-l*d,A=a*f-c*h,E=a*u-l*h,R=a*d-o*h;return t*(x*S-m*b+p*M)-n*(g*S-m*A+p*E)+i*(g*b-x*A+p*R)-r*(g*M-x*E+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-n*a,b=t*l-i*a,M=t*c-r*a,A=n*l-i*o,E=n*c-r*o,R=i*c-r*l,v=h*x-d*g,w=h*m-u*g,G=h*p-f*g,C=d*m-u*x,F=d*p-f*x,O=u*p-f*m,B=S*O-b*F+M*C+A*G-E*w+R*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=(o*O-l*F+c*C)*k,e[1]=(i*F-n*O-r*C)*k,e[2]=(x*R-m*E+p*A)*k,e[3]=(u*E-d*R-f*A)*k,e[4]=(l*G-a*O-c*w)*k,e[5]=(t*O-i*G+r*w)*k,e[6]=(m*M-g*R-p*b)*k,e[7]=(h*R-u*M+f*b)*k,e[8]=(a*F-o*G+c*v)*k,e[9]=(n*G-t*F-r*v)*k,e[10]=(g*E-x*M+p*S)*k,e[11]=(d*M-h*E-f*S)*k,e[12]=(o*w-a*C-l*v)*k,e[13]=(t*C-n*w+i*v)*k,e[14]=(x*b-g*A-m*S)*k,e[15]=(h*A-d*b+u*S)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,S=l*c,b=l*h,M=l*d,A=n.x,E=n.y,R=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+M)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(u+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+b)*R,i[9]=(m-S)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),l=Ai.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ln.copy(this);const c=1/a,h=1/o,d=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=wn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===wn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=wn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===wn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new D,ln=new Ge,pu=new D(0,0,0),mu=new D(1,1,1),jn=new D,zs=new D,Jt=new D,Cl=new Ge,Rl=new $n;class mn{constructor(e=0,t=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gu=0;const Pl=new D,Ci=new $n,Nn=new Ge,Vs=new D,os=new D,_u=new D,xu=new $n,Ll=new D(1,0,0),Il=new D(0,1,0),Dl=new D(0,0,1),Nl={type:"added"},vu={type:"removed"},Ri={type:"childadded",child:null},Jr={type:"childremoved",child:null};class _t extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new D,t=new mn,n=new $n,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ve}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(os,Vs,this.up):Nn.lookAt(Vs,os,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,_u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new D(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Su={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Su)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Go(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ea(a,r,e+1/3),this.g=ea(a,r,e),this.b=ea(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return je.workingToColorSpace(Vt.copy(this),e),Math.round(Ke(Vt.r*255,0,255))*65536+Math.round(Ke(Vt.g*255,0,255))*256+Math.round(Ke(Vt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=kt){je.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Hs);const n=Es(Zn.h,Hs.h,t),i=Es(Zn.s,Hs.s,t),r=Es(Zn.l,Hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ne;Ne.NAMES=Ch;class Xo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Xo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yu extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new D,Un=new D,ta=new D,Fn=new D,Pi=new D,Li=new D,Ul=new D,na=new D,ia=new D,sa=new D,ra=new mt,aa=new mt,oa=new mt;class fn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Un.subVectors(n,t),ta.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Un),l=cn.dot(ta),c=Un.dot(Un),h=Un.dot(ta),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Un.subVectors(e,t),cn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),cn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Pi.subVectors(i,n),Li.subVectors(r,n),na.subVectors(e,n);const l=Pi.dot(na),c=Li.dot(na);if(l<=0&&c<=0)return t.copy(n);ia.subVectors(e,i);const h=Pi.dot(ia),d=Li.dot(ia);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Pi,a);sa.subVectors(e,r);const f=Pi.dot(sa),g=Li.dot(sa);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Li,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ul.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ul,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ws.subVectors(this.max,ls),Ii.subVectors(e.a,ls),Di.subVectors(e.b,ls),Ni.subVectors(e.c,ls),Jn.subVectors(Di,Ii),Qn.subVectors(Ni,Di),li.subVectors(Ii,Ni);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-li.z,li.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,li.z,0,-li.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-li.y,li.x,0];return!la(t,Ii,Di,Ni,Ws)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ii,Di,Ni,Ws))?!1:(Xs.crossVectors(Jn,Qn),t=[Xs.x,Xs.y,Xs.z],la(t,Ii,Di,Ni,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Gs=new Gt,Ii=new D,Di=new D,Ni=new D,Jn=new D,Qn=new D,li=new D,ls=new D,Ws=new D,Xs=new D,ci=new D;function la(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Et=new D,qs=new Ye;let Mu=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}}class Rh extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ph extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bu=new Gt,cs=new D,ca=new D;class Pn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(ca)),this.expandByPoint(cs.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wu=0;const tn=new Ge,ha=new _t,Ui=new D,Qt=new Gt,hs=new Gt,Nt=new D;class Wt extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Ph:Rh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,hs.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,hs.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(hs.min),Qt.expandByPoint(hs.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Nt.add(Ui)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new D,l[v]=new D;const c=new D,h=new D,d=new D,u=new Ye,f=new Ye,g=new Ye,x=new D,m=new D;function p(v,w,G){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,G),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,G),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[v].add(x),o[w].add(x),o[G].add(x),l[v].add(m),l[w].add(m),l[G].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const G=S[v],C=G.start,F=G.count;for(let O=C,B=C+F;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new D,M=new D,A=new D,E=new D;function R(v){A.fromBufferAttribute(i,v),E.copy(A);const w=o[v];b.copy(w),b.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(E,w);const C=M.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,C)}for(let v=0,w=S.length;v<w;++v){const G=S[v],C=G.start,F=G.count;for(let O=C,B=C+F;O<B;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Yt(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mo,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class qo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Eu=0;class An extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Gi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new D,da=new D,$s=new D,ei=new D,ua=new D,Ks=new D,fa=new D;class Fr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot($s),o=ei.dot(this.direction),l=-ei.dot($s),c=ei.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(da).addScaledVector($s,u),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){ua.subVectors(t,e),Ks.subVectors(n,e),fa.crossVectors(ua,Ks);let a=this.direction.dot(fa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const l=o*this.direction.dot(Ks.crossVectors(ei,Ks));if(l<0)return null;const c=o*this.direction.dot(ua.cross(ei));if(c<0||l+c>a)return null;const h=-o*ei.dot(fa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fl=new Ge,hi=new Fr,Ys=new Pn,Ol=new D,js=new D,Zs=new D,Js=new D,pa=new D,Qs=new D,kl=new D,er=new D;class q extends _t{constructor(e=new Wt,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(pa.fromBufferAttribute(d,e),a?Qs.addScaledVector(pa,h):Qs.addScaledVector(pa.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(Ys.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ys,Ol)===null||hi.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,A=b;M<A;M+=3){const E=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);i=tr(this,p,e,n,c,h,d,E,R,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);i=tr(this,a,e,n,c,h,d,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,A=b;M<A;M+=3){const E=M,R=M+1,v=M+2;i=tr(this,p,e,n,c,h,d,E,R,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,b=m+1,M=m+2;i=tr(this,a,e,n,c,h,d,S,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Au(s,e,t,n,i,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Wn,o),l===null)return null;er.copy(o),er.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:s}}function tr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,js),s.getVertexPosition(l,Zs),s.getVertexPosition(c,Js);const h=Au(s,e,t,n,js,Zs,Js,kl);if(h){const d=new D;fn.getBarycoord(kl,js,Zs,Js,d),i&&(h.uv=fn.getInterpolatedAttribute(i,o,l,c,d,new Ye)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,d,new Ye)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};fn.getNormal(js,Zs,Js,u.normal),h.face=u,h.barycoord=d}return h}const Bl=new D,zl=new mt,Vl=new mt,Cu=new D,Hl=new Ge,nr=new D,ma=new Pn,Gl=new Ge,ga=new Fr;class Ru extends q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingBox.expandByPoint(nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingSphere.expandByPoint(nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1&&(Gl.copy(i).invert(),ga.copy(e.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Vl.fromBufferAttribute(i.attributes.skinWeight,e),Bl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Vl.getComponent(r);if(a!==0){const o=zl.getComponent(r);Hl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cu.copy(Bl).applyMatrix4(Hl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lh extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $o extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=At,h=At,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Ge,Pu=new Ge;class Ko{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Pu;Wl.multiplyMatrices(o,t[r]),Wl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $o(t,e,e,an,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Lh),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class bo extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Ge,Xl=new Ge,ir=[],ql=new Gt,Lu=new Ge,ds=new q,us=new Pn;class Iu extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),ql.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(ql)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),us.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fi),Xl.multiplyMatrices(n,Fi),ds.matrixWorld=Xl,ds.raycast(e,ir);for(let a=0,o=ir.length;a<o;a++){const l=ir[a];l.instanceId=r,l.object=this,t.push(l)}ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(i*this.count),i,this.count,Oo,rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new D,Du=new D,Nu=new Ve;class gi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_a.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nu.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Pn,Uu=new Ye(.5,.5),sr=new D;class Yo{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-a,f-h,p-g,A-S).normalize(),i[1].setComponents(c+a,f+h,p+g,A+S).normalize(),i[2].setComponents(c+o,f+d,p+x,A+b).normalize(),i[3].setComponents(c-o,f-d,p-x,A-b).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,f-u,p-m,A-M).normalize();else if(i[4].setComponents(c-l,f-u,p-m,A-M).normalize(),t===wn)i[5].setComponents(c+l,f+u,p+m,A+M).normalize();else if(t===Ds)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Uu.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(sr.x=i.normal.x>0?e.max.x:e.min.x,sr.y=i.normal.y>0?e.max.y:e.min.y,sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ih extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new D,Pr=new D,$l=new Ge,fs=new Fr,rr=new Pn,xa=new D,Kl=new D;class jo extends _t{constructor(e=new Wt,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rr.fromBufferAttribute(t,i-1),Pr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rr.distanceTo(Pr);e.setAttribute("lineDistance",new xt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;$l.copy(i).invert(),fs.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),S=h.getX(x+1),b=ar(this,e,fs,l,p,S,x);b&&t.push(b)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=ar(this,e,fs,l,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=ar(this,e,fs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=ar(this,e,fs,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Rr.fromBufferAttribute(o,i),Pr.fromBufferAttribute(o,r),t.distanceSqToSegment(Rr,Pr,xa,Kl)>n)return;xa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xa);if(!(c<e.near||c>e.far))return{distance:c,point:Kl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Yl=new D,jl=new D;class Fu extends jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yl.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yl.distanceTo(jl);e.setAttribute("lineDistance",new xt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ou extends jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dh extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new Ge,wo=new Fr,or=new Pn,lr=new D;class ku extends _t{constructor(e=new Wt,t=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;Zl.copy(i).invert(),wo.copy(e.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);lr.fromBufferAttribute(d,m),Jl(lr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)lr.fromBufferAttribute(d,g),Jl(lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jl(s,e,t,n,i,r,a){const o=wo.distanceSqToPoint(s);if(o<t){const l=new D;wo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Nh extends Rt{constructor(e=[],t=Mi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cr extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Us extends Rt{constructor(e,t,n=Cn,i,r,a,o=At,l=At,c,h=qn,d=1){if(h!==qn&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bu extends Us{constructor(e,t=Cn,n=Mi,i,r,a=At,o=At,l,c=qn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uh extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ge extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function g(x,m,p,S,b,M,A,E,R,v,w){const G=M/R,C=A/v,F=M/2,O=A/2,B=E/2,k=R+1,z=v+1;let W=0,ne=0;const Q=new D;for(let me=0;me<z;me++){const he=me*C-O;for(let ae=0;ae<k;ae++){const ke=ae*G-F;Q[x]=ke*S,Q[m]=he*b,Q[p]=B,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ae/R),d.push(1-me/v),W+=1}}for(let me=0;me<v;me++)for(let he=0;he<R;he++){const ae=u+he+k*me,ke=u+he+k*(me+1),et=u+(he+1)+k*(me+1),pt=u+(he+1)+k*me;l.push(ae,ke,pt),l.push(ke,et,pt),ne+=6}o.addGroup(f,ne,w),f+=ne,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends Wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,h=new Ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bt extends Wt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function S(){const M=new D,A=new D;let E=0;const R=(t-e)/n;for(let v=0;v<=r;v++){const w=[],G=v/r,C=G*(t-e)+e;for(let F=0;F<=i;F++){const O=F/i,B=O*l+o,k=Math.sin(B),z=Math.cos(B);A.x=C*k,A.y=-G*n+m,A.z=C*z,d.push(A.x,A.y,A.z),M.set(k,R,z).normalize(),u.push(M.x,M.y,M.z),f.push(O,1-G),w.push(g++)}x.push(w)}for(let v=0;v<i;v++)for(let w=0;w<r;w++){const G=x[w][v],C=x[w+1][v],F=x[w+1][v+1],O=x[w][v+1];(e>0||w!==0)&&(h.push(G,C,O),E+=3),(t>0||w!==r-1)&&(h.push(C,F,O),E+=3)}c.addGroup(p,E,0),p+=E}function b(M){const A=g,E=new Ye,R=new D;let v=0;const w=M===!0?e:t,G=M===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*G,0),u.push(0,G,0),f.push(.5,.5),g++;const C=g;for(let F=0;F<=i;F++){const B=F/i*l+o,k=Math.cos(B),z=Math.sin(B);R.x=w*z,R.y=m*G,R.z=w*k,d.push(R.x,R.y,R.z),u.push(0,G,0),E.x=k*.5+.5,E.y=z*.5*G+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const O=A+F,B=C+F;M===!0?h.push(B,B+1,O):h.push(B+1,B,O),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jo extends bt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gt extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*u-a;for(let b=0;b<c;b++){const M=b*d-r;g.push(M,-S,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const b=S+c*p,M=S+c*(p+1),A=S+1+c*(p+1),E=S+1+c*p;f.push(b,M,E),f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.widthSegments,e.heightSegments)}}class nn extends Wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(i+E*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+E*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+M,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const b=h[p][S+1],M=h[p][S],A=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&f.push(b,M,E),(p!==n-1||l<Math.PI)&&f.push(M,A,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends Wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new D,f=new D,g=new D;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let p=0;p<=i;p++){const S=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const p=(i+1)*x+m-1,S=(i+1)*(x-1)+m-1,b=(i+1)*(x-1)+m,M=(i+1)*x+m;l.push(p,S,M),l.push(S,b,M)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=ji(s[t]);for(const i in n)e[i]=n[i]}return e}function zu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Vu={clone:ji,merge:qt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends J{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xu extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qu extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $u(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ql(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Oh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ns{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ku extends ns{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vl:r=e,o=2*t-n;break;case Sl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vl:a=e,l=2*n-t;break;case Sl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,S=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+S*a[c+A]+b*a[l+A]+M*a[d+A];return r}}class Yu extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class ju extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zu extends ns{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const x=(n-t)/(i-t),m=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*x;return r}const f=o*2,g=e-1;for(let x=0;x!==o;++x){const m=a[c+x],p=a[l+x],S=g*f+x*2,b=u[S],M=u[S+1],A=e*f+x*2,E=d[A],R=d[A+1];let v=(n-t)/(i-t),w,G,C,F,O;for(let B=0;B<8;B++){w=v*v,G=w*v,C=1-v,F=C*C,O=F*C;const z=O*t+3*F*v*b+3*C*w*E+G*i-n;if(Math.abs(z)<1e-10)break;const W=3*F*(b-t)+6*C*v*(E-b)+3*w*(i-E);if(Math.abs(W)<1e-10)break;v=v-z/W,v=Math.max(0,Math.min(1,v))}r[x]=O*m+3*F*v*M+3*C*w*R+G*p}return r}}class gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Zu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break;case _l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$r,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Is;class is extends gn{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ls;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class kh extends gn{constructor(e,t,n,i){super(e,t,n,i)}}kh.prototype.ValueTypeName="color";class Zi extends gn{constructor(e,t,n,i){super(e,t,n,i)}}Zi.prototype.ValueTypeName="number";class Ju extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)$n.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ji extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends gn{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ls;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends gn{constructor(e,t,n,i){super(e,t,n,i)}}Qi.prototype.ValueTypeName="vector";class Qu{constructor(e="",t=-1,n=[],i=Ld){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=$u(l);l=Ql(l,1,h),c=Ql(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return De("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,x){if(f.length!==0){const m=[],p=[];Oh(f,m,p,g),m.length!==0&&x.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let S=0;S!==u[g].morphTargets.length;++S){const b=u[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new Zi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(Qi,f+".position",u,"pos",i),n(Ji,f+".quaternion",u,"rot",i),n(Qi,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ef(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return kh;case"quaternion":return Ji;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ef(s.type);if(s.times===void 0){const t=[],n=[];Oh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ec(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ec(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ec(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sf=new nf;class rs{constructor(e){this.manager=e!==void 0?e:sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class rf extends Error{constructor(e,t){super(e),this.response=t}}class Bh extends rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){d.read().then(({done:b,value:M})=>{if(b)p.close();else{x+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,R=h.length;E<R;E++){const v=h[E];v.onProgress&&v.onProgress(A)}p.enqueue(M),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new rf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vn.add(`file:${e}`,c);const h=Bn[e];delete Bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Oi=new WeakMap;class af extends rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Oi.get(a);d===void 0&&(d=[],Oi.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Ns("img");function l(){h(),t&&t(this);const d=Oi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Oi.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Vn.remove(`image:${e}`);const u=Oi.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Oi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class of extends rs{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new af(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Or extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class lf extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const va=new Ge,tc=new D,nc=new D;class Qo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ds||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dr=new D,ur=new $n,xn=new D;class zh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dr,ur,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,ur,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(dr,ur,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,ur,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,ic=new Ye,sc=new Ye;class $t extends zh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cf extends Qo{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hf extends Or{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class df extends Qo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class Vh extends Or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kr extends zh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uf extends Qo{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hh extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new uf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class As{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Sa=new WeakMap;class ff extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Sa.has(a)===!0)i&&i(Sa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Sa.set(l,c),Vn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ki=-90,Bi=1;class pf extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ki,Bi,e,t);i.layers=this.layers,this.add(i);const r=new $t(ki,Bi,e,t);r.layers=this.layers,this.add(r);const a=new $t(ki,Bi,e,t);a.layers=this.layers,this.add(a);const o=new $t(ki,Bi,e,t);o.layers=this.layers,this.add(o);const l=new $t(ki,Bi,e,t);l.layers=this.layers,this.add(l);const c=new $t(ki,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mf extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const el="\\[\\]\\.:\\/",gf=new RegExp("["+el+"]","g"),tl="[^"+el+"]",_f="[^"+el.replace("\\.","")+"]",xf=/((?:WC+[\/:])*)/.source.replace("WC",tl),vf=/(WCOD+)?/.source.replace("WCOD",_f),Sf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),Mf=new RegExp("^"+xf+vf+Sf+yf+"$"),bf=["material","materials","bones","map"];class wf{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gf,"")}static parseTrackName(e){const t=Mf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=wf;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(s,e,t,n){const i=Ef(n);switch(t){case yh:return s*e;case Oo:return s*e/i.components*i.byteLength;case ko:return s*e/i.components*i.byteLength;case Ki:return s*e*2/i.components*i.byteLength;case Bo:return s*e*2/i.components*i.byteLength;case Mh:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case zo:return s*e*4/i.components*i.byteLength;case Sr:case yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mr:case br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(s,16)*Math.max(e,8)/4;case Ha:case Wa:return Math.max(s,8)*Math.max(e,8)/2;case qa:case $a:case Ya:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _o:case xo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vo:case So:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ef(s){switch(s){case en:case _h:return{byteLength:1,components:1};case Rs:case xh:case Xn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Cn:case No:case rn:return{byteLength:4,components:1};case vh:case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Af(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ap=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Cf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Lf,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Nf,aomap_pars_fragment:Uf,batching_pars_vertex:Ff,batching_vertex:Of,begin_vertex:kf,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:Vf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:$f,color_pars_fragment:Kf,color_pars_vertex:Yf,color_vertex:jf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:ap,envmap_common_pars_fragment:op,envmap_pars_fragment:lp,envmap_pars_vertex:cp,envmap_physical_pars_fragment:Sp,envmap_vertex:hp,fog_vertex:dp,fog_pars_vertex:up,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:xp,lights_pars_begin:vp,lights_toon_fragment:yp,lights_toon_pars_fragment:Mp,lights_phong_fragment:bp,lights_phong_pars_fragment:wp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Ap,lights_fragment_maps:Cp,lights_fragment_end:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Dp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:Vp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:$p,normal_pars_vertex:Kp,normal_vertex:Yp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:am,roughnessmap_fragment:om,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:dm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:xm,tonemapping_fragment:vm,tonemapping_pars_fragment:Sm,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Tm,worldpos_vertex:Em,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Im,depth_vert:Dm,depth_frag:Nm,distance_vert:Um,distance_frag:Fm,equirect_vert:Om,equirect_frag:km,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:Vm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:$m,meshnormal_frag:Km,meshphong_vert:Ym,meshphong_frag:jm,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:ag},de={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},yn={basic:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ne(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:qt([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:qt([de.lights,de.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};yn.physical={uniforms:qt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const fr={r:0,b:0,g:0},ui=new mn,og=new Ge;function lg(s,e,t,n,i,r){const a=new Ne(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const M=S.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(S){let b=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,b){const M=f(b);M&&(M.isCubeTexture||M.mapping===Ur)?(c===void 0&&(c=new q(new ge(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ji(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ui.copy(b.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(ui)),c.material.toneMapped=je.getTransfer(M.colorSpace)!==it,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new q(new gt(2,2),new Rn({name:"BackgroundMaterial",uniforms:ji(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(fr,Fh(s)),t.buffers.color.setClear(fr.r,fr.g,fr.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function cg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(C,F,O,B,k){let z=!1;const W=d(C,B,O,F);r!==W&&(r=W,c(r.object)),z=f(C,B,O,k),z&&g(C,B,O,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(C,F,O,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function d(C,F,O,B){const k=B.wireframe===!0;let z=n[F.id];z===void 0&&(z={},n[F.id]=z);const W=C.isInstancedMesh===!0?C.id:0;let ne=z[W];ne===void 0&&(ne={},z[W]=ne);let Q=ne[O.id];Q===void 0&&(Q={},ne[O.id]=Q);let me=Q[k];return me===void 0&&(me=u(l()),Q[k]=me),me}function u(C){const F=[],O=[],B=[];for(let k=0;k<t;k++)F[k]=0,O[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:B,object:C,attributes:{},index:null}}function f(C,F,O,B){const k=r.attributes,z=F.attributes;let W=0;const ne=O.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const he=k[Q];let ae=z[Q];if(ae===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),he===void 0||he.attribute!==ae||ae&&he.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(C,F,O,B){const k={},z=F.attributes;let W=0;const ne=O.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let he=z[Q];he===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(he=C.instanceColor));const ae={};ae.attribute=he,he&&he.data&&(ae.data=he.data),k[Q]=ae,W++}r.attributes=k,r.attributesNum=W,r.index=B}function x(){const C=r.newAttributes;for(let F=0,O=C.length;F<O;F++)C[F]=0}function m(C){p(C,0)}function p(C,F){const O=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;O[C]=1,B[C]===0&&(s.enableVertexAttribArray(C),B[C]=1),k[C]!==F&&(s.vertexAttribDivisor(C,F),k[C]=F)}function S(){const C=r.newAttributes,F=r.enabledAttributes;for(let O=0,B=F.length;O<B;O++)F[O]!==C[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function b(C,F,O,B,k,z,W){W===!0?s.vertexAttribIPointer(C,F,O,k,z):s.vertexAttribPointer(C,F,O,B,k,z)}function M(C,F,O,B){x();const k=B.attributes,z=O.getAttributes(),W=F.defaultAttributeValues;for(const ne in z){const Q=z[ne];if(Q.location>=0){let me=k[ne];if(me===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),me!==void 0){const he=me.normalized,ae=me.itemSize,ke=e.get(me);if(ke===void 0)continue;const et=ke.buffer,pt=ke.type,j=ke.bytesPerElement,re=pt===s.INT||pt===s.UNSIGNED_INT||me.gpuType===No;if(me.isInterleavedBufferAttribute){const ce=me.data,ze=ce.stride,Le=me.offset;if(ce.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)p(Q.location+Ue,ce.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)m(Q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ue=0;Ue<Q.locationSize;Ue++)b(Q.location+Ue,ae/Q.locationSize,pt,he,ze*j,(Le+ae/Q.locationSize*Ue)*j,re)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<Q.locationSize;ce++)p(Q.location+ce,me.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<Q.locationSize;ce++)m(Q.location+ce);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ce=0;ce<Q.locationSize;ce++)b(Q.location+ce,ae/Q.locationSize,pt,he,ae*j,ae/Q.locationSize*ce*j,re)}}else if(W!==void 0){const he=W[ne];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Q.location,he);break;case 3:s.vertexAttrib3fv(Q.location,he);break;case 4:s.vertexAttrib4fv(Q.location,he);break;default:s.vertexAttrib1fv(Q.location,he)}}}}S()}function A(){w();for(const C in n){const F=n[C];for(const O in F){const B=F[O];for(const k in B){const z=B[k];for(const W in z)h(z[W].object),delete z[W];delete B[k]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const O in F){const B=F[O];for(const k in B){const z=B[k];for(const W in z)h(z[W].object),delete z[W];delete B[k]}}delete n[C.id]}function R(C){for(const F in n){const O=n[F];for(const B in O){const k=O[B];if(k[C.id]===void 0)continue;const z=k[C.id];for(const W in z)h(z[W].object),delete z[W];delete k[C.id]}}}function v(C){for(const F in n){const O=n[F],B=C.isInstancedMesh===!0?C.id:0,k=O[B];if(k!==void 0){for(const z in k){const W=k[z];for(const ne in W)h(W[ne].object),delete W[ne];delete k[z]}delete O[B],Object.keys(O).length===0&&delete n[F]}}}function w(){G(),a=!0,r!==i&&(r=i,c(r.object))}function G(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:G,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function hg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==an&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!v)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,maxSamples:A,samples:E}}function ug(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new gi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let M=p.clippingState||null;l.value=M,M=h(g,u,b,f);for(let A=0;A!==b;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const ri=4,ac=[.125,.215,.35,.446,.526,.582],xi=20,fg=256,ps=new kr,oc=new Ne;let ya=null,Ma=0,ba=0,wa=!1;const pg=new D;class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=pg}=r;ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Ma,ba),this._renderer.xr.enabled=wa,e.scissorTest=!1,zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Xn,format:an,colorSpace:jt,depthBuffer:!1},i=cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mg(r)),this._blurMaterial=_g(r,e,t),this._ggxMaterial=gg(r,e,t)}return i}_compileMaterial(e){const t=new q(new Wt,e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,n,i,r){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(oc),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new ge,new lt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(oc),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;zi(i,M*A,b>2?A:0,A,A),d.setRenderTarget(i),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;zi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ri?n-g+ri:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,zi(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,ps),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,zi(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,ps)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):xi;m>xi&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let S=0;for(let R=0;R<xi;++R){const v=R/x,w=Math.exp(-v*v/2);p.push(w),R===0?S+=w:R<m&&(S+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[i],A=3*M*(i>b-ri?i-b+ri:0),E=4*(this._cubeSize-M);zi(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(d,ps)}}function mg(s){const e=[],t=[],n=[];let i=s;const r=s-ri+1+ac.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ri?l=ac[a-s+ri-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,v=E>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];S.set(w,x*g*E),b.set(u,m*g*E);const G=[E,E,E,E,E,E];M.set(G,p*g*E)}const A=new Wt;A.setAttribute("position",new Yt(S,x)),A.setAttribute("uv",new Yt(b,m)),A.setAttribute("faceIndex",new Yt(M,p)),n.push(new q(A,null)),i>ri&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function cc(s,e,t){const n=new En(s,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gg(s,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _g(s,e,t){const n=new Float32Array(xi),i=new D(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function hc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function dc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wh extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ge(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Hn});r.uniforms.tEquirect.value=t;const a=new q(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Ct),new pf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function xg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xr||f===qr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Wh(g.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Xr||f===qr,x=f===Mi||f===$i;if(g||x){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new lc(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new lc(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Xr?u.mapping=Mi:f===qr&&(u.mapping=$i),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function vg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cr("WebGLRenderer: "+n+" extension not supported."),i}}}function Sg(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let b=0,M=S.length;b<M;b+=3){const A=S[b+0],E=S[b+1],R=S[b+2];u.push(A,E,E,R,R,A)}}else{const S=g.array;x=g.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const A=b+0,E=b+1,R=b+2;u.push(A,E,E,R,R,A)}}const m=new(g.count>=65535?Ph:Rh)(u,1);m.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function yg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bg(s,e,t){const n=new WeakMap,i=new mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*A*4*d),R=new Eh(E,M,A,d);R.type=rn,R.needsUpdate=!0;const v=b*4;for(let G=0;G<d;G++){const C=m[G],F=p[G],O=S[G],B=M*A*4*G;for(let k=0;k<C.count;k++){const z=k*v;f===!0&&(i.fromBufferAttribute(C,k),E[B+z+0]=i.x,E[B+z+1]=i.y,E[B+z+2]=i.z,E[B+z+3]=0),g===!0&&(i.fromBufferAttribute(F,k),E[B+z+4]=i.x,E[B+z+5]=i.y,E[B+z+6]=i.z,E[B+z+7]=0),x===!0&&(i.fromBufferAttribute(O,k),E[B+z+8]=i.x,E[B+z+9]=i.y,E[B+z+10]=i.z,E[B+z+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new Ye(M,A)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function wg(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Tg={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function Eg(s,e,t,n,i){const r=new En(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new En(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),o=new Wt;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new Wu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new q(o,l),h=new kr(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let A=0;A<m.length;A++){const E=m[A];E.setSize&&E.setSize(b,M)}},this.begin=function(S,b){if(f||S.toneMapping===Tn&&m.length===0)return!1;if(x=b,b!==null){const M=b.width,A=b.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Tn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,f=!0;let M=r,A=a;for(let E=0;E<m.length;E++){const R=m[E];if(R.enabled!==!1&&(R.render(S,A,M,b),R.needsSwap!==!1)){const v=M;M=A,A=v}}if(d!==S.outputColorSpace||u!==S.toneMapping){d=S.outputColorSpace,u=S.toneMapping,l.defines={},je.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const E=Tg[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(x),S.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Xh=new Rt,To=new Us(1,1),qh=new Eh,$h=new fu,Kh=new Nh,uc=[],fc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=uc[i];if(r===void 0&&(r=new Float32Array(i),uc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zr(s,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ag(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function Lg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;gc.set(n),s.uniformMatrix2fv(this.addr,!1,gc),Lt(t,n)}}function Ig(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;mc.set(n),s.uniformMatrix3fv(this.addr,!1,mc),Lt(t,n)}}function Dg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;pc.set(n),s.uniformMatrix4fv(this.addr,!1,pc),Lt(t,n)}}function Ng(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function Og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function Hg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(To.compareFunction=t.isReversedDepthBuffer()?Ho:Vo,r=To):r=Xh,t.setTexture2D(e||r,i)}function Gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$h,i)}function Wg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kh,i)}function Xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qh,i)}function qg(s){switch(s){case 5126:return Ag;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Lg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return kg;case 36294:return Bg;case 36295:return zg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function $g(s,e){s.uniform1fv(this.addr,e)}function Kg(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function Yg(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function jg(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function Zg(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jg(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qg(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function e0(s,e){s.uniform1iv(this.addr,e)}function t0(s,e){s.uniform2iv(this.addr,e)}function n0(s,e){s.uniform3iv(this.addr,e)}function i0(s,e){s.uniform4iv(this.addr,e)}function s0(s,e){s.uniform1uiv(this.addr,e)}function r0(s,e){s.uniform2uiv(this.addr,e)}function a0(s,e){s.uniform3uiv(this.addr,e)}function o0(s,e){s.uniform4uiv(this.addr,e)}function l0(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=To:a=Xh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function c0(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$h,r[a])}function h0(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kh,r[a])}function d0(s,e,t){const n=this.cache,i=e.length,r=zr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qh,r[a])}function u0(s){switch(s){case 5126:return $g;case 35664:return Kg;case 35665:return Yg;case 35666:return jg;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}}class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function _c(s,e){s.seq.push(e),s.map[e.id]=e}function g0(s,e,t){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_c(t,c===void 0?new f0(o,s,e):new p0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new m0(o),_c(t,d)),t=d}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const _0=37297;let x0=0;function v0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vc=new Ve;function S0(s){je._getMatrix(vc,je.workingColorSpace,s);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Er:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+v0(s.getShaderSource(e),o)}else return r}function y0(s,e){const t=S0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const M0={[lh]:"Linear",[ch]:"Reinhard",[hh]:"Cineon",[dh]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[uh]:"Custom"};function b0(s,e){const t=M0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new D;function w0(){je.getLuminanceCoefficients(pr);const s=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function E0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ws(s){return s!==""}function yc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(s){return s.replace(C0,P0)}const R0=new Map;function P0(s,e){let t=He[e];if(t===void 0){const n=R0.get(e);if(n!==void 0)t=He[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(s){return s.replace(L0,I0)}function I0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const D0={[xr]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function N0(s){return D0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U0={[Mi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function F0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":U0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const O0={[$i]:"ENVMAP_MODE_REFRACTION"};function k0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":O0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B0={[oh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function z0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":B0[s.combine]||"ENVMAP_BLENDING_NONE"}function V0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=N0(t),c=F0(t),h=k0(t),d=z0(t),u=V0(t),f=T0(t),g=E0(r),x=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(m=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?He.tonemapping_pars_fragment:"",t.toneMapping!==Tn?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,y0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),a=Eo(a),a=yc(a,t),a=Mc(a,t),o=Eo(o),o=yc(o,t),o=Mc(o,t),a=bc(a),o=bc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+a,M=S+p+o,A=xc(i,i.VERTEX_SHADER,b),E=xc(i,i.FRAGMENT_SHADER,M);i.attachShader(x,A),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(C){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",O=i.getShaderInfoLog(A)||"",B=i.getShaderInfoLog(E)||"",k=F.trim(),z=O.trim(),W=B.trim();let ne=!0,Q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const me=Sc(i,A,"vertex"),he=Sc(i,E,"fragment");De("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+me+`
`+he)}else k!==""?Ce("WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(Q=!1);Q&&(C.diagnostics={runnable:ne,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(E),v=new wr(i,x),w=A0(i,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(x,_0)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let G0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}}function q0(s,e,t,n,i,r){const a=new Ah,o=new W0,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,G,C,F){const O=C.fog,B=F.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,W=e.get(v.envMap||k,z),ne=W&&W.mapping===Ur?W.image.height:null,Q=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=me!==void 0?me.length:0;let ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let ke,et,pt,j;if(Q){const nt=yn[Q];ke=nt.vertexShader,et=nt.fragmentShader}else ke=v.vertexShader,et=v.fragmentShader,o.update(v),pt=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const re=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,Ue=!!v.map,It=!!v.matcap,Ze=!!W,tt=!!v.aoMap,ct=!!v.lightMap,We=!!v.bumpMap,yt=!!v.normalMap,P=!!v.displacementMap,Tt=!!v.emissiveMap,Qe=!!v.metalnessMap,ut=!!v.roughnessMap,Te=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,N=v.iridescence>0,Y=v.sheen>0,Z=v.transmission>0,K=Te&&!!v.anisotropyMap,Se=T&&!!v.clearcoatMap,oe=T&&!!v.clearcoatNormalMap,Pe=T&&!!v.clearcoatRoughnessMap,Ie=N&&!!v.iridescenceMap,ee=N&&!!v.iridescenceThicknessMap,ie=Y&&!!v.sheenColorMap,ye=Y&&!!v.sheenRoughnessMap,be=!!v.specularMap,_e=!!v.specularColorMap,Xe=!!v.specularIntensityMap,I=Z&&!!v.transmissionMap,le=Z&&!!v.thicknessMap,se=!!v.gradientMap,ve=!!v.alphaMap,te=v.alphaTest>0,$=!!v.alphaHash,Me=!!v.extensions;let Fe=Tn;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const ft={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:et,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:jt,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:It,envMap:Ze,envMapMode:Ze&&W.mapping,envMapCubeUVHeight:ne,aoMap:tt,lightMap:ct,bumpMap:We,normalMap:yt,displacementMap:P,emissiveMap:Tt,normalMapObjectSpace:yt&&v.normalMapType===Nd,normalMapTangentSpace:yt&&v.normalMapType===wh,metalnessMap:Qe,roughnessMap:ut,anisotropy:Te,anisotropyMap:K,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Pe,dispersion:_,iridescence:N,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:ye,specularMap:be,specularColorMap:_e,specularIntensityMap:Xe,transmission:Z,transmissionMap:I,thicknessMap:le,gradientMap:se,opaque:v.transparent===!1&&v.blending===Gi&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:$,combine:v.combine,mapUv:Ue&&g(v.map.channel),aoMapUv:tt&&g(v.aoMap.channel),lightMapUv:ct&&g(v.lightMap.channel),bumpMapUv:We&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:Tt&&g(v.emissiveMap.channel),metalnessMapUv:Qe&&g(v.metalnessMap.channel),roughnessMapUv:ut&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:Se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:Xe&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:le&&g(v.thicknessMap.channel),alphaMapUv:ve&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(yt||Te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ue||ve),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:Tt&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)w.push(G),w.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const w=f[v.type];let G;if(w){const C=yn[w];G=Vu.clone(C.uniforms)}else G=v.uniforms;return G}function M(v,w){let G=h.get(w);return G!==void 0?++G.usedTimes:(G=new H0(s,w,v,i),c.push(G),h.set(w,G)),G}function A(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:R}}function $0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function K0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Tc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ec(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let S=s[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,g,x,m,p){const S=o(u,f,g,x,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function c(u,f,g,x,m,p){const S=o(u,f,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||K0),n.length>1&&n.sort(f||Tc),i.length>1&&i.sort(f||Tc)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Y0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ec,s.set(n,[a])):i>=r.length?(a=new Ec,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function j0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Z0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let J0=0;function Q0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function e_(s){const e=new j0,t=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Ge,a=new Ge;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,b=0,M=0,A=0,E=0,R=0;c.sort(Q0);for(let w=0,G=c.length;w<G;w++){const C=c[w],F=C.color,O=C.intensity,B=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ki?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],O);R++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(F).multiplyScalar(O),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[x]=z;const W=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,W.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=W.matrix,C.castShadow){const ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=k,M++}x++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const W=C.shadow,ne=t.get(C);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,ne.shadowCameraNear=W.camera.near,ne.shadowCameraFar=W.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(O),z.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==M||v.numSpotMaps!==A||v.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=M,v.numSpotMaps=A,v.numLightProbes=R,n.version=J0++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Ac(s){const e=new e_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function t_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ac(s),e.set(i,[o])):r>=a.length?(o=new Ac(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],r_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cc=new Ge,ms=new D,Ea=new D;function a_(s,e,t){let n=new Yo;const i=new Ye,r=new Ye,a=new mt,o=new Xu,l=new qu,c={},h=t.maxTextureSize,d={[Wn]:Kt,[Kt]:Wn,[dn]:dn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new q(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let p=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ah&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xr);const w=s.getRenderTarget(),G=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Hn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(k=>k.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,k=E.length;B<k;B++){const z=E[B],W=z.shadow;if(W===void 0){Ce("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();i.multiply(ne),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,W.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ms){if(z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new En(i.x,i.y,{format:Ki,type:Xn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new Us(i.x,i.y,rn),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=qn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else z.isPointLight?(W.map=new Wh(i.x),W.map.depthTexture=new Bu(i.x,Cn)):(W.map=new En(i.x,i.y),W.map.depthTexture=new Us(i.x,i.y,Cn)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=qn,this.type===xr?(W.map.depthTexture.compareFunction=Q?Ho:Vo,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}const me=W.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<me;he++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,he),s.clear();else{he===0&&(s.setRenderTarget(W.map),s.clear());const ae=W.getViewport(he);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),F.viewport(a)}if(z.isPointLight){const ae=W.camera,ke=W.matrix,et=z.distance||ae.far;et!==ae.far&&(ae.far=et,ae.updateProjectionMatrix()),ms.setFromMatrixPosition(z.matrixWorld),ae.position.copy(ms),Ea.copy(ae.position),Ea.add(s_[he]),ae.up.copy(r_[he]),ae.lookAt(Ea),ae.updateMatrixWorld(),ke.makeTranslation(-ms.x,-ms.y,-ms.z),Cc.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Cc,ae.coordinateSystem,ae.reversedDepth)}else W.updateMatrices(z);n=W.getFrustum(),M(R,v,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===Ms&&S(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,G,C)};function S(E,R){const v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(i.x,i.y,{format:Ki,type:Xn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,v,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,v,f,x,null)}function b(E,R,v,w){let G=null;const C=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)G=C;else if(G=v.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=G.uuid,O=R.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let k=B[O];k===void 0&&(k=G.clone(),B[O]=k,R.addEventListener("dispose",A)),G=k}if(G.visible=R.visible,G.wireframe=R.wireframe,w===Ms?G.side=R.shadowSide!==null?R.shadowSide:R.side:G.side=R.shadowSide!==null?R.shadowSide:d[R.side],G.alphaMap=R.alphaMap,G.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,G.map=R.map,G.clipShadows=R.clipShadows,G.clippingPlanes=R.clippingPlanes,G.clipIntersection=R.clipIntersection,G.displacementMap=R.displacementMap,G.displacementScale=R.displacementScale,G.displacementBias=R.displacementBias,G.wireframeLinewidth=R.wireframeLinewidth,G.linewidth=R.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const F=s.properties.get(G);F.light=v}return G}function M(E,R,v,w,G){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&G===Ms)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const O=e.update(E),B=E.material;if(Array.isArray(B)){const k=O.groups;for(let z=0,W=k.length;z<W;z++){const ne=k[z],Q=B[ne.materialIndex];if(Q&&Q.visible){const me=b(E,Q,w,G);E.onBeforeShadow(s,E,R,v,O,me,ne),s.renderBufferDirect(v,null,O,me,E,ne),E.onAfterShadow(s,E,R,v,O,me,ne)}}}else if(B.visible){const k=b(E,B,w,G);E.onBeforeShadow(s,E,R,v,O,k,null),s.renderBufferDirect(v,null,O,k,E,null),E.onAfterShadow(s,E,R,v,O,k,null)}}const F=E.children;for(let O=0,B=F.length;O<B;O++)M(F[O],R,v,w,G)}function A(E){E.target.removeEventListener("dispose",A);for(const v in c){const w=c[v],G=E.target.uuid;G in w&&(w[G].dispose(),delete w[G])}}}function o_(s,e){function t(){let I=!1;const le=new mt;let se=null;const ve=new mt(0,0,0,0);return{setMask:function(te){se!==te&&!I&&(s.colorMask(te,te,te,te),se=te)},setLocked:function(te){I=te},setClear:function(te,$,Me,Fe,ft){ft===!0&&(te*=Fe,$*=Fe,Me*=Fe),le.set(te,$,Me,Fe),ve.equals(le)===!1&&(s.clearColor(te,$,Me,Fe),ve.copy(le))},reset:function(){I=!1,se=null,ve.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,se=null,ve=null,te=null;return{setReversed:function($){if(le!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),le=$;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return le},setTest:function($){$?re(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function($){se!==$&&!I&&(s.depthMask($),se=$)},setFunc:function($){if(le&&($=Xd[$]),ve!==$){switch($){case Ua:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case ka:s.depthFunc(s.EQUAL);break;case Ba:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=$}},setLocked:function($){I=$},setClear:function($){te!==$&&(te=$,le&&($=1-$),s.clearDepth($))},reset:function(){I=!1,se=null,ve=null,te=null,le=!1}}}function i(){let I=!1,le=null,se=null,ve=null,te=null,$=null,Me=null,Fe=null,ft=null;return{setTest:function(nt){I||(nt?re(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(nt){le!==nt&&!I&&(s.stencilMask(nt),le=nt)},setFunc:function(nt,In,Dn){(se!==nt||ve!==In||te!==Dn)&&(s.stencilFunc(nt,In,Dn),se=nt,ve=In,te=Dn)},setOp:function(nt,In,Dn){($!==nt||Me!==In||Fe!==Dn)&&(s.stencilOp(nt,In,Dn),$=nt,Me=In,Fe=Dn)},setLocked:function(nt){I=nt},setClear:function(nt){ft!==nt&&(s.clearStencil(nt),ft=nt)},reset:function(){I=!1,le=null,se=null,ve=null,te=null,$=null,Me=null,Fe=null,ft=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,A=null,E=null,R=new Ne(0,0,0),v=0,w=!1,G=null,C=null,F=null,O=null,B=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=W>=2);let Q=null,me={};const he=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),ke=new mt().fromArray(he),et=new mt().fromArray(ae);function pt(I,le,se,ve){const te=new Uint8Array(4),$=s.createTexture();s.bindTexture(I,$),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<se;Me++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(le+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return $}const j={};j[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc(qi),We(!1),yt(ul),re(s.CULL_FACE),tt(Hn);function re(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function ze(I,le){return d[I]!==le?(s.bindFramebuffer(I,le),d[I]=le,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Le(I,le){let se=f,ve=!1;if(I){se=u.get(le),se===void 0&&(se=[],u.set(le,se));const te=I.textures;if(se.length!==te.length||se[0]!==s.COLOR_ATTACHMENT0){for(let $=0,Me=te.length;$<Me;$++)se[$]=s.COLOR_ATTACHMENT0+$;se.length=te.length,ve=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,ve=!0);ve&&s.drawBuffers(se)}function Ue(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const It={[_i]:s.FUNC_ADD,[dd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};It[fd]=s.MIN,It[pd]=s.MAX;const Ze={[md]:s.ZERO,[gd]:s.ONE,[_d]:s.SRC_COLOR,[Da]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[yd]:s.DST_COLOR,[vd]:s.DST_ALPHA,[xd]:s.ONE_MINUS_SRC_COLOR,[Na]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[wd]:s.CONSTANT_COLOR,[Td]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[Ad]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(I,le,se,ve,te,$,Me,Fe,ft,nt){if(I===Hn){x===!0&&(ce(s.BLEND),x=!1);return}if(x===!1&&(re(s.BLEND),x=!0),I!==hd){if(I!==m||nt!==w){if((p!==_i||M!==_i)&&(s.blendEquation(s.FUNC_ADD),p=_i,M=_i),nt)switch(I){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fl:s.blendFunc(s.ONE,s.ONE);break;case pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ml:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",I);break}else switch(I){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pl:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",I);break}S=null,b=null,A=null,E=null,R.set(0,0,0),v=0,m=I,w=nt}return}te=te||le,$=$||se,Me=Me||ve,(le!==p||te!==M)&&(s.blendEquationSeparate(It[le],It[te]),p=le,M=te),(se!==S||ve!==b||$!==A||Me!==E)&&(s.blendFuncSeparate(Ze[se],Ze[ve],Ze[$],Ze[Me]),S=se,b=ve,A=$,E=Me),(Fe.equals(R)===!1||ft!==v)&&(s.blendColor(Fe.r,Fe.g,Fe.b,ft),R.copy(Fe),v=ft),m=I,w=!1}function ct(I,le){I.side===dn?ce(s.CULL_FACE):re(s.CULL_FACE);let se=I.side===Kt;le&&(se=!se),We(se),I.blending===Gi&&I.transparent===!1?tt(Hn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){G!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),G=I)}function yt(I){I!==ld?(re(s.CULL_FACE),I!==C&&(I===ul?s.cullFace(s.BACK):I===cd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),C=I}function P(I){I!==F&&(z&&s.lineWidth(I),F=I)}function Tt(I,le,se){I?(re(s.POLYGON_OFFSET_FILL),(O!==le||B!==se)&&(O=le,B=se,a.getReversed()&&(le=-le),s.polygonOffset(le,se))):ce(s.POLYGON_OFFSET_FILL)}function Qe(I){I?re(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function ut(I){I===void 0&&(I=s.TEXTURE0+k-1),Q!==I&&(s.activeTexture(I),Q=I)}function Te(I,le,se){se===void 0&&(Q===null?se=s.TEXTURE0+k-1:se=Q);let ve=me[se];ve===void 0&&(ve={type:void 0,texture:void 0},me[se]=ve),(ve.type!==I||ve.texture!==le)&&(Q!==se&&(s.activeTexture(se),Q=se),s.bindTexture(I,le||j[I]),ve.type=I,ve.texture=le)}function T(){const I=me[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function Y(){try{s.texSubImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function oe(){try{s.texStorage2D(...arguments)}catch(I){De("WebGLState:",I)}}function Pe(){try{s.texStorage3D(...arguments)}catch(I){De("WebGLState:",I)}}function Ie(){try{s.texImage2D(...arguments)}catch(I){De("WebGLState:",I)}}function ee(){try{s.texImage3D(...arguments)}catch(I){De("WebGLState:",I)}}function ie(I){ke.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function ye(I){et.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function be(I,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let ve=se.get(I);ve===void 0&&(ve=s.getUniformBlockIndex(le,I.name),se.set(I,ve))}function _e(I,le){const ve=c.get(le).get(I);l.get(le)!==ve&&(s.uniformBlockBinding(le,ve,I.__bindingPointIndex),l.set(le,ve))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,me={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,M=null,A=null,E=null,R=new Ne(0,0,0),v=0,w=!1,G=null,C=null,F=null,O=null,B=null,ke.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:ce,bindFramebuffer:ze,drawBuffers:Le,useProgram:Ue,setBlending:tt,setMaterial:ct,setFlipSided:We,setCullFace:yt,setLineWidth:P,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:ut,bindTexture:Te,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ie,texImage3D:ee,updateUBOMapping:be,uniformBlockBinding:_e,texStorage2D:oe,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:ie,viewport:ye,reset:Xe}}function l_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Ns("canvas")}function x(T,_,N){let Y=1;const Z=Te(T);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*Z.width),Se=Math.floor(Y*Z.height);d===void 0&&(d=g(K,Se));const oe=_?g(K,Se):d;return oe.width=K,oe.height=Se,oe.getContext("2d").drawImage(T,0,0,K,Se),Ce("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Se+")."),oe}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,_,N,Y,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===s.RED&&(N===s.FLOAT&&(K=s.R32F),N===s.HALF_FLOAT&&(K=s.R16F),N===s.UNSIGNED_BYTE&&(K=s.R8)),_===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.R8UI),N===s.UNSIGNED_SHORT&&(K=s.R16UI),N===s.UNSIGNED_INT&&(K=s.R32UI),N===s.BYTE&&(K=s.R8I),N===s.SHORT&&(K=s.R16I),N===s.INT&&(K=s.R32I)),_===s.RG&&(N===s.FLOAT&&(K=s.RG32F),N===s.HALF_FLOAT&&(K=s.RG16F),N===s.UNSIGNED_BYTE&&(K=s.RG8)),_===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RG8UI),N===s.UNSIGNED_SHORT&&(K=s.RG16UI),N===s.UNSIGNED_INT&&(K=s.RG32UI),N===s.BYTE&&(K=s.RG8I),N===s.SHORT&&(K=s.RG16I),N===s.INT&&(K=s.RG32I)),_===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGB8UI),N===s.UNSIGNED_SHORT&&(K=s.RGB16UI),N===s.UNSIGNED_INT&&(K=s.RGB32UI),N===s.BYTE&&(K=s.RGB8I),N===s.SHORT&&(K=s.RGB16I),N===s.INT&&(K=s.RGB32I)),_===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),N===s.UNSIGNED_INT&&(K=s.RGBA32UI),N===s.BYTE&&(K=s.RGBA8I),N===s.SHORT&&(K=s.RGBA16I),N===s.INT&&(K=s.RGBA32I)),_===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),_===s.RGBA){const Se=Z?Er:je.getTransfer(Y);N===s.FLOAT&&(K=s.RGBA32F),N===s.HALF_FLOAT&&(K=s.RGBA16F),N===s.UNSIGNED_BYTE&&(K=Se===it?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(T,_){let N;return T?_===null||_===Cn||_===Ps?N=s.DEPTH24_STENCIL8:_===rn?N=s.DEPTH32F_STENCIL8:_===Rs&&(N=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===Ps?N=s.DEPTH_COMPONENT24:_===rn?N=s.DEPTH_COMPONENT32F:_===Rs&&(N=s.DEPTH_COMPONENT16),N}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==At&&T.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){const _=T.target;_.removeEventListener("dispose",E),v(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),G(_)}function v(T){const _=n.get(T);if(_.__webglInit===void 0)return;const N=T.source,Y=u.get(N);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(Y).length===0&&u.delete(N)}n.remove(T)}function w(T){const _=n.get(T);s.deleteTexture(_.__webglTexture);const N=T.source,Y=u.get(N);delete Y[_.__cacheKey],a.memory.textures--}function G(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const K=n.get(N[Y]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(T)}let C=0;function F(){C=0}function O(){const T=C;return T>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function B(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function k(T,_){const N=n.get(T);if(T.isVideoTexture&&Qe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const Y=T.image;if(Y===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,_);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+_)}function z(T,_){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,_);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+_)}function W(T,_){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,_);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+_)}function ne(T,_){const N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){re(N,T,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+_)}const Q={[Mn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},me={[At]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[vr]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},he={[Ud]:s.NEVER,[zd]:s.ALWAYS,[Fd]:s.LESS,[Vo]:s.LEQUAL,[Od]:s.EQUAL,[Ho]:s.GEQUAL,[kd]:s.GREATER,[Bd]:s.NOTEQUAL};function ae(T,_){if(_.type===rn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===vr||_.magFilter===bs||_.magFilter===zn||_.minFilter===Ct||_.minFilter===vr||_.minFilter===bs||_.minFilter===zn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Q[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Q[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Q[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,me[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==bs&&_.minFilter!==zn||_.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ke(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));const Y=_.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const K=B(_);if(K!==T.__cacheKey){Z[K]===void 0&&(Z[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[K].usedTimes++;const Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&w(_)),T.__cacheKey=K,T.__webglTexture=Z[K].texture}return N}function et(T,_,N){return Math.floor(Math.floor(T/N)/_)}function pt(T,_,N,Y){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,N,Y,_.data);else{K.sort((ee,ie)=>ee.start-ie.start);let Se=0;for(let ee=1;ee<K.length;ee++){const ie=K[Se],ye=K[ee],be=ie.start+ie.count,_e=et(ye.start,_.width,4),Xe=et(ie.start,_.width,4);ye.start<=be+1&&_e===Xe&&et(ye.start+ye.count-1,_.width,4)===_e?ie.count=Math.max(ie.count,ye.start+ye.count-ie.start):(++Se,K[Se]=ye)}K.length=Se+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ie=K.length;ee<ie;ee++){const ye=K[ee],be=Math.floor(ye.start/4),_e=Math.ceil(ye.count/4),Xe=be%_.width,I=Math.floor(be/_.width),le=_e,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Xe,I,le,se,N,Y,_.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function j(T,_,N){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=ke(T,_),K=_.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+N);const Se=n.get(K);if(K.version!==Se.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const oe=je.getPrimaries(je.workingColorSpace),Pe=_.colorSpace===si?null:je.getPrimaries(_.colorSpace),Ie=_.colorSpace===si||oe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ee=x(_.image,!1,i.maxTextureSize);ee=ut(_,ee);const ie=r.convert(_.format,_.colorSpace),ye=r.convert(_.type);let be=b(_.internalFormat,ie,ye,_.colorSpace,_.isVideoTexture);ae(Y,_);let _e;const Xe=_.mipmaps,I=_.isVideoTexture!==!0,le=Se.__version===void 0||Z===!0,se=K.dataReady,ve=A(_,ee);if(_.isDepthTexture)be=M(_.format===Si,_.type),le&&(I?t.texStorage2D(s.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,ye,null));else if(_.isDataTexture)if(Xe.length>0){I&&le&&t.texStorage2D(s.TEXTURE_2D,ve,be,Xe[0].width,Xe[0].height);for(let te=0,$=Xe.length;te<$;te++)_e=Xe[te],I?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,_e.width,_e.height,ie,ye,_e.data):t.texImage2D(s.TEXTURE_2D,te,be,_e.width,_e.height,0,ie,ye,_e.data);_.generateMipmaps=!1}else I?(le&&t.texStorage2D(s.TEXTURE_2D,ve,be,ee.width,ee.height),se&&pt(_,ee,ie,ye)):t.texImage2D(s.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,ye,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,be,Xe[0].width,Xe[0].height,ee.depth);for(let te=0,$=Xe.length;te<$;te++)if(_e=Xe[te],_.format!==an)if(ie!==null)if(I){if(se)if(_.layerUpdates.size>0){const Me=rc(_e.width,_e.height,_.format,_.type);for(const Fe of _.layerUpdates){const ft=_e.data.subarray(Fe*Me/_e.data.BYTES_PER_ELEMENT,(Fe+1)*Me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Fe,_e.width,_e.height,1,ie,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ee.depth,ie,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,be,_e.width,_e.height,ee.depth,0,_e.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ee.depth,ie,ye,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,be,_e.width,_e.height,ee.depth,0,ie,ye,_e.data)}else{I&&le&&t.texStorage2D(s.TEXTURE_2D,ve,be,Xe[0].width,Xe[0].height);for(let te=0,$=Xe.length;te<$;te++)_e=Xe[te],_.format!==an?ie!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,_e.width,_e.height,ie,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,te,be,_e.width,_e.height,0,_e.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,_e.width,_e.height,ie,ye,_e.data):t.texImage2D(s.TEXTURE_2D,te,be,_e.width,_e.height,0,ie,ye,_e.data)}else if(_.isDataArrayTexture)if(I){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,be,ee.width,ee.height,ee.depth),se)if(_.layerUpdates.size>0){const te=rc(ee.width,ee.height,_.format,_.type);for(const $ of _.layerUpdates){const Me=ee.data.subarray($*te/ee.data.BYTES_PER_ELEMENT,($+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ie,ye,Me)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,ye,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,ie,ye,ee.data);else if(_.isData3DTexture)I?(le&&t.texStorage3D(s.TEXTURE_3D,ve,be,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,ye,ee.data)):t.texImage3D(s.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,ie,ye,ee.data);else if(_.isFramebufferTexture){if(le)if(I)t.texStorage2D(s.TEXTURE_2D,ve,be,ee.width,ee.height);else{let te=ee.width,$=ee.height;for(let Me=0;Me<ve;Me++)t.texImage2D(s.TEXTURE_2D,Me,be,te,$,0,ie,ye,null),te>>=1,$>>=1}}else if(Xe.length>0){if(I&&le){const te=Te(Xe[0]);t.texStorage2D(s.TEXTURE_2D,ve,be,te.width,te.height)}for(let te=0,$=Xe.length;te<$;te++)_e=Xe[te],I?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,ye,_e):t.texImage2D(s.TEXTURE_2D,te,be,ie,ye,_e);_.generateMipmaps=!1}else if(I){if(le){const te=Te(ee);t.texStorage2D(s.TEXTURE_2D,ve,be,te.width,te.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,ye,ee)}else t.texImage2D(s.TEXTURE_2D,0,be,ie,ye,ee);m(_)&&p(Y),Se.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function re(T,_,N){if(_.image.length!==6)return;const Y=ke(T,_),Z=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const K=n.get(Z);if(Z.version!==K.__version||Y===!0){t.activeTexture(s.TEXTURE0+N);const Se=je.getPrimaries(je.workingColorSpace),oe=_.colorSpace===si?null:je.getPrimaries(_.colorSpace),Pe=_.colorSpace===si||Se===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let $=0;$<6;$++)!Ie&&!ee?ie[$]=x(_.image[$],!0,i.maxCubemapSize):ie[$]=ee?_.image[$].image:_.image[$],ie[$]=ut(_,ie[$]);const ye=ie[0],be=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),Xe=b(_.internalFormat,be,_e,_.colorSpace),I=_.isVideoTexture!==!0,le=K.__version===void 0||Y===!0,se=Z.dataReady;let ve=A(_,ye);ae(s.TEXTURE_CUBE_MAP,_);let te;if(Ie){I&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Xe,ye.width,ye.height);for(let $=0;$<6;$++){te=ie[$].mipmaps;for(let Me=0;Me<te.length;Me++){const Fe=te[Me];_.format!==an?be!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Xe,Fe.width,Fe.height,0,Fe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,Fe.width,Fe.height,be,_e,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Xe,Fe.width,Fe.height,0,be,_e,Fe.data)}}}else{if(te=_.mipmaps,I&&le){te.length>0&&ve++;const $=Te(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ie[$].width,ie[$].height,be,_e,ie[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,ie[$].width,ie[$].height,0,be,_e,ie[$].data);for(let Me=0;Me<te.length;Me++){const ft=te[Me].image[$].image;I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,ft.width,ft.height,be,_e,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Xe,ft.width,ft.height,0,be,_e,ft.data)}}else{I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,_e,ie[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,be,_e,ie[$]);for(let Me=0;Me<te.length;Me++){const Fe=te[Me];I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,be,_e,Fe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Xe,be,_e,Fe.image[$])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),K.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ce(T,_,N,Y,Z,K){const Se=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),Pe=b(N.internalFormat,Se,oe,N.colorSpace),Ie=n.get(_),ee=n.get(N);if(ee.__renderTarget=_,!Ie.__hasExternalTextures){const ie=Math.max(1,_.width>>K),ye=Math.max(1,_.height>>K);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,Pe,ie,ye,_.depth,0,Se,oe,null):t.texImage2D(Z,K,Pe,ie,ye,0,Se,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Tt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,P(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,ee.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(T,_,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=M(_.stencilBuffer,Z),Se=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(_),K,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(_),K,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,K,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],Se=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),Pe=b(K.internalFormat,Se,oe,K.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(_),Pe,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(_),Pe,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(T,_,N){const Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(s.TEXTURE_CUBE_MAP,_.depthTexture);const Ie=r.convert(_.depthTexture.format),ee=r.convert(_.depthTexture.type);let ie;_.depthTexture.format===qn?ie=s.DEPTH_COMPONENT24:_.depthTexture.format===Si&&(ie=s.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ie,_.width,_.height,0,Ie,ee,null)}}else k(_.depthTexture,0);const K=Z.__webglTexture,Se=P(_),oe=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Pe=_.depthTexture.format===Si?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===qn)Tt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,oe,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,oe,K,0);else if(_.depthTexture.format===Si)Tt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,oe,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,oe,K,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const _=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Le(_.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Le(_.__webglFramebuffer[0],T,0):Le(_.__webglFramebuffer,T,0)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),ze(_.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ze(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,_,N){const Y=n.get(T);_!==void 0&&ce(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ue(T)}function Ze(T){const _=T.texture,N=n.get(T),Y=n.get(_);T.addEventListener("dispose",R);const Z=T.textures,K=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)N.__webglFramebuffer[oe][Pe]=s.createFramebuffer()}else N.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[oe]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Se)for(let oe=0,Pe=Z.length;oe<Pe;oe++){const Ie=n.get(Z[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Pe=Z[oe];N.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ie=r.convert(Pe.format,Pe.colorSpace),ee=r.convert(Pe.type),ie=b(Pe.internalFormat,Ie,ee,Pe.colorSpace,T.isXRRenderTarget===!0),ye=P(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ie,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ae(s.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ce(N.__webglFramebuffer[oe][Pe],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe);else ce(N.__webglFramebuffer[oe],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,Pe=Z.length;oe<Pe;oe++){const Ie=Z[oe],ee=n.get(Ie);let ie=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),ae(ie,Ie),ce(N.__webglFramebuffer,T,Ie,s.COLOR_ATTACHMENT0+oe,ie,0),m(Ie)&&p(ie)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),ae(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ce(N.__webglFramebuffer[Pe],T,_,s.COLOR_ATTACHMENT0,oe,Pe);else ce(N.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,oe,0);m(_)&&p(oe),t.unbindTexture()}T.depthBuffer&&Ue(T)}function tt(T){const _=T.textures;for(let N=0,Y=_.length;N<Y;N++){const Z=_[N];if(m(Z)){const K=S(T),Se=n.get(Z).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const ct=[],We=[];function yt(T){if(T.samples>0){if(Tt(T)===!1){const _=T.textures,N=T.width,Y=T.height;let Z=s.COLOR_BUFFER_BIT;const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),oe=_.length>1;if(oe)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=T.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);const ee=n.get(_[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,s.NEAREST),l===!0&&(ct.length=0,We.length=0,ct.push(s.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ct.push(K),We.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ie]);const ee=n.get(_[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(i.maxSamples,T.samples)}function Tt(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qe(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ut(T,_){const N=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==jt&&N!==si&&(je.getTransfer(N)===it?(Y!==an||Z!==en)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",N)),_}function Te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=It,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c_(s,e){function t(n,i=si){let r;const a=je.getTransfer(i);if(n===en)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return s.BYTE;if(n===xh)return s.SHORT;if(n===Rs)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===yh)return s.ALPHA;if(n===Mh)return s.RGB;if(n===an)return s.RGBA;if(n===qn)return s.DEPTH_COMPONENT;if(n===Si)return s.DEPTH_STENCIL;if(n===Oo)return s.RED;if(n===ko)return s.RED_INTEGER;if(n===Ki)return s.RG;if(n===Bo)return s.RG_INTEGER;if(n===zo)return s.RGBA_INTEGER;if(n===Sr||n===yr||n===Mr||n===br)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===$a||n===Ka||n===Ya||n===ja||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===$a)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===xo||n===vo||n===So)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:h_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f_ extends ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new u_,p={},S=t.getContextAttributes();let b=null,M=null;const A=[],E=[],R=new Ye;let v=null;const w=new $t;w.viewport=new mt;const G=new $t;G.viewport=new mt;const C=[w,G],F=new mf;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=A[j];return re===void 0&&(re=new Qr,A[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=A[j];return re===void 0&&(re=new Qr,A[j]=re),re.getGripSpace()},this.getHand=function(j){let re=A[j];return re===void 0&&(re=new Qr,A[j]=re),re.getHandSpace()};function k(j){const re=E.indexOf(j.inputSource);if(re===-1)return;const ce=A[re];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",W);for(let j=0;j<A.length;j++){const re=E[j];re!==null&&(E[j]=null,A[j].disconnect(re))}O=null,B=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(b),f=null,u=null,d=null,i=null,M=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ze=null,Le=null;S.depth&&(Le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Si:qn,ze=S.stencil?Ps:Cn);const Ue={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new En(u.textureWidth,u.textureHeight,{format:an,type:en,depthTexture:new Us(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new En(f.framebufferWidth,f.framebufferHeight,{format:an,type:en,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(j){for(let re=0;re<j.removed.length;re++){const ce=j.removed[re],ze=E.indexOf(ce);ze>=0&&(E[ze]=null,A[ze].disconnect(ce))}for(let re=0;re<j.added.length;re++){const ce=j.added[re];let ze=E.indexOf(ce);if(ze===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=E.length){E.push(ce),ze=Ue;break}else if(E[Ue]===null){E[Ue]=ce,ze=Ue;break}if(ze===-1)break}const Le=A[ze];Le&&Le.connect(ce)}}const ne=new D,Q=new D;function me(j,re,ce){ne.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const ze=ne.distanceTo(Q),Le=re.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,It=Le[14]/(Le[10]-1),Ze=Le[14]/(Le[10]+1),tt=(Le[9]+1)/Le[5],ct=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],yt=(Ue[8]+1)/Ue[0],P=It*We,Tt=It*yt,Qe=ze/(-We+yt),ut=Qe*-We;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ut),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Te=It+Qe,T=Ze+Qe,_=P-ut,N=Tt+(ze-ut),Y=tt*Ze/T*Te,Z=ct*Ze/T*Te;j.projectionMatrix.makePerspective(_,N,Y,Z,Te,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let re=j.near,ce=j.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),F.near=G.near=w.near=re,F.far=G.far=w.far=ce,(O!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,B=F.far),F.layers.mask=j.layers.mask|6,w.layers.mask=F.layers.mask&-5,G.layers.mask=F.layers.mask&-3;const ze=j.parent,Le=F.cameras;he(F,ze);for(let Ue=0;Ue<Le.length;Ue++)he(Le[Ue],ze);Le.length===2?me(F,w,G):F.projectionMatrix.copy(w.projectionMatrix),ae(j,F,ze)};function ae(j,re,ce){ce===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let ke=null;function et(j,re){if(h=re.getViewerPose(c||a),g=re,h!==null){const ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Ze=0;Ze<ce.length;Ze++){const tt=ce[Ze];let ct=null;if(f!==null)ct=f.getViewport(tt);else{const yt=d.getViewSubImage(u,tt);ct=yt.viewport,Ze===0&&(e.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(M))}let We=C[Ze];We===void 0&&(We=new $t,We.layers.enable(Ze),We.viewport=new mt,C[Ze]=We),We.matrix.fromArray(tt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(tt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ct.x,ct.y,ct.width,ct.height),Ze===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(We)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ze=d.getDepthInformation(ce[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,i.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ze=0;Ze<ce.length;Ze++){const tt=ce[Ze].camera;if(tt){let ct=p[tt];ct||(ct=new Uh,p[tt]=ct);const We=d.getCameraImage(tt);ct.sourceTexture=We}}}}for(let ce=0;ce<A.length;ce++){const ze=E[ce],Le=A[ce];ze!==null&&Le!==void 0&&Le.update(ze,re,c||a)}ke&&ke(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const pt=new Gh;pt.setAnimationLoop(et),this.setAnimationLoop=function(j){ke=j},this.dispose=function(){}}}const fi=new mn,p_=new Ge;function m_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,M=S.envMapRotation;b&&(m.envMap.value=b,fi.copy(M),fi.x*=-1,fi.y*=-1,fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const M=b.program;n.uniformBlockBinding(S,M)}function c(S,b){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(S,A);const E=e.render.frame;r[S.id]!==E&&(u(S),r[S.id]=E)}function h(S){const b=d();S.__bindingPointIndex=b;const M=s.createBuffer(),A=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=i[S.id],M=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,R=M.length;E<R;E++){const v=Array.isArray(M[E])?M[E]:[M[E]];for(let w=0,G=v.length;w<G;w++){const C=v[w];if(f(C,E,w,A)===!0){const F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let k=0;k<O.length;k++){const z=O[k],W=x(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,b,M,A){const E=S.value,R=b+"_"+M;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const v=A[R];if(typeof E=="number"||typeof E=="boolean"){if(v!==E)return A[R]=E,!0}else if(v.equals(E)===!1)return v.copy(E),!0}return!1}function g(S){const b=S.uniforms;let M=0;const A=16;for(let R=0,v=b.length;R<v;R++){const w=Array.isArray(b[R])?b[R]:[b[R]];for(let G=0,C=w.length;G<C;G++){const F=w[G],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,k=O.length;B<k;B++){const z=O[B],W=x(z),ne=M%A,Q=ne%W.boundary,me=ne+Q;M+=Q,me!==0&&A-me<W.storage&&(M+=A-me),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=W.storage}}}const E=M%A;return E>0&&(M+=A-E),S.__size=M,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const __=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function x_(){return vn===null&&(vn=new $o(__,16,16,Ki,Xn),vn.name="DFG_LUT",vn.minFilter=Ct,vn.magFilter=Ct,vn.wrapS=bn,vn.wrapT=bn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class v_{constructor(e={}){const{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([zo,Bo,ko]),p=new Set([en,Cn,Rs,Ps,Uo,Fo]),S=new Uint32Array(4),b=new Int32Array(4);let M=null,A=null;const E=[],R=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let G=!1;this._outputColorSpace=kt;let C=0,F=0,O=null,B=-1,k=null;const z=new mt,W=new mt;let ne=null;const Q=new Ne(0);let me=0,he=t.width,ae=t.height,ke=1,et=null,pt=null;const j=new mt(0,0,he,ae),re=new mt(0,0,he,ae);let ce=!1;const ze=new Yo;let Le=!1,Ue=!1;const It=new Ge,Ze=new D,tt=new mt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function yt(){return O===null?ke:1}let P=n;function Tt(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",ft,!1),P===null){const U="webgl2";if(P=Tt(U,y),P===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw De("WebGLRenderer: "+y.message),y}let Qe,ut,Te,T,_,N,Y,Z,K,Se,oe,Pe,Ie,ee,ie,ye,be,_e,Xe,I,le,se,ve;function te(){Qe=new vg(P),Qe.init(),le=new c_(P,Qe),ut=new dg(P,Qe,e,le),Te=new o_(P,Qe),ut.reversedDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),T=new Mg(P),_=new $0,N=new l_(P,Qe,Te,_,ut,le,T),Y=new xg(w),Z=new Af(P),se=new cg(P,Z),K=new Sg(P,Z,T,se),Se=new wg(P,K,Z,se,T),_e=new bg(P,ut,N),ie=new ug(_),oe=new q0(w,Y,Qe,ut,se,ie),Pe=new m_(w,_),Ie=new Y0,ee=new t_(Qe),be=new lg(w,Y,Te,Se,g,l),ye=new a_(w,Se,ut),ve=new g_(P,T,ut,Te),Xe=new hg(P,Qe,T),I=new yg(P,Qe,T),T.programs=oe.programs,w.capabilities=ut,w.extensions=Qe,w.properties=_,w.renderLists=Ie,w.shadowMap=ye,w.state=Te,w.info=T}te(),x!==en&&(v=new Eg(x,t.width,t.height,i,r));const $=new f_(w,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(y){y!==void 0&&(ke=y,this.setSize(he,ae,!1))},this.getSize=function(y){return y.set(he,ae)},this.setSize=function(y,U,X=!0){if($.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}he=y,ae=U,t.width=Math.floor(y*ke),t.height=Math.floor(U*ke),X===!0&&(t.style.width=y+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(he*ke,ae*ke).floor()},this.setDrawingBufferSize=function(y,U,X){he=y,ae=U,ke=X,t.width=Math.floor(y*X),t.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,U,X,H){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,U,X,H),Te.viewport(z.copy(j).multiplyScalar(ke).round())},this.getScissor=function(y){return y.copy(re)},this.setScissor=function(y,U,X,H){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,U,X,H),Te.scissor(W.copy(re).multiplyScalar(ke).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(y){Te.setScissorTest(ce=y)},this.setOpaqueSort=function(y){et=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let H=0;if(y){let V=!1;if(O!==null){const fe=O.texture.format;V=m.has(fe)}if(V){const fe=O.texture.type,xe=p.has(fe),pe=be.getClearColor(),we=be.getClearAlpha(),Ae=pe.r,Be=pe.g,qe=pe.b;xe?(S[0]=Ae,S[1]=Be,S[2]=qe,S[3]=we,P.clearBufferuiv(P.COLOR,0,S)):(b[0]=Ae,b[1]=Be,b[2]=qe,b[3]=we,P.clearBufferiv(P.COLOR,0,b))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),X&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),be.dispose(),Ie.dispose(),ee.dispose(),_.dispose(),Y.dispose(),Se.dispose(),se.dispose(),ve.dispose(),oe.dispose(),$.dispose(),$.removeEventListener("sessionstart",sl),$.removeEventListener("sessionend",rl),ai.stop()};function Me(y){y.preventDefault(),Ar("WebGLRenderer: Context Lost."),G=!0}function Fe(){Ar("WebGLRenderer: Context Restored."),G=!1;const y=T.autoReset,U=ye.enabled,X=ye.autoUpdate,H=ye.needsUpdate,V=ye.type;te(),T.autoReset=y,ye.enabled=U,ye.autoUpdate=X,ye.needsUpdate=H,ye.type=V}function ft(y){De("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function nt(y){const U=y.target;U.removeEventListener("dispose",nt),In(U)}function In(y){Dn(y),_.remove(y)}function Dn(y){const U=_.get(y).programs;U!==void 0&&(U.forEach(function(X){oe.releaseProgram(X)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,H,V,fe){U===null&&(U=ct);const xe=V.isMesh&&V.matrixWorld.determinant()<0,pe=nd(y,U,X,H,V);Te.setMaterial(H,xe);let we=X.index,Ae=1;if(H.wireframe===!0){if(we=K.getWireframeAttribute(X),we===void 0)return;Ae=2}const Be=X.drawRange,qe=X.attributes.position;let Re=Be.start*Ae,at=(Be.start+Be.count)*Ae;fe!==null&&(Re=Math.max(Re,fe.start*Ae),at=Math.min(at,(fe.start+fe.count)*Ae)),we!==null?(Re=Math.max(Re,0),at=Math.min(at,we.count)):qe!=null&&(Re=Math.max(Re,0),at=Math.min(at,qe.count));const Mt=at-Re;if(Mt<0||Mt===1/0)return;se.setup(V,H,pe,X,we);let vt,ot=Xe;if(we!==null&&(vt=Z.get(we),ot=I,ot.setIndex(vt)),V.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*yt()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(V.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),Te.setLineWidth(Bt*yt()),V.isLineSegments?ot.setMode(P.LINES):V.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else V.isPoints?ot.setMode(P.POINTS):V.isSprite&&ot.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Cr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,Ee=V._multiDrawCounts,Zt=V._multiDrawCount,Je=we?Z.get(we).bytesPerElement:1,on=_.get(H).currentProgram.getUniforms();for(let _n=0;_n<Zt;_n++)on.setValue(P,"_gl_DrawID",_n),ot.render(Bt[_n]/Je,Ee[_n])}else if(V.isInstancedMesh)ot.renderInstances(Re,Mt,V.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Bt);ot.renderInstances(Re,Mt,Ee)}else ot.render(Re,Mt)};function il(y,U,X){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,Bs(y,U,X),y.side=Wn,y.needsUpdate=!0,Bs(y,U,X),y.side=dn):Bs(y,U,X)}this.compile=function(y,U,X=null){X===null&&(X=y),A=ee.get(X),A.init(U),R.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),y!==X&&y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const H=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const pe=fe[xe];il(pe,X,V),H.add(pe)}else il(fe,X,V),H.add(fe)}),A=R.pop(),H},this.compileAsync=function(y,U,X=null){const H=this.compile(y,U,X);return new Promise(V=>{function fe(){if(H.forEach(function(xe){_.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){V(y);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Gr=null;function td(y){Gr&&Gr(y)}function sl(){ai.stop()}function rl(){ai.start()}const ai=new Gh;ai.setAnimationLoop(td),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){Gr=y,$.setAnimationLoop(y),y===null?ai.stop():ai.start()},$.addEventListener("sessionstart",sl),$.addEventListener("sessionend",rl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,H=v!==null&&(O===null||X)&&v.begin(w,O);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,U,O),A=ee.get(y,R.length),A.init(U),R.push(A),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(It,wn,U.reversedDepth),Ue=this.localClippingEnabled,Le=ie.init(this.clippingPlanes,Ue),M=Ie.get(y,E.length),M.init(),E.push(M),$.enabled===!0&&$.isPresenting===!0){const xe=w.xr.getDepthSensingMesh();xe!==null&&Wr(xe,U,-1/0,w.sortObjects)}Wr(y,U,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(et,pt),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&be.addToRenderList(M,y),this.info.render.frame++,Le===!0&&ie.beginShadows();const V=A.state.shadowsArray;if(ye.render(V,y,U),Le===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const xe=M.opaque,pe=M.transmissive;if(A.setupLights(),U.isArrayCamera){const we=U.cameras;if(pe.length>0)for(let Ae=0,Be=we.length;Ae<Be;Ae++){const qe=we[Ae];ol(xe,pe,y,qe)}We&&be.render(y);for(let Ae=0,Be=we.length;Ae<Be;Ae++){const qe=we[Ae];al(M,y,qe,qe.viewport)}}else pe.length>0&&ol(xe,pe,y,U),We&&be.render(y),al(M,y,U)}O!==null&&F===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),H&&v.end(w),y.isScene===!0&&y.onAfterRender(w,y,U),se.resetDefaultState(),B=-1,k=null,R.pop(),R.length>0?(A=R[R.length-1],Le===!0&&ie.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function Wr(y,U,X,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ze.intersectsSprite(y)){H&&tt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);const xe=Se.update(y),pe=y.material;pe.visible&&M.push(y,xe,pe,X,tt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ze.intersectsObject(y))){const xe=Se.update(y),pe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),tt.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),tt.copy(xe.boundingSphere.center)),tt.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(pe)){const we=xe.groups;for(let Ae=0,Be=we.length;Ae<Be;Ae++){const qe=we[Ae],Re=pe[qe.materialIndex];Re&&Re.visible&&M.push(y,xe,Re,X,tt.z,qe)}}else pe.visible&&M.push(y,xe,pe,X,tt.z,null)}}const fe=y.children;for(let xe=0,pe=fe.length;xe<pe;xe++)Wr(fe[xe],U,X,H)}function al(y,U,X,H){const{opaque:V,transmissive:fe,transparent:xe}=y;A.setupLightsView(X),Le===!0&&ie.setGlobalState(w.clippingPlanes,X),H&&Te.viewport(z.copy(H)),V.length>0&&ks(V,U,X),fe.length>0&&ks(fe,U,X),xe.length>0&&ks(xe,U,X),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ol(y,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Re=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new En(1,1,{generateMipmaps:!0,type:Re?Xn:en,minFilter:zn,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const fe=A.state.transmissionRenderTarget[H.id],xe=H.viewport||z;fe.setSize(xe.z*w.transmissionResolutionScale,xe.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),we=w.getActiveCubeFace(),Ae=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(Q),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),We&&be.render(X);const Be=w.toneMapping;w.toneMapping=Tn;const qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Le===!0&&ie.setGlobalState(w.clippingPlanes,H),ks(y,X,H),N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Mt=U.length;at<Mt;at++){const vt=U[at],{object:ot,geometry:Bt,material:Ee,group:Zt}=vt;if(Ee.side===dn&&ot.layers.test(H.layers)){const Je=Ee.side;Ee.side=Kt,Ee.needsUpdate=!0,ll(ot,X,H,Bt,Ee,Zt),Ee.side=Je,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe))}w.setRenderTarget(pe,we,Ae),w.setClearColor(Q,me),qe!==void 0&&(H.viewport=qe),w.toneMapping=Be}function ks(y,U,X){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,fe=y.length;V<fe;V++){const xe=y[V],{object:pe,geometry:we,group:Ae}=xe;let Be=xe.material;Be.allowOverride===!0&&H!==null&&(Be=H),pe.layers.test(X.layers)&&ll(pe,U,X,we,Be,Ae)}}function ll(y,U,X,H,V,fe){y.onBeforeRender(w,U,X,H,V,fe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(w,U,X,H,y,fe),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,w.renderBufferDirect(X,U,H,V,y,fe),V.side=Wn,V.needsUpdate=!0,w.renderBufferDirect(X,U,H,V,y,fe),V.side=dn):w.renderBufferDirect(X,U,H,V,y,fe),y.onAfterRender(w,U,X,H,V,fe)}function Bs(y,U,X){U.isScene!==!0&&(U=ct);const H=_.get(y),V=A.state.lights,fe=A.state.shadowsArray,xe=V.state.version,pe=oe.getParameters(y,V.state,fe,U,X),we=oe.getProgramCacheKey(pe);let Ae=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=Y.get(y.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",nt),Ae=new Map,H.programs=Ae);let qe=Ae.get(we);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===xe)return hl(y,pe),qe}else pe.uniforms=oe.getUniforms(y),y.onBeforeCompile(pe,w),qe=oe.acquireProgram(pe,we),Ae.set(we,qe),H.uniforms=pe.uniforms;const Re=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=ie.uniform),hl(y,pe),H.needsLights=sd(y),H.lightsStateVersion=xe,H.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=qe,H.uniformsList=null,qe}function cl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=wr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function hl(y,U){const X=_.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function nd(y,U,X,H,V){U.isScene!==!0&&(U=ct),N.resetTextureUnits();const fe=U.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,pe=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:jt,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=Y.get(H.envMap||xe,we),Be=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let vt=Tn;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=w.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=ot!==void 0?ot.length:0,Ee=_.get(H),Zt=A.state.lights;if(Le===!0&&(Ue===!0||y!==k)){const Dt=y===k&&H.id===B;ie.setState(H,y,Dt)}let Je=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Zt.state.version||Ee.outputColorSpace!==pe||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Ae||H.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==qe||Ee.morphTargets!==Re||Ee.morphNormals!==at||Ee.morphColors!==Mt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Bt)&&(Je=!0):(Je=!0,Ee.__version=H.version);let on=Ee.currentProgram;Je===!0&&(on=Bs(H,U,V));let _n=!1,oi=!1,bi=!1;const ht=on.getUniforms(),Ot=Ee.uniforms;if(Te.useProgram(on.program)&&(_n=!0,oi=!0,bi=!0),H.id!==B&&(B=H.id,oi=!0),_n||k!==y){Te.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",y.projectionMatrix),ht.setValue(P,"viewMatrix",y.matrixWorldInverse);const Yn=ht.map.cameraPosition;Yn!==void 0&&Yn.setValue(P,Ze.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,oi=!0,bi=!0)}if(Ee.needsLights&&(Zt.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",Zt.state.directionalShadowMap,N),Zt.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",Zt.state.spotShadowMap,N),Zt.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",Zt.state.pointShadowMap,N)),V.isSkinnedMesh){ht.setOptional(P,V,"bindMatrix"),ht.setOptional(P,V,"bindMatrixInverse");const Dt=V.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(P,"boneTexture",Dt.boneTexture,N))}V.isBatchedMesh&&(ht.setOptional(P,V,"batchingTexture"),ht.setValue(P,"batchingTexture",V._matricesTexture,N),ht.setOptional(P,V,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",V._indirectTexture,N),ht.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",V._colorsTexture,N));const Kn=X.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&_e.update(V,X,on),(oi||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,ht.setValue(P,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=x_()),oi&&(ht.setValue(P,"toneMappingExposure",w.toneMappingExposure),Ee.needsLights&&id(Ot,bi),fe&&H.fog===!0&&Pe.refreshFogUniforms(Ot,fe),Pe.refreshMaterialUniforms(Ot,H,ke,ae,A.state.transmissionRenderTarget[y.id]),wr.upload(P,cl(Ee),Ot,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wr.upload(P,cl(Ee),Ot,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(P,"center",V.center),ht.setValue(P,"modelViewMatrix",V.modelViewMatrix),ht.setValue(P,"normalMatrix",V.normalMatrix),ht.setValue(P,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Dt=H.uniformsGroups;for(let Yn=0,wi=Dt.length;Yn<wi;Yn++){const dl=Dt[Yn];ve.update(dl,on),ve.bind(dl,on)}}return on}function id(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function sd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,U,X){const H=_.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=U,_.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=_.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const rd=P.createFramebuffer();this.setRenderTarget=function(y,U=0,X=0){O=y,C=U,F=X;let H=null,V=!1,fe=!1;if(y){const pe=_.get(y);if(pe.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),z.copy(y.viewport),W.copy(y.scissor),ne=y.scissorTest,Te.viewport(z),Te.scissor(W),Te.setScissorTest(ne),B=-1;return}else if(pe.__webglFramebuffer===void 0)N.setupRenderTarget(y);else if(pe.__hasExternalTextures)N.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Be=y.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&_.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(y)}}const we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Ae=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?H=Ae[U][X]:H=Ae[U],V=!0):y.samples>0&&N.useMultisampledRTT(y)===!1?H=_.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,z.copy(y.viewport),W.copy(y.scissor),ne=y.scissorTest}else z.copy(j).multiplyScalar(ke).floor(),W.copy(re).multiplyScalar(ke).floor(),ne=ce;if(X!==0&&(H=rd),Te.bindFramebuffer(P.FRAMEBUFFER,H)&&Te.drawBuffers(y,H),Te.viewport(z),Te.scissor(W),Te.setScissorTest(ne),V){const pe=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(fe){const pe=U;for(let we=0;we<y.textures.length;we++){const Ae=_.get(y.textures[we]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+we,Ae.__webglTexture,X,pe)}}else if(y!==null&&X!==0){const pe=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,X)}B=-1},this.readRenderTargetPixels=function(y,U,X,H,V,fe,xe,pe=0){if(!(y&&y.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){Te.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ae=y.textures[pe],Be=Ae.format,qe=Ae.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ut.textureFormatReadable(Be)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(qe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&X>=0&&X<=y.height-V&&P.readPixels(U,X,H,V,le.convert(Be),le.convert(qe),fe)}finally{const Ae=O!==null?_.get(O).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,H,V,fe,xe,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we)if(U>=0&&U<=y.width-H&&X>=0&&X<=y.height-V){Te.bindFramebuffer(P.FRAMEBUFFER,we);const Ae=y.textures[pe],Be=Ae.format,qe=Ae.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ut.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(U,X,H,V,le.convert(Be),le.convert(qe),0);const at=O!==null?_.get(O).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,at);const Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wd(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Re),P.deleteSync(Mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const H=Math.pow(2,-X),V=Math.floor(y.image.width*H),fe=Math.floor(y.image.height*H),xe=U!==null?U.x:0,pe=U!==null?U.y:0;N.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,xe,pe,V,fe),Te.unbindTexture()};const ad=P.createFramebuffer(),od=P.createFramebuffer();this.copyTextureToTexture=function(y,U,X=null,H=null,V=0,fe=0){let xe,pe,we,Ae,Be,qe,Re,at,Mt;const vt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(X!==null)xe=X.max.x-X.min.x,pe=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Be=X.min.y,qe=X.isBox3?X.min.z:0;else{const Ot=Math.pow(2,-V);xe=Math.floor(vt.width*Ot),pe=Math.floor(vt.height*Ot),y.isDataArrayTexture?we=vt.depth:y.isData3DTexture?we=Math.floor(vt.depth*Ot):we=1,Ae=0,Be=0,qe=0}H!==null?(Re=H.x,at=H.y,Mt=H.z):(Re=0,at=0,Mt=0);const ot=le.convert(U.format),Bt=le.convert(U.type);let Ee;U.isData3DTexture?(N.setTexture3D(U,0),Ee=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),Ee=P.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),_n=P.getParameter(P.UNPACK_SKIP_ROWS),oi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qe);const bi=y.isDataArrayTexture||y.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ot=_.get(y),Kn=_.get(U),Dt=_.get(Ot.__renderTarget),Yn=_.get(Kn.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let wi=0;wi<we;wi++)bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,V,qe+wi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(U).__webglTexture,fe,Mt+wi)),P.blitFramebuffer(Ae,Be,xe,pe,Re,at,xe,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||_.has(y)){const Ot=_.get(y),Kn=_.get(U);Te.bindFramebuffer(P.READ_FRAMEBUFFER,ad),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,od);for(let Dt=0;Dt<we;Dt++)bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,V,qe+Dt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,V),ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kn.__webglTexture,fe,Mt+Dt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kn.__webglTexture,fe),V!==0?P.blitFramebuffer(Ae,Be,xe,pe,Re,at,xe,pe,P.COLOR_BUFFER_BIT,P.NEAREST):ht?P.copyTexSubImage3D(Ee,fe,Re,at,Mt+Dt,Ae,Be,xe,pe):P.copyTexSubImage2D(Ee,fe,Re,at,Ae,Be,xe,pe);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ee,fe,Re,at,Mt,xe,pe,we,ot,Bt,vt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,fe,Re,at,Mt,xe,pe,we,ot,vt.data):P.texSubImage3D(Ee,fe,Re,at,Mt,xe,pe,we,ot,Bt,vt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Re,at,xe,pe,ot,Bt,vt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Re,at,vt.width,vt.height,ot,vt.data):P.texSubImage2D(P.TEXTURE_2D,fe,Re,at,xe,pe,ot,Bt,vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,_n),P.pixelStorei(P.UNPACK_SKIP_IMAGES,oi),fe===0&&U.generateMipmaps&&P.generateMipmap(Ee),Te.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&N.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?N.setTextureCube(y,0):y.isData3DTexture?N.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?N.setTexture2DArray(y,0):N.setTexture2D(y,0),Te.unbindTexture()},this.resetState=function(){C=0,F=0,O=null,Te.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function Rc(s,e){if(e===Id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yo||e===bh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===yo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function S_(s){const e=new Map,t=new Map,n=s.clone();return Yh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yh(s.children[n],e.children[n],t)}class y_ extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new E_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new Pc(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new B_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=As.extractUrlBase(e);a=As.resolveURL(c,this.path)}else a=As.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jh){try{a[$e.KHR_BINARY_GLTF]=new z_(e)}catch(d){i&&i(d);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Q_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:a[d]=new w_;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[d]=new V_(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[d]=new H_;break;case $e.KHR_MESH_QUANTIZATION:a[d]=new G_;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function M_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function wt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class b_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vh(h),c.distance=d;break;case"spot":c=new hf(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Sn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class w_{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class T_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class E_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(i)}}class A_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class C_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class R_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,kt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class P_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class L_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],jt),Promise.all(i)}}class I_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class D_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],jt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,kt)),Promise.all(i)}}class N_{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class U_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class F_{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class O_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class k_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Pc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class B_{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const x=new Ge,m=new D,p=new $n,S=new D(1,1,1),b=new Iu(g.geometry,g.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,x.compose(m,p,S));for(const M in l)if(M==="_COLOR_0"){const A=l[M];b.instanceColor=new bo(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);_t.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const jh="glTF",gs=12,Lc={JSON:1313821514,BIN:5130562};class z_{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gs,r=new DataView(e,gs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Lc.JSON){const c=new Uint8Array(e,gs+a,o);this.content=n.decode(c)}else if(l===Lc.BIN){const c=gs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class V_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=Ao[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Ao[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Xi[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(f)},o,c,jt,u)})})}}class H_{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class G_{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Zh extends ns{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,x=g-c,m=-2*f+3*u,p=f-u,S=1-m,b=p-u+d;for(let M=0;M!==o;M++){const A=a[x+M+o],E=a[x+M+l]*h,R=a[g+M+o],v=a[g+M]*h;r[M]=S*A+b*E+m*R+p*v}return r}}const W_=new $n;class X_ extends Zh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return W_.fromArray(r).normalize().toArray(r),r}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ic={9728:At,9729:Ct,9984:gh,9985:vr,9986:bs,9987:zn},Dc={33071:bn,33648:Tr,10497:Mn},Aa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ao={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},q_={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ls},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new J({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),s.DefaultMaterial}function pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function K_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Y_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j_(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ra(t.attributes):e=s.indices+":"+Ra(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ra(s.targets[n]);return e}function Ra(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Co(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const J_=new Ge;class Q_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new of(this.options.manager):this.textureLoader=new ff(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return pi(r,o,i),Sn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(As.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Aa[i.type],o=Xi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Yt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Aa[i.type],c=Xi[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==d){const p=Math.floor(u/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(S);b||(x=new c(o,p*f,i.count*f/h),b=new Tu(x,f/h),t.cache.add(S,b)),m=new qo(b,l,u%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),m=new Yt(x,l,g);if(i.sparse!==void 0){const p=Aa.SCALAR,S=Xi[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new S(a[1],b,i.sparse.count*p),E=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,v=A.length;R<v;R++){const w=A[R];if(m.setX(w,E[R*l]),l>=2&&m.setY(w,E[R*l+1]),l>=3&&m.setZ(w,E[R*l+2]),l>=4&&m.setW(w,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ic[u.magFilter]||Ct,h.minFilter=Ic[u.minFilter]||zn,h.wrapS=Dc[u.wrapS]||Mn,h.wrapT=Dc[u.wrapT]||Mn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==At&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Rt(x);m.needsUpdate=!0,u(m)}),t.load(As.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Sn(d,a),d.userData.mimeType=a.mimeType||Z_(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Dh,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ih,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return J}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const d=i[$e.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],jt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,kt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dn);const h=r.alphaMode||Ca.OPAQUE;if(h===Ca.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ca.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==lt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==lt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==lt){const d=r.emissiveFactor;o.emissive=new Ne().setRGB(d[0],d[1],d[2],jt)}return r.emissiveTexture!==void 0&&a!==lt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Sn(d,r),t.associations.set(d,{materials:e}),r.extensions&&pi(i,d,r),d})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=j_(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Nc(new Wt,c,t),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?$_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=a[f];let p;const S=c[f];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ru(x,S):new q(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?p.geometry=Rc(p.geometry,bh):m.mode===sn.TRIANGLE_FAN&&(p.geometry=Rc(p.geometry,yo));else if(m.mode===sn.LINES)p=new Fu(x,S);else if(m.mode===sn.LINE_STRIP)p=new jo(x,S);else if(m.mode===sn.LINE_LOOP)p=new Ou(x,S);else if(m.mode===sn.POINTS)p=new ku(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Y_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Sn(p,r),m.extensions&&pi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&pi(i,d[0],r),d[0];const u=new dt;r.extensions&&pi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Oe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ge;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ko(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],x=d[3],m=d[4],p=[];for(let b=0,M=u.length;b<M;b++){const A=u[b],E=f[b],R=g[b],v=x[b],w=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const G=n._createAnimationTracks(A,E,R,v,w);if(G)for(let C=0;C<G.length;C++)p.push(G[C])}const S=new Qu(r,void 0,p);return Sn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,J_)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Lh:c.length>1?h=new dt:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Sn(h,r),r.extensions&&pi(n,h,r),r.matrix!==void 0){const d=new Ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),Sn(r,n),n.extensions&&pi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(S_(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof An||u instanceof Rt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ni[r.path]===ni.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(ni[r.path]){case ni.weights:c=Zi;break;case ni.rotation:c=Ji;break;case ni.translation:case ni.scale:c=Qi;break;default:switch(n.itemSize){case 1:c=Zi;break;case 2:case 3:default:c=Qi;break}break}const h=i.interpolation!==void 0?q_[i.interpolation]:Is,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+ni[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Co(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ji?X_:Zh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ex(s,e,t){const n=e.attributes,i=new Gt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=Co(Xi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const x=Co(Xi[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Nc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Ao[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Sn(s,e),ex(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?K_(s,e.targets,t):s})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var es;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(es||(es={}));class Pa extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const tx=s=>{var e,t;return s!=null&&s.androidBridge?"android":!((t=(e=s==null?void 0:s.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},nx=s=>{const e=s.CapacitorCustomPlatform||null,t=s.Capacitor||{},n=t.Plugins=t.Plugins||{},i=()=>e!==null?e.name:tx(s),r=()=>i()!=="web",a=d=>{const u=c.get(d);return!!(u!=null&&u.platforms.has(i())||o(d))},o=d=>{var u;return(u=t.PluginHeaders)===null||u===void 0?void 0:u.find(f=>f.name===d)},l=d=>s.console.error(d),c=new Map,h=(d,u={})=>{const f=c.get(d);if(f)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),f.proxy;const g=i(),x=o(d);let m;const p=async()=>(!m&&g in u?m=typeof u[g]=="function"?m=await u[g]():m=u[g]:e!==null&&!m&&"web"in u&&(m=typeof u.web=="function"?m=await u.web():m=u.web),m),S=(v,w)=>{var G,C;if(x){const F=x==null?void 0:x.methods.find(O=>w===O.name);if(F)return F.rtype==="promise"?O=>t.nativePromise(d,w.toString(),O):(O,B)=>t.nativeCallback(d,w.toString(),O,B);if(v)return(G=v[w])===null||G===void 0?void 0:G.bind(v)}else{if(v)return(C=v[w])===null||C===void 0?void 0:C.bind(v);throw new Pa(`"${d}" plugin is not implemented on ${g}`,es.Unimplemented)}},b=v=>{let w;const G=(...C)=>{const F=p().then(O=>{const B=S(O,v);if(B){const k=B(...C);return w=k==null?void 0:k.remove,k}else throw new Pa(`"${d}.${v}()" is not implemented on ${g}`,es.Unimplemented)});return v==="addListener"&&(F.remove=async()=>w()),F};return G.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(G,"name",{value:v,writable:!1,configurable:!1}),G},M=b("addListener"),A=b("removeListener"),E=(v,w)=>{const G=M({eventName:v},w),C=async()=>{const O=await G;A({eventName:v,callbackId:O},w)},F=new Promise(O=>G.then(()=>O({remove:C})));return F.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},F},R=new Proxy({},{get(v,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?E:M;case"removeListener":return A;default:return b(w)}}});return n[d]=R,c.set(d,{name:d,proxy:R,platforms:new Set([...Object.keys(u),...x?[g]:[]])}),R};return t.convertFileSrc||(t.convertFileSrc=d=>d),t.getPlatform=i,t.handleError=l,t.isNativePlatform=r,t.isPluginAvailable=a,t.registerPlugin=h,t.Exception=Pa,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},ix=s=>s.Capacitor=nx(s),Ir=ix(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Os=Ir.registerPlugin;class nl{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const i=this.listeners[e];if(!i){if(n){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}i.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new Ir.Exception(e,es.Unimplemented)}unavailable(e="not available"){return new Ir.Exception(e,es.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const Uc=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Fc=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class sx extends nl{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[i,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Fc(i).trim(),r=Fc(r).trim(),t[i]=r}),t}async setCookie(e){try{const t=Uc(e.key),n=Uc(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${i}; path=${r}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Os("CapacitorCookies",{web:()=>new sx});const rx=async s=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const i=n.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>t(i),n.readAsDataURL(s)}),ax=(s={})=>{const e=Object.keys(s);return Object.keys(s).map(i=>i.toLocaleLowerCase()).reduce((i,r,a)=>(i[r]=s[e[a]],i),{})},ox=(s,e=!0)=>s?Object.entries(s).reduce((n,i)=>{const[r,a]=i;let o,l;return Array.isArray(a)?(l="",a.forEach(c=>{o=e?encodeURIComponent(c):c,l+=`${r}=${o}&`}),l.slice(0,-1)):(o=e?encodeURIComponent(a):a,l=`${r}=${o}`),`${n}&${l}`},"").substr(1):null,lx=(s,e={})=>{const t=Object.assign({method:s.method||"GET",headers:s.headers},e),i=ax(s.headers)["content-type"]||"";if(typeof s.data=="string")t.body=s.data;else if(i.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[a,o]of Object.entries(s.data||{}))r.set(a,o);t.body=r.toString()}else if(i.includes("multipart/form-data")||s.data instanceof FormData){const r=new FormData;if(s.data instanceof FormData)s.data.forEach((o,l)=>{r.append(l,o)});else for(const o of Object.keys(s.data))r.append(o,s.data[o]);t.body=r;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof s.data=="object")&&(t.body=JSON.stringify(s.data));return t};class cx extends nl{async request(e){const t=lx(e,e.webFetchExtra),n=ox(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,r=await fetch(i,t),a=r.headers.get("content-type")||"";let{responseType:o="text"}=r.ok?e:{};a.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await r.blob(),l=await rx(c);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const h={};return r.headers.forEach((d,u)=>{h[u]=d}),{data:l,headers:h,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Os("CapacitorHttp",{web:()=>new cx});var Oc;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})(Oc||(Oc={}));var kc;(function(s){s.StatusBar="StatusBar",s.NavigationBar="NavigationBar"})(kc||(kc={}));class hx extends nl{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Os("SystemBars",{web:()=>new hx});const dx="modulepreload",ux=function(s){return"/Need4SpeedKarachi/"+s},Bc={},Jh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=ux(l),l in Bc)return;Bc[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":dx,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},ii=Os("CapacitorInAppPurchase",{web:()=>Jh(()=>import("./web-CD_MAoA_.js"),[]).then(s=>new s.CapacitorInAppPurchaseWeb)});var zc;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(zc||(zc={}));var Vc;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(Vc||(Vc={}));var Hc;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(Hc||(Hc={}));var Gc;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})(Gc||(Gc={}));var Vi;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})(Vi||(Vi={}));var Wc;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(Wc||(Wc={}));var vi;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(vi||(vi={}));var Dr;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})(Dr||(Dr={}));var Xc;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(Xc||(Xc={}));const Ut=Os("AdMob",{web:()=>Jh(()=>import("./web-B6l4z4gU.js"),[]).then(s=>new s.AdMobWeb)}),fx="/Need4SpeedKarachi/assets/cover-art-CbKw3loD.svg",Nr="/Need4SpeedKarachi/",ue=s=>`${Nr}${s.replace(/^\//,"")}`,px=s=>s.startsWith(Nr)?`/${s.slice(Nr.length)}`:s,Ro=["localhost","127.0.0.1"];"serviceWorker"in navigator&&Ro.includes(window.location.hostname)?window.addEventListener("load",()=>{navigator.serviceWorker.getRegistrations().then(s=>s.forEach(e=>e.unregister())).catch(()=>{})}):"serviceWorker"in navigator&&!Ro.includes(window.location.hostname)&&window.addEventListener("load",()=>{navigator.serviceWorker.register(ue("/sw.js"),{scope:Nr}).then(s=>{s.update().catch(()=>{})}).catch(()=>{})});const Cs=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("touch-device",Cs);Cs&&(document.addEventListener("contextmenu",s=>s.preventDefault()),document.addEventListener("selectstart",s=>s.preventDefault()));const mr=["SEA VIEW","SHAHRAH-E-FAISAL","CLIFTON","II CHUNDRIGAR","TOWER","M9 BYPASS","SADDAR","DHA"],_s=[-6.5,0,6.5],mi=.19,Po=["bike","hatchback","rickshaw","sedan","bike","tanker","suv","rickshaw","bus","bike","pickup","prado","truck"],mx=[...new Set(Po)],St=Ir.getPlatform()==="android",gx="ca-app-pub-1797269464593835/8753822751",_x="ca-app-pub-1797269464593835/9624418192",xx=3,vx="ca-app-pub-3940256099942544/1033173712",Sx="ca-app-pub-3940256099942544/5224354917",yx=4,Mx=4,bx=100,wx=25,Tx=7,qc=75,$c=[{type:"near_miss",label:"Near Miss Artist",desc:"Pull off {target} near misses in one run",targets:[5,10,20]},{type:"score",label:"High Scorer",desc:"Reach a score of {target}",targets:[2e3,5e3,1e4]},{type:"distance",label:"Distance Runner",desc:"Drive {target}m in one run",targets:[500,1e3,2e3]},{type:"combo_max",label:"Combo King",desc:"Hit x{target} combo multiplier",targets:[2,3,4]}],Kc=420,Yc=[{type:"boss_clear",label:"Boss Hunter",desc:"Clear {target} boss races this week",targets:[1,2,3]},{type:"drift",label:"Karachi Slider",desc:"Score {target} drift points this week",targets:[1200,2500,5e3]},{type:"score",label:"City Legend",desc:"Bank {target} score in one run",targets:[4e3,8e3,14e3]}],Hi=[{key:"classic",label:"Classic",color:null,unlock:"Owned"},{key:"taxi-stripe",label:"Taxi Stripe",color:16436245,unlock:"Stage 2",stage:2},{key:"sea-neon",label:"Sea Neon",color:2282478,unlock:"Stage 4",stage:4},{key:"midnight-racer",label:"Midnight Racer",color:11032055,unlock:"Score 5000",score:5e3},{key:"boss-flame",label:"Boss Flame",color:15680580,unlock:"Boss clear",bossClears:1},{key:"legend-gold",label:"Legend Gold",color:16498468,unlock:"7-day streak",loginStreak:7}],Ex=typeof window<"u"&&Ro.includes(window.location.hostname),Ax=!1,gr=Ex&&!St,jc=1.9,Qh={engine:0,handling:0,tank:0,nitro:0,armor:0},xs=5,vs={player:{"hatchback-small":ue("/models/player/player_hatchback.glb"),hatchback:ue("/models/player/player_hatchback.glb"),"sedan-basic":ue("/models/player/player_sedan.glb"),"sedan-sport":ue("/models/player/player_sedan.glb"),suv:ue("/models/player/player_suv.glb"),prado:ue("/models/player/player_suv.glb"),truck:ue("/models/player/player_truck.glb"),sports:ue("/models/premium/premium_red_exotic.glb"),supercar:ue("/models/premium/premium_hyper_gt.glb"),"premium-italian-v12":ue("/models/premium/premium_italian_v12.glb"),"premium-red-exotic":ue("/models/premium/premium_red_exotic.glb"),"premium-hyper-gt":ue("/models/premium/premium_hyper_gt.glb")},traffic:{hatchback:ue("/models/traffic/traffic_real_sedan.glb"),sedan:ue("/models/traffic/traffic_real_sedan.glb"),suv:ue("/models/traffic/traffic_real_suv.glb"),prado:ue("/models/traffic/traffic_real_suv.glb"),truck:ue("/models/traffic/traffic_truck.glb"),bike:ue("/models/traffic/traffic_bike_cd70.mobile.glb"),rickshaw:ue("/models/traffic/traffic_rickshaw_green.mobile.glb"),tanker:ue("/models/traffic/traffic_water_tanker_real.mobile.glb"),pickup:ue("/models/traffic/traffic_bolan_loader.glb"),bus:ue("/models/traffic/traffic_w11_bus.glb")},police:ue("/models/police/police_car.glb")},Ss={bike:{width:1,length:2.2,height:2.1},rickshaw:{width:1.8,length:2.6,height:1.7},tanker:{width:2.8,length:9.4,height:3.5},pickup:{width:2.4,length:4.6,height:1.95},bus:{width:2.6,length:12,height:3}},Cx={"/models/player/player_hatchback.glb":0,"/models/player/player_sedan.glb":Math.PI,"/models/player/player_suv.glb":Math.PI,"/models/player/traffic_sedan.glb":Math.PI,"/models/player/police_car.glb":Math.PI,"/models/traffic/traffic_real_sedan.glb":Math.PI,"/models/traffic/traffic_real_suv.glb":Math.PI,"/models/police/police_car.glb":Math.PI,"/models/premium/premium_italian_v12.glb":Math.PI,"/models/premium/premium_red_exotic.glb":Math.PI,"/models/premium/premium_hyper_gt.glb":Math.PI,"/models/player/player_mehran.glb":Math.PI,"/models/player/player_cultus.glb":Math.PI,"/models/player/player_city.glb":Math.PI,"/models/player/player_civic_rs.glb":Math.PI,"/models/player/player_brv.glb":Math.PI,"/models/player/player_landcruiser.glb":Math.PI,"/models/player/player_truck.glb":Math.PI,"/models/player/player_supra.glb":Math.PI,"/models/player/player_hyper.glb":Math.PI,"/models/traffic/traffic_hatchback.glb":Math.PI,"/models/traffic/traffic_sedan.glb":Math.PI,"/models/traffic/traffic_suv.glb":Math.PI,"/models/traffic/traffic_landcruiser.glb":Math.PI,"/models/traffic/traffic_truck.glb":Math.PI,"/models/traffic/traffic_bike_cd70.glb":Math.PI/2,"/models/traffic/traffic_bike_cd70.mobile.glb":Math.PI/2,"/models/traffic/traffic_rickshaw_green.glb":Math.PI,"/models/traffic/traffic_rickshaw_green.mobile.glb":Math.PI,"/models/traffic/traffic_water_tanker_real.glb":Math.PI,"/models/traffic/traffic_water_tanker_real.mobile.glb":Math.PI,"/models/traffic/traffic_water_tanker.glb":Math.PI,"/models/traffic/traffic_bolan_loader.glb":Math.PI,"/models/traffic/traffic_w11_bus.glb":Math.PI,"/models/police/police_vigo.glb":Math.PI},Zc={"sea-view-sunset":{palm:ue("/models/env/seaview/palm_date.glb"),barrier:ue("/models/env/seaview/sea_barrier.glb"),umbrella:ue("/models/env/seaview/beach_umbrella.glb"),copilotA:ue("/models/env/seaview/copilot_a.glb"),copilotB:ue("/models/env/seaview/copilot_b.glb")},"shahrah-e-faisal":{billboard:ue("/models/env/shahrah/billboard_large.glb"),cellTower:ue("/models/env/shahrah/cell_tower.glb"),copilotA:ue("/models/env/shahrah/copilot_a.glb")},"korangi-crossing":{factory:ue("/models/env/korangi/factory_warehouse.glb"),smokestack:ue("/models/env/korangi/smokestack.glb"),container:ue("/models/env/korangi/containers.glb"),copilotA:ue("/models/env/korangi/copilot_a.glb")},"ii-chundrigar-canyon":{towerA:ue("/models/env/chundrigar/glass_tower_a.glb"),towerB:ue("/models/env/chundrigar/glass_tower_b.glb"),hblPlaza:ue("/models/env/chundrigar/hbl_plaza.glb")},"tower-burns-road":{facade:ue("/models/env/tower/colonial_facade.glb"),chaiCart:ue("/models/env/tower/chai_cart.glb"),biryaniCart:ue("/models/env/tower/biryani_cart.glb"),signboard:ue("/models/env/tower/shop_signboard.glb"),oldGate:ue("/models/env/tower/old_gate.glb"),copilotA:ue("/models/env/tower/copilot_a.glb"),copilotB:ue("/models/env/tower/copilot_b.glb")},"lyari-expressway":{column:ue("/models/env/lyari/road_column.glb"),lamp:ue("/models/env/lyari/highway_lamp.glb"),neonBillboard:ue("/models/env/lyari/neon_billboard.glb"),copilotA:ue("/models/env/lyari/copilot_a.glb")},"dha-boulevards":{palm:ue("/models/env/dha/palm_tall.glb"),villa:ue("/models/env/dha/villa.glb"),bougainvillea:ue("/models/env/dha/bougainvillea.glb"),sectorSign:ue("/models/env/dha/sector_sign.glb"),copilotA:ue("/models/env/dha/copilot_a.glb"),copilotB:ue("/models/env/dha/copilot_b.glb")},"m9-northern-bypass":{dhaba:ue("/models/env/m9/dhaba.glb"),sign:ue("/models/env/m9/highway_sign.glb"),mileMarker:ue("/models/env/m9/mile_marker.glb"),jerseyWall:ue("/models/env/m9/jersey_wall.glb"),copilotA:ue("/models/env/m9/copilot_a.glb")},"sea-view-night":{palm:ue("/models/env/seaview/palm_date.glb"),copilotA:ue("/models/env/seaview/copilot_a.glb")},"karachi-port-run":{container:ue("/models/env/korangi/containers.glb"),copilotA:ue("/models/env/korangi/copilot_a.glb")}},La={low:[ue("/models/env/city/building-a.glb"),ue("/models/env/city/building-c.glb"),ue("/models/env/city/building-e.glb"),ue("/models/env/city/building-h.glb"),ue("/models/env/city/low-detail-building-wide-b.glb")],high:[ue("/models/env/city/building-j.glb"),ue("/models/env/city/building-skyscraper-c.glb"),ue("/models/env/city/building-skyscraper-d.glb")]};function Rx(s){return Cx[px(s)]??Math.PI}function Px(s){const e=String((s==null?void 0:s.message)||s||"").toLowerCase();return e.includes("publisher misconfiguration")||e.includes("no form(s) configured")||e.includes("failed to read publisher")}function Jc(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`n4sl-${Date.now()}-${Math.random().toString(16).slice(2)}`}const Qc=[{key:"engine",label:"Engine",baseCost:140,stepCost:110},{key:"handling",label:"Handling",baseCost:120,stepCost:90},{key:"tank",label:"Fuel Tank",baseCost:110,stepCost:90},{key:"nitro",label:"Nitro",baseCost:130,stepCost:100},{key:"armor",label:"Armor",baseCost:125,stepCost:95}],eh=[{key:"sea-view-sunset",name:"Sea View Sunset",zone:"Clifton Coastline",difficulty:"Starter",vibe:"Golden hour by the Arabian Sea",accent:"#fb923c",sky:16757626,fog:16767416,ground:13152377,fogNear:90,fogFar:310,sunPosition:[-32,55,-420],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"shahrah-e-faisal",name:"Shahrah-e-Faisal",zone:"Airport Corridor",difficulty:"Sprint",vibe:"Six-lane neon boulevard",accent:"#22d3ee",sky:9750015,fog:11130623,ground:7305858,fogNear:80,fogFar:260,sunPosition:[-24,80,-440],route:"M 18 98 C 28 74, 42 62, 54 62 C 72 62, 82 72, 92 58 C 102 44, 104 36, 108 20",turns:[{start:.14,end:.28,shift:3.2},{start:.34,end:.52,shift:-3.8},{start:.62,end:.82,shift:2.4}]},{key:"korangi-crossing",name:"Korangi Crossing",zone:"Industrial Belt",difficulty:"Fast",vibe:"Dust haze and tanker convoys",accent:"#facc15",sky:13082730,fog:14266489,ground:9271882,fogNear:70,fogFar:240,sunPosition:[-26,65,-420],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]},{key:"ii-chundrigar-canyon",name:"II Chundrigar Canyon",zone:"Banking District",difficulty:"Technical",vibe:"High-rise glass canyon",accent:"#60a5fa",sky:5204620,fog:7243683,ground:4147030,fogNear:64,fogFar:220,sunPosition:[-14,95,-460],route:"M 18 100 C 30 82, 42 74, 54 62 C 66 50, 76 54, 88 40 C 98 28, 102 26, 108 18",turns:[{start:.16,end:.28,shift:-2.8},{start:.34,end:.5,shift:2.6},{start:.58,end:.76,shift:-4.4}]},{key:"tower-burns-road",name:"Tower & Burns Road",zone:"Old Karachi",difficulty:"Dense",vibe:"Colonial facades and food carts",accent:"#f97316",sky:12095066,fog:13212262,ground:9202238,fogNear:60,fogFar:200,sunPosition:[-18,60,-400],route:"M 18 98 C 26 90, 32 84, 40 78 C 52 68, 60 62, 64 50 C 68 38, 82 38, 90 28 C 98 18, 100 20, 108 16",turns:[{start:.1,end:.24,shift:2.1},{start:.28,end:.44,shift:-3.2},{start:.5,end:.66,shift:3.8},{start:.72,end:.9,shift:-2.6}]},{key:"lyari-expressway",name:"Lyari Expressway",zone:"Elevated River Run",difficulty:"Hard",vibe:"Neon night above the Lyari river",accent:"#a855f7",sky:1843760,fog:2765122,ground:2239030,fogNear:56,fogFar:200,sunPosition:[-10,65,-420],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]},{key:"dha-boulevards",name:"DHA Boulevards",zone:"Defence Phase 6",difficulty:"Hard",vibe:"Palm-lined late-night flex",accent:"#34d399",sky:922658,fog:1712691,ground:2042167,fogNear:60,fogFar:220,sunPosition:[-8,75,-440],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"m9-northern-bypass",name:"M9 Northern Bypass",zone:"Highway Storm",difficulty:"Boss",vibe:"Long-haul trucks and dust storm",accent:"#ef4444",sky:7034168,fog:9072714,ground:6048302,fogNear:50,fogFar:180,sunPosition:[-6,60,-400],route:"M 18 98 C 28 74, 42 62, 54 62 C 72 62, 82 72, 92 58 C 102 44, 104 36, 108 20",turns:[{start:.14,end:.28,shift:3.2},{start:.34,end:.52,shift:-3.8},{start:.62,end:.82,shift:2.4}]},{key:"sea-view-night",name:"Sea View After Dark",zone:"Clifton Night",difficulty:"Endless",vibe:"Moonlit coast with neon palms",accent:"#22d3ee",sky:662062,fog:1057850,ground:1844792,fogNear:50,fogFar:200,sunPosition:[-32,85,-440],route:"M 18 96 C 34 72, 46 62, 62 54 S 94 42, 108 26",turns:[{start:.18,end:.34,shift:-2.6},{start:.42,end:.6,shift:1.8}]},{key:"karachi-port-run",name:"Karachi Port Run",zone:"Container Yard",difficulty:"Hard",vibe:"Shipping containers and gantry cranes",accent:"#f59e0b",sky:5924984,fog:7043208,ground:4869976,fogNear:56,fogFar:220,sunPosition:[-18,80,-440],route:"M 18 100 C 42 84, 58 78, 70 62 S 92 34, 108 18",turns:[{start:.2,end:.38,shift:4.2},{start:.48,end:.72,shift:-2.2}]}],Ft=[{key:"hatchback-small",label:"KM 800",body:14212579,roof:1054759,glow:16498468,trim:1120295,headlight:16708551,taillight:16557477,topSpeed:160,accel:42,grip:1.08,fuelDrain:.72,profile:{width:2.85,length:5.05,height:1.22,cabinWidth:2.18,cabinLength:2.36,cabinHeight:1.15}},{key:"hatchback",label:"KM Sprint",body:15987958,roof:1450549,glow:3462041,trim:1450549,headlight:15398655,taillight:16557477,topSpeed:172,accel:48,grip:1.12,fuelDrain:.76,profile:{width:2.95,length:5.35,height:1.18,cabinWidth:2.28,cabinLength:2.55,cabinHeight:1.1}},{key:"sedan-basic",label:"KM City Pro",body:13972266,roof:1450549,glow:16096779,trim:1582392,headlight:15398655,taillight:16557477,topSpeed:186,accel:58,grip:1.06,fuelDrain:.84,profile:{width:3.25,length:6.05,height:1.04,cabinWidth:2.18,cabinLength:2.92,cabinHeight:.9}},{key:"sedan-sport",label:"KM Civik RS",body:13056815,roof:1054759,glow:6333946,trim:724760,headlight:14677247,taillight:16478597,topSpeed:198,accel:68,grip:1.1,fuelDrain:.9,profile:{width:3.48,length:6.58,height:.98,cabinWidth:2.26,cabinLength:3.34,cabinHeight:.84,hoodLength:1.72,rearLength:1.5,cabinOffset:-.18,roofBias:.1,wheelRadius:.6,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"suv",label:"KM Crossroad",body:14477815,roof:2042167,glow:2278750,trim:2042167,headlight:15398655,taillight:16557477,topSpeed:190,accel:54,grip:.98,fuelDrain:.98,profile:{width:3.45,length:6.5,height:1.42,cabinWidth:2.6,cabinLength:3.2,cabinHeight:1.28,hoodLength:1.45,rearLength:1.4,cabinOffset:-.1,wheelRadius:.68,wheelInset:.45}},{key:"prado",label:"KM Cruiser ZX",body:15857145,roof:1120295,glow:16096779,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:196,accel:52,grip:1,fuelDrain:1.04,profile:{width:3.6,length:6.8,height:1.5,cabinWidth:2.72,cabinLength:3.45,cabinHeight:1.34,hoodLength:1.5,rearLength:1.48,cabinOffset:-.06,wheelRadius:.72,wheelInset:.45}},{key:"truck",label:"KM Hauler",body:2450411,roof:988970,glow:16498468,trim:1120295,headlight:16317180,taillight:16478597,topSpeed:175,accel:38,grip:.92,fuelDrain:1.1,profile:{width:4.25,length:9.4,height:1.8,cabinWidth:2.8,cabinLength:2.7,cabinHeight:1.45,hoodLength:1.05,rearLength:3.8,cabinOffset:1.5,wheelRadius:.82,wheelInset:.44}},{key:"sports",label:"KM Stinger",body:15680580,roof:329485,glow:16347926,trim:329485,headlight:14742270,taillight:16478597,topSpeed:228,accel:92,grip:1.16,fuelDrain:1.02,profile:{width:3.5,length:6.1,height:.84,cabinWidth:2.1,cabinLength:2.45,cabinHeight:.68,hoodLength:2,rearLength:1.35,cabinOffset:-.15,roofBias:.18,wheelRadius:.64,wheelInset:.46,splitter:!0,spoiler:!0}},{key:"supercar",label:"KM Stallion",body:16096779,roof:132631,glow:16478597,trim:132631,headlight:14742270,taillight:16478597,topSpeed:248,accel:108,grip:1.22,fuelDrain:1.08,profile:{width:3.62,length:6.25,height:.78,cabinWidth:2.04,cabinLength:2.3,cabinHeight:.62,hoodLength:2.08,rearLength:1.42,cabinOffset:-.2,roofBias:.22,wheelRadius:.66,wheelInset:.47,splitter:!0,spoiler:!0}}],Fs=[{key:"premium-italian-v12",label:"Italian V12",badge:"Premium",subtitle:"Premium Hyper Coupe",productId:"n4sk_premium_italian_v12",body:16436245,roof:1120295,glow:16347926,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:294,accel:122,grip:1.24,fuelDrain:.96,premium:!0,profile:{width:3.55,length:6.65,height:.92,cabinWidth:2.24,cabinLength:3.02,cabinHeight:.76,hoodLength:1.9,rearLength:1.2,cabinOffset:-.12,splitter:!0,spoiler:!0}},{key:"premium-red-exotic",label:"Red Exotic",badge:"Featured",subtitle:"Premium Mid-Engine GT",productId:"n4sk_premium_red_exotic",body:15680580,roof:988970,glow:16007006,trim:1120295,headlight:15398655,taillight:16478597,topSpeed:302,accel:128,grip:1.26,fuelDrain:.98,premium:!0,profile:{width:3.58,length:6.58,height:.9,cabinWidth:2.18,cabinLength:2.88,cabinHeight:.74,hoodLength:1.72,rearLength:1.34,cabinOffset:-.18,splitter:!0,spoiler:!0}},{key:"premium-hyper-gt",label:"Hyper GT",badge:"Top Tier",subtitle:"Premium Ultimate Series",productId:"n4sk_premium_hyper_gt",body:6333946,roof:725536,glow:2282478,trim:988970,headlight:15398655,taillight:16557477,topSpeed:316,accel:134,grip:1.3,fuelDrain:1,premium:!0,profile:{width:3.62,length:6.82,height:.88,cabinWidth:2.16,cabinLength:2.96,cabinHeight:.72,hoodLength:1.84,rearLength:1.36,cabinOffset:-.08,splitter:!0,spoiler:!0}}],Vr=[{key:"ad-free",label:"Ad-Free Upgrade",badge:"Upgrade",subtitle:"Remove banner and interstitial ads",productId:"n4sk_ad_free",kind:"ad_free"},{key:"credits-1000",label:"1000 Credits Pack",badge:"Booster",subtitle:"Instant garage credits bonus",productId:"n4sk_credits_1000",kind:"credits",credits:1e3},{key:"credits-5000",label:"5000 Credits Pack",badge:"Best Value",subtitle:"Large one-time credits bonus",productId:"n4sk_credits_5000",kind:"credits",credits:5e3}],Lx=[...Ft,...Fs],Ix=Object.fromEntries(Lx.map(s=>[s.key,s])),Lo=Object.fromEntries(Fs.map(s=>[s.key,s])),ed=Object.fromEntries(Vr.map(s=>[s.key,s])),Dx=Object.fromEntries(Vr.map(s=>[s.productId,s])),_r=[...Fs.map(s=>s.productId),...Vr.map(s=>s.productId)],Io={"hatchback-small":0,hatchback:1,"sedan-basic":2,"sedan-sport":3,suv:4,prado:5,truck:6,sports:7,supercar:8},th=["clean-finish","fuel-save","near-miss","score-target"];function Nx(s){return Ix[s]??Ft[0]}function Ux(s){return eh[s%eh.length]}function nh(s,e=0){const t=Oe.clamp(e,0,100),n=18+90*(t/100),i=100-78*(t/100);return`
    <svg viewBox="0 0 126 126" class="track-svg" aria-hidden="true">
      <defs>
        <linearGradient id="track-grad-${s.key}" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${s.accent}" stop-opacity="0.65" />
          <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="106" height="106" rx="22" fill="rgba(7,17,31,0.54)" />
      <path d="${s.route}" fill="none" stroke="rgba(148,163,184,0.35)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${s.route}" fill="none" stroke="url(#track-grad-${s.key})" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="18" cy="96" r="7" fill="#0f172a" stroke="#f8fafc" stroke-width="3" />
      <circle cx="108" cy="18" r="7" fill="${s.accent}" stroke="#fff7ed" stroke-width="3" />
      <circle cx="${n}" cy="${i}" r="5.2" fill="#fef3c7" stroke="${s.accent}" stroke-width="2.4" />
    </svg>
  `}function ih(s,e,t=1){const n=s.attributes.position;for(let i=0;i<n.count;i+=1){const r=n.getX(i),o=n.getY(i)-120,l=e(o);n.setX(i,r*t+l)}n.needsUpdate=!0,s.computeVertexNormals()}function sh(s,e){return s.baseCost+s.stepCost*e}function yi(s){return{...Qh,...s||{}}}function Fx(s,e=Qh){const t=yi(e),n=t.engine,i=t.handling,r=t.tank,a=t.nitro,o=t.armor;return{...s,id:s.key,topSpeed:s.topSpeed+n*8,accel:s.accel+n*6,grip:s.grip+i*.035,fuelDrain:Math.max(.52,s.fuelDrain-r*.05),maxFuel:100+r*12,maxNitro:100+a*14,nitroBoost:28+a*5,maxHealth:100+o*12,damageReduction:o*.07,upgradeLevels:t}}function Ox(s){if(s<=0)return Ft[0];if(s===1)return Ft[1];if(s===2)return Ft[2];if(s===3)return Ft[3];if(s===4)return Ft[4];if(s===5)return Ft[5];if(s===6)return Ft[6];const e=[Ft[7],Ft[8]],t=e[(s-7)%e.length],n=s-7,i=n%5,r=[15680580,16096779,9133302,440020,2278750][i];return{...t,key:`${t.key}-${s+1}`,label:n%2===0?"Expensive Sports Car":"Exotic Hyper GT",body:r,topSpeed:Math.min(t.topSpeed+n*4,320),accel:Math.min(t.accel+n*3,150),grip:Math.min(t.grip+n*.02,1.35)}}const kx=["Sea View Sunset","Shahrah Sprint","Korangi Convoy","II Chundrigar Canyon","Tower Chaos","Lyari Expressway Run","DHA Midnight","M9 Bypass Storm","Sea View After Dark","Karachi Port Run"];function rh(s){const e=Ox(s),t=Ux(s),n=s+1,i=n>1&&n%3===0,r=n+1,a=Math.min(150+s*20,e.topSpeed),o=a/1.6,l=s<=2?1:0,c=Math.max((l?2.2:1.75)-s*(l?.14:.1),.58),h=s===0?999:Math.max((l?108:94)-s*(l?5:7)-(i?12:0),22),d=s===0?99:Math.max((l?2.8:2.35)-s*(l?.1:.08)-(i?.38:0),.54),u=Math.min((l?4.2:5.1)+s*.42,9.2),f=1+s*.08,g=Math.min((l?.16:.2)+s*.085,.72),x=kx[s]??`Stage ${n}`,m=`${t.name} · ${i?"Boss Race":x}`,p=th[s%th.length],S=140+s*55,b=80+s*35;let M;p==="clean-finish"?M={type:p,label:"Finish with at least 50% health",target:50}:p==="fuel-save"?M={type:p,label:"Finish with at least 25% fuel",target:25}:p==="near-miss"?M={type:p,label:`Score ${1+Math.floor(s/3)} near misses`,target:1+Math.floor(s/3)}:M={type:p,label:`Reach score ${1100+s*180}`,target:1100+s*180};const A=i?`Boss Race ${n}: police escalation, roadblocks, and a rival heat target. Mission: ${M.label}.`:s===0?`Stage ${n}: moderate traffic, no police pressure, and a 2 KM opening run. Mission: ${M.label}.`:`Stage ${n}: ${r} KM route with a ${a} KM/H cap. Mission: ${M.label}.`;return{id:n,name:m,stageLabel:x,track:t,lengthKm:r,length:r*1e3,speedCapKmh:a,speedCap:o,trafficBias:c,policeHeatThreshold:h,policeSpawnScale:d,fuelSpawnEvery:u,fuelUseScale:g,scoreBonus:f,mission:M,missionReward:S,bonusReward:b,isBoss:i,tip:A}}const Hr={settings:"need4speedkarachi.settings",progress:"need4speedkarachi.progress"};function Bx(){try{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1,...JSON.parse(localStorage.getItem(Hr.settings)||"{}")}}catch{return{mute:!1,music:!0,sfx:!0,tiltSteer:!1}}}function ys(s){localStorage.setItem(Hr.settings,JSON.stringify(s))}function zx(){try{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0,...JSON.parse(localStorage.getItem(Hr.progress)||"{}")}}catch{return{highestStage:1,bestScore:0,totalDistance:0,credits:300,ownedVehicles:["hatchback-small"],purchasedPremiumCars:[],adFreePurchased:!1,claimedShopProducts:[],selectedVehicleKey:"hatchback-small",upgrades:{},selectedLiveryKey:"classic",unlockedLiveries:["classic"],lastLoginDate:"",loginStreak:0,lifetimeStageClears:0,doubledStageRewards:[],weeklyChallenge:null,localLeaderboard:[],bossClears:0}}}function Ht(s){localStorage.setItem(Hr.progress,JSON.stringify(s))}function Ia(s){const e={highestStage:Math.max(1,s.highestStage||1),bestScore:Math.max(0,s.bestScore||0),totalDistance:Math.max(0,s.totalDistance||0),credits:Math.max(0,s.credits??300),ownedVehicles:Array.isArray(s.ownedVehicles)?[...s.ownedVehicles]:["hatchback-small"],purchasedPremiumCars:Array.isArray(s.purchasedPremiumCars)?[...s.purchasedPremiumCars]:[],adFreePurchased:!!s.adFreePurchased,claimedShopProducts:Array.isArray(s.claimedShopProducts)?[...s.claimedShopProducts]:[],selectedVehicleKey:s.selectedVehicleKey||"hatchback-small",upgrades:typeof s.upgrades=="object"&&s.upgrades?{...s.upgrades}:{},stageStars:typeof s.stageStars=="object"&&s.stageStars?{...s.stageStars}:{},dailyChallenge:s.dailyChallenge||null,selectedLiveryKey:s.selectedLiveryKey||"classic",unlockedLiveries:Array.isArray(s.unlockedLiveries)?[...s.unlockedLiveries]:["classic"],lastLoginDate:typeof s.lastLoginDate=="string"?s.lastLoginDate:"",loginStreak:Math.max(0,s.loginStreak||0),lifetimeStageClears:Math.max(0,s.lifetimeStageClears||0),doubledStageRewards:Array.isArray(s.doubledStageRewards)?[...s.doubledStageRewards].slice(-25):[],weeklyChallenge:s.weeklyChallenge||null,localLeaderboard:Array.isArray(s.localLeaderboard)?[...s.localLeaderboard].slice(0,10):[],bossClears:Math.max(0,s.bossClears||0)},t=new Set(e.ownedVehicles);t.add("hatchback-small"),Object.entries(Io).forEach(([i,r])=>{e.highestStage-1>=r&&t.add(i)}),e.ownedVehicles=[...t],e.purchasedPremiumCars=e.purchasedPremiumCars.filter(i=>Lo[i]),e.claimedShopProducts=e.claimedShopProducts.filter(i=>ed[i]);const n=new Set(e.unlockedLiveries);return n.add("classic"),Hi.forEach(i=>{i.stage&&e.highestStage>=i.stage&&n.add(i.key),i.score&&e.bestScore>=i.score&&n.add(i.key),i.bossClears&&e.bossClears>=i.bossClears&&n.add(i.key),i.loginStreak&&e.loginStreak>=i.loginStreak&&n.add(i.key)}),e.unlockedLiveries=[...n].filter(i=>Hi.some(r=>r.key===i)),e.unlockedLiveries.includes(e.selectedLiveryKey)||(e.selectedLiveryKey="classic"),e.ownedVehicles.forEach(i=>{e.upgrades[i]=yi(e.upgrades[i])}),e.purchasedPremiumCars.forEach(i=>{e.upgrades[i]=yi(e.upgrades[i])}),!t.has(e.selectedVehicleKey)&&!e.purchasedPremiumCars.includes(e.selectedVehicleKey)&&(e.selectedVehicleKey=e.ownedVehicles[e.ownedVehicles.length-1]),e}class Vx{constructor(e){this.settings=e,this.ctx=null,this.musicTimer=null,this.musicStep=0,this.musicPattern=[]}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}setSettings(e){this.settings=e,(e.mute||!e.music)&&this.stopMusic()}suspend(){this.stopMusic(),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}tone(e,t,n="sine",i=.04){this.settings.mute||!this.settings.sfx||this.rawTone(e,t,n,i)}rawTone(e,t,n="sine",i=.04,r=0){const a=this.ensureContext();if(!a)return;const o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.value=e,o.detune.value=r,l.gain.setValueAtTime(i,a.currentTime),l.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),o.connect(l),l.connect(a.destination),o.start(),o.stop(a.currentTime+t)}noise(e=.12,t=.05,n=900){if(this.settings.mute||!this.settings.sfx)return;const i=this.ensureContext();if(!i)return;const r=i.createBuffer(1,Math.floor(i.sampleRate*e),i.sampleRate),a=r.getChannelData(0);for(let h=0;h<a.length;h+=1)a[h]=(Math.random()*2-1)*(1-h/a.length);const o=i.createBufferSource();o.buffer=r;const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const c=i.createGain();c.gain.setValueAtTime(t,i.currentTime),c.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+e),o.connect(l),l.connect(c),c.connect(i.destination),o.start(),o.stop(i.currentTime+e)}playCrash(){this.rawTone(74,.22,"sawtooth",.07,-600),this.rawTone(52,.3,"square",.05,200),this.noise(.16,.06,760)}playHorn(){this.tone(420,.12,"square",.035),window.setTimeout(()=>this.tone(360,.1,"square",.028),95)}playNitroBurst(){this.rawTone(140,.22,"sawtooth",.055,-120),this.rawTone(420,.18,"triangle",.035,80),this.noise(.22,.045,1800)}playPoliceSiren(){this.tone(760,.11,"square",.035),window.setTimeout(()=>this.tone(520,.12,"square",.03),120)}playDrift(){this.noise(.12,.025,2400),this.rawTone(180,.1,"sawtooth",.018,-300)}playMusic(e=!1){this.stopMusic()}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}}document.querySelector("#app").innerHTML=`
  <div class="shell">
    <div class="layout layout-game-only">
        <main class="game-frame">
          <div id="game-view"></div>
          <div class="impact-flash hidden" id="impact-flash" aria-hidden="true"></div>
          <div class="speed-vignette" id="speed-vignette" aria-hidden="true"></div>
          <div class="combo-display hidden" id="combo-display" aria-live="polite"></div>
          <div class="daily-badge hidden" id="daily-badge" aria-live="polite"></div>
          <div class="race-banner hidden" id="race-banner">
            <p class="race-banner-kicker" id="race-banner-kicker">Featured Route</p>
            <strong id="race-banner-title">Canal Run</strong>
            <span id="race-banner-subtitle">Golden hour boulevard</span>
          </div>
          <div class="top-actions">
          <button id="pause-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Pause">
            <span class="icon-glyph">II</span>
            <span class="icon-label">Pause</span>
          </button>
          <button id="settings-button" class="icon-button icon-pill icon-stack" type="button" aria-label="Settings">
            <span class="icon-glyph">[]</span>
            <span class="icon-label">Settings</span>
          </button>
          </div>
          <div class="hud">
            <div class="hud-top">
            <div class="stat-block">
              <span>Stage</span>
              <strong id="stage-value">Stage 1</strong>
            </div>
            <div class="stat-block">
              <span>Speed</span>
              <strong id="speed-value">0 KM/H</strong>
            </div>
            <div class="stat-block">
              <span>Score</span>
              <strong id="score-value">0</strong>
            </div>
            <div class="stat-block">
              <span>Heat</span>
              <strong id="heat-value">0%</strong>
            </div>
            <div class="stat-block">
              <span>Pursuit</span>
              <strong id="pursuit-value">Level 0</strong>
            </div>
            <div class="stat-block">
              <span>Limit</span>
              <strong id="limit-value">150 KM/H</strong>
            </div>
            <div class="stat-block">
              <span>Finish</span>
              <strong id="distance-remaining-value">1.2 KM</strong>
            </div>
            </div>
            <div class="track-card">
              <div class="track-card-copy">
                <span>Track</span>
                <strong id="track-name">Canal Run</strong>
                <em id="track-zone">Canal Bank</em>
              </div>
              <div class="track-map" id="track-map"></div>
            </div>
            <div class="meters">
              <div class="meter-card">
                <label>Health <em id="health-text">100%</em></label>
                <div class="meter"><div id="health-bar" class="fill health"></div></div>
              </div>
              <div class="meter-card">
                <label>Fuel <em id="fuel-text">100%</em></label>
                <div class="meter"><div id="fuel-bar" class="fill fuel"></div></div>
              </div>
              <div class="meter-card">
                <label>Nitro <em id="nitro-text">100%</em></label>
                <div class="meter"><div id="nitro-bar" class="fill nitro"></div></div>
              </div>
              <div class="meter-card">
                <label>Progress <em id="progress-text">0%</em></label>
                <div class="meter"><div id="progress-bar" class="fill progress"></div></div>
              </div>
              <div class="meter-card">
                <label>Drift <em id="drift-text">0</em></label>
                <div class="meter"><div id="drift-bar" class="fill drift"></div></div>
              </div>
            </div>
            <div class="tip" id="tip-text">Press Space to start your first Karachi run.</div>
          </div>
          <div class="touch-controls" id="touch-controls">
            <div class="touch-cluster touch-left">
              <button type="button" class="touch-btn pedal brake-pedal" data-touch="brake" aria-label="Brake">
                <span class="pedal-icon">[]</span>
                <span class="pedal-label">Brake</span>
              </button>
            </div>
            <div class="touch-cluster touch-right">
              <button type="button" class="touch-btn pedal nitro" data-touch="nitro" aria-label="Nitro">
                <span class="pedal-icon">N</span>
                <span class="pedal-label">Nitro</span>
              </button>
            </div>
          </div>
        <div class="settings-panel hidden" id="settings-panel">
          <div class="settings-card">
            <div class="settings-header">
              <h2>Pause & Settings</h2>
              <button id="resume-button" class="icon-button primary settings-resume-button" type="button">Resume</button>
            </div>
            <label class="settings-row">
              <span>Mute All</span>
              <input id="mute-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Music</span>
              <input id="music-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Sound Effects</span>
              <input id="sfx-toggle" type="checkbox" />
            </label>
            <label class="settings-row">
              <span>Tilt to Steer</span>
              <input id="tilt-toggle" type="checkbox" />
            </label>
            <div class="settings-meta">
              <p id="save-stage-text">Highest stage: Stage 1</p>
              <p id="save-score-text">Best score: 0</p>
              <p id="credits-text">Credits: 300 CR</p>
              <p id="ad-status-text">Ads: initializing...</p>
              <p>Touch: hold left/right side of the road to steer.</p>
            </div>
            <div class="garage-panel">
              <div class="garage-tabs" id="garage-tabs">
                <button type="button" class="garage-tab is-active" data-settings-tab="garage">Garage</button>
                <button type="button" class="garage-tab" data-settings-tab="store">Store</button>
                <button type="button" class="garage-tab" data-settings-tab="upgrades">Upgrades</button>
              </div>
              <div class="garage-tab-panel is-active" id="garage-panel-garage">
                <div class="garage-summary">
                  <h3>Garage</h3>
                  <p id="garage-current-text">Current car: Small Hatchback</p>
                </div>
                <div class="garage-list" id="garage-list"></div>
                <div class="garage-section">
                  <h4>Liveries</h4>
                  <div class="garage-grid livery-grid" id="livery-list"></div>
                </div>
              </div>
              <div class="garage-tab-panel" id="garage-panel-store">
                <div class="garage-list" id="store-list"></div>
              </div>
              <div class="garage-tab-panel" id="garage-panel-upgrades">
                <div class="garage-upgrades">
                  <h3>Upgrades</h3>
                  <div id="garage-upgrades"></div>
                </div>
              </div>
            </div>
            <div class="settings-actions">
              <button id="share-score-button" class="icon-button" type="button">Share Score Card</button>
              <a class="text-link" href="${ue("/privacy.html")}" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="overlay" id="overlay">
          <img class="overlay-art" src="${fx}" alt="" />
          <div class="overlay-card">
            <p class="overlay-kicker" id="overlay-kicker">Stylized 3D Chase Racer</p>
            <h2 id="overlay-title">Need 4 Speed Karachi</h2>
            <p id="overlay-body">Sea View to the Northern Bypass — survive Karachi traffic. Weave past bikes, dodge water tankers, race rickshaws, and unlock stronger cars stage by stage. Touch the left/right side of the road to steer, or enable tilt steering in Settings.</p>
            <div class="overlay-track">
              <div class="overlay-track-copy">
                <span>Featured Route</span>
                <strong id="overlay-track-name">Canal Run</strong>
                <em id="overlay-track-zone">Canal Bank · Starter</em>
              </div>
              <div class="overlay-track-map" id="overlay-track-map"></div>
            </div>
            <button id="overlay-button" type="button">Start Run</button>
            <button id="overlay-share-button" type="button" class="hidden revive-btn">Copy Score Card</button>
            <button id="double-reward-button" type="button" class="hidden revive-btn">Watch Ad to Double Credits</button>
            <button id="revive-button" type="button" class="hidden revive-btn">Watch Ad to Revive</button>
          </div>
        </div>
      </main>
    </div>
  </div>
`;const L={speed:document.querySelector("#speed-value"),score:document.querySelector("#score-value"),heat:document.querySelector("#heat-value"),pursuit:document.querySelector("#pursuit-value"),limit:document.querySelector("#limit-value"),distanceRemaining:document.querySelector("#distance-remaining-value"),stage:document.querySelector("#stage-value"),trackName:document.querySelector("#track-name"),trackZone:document.querySelector("#track-zone"),trackMap:document.querySelector("#track-map"),healthBar:document.querySelector("#health-bar"),fuelBar:document.querySelector("#fuel-bar"),nitroBar:document.querySelector("#nitro-bar"),progressBar:document.querySelector("#progress-bar"),driftBar:document.querySelector("#drift-bar"),healthText:document.querySelector("#health-text"),fuelText:document.querySelector("#fuel-text"),nitroText:document.querySelector("#nitro-text"),progressText:document.querySelector("#progress-text"),driftText:document.querySelector("#drift-text"),tip:document.querySelector("#tip-text"),overlay:document.querySelector("#overlay"),overlayKicker:document.querySelector("#overlay-kicker"),overlayTitle:document.querySelector("#overlay-title"),overlayBody:document.querySelector("#overlay-body"),overlayTrackName:document.querySelector("#overlay-track-name"),overlayTrackZone:document.querySelector("#overlay-track-zone"),overlayTrackMap:document.querySelector("#overlay-track-map"),overlayButton:document.querySelector("#overlay-button"),overlayShareButton:document.querySelector("#overlay-share-button"),doubleRewardButton:document.querySelector("#double-reward-button"),raceBanner:document.querySelector("#race-banner"),raceBannerKicker:document.querySelector("#race-banner-kicker"),raceBannerTitle:document.querySelector("#race-banner-title"),raceBannerSubtitle:document.querySelector("#race-banner-subtitle"),impactFlash:document.querySelector("#impact-flash"),pauseButton:document.querySelector("#pause-button"),settingsButton:document.querySelector("#settings-button"),settingsPanel:document.querySelector("#settings-panel"),resumeButton:document.querySelector("#resume-button"),muteToggle:document.querySelector("#mute-toggle"),musicToggle:document.querySelector("#music-toggle"),sfxToggle:document.querySelector("#sfx-toggle"),tiltToggle:document.querySelector("#tilt-toggle"),saveStageText:document.querySelector("#save-stage-text"),saveScoreText:document.querySelector("#save-score-text"),creditsText:document.querySelector("#credits-text"),adStatusText:document.querySelector("#ad-status-text"),garageTabs:document.querySelector("#garage-tabs"),garageCurrentText:document.querySelector("#garage-current-text"),garageList:document.querySelector("#garage-list"),liveryList:document.querySelector("#livery-list"),storeList:document.querySelector("#store-list"),garageUpgrades:document.querySelector("#garage-upgrades"),touchControls:document.querySelector("#touch-controls"),comboDisplay:document.querySelector("#combo-display"),speedVignette:document.querySelector("#speed-vignette"),dailyBadge:document.querySelector("#daily-badge"),reviveButton:document.querySelector("#revive-button"),shareScoreButton:document.querySelector("#share-score-button")};class Hx{constructor(e){this.container=e,this.settings=Bx(),this.progress=Ia(zx()),this.audio=new Vx(this.settings),this.gltfLoader=new y_,this.modelTemplates=new Map,this.loadedVehicleModels=!1,this.propTemplates=new Map,this.loadedStageProps=!1,this.proceduralTextures={},this.clock=new Tf,this.scene=new yu,this.scene.background=new Ne(10146303),this.scene.fog=new Xo(10146303,80,280),this.camera=new $t(54,9/16,.1,500),this.camera.position.set(0,10.2,24),this.renderer=new v_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ah,this.container.appendChild(this.renderer.domElement),this.autoPausedFromBackground=!1,this.settingsTab="garage",this.billingState={available:!1,loading:!1,products:{},ownedProductIds:[],pendingKind:"",pendingProductId:"",lastMessage:""},this.adState={initialized:!1,canRequestAds:!1,bannerVisible:!1,bannerLoaded:!1,interstitialReady:!1,interstitialLoading:!1,rewardedReady:!1,rewardedLoading:!1,rewardedPurpose:"",consentStatus:"unknown",lastError:""},this.keys=new Set,this.touchInput={steerZone:0,brake:!1,nitro:!1},this.motionSteer=0,this.steerPointerId=null,this.selectedCar=this.getSelectedGarageVehicle(),this.state=this.initialState(),this.progress.highestStage>1&&(this.state.stageIndex=this.progress.highestStage-1),this.traffic=[],this.police=[],this.roadblocks=[],this.fuelCans=[],this.healers=[],this.roadMarkers=[],this.roadside=[],this.buildings=[],this.lightPosts=[],this.roadGlows=[],this.finishLine=null,this.nearMisses=new WeakSet,this.cameraBaseFov=54,this.lastFrameAt=performance.now(),this.frameFallback=null,this.forceRunningUntil=0,this.pendingDoubleReward=null,this.loginRewardMessage="",this.backgroundModelsStarted=!1,this.failedModelPaths=new Set,this.playerModelLoadPromise=null,this.playerModelLoadPath="",this.setupScene(),this.bindEvents(),this.resize(),this.initAds(),this.initBilling(),this.applyTrackTheme(),this.updateOverlay("Stylized 3D Chase Racer","Need 4 Speed Karachi",`Resume point: Stage ${this.state.stageIndex+1} with a ${this.selectedCar.label}. ${this.currentStage.tip} Press Space or tap Start Run.`,this.currentStage.track),this.syncSettingsUi(),this.loginRewardMessage=this.claimDailyLoginReward(),this.refreshProgressUi(),this.renderGarage(),this.updateHud(),this.loginRewardMessage&&(L.tip.textContent=this.loginRewardMessage),this.updateDailyChallengeUi(),this.startFrameFallback(),this.render(),this.loadCurrentPlayerModel().finally(()=>{window.setTimeout(()=>this.startBackgroundModelLoading(),400)})}initialState(){return{running:!1,gameOver:!1,paused:!1,stageCompleted:!1,countdown:0,countdownStarted:!1,stageIndex:0,speed:0,targetSpeed:0,maxSpeed:this.selectedCar.topSpeed,maxHealth:this.selectedCar.maxHealth??100,maxFuel:this.selectedCar.maxFuel??100,maxNitro:this.selectedCar.maxNitro??100,health:this.selectedCar.maxHealth??100,fuel:this.selectedCar.maxFuel??100,nitro:this.selectedCar.maxNitro??100,heat:0,score:0,distance:0,trafficSpawn:0,policeSpawn:0,roadblockSpawn:0,fuelSpawn:0,healerSpawn:0,stageProgress:0,steerVisual:0,bodyRoll:0,bodyPitch:0,cameraShake:0,roadDrift:0,bannerTimer:0,nearMissCount:0,cleanRun:!0,stageTime:0,combo:0,comboTimer:0,comboMultiplier:1,hasRevived:!1,pursuitLevel:0,driftScore:0,driftTimer:0,slowMoTimer:0,hornTimer:0,sirenTimer:0,nitroWasActive:!1,cinematicTimer:0,engineTimer:0}}get currentStage(){return rh(this.state.stageIndex)}getTrackProgress(e=this.state.stageProgress){return Oe.clamp(e/this.currentStage.length,0,1)}getRoadCenterOffsetAtProgress(e){const t=this.currentStage.track.turns||[];let n=0;return t.forEach(i=>{const r=Oe.smoothstep(e,i.start,i.end),a=e>i.end?1-Oe.smoothstep(e,i.end,Math.min(1,i.end+.14)):1;n+=i.shift*r*a}),n}getStageMetersAtZ(e){const t=this.player.position.z-e;return this.state.stageProgress+Math.max(0,t/jc)}getRoadCenterOffsetAtZ(e){return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.getStageMetersAtZ(e)))}getLaneWorldX(e,t){return _s[e]+this.getRoadCenterOffsetAtZ(t)}getSelectedGarageVehicle(){const e=Nx(this.progress.selectedVehicleKey);return Fx(e,this.progress.upgrades[e.key])}isVehicleOwned(e){return this.progress.ownedVehicles.includes(e)||this.progress.purchasedPremiumCars.includes(e)}getPremiumVehicleByProductId(e){return Fs.find(t=>t.productId===e)??null}getShopProductByProductId(e){return Dx[e]??null}parseBillingProductIds(e){const t=new Set,n=i=>{var r;if(i){if(typeof i=="string"){const a=i.trim();if(_r.includes(a)){t.add(a);return}if((r=a.match(/n4sk_[a-z0-9_]+/g))==null||r.forEach(o=>{_r.includes(o)&&t.add(o)}),a.startsWith("{")&&a.endsWith("}")||a.startsWith("[")&&a.endsWith("]"))try{n(JSON.parse(a))}catch{}return}if(Array.isArray(i)){i.forEach(n);return}typeof i=="object"&&(["productId","productID","id"].forEach(a=>{_r.includes(i[a])&&t.add(i[a])}),["products","productIds","productIDs"].forEach(a=>{Array.isArray(i[a])&&i[a].forEach(n)}),["transaction","purchase","data","receipt"].forEach(a=>n(i[a])))}};return n(e),[...t]}applyBillingProductIds(e=[],{fallbackProductId:t="",fromRestore:n=!1}={}){const i=e.length?e:t?[t]:[],r=[];return i.forEach(a=>{if(!a)return;this.billingState.ownedProductIds.includes(a)||this.billingState.ownedProductIds.push(a);const o=this.getPremiumVehicleByProductId(a);if(o){this.unlockPremiumVehicle(o.key),r.push(o.label);return}const l=this.applyShopPurchaseByProductId(a,{fromRestore:n});(l!=null&&l.granted||l!=null&&l.message)&&r.push(l.message)}),r}getBillingStatusMessage(){const e=this.billingState.lastMessage||"",t=e.trim();return t?t.startsWith("{")||t.startsWith("[")?"Purchase received. Tap Restore Purchases if it is not unlocked yet.":`Billing: ${e}`:"Premium purchases unlock permanently."}restoreOwnedPremiumVehicles(e=[]){const t=[];return e.forEach(n=>{const i=this.getPremiumVehicleByProductId(n);i&&(this.progress.purchasedPremiumCars.includes(i.key)||(this.progress.purchasedPremiumCars.push(i.key),t.push(i.key)))}),t.length&&(Ht(this.progress),this.refreshProgressUi()),t}applyShopPurchaseByProductId(e,{fromRestore:t=!1}={}){const n=this.getShopProductByProductId(e);return n?n.kind==="ad_free"?(this.progress.adFreePurchased=!0,Ht(this.progress),this.refreshProgressUi(),this.hideTopBanner(),{product:n,granted:!0,message:"Ad-Free Upgrade unlocked."}):n.kind==="credits"?this.progress.claimedShopProducts.includes(n.key)?{product:n,granted:!1,message:t?"Credits pack already claimed.":"Credits already added."}:(this.progress.claimedShopProducts.push(n.key),this.progress.credits+=n.credits,Ht(this.progress),this.refreshProgressUi(),{product:n,granted:!0,message:`${n.credits} credits added.`}):null:null}async restorePremiumPurchases(){if(!St){L.tip.textContent="Restore is available in the Android app build.";return}if(!this.billingState.available||typeof ii.getOwnedProducts!="function"){L.tip.textContent=this.billingState.loading?"Loading Play Billing...":"Restore is unavailable right now.";return}try{this.billingState.loading=!0,this.renderGarage();const{products:e}=await ii.getOwnedProducts(),t=[];e.forEach(a=>{t.push(...this.parseBillingProductIds(a))}),this.billingState.ownedProductIds=[...new Set(t)];const n=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),i=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted),r=n.length+i.length;this.billingState.lastMessage=r?`Restored ${r} purchase${r>1?"s":""}`:"No premium purchases were found to restore",L.tip.textContent=this.billingState.lastMessage}catch(e){this.billingState.lastMessage=(e==null?void 0:e.message)||"Restore failed",L.tip.textContent=this.billingState.lastMessage}finally{this.billingState.loading=!1,this.renderGarage()}}async initBilling(){if(!St){this.billingState.lastMessage="Windows edition",this.renderGarage();return}try{this.billingState.loading=!0,await ii.addListener("transaction",t=>{const n=this.billingState.pendingProductId,i=this.parseBillingProductIds(t),r=this.applyBillingProductIds(i,{fallbackProductId:n});this.billingState.pendingKind="",this.billingState.pendingProductId="",r.length?(this.billingState.lastMessage=`${r.join(", ")} unlocked`,L.tip.textContent=this.billingState.lastMessage):t.type==="error"?(this.billingState.lastMessage=t.message||"Purchase failed",L.tip.textContent=t.message||"Purchase failed."):this.billingState.lastMessage=t.message||"Billing updated",this.renderGarage()});const{products:e}=await ii.getProducts({productIds:_r});if(this.billingState.products=Object.fromEntries(e.map(t=>[t.id,t])),typeof ii.getOwnedProducts=="function")try{const{products:t}=await ii.getOwnedProducts(),n=[];t.forEach(a=>{n.push(...this.parseBillingProductIds(a))}),this.billingState.ownedProductIds=[...new Set(n)];const i=this.restoreOwnedPremiumVehicles(this.billingState.ownedProductIds),r=this.billingState.ownedProductIds.map(a=>this.applyShopPurchaseByProductId(a,{fromRestore:!0})).filter(Boolean).filter(a=>a.granted);i.length||r.length?this.billingState.lastMessage=`Restored ${i.length+r.length} purchase${i.length+r.length>1?"s":""}`:this.billingState.lastMessage="Play Billing ready"}catch(t){this.billingState.lastMessage="Play Billing ready",console.warn("Owned product restore failed",t)}else this.billingState.lastMessage="Play Billing ready";this.billingState.available=!0}catch(e){this.billingState.available=!1,this.billingState.lastMessage=(e==null?void 0:e.message)||"Billing unavailable",console.warn("Billing init failed",e)}finally{this.billingState.loading=!1,this.renderGarage()}}unlockPremiumVehicle(e){Lo[e]&&(this.progress.purchasedPremiumCars.includes(e)||this.progress.purchasedPremiumCars.push(e),this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress),this.refreshProgressUi(),this.renderGarage())}async loadVehicleModels(){const e=new Set,t=this.getModelPath("player",this.selectedCar.key);t&&e.add(t),vs.police&&e.add(vs.police);const n=new Set;mx.map(i=>vs.traffic[i]).forEach(i=>{i&&!e.has(i)&&n.add(i)}),await this.loadModelBatch([...e],!0),window.setTimeout(()=>{this.loadModelBatch([...n],!1).catch(i=>{console.warn("Traffic model loading failed",i)})},1200)}async loadCurrentPlayerModel(){const e=this.getModelPath("player",this.selectedCar.key);if(!(!e||this.modelTemplates.has(e)||this.failedModelPaths.has(e)))return this.playerModelLoadPromise&&this.playerModelLoadPath===e?this.playerModelLoadPromise:(this.playerModelLoadPromise&&this.playerModelLoadPath!==e&&(this.playerModelLoadPromise=null),this.playerModelLoadPath=e,this.playerModelLoadPromise=(async()=>{await this.waitForIdle();try{const t=await this.loadGlb(e);this.modelTemplates.set(e,t.scene),this.loadedVehicleModels=!0,this.refreshVehicleVisuals()}catch(t){this.failedModelPaths.add(e),console.warn(`Failed to load model: ${e}`,t)}finally{this.playerModelLoadPromise=null,this.playerModelLoadPath=""}})(),this.playerModelLoadPromise)}startBackgroundModelLoading(){this.backgroundModelsStarted||this.state.running||this.state.paused||(this.backgroundModelsStarted=!0,window.setTimeout(()=>{this.loadVehicleModels().catch(e=>console.warn("Vehicle model loading failed",e))},800))}async loadModelBatch(e,t){for(const n of e){if(this.state.running||this.state.paused){this.backgroundModelsStarted=!1;return}if(await this.waitForIdle(),this.state.running||this.state.paused){this.backgroundModelsStarted=!1;return}try{const i=await this.loadGlb(n);this.modelTemplates.set(n,i.scene),this.loadedVehicleModels=!0,t&&this.refreshVehicleVisuals()}catch(i){this.failedModelPaths.add(n),console.warn(`Failed to load model: ${n}`,i)}}this.modelTemplates.size>0&&(this.loadedVehicleModels=!0,this.refreshVehicleVisuals())}waitForIdle(){return new Promise(e=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:500}):window.setTimeout(e,80)})}loadGlb(e){return new Promise((t,n)=>{this.gltfLoader.load(e,t,void 0,n)})}async loadStageProps(){const e=new Set;Object.values(Zc).forEach(t=>{Object.values(t).forEach(n=>n&&e.add(n))}),Object.values(La).forEach(t=>{t.forEach(n=>n&&e.add(n))});for(const t of e){await this.waitForIdle();try{const n=await this.loadGlb(t);this.propTemplates.set(t,n.scene)}catch{}}this.propTemplates.size>0&&(this.loadedStageProps=!0,this.scene&&this.currentStage&&this.buildSkyline())}getSeaTexture(){if(this.proceduralTextures.sea)return this.proceduralTextures.sea;const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#1a3a5e"),n.addColorStop(.5,"#2a5e8a"),n.addColorStop(1,"#4a8aae"),t.fillStyle=n,t.fillRect(0,0,256,512),t.strokeStyle="#a8d6e8",t.lineWidth=1.2;for(let r=0;r<80;r+=1){t.globalAlpha=.15+Math.random()*.35,t.beginPath();const a=Math.random()*512,o=Math.random()*256,l=o+30+Math.random()*80;t.moveTo(o,a),t.bezierCurveTo(o+20,a-4,l-20,a+4,l,a),t.stroke()}t.globalAlpha=1;const i=new cr(e);return i.wrapS=Mn,i.wrapT=Mn,i.repeat.set(2,8),this.proceduralTextures.sea=i,i}getAsphaltTexture(){if(this.proceduralTextures.asphalt)return this.proceduralTextures.asphalt;const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#26293a",t.fillRect(0,0,256,256);for(let i=0;i<800;i+=1){t.fillStyle=`rgba(${40+Math.random()*25},${40+Math.random()*25},${50+Math.random()*25},0.55)`;const r=Math.random()*256,a=Math.random()*256,o=.6+Math.random()*1.2;t.fillRect(r,a,o,o)}t.strokeStyle="rgba(0,0,0,0.25)",t.lineWidth=.5;for(let i=0;i<6;i+=1)t.beginPath(),t.moveTo(Math.random()*256,Math.random()*256),t.bezierCurveTo(Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256,Math.random()*256),t.stroke();const n=new cr(e);return n.wrapS=Mn,n.wrapT=Mn,n.repeat.set(2,30),this.proceduralTextures.asphalt=n,n}getBillboardTexture(e,t="#0a1320",n="#fbbf24"){const i=`billboard_${e}_${t}`;if(this.proceduralTextures[i])return this.proceduralTextures[i];const r=document.createElement("canvas");r.width=512,r.height=256;const a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,512,256),a.strokeStyle=n,a.lineWidth=6,a.strokeRect(8,8,496,240),a.fillStyle=n,a.font="bold 56px Trebuchet MS, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(e,256,128);const o=new cr(r);return this.proceduralTextures[i]=o,o}createPropFromPath(e){if(!e)return null;const t=this.propTemplates.get(e);if(!t)return null;const n=t.clone(!0);return n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,Array.isArray(i.material)?i.material=i.material.map(r=>r.clone()):i.material&&(i.material=i.material.clone()))}),n}createStageProp(e,t){var n;return this.createPropFromPath((n=Zc[e])==null?void 0:n[t])}getModelPath(e,t){var n;return e==="police"?vs.police:((n=vs[e])==null?void 0:n[t])??null}createModelVehicle(e,t,n,i=1120295){const r=this.getModelPath(e,t),a=r?this.modelTemplates.get(r):null;if(!a||!n)return null;const o=new dt,l=a.clone(!0);l.rotation.y=Rx(r),o.add(l),l.traverse(m=>{if(!m.isMesh)return;m.castShadow=!0,m.receiveShadow=!0,Array.isArray(m.material)?m.material=m.material.map(S=>S.clone()):m.material&&(m.material=m.material.clone()),(Array.isArray(m.material)?m.material:m.material?[m.material]:[]).forEach(S=>{if(!S||!("color"in S)||!S.color)return;const b=S.transparent||S.opacity<.98,M=S.color.getHex(),A=M===0||M===329485||M===988970||M===1120295;e==="player"&&(t==="hatchback-small"||t==="hatchback")&&!b&&!A&&(S.color.setHex(16777215),"metalness"in S&&(S.metalness=.16),"roughness"in S&&(S.roughness=.28)),e==="traffic"&&!b&&!A&&(S.color.setHex(15987958),"metalness"in S&&(S.metalness=.14),"roughness"in S&&(S.roughness=.42));const E=e==="player"?this.getSelectedLivery():null;E!=null&&E.color&&!b&&!A&&S.color.lerp(new Ne(E.color),.42)})});const c=new Gt().setFromObject(l),h=new D,d=new D;if(c.getSize(h),c.getCenter(d),h.x<=0||h.y<=0||h.z<=0)return null;const u=Math.min(n.width*1.08/h.x,n.height*1.14/h.y,n.length*1.08/h.z);l.scale.setScalar(u);const f=new Gt().setFromObject(l),g=new D;f.getCenter(g),l.position.set(-g.x,-f.min.y,-g.z),e==="player"&&o.scale.setScalar(1.12),e==="traffic"&&o.scale.setScalar(1.12),e==="police"&&o.scale.setScalar(1.16),o.userData.baseYaw=0,o.rotation.y=o.userData.baseYaw;const x=new q(new Zo(.5,32),new lt({color:329485,transparent:!0,opacity:.18}));return x.name="ground-shadow",x.rotation.x=-Math.PI/2,x.position.y=.02,x.scale.set(n.width*1.1,n.length*.82,1),o.add(x),o}refreshVehicleVisuals(){const e=this.player?this.player.position.clone():new D(0,.72,10),t=this.player?this.player.rotation.clone():new mn;this.player&&this.scene.remove(this.player),this.createPlayerCar(),this.player.position.copy(e),this.player.rotation.copy(t),this.traffic.forEach(n=>this.scene.remove(n)),this.traffic=[],this.createTrafficPool(),this.police.forEach(n=>this.scene.remove(n)),this.police=[],this.createPolicePool(),this.roadblocks.forEach(n=>this.scene.remove(n)),this.roadblocks=[],this.createRoadblockPool()}setSelectedVehicle(e){if(!this.isVehicleOwned(e))return;this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress);const t=this.getModelPath("player",this.selectedCar.key);!t||this.modelTemplates.has(t)||this.failedModelPaths.has(t)?this.refreshVehicleVisuals():this.loadCurrentPlayerModel(),this.renderGarage(),this.refreshProgressUi(),L.tip.textContent=`${this.selectedCar.label} equipped.`}purchasePremiumVehicle(e){const t=Lo[e];if(t){if(this.progress.purchasedPremiumCars.includes(e)){this.setSelectedVehicle(e);return}if(!St){this.progress.purchasedPremiumCars.push(e),this.progress.upgrades[e]=yi(this.progress.upgrades[e]),this.progress.selectedVehicleKey=e,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress),this.refreshVehicleVisuals(),this.refreshProgressUi(),this.renderGarage(),L.tip.textContent=`${t.label} unlocked in the Windows edition.`;return}if(!this.billingState.available){L.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind="premium",L.tip.textContent=`Opening Google Play purchase for ${t.label}...`,ii.purchaseProduct({productId:t.productId,referenceUUID:Jc()}).then(n=>{this.applyBillingProductIds(this.parseBillingProductIds(n),{fallbackProductId:t.productId}).length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=`${t.label} unlocked`,L.tip.textContent=`${t.label} unlocked.`,this.renderGarage())}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",L.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}purchaseShopProduct(e){const t=ed[e];if(t){if(t.kind==="ad_free"&&this.progress.adFreePurchased){L.tip.textContent="Ad-Free Upgrade already owned.";return}if(t.kind==="credits"&&this.progress.claimedShopProducts.includes(t.key)){L.tip.textContent=`${t.label} already claimed.`;return}if(!St){L.tip.textContent=`${t.label} purchases are available on the Android app build.`;return}if(!this.billingState.available){L.tip.textContent=this.billingState.loading?"Loading Play Billing...":`Billing unavailable. ${this.billingState.lastMessage}`;return}this.billingState.pendingProductId=t.productId,this.billingState.pendingKind=t.kind,L.tip.textContent=`Opening Google Play purchase for ${t.label}...`,ii.purchaseProduct({productId:t.productId,referenceUUID:Jc()}).then(n=>{const i=this.applyBillingProductIds(this.parseBillingProductIds(n),{fallbackProductId:t.productId});i.length&&(this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=i.join(", "),L.tip.textContent=this.billingState.lastMessage,this.renderGarage())}).catch(n=>{this.billingState.pendingProductId="",this.billingState.pendingKind="",this.billingState.lastMessage=(n==null?void 0:n.message)||"Purchase failed",L.tip.textContent=(n==null?void 0:n.message)||"Purchase failed.",this.renderGarage()})}}getUpgradeLevel(e,t){return yi(this.progress.upgrades[e])[t]}buyUpgrade(e){const t=this.progress.selectedVehicleKey,n=Qc.find(o=>o.key===e);if(!n)return;const i=yi(this.progress.upgrades[t]),r=i[e];if(r>=xs){L.tip.textContent=`${n.label} is already maxed out.`;return}const a=sh(n,r);if(this.progress.credits<a){L.tip.textContent=`You need ${a-this.progress.credits} more credits for ${n.label}.`;return}i[e]+=1,this.progress.credits-=a,this.progress.upgrades[t]=i,this.selectedCar=this.getSelectedGarageVehicle(),Ht(this.progress),this.refreshProgressUi(),this.renderGarage(),L.tip.textContent=`${n.label} upgraded for ${this.selectedCar.label}.`}setSettingsTab(e){var t,n,i;this.settingsTab=e,document.querySelectorAll("[data-settings-tab]").forEach(r=>{r.classList.toggle("is-active",r.dataset.settingsTab===e)}),(t=document.querySelector("#garage-panel-garage"))==null||t.classList.toggle("is-active",e==="garage"),(n=document.querySelector("#garage-panel-store"))==null||n.classList.toggle("is-active",e==="store"),(i=document.querySelector("#garage-panel-upgrades"))==null||i.classList.toggle("is-active",e==="upgrades")}getSelectedLivery(){return Hi.find(e=>e.key===this.progress.selectedLiveryKey)||Hi[0]}isLiveryUnlocked(e){return this.progress.unlockedLiveries.includes(e.key)}setSelectedLivery(e){const t=Hi.find(n=>n.key===e);!t||!this.isLiveryUnlocked(t)||(this.progress.selectedLiveryKey=e,Ht(this.progress),this.refreshVehicleVisuals(),this.renderGarage(),L.tip.textContent=`${t.label} livery equipped.`)}renderGarage(){if(!L.garageList||!L.storeList||!L.garageUpgrades)return;L.garageCurrentText.textContent=`Current car: ${this.selectedCar.label}`;const e=Ft.map(a=>{const o=this.isVehicleOwned(a.key),l=this.progress.selectedVehicleKey===a.key,c=Io[a.key]+1;return`
        <button
          type="button"
          class="garage-car${l?" selected":""}${o?"":" locked"}"
          data-garage-car="${a.key}"
          ${o?"":"disabled"}
        >
          <strong>${a.label}</strong>
          <span>${o?l?"Selected":"Tap to equip":`Unlock at Stage ${c}`}</span>
        </button>
      `}).join(""),t=(this.progress.localLeaderboard||[]).slice(0,5).map((a,o)=>`
      <div class="leaderboard-row">
        <strong>#${o+1} ${a.score}</strong>
        <span>${a.track} · ${a.vehicle} · Drift ${a.drift}</span>
      </div>
    `).join("")||'<p class="garage-premium-note">No runs recorded yet.</p>',n=Fs.map(a=>{const o=this.progress.purchasedPremiumCars.includes(a.key),l=this.progress.selectedVehicleKey===a.key,c=this.billingState.products[a.productId],h=this.billingState.ownedProductIds.includes(a.productId),d=(c==null?void 0:c.displayPrice)||(St?this.billingState.loading?"Loading price...":"Play price unavailable":"Included"),u=o?l?"Owned · Selected":"Owned · Tap to equip":h?"Owned on Play · Restoring...":St?this.billingState.loading?"Checking Play price...":`Buy on Play · ${d}`:"Included in Windows edition",f=this.billingState.pendingProductId===a.productId?"Opening...":this.billingState.loading?"Loading...":St?"Buy on Play":"Unlock";return`
          <div class="garage-car premium${l?" selected":""}${o?"":" locked"}">
            <span class="garage-badge">${a.badge||"Premium"}</span>
            <strong>${a.label}</strong>
            <span>${a.subtitle}</span>
            <span>${u}</span>
          ${!o&&St?`<span>${a.productId}</span>`:""}
          <div class="garage-car-actions">
            ${o?`<button type="button" class="icon-button primary" data-garage-car="${a.key}">${l?"Selected":"Equip"}</button>`:`<button type="button" class="icon-button primary" data-premium-buy="${a.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==a.productId?"disabled":""}>${f}</button>`}
          </div>
        </div>
      `}).join(""),i=Vr.map(a=>{const o=this.billingState.products[a.productId],l=(o==null?void 0:o.displayPrice)||(St?this.billingState.loading?"Loading price...":"Play price unavailable":"Android only"),c=a.kind==="ad_free"?this.progress.adFreePurchased:this.progress.claimedShopProducts.includes(a.key),h=c?a.kind==="ad_free"?"Owned | Ads disabled":"Claimed | Credits added":St?this.billingState.loading?"Checking Play price...":`Buy on Play | ${l}`:"Android purchase only",d=this.billingState.pendingProductId===a.productId?"Opening...":this.billingState.loading?"Loading...":St?"Buy on Play":"Unavailable";return`
        <div class="garage-car premium${c?" selected":""}">
          <span class="garage-badge">${a.badge}</span>
          <strong>${a.label}</strong>
          <span>${a.subtitle}</span>
          <span>${h}</span>
          ${c?"":`<span>${a.productId}</span>`}
          <div class="garage-car-actions">
            ${c?`<button type="button" class="icon-button" disabled>${a.kind==="ad_free"?"Owned":"Claimed"}</button>`:`<button type="button" class="icon-button primary" data-shop-buy="${a.key}" ${this.billingState.loading&&this.billingState.pendingProductId!==a.productId?"disabled":""}>${d}</button>`}
          </div>
        </div>
      `}).join("");L.garageList.innerHTML=`
      <div class="garage-section">
        <h4>Career Cars</h4>
        <div class="garage-grid">${e}</div>
      </div>
      <div class="garage-section">
        <h4>Local Leaderboard</h4>
        <div class="leaderboard-list">${t}</div>
      </div>
    `,L.liveryList&&(L.liveryList.innerHTML=Hi.map(a=>{const o=this.isLiveryUnlocked(a),l=this.progress.selectedLiveryKey===a.key,c=a.color?`style="background:#${a.color.toString(16).padStart(6,"0")}"`:"";return`
          <button
            type="button"
            class="garage-car livery-card${l?" selected":""}${o?"":" locked"}"
            data-livery="${a.key}"
            ${o?"":"disabled"}
          >
            <span class="livery-swatch" ${c}></span>
            <strong>${a.label}</strong>
            <span>${o?l?"Equipped":"Tap to equip":`Unlock: ${a.unlock}`}</span>
          </button>
        `}).join(""),L.liveryList.querySelectorAll("[data-livery]").forEach(a=>{a.addEventListener("click",()=>this.setSelectedLivery(a.dataset.livery))})),L.storeList.innerHTML=`
      <div class="garage-section">
        <h4>Premium Collection</h4>
        <p class="garage-premium-note">${this.getBillingStatusMessage()}</p>
        ${St?`<div class="garage-car-actions"><button type="button" class="icon-button" data-restore-premium>${this.billingState.loading?"Checking...":"Restore Purchases"}</button></div>`:""}
        <div class="garage-grid">${n}</div>
      </div>
      <div class="garage-section">
        <h4>Store Upgrades</h4>
        <p class="garage-premium-note">Ad-Free is permanent. Credit packs are currently configured as one-time bonus unlocks.</p>
        <div class="garage-grid">${i}</div>
      </div>
    `;const r=yi(this.progress.upgrades[this.progress.selectedVehicleKey]);L.garageUpgrades.innerHTML=Qc.map(a=>{const o=r[a.key],l=o>=xs?"MAX":`${sh(a,o)} CR`;return`
        <div class="upgrade-row">
          <div>
            <strong>${a.label}</strong>
            <span>Level ${o}/${xs}</span>
          </div>
          <button
            type="button"
            class="icon-button${o>=xs?"":" primary"}"
            data-upgrade="${a.key}"
            ${o>=xs?"disabled":""}
          >
            ${l}
          </button>
        </div>
      `}).join(""),document.querySelectorAll("[data-garage-car]").forEach(a=>{a.addEventListener("click",()=>this.setSelectedVehicle(a.dataset.garageCar))}),L.storeList.querySelectorAll("[data-premium-buy]").forEach(a=>{a.addEventListener("click",()=>this.purchasePremiumVehicle(a.dataset.premiumBuy))}),L.storeList.querySelectorAll("[data-shop-buy]").forEach(a=>{a.addEventListener("click",()=>this.purchaseShopProduct(a.dataset.shopBuy))}),L.storeList.querySelectorAll("[data-restore-premium]").forEach(a=>{a.addEventListener("click",()=>this.restorePremiumPurchases())}),L.garageUpgrades.querySelectorAll("[data-upgrade]").forEach(a=>{a.addEventListener("click",()=>this.buyUpgrade(a.dataset.upgrade))}),this.setSettingsTab(this.settingsTab)}applyTrackTheme(){const e=this.currentStage.track;this.scene.background.setHex(e.sky),this.scene.fog.color.setHex(e.fog),this.scene.fog.near=e.fogNear??80,this.scene.fog.far=e.fogFar??280,this.ground&&this.ground.material.color.setHex(e.ground),this.roadCenterGlow&&this.roadCenterGlow.material.color.set(e.accent),this.sunBall&&e.sunPosition&&(this.sunBall.position.set(...e.sunPosition),this.sunHalo&&this.sunHalo.position.set(...e.sunPosition)),this.scene&&this.buildSkyline(),this.rebuildRoadGeometry(),this.renderTrackMaps()}rebuildRoadGeometry(){const e=t=>{const n=Math.max(0,(this.player.position.z-t)/jc);return this.getRoadCenterOffsetAtProgress(this.getTrackProgress(n))};if(this.road){const t=new gt(24,520,16,80);ih(t,e),this.road.geometry.dispose(),this.road.geometry=t,this.road.position.x=0,this.road.rotation.z=0}if(this.roadCenterGlow){const t=new gt(6.5,520,8,80);ih(t,e),this.roadCenterGlow.geometry.dispose(),this.roadCenterGlow.geometry=t,this.roadCenterGlow.position.x=0,this.roadCenterGlow.rotation.z=0}}renderTrackMaps(){const e=this.currentStage.track,t=this.currentStage.length>0?this.state.stageProgress/this.currentStage.length*100:0,n=nh(e,t);L.trackMap&&(L.trackMap.innerHTML=n),L.trackName&&(L.trackName.textContent=e.name),L.trackZone&&(L.trackZone.textContent=`${e.zone} · ${e.difficulty}`),L.overlayTrackMap&&(L.overlayTrackMap.innerHTML=n),L.overlayTrackName&&(L.overlayTrackName.textContent=e.name),L.overlayTrackZone&&(L.overlayTrackZone.textContent=`${e.zone} · ${e.difficulty} · ${e.vibe}`)}showRaceBanner(e,t,n,i=2.2){L.raceBanner&&(L.raceBannerKicker.textContent=e,L.raceBannerTitle.textContent=t,L.raceBannerSubtitle.textContent=n,L.raceBanner.classList.remove("hidden"),this.state.bannerTimer=i)}triggerImpactFx(){this.audio.playCrash(),L.impactFlash&&(L.impactFlash.classList.remove("hidden"),L.impactFlash.classList.add("active"),window.clearTimeout(this.impactFlashTimer),this.impactFlashTimer=window.setTimeout(()=>{L.impactFlash.classList.remove("active"),L.impactFlash.classList.add("hidden")},170))}setupScene(){const e=new lf(14412542,8165965,1.45);this.scene.add(e);const t=new Hh(16773831,2.8);t.position.set(30,45,20),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.1,t.shadow.camera.far=140,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,this.scene.add(t);const n=new q(new nn(22,24,24),new lt({color:16765286,fog:!1}));n.position.set(-32,55,-420),n.renderOrder=-10,this.scene.add(n),this.sunBall=n;const i=new q(new nn(38,18,18),new lt({color:16757626,transparent:!0,opacity:.35,fog:!1}));i.position.copy(n.position),i.renderOrder=-11,this.scene.add(i),this.sunHalo=i;const r=new q(new nn(170,32,32),new lt({color:2573938,transparent:!0,opacity:.24,side:Kt}));r.position.set(0,28,-120),this.scene.add(r);const a=new q(new gt(180,60),new lt({color:16761207,transparent:!0,opacity:.16}));a.position.set(0,16,-150),this.scene.add(a);const o=new q(new gt(220,520),new J({color:8956238}));o.rotation.x=-Math.PI/2,o.position.z=-120,o.receiveShadow=!0,this.scene.add(o),this.ground=o;const l=new q(new gt(24,520,16,80),new J({map:this.getAsphaltTexture(),color:4869466,roughness:.92,metalness:.03}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.position.z=-120,l.receiveShadow=!0,this.scene.add(l),this.road=l;const c=new q(new gt(6.5,520,8,80),new lt({color:5983016,transparent:!0,opacity:.08}));c.rotation.x=-Math.PI/2,c.position.set(0,.04,-120),c.visible=!1,this.roadCenterGlow=c;const h=new J({color:16773831}),d=new q(new ge(.45,.12,520),h);d.position.set(-12.2,.08,-120),d.receiveShadow=!0,this.scene.add(d),this.shoulderLeft=d;const u=d.clone();u.position.x=12.2,this.scene.add(u),this.shoulderRight=u,this.skylineGroup=null,this.buildSkyline(),this.player=null,this.createPlayerCar(),this.applyTrackTheme(),this.createRoadMarkers(),this.createRoadGlowMarkers(),this.createFinishLine(),this.createRoadsidePool(),this.createLightPosts(),this.createTrafficPool(),this.createPolicePool(),this.createRoadblockPool(),this.createFuelPool(),this.createHealerPool(),this.createNitroParticlePool(),this.createTrafficDustPool(),this.createCoinPool()}buildSkyline(){var n,i;this.skylineGroup&&(this.scene.remove(this.skylineGroup),this.skylineGroup.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(a=>a.dispose()):r.material.dispose())})),this.buildings=[];const e=new dt,t=((i=(n=this.currentStage)==null?void 0:n.track)==null?void 0:i.key)??"sea-view-sunset";t==="sea-view-sunset"?this.buildSeaViewSkyline(e):t==="shahrah-e-faisal"?(this.buildGenericSkyline(e),this.buildShahrahExtras(e)):t==="ii-chundrigar-canyon"?this.buildBankingCanyonSkyline(e):t==="korangi-crossing"?(this.buildIndustrialSkyline(e),this.buildKorangiExtras(e)):t==="tower-burns-road"?this.buildOldCitySkyline(e):t==="dha-boulevards"?this.buildDhaNightSkyline(e):t==="lyari-expressway"?(this.buildLyariNeonSkyline(e),this.buildLyariExtras(e)):t==="m9-northern-bypass"?(this.buildHighwaySkyline(e),this.buildM9Extras(e)):t==="sea-view-night"?this.buildSeaViewNightSkyline(e):t==="karachi-port-run"?this.buildPortSkyline(e):this.buildGenericSkyline(e),this.skylineGroup=e,this.scene.add(e)}createCityBuildingModel({x:e,z:t,width:n,height:i,depth:r}){const a=i>20?La.high:La.low,o=a[Math.floor(Math.random()*a.length)],l=this.createPropFromPath(o);if(!l)return null;const c=new Gt().setFromObject(l),h=new D;if(c.getSize(h),h.x<=0||h.y<=0||h.z<=0)return null;const d=Math.min(n*1.15/h.x,i/h.y,r*1.15/h.z);l.scale.setScalar(d),l.rotation.y=Math.random()>.5?0:Math.PI;const u=new Gt().setFromObject(l),f=new D;return u.getCenter(f),l.position.set(e-f.x,-u.min.y,t-f.z),l.userData.isRealBuilding=!0,l}spawnBuilding(e,{x:t,z:n,width:i,height:r,depth:a,color:o,windowColor:l,windowOpacity:c=.32,emissiveWindows:h=!1}){const d=this.createCityBuildingModel({x:t,z:n,width:i,height:r,depth:a});if(d)return e.add(d),this.buildings.push(d),d;const u=new q(new ge(i,r,a),new J({color:o,roughness:.78,metalness:.06}));u.position.set(t,r/2,n),u.castShadow=!0,u.receiveShadow=!0,e.add(u),this.buildings.push(u);const f=t>0,g=Math.max(3,Math.floor(r/3));for(let x=0;x<g;x+=1){const m=new q(new gt(i*.7,.5),new lt({color:l,transparent:!0,opacity:c}));m.position.set(t+(f?-i/2-.02:i/2+.02),2+x*2.2,n),m.rotation.y=f?Math.PI/2:-Math.PI/2,e.add(m)}return u}buildGenericSkyline(e){for(let t=0;t<18;t+=1){const n=10+Math.random()*16,i=8+Math.random()*8,r=8+Math.random()*8;this.spawnBuilding(e,{x:t<9?-40-Math.random()*25:40+Math.random()*25,z:-45-t*18,width:i,height:n,depth:r,color:t%2===0?3494e3:4877708,windowColor:t%2===0?16306284:12969471})}}buildSeaViewSkyline(e){for(let i=0;i<8;i+=1){const r=8+Math.random()*7;this.spawnBuilding(e,{x:-36-Math.random()*20,z:-45-i*22,width:9+Math.random()*5,height:r,depth:8+Math.random()*4,color:i%2===0?15258532:13939849,windowColor:16498468,windowOpacity:.42})}for(let i=0;i<5;i+=1){const r=this.createStageProp("sea-view-sunset","palm")||this.createPalmTree();r.position.set(34+Math.random()*12,0,-55-i*38),e.add(r)}const t=new q(new gt(120,600),new J({map:this.getSeaTexture(),color:16777215,roughness:.45,metalness:.25,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(85,-.15,-120),e.add(t),this.seaPlane=t;const n=new q(new gt(6,110),new lt({color:16498468,transparent:!0,opacity:.42}));n.rotation.x=-Math.PI/2,n.position.set(70,-.13,-160),e.add(n),this.addRouteLandmark(e,"CLIFTON BEACH",-1,-95,2282478)}addCopilotDecorations(e,t,n){}createLandmarkSign(e,t=16498468){const n=new dt,i=new q(new bt(.16,.18,5.5,10),new J({color:3359061}));i.position.set(-2.8,2.75,0),n.add(i);const r=i.clone();r.position.x=2.8,n.add(r);const a=new q(new ge(6.8,1.9,.28),new J({map:this.getBillboardTexture(e,"#07111f",`#${t.toString(16).padStart(6,"0")}`),roughness:.55}));return a.position.y=5.2,n.add(a),n}addRouteLandmark(e,t,n=1,i=-120,r=16498468){const a=this.createLandmarkSign(t,r);a.position.set(n*18,0,i),a.rotation.y=n>0?-Math.PI/2:Math.PI/2,e.add(a)}buildShahrahExtras(e){const t=[["#dc2626","#ffffff"],["#1d4ed8","#fbbf24"],["#16a34a","#ffffff"],["#7c3aed","#fef3c7"],["#ea580c","#ffffff"]];for(let n=0;n<6;n+=1){const i=n%2===0?-1:1,r=mr[n%mr.length],[a,o]=t[n%t.length],l=new dt,c=new q(new ge(.5,14,.5),new J({color:3814704}));c.position.set(-3.5,7,0),l.add(c);const h=c.clone();h.position.x=3.5,l.add(h);const d=new q(new ge(9,5,.4),new J({map:this.getBillboardTexture(r,a,o),roughness:.7}));d.position.set(0,12,0),d.rotation.y=i<0?Math.PI/2:-Math.PI/2,l.add(d),l.position.set(i*18,0,-40-n*70),e.add(l)}}buildBankingCanyonSkyline(e){for(let t=0;t<22;t+=1){const n=t%2===0?"towerA":"towerB",i=this.createStageProp("ii-chundrigar-canyon",n),r=t<11?-30-Math.random()*20:30+Math.random()*20,a=-40-t%11*24;if(i){const o=new Gt().setFromObject(i),l=new D;o.getSize(l);const c=(32+Math.random()*22)/Math.max(.001,l.y);i.scale.setScalar(c),i.position.set(r,0,a),i.rotation.y=Math.random()*Math.PI*2,e.add(i)}else{const o=32+Math.random()*28,l=10+Math.random()*6,c=10+Math.random()*6;this.spawnBuilding(e,{x:r,z:a,width:l,height:o,depth:c,color:t%3===0?2240833:t%3===1?2901600:3755628,windowColor:10340843,windowOpacity:.55})}}this.addRouteLandmark(e,"HBL PLAZA",1,-120,6333946)}buildKorangiExtras(e){}buildIndustrialSkyline(e){for(let t=0;t<14;t+=1){const n=Math.random()>.4,i=n?6+Math.random()*4:14+Math.random()*8,r=n?16+Math.random()*8:8+Math.random()*5,a=n?12+Math.random()*6:8+Math.random()*4,o=t<7?-34-Math.random()*18:34+Math.random()*18,l=-45-t*22;if(this.spawnBuilding(e,{x:o,z:l,width:r,height:i,depth:a,color:6968888,windowColor:16436245,windowOpacity:.25}),!n&&Math.random()>.55){const c=new q(new bt(.5,.65,12,10),new J({color:4142376,roughness:.9}));c.position.set(o+(o>0?-r/4:r/4),i+6,l),c.castShadow=!0,e.add(c);const h=new q(new nn(1.6,8,6),new lt({color:7037783,transparent:!0,opacity:.45}));h.position.set(c.position.x,i+14,l),e.add(h)}}}buildOldCitySkyline(e){for(let n=0;n<24;n+=1){const i=6+Math.random()*4,r=6+Math.random()*4,a=8+Math.random()*4,o=[12095066,10908226,13212780,9398845,13935988];this.spawnBuilding(e,{x:n<12?-28-Math.random()*14:28+Math.random()*14,z:-40-n%12*16,width:r,height:i,depth:a,color:o[n%o.length],windowColor:16639626,windowOpacity:.35})}for(let n=0;n<6;n+=1){const i=n%2===0?"chaiCart":"biryaniCart",r=this.createStageProp("tower-burns-road",i);r&&(r.position.set((n%2===0?-1:1)*(14+Math.random()*3),0,-25-n*22),r.rotation.y=Math.random()*.4-.2,e.add(r))}const t=this.createStageProp("tower-burns-road","oldGate");if(t){const n=new Gt().setFromObject(t),i=new D;n.getSize(i),t.scale.setScalar(8/Math.max(.001,i.y)),t.position.set(0,0,-180),e.add(t)}else this.addRouteLandmark(e,"TOWER",-1,-160,16347926)}buildDhaNightSkyline(e){for(let n=0;n<10;n+=1){const i=8+Math.random()*6;this.spawnBuilding(e,{x:n<5?-34-Math.random()*12:34+Math.random()*12,z:-45-n*22,width:12+Math.random()*6,height:i,depth:12+Math.random()*4,color:2765636,windowColor:3462041,windowOpacity:.62})}for(let n=0;n<14;n+=1){const i=n%2===0?-1:1,r=this.createStageProp("dha-boulevards","palm")||this.createPalmTree();r.position.set(i*(28+Math.random()*5),0,-30-n*18),e.add(r)}const t=this.createStageProp("dha-boulevards","sectorSign");if(t){const n=new Gt().setFromObject(t),i=new D;n.getSize(i),t.scale.setScalar(4/Math.max(.001,i.y)),t.position.set(-18,0,-80),e.add(t)}}buildLyariExtras(e){this.addCopilotDecorations(e,"lyari-expressway",["copilotA"])}buildLyariNeonSkyline(e){const t=new q(new gt(28,600),new J({color:1712691,roughness:.4,metalness:.3,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(-55,-.2,-120),e.add(t);for(let n=0;n<12;n+=1){const i=6+Math.random()*12;this.spawnBuilding(e,{x:-82-Math.random()*14,z:-40-n*24,width:8+Math.random()*5,height:i,depth:8+Math.random()*4,color:1843760,windowColor:[11032055,15485081,440020,16096779][n%4],windowOpacity:.7})}for(let n=0;n<8;n+=1){const i=12+Math.random()*18;this.spawnBuilding(e,{x:36+Math.random()*18,z:-42-n*28,width:10+Math.random()*6,height:i,depth:10+Math.random()*4,color:2304829,windowColor:11032055,windowOpacity:.55})}}buildM9Extras(e){this.addCopilotDecorations(e,"m9-northern-bypass",["copilotA"]);for(let t=0;t<4;t+=1){const n=this.createStageProp("m9-northern-bypass","jerseyWall");n&&(n.position.set((t%2===0?-1:1)*14,0,-50-t*60),n.rotation.y=t%2===0?0:Math.PI,e.add(n))}for(let t=0;t<3;t+=1){const n=this.createStageProp("m9-northern-bypass","sign");n&&(n.position.set(15,0,-60-t*80),e.add(n))}}buildHighwaySkyline(e){for(let t=0;t<10;t+=1){const n=4+Math.random()*6;this.spawnBuilding(e,{x:t<5?-55-Math.random()*20:55+Math.random()*20,z:-60-t*36,width:14+Math.random()*6,height:n,depth:12+Math.random()*4,color:4865322,windowColor:16096779,windowOpacity:.18})}this.addRouteLandmark(e,"M9 BYPASS",1,-120,15680580)}buildSeaViewNightSkyline(e){for(let i=0;i<6;i+=1){const r=6+Math.random()*5;this.spawnBuilding(e,{x:-34-Math.random()*16,z:-50-i*26,width:9+Math.random()*4,height:r,depth:8+Math.random()*4,color:1121326,windowColor:[2282478,15485081,11032055,16096779][i%4],windowOpacity:.78})}for(let i=0;i<8;i+=1){const r=this.createStageProp("sea-view-night","palm")||this.createPalmTree();r.position.set(28+Math.random()*12,0,-50-i*28),e.add(r)}const t=new q(new gt(120,600),new J({color:793134,roughness:.35,metalness:.4,transparent:!0,opacity:.95}));t.rotation.x=-Math.PI/2,t.position.set(85,-.15,-120),e.add(t);const n=new q(new gt(4,90),new lt({color:15134975,transparent:!0,opacity:.4}));n.rotation.x=-Math.PI/2,n.position.set(72,-.13,-160),e.add(n),this.addCopilotDecorations(e,"sea-view-night",["copilotA"])}buildPortSkyline(e){const t=[12131356,1920728,366185,15381256,11032055,15357964];for(let n=0;n<28;n+=1){const i=2+Math.floor(Math.random()*3),r=12,a=n<14?-28-Math.random()*14:28+Math.random()*14,o=-30-n%14*18;for(let l=0;l<i;l+=1){const c=new q(new ge(r,4,6),new J({color:t[(n+l)%t.length],roughness:.72,metalness:.18}));c.position.set(a,2+l*4.1,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c),this.buildings.push(c)}}this.addRouteLandmark(e,"KARACHI PORT",-1,-150,16096779);for(let n=0;n<4;n+=1){const i=new q(new ge(1.6,32,1.6),new J({color:3882820,metalness:.3,roughness:.6}));i.position.set((n%2===0?-1:1)*38,16,-90-n*70),i.castShadow=!0,e.add(i);const r=new q(new ge(22,1.2,1),new J({color:5068128,metalness:.25,roughness:.55}));r.position.set(i.position.x+(n%2===0?8:-8),30,i.position.z),e.add(r)}for(let n=0;n<4;n+=1){const i=this.createStageProp("karachi-port-run","container");i&&(i.position.set((n%2===0?-1:1)*22,0,-40-n*60),i.rotation.y=n*.4,e.add(i))}this.addCopilotDecorations(e,"karachi-port-run",["copilotA"])}createPalmTree(){const e=new dt,t=7+Math.random()*3,n=new q(new bt(.22,.34,t,8),new J({color:7031333,roughness:.9}));n.position.y=t/2,n.castShadow=!0,e.add(n);const i=new J({color:1870418,roughness:.6,side:dn});for(let r=0;r<5;r+=1){const a=r/5*Math.PI*2+Math.random()*.3,o=new q(new gt(.6,3.4),i);o.position.set(Math.cos(a)*1.5,t+.4,Math.sin(a)*1.5),o.rotation.set(-.5,a+Math.PI/2,0),o.castShadow=!0,e.add(o)}return e}createPlayerCar(){var n;this.player&&this.scene.remove(this.player);const e=this.getSelectedLivery(),t=(e==null?void 0:e.color)??this.selectedCar.body;this.player=this.createModelVehicle("player",this.selectedCar.key,this.selectedCar.profile,this.selectedCar.glow)||this.createCar({id:this.selectedCar.id,body:t,roof:this.selectedCar.roof,glow:this.selectedCar.glow,trim:this.selectedCar.trim,headlight:this.selectedCar.headlight,taillight:this.selectedCar.taillight,profile:this.selectedCar.profile}),(n=this.player.userData).baseYaw??(n.baseYaw=0),this.player.position.set(0,.72,10),this.scene.add(this.player)}createCar({id:e,body:t,roof:n,glow:i,trim:r=1054759,headlight:a=15398655,taillight:o=16557477,profile:l}){const c=new dt,h=l,d=h.hoodLength??h.length*.24,u=h.rearLength??h.length*.2,f=h.cabinOffset??0,g=h.wheelRadius??.55,x=h.wheelInset??.44,m=h.height*.62,p=new q(new ge(h.width,m,h.length-.1),new J({color:t,metalness:.28,roughness:.42}));p.position.y=m*.1,p.castShadow=!0,p.receiveShadow=!0,c.add(p);const S=new q(new ge(h.width*.96,h.height*.28,d),new J({color:t,metalness:.24,roughness:.38}));S.position.set(0,h.height*.28,h.length*.5-d*.55),S.rotation.x=-.08,S.castShadow=!0,c.add(S);const b=new q(new ge(h.width*.94,h.height*.22,u),new J({color:t,metalness:.24,roughness:.4}));b.position.set(0,h.height*.24,-h.length*.5+u*.52),b.rotation.x=.06,b.castShadow=!0,c.add(b);const M=new q(new ge(h.cabinWidth,h.cabinHeight,h.cabinLength),new J({color:n,metalness:.1,roughness:.32}));M.position.y=h.height*.72+h.cabinHeight*.12,M.position.z=f,M.rotation.x=h.roofBias?-h.roofBias*.04:0,M.castShadow=!0,c.add(M);const A=new q(new ge(h.cabinWidth*.82,.08,h.cabinLength*.55),new J({color:r,metalness:.16,roughness:.3}));A.position.set(0,h.height+h.cabinHeight*.12,f-h.cabinLength*.02),c.add(A);const E=new q(new ge(h.cabinWidth*.96,h.cabinHeight*.76,h.cabinLength*.22),new J({color:11065599,metalness:.05,roughness:.15,transparent:!0,opacity:.78}));E.position.set(0,h.height*.74+h.cabinHeight*.2,h.cabinLength*.18+f),E.rotation.x=-.42,c.add(E);const R=new q(new ge(h.cabinWidth*.94,h.cabinHeight*.68,h.cabinLength*.18),new J({color:10013678,metalness:.05,roughness:.16,transparent:!0,opacity:.72}));R.position.set(0,h.height*.74+h.cabinHeight*.16,-h.cabinLength*.18+f),R.rotation.x=.34,c.add(R);const v=new J({color:10340843,metalness:.04,roughness:.14,transparent:!0,opacity:.7});[-1,1].forEach(he=>{const ae=new q(new gt(h.cabinLength*.52,h.cabinHeight*.48),v);ae.position.set(he*(h.cabinWidth/2+.02),h.height*.78,f-.04),ae.rotation.y=he<0?Math.PI/2:-Math.PI/2,c.add(ae)});const w=new q(new ge(h.width*.6,h.height*.22,.18),new J({color:r,metalness:.15,roughness:.4}));w.position.set(0,h.height*.16,h.length*.5-.07),c.add(w);const G=new q(new ge(h.width*.78,h.height*.16,.18),new J({color:329485,metalness:.12,roughness:.5}));G.position.set(0,.08,h.length*.5-.04),c.add(G);const C=new ge(h.width*.2,.08,.22),F=new J({color:a,emissive:a,emissiveIntensity:e==="civic"?.75:.45});[-h.width*.29,h.width*.29].forEach(he=>{const ae=new q(C,F);ae.position.set(he,h.height*.23,h.length*.5-.08),ae.rotation.y=he<0?.14:-.14,c.add(ae)});const O=new q(new ge(Math.max(1.6,h.width*.55),.15,.7),new J({color:i,emissive:i,emissiveIntensity:.25}));O.position.set(0,h.height*.58,h.length*.24),c.add(O);const B=new q(new gt(h.width*1.12,h.length*.76),new lt({color:i,transparent:!0,opacity:e==="civic"?.13:.08}));B.rotation.x=-Math.PI/2,B.position.y=.04,c.add(B);const k=new q(new gt(h.width*1.25,h.length*.9),new lt({color:0,transparent:!0,opacity:.18}));k.name="ground-shadow",k.rotation.x=-Math.PI/2,k.position.y=.01,c.add(k);const z=new q(new ge(h.width*.98,.1,h.length*.74),new J({color:r,metalness:.14,roughness:.45}));if(z.position.y=-.02,c.add(z),h.splitter){const he=new q(new ge(h.width*.9,.06,.45),new J({color:r}));he.position.set(0,-.02,h.length*.5-.18),c.add(he)}if(h.spoiler){const he=new q(new ge(h.width*.54,.06,.48),new J({color:r,metalness:.15,roughness:.4}));he.position.set(0,h.height*.62,-h.length*.5+.38),c.add(he)}const W=new ge(h.width*.18,.08,.2),ne=new J({color:o,emissive:o,emissiveIntensity:.55});[-h.width*.27,h.width*.27].forEach(he=>{const ae=new q(W,ne);ae.position.set(he,h.height*.18,-h.length*.5+.08),ae.rotation.y=he<0?-.14:.14,c.add(ae)});const Q=new bt(g,g,.55,18),me=new J({color:1120295});return[[-h.width*x,g*.2,h.length*.31],[h.width*x,g*.2,h.length*.31],[-h.width*x,g*.2,-h.length*.31],[h.width*x,g*.2,-h.length*.31]].forEach(([he,ae,ke])=>{const et=new q(Q,me);et.rotation.z=Math.PI/2,et.position.set(he,ae,ke),et.castShadow=!0,c.add(et)}),c.userData.baseYaw=0,c}createBus(){const e=new dt,t=new q(new ge(4.4,2.3,11.8),new J({color:16436245,metalness:.18,roughness:.48}));t.position.y=1.25,t.castShadow=!0,e.add(t);const n=new q(new ge(4.46,.26,11.9),new J({color:14427686}));n.position.y=1.15,e.add(n);const i=new q(new ge(3.4,1.15,.18),new J({color:10344191,transparent:!0,opacity:.72}));i.position.set(0,1.65,5.75),e.add(i);for(let o=0;o<5;o+=1)for(const l of[-1,1]){const c=new q(new gt(1.2,.72),new J({color:10344191,transparent:!0,opacity:.68}));c.position.set(l*2.22,1.78,3.8-o*1.8),c.rotation.y=l<0?Math.PI/2:-Math.PI/2,e.add(c)}const r=new bt(.8,.8,.75,18),a=new J({color:1120295});return[[-1.95,.42,3.9],[1.95,.42,3.9],[-1.95,.42,.25],[1.95,.42,.25],[-1.95,.42,-3.7],[1.95,.42,-3.7]].forEach(([o,l,c])=>{const h=new q(r,a);h.rotation.z=Math.PI/2,h.position.set(o,l,c),h.castShadow=!0,e.add(h)}),e}createRickshaw(){const e=new dt,t=new q(new ge(3.2,1.35,4.1),new J({color:1483594,metalness:.12,roughness:.52}));t.position.y=.8,t.castShadow=!0,e.add(t);const n=new q(new ge(2.8,.8,1.9),new J({color:16436245,metalness:.08,roughness:.44}));n.position.set(0,1.65,-.1),e.add(n);const i=new q(new ge(1.7,1.05,1.4),new J({color:988970}));i.position.set(0,1.05,1.5),e.add(i);const r=new q(new ge(1.35,.55,.12),new J({color:11065599,transparent:!0,opacity:.72}));r.position.set(0,1.35,2.08),e.add(r);const a=new bt(.5,.5,.36,16),o=new J({color:1120295});return[[-1.08,.38,-1.1],[1.08,.38,-1.1],[0,.38,1.45]].forEach(([l,c,h])=>{const d=new q(a,o);d.rotation.z=Math.PI/2,d.position.set(l,c,h),d.castShadow=!0,e.add(d)}),e}createBike(){const e=new dt,t=[14427686,1120295,1920728,1467700,15381256],n=t[Math.floor(Math.random()*t.length)],i=new q(new ge(.36,.34,1.55),new J({color:2042167,metalness:.55,roughness:.4}));i.position.y=.78,i.castShadow=!0,e.add(i);const r=new q(new ge(.42,.32,.78),new J({color:n,metalness:.5,roughness:.32}));r.position.set(0,1.05,.18),r.castShadow=!0,e.add(r);const a=new q(new nn(.18,12,8),new J({color:16708551,emissive:16708551,emissiveIntensity:.7}));a.position.set(0,1,.92),e.add(a);const o=new q(new ge(.78,.06,.08),new J({color:1120295,metalness:.6,roughness:.3}));o.position.set(0,1.18,.78),e.add(o);const l=new q(new ge(.34,.12,.78),new J({color:0,roughness:.8}));l.position.set(0,1,-.42),e.add(l);const c=new q(new ge(.28,.08,.46),new J({color:3621201}));c.position.set(0,1.04,-.95),e.add(c);const h=new q(new ge(.46,.62,.36),new J({color:1981066,roughness:.6}));h.position.set(0,1.55,-.28),h.castShadow=!0,e.add(h);const d=new q(new nn(.22,12,10),new J({color:988970,metalness:.4,roughness:.32}));d.position.set(0,2,-.22),e.add(d);const u=new bt(.42,.42,.18,18),f=new J({color:657930,roughness:.8});return[[0,.42,.78],[0,.42,-.86]].forEach(([g,x,m])=>{const p=new q(u,f);p.rotation.z=Math.PI/2,p.position.set(g,x,m),p.castShadow=!0,e.add(p)}),e}createWaterTanker(){const e=new dt,t=new q(new ge(2.8,2.4,2.6),new J({color:1920728,metalness:.18,roughness:.5}));t.position.set(0,1.5,4.4),t.castShadow=!0,e.add(t);const n=new q(new ge(2.86,.18,.6),new J({color:988970}));n.position.set(0,2.78,5.4),e.add(n);const i=new q(new ge(2.2,1.3,.18),new J({color:10344191,transparent:!0,opacity:.72}));i.position.set(0,2.05,5.55),e.add(i);const r=new q(new ge(2.4,.9,.2),new J({color:1120295,metalness:.3,roughness:.5}));r.position.set(0,.95,5.65),e.add(r),[-1,1].forEach(f=>{const g=new q(new ge(.5,.32,.16),new J({color:16708551,emissive:16639626,emissiveIntensity:.6}));g.position.set(f*.95,.7,5.7),e.add(g)});const a=new q(new bt(1.55,1.55,7.2,22),new J({color:15067115,metalness:.45,roughness:.32}));a.rotation.x=Math.PI/2,a.position.set(0,2.3,-.6),a.castShadow=!0,e.add(a),[-4,2.8].forEach(f=>{const g=new q(new bt(1.55,1.55,.18,22),new J({color:12131356,metalness:.3,roughness:.5}));g.rotation.x=Math.PI/2,g.position.set(0,2.3,f),e.add(g)});const o=new q(new ge(.08,2.6,.08),new J({color:3621201}));o.position.set(1.4,2.3,-3.6),e.add(o);const l=new q(new bt(.36,.36,.16,14),new J({color:7041664,metalness:.5}));l.position.set(0,3.95,-.6),e.add(l);const c=new q(new ge(2.4,.32,8.6),new J({color:1120295,roughness:.7}));c.position.set(0,.62,.4),e.add(c);const h=new bt(.78,.78,.7,18),d=new J({color:657930,roughness:.85});[[-1.4,.62,4.2],[1.4,.62,4.2],[-1.4,.62,-1],[1.4,.62,-1],[-1.4,.62,-3.2],[1.4,.62,-3.2]].forEach(([f,g,x])=>{const m=new q(h,d);m.rotation.z=Math.PI/2,m.position.set(f,g,x),m.castShadow=!0,e.add(m)});const u=new q(new ge(2.8,.5,.06),new J({color:2042167}));return u.position.set(0,.42,-3.95),e.add(u),e}createPickup(){const e=new dt,t=[14427686,366185,2450411,16436245][Math.floor(Math.random()*4)],n=new q(new ge(2.4,1.6,1.8),new J({color:t,metalness:.2,roughness:.5}));n.position.set(0,1.05,1.5),n.castShadow=!0,e.add(n);const i=new q(new ge(2.32,.16,1.7),new J({color:1120295}));i.position.set(0,1.93,1.5),e.add(i);const r=new q(new ge(2,.85,.12),new J({color:11065599,transparent:!0,opacity:.72}));r.position.set(0,1.5,2.42),e.add(r);const a=new q(new ge(2.4,.16,2.6),new J({color:4937059,roughness:.7}));a.position.set(0,.78,-.85),e.add(a);const o=Math.floor(Math.random()*3)+1;for(let h=0;h<o;h++){const d=new q(new ge(2.1,.5,2.2),new J({color:10576391,roughness:.85}));d.position.set(0,1.05+h*.52,-.85),d.castShadow=!0,e.add(d)}const l=new bt(.5,.5,.36,16),c=new J({color:657930,roughness:.8});return[[-1.1,.5,1.5],[1.1,.5,1.5],[-1.1,.5,-1.5],[1.1,.5,-1.5]].forEach(([h,d,u])=>{const f=new q(l,c);f.rotation.z=Math.PI/2,f.position.set(h,d,u),f.castShadow=!0,e.add(f)}),e}createRoadMarkers(){const e=new ge(.38,.04,7),t=new J({color:16317180});for(let n=0;n<2;n+=1){const i=n===0?-4.1:4.1;for(let r=0;r<26;r+=1){const a=new q(e,t);a.position.set(i,.05,-r*20),a.userData.laneX=i,a.receiveShadow=!0,this.roadMarkers.push(a),this.scene.add(a)}}}createRoadGlowMarkers(){const e=new lt({color:16753472,transparent:!0,opacity:.18});for(let t=0;t<2;t+=1){const n=t===0?-4.1:4.1;for(let i=0;i<18;i+=1){const r=new q(new gt(.9,9),e);r.rotation.x=-Math.PI/2,r.position.set(n,.03,-i*28),r.userData.laneX=n,r.visible=!1,this.roadGlows.push(r)}}}createFinishLine(){this.finishLine=new dt;const e=new lt({color:16317180}),t=new lt({color:1120295});for(let o=0;o<5;o+=1)for(let l=0;l<6;l+=1){const c=new q(new gt(4,2.4),(o+l)%2===0?e:t);c.rotation.x=-Math.PI/2,c.position.set(-10+l*4,.07,-o*2.45),this.finishLine.add(c)}const n=new J({color:15067115}),i=new q(new bt(.14,.16,7.5,10),n);i.position.set(-10.8,3.8,-5),this.finishLine.add(i);const r=new q(new bt(.14,.16,7.5,10),n);r.position.set(10.8,3.8,-5),this.finishLine.add(r);const a=new q(new ge(22.4,1.5,.2),new J({color:16096779,emissive:10105874,emissiveIntensity:.3}));a.position.set(0,7.2,-5),this.finishLine.add(a),this.scene.add(this.finishLine),this.resetFinishLine()}resetFinishLine(){this.finishLine&&(this.finishLine.visible=!1,this.finishLine.position.set(0,0,-240))}createRoadsidePool(){for(let e=0;e<34;e+=1){const t=Math.random(),n=t>.62?this.createTree():t>.28?this.createSign():t>.14?this.createBusStop():this.createMedianBarrier(),i=Math.random()>.5?-1:1,r=18+Math.random()*18,a=-25-e*16,o=this.getRoadCenterOffsetAtZ(a)+i*r;n.position.set(o,0,a),n.userData.side=i,n.userData.baseOffset=r,n.userData.anchoredX=o,this.roadside.push(n),this.scene.add(n)}}createBusStop(){const e=new dt,t=new q(new ge(4.4,.16,1.8),new J({color:1920728}));t.position.y=3.15,e.add(t);for(const i of[-1.8,1.8]){const r=new q(new bt(.12,.12,3.1,8),new J({color:9741240}));r.position.set(i,1.55,0),e.add(r)}const n=new q(new ge(2.2,.18,.55),new J({color:8138002}));return n.position.set(0,.95,0),e.add(n),e}createMedianBarrier(){const e=new dt,t=new q(new ge(3.8,.7,.9),new J({color:15381256}));t.position.y=.35,e.add(t);const n=new q(new ge(3.82,.16,.92),new J({color:2042167}));return n.position.y=.38,e.add(n),e}createLightPosts(){for(let e=0;e<18;e+=1){const t=e%2===0?-1:1,n=new dt,i=new q(new bt(.1,.12,6.5,8),new J({color:7041664}));i.position.y=3.25,n.add(i);const r=new q(new ge(1.4,.12,.12),new J({color:7041664}));r.position.set(t*-.6,6.2,0),n.add(r);const a=new q(new nn(.24,10,10),new lt({color:16769947}));a.position.set(t*-1.2,6.1,0),n.add(a);const o=-40-e*26,l=this.getRoadCenterOffsetAtZ(o)+t*15.8;n.position.set(l,0,o),n.userData.side=t,n.userData.baseOffset=15.8,n.userData.anchoredX=l,this.lightPosts.push(n),this.scene.add(n)}}resetRoadsideAnchors(){this.roadside.forEach((e,t)=>{const n=e.userData.side||(t%2===0?-1:1),i=e.userData.baseOffset||18+Math.random()*18,r=-25-t*16,a=this.getRoadCenterOffsetAtZ(r)+n*i;e.position.set(a,0,r),e.userData.side=n,e.userData.baseOffset=i,e.userData.anchoredX=a}),this.lightPosts.forEach((e,t)=>{const n=e.userData.side||(t%2===0?-1:1),i=e.userData.baseOffset||15.8,r=-40-t*26,a=this.getRoadCenterOffsetAtZ(r)+n*i;e.position.set(a,0,r),e.userData.side=n,e.userData.baseOffset=i,e.userData.anchoredX=a})}createTree(){const e=new dt,t=new q(new bt(.35,.45,2.8,10),new J({color:8145437}));t.position.y=1.3,t.castShadow=!0,e.add(t);const n=new J({color:1870418});return[[0,3.9,0,1.7],[-.9,3.25,.25,1.25],[.85,3.25,-.15,1.25]].forEach(([i,r,a,o])=>{const l=new q(new nn(o,14,14),n);l.position.set(i,r,a),l.castShadow=!0,e.add(l)}),e}createSign(){const e=new dt,t=new q(new ge(.35,3.5,.35),new J({color:10576391}));t.position.y=1.75,t.castShadow=!0,e.add(t);const n=new q(new ge(3.2,2.1,.25),new J({color:16639626}));n.position.y=4.35,n.castShadow=!0,e.add(n);const i=this.makeTextTexture(mr[Math.floor(Math.random()*mr.length)]),r=new q(new gt(2.75,1),new lt({map:i,transparent:!0}));return r.position.set(0,4.35,.15),e.add(r),e}makeTextTexture(e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#78350f",n.font="bold 36px Trebuchet MS",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2);const i=new cr(t);return i.needsUpdate=!0,i}createTrafficPool(){for(let e=0;e<24;e+=1){const t=Po[e%Po.length];let n;if(t==="bus")n=this.createModelVehicle("traffic","bus",Ss.bus,16436245)||this.createBus();else if(t==="rickshaw")n=this.createModelVehicle("traffic","rickshaw",Ss.rickshaw,1483594)||this.createRickshaw();else if(t==="bike")n=this.createModelVehicle("traffic","bike",Ss.bike,14427686)||this.createBike();else if(t==="tanker")n=this.createModelVehicle("traffic","tanker",Ss.tanker,15067115)||this.createWaterTanker();else if(t==="pickup")n=this.createModelVehicle("traffic","pickup",Ss.pickup,14427686)||this.createPickup();else if(t==="truck"){const r=Ft[6];n=this.createModelVehicle("traffic","truck",r.profile,r.glow)||this.createCar({id:r.key,body:r.body,roof:r.roof,glow:r.glow,trim:r.trim,headlight:r.headlight,taillight:r.taillight,profile:r.profile})}else{const r=t==="hatchback"?Ft[1]:t==="sedan"?Ft[2]:t==="suv"?Ft[4]:Ft[5];n=this.createModelVehicle("traffic",t,r.profile,r.glow)||this.createCar({id:r.key,body:r.body,roof:r.roof,glow:r.glow,trim:r.trim,headlight:r.headlight,taillight:r.taillight,profile:r.profile})}this.hideGroundShadow(n),n.visible=!1;const i=t==="bike"?78:t==="tanker"||t==="truck"?46:60;n.userData={active:!1,speed:i,lane:0,laneTarget:0,changeCooldown:0,type:t},this.traffic.push(n),this.scene.add(n)}}createPolicePool(){for(let e=0;e<4;e+=1){const t={width:3.4,length:6.2,height:1.08,cabinWidth:2.25,cabinLength:2.95,cabinHeight:.95},n=this.createModelVehicle("police","police",t,15680580)||this.createCar({id:"police",body:15068404,roof:988970,glow:15680580,trim:988970,headlight:15398655,taillight:16478597,profile:t});this.hideGroundShadow(n),n.visible=!1;const i=new q(new ge(.45,.2,.45),new J({color:3900150,emissive:3900150,emissiveIntensity:.6}));i.position.set(-.35,1.45,-.2),n.add(i);const r=i.clone();r.material=i.material.clone(),r.material.color.setHex(15680580),r.material.emissive.setHex(15680580),r.position.x=.35,n.add(r),n.userData={active:!1,aggression:1},this.police.push(n),this.scene.add(n)}}createRoadblockPool(){for(let e=0;e<4;e+=1){const t=new dt,n=new q(new ge(5.6,.65,1),new J({color:16317180,roughness:.62}));n.position.y=.34,t.add(n);const i=new q(new ge(5.65,.18,1.04),new lt({color:15680580}));i.position.y=.56,t.add(i);for(const a of[-2.4,2.4]){const o=new q(new Jo(.42,1.25,12),new J({color:16347926,roughness:.7}));o.position.set(a,.72,-.95),t.add(o)}const r=new Vh(15680580,1.4,10);r.position.set(0,1.4,0),t.add(r),t.visible=!1,t.userData={active:!1,lane:1,type:"roadblock"},this.roadblocks.push(t),this.scene.add(t)}}hideGroundShadow(e){e.traverse(t=>{t.name==="ground-shadow"&&(t.visible=!1)})}createFuelPool(){for(let e=0;e<5;e+=1){const t=new dt,n=new q(new ge(1.55,1.65,.9),new J({color:16436245,emissive:16096779,emissiveIntensity:.45}));n.name="fuel-body",n.castShadow=!0,t.add(n);const i=new q(new ge(.62,.32,.5),new J({color:16708551,emissive:16436245,emissiveIntensity:.35}));i.position.set(.25,.98,0),t.add(i);const r=new q(new Lr(.82,.08,8,28),new lt({color:3718648,transparent:!0,opacity:.88}));r.name="fuel-beacon",r.rotation.x=Math.PI/2,r.position.y=1.25,t.add(r),t.visible=!1,t.userData={active:!1,lane:0},this.fuelCans.push(t),this.scene.add(t)}}createHealerPool(){for(let e=0;e<3;e+=1){const t=new dt,n=new q(new Lr(.72,.2,10,24),new J({color:2278750,emissive:1483594,emissiveIntensity:.45}));n.rotation.x=Math.PI/2,n.castShadow=!0,t.add(n);const i=new J({color:16317180,emissive:16777215,emissiveIntensity:.15}),r=new q(new ge(.26,1,.26),i);r.castShadow=!0,t.add(r);const a=new q(new ge(1,.26,.26),i);a.castShadow=!0,t.add(a),t.visible=!1,t.userData={active:!1,lane:0},this.healers.push(t),this.scene.add(t)}}createTrafficDustPool(){this.trafficDust=[];const e=new nn(.6,6,5),t=[10913896,12888198,9204048,12097910];for(let n=0;n<36;n+=1){const i=new lt({color:t[n%t.length],transparent:!0,opacity:0}),r=new q(e,i);r.visible=!1,r.userData={age:0,life:0,vx:0,vy:0,vz:0},this.trafficDust.push(r),this.scene.add(r)}this.trafficDustSpawnTimers=new WeakMap}updateTrafficDust(e){var n;if(!this.trafficDust||!this.traffic)return;const t=new Set(["tanker","truck","pickup","dumper"]);for(const i of this.traffic){if(!((n=i.userData)!=null&&n.active)||!t.has(i.userData.type)||i.position.z>20||i.position.z<-200)continue;let r=(this.trafficDustSpawnTimers.get(i)||0)+e;for(;r>=.2;){r-=.2;const a=this.trafficDust.find(c=>!c.visible);if(!a)break;const o=Math.random()>.5?-1:1,l=i.userData.type==="tanker"?5:i.userData.type==="truck"?4:2;a.position.set(i.position.x+o*1.2+(Math.random()-.5)*.5,.4+Math.random()*.5,i.position.z+l),a.userData.life=.9+Math.random()*.5,a.userData.age=0,a.userData.vx=(Math.random()-.5)*2.5,a.userData.vy=.4+Math.random()*.5,a.userData.vz=-2+Math.random()*1,a.scale.setScalar(.7+Math.random()*.5),a.material.opacity=.55,a.visible=!0}this.trafficDustSpawnTimers.set(i,r)}for(const i of this.trafficDust){if(!i.visible)continue;if(i.userData.age+=e,i.userData.age>=i.userData.life){i.visible=!1,i.material.opacity=0;continue}const r=i.userData.age/i.userData.life;i.position.x+=i.userData.vx*e,i.position.y+=i.userData.vy*e,i.position.z+=i.userData.vz*e,i.userData.vy*=.94,i.scale.setScalar((.7+Math.random()*.1)*(1+r*1.8)),i.material.opacity=.55*(1-r)}}createCoinPool(){this.coins=[];const e=new bt(.55,.55,.12,18),t=new J({color:16498468,emissive:16096779,emissiveIntensity:.7,metalness:.6,roughness:.32});for(let n=0;n<8;n+=1){const i=new q(e,t.clone());i.rotation.x=Math.PI/2,i.visible=!1,i.userData={active:!1,value:50,spinPhase:Math.random()*Math.PI*2},this.coins.push(i),this.scene.add(i)}this.coinSpawnAcc=0}spawnCoin(){const e=this.coins.find(n=>!n.userData.active);if(!e)return;const t=Math.floor(Math.random()*3)-1;e.position.set(t*4.2,1.6,-260),e.userData.active=!0,e.userData.value=50+Math.floor(Math.random()*4)*25,e.visible=!0}updateCoins(e){if(this.coins){this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.coinSpawnAcc+=e,this.coinSpawnAcc>2.5+Math.random()*1.5&&(this.coinSpawnAcc=0,this.spawnCoin()));for(const t of this.coins){if(!t.userData.active)continue;if(t.userData.spinPhase+=e*4,t.rotation.y=t.userData.spinPhase,t.position.z+=this.state.speed*e*mi*16+.55,t.position.z>24){t.userData.active=!1,t.visible=!1;continue}const n=Math.abs(t.position.x-this.player.position.x),i=Math.abs(t.position.z-this.player.position.z);if(n<2.4&&i<2.8){t.userData.active=!1,t.visible=!1;const r=t.userData.value;this.state.score+=r,this.progress&&(this.progress.credits=(this.progress.credits||0)+Math.floor(r/5)),L.tip.textContent=`Coin grabbed! +${r} score`,this.audio.tone(1100,.08,"sine",.04),this.audio.tone(1500,.06,"sine",.03)}}}}createNitroParticlePool(){this.nitroParticles=[];const e=new nn(.34,6,6);for(let t=0;t<40;t+=1){const n=t%2===0?16486972:16638023,i=new lt({color:n,transparent:!0,opacity:0}),r=new q(e,i);r.visible=!1,r.userData={age:0,life:0,vx:0,vy:0,vz:0},this.nitroParticles.push(r),this.scene.add(r)}this.nitroSpawnAcc=0}updateNitroParticles(e){if(!(!this.nitroParticles||!this.player)){if(this.state.nitroActive)for(this.nitroSpawnAcc+=e;this.nitroSpawnAcc>=.05;){this.nitroSpawnAcc-=.05;const t=this.nitroParticles.find(i=>!i.visible);if(!t)break;const n=Math.random()>.5?-1:1;t.position.set(this.player.position.x+n*.6+(Math.random()-.5)*.3,this.player.position.y+.5+Math.random()*.3,this.player.position.z+1.6+Math.random()*.3),t.userData.life=.45+Math.random()*.2,t.userData.age=0,t.userData.vx=(Math.random()-.5)*1.2,t.userData.vy=.6+Math.random()*.4,t.userData.vz=8+Math.random()*4,t.scale.setScalar(.6+Math.random()*.5),t.material.opacity=.9,t.visible=!0}else this.nitroSpawnAcc=0;for(const t of this.nitroParticles){if(!t.visible)continue;if(t.userData.age+=e,t.userData.age>=t.userData.life){t.visible=!1,t.material.opacity=0;continue}const n=t.userData.age/t.userData.life;t.position.x+=t.userData.vx*e,t.position.y+=t.userData.vy*e,t.position.z+=t.userData.vz*e,t.userData.vy*=.96,t.scale.setScalar((.6+Math.random()*.2)*(1+n*1.4)),t.material.opacity=.9*(1-n)}}}syncSettingsUi(){L.muteToggle.checked=this.settings.mute,L.musicToggle.checked=this.settings.music,L.sfxToggle.checked=this.settings.sfx,L.tiltToggle.checked=this.settings.tiltSteer}async initAds(){if(!St||this.adState.initialized||this.progress.adFreePurchased){this.progress.adFreePurchased&&(this.adState.lastError="Ad-Free Upgrade active",this.updateAdStatusUi());return}let e={status:Dr.NOT_REQUIRED,canRequestAds:!0,isConsentFormAvailable:!1};try{await Ut.initialize();try{e=await Ut.requestConsentInfo(),this.adState.consentStatus=String(e.status),!e.canRequestAds&&e.isConsentFormAvailable&&(e=await Ut.showConsentForm(),this.adState.consentStatus=String(e.status)),this.adState.canRequestAds=!!e.canRequestAds}catch(t){if(this.adState.consentStatus="consent-error",Px(t))this.adState.canRequestAds=!0,this.adState.lastError="AdMob Privacy & messaging is not configured for this app ID yet. Using fallback ad requests.";else throw t}Ut.addListener(Vi.Loaded,()=>{this.adState.interstitialReady=!0,this.adState.interstitialLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Ut.addListener(Vi.FailedToLoad,t=>{this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to load",this.updateAdStatusUi()}),Ut.addListener(Vi.Dismissed,()=>{this.adState.interstitialReady=!1,this.updateAdStatusUi(),this.prepareInterstitial()}),Ut.addListener(Vi.FailedToShow,t=>{this.adState.interstitialReady=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Interstitial ad failed to show",this.updateAdStatusUi(),this.prepareInterstitial()}),Ut.addListener(vi.Loaded,()=>{this.adState.rewardedReady=!0,this.adState.rewardedLoading=!1,this.adState.lastError="",this.updateAdStatusUi()}),Ut.addListener(vi.FailedToLoad,t=>{this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to load",this.updateAdStatusUi()}),Ut.addListener(vi.Rewarded,()=>{this.adState.rewardedPurpose==="double-stage-reward"?this.claimDoubleStageReward():this.revivePlayer()}),Ut.addListener(vi.Dismissed,()=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.updateAdStatusUi(),this.prepareRewardedAd()}),Ut.addListener(vi.FailedToShow,t=>{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.adState.lastError=(t==null?void 0:t.message)||(t==null?void 0:t.code)||"Rewarded ad failed to show",this.updateAdStatusUi(),this.prepareRewardedAd()}),this.adState.initialized=!0,this.adState.canRequestAds?(await this.prepareInterstitial(),await this.prepareRewardedAd()):this.adState.lastError=e.status===Dr.REQUIRED?"Consent required before ads can load":"Ad requests are blocked by consent status"}catch(t){this.adState.initialized=!1,this.adState.lastError=(t==null?void 0:t.message)||"AdMob initialization failed"}this.updateAdStatusUi()}async showTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi()}async hideTopBanner(){this.adState.bannerVisible=!1,this.adState.bannerLoaded=!1,document.body.classList.remove("banner-visible"),this.updateAdStatusUi();try{await Ut.hideBanner(),await Ut.removeBanner()}catch{}}async prepareInterstitial(){if(!(!St||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.interstitialReady||this.adState.interstitialLoading)){this.adState.interstitialLoading=!0,this.updateAdStatusUi();try{await Ut.prepareInterstitial({adId:gr?vx:gx,immersiveMode:!0})}catch(e){this.adState.interstitialReady=!1,this.adState.interstitialLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Interstitial prepare failed",this.updateAdStatusUi()}}}async showStageInterstitial(){if(!(!St||this.progress.adFreePurchased||!this.adState.initialized))try{if(!this.adState.interstitialReady){await this.prepareInterstitial(),L.tip.textContent="Interstitial is still loading. It should appear after the next stage.";return}await Ut.showInterstitial()}catch{this.adState.interstitialReady=!1,this.adState.lastError="Interstitial show failed",this.prepareInterstitial()}}async prepareRewardedAd(){if(!(!St||this.progress.adFreePurchased||!this.adState.initialized||!this.adState.canRequestAds||this.adState.rewardedReady||this.adState.rewardedLoading)){this.adState.rewardedLoading=!0,this.updateAdStatusUi();try{await Ut.prepareRewardVideoAd({adId:gr?Sx:_x,isTesting:gr})}catch(e){this.adState.rewardedReady=!1,this.adState.rewardedLoading=!1,this.adState.lastError=(e==null?void 0:e.message)||"Rewarded ad prepare failed",this.updateAdStatusUi()}}}async showRewardedAd(e="revive"){if(!(!St||!this.adState.rewardedReady))try{this.adState.rewardedPurpose=e,await Ut.showRewardVideoAd()}catch{this.adState.rewardedReady=!1,this.adState.rewardedPurpose="",this.prepareRewardedAd()}}showDoubleRewardAd(){if(this.pendingDoubleReward){if(!St||!this.adState.rewardedReady||this.progress.adFreePurchased){this.claimDoubleStageReward();return}this.showRewardedAd("double-stage-reward")}}claimDoubleStageReward(){var i;if(!this.pendingDoubleReward)return;const{stageId:e,credits:t}=this.pendingDoubleReward,n=`${e}:${t}`;this.progress.doubledStageRewards.includes(n)||(this.progress.doubledStageRewards.push(n),this.progress.doubledStageRewards=this.progress.doubledStageRewards.slice(-25),this.progress.credits+=t,this.pendingDoubleReward=null,Ht(this.progress),this.refreshProgressUi(),this.renderGarage(),(i=L.doubleRewardButton)==null||i.classList.add("hidden"),L.tip.textContent=`Stage reward doubled. +${t} CR bonus.`,this.audio.tone(980,.15,"triangle",.045),this.audio.tone(1240,.18,"triangle",.035))}revivePlayer(){var e;this.state.hasRevived||(this.state.hasRevived=!0,this.state.gameOver=!1,this.state.running=!0,this.forceRunningUntil=performance.now()+8e3,this.state.health=Math.round(this.state.maxHealth*.4),this.state.fuel=Math.round(this.state.maxFuel*.5),this.state.cameraShake=0,L.overlay.classList.add("hidden"),(e=L.overlayShareButton)==null||e.classList.add("hidden"),L.reviveButton.classList.add("hidden"),this.audio.playMusic(),this.showTopBanner(),L.tip.textContent="You've been revived! Drive carefully.",this.audio.tone(880,.18,"triangle",.05),this.audio.tone(1100,.24,"triangle",.04))}updateComboDisplay(){L.comboDisplay&&(this.state.combo>1?(L.comboDisplay.textContent=`x${this.state.combo} COMBO`,L.comboDisplay.classList.remove("hidden"),L.comboDisplay.className=`combo-display combo-level-${this.state.combo}`):L.comboDisplay.classList.add("hidden"))}getDailyChallenge(){const e=new Date().toISOString().slice(0,10);if(this.progress.dailyChallenge&&this.progress.dailyChallenge.date===e)return this.progress.dailyChallenge;const t=e.split("-").reduce((o,l)=>o+parseInt(l,10),0),n=t%$c.length,i=$c[n],r=t%i.targets.length,a={date:e,type:i.type,label:i.label,desc:i.desc.replace("{target}",i.targets[r]),target:i.targets[r],progress:0,completed:!1,rewardClaimed:!1};return this.progress.dailyChallenge=a,Ht(this.progress),a}getWeeklyChallenge(){const e=new Date,t=new Date(e);t.setDate(e.getDate()-e.getDay());const n=t.toISOString().slice(0,10);if(this.progress.weeklyChallenge&&this.progress.weeklyChallenge.week===n)return this.progress.weeklyChallenge;const i=t.getFullYear()+t.getMonth()*7+t.getDate(),r=Yc[i%Yc.length],a=r.targets[i%r.targets.length],o={week:n,type:r.type,label:r.label,desc:r.desc.replace("{target}",a),target:a,progress:0,completed:!1,rewardClaimed:!1};return this.progress.weeklyChallenge=o,Ht(this.progress),o}claimDailyLoginReward(){const e=new Date().toISOString().slice(0,10);if(this.progress.lastLoginDate===e)return"";const t=new Date;t.setDate(t.getDate()-1);const n=t.toISOString().slice(0,10),i=this.progress.lastLoginDate===n?(this.progress.loginStreak||0)+1:1,r=Math.min(i,Tx),a=bx+r*wx;this.progress.lastLoginDate=e,this.progress.loginStreak=i,this.progress.credits+=a,this.progress=Ia(this.progress),Ht(this.progress);const o=i>=7&&this.progress.unlockedLiveries.includes("legend-gold")?" Legend Gold livery unlocked.":"";return`Daily login streak ${i}: +${a} CR.${o}`}updateWeeklyChallenge(e,t){const n=this.getWeeklyChallenge();!n||n.completed||n.type!==e||(n.progress=Math.max(n.progress||0,t),n.progress>=n.target&&(n.completed=!0,n.rewardClaimed||(n.rewardClaimed=!0,this.progress.credits+=Kc,L.tip.textContent=`Weekly event complete! +${Kc} CR bonus.`,this.audio.tone(980,.15,"triangle",.045)),Ht(this.progress),this.refreshProgressUi()),this.updateDailyChallengeUi())}updateDailyChallenge(e,t){const n=this.progress.dailyChallenge;!n||n.completed||n.type!==e||(t>=n.target?(n.completed=!0,n.rewardClaimed||(n.rewardClaimed=!0,this.progress.credits+=qc,Ht(this.progress),this.refreshProgressUi(),L.tip.textContent=`Daily challenge complete! +${qc} CR bonus.`,this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.14,"triangle",.03))):n.progress=t,this.updateDailyChallengeUi())}updateDailyChallengeUi(){if(!L.dailyBadge)return;const e=this.getDailyChallenge(),t=this.getWeeklyChallenge();if(!e){L.dailyBadge.classList.add("hidden");return}const n=Math.min(100,Math.round(e.progress/e.target*100)),i=t?Math.min(100,Math.round((t.progress||0)/t.target*100)):0;L.dailyBadge.classList.remove("hidden"),L.dailyBadge.innerHTML=e.completed?`<span class="daily-done">Daily: ${e.label} ✓</span>`:`<span>Daily: ${e.label} ${n}%</span>`;const r=t!=null&&t.completed?`<span class="daily-done">Weekly: ${t.label} done</span>`:`<span>Weekly: ${(t==null?void 0:t.label)||"Event"} ${i}%</span>`;L.dailyBadge.innerHTML+=r}refreshProgressUi(){L.saveStageText.textContent=`Highest stage: Stage ${this.progress.highestStage}`,L.saveScoreText.textContent=`Best score: ${Math.round(this.progress.bestScore)}`,L.creditsText.textContent=`Credits: ${Math.round(this.progress.credits)} CR`,this.progress.loginStreak>0&&(L.creditsText.textContent+=` | Streak ${this.progress.loginStreak}d`),this.updateAdStatusUi()}updateAdStatusUi(){if(!L.adStatusText)return;if(!St){L.adStatusText.textContent="Ads: none on Windows";return}const e=gr?"test":"live",t=this.adState.canRequestAds?"requesting allowed":"request blocked",n="banner disabled",i=this.adState.interstitialReady?"interstitial ready":this.adState.interstitialLoading?"interstitial loading":"interstitial idle",r=this.adState.lastError?` | ${this.adState.lastError}`:"";L.adStatusText.textContent=`Ads: ${e}, ${t}, ${n}, ${i}${r}`}persistProgress(){const e=this.state.stageCompleted?this.state.stageIndex+2:this.state.stageIndex+1;this.progress.highestStage=Math.max(this.progress.highestStage,e),this.progress.bestScore=Math.max(this.progress.bestScore,Math.round(this.state.score)),this.progress.totalDistance+=Math.round(this.state.distance),this.progress=Ia(this.progress),Ht(this.progress),this.refreshProgressUi()}recordLeaderboardRun(e){const t={score:Math.round(this.state.score),stage:this.currentStage.id,track:this.currentStage.track.name,vehicle:this.selectedCar.label,drift:Math.round(this.state.driftScore),nearMisses:this.state.nearMissCount,outcome:e,date:new Date().toLocaleDateString()};return this.progress.localLeaderboard=[t,...this.progress.localLeaderboard||[]].sort((n,i)=>i.score-n.score).slice(0,10),Ht(this.progress),t}getScoreCardText(){var a;const e=(a=this.progress.localLeaderboard)==null?void 0:a[0],t=Math.round(this.state.score||(e==null?void 0:e.score)||this.progress.bestScore||0),n=(e==null?void 0:e.track)||this.currentStage.track.name,i=(e==null?void 0:e.vehicle)||this.selectedCar.label,r=Math.round(this.state.driftScore||(e==null?void 0:e.drift)||0);return`Need 4 Speed Karachi | ${n} | ${i} | Score ${t} | Drift ${r} | Near misses ${this.state.nearMissCount||(e==null?void 0:e.nearMisses)||0}`}shareScoreCard(){const e=this.getScoreCardText();navigator.share?navigator.share({title:"Need 4 Speed Karachi score",text:e}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{}),L.tip.textContent="Score card copied for sharing."}isMissionComplete(e=this.currentStage){return e.mission.type==="clean-finish"?this.state.health>=e.mission.target:e.mission.type==="fuel-save"?this.state.fuel>=e.mission.target:e.mission.type==="near-miss"?this.state.nearMissCount>=e.mission.target:e.mission.type==="score-target"?this.state.score>=e.mission.target:!1}setPaused(e){this.state.gameOver||this.state.stageCompleted||(this.state.paused=e,document.body.classList.toggle("settings-open",e),this.clearTouchInput(),L.settingsPanel.classList.toggle("hidden",!e),L.pauseButton.innerHTML=`<span class="icon-glyph">${e?">":"II"}</span><span class="icon-label">${e?"Resume":"Pause"}</span>`,L.pauseButton.setAttribute("aria-label",e?"Resume":"Pause"),e?(L.tip.textContent="Paused. Adjust settings or resume.",this.audio.suspend(),this.showTopBanner()):this.state.running&&(this.audio.resume(),this.audio.playMusic(),this.showTopBanner(),L.tip.textContent=Cs?`Hold left or right side of the road to steer. ${this.settings.tiltSteer?"Tilt steering is on.":"Enable tilt steering in Settings if you want."}`:`${this.currentStage.tip} Vehicle: ${this.selectedCar.label}.`))}clearTouchInput(){this.touchInput.steerZone=0,this.touchInput.brake=!1,this.touchInput.nitro=!1,this.steerPointerId=null,document.querySelectorAll("[data-touch]").forEach(e=>e.classList.remove("is-pressed"))}setSteerFromPointer(e){const t=this.container.getBoundingClientRect(),n=e-t.left;this.touchInput.steerZone=n<t.width*.5?-1:1}async configureTiltSteer(e){if(!e){this.motionSteer=0,this.settings.tiltSteer=!1,ys(this.settings),this.syncSettingsUi();return}if(typeof window.DeviceOrientationEvent>"u"){this.settings.tiltSteer=!1,ys(this.settings),this.syncSettingsUi(),L.tip.textContent="Tilt steering is not available on this device.";return}if(typeof window.DeviceOrientationEvent.requestPermission=="function")try{if(await window.DeviceOrientationEvent.requestPermission()!=="granted")throw new Error("denied")}catch{this.settings.tiltSteer=!1,ys(this.settings),this.syncSettingsUi(),L.tip.textContent="Tilt steering permission was denied.";return}this.settings.tiltSteer=!0,ys(this.settings),this.syncSettingsUi(),L.tip.textContent="Tilt steering enabled. Hold the phone like a steering wheel."}handleAppBackground(){this.clearTouchInput(),this.hideTopBanner(),this.audio.suspend(),this.state.running&&!this.state.paused&&!this.state.gameOver&&!this.state.stageCompleted&&(this.autoPausedFromBackground=!0,this.setPaused(!0),L.tip.textContent="Paused in background. Tap Resume when you return.")}updateSetting(e,t){this.settings[e]=t,ys(this.settings),this.audio.setSettings(this.settings),this.syncSettingsUi(),!this.settings.mute&&this.settings.music&&this.state.running&&!this.state.paused&&this.audio.playMusic()}bindEvents(){var t,n,i;window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",r=>{this.keys.add(r.code),r.code==="Escape"&&(r.preventDefault(),this.setPaused(!this.state.paused)),r.code==="Space"&&(r.preventDefault(),(!this.state.running||this.state.gameOver)&&this.startRun()),r.code}),window.addEventListener("keyup",r=>this.keys.delete(r.code)),window.addEventListener("blur",()=>{document.hidden&&this.handleAppBackground()}),document.addEventListener("visibilitychange",()=>{document.hidden?this.handleAppBackground():!this.adState.bannerVisible&&(this.state.running||this.state.paused)&&this.showTopBanner()});const e=r=>{r.preventDefault(),this.startRun()};if(L.overlayButton.addEventListener("click",e),(t=L.overlayShareButton)==null||t.addEventListener("click",r=>{r.preventDefault(),this.shareScoreCard()}),L.overlay.addEventListener("pointerup",r=>{r.target!==L.overlayButton&&(L.reviveButton&&!L.reviveButton.classList.contains("hidden")&&r.target===L.reviveButton||L.overlayShareButton&&!L.overlayShareButton.classList.contains("hidden")&&r.target===L.overlayShareButton||e(r))}),L.reviveButton.addEventListener("click",()=>this.showRewardedAd("revive")),(n=L.doubleRewardButton)==null||n.addEventListener("click",()=>this.showDoubleRewardAd()),(i=L.shareScoreButton)==null||i.addEventListener("click",()=>this.shareScoreCard()),L.pauseButton.addEventListener("click",()=>{this.state.paused?this.setPaused(!1):this.setPaused(!0)}),L.settingsButton.addEventListener("click",()=>this.setPaused(!0)),L.resumeButton.addEventListener("click",()=>this.setPaused(!1)),L.settingsPanel.addEventListener("pointerdown",r=>r.stopPropagation()),L.settingsPanel.addEventListener("pointermove",r=>r.stopPropagation()),L.settingsPanel.addEventListener("wheel",r=>r.stopPropagation(),{passive:!0}),L.settingsPanel.addEventListener("pointerdown",r=>r.stopPropagation()),L.settingsPanel.addEventListener("pointermove",r=>r.stopPropagation()),L.settingsPanel.addEventListener("wheel",r=>r.stopPropagation(),{passive:!0}),document.querySelectorAll("[data-settings-tab]").forEach(r=>{r.addEventListener("click",()=>this.setSettingsTab(r.dataset.settingsTab))}),L.muteToggle.addEventListener("change",r=>this.updateSetting("mute",r.target.checked)),L.musicToggle.addEventListener("change",r=>this.updateSetting("music",r.target.checked)),L.sfxToggle.addEventListener("change",r=>this.updateSetting("sfx",r.target.checked)),L.tiltToggle.addEventListener("change",r=>this.configureTiltSteer(r.target.checked)),document.querySelectorAll("[data-touch]").forEach(r=>{const a=r.dataset.touch,o=(l,c)=>{c.preventDefault(),this.touchInput[a]=l,r.classList.toggle("is-pressed",l)};r.addEventListener("pointerdown",l=>o(!0,l)),r.addEventListener("pointerup",l=>o(!1,l)),r.addEventListener("pointercancel",l=>o(!1,l)),r.addEventListener("pointerleave",l=>o(!1,l)),r.addEventListener("lostpointercapture",l=>o(!1,l))}),Cs){this.container.addEventListener("pointerdown",a=>{a.pointerType==="touch"&&(a.target.closest(".touch-controls, .top-actions, .settings-panel, .overlay-card")||(this.steerPointerId=a.pointerId,this.setSteerFromPointer(a.clientX)))}),this.container.addEventListener("pointermove",a=>{a.pointerType!=="touch"||a.pointerId!==this.steerPointerId||this.setSteerFromPointer(a.clientX)});const r=a=>{a.pointerType==="touch"&&this.steerPointerId===a.pointerId&&(this.touchInput.steerZone=0,this.steerPointerId=null)};this.container.addEventListener("pointerup",r),this.container.addEventListener("pointercancel",r),this.container.addEventListener("pointerleave",r),window.addEventListener("deviceorientation",a=>{if(!this.settings.tiltSteer)return;const o=typeof a.gamma=="number"?a.gamma:0;this.motionSteer=Oe.clamp(o/18,-1,1)})}}startRun(){var t;const e=this.getModelPath("player",this.selectedCar.key);if(e&&!this.modelTemplates.has(e)&&!this.failedModelPaths.has(e)){L.tip.textContent=`Loading ${this.selectedCar.label} model...`,this.loadCurrentPlayerModel().finally(()=>this.startRun());return}if(this.state.stageCompleted){const n=this.state.stageIndex+1;this.state=this.initialState(),this.state.stageIndex=n}else if(!this.state.running&&!this.state.gameOver){const n=this.state.stageIndex;this.state=this.initialState(),this.state.stageIndex=n}else this.state=this.initialState();this.selectedCar=this.getSelectedGarageVehicle(),this.state.maxSpeed=this.selectedCar.topSpeed,this.state.maxHealth=this.selectedCar.maxHealth??100,this.state.maxFuel=this.selectedCar.maxFuel??100,this.state.maxNitro=this.selectedCar.maxNitro??100,this.state.health=this.state.maxHealth,this.state.fuel=this.state.maxFuel,this.state.nitro=this.state.maxNitro,this.createPlayerCar(),this.applyTrackTheme(),this.state.running=!0,this.state.countdown=0,this.state.countdownStarted=!1,this.state.targetSpeed=Math.min(45,this.currentStage.speedCap*.35),this.state.speed=Math.min(22,this.state.targetSpeed),this.state.stageProgress=1,this.resetRoadsideAnchors(),this.player.position.set(0,.72,10),this.player.rotation.set(0,this.player.userData.baseYaw??0,0),this.traffic.forEach(n=>this.deactivate(n)),this.police.forEach(n=>this.deactivate(n)),this.roadblocks.forEach(n=>this.deactivate(n)),this.fuelCans.forEach(n=>this.deactivate(n)),this.healers.forEach(n=>this.deactivate(n)),this.resetFinishLine(),L.overlay.classList.add("hidden"),this.audio.resume(),(t=L.doubleRewardButton)==null||t.classList.add("hidden"),this.pendingDoubleReward=null,this.showTopBanner(),this.setPaused(!1),this.showRaceBanner("Go",this.currentStage.track.name,this.currentStage.track.vibe,1.2),L.tip.textContent=Cs?`${this.currentStage.name}: ${this.currentStage.mission.label}. Hold left or right side of the road to steer.${this.settings.tiltSteer?" Tilt steering is on.":""}`:`${this.currentStage.tip} Vehicle: ${this.selectedCar.label}.`,L.overlayButton.textContent="Start Run",this.audio.playMusic(!0),this.audio.tone(440,.18,"square",.05),this.currentStage.isBoss?(this.state.heat=Math.max(this.state.heat,this.currentStage.policeHeatThreshold+8),this.showRaceBanner("Boss Race",this.currentStage.track.name,"Survive the pursuit and clear the route",2.2),this.audio.playPoliceSiren()):this.selectedCar.premium&&(this.state.cinematicTimer=1.1,this.showRaceBanner("Premium Intro",this.selectedCar.label,"Launch sequence armed",1.6),this.audio.playNitroBurst()),this.updateHud()}debugSpawnPolice(){if(!this.state.running||this.state.paused||this.state.gameOver||this.state.stageCompleted){L.tip.textContent="Start a run, then press P to spawn police.";return}const e=this.currentStage;this.state.heat=Math.max(this.state.heat,e.policeHeatThreshold+32),this.state.pursuitLevel=Math.max(this.state.pursuitLevel,3),this.state.policeSpawn=0,this.state.roadblockSpawn=0,this.spawnPoliceCar(),this.spawnPoliceCar(),this.spawnRoadblock(),this.showRaceBanner("Debug Pursuit",`Level ${this.state.pursuitLevel}`,"Police and roadblock spawned",1.8),this.audio.playPoliceSiren(),L.tip.textContent="Debug: police pursuit spawned.",this.updateHud()}deactivate(e){e.visible=!1,e.userData.active=!1,e.position.set(0,-50,0)}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}render(){requestAnimationFrame(()=>this.render());const e=Math.min(this.clock.getDelta(),.033);this.renderFrame(e)}startFrameFallback(){if(this.frameFallback)return;let e=performance.now();this.frameFallback=window.setInterval(()=>{const t=performance.now();if(t-this.lastFrameAt<250)return;const n=Math.min((t-e)/1e3,.033);e=t,this.renderFrame(n)},100)}renderFrame(e){this.lastFrameAt=performance.now(),this.forceRunningUntil>performance.now()&&!this.state.gameOver&&!this.state.stageCompleted&&(this.state.running=!0,this.state.paused=!1),this.state.bannerTimer>0&&(this.state.bannerTimer=Math.max(0,this.state.bannerTimer-e),L.raceBanner.classList.toggle("hidden",this.state.bannerTimer<=0));const t=this.state.slowMoTimer>0?e*.46:e;if(this.state.slowMoTimer>0&&(this.state.slowMoTimer=Math.max(0,this.state.slowMoTimer-e)),this.state.running&&!this.state.gameOver&&!this.state.paused&&(this.updateState(t),this.updateWorld(t),this.updateHud()),this.updateNitroParticles(e),this.updateTrafficDust(e),this.updateCoins(e),L.speedVignette){const l=Oe.clamp((this.state.speed-100)/130,0,.72);L.speedVignette.style.opacity=l}const n=(Math.random()-.5)*this.state.cameraShake,i=(Math.random()-.5)*this.state.cameraShake*.5,a=this.getRoadCenterOffsetAtProgress(this.getTrackProgress())*.78+this.player.position.x*.28+this.state.roadDrift*.18;this.camera.position.x=Oe.lerp(this.camera.position.x,a+n,.08),this.camera.position.y=Oe.lerp(this.camera.position.y,10.2+this.state.speed*.01+i,.08),this.camera.position.z=Oe.lerp(this.camera.position.z,24-Math.min(2.2,this.state.speed*.009),.08),this.camera.fov=Oe.lerp(this.camera.fov,this.cameraBaseFov+Math.min(12,this.state.speed*.04),.1),this.camera.updateProjectionMatrix();const o=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+130));this.camera.lookAt(o+this.player.position.x*.18,1.8+this.state.bodyPitch*.16,-10),this.renderer.render(this.scene,this.camera)}updateState(e){const t=this.keys.has("ArrowLeft")||this.keys.has("KeyA"),n=this.keys.has("ArrowRight")||this.keys.has("KeyD"),i=this.keys.has("ArrowDown")||this.keys.has("KeyS")||this.touchInput.brake,r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchInput.nitro,a=this.currentStage;if(this.state.stageTime+=e,this.state.cinematicTimer>0){this.state.cinematicTimer=Math.max(0,this.state.cinematicTimer-e),this.state.cameraShake=Math.min(.42,this.state.cameraShake+e*.35),this.player.rotation.y=Oe.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+.18,.08),L.tip.textContent=`${this.selectedCar.label} rolling out.`;return}if(this.state.countdown>0){this.state.countdown-=e;const b=Math.ceil(this.state.countdown);if(b>0){(!this.state.countdownStarted||b!==Math.ceil(this.state.countdown+e))&&(this.audio.tone(520,.08,"triangle",.035),this.showRaceBanner("Countdown",String(b),`${a.track.name} - ${a.track.vibe}`,.22)),this.state.countdownStarted=!0,this.state.speed=Oe.lerp(this.state.speed,0,.2),this.state.targetSpeed=0,L.tip.textContent=`Get ready. ${a.track.name} opens in ${b}. Mission: ${a.mission.label}.`;return}this.state.countdown=0,this.audio.tone(760,.14,"square",.045),this.showRaceBanner("Go",a.track.name,a.track.vibe,1.2),L.tip.textContent=`${a.name}: ${a.mission.label}.`}this.state.targetSpeed+=this.selectedCar.accel*e,i&&(this.state.targetSpeed-=(110+this.selectedCar.grip*18)*e),i||(this.state.targetSpeed-=Math.max(0,8-this.selectedCar.accel*.03)*e),this.state.targetSpeed=Oe.clamp(this.state.targetSpeed,0,Math.min(this.state.maxSpeed,a.speedCap));let o=Math.min(this.state.maxSpeed,a.speedCap);this.state.nitroActive=!!(r&&this.state.nitro>2),this.state.nitroActive?(this.state.nitroWasActive||this.audio.playNitroBurst(),this.state.nitroWasActive=!0,o+=Math.min(this.selectedCar.nitroBoost??30,Math.max(12,a.speedCap*.12)),this.state.nitro=Math.max(0,this.state.nitro-34*e),this.state.cameraShake=Math.min(.34,this.state.cameraShake+e*.5),L.tip.textContent=`Nitro engaged. ${a.name} still enforces a speed cap.`):(this.state.nitroWasActive=!1,this.state.nitro=Math.min(this.state.maxNitro,this.state.nitro+12*e));const l=Math.abs(this.player.position.x)>7.2?.94:1,c=this.getRoadCenterOffsetAtProgress(this.getTrackProgress()),h=Math.abs(this.player.position.x-c),d=h>7.2?.88:h>5.3?.95:1;this.state.speed=Oe.lerp(this.state.speed,Math.min(this.state.targetSpeed,o)*l*d,.06),this.state.engineTimer+=e,this.state.engineTimer>.34&&this.state.speed>20&&!this.settings.mute&&this.settings.sfx&&(this.state.engineTimer=0,this.audio.rawTone(70+this.state.speed*1.15,.08,"sawtooth",.012+Math.min(.018,this.state.speed/9e3),this.state.nitroActive?120:0));const u=Oe.clamp((t?-1:0)+(n?1:0)+this.touchInput.steerZone+this.motionSteer,-1,1),f=Math.max(5.6,8.8-this.state.speed*.014);this.player.position.x+=u*e*(f+this.state.speed*.026)*this.selectedCar.grip,this.player.position.x=Oe.clamp(this.player.position.x,c-8.7,c+8.7),this.state.steerVisual=Oe.lerp(this.state.steerVisual,u,.12),this.state.bodyRoll=Oe.lerp(this.state.bodyRoll,-u*(.08+this.state.speed*7e-4),.12),this.state.bodyPitch=Oe.lerp(this.state.bodyPitch,i?.16:-.05,.08),this.state.roadDrift=Oe.lerp(this.state.roadDrift,u*Math.min(2.4,this.state.speed*.008),.06),this.state.cameraShake=Oe.lerp(this.state.cameraShake,0,.08);const g=Math.abs(u)*Oe.clamp((this.state.speed-70)/115,0,1)*Oe.clamp((h-2.2)/5.2,0,1);if(g>.24){const b=g*e*110;this.state.driftScore+=b,this.state.score+=b*.8,this.state.driftTimer+=e,this.state.driftTimer>.45&&(this.state.driftTimer=0,this.audio.playDrift()),this.updateWeeklyChallenge("drift",this.state.driftScore)}else this.state.driftTimer=Math.max(0,this.state.driftTimer-e*2);this.player.rotation.z=Oe.lerp(this.player.rotation.z,this.state.bodyRoll,.12),this.player.rotation.x=Oe.lerp(this.player.rotation.x,this.state.bodyPitch,.1);const x=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+90)),m=Oe.clamp((x-c)*.035,-.22,.22);this.player.rotation.y=Oe.lerp(this.player.rotation.y,(this.player.userData.baseYaw??0)+m-u*.1,.12),this.state.distance+=this.state.speed*e*1.6,this.state.stageProgress+=this.state.speed*e*1.6,this.state.score+=this.state.speed*e*.72*a.scoreBonus,this.state.comboTimer>0&&(this.state.comboTimer-=e,this.state.comboTimer<=0&&(this.state.combo=0,this.state.comboMultiplier=1,this.updateComboDisplay())),this.updateDailyChallenge("score",this.state.score),this.updateDailyChallenge("distance",this.state.distance),this.updateWeeklyChallenge("score",this.state.score),this.state.fuel=Math.max(0,this.state.fuel-e*(2+this.state.speed*.02)*this.selectedCar.fuelDrain*a.fuelUseScale),this.state.heat=Oe.clamp(this.state.heat+Math.max(0,this.state.speed-135)*e*(a.isBoss?.12:.085)-e*1.45,0,100);const p=this.state.pursuitLevel;this.state.pursuitLevel=this.state.heat<a.policeHeatThreshold?0:Math.min(5,1+Math.floor((this.state.heat-a.policeHeatThreshold)/14)),this.state.pursuitLevel>p&&(this.showRaceBanner("Pursuit Escalated",`Level ${this.state.pursuitLevel}`,this.state.pursuitLevel>=4?"Spike teams and rammers inbound":this.state.pursuitLevel>=3?"Roadblocks authorized":"Interceptors closing in",1.5),this.audio.playPoliceSiren(),this.state.pursuitLevel>=4&&(this.spawnPoliceCar(),this.spawnPoliceCar())),this.updateFinishLine(e),this.state.fuel<this.state.maxFuel*.25&&(L.tip.textContent="Fuel is running low. Grab the next can."),this.state.health<35&&(L.tip.textContent="Heavy damage. Another hard impact could end the run."),this.state.heat>Math.max(72,a.policeHeatThreshold+8)&&(L.tip.textContent="Police pressure is high. Expect interceptors."),this.state.trafficSpawn+=e,this.state.policeSpawn+=e,this.state.fuelSpawn+=e,this.state.healerSpawn+=e,this.state.roadblockSpawn+=e,this.state.hornTimer+=e,this.state.sirenTimer+=e;const S=Oe.lerp(1.3,.45,this.state.speed/225)*a.trafficBias;this.state.trafficSpawn>=S&&this.state.stageProgress>60&&(this.state.trafficSpawn=0,this.spawnTrafficCar()),this.state.heat>a.policeHeatThreshold&&this.state.policeSpawn>=Oe.lerp(9,3.5,this.state.heat/100)*a.policeSpawnScale&&(this.state.policeSpawn=0,this.spawnPoliceCar(),this.state.pursuitLevel>=4&&Math.random()>.55&&this.spawnPoliceCar(),this.state.sirenTimer>2.2&&(this.state.sirenTimer=0,this.audio.playPoliceSiren())),this.state.pursuitLevel>=3&&this.state.roadblockSpawn>=Oe.lerp(10,4.5,this.state.pursuitLevel/5)&&!this.roadblocks.some(b=>b.userData.active)&&(this.state.roadblockSpawn=0,this.spawnRoadblock()),this.state.fuelSpawn>=a.fuelSpawnEvery&&(this.state.fuelSpawn=0,this.spawnFuelCan()),this.state.health<this.state.maxHealth*.6&&this.state.healerSpawn>=8.5&&!this.healers.some(b=>b.userData.active)&&(this.state.healerSpawn=0,this.spawnHealer()),(this.state.health<=0||this.state.fuel<=0)&&this.endRun()}updateFinishLine(e){const t=this.currentStage;if(!this.finishLine||this.state.stageCompleted)return;const n=Math.max(0,t.length-this.state.stageProgress);this.finishLine.visible=n<=130,this.finishLine.position.z=Oe.lerp(this.finishLine.position.z,-16-n*.16,Math.min(1,e*8)),this.finishLine.position.x=Oe.lerp(this.finishLine.position.x,this.getRoadCenterOffsetAtProgress(this.getTrackProgress(this.state.stageProgress+n)),Math.min(1,e*6)),n<=120&&(L.tip.textContent=`Finish line ahead. Clear ${t.name}.`),n<=0&&this.completeStage()}completeStage(){var d,u;const e=this.currentStage,t=this.isMissionComplete(e),n=e.missionReward+(t?e.bonusReward:0),i=Ft.find(f=>Io[f.key]===this.state.stageIndex+1);let r="No new car unlock this stage.";const a=t&&this.state.health>this.state.maxHealth*.6?3:t?2:1,o=`stage_${e.id}`,l=this.progress.stageStars[o]||0;a>l&&(this.progress.stageStars[o]=a),this.state.running=!1,this.state.stageCompleted=!0,this.state.speed=0,this.state.targetSpeed=0,this.state.stageProgress=e.length,this.audio.stopMusic(),this.hideTopBanner(),this.audio.tone(523,.16,"triangle",.045),this.audio.tone(659,.2,"triangle",.045),this.progress.credits+=n,e.isBoss&&(this.progress.bossClears=Math.max(0,this.progress.bossClears||0)+1,this.updateWeeklyChallenge("boss_clear",this.progress.bossClears)),this.progress.lifetimeStageClears=Math.max(0,this.progress.lifetimeStageClears||0)+1,i&&!this.progress.ownedVehicles.includes(i.key)?(this.progress.ownedVehicles.push(i.key),this.progress.selectedVehicleKey=i.key,this.selectedCar=this.getSelectedGarageVehicle(),r=`Unlocked ${i.label}. It is now equipped in your garage.`):t&&(r="Mission bonus secured."),this.persistProgress(),this.recordLeaderboardRun("Stage clear"),this.pendingDoubleReward={stageId:e.id,credits:n},this.renderGarage(),this.renderTrackMaps(),this.finishLine&&(this.finishLine.visible=!0,this.finishLine.position.z=this.player.position.z-5,this.finishLine.position.x=this.getRoadCenterOffsetAtProgress(this.getTrackProgress(e.length)));const c=rh(this.state.stageIndex+1),h="★".repeat(a)+"☆".repeat(3-a);this.updateOverlay(`Stage ${e.id} Complete ${h}`,e.name,`Finish line crossed. Earned ${n} CR.${t?` Mission cleared: ${e.mission.label}.`:` Mission missed: ${e.mission.label}.`} ${r} Next up: ${c.name}, ${c.lengthKm} KM. Press Start Stage ${c.id} to continue.`,c.track),L.overlayButton.textContent=`Start Stage ${c.id}`,(d=L.overlayShareButton)==null||d.classList.remove("hidden"),(u=L.doubleRewardButton)==null||u.classList.toggle("hidden",St&&!this.progress.adFreePurchased?!this.adState.rewardedReady:!1),window.setTimeout(()=>this.startBackgroundModelLoading(),1200),e.id%xx===0&&this.showStageInterstitial()}updateWorld(e){const t=this.state.speed*e*mi;this.roadMarkers.forEach(i=>{i.position.z+=t*16,i.position.z>18&&(i.position.z-=520),i.position.x=i.userData.laneX+this.getRoadCenterOffsetAtZ(i.position.z)}),this.roadGlows.forEach(i=>{i.position.z+=t*16,i.material.opacity=.1+Math.sin(performance.now()*.003+i.position.z*.04)*.03,i.position.z>18&&(i.position.z-=520),i.position.x=i.userData.laneX+this.getRoadCenterOffsetAtZ(i.position.z)});const n=this.getRoadCenterOffsetAtProgress(this.getTrackProgress());this.shoulderLeft&&this.shoulderRight&&(this.shoulderLeft.position.x=n-12.2,this.shoulderRight.position.x=n+12.2,this.shoulderLeft.rotation.z=0,this.shoulderRight.rotation.z=0),this.roadside.forEach(i=>{i.position.z+=t*11,i.position.z>28&&(i.position.z=-380-Math.random()*120,i.userData.baseOffset=18+Math.random()*18,i.scale.setScalar(.9+Math.random()*.35),i.userData.anchoredX=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset),typeof i.userData.anchoredX!="number"&&(i.userData.anchoredX=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset),i.position.x=i.userData.anchoredX,i.rotation.y=i.userData.side<0?.18:-.18}),this.lightPosts.forEach((i,r)=>{i.position.z+=t*10.5,i.position.z>28&&(i.position.z=-420-r*18,i.userData.anchoredX=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset),typeof i.userData.anchoredX!="number"&&(i.userData.anchoredX=this.getRoadCenterOffsetAtZ(i.position.z)+i.userData.side*i.userData.baseOffset),i.position.x=i.userData.anchoredX}),this.buildings.forEach(i=>{i.material.emissive=new Ne(988970),i.material.emissiveIntensity=.08}),this.updateTrafficCars(e),this.updatePoliceCars(e),this.updateRoadblocks(e),this.updateFuelCans(e),this.updateHealers(e)}spawnTrafficCar(){const e=this.traffic.find(i=>!i.userData.active);if(!e)return;const t=Math.floor(Math.random()*_s.length);e.userData.active=!0,e.userData.speed=e.userData.type==="bus"?48+Math.random()*28:e.userData.type==="rickshaw"?34+Math.random()*18:e.userData.type==="truck"?44+Math.random()*24:52+Math.random()*80,e.userData.lane=t,e.userData.laneTarget=t,e.userData.changeCooldown=.7+Math.random()*1.3,e.visible=!0;const n=-220-Math.random()*140;e.position.set(this.getLaneWorldX(t,n),.72,n),e.rotation.set(0,0,0)}spawnPoliceCar(){const e=this.police.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.userData.aggression=.85+Math.random()*.55,e.visible=!0;const t=-210-Math.random()*40,n=Math.random()>.5?0:2;e.position.set(this.getLaneWorldX(n,t),.72,t),e.rotation.set(0,0,0)}spawnRoadblock(){const e=this.roadblocks.find(i=>!i.userData.active);if(!e)return;const t=Math.floor(Math.random()*_s.length),n=-175-Math.random()*80;e.userData.active=!0,e.userData.lane=t,e.visible=!0,e.position.set(this.getLaneWorldX(t,n),0,n),e.rotation.set(0,0,0),this.showRaceBanner("Roadblock",`Lane ${t+1}`,"Break line or dodge wide",1.2),this.audio.playPoliceSiren()}spawnFuelCan(){if(this.fuelCans.some(i=>i.userData.active))return;const e=this.fuelCans.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-180-Math.random()*60,n=Math.floor(Math.random()*_s.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.2,t),e.rotation.set(0,0,0),e.visible=!1}spawnHealer(){const e=this.healers.find(i=>!i.userData.active);if(!e)return;e.userData.active=!0,e.visible=!0;const t=-190-Math.random()*70,n=Math.floor(Math.random()*_s.length);e.userData.lane=n,e.position.set(this.getLaneWorldX(n,t),1.45,t),e.rotation.set(0,0,0),e.visible=!1}updateTrafficCars(e){this.state.countdown>0||this.traffic.forEach(t=>{if(!t.userData.active)return;if(t.userData.changeCooldown-=e,t.userData.changeCooldown<=0&&t.position.z<-20&&Math.random()>.76){const i=[0,1,2].filter(r=>r!==t.userData.lane);t.userData.laneTarget=i[Math.floor(Math.random()*i.length)],t.userData.changeCooldown=1.8+Math.random()*1.8}if(t.userData.laneTarget!==t.userData.lane){const i=this.getLaneWorldX(t.userData.laneTarget,t.position.z);t.position.x=Oe.lerp(t.position.x,i,e*1.7),Math.abs(t.position.x-i)<.28&&(t.userData.lane=t.userData.laneTarget)}else t.position.x=Oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane,t.position.z),e*2);const n=(this.state.speed-t.userData.speed)*e*mi*16;if(t.position.z+=n+.55,t.rotation.z=Math.sin((performance.now()*.001+t.position.z)*.7)*.025,t.rotation.y=Oe.lerp(t.rotation.y,(t.userData.baseYaw??0)+(this.getLaneWorldX(t.userData.laneTarget,t.position.z)-t.position.x)*.03,.08),!this.nearMisses.has(t)){const i=Math.abs(t.position.x-this.player.position.x),r=Math.abs(t.position.z-this.player.position.z);r<18&&i<5.2&&this.state.hornTimer>2.6&&Math.random()>.65&&(this.state.hornTimer=0,this.audio.playHorn());const a=t.userData.type==="bike",o=a?1.4:2.2,l=a?3.2:4.2;if(r<6&&i<l&&i>o){this.nearMisses.add(t),this.state.nearMissCount+=1,this.state.combo=Math.min(Mx,this.state.combo+1),this.state.comboMultiplier=this.state.combo,this.state.comboTimer=yx,this.state.slowMoTimer=Math.max(this.state.slowMoTimer,.28);const h=(a?300:150)*this.state.comboMultiplier;this.state.score+=h,a?(L.tip.textContent=this.state.combo>1?`Bike weave x${this.state.combo}! +${h} CR`:`Bike weave! +${h}`,this.audio.tone(880+this.state.combo*50,.14,"square",.035)):(L.tip.textContent=this.state.combo>1?`Near miss x${this.state.combo}! +${h} CR`:"Near miss! +150",this.audio.tone(660+this.state.combo*40,.12,"triangle",.03)),this.updateComboDisplay(),this.updateDailyChallenge("near_miss",this.state.nearMissCount),this.updateDailyChallenge("combo_max",this.state.comboMultiplier)}}this.isCollision(t,2.7,5.1)?(this.applyDamage(14),this.state.speed=Math.max(0,this.state.speed-35),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-40),this.state.cameraShake=Math.min(.75,this.state.cameraShake+.42),this.state.combo=0,this.state.comboMultiplier=1,this.state.comboTimer=0,this.updateComboDisplay(),L.tip.textContent="Traffic impact.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>28&&(this.state.score+=20,this.state.heat=Math.min(100,this.state.heat+1.5),this.deactivate(t))})}updatePoliceCars(e){this.state.countdown>0||this.police.forEach(t=>{if(!t.userData.active)return;const n=1+this.state.pursuitLevel*.16,i=this.player.position.x+Math.sin(performance.now()*(.0015+this.state.pursuitLevel*18e-5))*(1.3+this.state.pursuitLevel*.18);t.position.x=Oe.lerp(t.position.x,i,e*1.3*t.userData.aggression*n),t.position.z+=this.state.speed*e*mi*(18+this.state.pursuitLevel*.8)+.8+this.state.heat*.018,t.rotation.z=Oe.clamp((this.player.position.x-t.position.x)*-.04,-.18,.18),t.rotation.y=Oe.lerp(t.rotation.y,(t.userData.baseYaw??0)+(i-t.position.x)*.02,.08),this.isCollision(t,2.9,5.2)?(this.applyDamage(20),this.state.heat=Math.min(100,this.state.heat+10),this.state.cameraShake=Math.min(.85,this.state.cameraShake+.5),L.tip.textContent="Police ram.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>30&&(this.state.score+=100+this.state.pursuitLevel*35,L.tip.textContent="Police evaded. Heat bonus banked.",this.deactivate(t))})}updateRoadblocks(e){this.roadblocks.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*mi*16+.35,t.position.x=Oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.rotation.z=Math.sin(performance.now()*.006)*.035,this.isCollision(t,3.2,4.4)?(this.applyDamage(24),this.state.speed=Math.max(0,this.state.speed-52),this.state.targetSpeed=Math.max(0,this.state.targetSpeed-64),this.state.heat=Math.min(100,this.state.heat+14),this.state.cameraShake=Math.min(1.1,this.state.cameraShake+.72),L.tip.textContent="Roadblock hit. Pursuit level rising.",this.triggerImpactFx(),this.deactivate(t)):t.position.z>28&&(this.state.score+=180,this.state.heat=Math.min(100,this.state.heat+4),L.tip.textContent="Roadblock dodged. +180",this.deactivate(t)))})}updateFuelCans(e){this.fuelCans.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*mi*16+.45,t.position.x=Oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2.4,t.rotation.x=0,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.4&&Math.abs(t.position.x-this.player.position.x)<2.2?(this.state.fuel=Math.min(this.state.maxFuel,this.state.fuel+38),this.state.score+=90,L.tip.textContent="Fuel collected.",this.audio.tone(740,.14,"triangle",.045),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}updateHealers(e){this.healers.forEach(t=>{t.userData.active&&(t.position.z+=this.state.speed*e*mi*16+.4,t.position.x=Oe.lerp(t.position.x,this.getLaneWorldX(t.userData.lane??1,t.position.z),e*2),t.visible=t.position.z>-85,t.rotation.y+=e*2,t.rotation.z+=e*1.1,t.visible&&Math.abs(t.position.z-this.player.position.z)<4.6&&Math.abs(t.position.x-this.player.position.x)<2.3?(this.state.health=Math.min(this.state.maxHealth,this.state.health+28),this.state.score+=110,L.tip.textContent="Health restored.",this.audio.tone(880,.12,"triangle",.04),this.audio.tone(1100,.16,"sine",.03),this.deactivate(t)):t.position.z>28&&this.deactivate(t))})}isCollision(e,t,n){return Math.abs(e.position.x-this.player.position.x)<t&&Math.abs(e.position.z-this.player.position.z)<n}applyDamage(e){const t=Math.max(.55,1-(this.selectedCar.damageReduction??0));this.state.cleanRun=!1,this.state.health=Math.max(0,this.state.health-e*t)}updateHud(){const e=Math.min(100,this.state.stageProgress/this.currentStage.length*100),t=this.state.health/this.state.maxHealth*100,n=this.state.fuel/this.state.maxFuel*100,i=this.state.nitro/this.state.maxNitro*100;L.stage.textContent=`Stage ${this.currentStage.id}`,L.speed.textContent=`${Math.round(this.state.speed*1.6)} KM/H`,L.score.textContent=`${Math.round(this.state.score)}`,L.heat.textContent=`${Math.round(this.state.heat)}%`,L.pursuit&&(L.pursuit.textContent=this.state.pursuitLevel>0?`Level ${this.state.pursuitLevel}`:"Clear"),L.limit.textContent=`${Math.round(this.currentStage.speedCapKmh)} KM/H`;const r=Math.max(0,this.currentStage.length-this.state.stageProgress),a=r/1e3;L.distanceRemaining.textContent=a>=1?`${a.toFixed(1)} KM`:`${Math.round(r)} M`,L.distanceRemaining.classList.toggle("finish-near",e>=95),L.distanceRemaining.classList.toggle("finish-mid",e>=70&&e<95),L.healthBar.style.width=`${t}%`,L.fuelBar.style.width=`${n}%`,L.nitroBar.style.width=`${i}%`,L.progressBar.style.width=`${e}%`,L.driftBar&&(L.driftBar.style.width=`${Math.min(100,this.state.driftScore/45)}%`),L.healthText.textContent=`${Math.round(t)}%`,L.fuelText.textContent=`${Math.round(n)}%`,L.nitroText.textContent=`${Math.round(i)}%`,L.progressText.textContent=`${Math.round(e)}%`,L.driftText&&(L.driftText.textContent=`${Math.round(this.state.driftScore)}`),this.renderTrackMaps()}updateOverlay(e,t,n,i=this.currentStage.track){L.overlayKicker.textContent=e,L.overlayTitle.textContent=t,L.overlayBody.textContent=n,L.overlayTrackMap&&(L.overlayTrackMap.innerHTML=nh(i,0)),L.overlayTrackName&&(L.overlayTrackName.textContent=i.name),L.overlayTrackZone&&(L.overlayTrackZone.textContent=`${i.zone} · ${i.difficulty}`),L.overlay.classList.remove("hidden")}endRun(){var n;this.state.gameOver=!0,this.state.running=!1,this.state.stageCompleted=!1,this.hideTopBanner(),this.audio.stopMusic(),this.audio.tone(130,.35,"sawtooth",.06),this.persistProgress(),this.recordLeaderboardRun("Run over");const e=this.state.health<=0?"Wrecked Out":"Out of Fuel";L.overlayButton.textContent="Restart",this.updateOverlay(e,"Run Over",`${this.selectedCar.label} | Score ${Math.round(this.state.score)} | Distance ${Math.round(this.state.distance)} m | Heat ${Math.round(this.state.heat)}% | Mission progress ${Math.min(this.state.nearMissCount,this.currentStage.mission.target)}/${this.currentStage.mission.target}. Press Space to restart.`,this.currentStage.track),(n=L.overlayShareButton)==null||n.classList.remove("hidden");const t=!this.state.hasRevived&&St&&this.adState.rewardedReady&&!this.progress.adFreePurchased;L.reviveButton.classList.toggle("hidden",!t),window.setTimeout(()=>this.startBackgroundModelLoading(),1200)}}new Hx(document.querySelector("#game-view"));export{Dr as A,nl as W};
