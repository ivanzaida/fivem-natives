import { ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_OBJECT
 *
 * 0x4E55EAB577C13329

 * 
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 * 
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
export function createObject(model: ModelNames, newCoorsX: number, newCoorsY: number, newCoorsZ: number, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true, forceToBeObject: boolean = false): ObjectIndex {
	const createObject_result = Citizen.invokeNative<ObjectIndex>('0x4E55EAB577C13329', model, newCoorsX, newCoorsY, newCoorsZ, registerAsNetworkObject, scriptHostObject, forceToBeObject);
	return createObject_result;
}