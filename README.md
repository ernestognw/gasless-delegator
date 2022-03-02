## Gasless Delegator ✨

Gasless Delegator is an example of how to compose Open Zeppelin smart contracts library with Open Zeppelin Defender services to automate governance free delegations for your users and holders.

It uses an instance of the [ERC20Votes.sol](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes) to have an example token capable of receiving `delegateBySig` gasless transactions.

Also uses [Defender Relay](https://docs.openzeppelin.com/defender/relay) to pay for transactions on behalf of the users and [Defender Autotask](https://docs.openzeppelin.com/defender/autotasks) to automate relay execution.







                                                                                          ┌─────────────┐
                                                                                          │             │
                                                                                          │ Subsidizer  │
                                                                                          │             │
                                                                                          └──────┬──────┘
                                                                                                 │ ETH to fund
                                                                                                 │ delegations
                                                                    ┌────────────────────────────┼────────┐      ┌────────────────────────────────────────────────┐
                                                                    │                            │        │      │                                                │
                                                                    │                            │        │      │   pragma solidity 0.8.10;                      │
                                                                    │                            │        │      │                                                │
                                                                    │                            │        │      │   ...                                          │
                                ┌────────┐    ┌──────────────┐      │  ┌──────────┐       ┌──────▼────┐   │      │                                                │
                                │        │    │              ├──────┼──►          ├───────►           │   │      │   contract GaslessToken is ..., ERC20Votes {   │
                                │  User  ├────►      UI      │      │  │ Autotask │       │  Relayer  ├───┼───┐  │     ...                                        │
                                │        │    │              ◄──────┼──┤          ◄───────┤           │   │   │  │                                                │
                                └────────┘    └───┬──────▲───┘      │  └──────────┘       └───────────┘   │   └──┼────►delegateBySig(...) {}                      │
                                                  │      │          │                                     │      │                                                │
                                                  │      │          │                                     │      │     ...                                        │
                                                  │      │          │       OpenZeppelin Defender         │      │   }                                            │
                                                  │      │          │                                     │      │                                                │
                                                  │      │          └─────────────────────────────────────┘      └────────────────────────────────────────────────┘
                                        Request   │      │ Return
                                        EIP712    │      │ signed
                                        signature │      │ typed data
                                                  │      │
                                                  │      │
                                                  │      │
                                              ┌───▼──────┴───┐
                                              │              │
                                              │    Wallet    │
                                              │              │
                                              └──────────────┘











## Workflow

1. Deploy an [ERC20Votes token](harhdhat)
2. Claim some tokens of your contract (optional)
3. Follow the [Autotask creation guid](autotask)
4. [Run the UI](frontend)
