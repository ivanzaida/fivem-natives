import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLONE_PED_TO_TARGET_ALT
 *
 * 0xCA1E369E8B71BF45

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedIndexSource
 * @param {PedIndex} pedIndexTarget
 * @param {boolean} cloneCompressedDamage True=clone shares compressed damage (default), false=clone has no compressed damage
 */
export function clonePedToTargetAlt(pedIndexSource: PedIndex, pedIndexTarget: PedIndex, cloneCompressedDamage: boolean = true): void {
	const clonePedToTargetAlt_result = Citizen.invokeNative<void>('0xCA1E369E8B71BF45', pedIndexSource, pedIndexTarget, cloneCompressedDamage);
	return clonePedToTargetAlt_result;
}