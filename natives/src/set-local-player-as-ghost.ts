/**
 * NETWORK:SET_LOCAL_PLAYER_AS_GHOST
 *
 * 0x3DDE6E86B8024EEE

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 * @param {boolean} invertGhosting Is set to TRUE and bSet is TRUE, then the local player will be displayed semitransparent instead (remote players will be rendered as normal)
 */
export function setLocalPlayerAsGhost(set: boolean, invertGhosting: boolean = false): void {
	const setLocalPlayerAsGhost_result = Citizen.invokeNative<void>('0x3DDE6E86B8024EEE', set, invertGhosting);
	return setLocalPlayerAsGhost_result;
}