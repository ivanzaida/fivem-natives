import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USES_MP_PLAYER_DAMAGE_MULTIPLIER
 *
 * 0xAF324DD73DD8C045

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useMultiplier
 */
export function setVehicleUsesMpPlayerDamageMultiplier(vehicle: VehicleIndex, useMultiplier: boolean): void {
	const setVehicleUsesMpPlayerDamageMultiplier_result = Citizen.invokeNative<void>('0xAF324DD73DD8C045', vehicle, useMultiplier);
	return setVehicleUsesMpPlayerDamageMultiplier_result;
}