import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_VEHICLE_CHASE_IDEAL_PURSUIT_DISTANCE
 *
 * 0x7F9BCC1F05831CC1

 * 
 * Sets the ideal pursuit distance when chasing a vehicle. The ped must be running TASK_VEHICLE_CHASE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} idealPursuitDistance
 */
export function setTaskVehicleChaseIdealPursuitDistance(ped: PedIndex, idealPursuitDistance: number): void {
	const setTaskVehicleChaseIdealPursuitDistance_result = Citizen.invokeNative<void>('0x7F9BCC1F05831CC1', ped, idealPursuitDistance);
	return setTaskVehicleChaseIdealPursuitDistance_result;
}