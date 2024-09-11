/**
 * APP:APP_SET_FLOAT
 *
 * 0x177034FB2F5D6CA1

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {number} value
 */
export function appSetFloat(name: string, value: number): void {
	const appSetFloat_result = Citizen.invokeNative<void>('0x177034FB2F5D6CA1', name, value);
	return appSetFloat_result;
}