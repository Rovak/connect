# 5.0.24
__fixed__
- removed popup delay if lazy loading
- validation of device state if method is using emptyPassphrase
- retyped Device, distinguished by "type" field
- eslint fixes

# 5.0.23
__fixed__
- npm package dependencies
- Unsupported browser (IE)

# 5.0.21
__added__
- Added `TrezorConnect.pushTransaction` method
- Added bundle parameters in `TrezorConnect.cipherKeyValue` method
- Added bundle parameters in `TrezorConnect.getPublicKey` method
- Added bundle parameters in `TrezorConnect.getAddress` method
- Added bundle parameters in `TrezorConnect.ethereumGetAddress` method
- Added bundle parameters in `TrezorConnect.nemGetAddress` method
- Added bundle parameters in `TrezorConnect.stellarGetAddress` method
- Added type conversion from stellar-sdk to protobuf in `TrezorConnect.stellarSignTransaction` method
- Popup warning with outdated firmware and outdated bridge
- Tests with emulator
- Added '@babel/runtime' to package dependency
__fixed__
- Fixed device authentication and popup open delay
- Minor fixes in popup view
- Ethereum methods accepts values with '0x' prefix
- Ethereum methods returns checksummed addresses (with different checksum typ for RSK network)
- Ethereum methods returns values prefixed with '0x'

# 5.0.20
__added__
- Added firmware check against CoinInfo.support values
- Added outdate firmware warning in popup
__fixed__
- Fixed `TrezorConnect.requestLogin` parameters
- Fixed race condition in UI.REQUEST_CONFIRMATION
- Fixed popup.html buttons click


# 5.0.18
__added__
- Added iframe lazy loading
__fixed__
- Build script for npm module
- Ultimate flow type
- Reorganized files and imports
- Minor fixes in code

# 5.0.17
__added__
- Added `TrezorConnect.getAccountInfo` method
- Added `TrezorConnect.signTransaction` method
- Added `TrezorConnect.composeTransaction` method
- Added `TrezorConnect.signMessage` method
- Added `TrezorConnect.verifyMessage` method
- Added `TrezorConnect.getAddress` method
- Added `TrezorConnect.requestLogin` method
- Added cashaddr support for BCH
- Added documentation
__fixed__
- Fixed `TrezorConnect.customMessage` logic and security
- Fixed `TrezorConnect.stellarSignTransaction` parameters compatible with "js-stellar-base"
- Fixed flowtype declarations for all methods. Params and responses
__removed__
- Removed unnecessary settings from ConnectSettings
- Removed unused methods from TrezorConnect

# 5.0.16
__added__
- Added `TrezorConnect.stellarSignTransaction` method
__changed__
- Changed `TrezorConnect.ethereumSignTransaction` parameters
__removed__
- Removed type and event fields from RESPONSE

# 5.0.15
__fixed__
- Library exports

# 5.0.14
__added__
- Added `TrezorConnect.nemGetAddress` method
- Added `TrezorConnect.nemSignTransaction` method
- Added `TrezorConnect.stellarGetAddress` method
- Added `TrezorConnect.customMessage` method
__fixed__
- Fixed flowtype


# 5.0.13
__added__
- Added messages from json instead of config_signed.bin
- Added popup.html UI/css
- Karma + Jasmine tests
__fixed__
__removed__
- Removed support for Bridge v1 and chrome extension


# 5.0.10
From this version trezor-connect is used by Trezor Password Manager
