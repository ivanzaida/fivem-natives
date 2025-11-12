import { EDecoratorTypes } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_IS_REGISTERED_AS_TYPE
 *
 * 0x77B62CAA5DF0922A

 * 
 * type: see DECOR_REGISTER
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} decoratorName
 * @param {EDecoratorTypes} type
 * @returns {boolean}  
 */
export function decorIsRegisteredAsType(decoratorName: string, type: EDecoratorTypes | number): boolean {
	const decorIsRegisteredAsType_result = Citizen.invokeNative<boolean>('0x77B62CAA5DF0922A', decoratorName, type);
	return decorIsRegisteredAsType_result;
}