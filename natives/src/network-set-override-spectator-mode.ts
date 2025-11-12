/**
 * NETWORK:NETWORK_SET_OVERRIDE_SPECTATOR_MODE
 *
 * 0x3D203A4099538B41

 * 
 * By default, players cannot chat with players in the same team when spectating. This allows that to be overridden.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkSetOverrideSpectatorMode(override: boolean): void {
	const networkSetOverrideSpectatorMode_result = Citizen.invokeNative<void>('0x3D203A4099538B41', override);
	return networkSetOverrideSpectatorMode_result;
}