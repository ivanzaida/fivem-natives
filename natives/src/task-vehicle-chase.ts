import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_CHASE
 *
 * 0xBCDC8EFDC767C85B

 * 
 * Tells a ped to chase another ped.  Both peds must be in vehicles, or the task will abort.
 * 
 * chases targetEnt fast and aggressively
 * --
 * Makes ped (needs to be in vehicle) chase targetEnt.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} target
 */
export function taskVehicleChase(ped: PedIndex, target: PedIndex): void {
	const taskVehicleChase_result = Citizen.invokeNative<void>('0xBCDC8EFDC767C85B', ped, target);
	return taskVehicleChase_result;
}