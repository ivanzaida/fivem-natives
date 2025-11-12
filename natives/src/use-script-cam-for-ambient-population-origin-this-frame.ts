/**
 * CAM:USE_SCRIPT_CAM_FOR_AMBIENT_POPULATION_ORIGIN_THIS_FRAME
 *
 * 0x68DE54738FFB5584

 * 
 * Sets the ambient ped & vehicle population spawning origin to be based around the active scripted camera for this frame
 * This will prevent vehicles from being created close to the camera and/or on-screen
 * Call this repeatedly during scripted camera sequences where this behaviour is required.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} vehicles
 * @param {boolean} peds
 */
export function useScriptCamForAmbientPopulationOriginThisFrame(vehicles: boolean, peds: boolean): void {
	const useScriptCamForAmbientPopulationOriginThisFrame_result = Citizen.invokeNative<void>('0x68DE54738FFB5584', vehicles, peds);
	return useScriptCamForAmbientPopulationOriginThisFrame_result;
}