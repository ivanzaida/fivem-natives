import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:MODIFY_VEHICLE_TOP_SPEED
 *
 * 0xAC89BB42FE09CC80

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} percentChange
 */
export function modifyVehicleTopSpeed(vehicle: VehicleIndex, percentChange: number): void {
	const modifyVehicleTopSpeed_result = Citizen.invokeNative<void>('0xAC89BB42FE09CC80', vehicle, percentChange);
	return modifyVehicleTopSpeed_result;
}