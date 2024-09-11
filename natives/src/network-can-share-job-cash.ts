/**
 * MONEY:NETWORK_CAN_SHARE_JOB_CASH
 *
 * 0x411B5B7270967776

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanShareJobCash(): boolean {
	const networkCanShareJobCash_result = Citizen.invokeNative<boolean>('0x411B5B7270967776', );
	return networkCanShareJobCash_result;
}