/**
 * APP:APP_DATA_VALID
 *
 * 0xEF61EA953D7D9120

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function appDataValid(): boolean {
	const appDataValid_result = Citizen.invokeNative<boolean>('0xEF61EA953D7D9120', );
	return appDataValid_result;
}