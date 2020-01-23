/* @flow */
import type {
    TestFunction,
} from 'flowtype/tests';

import type {
    TestTronGetAddressPayload,
    ExpectedTronGetAddressResponse,
} from 'flowtype/tests/tron-get-address';

export const tronGetAddress = (): TestFunction => {
    const testPayloads: Array<TestTronGetAddressPayload> = [
        {
            method: 'tronGetAddress',
            path: "m/44'/195'/0'/0/0",
        },
        {
            method: 'tronGetAddress',
            path: "m/44'/160'/0'/0/0",
        },
        {
            method: 'tronGetAddress',
            path: "m/44'/199'/0'/0/9999",
        },
    ];
    const expectedResponses: Array<ExpectedTronGetAddressResponse> = [
        {
            payload: {
                address: 'TTmw3iwd5MXVfHxrM1ZDZ2sYddS2xZr4bk',
            },
        },
        { success: false },
        { success: false },
    ];

    return {
        testName: 'TronGetAddress',
        mnemonic: 'mnemonic_12',
        testPayloads,
        expectedResponses,
    };
};
