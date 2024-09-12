/**
 * STATS:PLAYSTATS_IDLE_KICK
 *
 * 0xA3DDD8C7699A4B48

 * 
 * ------------------------------------------------------------------
 * @param {number} idleTime
 */
export function playstatsIdleKick(idleTime: number): void {
	const playstatsIdleKick_result = Citizen.invokeNative<void>('0xA3DDD8C7699A4B48', idleTime);
	return playstatsIdleKick_result;
}