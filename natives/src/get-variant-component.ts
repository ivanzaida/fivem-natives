import { IntRef } from '@ivanzaida/structures'

/**
 * FILES:GET_VARIANT_COMPONENT
 *
 * 0x0249B53AB91BF9D0

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} variantComponent
 * @param {IntRef} variantComponentNameHash [Ref]
 * @param {IntRef} variantComponentEnumValue [Ref]
 * @param {IntRef} variantComponentType [Ref]
 */
export function getVariantComponent(nameHash: number, variantComponent: number, variantComponentNameHash: IntRef /* ptr */, variantComponentEnumValue: IntRef /* ptr */, variantComponentType: IntRef /* ptr */): void {
	const getVariantComponent_result = Citizen.invokeNative<void>('0x0249B53AB91BF9D0', nameHash, variantComponent, variantComponentNameHash.dataView, variantComponentEnumValue.dataView, variantComponentType.dataView);
	return getVariantComponent_result;
}