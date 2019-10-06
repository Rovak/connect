/* @flow */

import type {
    TestFunction,
    SubtestTronSignTransaction,
} from 'flowtype/tests';

import type {
    TestTronSignTransactionPayload,
    ExpectedTronSignTransactionResponse,
} from 'flowtype/tests/tron-sign-transaction';

const DEFAULT_PATH = "m/44'/195'/0'/0/0";

const transferTrx = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'C565',
                ref_block_hash: '6CD623DBE83075D8',
                expiration: 1528768890000,
                timestamp: 1528768831987,
                contract: {
                    transfer_contract: {
                        to_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                        amount: 1000000,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            // path: DEFAULT_PATH,
            payload: {
                signature: '2b33a98884401db2563c1006c55107315d543d2b4851047c8884cfee4b0e4a1c0c8faac87670cbf006daddb5c7c16f92ee9808e28f77e8ee56ca8f6ef940bf0301',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/transferTrx',
    };
};

const sendTrc10 = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'E7C3',
                ref_block_hash: '69E2ABB19969F1E7',
                expiration: 1528997142000,
                timestamp: 1528997083831,
                contract: {
                    transfer_asset_contract: {
                        asset_id: '1002000',
                        asset_name: 'BitTorrent',
                        asset_decimals: 6,
                        asset_signature: '304402202e2502f36b00e57be785fc79ec4043abcdd4fdd1b58d737ce123599dffad2cb602201702c307f009d014a553503b499591558b3634ceee4c054c61cedd8aca94c02b',
                        to_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                        amount: 1,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'df215d532492d060b27414abf38cbc638c8e2b85c5c159961675062b04b1d3433a37f5387f5fa40440f50ecf150dc2521438f9bc93ec2ef264114d1d09d6c60900',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/sendTrc10',
    };
};

const voteWitness = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: '906E',
                ref_block_hash: '2597B4DAC069C352',
                expiration: 1530986184000,
                timestamp: 1530985887463,
                contract: {
                    vote_witness_contract: {
                        votes: [
                            {
                                vote_address: 'TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF',
                                vote_count: 1000000,
                            },
                            {
                                vote_address: 'TTcYhypP8m4phDhN6oRexz2174zAerjEWP',
                                vote_count: 100000,
                            },
                            {
                                vote_address: 'TE7hnUtWRRBz3SkFrX8JESWUmEvxxAhoPt',
                                vote_count: 100000,
                            },
                            {
                                vote_address: 'TVMP5r12ymtNerq5KB4E8zAgLDmg2FqsEG',
                                vote_count: 10000,
                            },
                            {
                                vote_address: 'TRni6NxF8CQVcywcDm67sEpCYCo7BUGXCD',
                                vote_count: 1000,
                            },
                        ],
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '2c0e9582c4a256e17cea0e19dd1c81757eaa7d4c556a202920fd920b893477bf24d3c2651821438b32c84795d1c0af9f07285034674cebe1af9e3b434830f30301',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/voteWitness',
    };
};

const witnessCreate = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    witness_create_contract: {
                        url: 'http://cryptochain.network',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'dd0c627bfa653923ac005568842311927fb85cc52ae230ed5c5323b3415f0156402bf18216daa676c442bc4e4faab4ee8f6329b4cdff2c9ae024172036eacc6000',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/witnessCreate',
    };
};

const assetIssue = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    asset_issue_contract: {
                        name: 'CryptoChain',
                        abbr: 'CCT',
                        total_supply: 9999999999,
                        frozen_supply: [
                            { frozen_amount: 1000, frozen_days: 10 },
                            { frozen_amount: 10000, frozen_days: 20 },
                            { frozen_amount: 100000, frozen_days: 30 },
                        ],
                        trx_num: 1000,
                        num: 1,
                        precision: 0,
                        start_time: 1514764800000,
                        end_time: 1546300800000,
                        description: 'CryptoChain Token Issue Test',
                        url: 'http://cryptochain.network',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '56871037285dc1c5c94439f955a1e4f9382ab35b712f478ab2cfc86d0eea8676614e7a62e25ce06fa4bdd08c4805b08f3b822d518e3550dc11e0db50dafa36f601',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/assetIssue',
    };
};

