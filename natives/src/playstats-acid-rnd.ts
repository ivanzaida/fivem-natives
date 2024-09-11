/**
 * STATS:_PLAYSTATS_ACID_RND
 *
 * 0xCE650C981E786BEB

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 */
export function playstatsAcidRnd(p0: unknown): void {
	const playstatsAcidRnd_result = Citizen.invokeNative<void>('0xCE650C981E786BEB', p0);
	return playstatsAcidRnd_result;
}