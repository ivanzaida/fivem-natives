import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORCE_VEHICLE_ENGINE_DAMAGE_BY_BULLET
 *
 * 0xA7C024F5E73C2EE0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceEngineDamage
 */
export function setForceVehicleEngineDamageByBullet(vehicle: VehicleIndex, forceEngineDamage: boolean): void {
	const setForceVehicleEngineDamageByBullet_result = Citizen.invokeNative<void>('0xA7C024F5E73C2EE0', vehicle, forceEngineDamage);
	return setForceVehicleEngineDamageByBullet_result;
}