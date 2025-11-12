import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:START_VEHICLE_HORN
 *
 * 0xAA8884A4BB5B0167

 * 
 * Sounds a vehicle horn for the given time and type.
 * the type is the hash name, at the moment we only allow "NORMAL" and "HELDDOWN"
 * 
 * Sounds the horn for the specified vehicle.
 * 
 * vehicle: The vehicle to activate the horn for.
 * mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
 * duration: The duration to sound the horn, in milliseconds.
 * 
 * Note: If a player is in the vehicle, it will only sound briefly.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} timeToSoundHorn
 * @param {number} hornTypeHash
 * @param {boolean} isMusicalHorn
 */
export function startVehicleHorn(vehicle: VehicleIndex, timeToSoundHorn: number, hornTypeHash: number = 0, isMusicalHorn: boolean = false): void {
	const startVehicleHorn_result = Citizen.invokeNative<void>('0xAA8884A4BB5B0167', vehicle, timeToSoundHorn, hornTypeHash, isMusicalHorn);
	return startVehicleHorn_result;
}