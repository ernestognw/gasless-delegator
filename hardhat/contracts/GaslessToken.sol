// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

/**
 * @dev An ERC20 token for GSLS.
 */
contract GaslessToken is ERC20, ERC20Permit, ERC20Votes {
    mapping(address => bool) claimed;
    event Claim(address indexed claimant, uint256 amount);

    /**
     * @dev Constructor.
     */
    constructor() ERC20("GaslessToken", "GSLS") ERC20Permit("GaslessToken") {
        _mint(address(this), 15000000);
    }

    /**
     * WARNING: Unsuitable for production purposes. It doesn't validate elegibility.
     * @dev Claims tokens.
     * @param delegate The address the tokenholder wants to delegate their votes to.
     */
    function claimTokens(address delegate) external {
        address claimer = _msgSender();
        uint8 amount = 150;

        require(!claimed[claimer], "GSLS: Tokens already claimed.");

        claimed[claimer] = true;
        emit Claim(claimer, 1);

        _delegate(claimer, delegate);
        _transfer(address(this), claimer, amount);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}
