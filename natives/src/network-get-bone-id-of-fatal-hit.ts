/**
 * NETWORK:NETWORK_GET_BONE_ID_OF_FATAL_HIT
 *
 * 0xDEBA59FD42C0BAEF

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetBoneIdOfFatalHit(): number {
	const networkGetBoneIdOfFatalHit_result = Citizen.invokeNative<number>('0xDEBA59FD42C0BAEF', );
	return networkGetBoneIdOfFatalHit_result;
}