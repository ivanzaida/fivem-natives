import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_BLUETOOTH_ENABLE
 *
 * 0x86A327F828FE34D1

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerBluetoothEnable(player: PlayerIndex): boolean {
	const isPlayerBluetoothEnable_result = Citizen.invokeNative<boolean>('0x86A327F828FE34D1', player);
	return isPlayerBluetoothEnable_result;
}