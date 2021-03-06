import { BlockProcessorResult } from "../block-processor";
import { BlockHandler } from "./block-handler";

export class AlreadyForgedHandler extends BlockHandler {
    public async execute(): Promise<BlockProcessorResult> {
        super.execute();
        return BlockProcessorResult.DiscardedButCanBeBroadcasted;
    }
}
