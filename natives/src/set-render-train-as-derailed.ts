import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_RENDER_TRAIN_AS_DERAILED
 *
 * 0xF66F8D9F1877E201

 * 
 * If this value is set to true the carriages will be rendered at a slight random angle. This will make it look like the train has derailed.
 * In every other way the train is a normal train and it can still move. The player can still get on it etc.
 * 
 * Makes the train all jumbled up and derailed as it moves on the tracks (though that wont stop it from its normal operations)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train
 * @param {boolean} val
 */
export function setRenderTrainAsDerailed(train: VehicleIndex, val: boolean): void {
	const setRenderTrainAsDerailed_result = Citizen.invokeNative<void>('0xF66F8D9F1877E201', train, val);
	return setRenderTrainAsDerailed_result;
}