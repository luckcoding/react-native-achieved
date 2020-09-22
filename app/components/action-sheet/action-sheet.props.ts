import {IActionSheetOptions} from './action-sheet.context';

export interface ActionSheetProps extends IActionSheetOptions {
  visibile?: boolean;
  onHide?: () => void;
}
