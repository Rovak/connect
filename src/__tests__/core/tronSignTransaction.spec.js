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
            path: DEFAULT_PATH,
            serialized_tx: '037f02960276a50dc8327449105f59cbb3b2ca071240f7a678c4257f26df86287a58bfda988e83803ccbe8bc2d6cfeaca18f87b6c9e20ea1a77c570d5435493300',
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
            serialized_tx: 'c5deb6f053ca7f9dfd9a54677cdeaee6ea084983cea62f572e60db4bdd9fbcec13b9c262fe6302ce71b291c4976a533cbecf5194c4ef5cd0d46457c822c1bb8d01',
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
            serialized_tx: 'a35e28f7e5d887a4e90dbee56ea630d1d0b4eab0f70edde80a233895edfbde2c4e35628d11157b8a8fabd711880aaca19468f41ac9751c93dc7ec17a305aa1d801',
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
            serialized_tx: '692859b8d668ae5146f04512ba97cf2e205b429bcf462a6fa48726be8894be81480e935a3f9d3684cf82e5378d425310066e1ea1b1d99eaebdfa58c32f0cdb8701',
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
            serialized_tx: '861a62e4d0ae920284a5d936220563b5536102b43044103011fc0b523592ef1c3a8a852075d3cce2525c048377b66005f04184d6ec7fe661c0634abc93ba414a00',
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
            serialized_tx: '6feca2a4558ded324f439c7cecf596f1378fbd6071569a99ea28f06c4cb1fb754720125f8721c0663e3768b7a888ee8c37fbbb9690e192b8908e225ba49a2aaa01',
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
            serialized_tx: '0f752c52ee5daea6c740e0783398a03b1002a4a4e244ca0037981f18c0ad539b71b00bc1398297077373e303ddfe3fc48f7b8dc9afc4146bae5d7d448667d3c300',
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
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: 'c4c1381d3a3e23010f19f8055df6d78990fdac619ae8be030425e0de0726f4fb665618a2c663c891cb5f8b26d009d79d3650008bda429e274bf4eee3330c806a00',
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
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '6c10c4f0149135749507607f890dc529083fe41504b22052dd68d946b4caed704a116f2d6a767934ed43ae6d4c6ccf0002317e00dfdd5415ed8c72f8c6b5f74a01',
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
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '14fe46619fed9d9acf863c464854bfedd257e4072e31116f9e144b846cb112725343e0aa13cd0b856b53f2265ef2c19d9610eafee0b6c120ba501d06a4e2c49901',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const freezeBandwidthRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '9885b510e3aff53b9e85511acf6b6a803a79472d5cdd27774bdc8363877e99685a9b71c2eec44de392b77bf00f6fdbab8b0a58fbee6d2401c1b2ea798a87b9a901',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const freezeBalanceEnergyRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '34b73c06cfb238c2ef8071e17bf1c8618cc2f14db9faef494cb9f4151631c9da33d06e2c66d78d1d3bcf4e955e8e82d7e343cc065c96d5e435d9251074433fe600',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const unfreezeBalanceBandwidth = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '64613fa2d2b2ea18f9d37a7b97cc6c76f56c59f05b1d28806617c7b89ecc16994b275145f43a5289d49ef227f74a5cc3ac039534048416c9b3e51d82029a60e301',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const unfreezeBalanceEnergy = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '7f3f7d2f03da17c8f950bb3a606248c0a37092522b0e9ca824f44d00c6278be96e78b87c202727b9d32599118cf3f132d82b75cfdd30a02075c9c1fe0096167101',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const unfreezeBalanceBandwidthRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '90b0b27b0820ca46e6a2c42e6c80a1a7a304ec4a1859db863bad19b5db49eac3412b7015f5f637894d4ffecd88b44de8e4b2ec789b77090997b5353b17a22bfe00',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const unfreezeBalanceEnergyRental = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: 'e8176724732452c7b21654922df0efc796b4ed56b2f408b0dd6ac90eb593fa9f6a67145af27e44bcfd5e515cfb6014d747ce43aec9a819eb2a4a321425dad92100',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const withdrawBalance = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '1b59288fa1086c2022eca7d34a63a9cb2adc8c3e72fd49602c6e048c5ab0a44d774f42b589021b0c9d582c6c861706b877336f5d6a114cbf5dbda0ff66cdf02900',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const unfreezeAsset = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '2a5857885bb81ddb210f7a5fa1ae60e0acf9280b2bfb3a5c1463dee02e68ebce7486e11bf519c2cd6b42063ea6db919708ef9d2c8c0917636da4e7ea4518eda100',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const updateAsset = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: 'd6b39a251c5dbc0684672d4850c08eec9e5d1df2a9848e01d2b195e00962258651765bc314a5bd56b98aa91da70dfbbdc71526eef3cbf7c62878e541793bddba00',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const proposalCreate = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '648d96f3a33ba90c5b3333c54d56fff2b81a70c80567aafe4eab092c1c1c09ff0b7724039a6f16a937f6bf1fa2dbb0c9843e1cbec63aeb8805141128b36d001301',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const proposalApprove = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: 'a6cdfed4863d3f4d6adfba1444e47b277026d35d52988f223d2bed5eaa979c266ab74e7212df24f0f058661522bec05419ccfb28321c646632a8c502f06dda9e00',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

const proposalDelete = (): SubtestTronSignTransaction => {
    const testPayloads: Array<TestTronSignTransactionPayload> = [
        {
            method: 'tronSignTransaction',
            path: "m/44'/1'/0'/0/0",
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
            serialized_tx: '636577a6800c6ab4e7c11a72d5f0b3d865e190b51714cf5c4bd1d71bc37f54643582382314c236b489376bc4ab5d0612e3c6f9434e97db6dd41c517757cc8d7101',
        },
    ];

    return {
        testPayloads,
        expectedResponses,
        specName: '/freezeBalanceBandwidth',
    };
};

export const tronSignTransaction = (): TestFunction => {
    const testName = 'TronSignTransaction';
    const availableSubtests = {
        knownTrc20Token: transferTrx,
        unknownTrc20Token: sendTrc10,
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
        testName,
        mnemonic: 'mnemonic_12',
        subtests: {
            ...availableSubtests,
        },
    };
};
