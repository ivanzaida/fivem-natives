/**
 * MONEY:_NETWORK_EARN_AWARD_DEAD_DROP
 *
 * 0x39D90796902DFED4

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnAwardDeadDrop(p0: unknown, p1: unknown): void {
	const networkEarnAwardDeadDrop_result = Citizen.invokeNative<void>('0x39D90796902DFED4', p0, p1);
	return networkEarnAwardDeadDrop_result;
}