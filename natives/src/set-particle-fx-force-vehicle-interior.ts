/**
 * GRAPHICS:SET_PARTICLE_FX_FORCE_VEHICLE_INTERIOR
 *
 * 0x66AEB7CADFF26E0B

 * 
 * Used only once in the scripts (taxi_clowncar)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isVehicleInterior
 */
export function setParticleFxForceVehicleInterior(isVehicleInterior: boolean): void {
	const setParticleFxForceVehicleInterior_result = Citizen.invokeNative<void>('0x66AEB7CADFF26E0B', isVehicleInterior);
	return setParticleFxForceVehicleInterior_result;
}