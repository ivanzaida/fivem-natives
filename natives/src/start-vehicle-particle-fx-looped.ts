/**
 * GRAPHICS:_START_VEHICLE_PARTICLE_FX_LOOPED
 *
 * 0xDF269BE2909E181A

 * 
 * Returns ptfxHandle
 * effectName: scr_sv_drag_burnout
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function startVehicleParticleFxLooped(): number {
	const startVehicleParticleFxLooped_result = Citizen.invokeNative<number>('0xDF269BE2909E181A', );
	return startVehicleParticleFxLooped_result;
}