import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HAS_VEHICLE_BEEN_HIT_BY_SHUNT
 *
 * 0x57C7BFB65495FB1A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getHasVehicleBeenHitByShunt(vehicle: VehicleIndex): boolean {
	const getHasVehicleBeenHitByShunt_result = Citizen.invokeNative<boolean>('0x57C7BFB65495FB1A', vehicle);
	return getHasVehicleBeenHitByShunt_result;
}