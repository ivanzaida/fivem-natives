import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_SHOOTOUT_BOAT
 *
 * 0x8AC9895670AC9049

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function setParticleFxShootoutBoat(veh: VehicleIndex): void {
	const setParticleFxShootoutBoat_result = Citizen.invokeNative<void>('0x8AC9895670AC9049', veh);
	return setParticleFxShootoutBoat_result;
}