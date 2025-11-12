import { ModelNames } from '@ivanzaida/structures'

/**
 * PED:CREATE_SYNCHRONIZED_SCENE_AT_MAP_OBJECT
 *
 * 0xEC6D10B2D602CDDF

 * 
 * Creates a common scene origin which can be used to playback synchronised animations across multiple peds and objects
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecNewCoorsX
 * @param {number} scrVecNewCoorsY
 * @param {number} scrVecNewCoorsZ
 * @param {number} radius
 * @param {ModelNames} objectModelHashKey
 * @returns {number}  
 */
export function createSynchronizedSceneAtMapObject(scrVecNewCoorsX: number, scrVecNewCoorsY: number, scrVecNewCoorsZ: number, radius: number, objectModelHashKey: ModelNames): number {
	const createSynchronizedSceneAtMapObject_result = Citizen.invokeNative<number>('0xEC6D10B2D602CDDF', scrVecNewCoorsX, scrVecNewCoorsY, scrVecNewCoorsZ, radius, objectModelHashKey);
	return createSynchronizedSceneAtMapObject_result;
}