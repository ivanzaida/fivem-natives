import { ECameraType, EEulerRotOrder, CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:CREATE_CAMERA_WITH_PARAMS
 *
 * 0x96A32328480B485C

 * 
 * p9 uses 2 by default
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECameraType} camera
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
export function createCameraWithParams(camera: ECameraType | number, vecPosX: number, vecPosY: number, vecPosZ: number, vecRotX: number, vecRotY: number, vecRotZ: number, fov: number = 65, startActivated: boolean = false, rotOrder: EEulerRotOrder | number = 2): CameraIndex {
	const createCameraWithParams_result = Citizen.invokeNative<CameraIndex>('0x96A32328480B485C', camera, vecPosX, vecPosY, vecPosZ, vecRotX, vecRotY, vecRotZ, fov, startActivated, rotOrder);
	return createCameraWithParams_result;
}