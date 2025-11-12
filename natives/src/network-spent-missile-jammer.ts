/**
 * MONEY:_NETWORK_SPENT_MISSILE_JAMMER
 *
 * 0xD687100F616163F4

 * 
 * Hash p3 = MISSILE_JAMMER
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSpentMissileJammer(): void {
	const networkSpentMissileJammer_result = Citizen.invokeNative<void>('0xD687100F616163F4', );
	return networkSpentMissileJammer_result;
}