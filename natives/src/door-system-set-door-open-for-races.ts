/**
 * OBJECT:DOOR_SYSTEM_SET_DOOR_OPEN_FOR_RACES
 *
 * 0xB80A7611D19E162B

 * 
 * Some property related to gates. Native name between ``DOOR_SYSTEM_SET_AUTOMATIC_RATE`` and ``DOOR_SYSTEM_SET_DOOR_STATE``.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {boolean} open
 */
export function doorSystemSetDoorOpenForRaces(doorEnumHash: number, open: boolean): void {
	const doorSystemSetDoorOpenForRaces_result = Citizen.invokeNative<void>('0xB80A7611D19E162B', doorEnumHash, open);
	return doorSystemSetDoorOpenForRaces_result;
}