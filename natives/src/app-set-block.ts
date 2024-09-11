/**
 * APP:APP_SET_BLOCK
 *
 * 0x1E0C7CB82F66748E

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 */
export function appSetBlock(name: string): void {
	const appSetBlock_result = Citizen.invokeNative<void>('0x1E0C7CB82F66748E', name);
	return appSetBlock_result;
}