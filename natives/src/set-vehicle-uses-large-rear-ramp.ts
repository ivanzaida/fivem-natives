import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USES_LARGE_REAR_RAMP
 *
 * 0xF651C20D31115698

 * 
 * Forces this plane's doors to use the large rear ramp tuning values
 * 
 * vehicle must be a plane
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} use
 */
export function setVehicleUsesLargeRearRamp(vehicle: VehicleIndex, use: boolean): void {
	const setVehicleUsesLargeRearRamp_result = Citizen.invokeNative<void>('0xF651C20D31115698', vehicle, use);
	return setVehicleUsesLargeRearRamp_result;
}