/**
 * NETWORK:NETWORK_LAUNCH_TRANSITION
 *
 * 0x7FF4763F9198B0EE

 * 
 * This will establish the transition session as the new 'main' session.
 * The existing session (if this exists) will be closed and the transition
 * session will become 'solid'
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkLaunchTransition(): boolean {
	const networkLaunchTransition_result = Citizen.invokeNative<boolean>('0x7FF4763F9198B0EE', );
	return networkLaunchTransition_result;
}