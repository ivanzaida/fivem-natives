import { PtfxId } from '@ivanzaida/structures'

/**
 * GRAPHICS:FORCE_PARTICLE_FX_IN_VEHICLE_INTERIOR
 *
 * 0x4E96B177783A9BA6

 * 
 * ------------------------------------------------------------------
 * @param {PtfxId} ptfxId
 * @param {boolean} isInVehicleInterior
 */
export function forceParticleFxInVehicleInterior(ptfxId: PtfxId, isInVehicleInterior: boolean): void {
	const forceParticleFxInVehicleInterior_result = Citizen.invokeNative<void>('0x4E96B177783A9BA6', ptfxId, isInVehicleInterior);
	return forceParticleFxInVehicleInterior_result;
}