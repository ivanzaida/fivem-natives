import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_RESIST_TO_EXPLOSION
 *
 * 0xCA2403168E81B9CB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} resistToExplosion
 */
export function setHeliResistToExplosion(vehicle: VehicleIndex, resistToExplosion: boolean): void {
	const setHeliResistToExplosion_result = Citizen.invokeNative<void>('0xCA2403168E81B9CB', vehicle, resistToExplosion);
	return setHeliResistToExplosion_result;
}