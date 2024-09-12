/**
 * APP:APP_SET_INT
 *
 * 0xB0263DDA967C39ED

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {number} value
 */
export function appSetInt(name: string, value: number): void {
	const appSetInt_result = Citizen.invokeNative<void>('0xB0263DDA967C39ED', name, value);
	return appSetInt_result;
}