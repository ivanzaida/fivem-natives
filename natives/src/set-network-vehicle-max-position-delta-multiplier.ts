import { VehicleIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_VEHICLE_MAX_POSITION_DELTA_MULTIPLIER
 *
 * 0x8526C06631BA8A87

 * 
 * rage::netBlenderLinInterp::GetPositionMaxForUpdateLevel
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} multiplier
 */
export function setNetworkVehicleMaxPositionDeltaMultiplier(vehicle: VehicleIndex, multiplier: number): void {
	const setNetworkVehicleMaxPositionDeltaMultiplier_result = Citizen.invokeNative<void>('0x8526C06631BA8A87', vehicle, multiplier);
	return setNetworkVehicleMaxPositionDeltaMultiplier_result;
}