const witnessUpdate = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    witness_update_contract: {
                        update_url: 'http://cryptochain.network',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '49866309f3bf616b47a56538b7ece41db84a4701484e6f05564f2eebe44da9ad3eccbd330680a48182365e943086a1d5913f79d9a680374abb0201a29b59eeee01',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/witnessUpdate',
    };
};

const participateAsset = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            // Gas overflow
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    participate_asset_issue_contract: {
                        to_address: 'THChUb7p2bwY6ReAiJXao6qc2ZGn88T46v',
                        asset_id: '1000166',
                        asset_name: 'CryptoChain',
                        asset_decimals: 0,
                        asset_signature: '30450221008417d04d1caeae31f591ae50f7d19e53e0dfb827bd51c18e66081941bf04639802203c73361a521c969e3fd7f62e62b46d61aad00e47d41e7da108546d954278a6b1',
                        amount: 1,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '21d52c10178ca45f3f2e319869abab7ff894cc7a9dce8768c2302f08575683c001b93e62281fe68d8abbbd720faf6da4146430a50ee47f2ac3d49112891a0e2701',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/participateAsset',
    };
};

const accountUpdate = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    account_update_contract: {
                        account_name: 'CryptoChainTest',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '669cf87812199d9ae3b2d55e97886255e0be969a4e5081e90d123a308162dada56c3fcbf7ee9c71946ac063fc599a4796717540d63da0e66af0c460420d5553600',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/accountUpdate',
    };
};

const freezeBalanceBandwidth = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    freeze_balance_contract: {
                        frozen_balance: 10000000,
                        frozen_duration: 3,
                        resource: 0,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'ffb7ded81f1f6cbd56fe7cfb9671bf35d324deaeecc8fd197c1e6ef230bbc3953025222805cb7d3404e13735ff2adf9298863ca9cc1b0a5cda8bd69faa6b676201',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const freezeBalanceEnergy = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    freeze_balance_contract: {
                        frozen_balance: 10000000,
                        frozen_duration: 3,
                        resource: 1,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '5bed7f27013b63f31617abd868584b5d786993b3ce9dfe9fe644b29cd4c056bf65b78f4fbffebd776ae46445fb61a19dc5e5774a41fd079c3daaa2eaba62209100',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceEnergy',
    };
};

const freezeBandwidthRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    freeze_balance_contract: {
                        frozen_balance: 10000000,
                        frozen_duration: 3,
                        resource: 0,
                        receiver_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '9078775b89d6949a05ead448964313a6fcc766ccee8eaa3b3afbf7fa1ee113030ec57b8ff547140eacf9656aaf2b3e4bffebba242e005131a556759744dd9aaf00',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBandwidthRental',
    };
};

const freezeBalanceEnergyRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    freeze_balance_contract: {
                        frozen_balance: 10000000,
                        frozen_duration: 3,
                        resource: 1,
                        receiver_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '026295679d06a671175a782af3e51e1277a4d0d7f9de8cc432bc4d2ead2a6ca8134004307743d838f92b942ae3b10dd3aa70afa03480fcce1ac14b540702d98101',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceEnergyRental',
    };
};

const unfreezeBalanceBandwidth = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    unfreeze_balance_contract: {
                        resource: 0,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '985c6bd1f70e0226317a33fa602a5a4a64912bc8e5d5fc13c3d84c49d05e5cd0491ac25f78edde5da1f04e32960190b1cc7052e0f27800ac79ead14e2b573a5401',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/unfreezeBalanceBandwidth',
    };
};

const unfreezeBalanceEnergy = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    freeze_balance_contract: {
                        frozen_balance: 10000000,
                        frozen_duration: 3,
                        resource: 0,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'ffb7ded81f1f6cbd56fe7cfb9671bf35d324deaeecc8fd197c1e6ef230bbc3953025222805cb7d3404e13735ff2adf9298863ca9cc1b0a5cda8bd69faa6b676201',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/unfreezeBalanceEnergy',
    };
};

const unfreezeBalanceBandwidthRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    unfreeze_balance_contract: {
                        resource: 0,
                        receiver_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'a26adba07d80cc4bc79a324126d5fb50200ef67b108639cade4d87cafaccad441f886b96f1305f2ec06c81307a733ea4ad478b2294c86bb97a772ae24b299f7e00',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/unfreezeBalanceBandwidthRental',
    };
};

const unfreezeBalanceEnergyRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    unfreeze_balance_contract: {
                        resource: 1,
                        receiver_address: 'TLrpNTBuCpGMrB9TyVwgEhNVRhtWEQPHh4',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'cb64cef911c826e47a0189ca1682653aa6dd5638b8cb45b525422292b6fbb270260263247c545aec4f0df0932a31c8be586f93abb1a118d7f27618a85a28a72601',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/unfreezeBalanceEnergyRental',
    };
};

const withdrawBalance = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    withdraw_balance_contract: {},
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '2970f4e16aa16d80d4b55160f5fa32cd09ff879ce4a2ce6f4e7c20d9bb1da473356030d1ad233e8b480968dc4ba713f584a0784f12e9c86127d590cd05dcff1600',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/withdrawBalance',
    };
};

const unfreezeAsset = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    unfreeze_asset_contract: {},
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: 'aa365eecf332b816f524995171cb4c71bfabae50257c3f852a74b62916f77d2568bef33bc7778f2527aec29d26f7d270e7d93437639a5d37efa898e0c432f65a00',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/unfreezeAsset',
    };
};

const updateAsset = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    update_asset_contract: {
                        description: 'CryptoChain Token New Description',
                        url: 'http://cryptochain.network/token',
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '4a55a7cf30e7daaa8f5630398d4067eeceb16f91bcb6c8b66dd77e718f9edc141ce06f22ef1635a4ce5e3f49dd3dff4e6e3658643d6799a2538fb070f63b0bae01',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/updateAsset',
    };
};

const proposalCreate = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    proposal_create_contract: {
                        parameters: [
                            { key: 0, value: 36000000 },
                            { key: 6, value: 300000000000 },
                            { key: 4, value: 5000000000 },
                        ],
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '6a7779361bef18c4fb89f23af3c372be7b5101c660afb0866ec82110e095d86c22d65c84d92ede65ecf96decab03badaa08da7a8b2ec02262af5edea823a1c8800',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/proposalCreate',
    };
};

const proposalApprove = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    proposal_approve_contract: {
                        proposal_id: 10000,
                        is_add_approval: false,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '2db949bd170de2274942f78e8781d0cf67569f70c6eb27a93e1587b7a0fc1f9719e1b5de8492721775e6ec1b94b1aa0dc679ed1b91414a3fb2e8ef2a7e471d0900',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/proposalApprove',
    };
};

const proposalDelete = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: DEFAULT_PATH,
            transaction: {
                ref_block_bytes: 'D0EF',
                ref_block_hash: '6CD6025AFD991D7D',
                expiration: 1531429101000,
                timestamp: 1531428803023,
                contract: {
                    proposal_delete_contract: {
                        proposal_id: 10000,
                    },
                },
            },
        },
    ];
    const expectedResponses: Array<ExpectedTronSignTransactionResponse> = [
        {
            payload: {
                signature: '485ea1bb8a233e821f64e2b3a495272fc4491e889ae17b221b18b388d66a43be13986eee5f1c7b67d29ea6113a4fcf13d5684834e7513028250112639f3e153d00',
            },
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/proposalDelete',
    };
};

export const tronSignTransaction = (): TestFunction => {
    const availableSubtests = {
        transferTrx,
        sendTrc10,
        voteWitness,
        witnessCreate,
        assetIssue,
        witnessUpdate,
        participateAsset,
        accountUpdate,
        freezeBalanceBandwidth,
        proposalDelete,
        proposalCreate,
        proposalApprove,
        freezeBalanceEnergy,
        freezeBalanceEnergyRental,
        freezeBandwidthRental,
        unfreezeBalanceBandwidth,
        unfreezeBalanceEnergy,
        unfreezeBalanceBandwidthRental,
        unfreezeBalanceEnergyRental,
        withdrawBalance,
        unfreezeAsset,
        updateAsset,
    };

    return {
        testName: 'TronSignTransaction',
        mnemonic: 'mnemonic_12',
        subtests: {
            ...availableSubtests,
        },
    };
};
