/**
 * MONEY:_NETWORK_EARN_AWARD_RANDOM_EVENT
 *
 * 0x9657D8B784593A5E

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnAwardRandomEvent(p0: unknown, p1: unknown): void {
	const networkEarnAwardRandomEvent_result = Citizen.invokeNative<void>('0x9657D8B784593A5E', p0, p1);
	return networkEarnAwardRandomEvent_result;
}