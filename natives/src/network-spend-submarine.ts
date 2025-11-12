/**
 * MONEY:NETWORK_SPEND_SUBMARINE
 *
 * 0x0C919F00C1EB6628

 * 
 * staff wages/utility fee for the submarine and/or requesting a vehicle/boat pick up from the shore to the submarine
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} utilityAmount
 * @param {number} boatAmount
 * @param {number} relocateAmount
 */
export function networkSpendSubmarine(amount: number, fromBank: boolean, fromBankAndWallet: boolean, utilityAmount: number, boatAmount: number, relocateAmount: number): void {
	const networkSpendSubmarine_result = Citizen.invokeNative<void>('0x0C919F00C1EB6628', amount, fromBank, fromBankAndWallet, utilityAmount, boatAmount, relocateAmount);
	return networkSpendSubmarine_result;
}