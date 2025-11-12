import { PedIndex, ETaskVehicleChaseBehaviorFlags } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_VEHICLE_CHASE_BEHAVIOR_FLAG
 *
 * 0x5D374B426098D36A

 * 
 * Sets a behavior flag when chasing a vehicle. The ped must be running TASK_VEHICLE_CHASE.
 * 
 * Flag 8: Medium-aggressive boxing tactic with a bit of PIT
 * Flag 1: Aggressive ramming of suspect
 * Flag 2: Ram attempts
 * Flag 32: Stay back from suspect, no tactical contact. Convoy-like.
 * Flag 16: Ramming, seems to be slightly less aggressive than 1-2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ETaskVehicleChaseBehaviorFlags} flag
 * @param {boolean} value
 */
export function setTaskVehicleChaseBehaviorFlag(ped: PedIndex, flag: ETaskVehicleChaseBehaviorFlags | number, value: boolean): void {
	const setTaskVehicleChaseBehaviorFlag_result = Citizen.invokeNative<void>('0x5D374B426098D36A', ped, flag, value);
	return setTaskVehicleChaseBehaviorFlag_result;
}