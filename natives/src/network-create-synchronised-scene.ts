import { EEulerRotOrder } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CREATE_SYNCHRONISED_SCENE
 *
 * 0xBC5D9A293974F095

 * 
 * Creates a new networked synchronised scene - this is similar to normal synchronised scenes but a lot more network friendly. Call this on
 * a one machine only, add any peds (regardless of whether they are locally controlled or not) via the NETWORK_ADD_PED_TO_SYNCHRONISED_SCENE,
 * and then start it running with the NETWORK_START_SYNCHRONISED_SCENE command. The scene will automatically be synced to all machines.
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
 * @param {boolean} holdLastFrame
 * @param {boolean} looped
 * @param {number} phaseToStopScene
 * @param {number} phaseToStartScene
 * @param {number} startRate
 * @returns {number}  
 */
export function networkCreateSynchronisedScene(scenePositionX: number, scenePositionY: number, scenePositionZ: number, sceneOrientationX: number, sceneOrientationY: number, sceneOrientationZ: number, rotOrder: EEulerRotOrder | number = 2, holdLastFrame: boolean = false, looped: boolean = false, phaseToStopScene: number = 1, phaseToStartScene: number = 0, startRate: number = 1): number {
	const networkCreateSynchronisedScene_result = Citizen.invokeNative<number>('0xBC5D9A293974F095', scenePositionX, scenePositionY, scenePositionZ, sceneOrientationX, sceneOrientationY, sceneOrientationZ, rotOrder, holdLastFrame, looped, phaseToStopScene, phaseToStartScene, startRate);
	return networkCreateSynchronisedScene_result;
}