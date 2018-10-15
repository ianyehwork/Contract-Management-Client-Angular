import { QuestionBase } from './question-base';
/**
 * The object model that support multiple HTML5 <input> types.
 */
export class RadioQuestion extends QuestionBase<string> {
  
  /** 
   * This field is used to render a group of <input type="radio"> tag
   */
  controlType = 'radio';

  /** 
   * This field is used to render the values for each radio button 
   */
  values: string[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.values = options['values'] || [];
  }
}
