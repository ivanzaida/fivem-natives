import { EEulerRotOrder } from '@ivanzaida/structures'

/**
 * PED:SET_SYNCHRONIZED_SCENE_ORIGIN
 *
 * 0x8E654C1A28DAD371

 * 
 * Use this command to change a synchronised scene's origin after it has been created
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {number} scenePositionX
 * @param {number} scenePositionY
 * @param {number} scenePositionZ
 * @param {number} sceneOrientationX
 * @param {number} sceneOrientationY
 * @param {number} sceneOrientationZ
 * @param {EEulerRotOrder} rotOrder
 */
export function setSynchronizedSceneOrigin(sceneID: number, scenePositionX: number, scenePositionY: number, scenePositionZ: number, sceneOrientationX: number, sceneOrientationY: number, sceneOrientationZ: number, rotOrder: EEulerRotOrder | number = 2): void {
	const setSynchronizedSceneOrigin_result = Citizen.invokeNative<void>('0x8E654C1A28DAD371', sceneID, scenePositionX, scenePositionY, scenePositionZ, sceneOrientationX, sceneOrientationY, sceneOrientationZ, rotOrder);
	return setSynchronizedSceneOrigin_result;
}