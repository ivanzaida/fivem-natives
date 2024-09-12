import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DONT_ALLOW_PLAYER_TO_ENTER_VEHICLE_IF_LOCKED_FOR_PLAYER
 *
 * 0x89E19F9D79DDCA80

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} dontAllowPlayerToEnter
 */
export function setDontAllowPlayerToEnterVehicleIfLockedForPlayer(vehicle: VehicleIndex, dontAllowPlayerToEnter: boolean): void {
	const setDontAllowPlayerToEnterVehicleIfLockedForPlayer_result = Citizen.invokeNative<void>('0x89E19F9D79DDCA80', vehicle, dontAllowPlayerToEnter);
	return setDontAllowPlayerToEnterVehicleIfLockedForPlayer_result;
}