import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customerlistrender-april21';

  customerdata = [
    {
        "id":1,
        "paymentId":5,
        "groupKey":"EK",
        "shopId":1,
        "priceGroupId":null,
        "encoderName":"md5",
        "hashPassword":"a256a310bc1e5db755fd392c524028a8",
        "active":true,
        "doubleOptinConfirmDate":"2011-11-23T12:00:00+0100",
        "doubleOptinEmailSentDate":"2011-11-23T00:00:00+0100",
        "doubleOptinRegister":true,
        "email":"test@example.com",
        "salutation": "mr",
        "firstname": "Max",
        "lastname": "Mustermann",
        "firstLogin":"2011-11-23T00:00:00+0100",
        "lastLogin":"2012-01-04T14:12:05+0100",
        "accountMode":0,
        "confirmationKey":"",
        "sessionId":"uiorqd755gaar8dn89ukp178c7",
        "newsletter":0,
        "validation":"",
        "affiliate":0,
        "paymentPreset":0,
        "languageId":"1",
        "referer":"",
        "internalComment":"",
        "failedLogins":0,
        "lockedUntil":null
    },
    {
        "id":2,
        "paymentId":4,
        "groupKey":"H",
        "shopId":1,
        "priceGroupId":null,
        "encoderName":"md5",
        "hashPassword":"352db51c3ff06159d380d3d9935ec814",
        "active":true,
        "doubleOptinConfirmDate":null,
        "doubleOptinEmailSentDate":null,
        "doubleOptinRegister":false,
        "email":"mustermann@b2b.com",
        "salutation": "mr",
        "firstname": "Max",
        "lastname": "Mustermann",
        "firstLogin":"2012-08-30T00:00:00+0200",
        "lastLogin":"2012-08-30T11:43:17+0200",
        "accountMode":0,
        "confirmationKey":"",
        "sessionId":"66e9b10064a19b1fcf6eb9310c0753866c764836",
        "newsletter":0,
        "validation":"0",
        "affiliate":0,
        "paymentPreset":4,
        "languageId":"1",
        "referer":"",
        "internalComment":"",
        "failedLogins":0,
        "lockedUntil":null
    },
    {
      "id":3,
      "paymentId":5,
      "groupKey":"EK",
      "shopId":1,
      "priceGroupId":null,
      "encoderName":"md5",
      "hashPassword":"a256a310bc1e5db755fd392c524028a8",
      "active":true,
      "doubleOptinConfirmDate":"2011-11-23T12:00:00+0100",
      "doubleOptinEmailSentDate":"2011-11-23T00:00:00+0100",
      "doubleOptinRegister":true,
      "email":"test@example.com",
      "salutation": "mr",
      "firstname": "Max",
      "lastname": "Mustermann",
      "firstLogin":"2011-11-23T00:00:00+0100",
      "lastLogin":"2012-01-04T14:12:05+0100",
      "accountMode":0,
      "confirmationKey":"",
      "sessionId":"uiorqd755gaar8dn89ukp178c7",
      "newsletter":0,
      "validation":"",
      "affiliate":0,
      "paymentPreset":0,
      "languageId":"1",
      "referer":"",
      "internalComment":"",
      "failedLogins":0,
      "lockedUntil":null
  },
  {
      "id":4,
      "paymentId":4,
      "groupKey":"H",
      "shopId":1,
      "priceGroupId":null,
      "encoderName":"md5",
      "hashPassword":"352db51c3ff06159d380d3d9935ec814",
      "active":true,
      "doubleOptinConfirmDate":null,
      "doubleOptinEmailSentDate":null,
      "doubleOptinRegister":false,
      "email":"mustermann@b2b.com",
      "salutation": "mr",
      "firstname": "Max",
      "lastname": "Mustermann",
      "firstLogin":"2012-08-30T00:00:00+0200",
      "lastLogin":"2012-08-30T11:43:17+0200",
      "accountMode":0,
      "confirmationKey":"",
      "sessionId":"66e9b10064a19b1fcf6eb9310c0753866c764836",
      "newsletter":0,
      "validation":"0",
      "affiliate":0,
      "paymentPreset":4,
      "languageId":"1",
      "referer":"",
      "internalComment":"",
      "failedLogins":0,
      "lockedUntil":null
  },
  {
    "id":5,
    "paymentId":5,
    "groupKey":"EK",
    "shopId":1,
    "priceGroupId":null,
    "encoderName":"md5",
    "hashPassword":"a256a310bc1e5db755fd392c524028a8",
    "active":true,
    "doubleOptinConfirmDate":"2011-11-23T12:00:00+0100",
    "doubleOptinEmailSentDate":"2011-11-23T00:00:00+0100",
    "doubleOptinRegister":true,
    "email":"test@example.com",
    "salutation": "mr",
    "firstname": "Max",
    "lastname": "Mustermann",
    "firstLogin":"2011-11-23T00:00:00+0100",
    "lastLogin":"2012-01-04T14:12:05+0100",
    "accountMode":0,
    "confirmationKey":"",
    "sessionId":"uiorqd755gaar8dn89ukp178c7",
    "newsletter":0,
    "validation":"",
    "affiliate":0,
    "paymentPreset":0,
    "languageId":"1",
    "referer":"",
    "internalComment":"",
    "failedLogins":0,
    "lockedUntil":null
},
{
    "id":6,
    "paymentId":4,
    "groupKey":"H",
    "shopId":1,
    "priceGroupId":null,
    "encoderName":"md5",
    "hashPassword":"352db51c3ff06159d380d3d9935ec814",
    "active":true,
    "doubleOptinConfirmDate":null,
    "doubleOptinEmailSentDate":null,
    "doubleOptinRegister":false,
    "email":"mustermann@b2b.com",
    "salutation": "mr",
    "firstname": "Max",
    "lastname": "Mustermann",
    "firstLogin":"2012-08-30T00:00:00+0200",
    "lastLogin":"2012-08-30T11:43:17+0200",
    "accountMode":0,
    "confirmationKey":"",
    "sessionId":"66e9b10064a19b1fcf6eb9310c0753866c764836",
    "newsletter":0,
    "validation":"0",
    "affiliate":0,
    "paymentPreset":4,
    "languageId":"1",
    "referer":"",
    "internalComment":"",
    "failedLogins":0,
    "lockedUntil":null
}
]

}