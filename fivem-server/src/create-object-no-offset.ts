import { ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_OBJECT_NO_OFFSET
 *
 * 0X58040420

 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} registerAsNetworkObject The new object will be created and synced on other machines if a network game is running
 * @param {boolean} scriptHostObject
 * @param {boolean} forceToBeObject
 * @returns {ObjectIndex}  
 */
export function createObjectNoOffset(model: ModelNames, newCoorsX: number, newCoorsY: number, newCoorsZ: number, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true, forceToBeObject: boolean = false): ObjectIndex {
	const createObjectNoOffset_result = Citizen.invokeNative<ObjectIndex>('0X58040420', model, newCoorsX, newCoorsY, newCoorsZ, registerAsNetworkObject, scriptHostObject, forceToBeObject);
	return createObjectNoOffset_result;
}