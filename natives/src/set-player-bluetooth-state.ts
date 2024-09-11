import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_BLUETOOTH_STATE
 *
 * 0x7B537987214FC5A3

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} state
 */
export function setPlayerBluetoothState(player: PlayerIndex, state: boolean): void {
	const setPlayerBluetoothState_result = Citizen.invokeNative<void>('0x7B537987214FC5A3', player, state);
	return setPlayerBluetoothState_result;
}