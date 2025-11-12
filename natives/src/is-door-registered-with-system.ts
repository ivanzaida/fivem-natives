/**
 * OBJECT:IS_DOOR_REGISTERED_WITH_SYSTEM
 *
 * 0x116053132936EA1F

 * 
 * if (OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM(doorHash))
 * {
 *     OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function isDoorRegisteredWithSystem(doorEnumHash: number): boolean {
	const isDoorRegisteredWithSystem_result = Citizen.invokeNative<boolean>('0x116053132936EA1F', doorEnumHash);
	return isDoorRegisteredWithSystem_result;
}