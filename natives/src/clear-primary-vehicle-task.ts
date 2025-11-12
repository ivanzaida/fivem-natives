import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_PRIMARY_VEHICLE_TASK
 *
 * 0xBCF5323C85E59066

 * 
 * This native is very useful when switching the player to a ped inside a vehicle that has a task assigned prior to the player switch.
 * It is necessary to clear the ped's tasks AND call this native with the vehicle the player is switching into in order to allow the player to control the vehicle after the player switches.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearPrimaryVehicleTask(vehicle: VehicleIndex): void {
	const clearPrimaryVehicleTask_result = Citizen.invokeNative<void>('0xBCF5323C85E59066', vehicle);
	return clearPrimaryVehicleTask_result;
}