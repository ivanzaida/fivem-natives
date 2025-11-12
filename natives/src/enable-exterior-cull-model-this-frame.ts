import { ModelNames } from '@ivanzaida/structures'

/**
 * INTERIOR:ENABLE_EXTERIOR_CULL_MODEL_THIS_FRAME
 *
 * 0xCBC55350FF75F537

 * 
 * culls exterior objects from rendering (gbuf only) by model name
 * 
 * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
 * 
 * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelNameHash
 */
export function enableExteriorCullModelThisFrame(modelNameHash: ModelNames): void {
	const enableExteriorCullModelThisFrame_result = Citizen.invokeNative<void>('0xCBC55350FF75F537', modelNameHash);
	return enableExteriorCullModelThisFrame_result;
}