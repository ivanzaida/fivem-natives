import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_COLLECT_DROPPED_MONEY
 *
 * 0x66831E1107966731

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} canCollect
 */
export function setPlayerCanCollectDroppedMoney(player: PlayerIndex, canCollect: boolean): void {
	const setPlayerCanCollectDroppedMoney_result = Citizen.invokeNative<void>('0x66831E1107966731', player, canCollect);
	return setPlayerCanCollectDroppedMoney_result;
}