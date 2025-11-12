import { ObjectIndex } from '@ivanzaida/structures'

/**
 * CFX:CREATE_OBJECT
 *
 * 0x2F7AA05C

 * 
 * List of object models that can be created without any additional effort like making sure ytyp is loaded etc: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ObjectList.ini
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash The model to spawn.
 * @param {number} x Spawn coordinate X component.
 * @param {number} y Spawn coordinate Y component.
 * @param {number} z Spawn coordinate Z component, 'ground level'.
 * @param {boolean} isNetwork Whether to create a network object for the object. If false, the object exists only locally.
 * @param {boolean} netMissionEntity Whether to register the object as pinned to the script host in the R\ network model.
 * @param {boolean} doorFlag False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.
 * @returns {ObjectIndex}  
 */
export function createObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): ObjectIndex {
	const createObject_result = Citizen.invokeNative<ObjectIndex>('0x2F7AA05C', modelHash, x, y, z, isNetwork, netMissionEntity, doorFlag);
	return createObject_result;
}