import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_EXPLODE_FROM_BODY_DAMAGE_ON_COLLISION
 *
 * 0x26E13D440E7F6064

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableExplode
 */
export function setDisableExplodeFromBodyDamageOnCollision(vehicle: VehicleIndex, disableExplode: boolean): void {
	const setDisableExplodeFromBodyDamageOnCollision_result = Citizen.invokeNative<void>('0x26E13D440E7F6064', vehicle, disableExplode);
	return setDisableExplodeFromBodyDamageOnCollision_result;
}