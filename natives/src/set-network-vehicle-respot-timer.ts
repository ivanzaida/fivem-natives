import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_VEHICLE_RESPOT_TIMER
 *
 * 0x48E5EEFE68D01C56

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {number} timer
 * @param {boolean} flashRemotely
 * @param {boolean} flashLocally
 */
export function setNetworkVehicleRespotTimer(networkId: NetworkIndex, timer: number, flashRemotely: boolean = true, flashLocally: boolean = false): void {
	const setNetworkVehicleRespotTimer_result = Citizen.invokeNative<void>('0x48E5EEFE68D01C56', networkId, timer, flashRemotely, flashLocally);
	return setNetworkVehicleRespotTimer_result;
}