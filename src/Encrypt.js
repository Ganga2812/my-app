import React, {useState, useEffect} from 'react';
import "./App.css";
import CryptoJS from 'crypto-js';
import { findAllByDisplayValue } from '@testing-library/dom';
import {Crypt,RSA} from 'hybrid-crypto-js';

export class Encrypt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ciphertext: 'test',
            ciphertext2: '',
            ciphertext3: {"v":"hybrid-crypto-js_0.1.0"},
            plainText:'',
            key:'',
            privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
            'MIICWgIBAAKBgE9rwjDXUD08KXTVJvpSj4ZzXAhBV+UBowqYFET3565GaP3t4Mxa\n' +
            'KRGkZPtfbG7a5QdfAqlxE7u/FDVxOddpzVettvh6NGzZ8/llxfXZ+ycwA3lAfxga\n' +
            'H/phstT+iaBwqYiDpeu2w55Lm7zWtICioGnZ38ovfquApMIpo/V1qvELAgMBAAEC\n' +
            'gYBOJRU5wWGuHtgboO9tNncKL8/KP6EgL3AhKGopQlOv4o/D6p9Z8wyd00eZHtcu\n' +
            'bCsWCaIw3pYwEV7tBq+HCQ+FsRsE4rmMT76bSLA2OgGo9GXPaeML3zK2ANCAPK4p\n' +
            '3/rPzkc7Bg/g5lLt8eT4kcE9UMVe9ZzEFuCZISnajSGJwQJBAJPQHiY5j71roCKM\n' +
            'bXtsCdUDzzfOAR8IpH1QqgAFv2rxwZZywA9QowJ++0hg52He2EBxXjD6V3XVQTlJ\n' +
            'ca1ZF3kCQQCJjPLjKM7gv8HuDAJhvEgAL7exHsPrhMJakVO8w0b+nejXeuEHfsTC\n' +
            '2S+dyDHtbVRbwkzz+UbtRW2G0dp5ljejAkBLZyd6KHMDFhwig7B1/a8mU0MqHJTF\n' +
            '2ArRQoz2Zfg3/gvbS75eEayWYWCek5B1hNCcTzjVk196ZMdZCfZLj99BAkB5Ep3A\n' +
            'oWznmyJCPEPkb2wY7eeMef4N0r+YJI9GecSF3czTzo9An67lq3IkOdDoofE9C1vc\n' +
            '7DAoLZJot1LM7xJtAkBE2Y2JkFTGmTYyYpOQX9ZvQJCoockPE65VBHhdUEaV/zkH\n' +
            'bA7xt7GljyipL1FxfFEQ85CJrK0cNl1ARRuNp6FJ\n' +
            '-----END RSA PRIVATE KEY-----',
            publicKey: '-----BEGIN PUBLIC KEY-----\n' +
            'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgE9rwjDXUD08KXTVJvpSj4ZzXAhB\n' +
            'V+UBowqYFET3565GaP3t4MxaKRGkZPtfbG7a5QdfAqlxE7u/FDVxOddpzVettvh6\n' +
            'NGzZ8/llxfXZ+ycwA3lAfxgaH/phstT+iaBwqYiDpeu2w55Lm7zWtICioGnZ38ov\n' +
            'fquApMIpo/V1qvELAgMBAAE=\n' +
            '-----END PUBLIC KEY-----'
        };
        
        this.encryptString = this.encryptString.bind(this);
        this.decryptString = this.decryptString.bind(this);
    }

    encryptString(e) {
        var t0 = performance.now();
        var plaintext = this.refs.abc.value;
        var key = this.refs.ads.value;
        this.state.ciphertext = CryptoJS.AES.encrypt(plaintext, key);
        
        this.setState = {
            ciphertext: CryptoJS.AES.encrypt(plaintext, key)
        }
        this.refs.editCiphertext.innerHTML = this.state.ciphertext;
        this.refs.editKey.innerHTML = key;
        var t1 = performance.now();
        var time = t1 - t0;
        this.refs.editTime.innerHTML = time.toFixed(3) + ' milliseconds to compute';
    }

    decryptString(e) {
        var t0 = performance.now();
        var ciphertext = this.state.ciphertext;
        var key = this.refs.ads.value;
        let plaintext = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
        this.refs.editPlaintext.innerHTML = plaintext;
        var t1 = performance.now();
        var time = t1 - t0;
        this.refs.editTime.innerHTML = time.toFixed(3) + ' milliseconds to compute';
    }

    render() {

    return(
        <div>
        <h2>AES Encrpytion</h2>  
        
        <div>
            <label>String: </label>
            <input type = "text" ref = "abc"></input>
        </div>
        <div>
            <label>Key: </label>
            <input type = "text" ref = "ads"></input>
        </div>
            <div>
                <button onClick = {(event) => this.encryptString(event)}>Encrypt</button>
                <button onClick = {() => this.decryptString()}>Decrypt</button>
            </div>
       <div>
           <label contentEditable='true' ref = 'plaintext' >Plaintext: </label> 
           <label contentEditable='true' ref='editPlaintext'></label>
       </div>
       <div>
           <label contentEditable='true' ref = 'ciphertext'>Ciphertext: </label> 
           <label type = 'text' contentEditable='true' ref='editCiphertext' value={this.state.ciphertext}>{this.state.ciphertext}</label>
       </div>
       <div>
           <label contentEditable='true' ref = 'Key'>Key Used: </label> 
           <label contentEditable='true' ref='editKey'></label>
       </div>
       <div>
           <label contentEditable='true' ref = 'Time'>Time Taken: </label> 
           <label contentEditable='true' ref='editTime'></label>
       </div>
       <h2>RSA Encrpytion</h2>  
        <div>
            <label>String: </label>
            <input type = "text" ref = "rrr"></input>
        </div>
        <div>
            <button onClick = {(event) => this.encryptRSAString(event)}>Encrypt</button>
            <button onClick = {() => this.decryptRSAString()}>Decrypt</button>
        </div>
       
       <div>
           <label contentEditable='true' ref = 'plaintext2'>Plaintext: </label> 
           <label contentEditable='true' ref='editPlaintext2' ></label>
       </div>
       <div>
           <label contentEditable='true' ref = 'ciphertext2'>Ciphertext: </label> 
           <label contentEditable='true' ref='editCiphertext2'></label>
       </div>
       <div>
           <label contentEditable='true' ref = 'Time2'>Time Taken: </label> 
           <label contentEditable='true' ref='editTime2'></label>
       </div>
       </div>
    );
    };
    
   

   

    encryptRSAString(e) {
        var t0 = performance.now();  
        var crypt = new Crypt();
        var plaintext = this.refs.rrr.value;
        var array = [];
        this.state.ciphertext3 = crypt.encrypt(this.state.publicKey, plaintext);;
        var ciphertext = JSON.parse(this.state.ciphertext3);
        this.refs.editCiphertext2.innerHTML = ciphertext.cipher;
        this.state.ciphertext2 = ciphertext.cipher;
        var t1 = performance.now();
        var time = t1 - t0;
        this.refs.editTime2.innerHTML = time.toFixed(3) + ' milliseconds to compute';
        return false;
    }

    decryptRSAString(e) {
        var t0 = performance.now();
        var crypt = new Crypt();
        var ciphertext = this.state.ciphertext3;
        var plaintext = crypt.decrypt(this.state.privateKey, ciphertext);
        this.refs.editPlaintext2.innerHTML = plaintext.message;
        var t1 = performance.now();
        var time = t1 - t0;
        this.refs.editTime2.innerHTML = time.toFixed(3) + ' milliseconds to compute';
        return false;

    }
    
}


export default Encrypt; 