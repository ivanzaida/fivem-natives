/**
 * MONEY:NETWORK_SPEND_INTERACTION_MENU_ABILITY
 *
 * 0xC8EAF995510A953C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} ability
 */
export function networkSpendInteractionMenuAbility(amount: number, fromBank: boolean, fromBankAndWallet: boolean, ability: number): void {
	const networkSpendInteractionMenuAbility_result = Citizen.invokeNative<void>('0xC8EAF995510A953C', amount, fromBank, fromBankAndWallet, ability);
	return networkSpendInteractionMenuAbility_result;
}