/**
 * NETWORK:NETWORK_CAN_BAIL
 *
 * 0xF08B45C0CEBE11C2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanBail(): boolean {
	const networkCanBail_result = Citizen.invokeNative<boolean>('0xF08B45C0CEBE11C2', );
	return networkCanBail_result;
}