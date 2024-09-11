/**
 * CFX:FLAG_SERVER_AS_PRIVATE
 *
 * 0X13B6855D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} private_
 */
export function flagServerAsPrivate(private_: boolean): void {
	const flagServerAsPrivate_result = Citizen.invokeNative<void>('0X13B6855D', private_);
	return flagServerAsPrivate_result;
}