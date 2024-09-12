/**
 * NETWORK:NETWORK_SESSION_LEAVE
 *
 * 0x8FFE1F924EF00340

 * 
 * ------------------------------------------------------------------
 * @param {number} leaveFlags
 * @returns {boolean}  
 */
export function networkSessionLeave(leaveFlags: number): boolean {
	const networkSessionLeave_result = Citizen.invokeNative<boolean>('0x8FFE1F924EF00340', leaveFlags);
	return networkSessionLeave_result;
}