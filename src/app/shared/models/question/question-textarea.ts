import { QuestionBase } from './question-base';
/**
 * The object model that support multiple HTML5 <input> types.
 */
export class TextAreaQuestion extends QuestionBase<string> {
  
  /** 
   * This field is used to render the <input> tag
   */
  controlType = 'textarea';

  /**
   * TextArea attributes
   */
  rows: string;
  cols: string;

  constructor(options: {} = {}) {
    super(options);
    this.rows = options['rows'] || '4';
    this.cols = options['cols'] || '50';
  }
}
