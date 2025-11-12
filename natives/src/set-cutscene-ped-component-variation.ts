import { EPedComponent, ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_CUTSCENE_PED_COMPONENT_VARIATION
 *
 * 0xFE61105198EA3496

 * 
 * Always apply this to the CS version, all cs variations will be copied to the ig version, if one is present.
 * Use CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY to be sure that the variation request has been made
 * as this command only returns true FOR A SINGLE FRAME.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneHandle
 * @param {EPedComponent} component
 * @param {number} drawable
 * @param {number} textureID
 * @param {ModelNames} model
 */
export function setCutscenePedComponentVariation(sceneHandle: string, component: EPedComponent | number, drawable: number, textureID: number, model: ModelNames = 0): void {
	const setCutscenePedComponentVariation_result = Citizen.invokeNative<void>('0xFE61105198EA3496', sceneHandle, component, drawable, textureID, model);
	return setCutscenePedComponentVariation_result;
}