import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HAS_BEEN_DRIVEN_FLAG
 *
 * 0xE8EF17ECD68C900D

 * 
 * Sets the vehicle flag which records whether this vehicle has been driven.
 * Scripted/cargen vehicles which have not yet been driven are not cleaned up so aggressively as those which have been driven & then abandoned.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} state
 */
export function setVehicleHasBeenDrivenFlag(vehicle: VehicleIndex, state: boolean): void {
	const setVehicleHasBeenDrivenFlag_result = Citizen.invokeNative<void>('0xE8EF17ECD68C900D', vehicle, state);
	return setVehicleHasBeenDrivenFlag_result;
}