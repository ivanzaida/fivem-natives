import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_REMAINS_ANCHORED_WHILE_PLAYER_IS_DRIVER
 *
 * 0x3CA987D2B3498078

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forcePlayerBoatAnchorFlag
 */
export function setBoatRemainsAnchoredWhilePlayerIsDriver(vehicle: VehicleIndex, forcePlayerBoatAnchorFlag: boolean): void {
	const setBoatRemainsAnchoredWhilePlayerIsDriver_result = Citizen.invokeNative<void>('0x3CA987D2B3498078', vehicle, forcePlayerBoatAnchorFlag);
	return setBoatRemainsAnchoredWhilePlayerIsDriver_result;
}