import { EPedPropPosition, ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_CUTSCENE_PED_PROP_VARIATION
 *
 * 0x60A0A4CD710160D5

 * 
 * Always apply this to the CS version, all cs variations will be copied to the ig version, if one is present.
 * Use CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY to be sure that the variation request has been made
 * as this command only returns true FOR A SINGLE FRAME.
 * 
 * Thanks R! ;)
 * 
 * if ((l_161 == 0) || (l_161 == 2)) {
 *     sub_2ea27("Trying to set Jimmy prop variation");
 *     CUTSCENE::SET_CUTSCENE_PED_PROP_VARIATION("Jimmy_Boston", 1, 0, 0, 0);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneHandle
 * @param {EPedPropPosition} position
 * @param {number} newProp
 * @param {number} newText
 * @param {ModelNames} model
 */
export function setCutscenePedPropVariation(sceneHandle: string, position: EPedPropPosition | number, newProp: number, newText: number = 0, model: ModelNames = 0): void {
	const setCutscenePedPropVariation_result = Citizen.invokeNative<void>('0x60A0A4CD710160D5', sceneHandle, position, newProp, newText, model);
	return setCutscenePedPropVariation_result;
}