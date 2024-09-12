import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXPLODES_ON_EXPLOSION_DAMAGE_AT_ZERO_BODY_HEALTH
 *
 * 0xA964B154E331B3E9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} set
 */
export function setVehicleExplodesOnExplosionDamageAtZeroBodyHealth(vehicle: VehicleIndex, set: boolean): void {
	const setVehicleExplodesOnExplosionDamageAtZeroBodyHealth_result = Citizen.invokeNative<void>('0xA964B154E331B3E9', vehicle, set);
	return setVehicleExplodesOnExplosionDamageAtZeroBodyHealth_result;
}