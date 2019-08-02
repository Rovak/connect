/* @flow */

import type { Transaction as TronTransaction } from '../../js/types/tron.js';

declare module 'flowtype/tests/tron-sign-transaction' {
    declare export type TestTronSignTransactionPayload = {
        method: string,
        path: string | Array<number>,
        transaction: TronTransaction,
    };
    declare export type ExpectedTronSignTransactionResponse = {
        success?: boolean,
        payload?: {
            r: string,
            s: string,
            v?: number,
        },
    };
}
