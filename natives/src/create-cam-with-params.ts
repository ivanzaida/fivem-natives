import { EEulerRotOrder, CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:CREATE_CAM_WITH_PARAMS
 *
 * 0x2CB6AB601EB7D2D9

 * 
 * camName is always set to "DEFAULT_SCRIPTED_CAMERA" in Rockstar's scripts.
 * ------------
 * Camera names found in the b617d scripts:
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * ------------
 * Side Note: It seems p8 is basically to represent what would be the bool p1 within CREATE_CAM native. As well as the p9 since it's always 2 in scripts seems to represent what would be the last param within SET_CAM_ROT native which normally would be 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cameraName
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {number} vecRotX
 * @param {number} vecRotY
 * @param {number} vecRotZ
 * @param {number} fov
 * @param {boolean} startActivated Sets if the camera starts acive
 * @param {EEulerRotOrder} rotOrder
 * @returns {CameraIndex}  
 */
export function createCamWithParams(cameraName: string, vecPosX: number, vecPosY: number, vecPosZ: number, vecRotX: number, vecRotY: number, vecRotZ: number, fov: number = 65, startActivated: boolean = false, rotOrder: EEulerRotOrder | number = 2): CameraIndex {
	const createCamWithParams_result = Citizen.invokeNative<CameraIndex>('0x2CB6AB601EB7D2D9', cameraName, vecPosX, vecPosY, vecPosZ, vecRotX, vecRotY, vecRotZ, fov, startActivated, rotOrder);
	return createCamWithParams_result;
}