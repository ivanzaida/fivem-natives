import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NO_EXPLOSION_DAMAGE_FROM_DRIVER
 *
 * 0xDDBBC2472DA87217

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} noDamage
 */
export function setVehicleNoExplosionDamageFromDriver(vehicle: VehicleIndex, noDamage: boolean): void {
	const setVehicleNoExplosionDamageFromDriver_result = Citizen.invokeNative<void>('0xDDBBC2472DA87217', vehicle, noDamage);
	return setVehicleNoExplosionDamageFromDriver_result;
}