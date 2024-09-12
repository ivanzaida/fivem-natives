/**
 * NETWORK:UGC_CANCEL_QUERY
 *
 * 0xF44BFA38C25D7F65

 * 
 * ------------------------------------------------------------------
 */
export function ugcCancelQuery(): void {
	const ugcCancelQuery_result = Citizen.invokeNative<void>('0xF44BFA38C25D7F65', );
	return ugcCancelQuery_result;
}