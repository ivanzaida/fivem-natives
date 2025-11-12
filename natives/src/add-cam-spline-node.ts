import { CameraIndex, ECamSplineNodeFlags, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * CAM:ADD_CAM_SPLINE_NODE
 *
 * 0xC606B0B9BA3D6036

 * 
 * I filled p1-p6 (the floats) as they are as other natives with 6 floats in a row are similar and I see no other method. So if a test from anyone proves them wrong please correct.
 * 
 * p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
 * 
 * p8 big values ~100 will slow down the camera movement before reaching this node
 * 
 * p9 != 0 seems to override the rotation/pitch (bool?)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} duration
 * @param {ECamSplineNodeFlags} flags
 * @param {EEulerRotOrder} rotOrder
 */
export function addCamSplineNode(camera: CameraIndex, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, duration: number, flags: ECamSplineNodeFlags | number = 3, rotOrder: EEulerRotOrder | number = 2): void {
	const addCamSplineNode_result = Citizen.invokeNative<void>('0xC606B0B9BA3D6036', camera, posX, posY, posZ, rotX, rotY, rotZ, duration, flags, rotOrder);
	return addCamSplineNode_result;
}