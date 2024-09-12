/**
 * MONEY:NETWORK_EARN_FROM_SMUGGLER_WORK
 *
 * 0xB7CA0141AAE24858

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} quantity
 * @param {number} highDemandBonus
 * @param {number} additionalSaleBonus
 * @param {number} contrabandType
 */
export function networkEarnFromSmugglerWork(amount: number, quantity: number, highDemandBonus: number, additionalSaleBonus: number, contrabandType: number): void {
	const networkEarnFromSmugglerWork_result = Citizen.invokeNative<void>('0xB7CA0141AAE24858', amount, quantity, highDemandBonus, additionalSaleBonus, contrabandType);
	return networkEarnFromSmugglerWork_result;
}