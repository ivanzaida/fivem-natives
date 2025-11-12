import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_LEAVE_PED_BEHIND_BEFORE_WARP
 *
 * 0x520FABA37BE687A7

 * 
 * Leave an AI ped behind in place of the player when they are being warped to a new location
 * 
 * p4 and p5 are always 0 in scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} killPed
 * @param {boolean} keepPickups If true then any portable pickups attached to the player are kept attached to him, otherwise they are detached
 */
export function networkLeavePedBehindBeforeWarp(player: PlayerIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number, killPed: boolean = false, keepPickups: boolean = false): void {
	const networkLeavePedBehindBeforeWarp_result = Citizen.invokeNative<void>('0x520FABA37BE687A7', player, newCoorsX, newCoorsY, newCoorsZ, killPed, keepPickups);
	return networkLeavePedBehindBeforeWarp_result;
}