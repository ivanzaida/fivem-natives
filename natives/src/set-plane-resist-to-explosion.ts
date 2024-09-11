import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLANE_RESIST_TO_EXPLOSION
 *
 * 0x3DCEE0B40D1FEC94

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} resistToExplosion
 */
export function setPlaneResistToExplosion(vehicle: VehicleIndex, resistToExplosion: boolean): void {
	const setPlaneResistToExplosion_result = Citizen.invokeNative<void>('0x3DCEE0B40D1FEC94', vehicle, resistToExplosion);
	return setPlaneResistToExplosion_result;
}