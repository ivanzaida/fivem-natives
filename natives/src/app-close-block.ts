/**
 * APP:APP_CLOSE_BLOCK
 *
 * 0x43183279AE613B06

 * 
 * ------------------------------------------------------------------
 */
export function appCloseBlock(): void {
	const appCloseBlock_result = Citizen.invokeNative<void>('0x43183279AE613B06', );
	return appCloseBlock_result;
}