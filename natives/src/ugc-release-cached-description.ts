/**
 * NETWORK:UGC_RELEASE_CACHED_DESCRIPTION
 *
 * 0x2D133345AB736461

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @returns {boolean}  
 */
export function ugcReleaseCachedDescription(hash: number): boolean {
	const ugcReleaseCachedDescription_result = Citizen.invokeNative<boolean>('0x2D133345AB736461', hash);
	return ugcReleaseCachedDescription_result;
}