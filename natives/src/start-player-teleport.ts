import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:START_PLAYER_TELEPORT
 *
 * 0xCB7327FDCE6757E1

 * 
 * This function handles map and population loading. UPDATE_PLAYER_TELEPORT should be queried for completion.
 * 
 * `findCollisionLand`: This teleports the player to land when set to true and will not consider the Z coordinate parameter provided by you. It will automatically put the Z coordinate so that you don't fall from sky.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} heading
 * @param {boolean} teleportVehicle
 * @param {boolean} snapToGround
 * @param {boolean} fadePlayerOut
 */
export function startPlayerTeleport(player: PlayerIndex, coorsX: number, coorsY: number, coorsZ: number, heading: number, teleportVehicle: boolean = true, snapToGround: boolean = true, fadePlayerOut: boolean = true): void {
	const startPlayerTeleport_result = Citizen.invokeNative<void>('0xCB7327FDCE6757E1', player, coorsX, coorsY, coorsZ, heading, teleportVehicle, snapToGround, fadePlayerOut);
	return startPlayerTeleport_result;
}