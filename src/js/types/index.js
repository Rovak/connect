/* @flow */
'use strict';

/*
* Public types accessible from npm library
*/

import { UI_EVENT, DEVICE_EVENT, TRANSPORT_EVENT } from '../constants';
import * as TRANSPORT from '../constants/transport';
import * as POPUP from '../constants/popup';
import * as UI from '../constants/ui';
import * as DEVICE from '../constants/device';

export type CoreMessage = {
    +event: string,
    +type: string,
    +payload: any,

    id?: number, // response id in ResponseMessage
    success?: boolean, // response status in ResponseMessage
}

// Override MessageEvent type to have access to "ports" field and typed "data"
export interface PostMessageEvent extends Event {
    +origin: string,
    +lastEventId: string,
    +source: WindowProxy,
    +ports: Array<MessagePort>,
    +data: ?CoreMessage,
}

export type Deferred<T> = {
    id?: string,
    device: ?any,
    promise: Promise<T>,
    resolve: (t: T) => void,
    reject: (e: Error) => void,
};

export type Features = {
    vendor: string,
    major_version: number,
    minor_version: number,
    patch_version: number,
    bootloader_mode: boolean,
    device_id: string,
    pin_protection: boolean,
    passphrase_protection: boolean,
    language: string,
    label: string,
    // coins: CoinType[],
    coins: Array<any>,
    initialized: boolean,
    revision: string,
    bootloader_hash: string,
    imported: boolean,
    pin_cached: boolean,
    passphrase_cached: boolean,
    state?: string,
    needs_backup?: boolean,
    firmware_present?: boolean,
}

export type DeviceStatus = 'available' | 'occupied' | 'used';
export type DeviceFirmwareStatus = 'valid' | 'outdated' | 'required';

export type Device = $Exact<{
    +type: 'acquired',
    +path: string,
    +label: string,
    +firmware: DeviceFirmwareStatus,
    +status: DeviceStatus,
    state: ?string,
    features: Features,
}> | $Exact<{
    +type: 'unacquired',
    +path: string,
    +label: string,
}> | $Exact<{
    +type: 'unreadable',
    +path: string,
    +label: string,
}>

export type Settings = {
    priority?: number,
    connectSrc?: string,
    popup?: boolean,
    transportReconnect?: boolean,
    webusb?: boolean,
    pendingTransportEvent?: boolean,
}

export type T_POPUP = typeof POPUP;
export type DeviceMessageType = $Values<typeof DEVICE>;
export type DeviceMessage = {
    event: typeof DEVICE_EVENT,
    type: DeviceMessageType,
    payload: Device,
}

export type T_UI_EVENT = typeof UI_EVENT;
export type T_UI = typeof UI;
export type UiMessageType = $Values<typeof UI>;
export type UiMessage = {
    event: typeof UI_EVENT,
    type: UiMessageType,
    payload: {
        device: Device,
        code?: string,
        browser?: any,
    },
}

export type { UiResponse } from './ui-response';

export type TransportMessageType = $Values<typeof TRANSPORT>;
export type TransportMessage = {
    event: typeof TRANSPORT_EVENT,
    type: TransportMessageType,
    payload: Object,
}

/* eslint-disable no-redeclare */
declare function F_EventListener(type: typeof DEVICE_EVENT, handler: (event: DeviceMessage) => void): void;
declare function F_EventListener(type: typeof UI_EVENT, handler: (event: UiMessage) => void): void;
declare function F_EventListener(type: typeof TRANSPORT_EVENT, handler: (event: TransportMessage) => void): void;
declare function F_EventListener(type: DeviceMessageType, handler: (device: Device) => void): void;
/* eslint-enable no-redeclare */

export type EventListener = typeof F_EventListener;

// export type {
//     $CipherKeyValue,
//     $ComposeTransaction,
//     $CustomMessage,
//     $EthereumGetAddress,
//     $EthereumSignMessage,
//     $EthereumSignTransaction,
//     $EthereumVerifyMessage,
//     $GetAccountInfo,
//     $GetAddress,
//     $GetDeviceState,
//     $GetFeatures,
//     $GetPublicKey,
//     $RequestLogin,
//     $NEMGetAddress,
//     $NEMSignTransaction,
//     $SignMessage,
//     $SignTransaction,
//     $StellarGetAddress,
//     $StellarSignTransaction,
//     $VerifyMessage
// } from './params';

export * from './params';
export * from './response';

// export type {
//     CipherKeyValue$,
//     ComposeTransaction$,
//     CustomMessage$,
//     EthereumGetAddress$,
//     EthereumSignMessage$,
//     EthereumSignTransaction$,
//     EthereumVerifyMessage$,
//     GetAccountInfo$,
//     GetAddress$,
//     GetDeviceState$,
//     GetFeatures$,
//     GetPublicKey$,
//     RequestLogin$,
//     NEMGetAddress$,
//     NEMSignTransaction$,
//     SignMessage$,
//     SignTransaction$,
//     StellarGetAddress$,
//     StellarSignTransaction$,
//     VerifyMessage$
// } from './response';
