/**
 * NETWORK:NETWORK_RESURRECT_LOCAL_PLAYER
 *
 * 0xF24C94A1C99DA4AB

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} heading
 * @param {number} invicibilityTime This is the length of time in millisecs that the player will be invincible for after resurrection
 * @param {boolean} leaveDeadPed
 * @param {boolean} unpauseRenderPhase
 * @param {number} spawnLocation Enum PLAYER_SPAWN_LOCATION for telemetry spawnRason  enum for telemetry
 * @param {number} spawnReason
 */
export function networkResurrectLocalPlayer(posX: number, posY: number, posZ: number, heading: number, invicibilityTime: number = 0, leaveDeadPed: boolean = true, unpauseRenderPhase: boolean = true, spawnLocation: number = 1, spawnReason: number = 1): void {
	const networkResurrectLocalPlayer_result = Citizen.invokeNative<void>('0xF24C94A1C99DA4AB', posX, posY, posZ, heading, invicibilityTime, leaveDeadPed, unpauseRenderPhase, spawnLocation, spawnReason);
	return networkResurrectLocalPlayer_result;
}