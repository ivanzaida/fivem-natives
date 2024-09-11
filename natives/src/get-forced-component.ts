import { IntRef } from '@ivanzaida/structures'

/**
 * FILES:GET_FORCED_COMPONENT
 *
 * 0xCF4D7500E7DA5D8E

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} forcedComponent
 * @param {IntRef} forcedComponentNameHash [Ref]
 * @param {IntRef} forcedComponentEnumValue [Ref]
 * @param {IntRef} forcedComponentType [Ref]
 */
export function getForcedComponent(nameHash: number, forcedComponent: number, forcedComponentNameHash: IntRef /* ptr */, forcedComponentEnumValue: IntRef /* ptr */, forcedComponentType: IntRef /* ptr */): void {
	const getForcedComponent_result = Citizen.invokeNative<void>('0xCF4D7500E7DA5D8E', nameHash, forcedComponent, forcedComponentNameHash.dataView, forcedComponentEnumValue.dataView, forcedComponentType.dataView);
	return getForcedComponent_result;
}