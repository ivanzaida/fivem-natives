/**
 * GRAPHICS:SET_LOCK_ADAPTIVE_DOF_DISTANCE
 *
 * 0x4F35B6F682DEE8FA

 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function setLockAdaptiveDofDistance(on: boolean): void {
	const setLockAdaptiveDofDistance_result = Citizen.invokeNative<void>('0x4F35B6F682DEE8FA', on);
	return setLockAdaptiveDofDistance_result;
}