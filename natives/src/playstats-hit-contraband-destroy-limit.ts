/**
 * STATS:PLAYSTATS_HIT_CONTRABAND_DESTROY_LIMIT
 *
 * 0xAE494703C93629A7

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function playstatsHitContrabandDestroyLimit(amount: number): void {
	const playstatsHitContrabandDestroyLimit_result = Citizen.invokeNative<void>('0xAE494703C93629A7', amount);
	return playstatsHitContrabandDestroyLimit_result;
}