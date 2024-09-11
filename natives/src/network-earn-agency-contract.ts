/**
 * MONEY:NETWORK_EARN_AGENCY_CONTRACT
 *
 * 0xEBDEC0D7E92D20B0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnAgencyContract(amount: number, context: number): void {
	const networkEarnAgencyContract_result = Citizen.invokeNative<void>('0xEBDEC0D7E92D20B0', amount, context);
	return networkEarnAgencyContract_result;
}