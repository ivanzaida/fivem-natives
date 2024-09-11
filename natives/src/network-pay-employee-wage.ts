/**
 * MONEY:NETWORK_PAY_EMPLOYEE_WAGE
 *
 * 0xE2A7BB72F7220C7E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkPayEmployeeWage(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkPayEmployeeWage_result = Citizen.invokeNative<void>('0xE2A7BB72F7220C7E', amount, fromBank, fromBankAndWallet);
	return networkPayEmployeeWage_result;
}