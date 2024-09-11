import { CameraIndex, ECameraGraphType, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_PARAMS
 *
 * 0xA3774254665BAA82

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} fov
 * @param {number} duration Is set  0 the camera will interp to the specified settings.
 * @param {ECameraGraphType} graphTypePos
 * @param {ECameraGraphType} graphTypeRot
 * @param {EEulerRotOrder} rotOrder
 */
export function setCamParams(camera: CameraIndex, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, duration: number = 0, graphTypePos: ECameraGraphType | number = 1, graphTypeRot: ECameraGraphType | number = 1, rotOrder: EEulerRotOrder | number = 2): void {
	const setCamParams_result = Citizen.invokeNative<void>('0xA3774254665BAA82', camera, posX, posY, posZ, rotX, rotY, rotZ, fov, duration, graphTypePos, graphTypeRot, rotOrder);
	return setCamParams_result;
}