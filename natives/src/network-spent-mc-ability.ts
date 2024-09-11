/**
 * MONEY:NETWORK_SPENT_MC_ABILITY
 *
 * 0xD0D235D716CBBF3A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} ability
 * @param {number} mcRole
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentMcAbility(amount: number, ability: number, mcRole: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentMcAbility_result = Citizen.invokeNative<void>('0xD0D235D716CBBF3A', amount, ability, mcRole, fromBank, fromBankAndWallet);
	return networkSpentMcAbility_result;
}