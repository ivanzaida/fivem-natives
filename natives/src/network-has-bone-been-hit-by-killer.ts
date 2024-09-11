/**
 * NETWORK:NETWORK_HAS_BONE_BEEN_HIT_BY_KILLER
 *
 * 0x4B8C68B93333048F

 * 
 * ------------------------------------------------------------------
 * @param {number} bone
 * @returns {boolean}  
 */
export function networkHasBoneBeenHitByKiller(bone: number): boolean {
	const networkHasBoneBeenHitByKiller_result = Citizen.invokeNative<boolean>('0x4B8C68B93333048F', bone);
	return networkHasBoneBeenHitByKiller_result;
}