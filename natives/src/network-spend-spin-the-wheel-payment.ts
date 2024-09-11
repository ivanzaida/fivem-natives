/**
 * MONEY:NETWORK_SPEND_SPIN_THE_WHEEL_PAYMENT
 *
 * 0x929557FEA326BBCC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendSpinTheWheelPayment(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendSpinTheWheelPayment_result = Citizen.invokeNative<void>('0x929557FEA326BBCC', amount, fromBank, fromBankAndWallet);
	return networkSpendSpinTheWheelPayment_result;
}