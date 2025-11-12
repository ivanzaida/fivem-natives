/**
 * OBJECT:REMOVE_DOOR_FROM_SYSTEM
 *
 * 0x19B3B7AC049E8354

 * 
 * CDoor and CDoorSystemData still internally allocated (and their associations between doorHash, modelHash, and coordinates).
 * Only its NetObj removed and flag ``(v2 + 192) |= 8u`` (1604 retail) toggled.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {boolean} lock Leaves the door in a locked state
 */
export function removeDoorFromSystem(doorEnumHash: number, lock: boolean = false): void {
	const removeDoorFromSystem_result = Citizen.invokeNative<void>('0x19B3B7AC049E8354', doorEnumHash, lock);
	return removeDoorFromSystem_result;
}