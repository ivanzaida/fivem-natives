/**
 * NETWORK:NETWORK_SET_DO_NOT_LAUNCH_FROM_JOIN_AS_MIGRATED_HOST
 *
 * 0xA1DA526BBDEF1146

 * 
 * Appears to set whether a transition should be started when the session is migrating.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} launch
 */
export function networkSetDoNotLaunchFromJoinAsMigratedHost(launch: boolean): void {
	const networkSetDoNotLaunchFromJoinAsMigratedHost_result = Citizen.invokeNative<void>('0xA1DA526BBDEF1146', launch);
	return networkSetDoNotLaunchFromJoinAsMigratedHost_result;
}