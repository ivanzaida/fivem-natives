import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_PARTICLE_FX_CAM_INSIDE_NONPLAYER_VEHICLE
 *
 * 0xEE3CD2D847C128FA

 * 
 * Similar to SET_PARTICLE_FX_CAM_INSIDE_VEHICLE, but this command allows specifying a random vehicle
 * SET_PARTICLE_FX_CAM_INSIDE_VEHICLE will only affect the vehicle where the player is in
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} inside
 */
export function setParticleFxCamInsideNonplayerVehicle(vehicle: VehicleIndex, inside: boolean): void {
	const setParticleFxCamInsideNonplayerVehicle_result = Citizen.invokeNative<void>('0xEE3CD2D847C128FA', vehicle, inside);
	return setParticleFxCamInsideNonplayerVehicle_result;
}