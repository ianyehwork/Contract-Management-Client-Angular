import { QuestionBase } from './question-base';
/**
 * The object model that support multiple HTML5 <input> types.
 */
export class CheckBoxQuestion extends QuestionBase<string[]> {
  
  /** 
   * This field is used to render a group of <input type="checkbox"> tag
   */
  controlType = 'checkbox';

  /** 
   * This field is used to render the <input type="checkbox"> tag
   */
  values: string[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.values = options['values'] || [];
  }
}
