import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ARRIVE_DISTANCE_OVERRIDE_FOR_VEHICLE_PERSUIT_ATTACK
 *
 * 0x8D12590141B620B3

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} dist
 */
export function setArriveDistanceOverrideForVehiclePersuitAttack(vehicle: VehicleIndex, dist: number = 1): void {
	const setArriveDistanceOverrideForVehiclePersuitAttack_result = Citizen.invokeNative<void>('0x8D12590141B620B3', vehicle, dist);
	return setArriveDistanceOverrideForVehiclePersuitAttack_result;
}