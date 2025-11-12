import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HAS_BEEN_OWNED_BY_PLAYER
 *
 * 0x983B8E72C35B01F2

 * 
 * f vehicle has not been owned by player, the player will get a wanted level when entering (if spotted by police).
 * If the player has already owned a vehicle he is free to use it. (The game will set this flag to true first time the player drives a vehicle)
 * Mission vehicles will default to true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} newVal
 */
export function setVehicleHasBeenOwnedByPlayer(vehicle: VehicleIndex, newVal: boolean): void {
	const setVehicleHasBeenOwnedByPlayer_result = Citizen.invokeNative<void>('0x983B8E72C35B01F2', vehicle, newVal);
	return setVehicleHasBeenOwnedByPlayer_result;
}