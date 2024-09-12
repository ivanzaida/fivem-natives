import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:FORCE_ROOM_FOR_GAME_VIEWPORT
 *
 * 0xA88C91AADCB02A8A

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {number} roomKey
 */
export function forceRoomForGameViewport(interiorInstance: InteriorInstanceIndex, roomKey: number): void {
	const forceRoomForGameViewport_result = Citizen.invokeNative<void>('0xA88C91AADCB02A8A', interiorInstance, roomKey);
	return forceRoomForGameViewport_result;
}