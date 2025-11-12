import { ModelNames } from '@ivanzaida/structures'

/**
 * INTERIOR:ENABLE_SHADOW_CULL_MODEL_THIS_FRAME
 *
 * 0x8B8D24263DAB0736

 * 
 * culls exterior objects from rendering (cascade shadows only) by model name
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelNameHash
 */
export function enableShadowCullModelThisFrame(modelNameHash: ModelNames): void {
	const enableShadowCullModelThisFrame_result = Citizen.invokeNative<void>('0x8B8D24263DAB0736', modelNameHash);
	return enableShadowCullModelThisFrame_result;
}