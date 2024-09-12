/**
 * CAM:IS_CINEMATIC_CAM_SHAKING
 *
 * 0x0E9A1CE27A31950D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCinematicCamShaking(): boolean {
	const isCinematicCamShaking_result = Citizen.invokeNative<boolean>('0x0E9A1CE27A31950D', );
	return isCinematicCamShaking_result;
}