import { ModelNames } from '@ivanzaida/structures'

/**
 * HUD:LINK_NAMED_RENDERTARGET
 *
 * 0xF1C26EB47E689774

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHash
 */
export function linkNamedRendertarget(modelHash: ModelNames): void {
	const linkNamedRendertarget_result = Citizen.invokeNative<void>('0xF1C26EB47E689774', modelHash);
	return linkNamedRendertarget_result;
}