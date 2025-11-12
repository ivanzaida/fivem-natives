import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_STOPPED
 *
 * 0x1CE980E99A2A6FB6

 * 
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 * 
 * For some vehicles it returns true if the current speed is <= 0.00039999999.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleStopped(vehicle: VehicleIndex): boolean {
	const isVehicleStopped_result = Citizen.invokeNative<boolean>('0x1CE980E99A2A6FB6', vehicle);
	return isVehicleStopped_result;
}