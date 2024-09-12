import { IntRef } from '@ivanzaida/structures'

/**
 * FILES:GET_FORCED_PROP
 *
 * 0x24F0ED4836CD2E4D

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} forcedProp
 * @param {IntRef} forcedPropNameHash [Ref]
 * @param {IntRef} forcedPropEnumValue [Ref]
 * @param {IntRef} forcedPropAnchor [Ref]
 */
export function getForcedProp(nameHash: number, forcedProp: number, forcedPropNameHash: IntRef /* ptr */, forcedPropEnumValue: IntRef /* ptr */, forcedPropAnchor: IntRef /* ptr */): void {
	const getForcedProp_result = Citizen.invokeNative<void>('0x24F0ED4836CD2E4D', nameHash, forcedProp, forcedPropNameHash.dataView, forcedPropEnumValue.dataView, forcedPropAnchor.dataView);
	return getForcedProp_result;
}