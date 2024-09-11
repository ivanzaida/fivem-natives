import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_RENDERING
 *
 * 0x8DE2438443E6A145

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} cam
 * @returns {boolean}  
 */
export function isCamRendering(cam: CameraIndex): boolean {
	const isCamRendering_result = Citizen.invokeNative<boolean>('0x8DE2438443E6A145', cam);
	return isCamRendering_result;
}