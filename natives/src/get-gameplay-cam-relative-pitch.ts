/**
 * CAM:GET_GAMEPLAY_CAM_RELATIVE_PITCH
 *
 * 0x98F0D28A64EC7D5D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGameplayCamRelativePitch(): number {
	const getGameplayCamRelativePitch_result = Citizen.invokeNative<number>('0x98F0D28A64EC7D5D', );
	return getGameplayCamRelativePitch_result;
}