import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:CREATE_MODEL_HIDE_EXCLUDING_SCRIPT_OBJECTS
 *
 * 0x77AE88CF56FF88EA

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 * @param {boolean} surviveMapReload
 */
export function createModelHideExcludingScriptObjects(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, surviveMapReload: boolean): void {
	const createModelHideExcludingScriptObjects_result = Citizen.invokeNative<void>('0x77AE88CF56FF88EA', posX, posY, posZ, radius, modelHash, surviveMapReload);
	return createModelHideExcludingScriptObjects_result;
}