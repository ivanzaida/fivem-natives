/**
 * OBJECT:CLOSE_ALL_BARRIERS_FOR_RACE
 *
 * 0x3E4EE4ACF12D2A90

 * 
 * Closes all barrier type doors and doors mark to be open for races in the door system
 * (Barrier types include BARRIER_ARM, RAIL_CROSSING_BARRIER, BARRIER_ARM_SC and RAIL_CROSSING_BARRIER_SC)
 * 
 * Clears the fields sets by 0xC7F29CA00F46350E (1604 retail: 0x1424A7A10, 0x1424A7A11) and iterates over the global CDoor's bucket-list.
 * Related to its "Pre-networked state"?
 * 
 * 
 * ------------------------------------------------------------------
 */
export function closeAllBarriersForRace(): void {
	const closeAllBarriersForRace_result = Citizen.invokeNative<void>('0x3E4EE4ACF12D2A90', );
	return closeAllBarriersForRace_result;
}