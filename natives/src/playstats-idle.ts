/**
 * STATS:_PLAYSTATS_IDLE
 *
 * 0x410BD6C72A6CE17A

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 */
export function playstatsIdle(p0: unknown, p1: unknown, p2: unknown): void {
	const playstatsIdle_result = Citizen.invokeNative<void>('0x410BD6C72A6CE17A', p0, p1, p2);
	return playstatsIdle_result;
}