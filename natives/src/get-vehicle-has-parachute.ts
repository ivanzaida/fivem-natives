import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HAS_PARACHUTE
 *
 * 0x1A1A32EC5122B4F0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleHasParachute(vehicle: VehicleIndex): boolean {
	const getVehicleHasParachute_result = Citizen.invokeNative<boolean>('0x1A1A32EC5122B4F0', vehicle);
	return getVehicleHasParachute_result;
}