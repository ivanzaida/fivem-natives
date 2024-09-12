/**
 * WEAPON:REMOVE_ALL_AIR_DEFENCE_SPHERES
 *
 * 0x537B8CC8EB57DFB7

 * 
 * ------------------------------------------------------------------
 */
export function removeAllAirDefenceSpheres(): void {
	const removeAllAirDefenceSpheres_result = Citizen.invokeNative<void>('0x537B8CC8EB57DFB7', );
	return removeAllAirDefenceSpheres_result;
}