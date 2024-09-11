/**
 * APP:APP_CLEAR_BLOCK
 *
 * 0xE231BAAA0221F57B

 * 
 * ------------------------------------------------------------------
 */
export function appClearBlock(): void {
	const appClearBlock_result = Citizen.invokeNative<void>('0xE231BAAA0221F57B', );
	return appClearBlock_result;
}