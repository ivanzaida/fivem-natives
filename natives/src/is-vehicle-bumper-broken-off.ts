import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_BUMPER_BROKEN_OFF
 *
 * 0x2495CCF0BF303C19

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} front
 * @returns {boolean}  
 */
export function isVehicleBumperBrokenOff(vehicle: VehicleIndex, front: boolean): boolean {
	const isVehicleBumperBrokenOff_result = Citizen.invokeNative<boolean>('0x2495CCF0BF303C19', vehicle, front);
	return isVehicleBumperBrokenOff_result;
}