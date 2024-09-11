/**
 * GRAPHICS:SET_PARTICLE_FX_CAM_INSIDE_VEHICLE
 *
 * 0x2F30818D75D66C5B

 * 
 * ------------------------------------------------------------------
 * @param {boolean} inside
 */
export function setParticleFxCamInsideVehicle(inside: boolean): void {
	const setParticleFxCamInsideVehicle_result = Citizen.invokeNative<void>('0x2F30818D75D66C5B', inside);
	return setParticleFxCamInsideVehicle_result;
}