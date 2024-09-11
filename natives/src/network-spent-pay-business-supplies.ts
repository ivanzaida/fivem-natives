/**
 * MONEY:NETWORK_SPENT_PAY_BUSINESS_SUPPLIES
 *
 * 0x2AED47655EBD41F9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} businessID
 * @param {number} businessType
 * @param {number} numSegments
 */
export function networkSpentPayBusinessSupplies(amount: number, businessID: number, businessType: number, numSegments: number): void {
	const networkSpentPayBusinessSupplies_result = Citizen.invokeNative<void>('0x2AED47655EBD41F9', amount, businessID, businessType, numSegments);
	return networkSpentPayBusinessSupplies_result;
}