import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * STREAMING:REQUEST_MODELS_IN_ROOM
 *
 * 0x65694862DDC9E5D0

 * 
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "V_FIB01_cur_elev");
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "V_Office_gnd_lifts");
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BB, "limbo");
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "v_fib01_jan_elev");
 * STREAMING::REQUEST_MODELS_IN_ROOM(l_13BC, "limbo");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {string} roomName
 */
export function requestModelsInRoom(interiorInstance: InteriorInstanceIndex, roomName: string): void {
	const requestModelsInRoom_result = Citizen.invokeNative<void>('0x65694862DDC9E5D0', interiorInstance, roomName);
	return requestModelsInRoom_result;
}