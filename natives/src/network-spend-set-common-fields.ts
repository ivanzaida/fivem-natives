/**
 * MONEY:NETWORK_SPEND_SET_COMMON_FIELDS
 *
 * 0xD10B64D006F40B14

 * 
 * ------------------------------------------------------------------
 * @param {number} properties
 * @param {number} properties2
 * @param {number} heists
 * @param {boolean} windfall
 */
export function networkSpendSetCommonFields(properties: number, properties2: number, heists: number, windfall: boolean): void {
	const networkSpendSetCommonFields_result = Citizen.invokeNative<void>('0xD10B64D006F40B14', properties, properties2, heists, windfall);
	return networkSpendSetCommonFields_result;
}