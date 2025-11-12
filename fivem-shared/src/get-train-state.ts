import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_STATE
 *
 * 0x81B50033

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The trains current state

```c
enum eTrainState
{
    MOVING = 0,
    ENTERING_STATION,
    OPENING_DOORS,
    STOPPED,
    CLOSING_DOORS,
    LEAVING_STATION,
}
```
 */
export function getTrainState(train: VehicleIndex): number {
	const getTrainState_result = Citizen.invokeNative<number>('0x81B50033', train);
	return getTrainState_result;
}