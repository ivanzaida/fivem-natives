/**
 * MONEY:NETWORK_EARN_AGENCY_PHONE
 *
 * 0x87065E48A6ACAF50

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 * @param {number} bonusAmount
 */
export function networkEarnAgencyPhone(amount: number, context: number, bonusAmount: number = 0): void {
	const networkEarnAgencyPhone_result = Citizen.invokeNative<void>('0x87065E48A6ACAF50', amount, context, bonusAmount);
	return networkEarnAgencyPhone_result;
}