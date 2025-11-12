import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:BRING_VEHICLE_TO_HALT
 *
 * 0xE5EE5C9DDF05D925

 * 
 * This native makes the vehicle stop immediately, as happens when we enter a MP garage.
 * 
 * . distance defines how far it will travel until stopping. Garage doors use 3.0.
 * 
 * . If killEngine is set to 1, you cannot resume driving the vehicle once it stops. This looks like is a bitmapped integer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} stoppingDistance
 * @param {number} timeToStopFor
 * @param {boolean} controlVerticalVelocity
 */
export function bringVehicleToHalt(vehicle: VehicleIndex, stoppingDistance: number, timeToStopFor: number, controlVerticalVelocity: boolean = false): void {
	const bringVehicleToHalt_result = Citizen.invokeNative<void>('0xE5EE5C9DDF05D925', vehicle, stoppingDistance, timeToStopFor, controlVerticalVelocity);
	return bringVehicleToHalt_result;
}