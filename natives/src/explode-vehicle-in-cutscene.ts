import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:EXPLODE_VEHICLE_IN_CUTSCENE
 *
 * 0x1D937F8481AB64F0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} addExplosion
 */
export function explodeVehicleInCutscene(vehicle: VehicleIndex, addExplosion: boolean = true): void {
	const explodeVehicleInCutscene_result = Citizen.invokeNative<void>('0x1D937F8481AB64F0', vehicle, addExplosion);
	return explodeVehicleInCutscene_result;
}