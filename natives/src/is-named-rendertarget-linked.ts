import { ModelNames } from '@ivanzaida/structures'

/**
 * HUD:IS_NAMED_RENDERTARGET_LINKED
 *
 * 0x4D05B3FECBCB8D97

 * 
 * Return true if a named render tatget has been linked.
 * Use after calling LINK_NAMED_RENDERTARGET to make sure the render target
 * could be linked to the model. If this function returns false, script should
 * release the render target
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHash
 * @returns {boolean}  
 */
export function isNamedRendertargetLinked(modelHash: ModelNames): boolean {
	const isNamedRendertargetLinked_result = Citizen.invokeNative<boolean>('0x4D05B3FECBCB8D97', modelHash);
	return isNamedRendertargetLinked_result;
}