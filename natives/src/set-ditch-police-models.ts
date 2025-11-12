/**
 * STREAMING:SET_DITCH_POLICE_MODELS
 *
 * 0x3A03D0433769C629

 * 
 * The police models don't need to be loaded.
 * 
 * This is a NOP function. It does nothing at all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} ditch
 */
export function setDitchPoliceModels(ditch: boolean): void {
	const setDitchPoliceModels_result = Citizen.invokeNative<void>('0x3A03D0433769C629', ditch);
	return setDitchPoliceModels_result;
}