/**
 * GRAPHICS:SET_ARTIFICIAL_VEHICLE_LIGHTS_STATE
 *
 * 0x5249247B8F69A39E

 * 
 * Includes/excludes vehicle lights in the effects of command SET_ARTIFICIAL_LIGHTS_STATE(TRUE).
 * TRUE - vehicle lights are included in the EMP (default)
 * FALSE - vehicle lights are excluded from the EMP
 * 
 * If "blackout" is enabled, this native allows you to ignore "blackout" for vehicles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setArtificialVehicleLightsState(state: boolean): void {
	const setArtificialVehicleLightsState_result = Citizen.invokeNative<void>('0x5249247B8F69A39E', state);
	return setArtificialVehicleLightsState_result;
}