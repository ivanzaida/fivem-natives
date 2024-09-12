/**
 * MONEY:NETWORK_EARN_FROM_GANGATTACK_PICKUP
 *
 * 0xEAC14C370D2B9D5C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromGangattackPickup(amount: number): void {
	const networkEarnFromGangattackPickup_result = Citizen.invokeNative<void>('0xEAC14C370D2B9D5C', amount);
	return networkEarnFromGangattackPickup_result;
}