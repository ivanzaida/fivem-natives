import { ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_CLOSEST_OBJECT_OF_TYPE
 *
 * 0x8366ABB82B1ABC59

 * 
 * Has 8 params in the latest patches.
 * 
 * isMission - if true doesn't return mission objects
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecCentreCoorsX
 * @param {number} scrVecCentreCoorsY
 * @param {number} scrVecCentreCoorsZ
 * @param {number} radius
 * @param {ModelNames} objectModelHashKey
 * @param {boolean} registerAsScriptObject
 * @param {boolean} scriptHostObject
 * @param {boolean} registerAsNetworkObject
 * @returns {ObjectIndex}  
 */
export function getClosestObjectOfType(scrVecCentreCoorsX: number, scrVecCentreCoorsY: number, scrVecCentreCoorsZ: number, radius: number, objectModelHashKey: ModelNames, registerAsScriptObject: boolean = true, scriptHostObject: boolean = false, registerAsNetworkObject: boolean = true): ObjectIndex {
	const getClosestObjectOfType_result = Citizen.invokeNative<ObjectIndex>('0x8366ABB82B1ABC59', scrVecCentreCoorsX, scrVecCentreCoorsY, scrVecCentreCoorsZ, radius, objectModelHashKey, registerAsScriptObject, scriptHostObject, registerAsNetworkObject);
	return getClosestObjectOfType_result;
}