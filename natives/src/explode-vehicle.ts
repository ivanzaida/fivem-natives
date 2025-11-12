import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:EXPLODE_VEHICLE
 *
 * 0xAE89444B15234CCE

 * 
 * Explodes a selected vehicle.
 * 
 * Vehicle vehicle = Vehicle you want to explode.
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * 
 * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} addExplosion
 * @param {boolean} keepDamageEntity
 */
export function explodeVehicle(vehicle: VehicleIndex, addExplosion: boolean = true, keepDamageEntity: boolean = false): void {
	const explodeVehicle_result = Citizen.invokeNative<void>('0xAE89444B15234CCE', vehicle, addExplosion, keepDamageEntity);
	return explodeVehicle_result;
}