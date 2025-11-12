import { EDecoratorTypes } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_REGISTER
 *
 * 0x93900D232987104E

 * 
 * https://alloc8or.re/gta5/doc/enums/eDecorType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} decoratorName
 * @param {EDecoratorTypes} type
 */
export function decorRegister(decoratorName: string, type: EDecoratorTypes | number): void {
	const decorRegister_result = Citizen.invokeNative<void>('0x93900D232987104E', decoratorName, type);
	return decorRegister_result;
}