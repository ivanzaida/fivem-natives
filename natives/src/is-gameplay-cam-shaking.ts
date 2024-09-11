/**
 * CAM:IS_GAMEPLAY_CAM_SHAKING
 *
 * 0x7F2356076C3D052D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isGameplayCamShaking(): boolean {
	const isGameplayCamShaking_result = Citizen.invokeNative<boolean>('0x7F2356076C3D052D', );
	return isGameplayCamShaking_result;
}