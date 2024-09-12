/**
 * CUTSCENE:SET_CAR_GENERATORS_CAN_UPDATE_DURING_CUTSCENE
 *
 * 0xD0860FF81E162052

 * 
 * ------------------------------------------------------------------
 * @param {boolean} update
 */
export function setCarGeneratorsCanUpdateDuringCutscene(update: boolean): void {
	const setCarGeneratorsCanUpdateDuringCutscene_result = Citizen.invokeNative<void>('0xD0860FF81E162052', update);
	return setCarGeneratorsCanUpdateDuringCutscene_result;
}