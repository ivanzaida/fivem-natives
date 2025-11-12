/**
 * OBJECT:OPEN_ALL_BARRIERS_FOR_RACE
 *
 * 0xEE7031BA6CBD6DBA

 * 
 * Opens all barrier type doors and doors mark to be open for races in the door system
 * (Barrier types include BARRIER_ARM, RAIL_CROSSING_BARRIER, BARRIER_ARM_SC and RAIL_CROSSING_BARRIER_SC)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} snapOpen The doors will snap open if this is set to true
 */
export function openAllBarriersForRace(snapOpen: boolean = false): void {
	const openAllBarriersForRace_result = Citizen.invokeNative<void>('0xEE7031BA6CBD6DBA', snapOpen);
	return openAllBarriersForRace_result;
}