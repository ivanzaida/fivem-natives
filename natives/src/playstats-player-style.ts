/**
 * STATS:_PLAYSTATS_PLAYER_STYLE
 *
 * 0x09E495BCF3E7FA74

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 */
export function playstatsPlayerStyle(p0: unknown): void {
	const playstatsPlayerStyle_result = Citizen.invokeNative<void>('0x09E495BCF3E7FA74', p0);
	return playstatsPlayerStyle_result;
}