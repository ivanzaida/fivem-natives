import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LIMIT_SPEED_WHEN_PLAYER_INACTIVE
 *
 * 0x3F413690B5A371F4

 * 
 * Sets whether a player controlled vehicle will limit it's speed when the
 * player's control is disabled (used in cutscenes etc).  Default is to limit
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setVehicleLimitSpeedWhenPlayerInactive(vehicle: VehicleIndex, val: boolean): void {
	const setVehicleLimitSpeedWhenPlayerInactive_result = Citizen.invokeNative<void>('0x3F413690B5A371F4', vehicle, val);
	return setVehicleLimitSpeedWhenPlayerInactive_result;
}