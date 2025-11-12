import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAPSULE
 *
 * 0x04FC75A7251431C6

 * 
 * Override the ped capsule from script
 * 
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 * 
 * Setting this to 0.001 will allow warping through some objects.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} radius
 */
export function setPedCapsule(ped: PedIndex, radius: number): void {
	const setPedCapsule_result = Citizen.invokeNative<void>('0x04FC75A7251431C6', ped, radius);
	return setPedCapsule_result;
}