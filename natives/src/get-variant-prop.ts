import { IntRef } from '@ivanzaida/structures'

/**
 * FILES:GET_VARIANT_PROP
 *
 * 0x5C6B8DD2E15C6B3C

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} variantProp
 * @param {IntRef} variantPropNameHash [Ref]
 * @param {IntRef} variantPropEnumValue [Ref]
 * @param {IntRef} variantPropAnchor [Ref]
 */
export function getVariantProp(nameHash: number, variantProp: number, variantPropNameHash: IntRef /* ptr */, variantPropEnumValue: IntRef /* ptr */, variantPropAnchor: IntRef /* ptr */): void {
	const getVariantProp_result = Citizen.invokeNative<void>('0x5C6B8DD2E15C6B3C', nameHash, variantProp, variantPropNameHash.dataView, variantPropEnumValue.dataView, variantPropAnchor.dataView);
	return getVariantProp_result;
}