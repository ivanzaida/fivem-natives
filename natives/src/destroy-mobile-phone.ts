/**
 * MOBILE:DESTROY_MOBILE_PHONE
 *
 * 0x5F2E2CEDE90F627E

 * 
 * Destroys the currently active mobile phone.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function destroyMobilePhone(): void {
	const destroyMobilePhone_result = Citizen.invokeNative<void>('0x5F2E2CEDE90F627E', );
	return destroyMobilePhone_result;
}