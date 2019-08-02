/* @flow */

declare module 'flowtype/tests/tron-get-address' {
    declare export type TestTronGetAddressPayload = {
        method: string,
        path: string | Array<number>,
    };

    declare export type ExpectedTronGetAddressResponse = {
        payload: {
            address: string,
        },
    };
}
