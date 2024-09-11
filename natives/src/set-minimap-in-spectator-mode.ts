import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_MINIMAP_IN_SPECTATOR_MODE
 *
 * 0x4BDB60141FD6E156

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 * @param {PedIndex} entity
 */
export function setMinimapInSpectatorMode(onOff: boolean, entity: PedIndex = null!): void {
	const setMinimapInSpectatorMode_result = Citizen.invokeNative<void>('0x4BDB60141FD6E156', onOff, entity);
	return setMinimapInSpectatorMode_result;
}