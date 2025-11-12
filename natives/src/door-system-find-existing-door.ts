import { ModelNames, IntRef } from '@ivanzaida/structures'

/**
 * OBJECT:DOOR_SYSTEM_FIND_EXISTING_DOOR
 *
 * 0x05FE36AB1B2950A9

 * 
 * If a door is found the function returns true and doorEnumHash is assigned the hash for the found door.
 * Otherwise the functin returns false.
 * 
 * Search radius: 0.5
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {ModelNames} model
 * @param {IntRef} doorEnumHash [Ref]
 * @returns {boolean}  
 */
export function doorSystemFindExistingDoor(positionX: number, positionY: number, positionZ: number, model: ModelNames, doorEnumHash: IntRef /* ptr */): boolean {
	const doorSystemFindExistingDoor_result = Citizen.invokeNative<boolean>('0x05FE36AB1B2950A9', positionX, positionY, positionZ, model, doorEnumHash.dataView);
	return doorSystemFindExistingDoor_result;
}