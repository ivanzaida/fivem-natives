import { PedIndex, ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_CUTSCENE_PED_COMPONENT_VARIATION_FROM_PED
 *
 * 0x2F19C4305F0B8DA7

 * 
 * Always apply this to the CS version, all cs variations will be copied to the ig version, if one is present.
 * Use CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY to be sure that the variation request has been made
 * as this command only returns true FOR A SINGLE FRAME.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneHandle
 * @param {PedIndex} sourcePed
 * @param {ModelNames} model
 */
export function setCutscenePedComponentVariationFromPed(sceneHandle: string, sourcePed: PedIndex, model: ModelNames = 0): void {
	const setCutscenePedComponentVariationFromPed_result = Citizen.invokeNative<void>('0x2F19C4305F0B8DA7', sceneHandle, sourcePed, model);
	return setCutscenePedComponentVariationFromPed_result;
}