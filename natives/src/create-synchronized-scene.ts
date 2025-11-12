import { EEulerRotOrder } from '@ivanzaida/structures'

/**
 * PED:CREATE_SYNCHRONIZED_SCENE
 *
 * 0x2EC137C692A52458

 * 
 * Creates a common scene origin which can be used to playback synchronised animations across multiple peds and objects
 * 
 * p6 always 2 (but it doesnt seem to matter...)
 * 
 * roll and pitch 0
 * yaw to Ped.rotation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scenePositionX
 * @param {number} scenePositionY
 * @param {number} scenePositionZ
 * @param {number} sceneOrientationX
 * @param {number} sceneOrientationY
 * @param {number} sceneOrientationZ
 * @param {EEulerRotOrder} rotOrder
 * @returns {number}  
 */
export function createSynchronizedScene(scenePositionX: number, scenePositionY: number, scenePositionZ: number, sceneOrientationX: number, sceneOrientationY: number, sceneOrientationZ: number, rotOrder: EEulerRotOrder | number = 2): number {
	const createSynchronizedScene_result = Citizen.invokeNative<number>('0x2EC137C692A52458', scenePositionX, scenePositionY, scenePositionZ, sceneOrientationX, sceneOrientationY, sceneOrientationZ, rotOrder);
	return createSynchronizedScene_result;
}